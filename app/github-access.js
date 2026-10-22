// This fork deliberately accepts only repository-scoped fine-grained PATs.
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.DPRGithubAccess = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const owner = 'sekire4';
  const repo = 'daily-paper-reader';
  const hint = '使用 Fine-grained PAT：Repository access 选择 Only select repositories，仅勾选 sekire4/daily-paper-reader；Contents、Actions、Secrets 设为 Read and write，其他权限不添加。Gist 分享已关闭。';

  function assertToken(token) {
    if (!String(token || '').trim().startsWith('github_pat_')) {
      throw new Error('此站点仅接受 Fine-grained PAT，不接受 Classic PAT。' + hint);
    }
  }

  function assertRepo(candidateOwner, candidateRepo) {
    if (String(candidateOwner || '').toLowerCase() !== owner || candidateRepo !== repo) {
      throw new Error('此站点仅允许操作 sekire4/daily-paper-reader，请检查站点地址及仓库配置。');
    }
    return { owner, repo };
  }

  async function verify(token, fetcher) {
    assertToken(token);
    const request = fetcher || fetch;
    const headers = {
      Authorization: `Bearer ${String(token).trim()}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    const userResponse = await request('https://api.github.com/user', { headers });
    if (!userResponse.ok) throw new Error('Token 无效或已过期（HTTP ' + userResponse.status + '）');
    const user = await userResponse.json();
    if (String(user.login || '').toLowerCase() !== owner) {
      throw new Error('Token 必须属于站点所有者 sekire4。');
    }
    // Read-only probes cannot prove write access or introspect the token's
    // repository selection. GitHub enforces that selection; actual writes
    // must still handle 403 without claiming a successful save.
    for (const [path, permission] of [
      ['contents/config.yaml', 'Contents'],
      ['actions/workflows?per_page=1', 'Actions'],
      ['actions/secrets/public-key', 'Secrets'],
    ]) {
      const response = await request(`https://api.github.com/repos/${owner}/${repo}/${path}`, { headers });
      if (!response.ok) {
        throw new Error(`${permission} 访问失败（HTTP ${response.status}）。请仅选择 ${owner}/${repo}，并授予 Contents、Actions、Secrets 的 Read and write 权限。`);
      }
    }
    return { login: user.login, name: user.name, repo: `${owner}/${repo}`,
      scopes: ['Fine-grained PAT'], gistEnabled: false };
  }
  return { owner, repo, hint, assertToken, assertRepo, verify };
});
