// GitHub Token 订阅配置模块
// 负责：本地存储 Token、验证权限、更新按钮与信息区状态

window.SubscriptionsGithubToken = (function () {
  const LOCAL_CONFIG_STORAGE_KEY = 'dpr_local_config_yaml_v1';

  const isLocalDebugHost = () => {
    const host = String((window.location && window.location.hostname) || '').toLowerCase();
    return host === 'localhost' || host === '127.0.0.1' || host === '::1';
  };

  const getLocalApiUrl = (path) => {
    const base = String(window.DPR_LOCAL_API_BASE || '').trim().replace(/\/$/, '');
    if (base) return `${base}${path}`;
    const protocol = String((window.location && window.location.protocol) || 'http:');
    const hostname = String((window.location && window.location.hostname) || '127.0.0.1');
    return `${protocol}//${hostname}:8567${path}`;
  };

  const loadLocalConfigOverride = () => {
    if (!isLocalDebugHost()) return null;
    try {
      if (!window.localStorage) return null;
      const raw = window.localStorage.getItem(LOCAL_CONFIG_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed.config === 'object' ? parsed : null;
    } catch (e) {
      console.error('Failed to load local config override:', e);
      return null;
    }
  };

  const saveLocalConfigOverride = (configObject, commitMessage) => {
    if (!isLocalDebugHost()) return null;
    const payload = {
      config: configObject || {},
      source: 'localStorage',
      message: commitMessage || 'local dashboard config save',
      savedAt: new Date().toISOString(),
    };
    try {
      if (!window.localStorage) {
        throw new Error('当前浏览器不支持 localStorage。');
      }
      window.localStorage.setItem(LOCAL_CONFIG_STORAGE_KEY, JSON.stringify(payload));
      return payload;
    } catch (e) {
      console.error('Failed to save local config override:', e);
      throw e;
    }
  };

  const loadLocalConfigFromDisk = async () => {
    if (!isLocalDebugHost()) return null;
    const res = await fetch(getLocalApiUrl('/api/local/config'), { cache: 'no-store' });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`读取本地 config.yaml 失败：HTTP ${res.status}${text ? ` - ${text}` : ''}`);
    }
    const data = await res.json().catch(() => ({}));
    if (!data || data.ok === false) {
      throw new Error((data && data.error) || '读取本地 config.yaml 失败。');
    }
    const yaml = window.jsyaml || window.jsYaml || window.jsYAML;
    if (!yaml || typeof yaml.load !== 'function') {
      throw new Error('前端缺少 YAML 解析库（js-yaml），无法解析 config.yaml。');
    }
    const cfg = yaml.load(data.content || '') || {};
    return {
      config: cfg,
      sha: null,
      source: data.path || 'local-disk',
      localOnly: true,
      savedAt: data.savedAt || '',
    };
  };

  const saveLocalConfigToDisk = async (configObject, commitMessage) => {
    if (!isLocalDebugHost()) return null;
    const safeConfig = configObject || {};
    const res = await fetch(getLocalApiUrl('/api/local/config'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        config: safeConfig,
        message: commitMessage || 'local dashboard config save',
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      throw new Error((data && data.error) || `写入本地 config.yaml 失败：HTTP ${res.status}`);
    }
    saveLocalConfigOverride(safeConfig, commitMessage);
    return {
      config: safeConfig,
      source: data.path || 'local-disk',
      localOnly: true,
      savedAt: data.savedAt || new Date().toISOString(),
    };
  };

  // 从本地存储加载 GitHub Token 数据
  const loadGithubToken = () => {
    try {
      const tokenData = localStorage.getItem('github_token_data');
      if (tokenData) {
        const data = JSON.parse(tokenData);
        return data;
      }
    } catch (e) {
      console.error('Failed to load GitHub token:', e);
    }
    return null;
  };

  // 保存 GitHub Token 数据到本地存储
  const saveGithubToken = (data) => {
    try {
      localStorage.setItem('github_token_data', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save GitHub token:', e);
    }
  };

  // 清除 GitHub Token 数据
  const clearGithubToken = () => {
    try {
      localStorage.removeItem('github_token_data');
    } catch (e) {
      console.error('Failed to clear GitHub token:', e);
    }
  };

  const readConfigYamlForRepo = async () => {
    const yaml = window.jsyaml || window.jsYaml || window.jsYAML;
    if (!yaml || typeof yaml.load !== 'function') {
      return null;
    }
    const candidates = ['config.yaml', 'docs/config.yaml', '../config.yaml', '/config.yaml'];
    for (const url of candidates) {
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) continue;
        const text = await res.text();
        const cfg = yaml.load(text || '') || {};
        const githubCfg = (cfg && cfg.github) || {};
        if (githubCfg && typeof githubCfg === 'object') {
          const owner = String(githubCfg.owner || '').trim();
          const repo = String(githubCfg.repo || '').trim();
          if (owner || repo) {
            return { owner, repo };
          }
        }
      } catch {
        // ignore
      }
    }
    return null;
  };

  const readRepoOwnerJson = async () => {
    const candidates = ['.repo-owner.json', 'docs/.repo-owner.json', '/.repo-owner.json'];
    for (const url of candidates) {
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) continue;
        const data = await res.json();
        if (data && data.owner && data.repo) return data;
      } catch { }
    }
    return null;
  };

  // 验证 GitHub Token 并检查权限
  const verifyGithubToken = async (token, options = {}) => {
    try {
      const result = await window.DPRGithubAccess.verify(token);
      // Never infer a different repository from config.yaml or another URL.
      const url = new URL(window.location.href);
      const meta = await readRepoOwnerJson();
      if (meta) window.DPRGithubAccess.assertRepo(meta.owner, meta.repo);
      if (url.hostname.endsWith('.github.io')) {
        window.DPRGithubAccess.assertRepo(url.hostname.split('.')[0], url.pathname.split('/')[1]);
      }
      return { valid: true, ...result };
    } catch (error) {
      return { valid: false, error: error.message || String(error) };
    }
  };

  // 优先从密钥配置（secret.private 解密后的 decoded_secret_private）中获取 GitHub Token；
  // 若不存在，则回退到旧的本地存储 Token。
  const getTokenForConfig = () => {
    const secret = window.decoded_secret_private || {};
    if (secret.github && secret.github.token) {
      return String(secret.github.token || '').trim();
    }
    const tokenData = loadGithubToken();
    if (tokenData && tokenData.token) {
      return String(tokenData.token || '').trim();
    }
    return null;
  };

  // 基于 Token 推断仓库 owner/name（复用 verifyGithubToken 的逻辑）
  const resolveRepoInfoFromToken = async (token, requireWorkflow = true) => {
    const result = await verifyGithubToken(token, { requireWorkflow });
    if (!result.valid) {
      throw new Error(
        `GitHub Token 验证失败：${result.error || '原因未知'}`,
      );
    }
    if (!result.repo || !result.repo.includes('/')) {
      throw new Error('无法从 GitHub Token 推断有效的仓库信息');
    }
    const parts = result.repo.split('/');
    const owner = parts[0];
    const repo = parts[1];
    return { owner, repo, token };
  };

  // 通过 GitHub API 读取 config.yaml（用于保存时获取最新 sha）
  const loadConfigFromGithub = async () => {
    const token = getTokenForConfig();
    if (!token) {
      throw new Error('未配置有效的 GitHub Token，请先完成首页的新配置指引。');
    }
    const info = await resolveRepoInfoFromToken(token, false);
    const res = await fetch(
      `https://api.github.com/repos/${info.owner}/${info.repo}/contents/config.yaml`,
      {
        headers: {
          Authorization: `token ${info.token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      },
    );
    if (!res.ok) {
      throw new Error('无法读取 config.yaml，请确认文件已存在且 Token 有权限。');
    }
    const data = await res.json();
    const rawBase64 = (data.content || '').replace(/\n/g, '');
    // 使用 UTF-8 解码 base64，避免包含中文时出现乱码
    let content = '';
    try {
      const binary = atob(rawBase64);
      // 兼容旧浏览器：优先使用 TextDecoder，其次使用 escape/decodeURIComponent 方案
      if (window.TextDecoder) {
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i += 1) {
          bytes[i] = binary.charCodeAt(i);
        }
        content = new TextDecoder('utf-8').decode(bytes);
      } else {
        // eslint-disable-next-line no-escape
        content = decodeURIComponent(escape(binary));
      }
    } catch (e) {
      console.error('Failed to decode config.yaml content from GitHub:', e);
      content = '';
    }
    const yaml = window.jsyaml || window.jsYaml || window.jsYAML;
    if (!yaml || typeof yaml.load !== 'function') {
      throw new Error('前端缺少 YAML 解析库（js-yaml），无法解析 config.yaml。');
    }
    const cfg = yaml.load(content) || {};
    return { config: cfg, sha: data.sha };
  };

  // 从当前站点相对路径读取 config.yaml（无需 GitHub Token，仅用于前端展示）
  // 注意：GitHub Pages 通常是 https://<user>.github.io/<repo>/，因此不能用绝对路径 /config.yaml（会指向域名根）。
  const loadConfig = async () => {
    try {
      if (isLocalDebugHost()) {
        try {
          return await loadLocalConfigFromDisk();
        } catch (diskError) {
          console.warn('读取本地磁盘 config.yaml 失败，回退 localStorage：', diskError);
          const localOverride = loadLocalConfigOverride();
          if (localOverride) {
            return {
              config: localOverride.config || {},
              sha: null,
              source: 'localStorage',
              localOnly: true,
              savedAt: localOverride.savedAt || '',
            };
          }
        }
      }

      const candidates = [
        'config.yaml',
        'docs/config.yaml',
        '../config.yaml',
      ];

      let lastError = null;
      for (const url of candidates) {
        try {
          const res = await fetch(url, { cache: 'no-store' });
          if (!res.ok) {
            lastError = new Error(`无法读取 ${url}（HTTP ${res.status}）`);
            continue;
          }
          const text = await res.text();
          const yaml = window.jsyaml || window.jsYaml || window.jsYAML;
          if (!yaml || typeof yaml.load !== 'function') {
            throw new Error('前端缺少 YAML 解析库（js-yaml），无法解析 config.yaml。');
          }
          const cfg = yaml.load(text || '') || {};
          return { config: cfg, sha: null, source: url };
        } catch (e) {
          lastError = e;
        }
      }
      throw lastError || new Error('无法读取本地 config.yaml（未知原因）');
    } catch (e) {
      console.error('从站点读取 config.yaml 失败：', e);
      throw e;
    }
  };

  // 更新 config.yaml：接收一个 updater(config) 回调，返回新的 config 对象
  const updateConfig = async (updater, commitMessage = 'chore: update config.yaml from dashboard') => {
    if (isLocalDebugHost()) {
      const { config: current } = await loadConfig();
      const next = typeof updater === 'function' ? updater({ ...(current || {}) }) || current : current;
      return saveLocalConfigToDisk(next, commitMessage);
    }

    const token = getTokenForConfig();
    if (!token) {
      throw new Error('未配置有效的 GitHub Token，请先完成首页的新配置指引。');
    }
    const info = await resolveRepoInfoFromToken(token, false);
    const { config: current, sha } = await loadConfigFromGithub();
    const next = typeof updater === 'function' ? updater({ ...(current || {}) }) || current : current;
    const yaml = window.jsyaml || window.jsYaml || window.jsYAML;
    if (!yaml || typeof yaml.dump !== 'function') {
      throw new Error('前端缺少 YAML 序列化库（js-yaml），无法写入 config.yaml。');
    }
    const newContent = yaml.dump(next, { lineWidth: 120 });
    const body = {
      message: commitMessage,
      content: btoa(unescape(encodeURIComponent(newContent))),
      sha,
    };
    const res = await fetch(
      `https://api.github.com/repos/${info.owner}/${info.repo}/contents/config.yaml`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${info.token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(
        `写入 config.yaml 失败：${res.status} ${res.statusText} - ${text}`,
      );
    }
    return res.json();
  };

  // 使用给定的 config 对象保存到远端 config.yaml（用于“保存”按钮）
  const saveConfig = async (configObject, commitMessage = 'chore: save dashboard config from panel') => {
    if (isLocalDebugHost()) {
      return saveLocalConfigToDisk(configObject || {}, commitMessage);
    }

    const token = getTokenForConfig();
    if (!token) {
      throw new Error('未配置有效的 GitHub Token，请先完成首页的新配置指引。');
    }
    const info = await resolveRepoInfoFromToken(token, false);
    // 仅用于获取当前文件的 sha
    const { sha } = await loadConfigFromGithub();
    const yaml = window.jsyaml || window.jsYaml || window.jsYAML;
    if (!yaml || typeof yaml.dump !== 'function') {
      throw new Error('前端缺少 YAML 序列化库（js-yaml），无法写入 config.yaml。');
    }
    const safeConfig = configObject || {};
    const newContent = yaml.dump(safeConfig, { lineWidth: 120 });
    const body = {
      message: commitMessage,
      content: btoa(unescape(encodeURIComponent(newContent))),
      sha,
    };
    const res = await fetch(
      `https://api.github.com/repos/${info.owner}/${info.repo}/contents/config.yaml`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${info.token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(
        `写入 config.yaml 失败：${res.status} ${res.statusText} - ${text}`,
      );
    }
    return res.json();
  };

    const init = (dom) => {
      const {
        githubAuthBtn, // 现在可能为 null，仅用于兼容旧调用
        githubTokenSection,
      githubTokenInput,
      githubTokenToggleBtn,
      githubTokenVerifyBtn,
      githubTokenClearBtn,
      githubTokenMessage,
      githubTokenInfo,
      githubUserName,
      githubRepoName,
    } = dom;

    // 公共：渲染“验证成功”提示信息
    const renderSuccessMessage = (data) => {
      if (!githubTokenMessage) return;
      const scopes = Array.isArray(data.scopes) ? data.scopes : [];
      githubTokenMessage.innerHTML = `
        <div style="color:#28a745; font-size:12px; line-height:1.6;">
          <strong>✅ 验证成功！</strong><br>
          用户: ${data.login || ''}<br>
          仓库: ${data.repo || ''}<br>
          权限: ${scopes.join(', ')}<br>
          读取访问已验证；写入权限在保存时验证。<br>
          请在 GitHub 中仅选择 sekire4/daily-paper-reader。Gist 分享: 已关闭
        </div>
      `;
    };

    // 更新登录按钮状态（兼容旧逻辑；若没有按钮则直接忽略）
    const updateAuthButtonStatus = () => {
      if (!githubAuthBtn) return;
      const tokenData = loadGithubToken();
      if (tokenData && tokenData.token && tokenData.verified) {
        githubAuthBtn.textContent = '登录成功';
        githubAuthBtn.style.background = '#28a745';
        githubAuthBtn.style.color = 'white';
      } else {
        githubAuthBtn.textContent = '未登录';
        githubAuthBtn.style.background = '#6c757d';
        githubAuthBtn.style.color = 'white';
      }
    };

    // 显示 Token 信息
    const showTokenInfo = (userData) => {
      if (githubTokenInfo && githubUserName && githubRepoName) {
        githubUserName.textContent = userData.login || 'Unknown';
        githubRepoName.textContent = userData.repo || 'Unknown';
        githubTokenInfo.style.display = 'block';
      }
    };

    // 隐藏 Token 信息
    const hideTokenInfo = () => {
      if (githubTokenInfo) {
        githubTokenInfo.style.display = 'none';
      }
    };

    // 登录按钮点击事件 - 旧逻辑（当前已无按钮，这里仅保留兼容）
    if (githubAuthBtn && !githubAuthBtn._bound) {
      githubAuthBtn._bound = true;
      githubAuthBtn.addEventListener('click', () => {
        if (githubTokenSection.style.display === 'none') {
          githubTokenSection.style.display = 'block';

          const tokenData = loadGithubToken();
          if (tokenData && tokenData.verified) {
            if (githubTokenInput) {
              githubTokenInput.value = tokenData.token || '';
            }
            renderSuccessMessage(tokenData);
            showTokenInfo(tokenData);
          }
        } else {
          githubTokenSection.style.display = 'none';
        }
      });
    }

    // Token 可见性切换
    if (githubTokenToggleBtn && !githubTokenToggleBtn._bound) {
      githubTokenToggleBtn._bound = true;
      githubTokenToggleBtn.addEventListener('click', () => {
        if (githubTokenInput.type === 'password') {
          githubTokenInput.type = 'text';
          githubTokenToggleBtn.textContent = '🙈';
        } else {
          githubTokenInput.type = 'password';
          githubTokenToggleBtn.textContent = '👁️';
        }
      });
    }

    // Token 验证并保存
    if (githubTokenVerifyBtn && !githubTokenVerifyBtn._bound) {
      githubTokenVerifyBtn._bound = true;
      githubTokenVerifyBtn.addEventListener('click', async () => {
        const token = githubTokenInput.value.trim();

        if (!token) {
          githubTokenMessage.innerHTML =
            '<span style="color:#dc3545;">❌ 请输入 GitHub Token</span>';
          return;
        }

        githubTokenVerifyBtn.disabled = true;
        githubTokenVerifyBtn.textContent = '验证中...';
        githubTokenMessage.innerHTML =
          '<span style="color:#666;">正在验证 Token...</span>';
        hideTokenInfo();

        const result = await verifyGithubToken(token);

        if (result.valid) {
          const tokenData = {
            token: token,
            verified: true,
            login: result.login,
            name: result.name,
            repo: result.repo,
            scopes: result.scopes,
            savedAt: new Date().toISOString(),
          };

          saveGithubToken(tokenData);

          renderSuccessMessage(tokenData);

          showTokenInfo(tokenData);
          updateAuthButtonStatus();
          githubTokenInput.value = '';
        } else {
          const userText =
            result.login && typeof result.login === 'string'
              ? `用户: ${result.login}<br>`
              : '';
          const scopesText =
            result.scopes && result.scopes.length
              ? `现有权限: ${result.scopes.join(', ')}<br>`
              : '现有权限: （无）<br>';
          const gistHint = window.DPRGithubAccess.hint + '<br>';
          githubTokenMessage.innerHTML = `
            <div style="font-size:12px; line-height:1.6;">
              ${userText}${scopesText}${gistHint}
              <span style="color:#dc3545;">❌ ${result.error}</span>
            </div>
          `;
          hideTokenInfo();

          // 验证失败时，如果有顶部按钮，则将其状态改为「验证失败」红色按钮
          if (githubAuthBtn) {
            githubAuthBtn.textContent = '验证失败';
            githubAuthBtn.style.background = '#dc3545';
            githubAuthBtn.style.color = 'white';
          }

          // 同时清除本地已保存的 Token，避免刷新后仍显示“登录成功”
          clearGithubToken();
        }

        githubTokenVerifyBtn.disabled = false;
        githubTokenVerifyBtn.textContent = '验证并保存';
      });
    }

    // Token 清除
    if (githubTokenClearBtn && !githubTokenClearBtn._bound) {
      githubTokenClearBtn._bound = true;
      githubTokenClearBtn.addEventListener('click', () => {
        if (confirm('确定要清除保存的 GitHub Token 吗？')) {
          clearGithubToken();
          githubTokenInput.value = '';
          githubTokenMessage.innerHTML =
            '<span style="color:#666;">Token 已清除</span>';
          hideTokenInfo();
          updateAuthButtonStatus();
        }
      });
    }

    updateAuthButtonStatus();
  };

  return {
    init,
    loadGithubToken,
    loadLocalConfigOverride,
    loadConfig,
    updateConfig,
    saveConfig,
    isLocalDebugHost,
  };
})();
