const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const access = require('../app/github-access.js');
const token = 'github_pat_test_fixture';
const ok = (data) => ({ ok: true, status: 200, json: async () => data });

async function main() {
  const calls = [];
  const request = async (url, options) => {
    calls.push({ url, options });
    return ok(url.endsWith('/user') ? { login: 'sekire4' } : {});
  };
  await assert.rejects(access.verify('ghp_classic_fixture', request), /Fine-grained/);
  assert.equal(calls.length, 0, 'reject broad token before sending it');
  assert.throws(() => access.assertRepo('someone', 'daily-paper-reader'), /仅允许/);
  assert.throws(() => access.assertRepo('sekire4', 'other-repo'), /仅允许/);
  const result = await access.verify(token, request);
  assert.equal(result.repo, 'sekire4/daily-paper-reader');
  assert.equal(result.gistEnabled, false);
  assert.equal(calls.length, 4);
  for (const { url, options } of calls) {
    assert.ok(url === 'https://api.github.com/user' || url.startsWith('https://api.github.com/repos/sekire4/daily-paper-reader/'));
    assert.equal(options.method, undefined, 'verification must not mutate the repository');
    assert.equal(options.headers.Authorization, `Bearer ${token}`);
  }
  await assert.rejects(access.verify(token, async () => ok({ login: 'other-user' })), /所有者/);
  await assert.rejects(access.verify(token, async () => ({ ok: false, status: 401 })), /过期/);
  for (const permissionPath of ['contents/config.yaml', 'actions/workflows', 'actions/secrets/public-key']) {
    await assert.rejects(access.verify(token, async (url) => url.includes(permissionPath)
      ? { ok: false, status: 403 } : ok({ login: 'sekire4' })), /访问失败/);
  }

  // Exercise the second token entry point: fine-grained tokens have no
  // X-OAuth-Scopes header and must not require repo/workflow/gist scopes.
  const context = {
    window: { DPRGithubAccess: access, location: { href: 'https://sekire4.github.io/daily-paper-reader/' } },
    URL, console,
    fetch: async (url) => url.includes('.repo-owner.json') ? { ok: false } : request(url, {}),
  };
  // Inject a fetch implementation so the helper never makes a real request.
  context.window.DPRGithubAccess = { ...access, verify: t => access.verify(t, request) };
  vm.createContext(context);
  const code = fs.readFileSync('app/subscriptions.github-token.js', 'utf8')
    .replace(/\r\n/g, '\n')
    .replace('    init,\n', '    verifyGithubToken,\n    init,\n');
  vm.runInContext(code, context);
  assert.equal((await context.window.SubscriptionsGithubToken.verifyGithubToken(token)).valid, true);
  context.window.location.href = 'https://sekire4.github.io/other-repo/';
  assert.equal((await context.window.SubscriptionsGithubToken.verifyGithubToken(token)).valid, false);

  const feedback = require('../app/feedback.issue.js');
  let feedbackCalls = 0;
  const draft = await feedback.__test.submitIssueWithFallback({
    types: ['功能新增'], title: 'Token isolation', content: 'Single repository token must never be sent upstream.', confirmPublic: true,
  }, { token, openDraft: false, fetchImpl: async () => { feedbackCalls++; throw new Error('unexpected API call'); } });
  assert.equal(draft.mode, 'draft');
  assert.equal(feedbackCalls, 0, 'do not transmit the token to upstream feedback');
  console.log('single repository GitHub access tests passed');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
