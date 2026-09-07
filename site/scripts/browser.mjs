import { spawn } from 'node:child_process';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// A small Chrome DevTools Protocol client keeps the build and tests dependency-free.
export async function browser({ gpu = false, width = 1440, height = 1000 } = {}) {
  const profile = await mkdtemp(join(tmpdir(), 'capy-site-chrome-'));
  const args = ['--remote-debugging-pipe', `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--force-color-profile=srgb',
    ...(gpu ? ['--ozone-platform=wayland', '--enable-gpu', '--enable-unsafe-webgpu', '--use-angle=vulkan'] : ['--headless=new', '--disable-gpu']), 'about:blank'];
  const chrome = spawn(process.env.CHROME || 'google-chrome', args, { stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'] });
  let seq = 0, buffer = '', session, stderr = '';
  const pending = new Map(), errors = [];
  chrome.stderr.on('data', data => { stderr += data; });
  const fail = error => { for (const item of pending.values()) { clearTimeout(item.timer); item.reject(error); } pending.clear(); };
  chrome.on('error', fail);
  chrome.on('exit', code => fail(new Error(`Chrome exited (${code}): ${stderr.slice(-1500)}`)));
  chrome.stdio[4].on('data', data => {
    buffer += data;
    for (;;) {
      const end = buffer.indexOf('\0');
      if (end < 0) break;
      const event = JSON.parse(buffer.slice(0, end)); buffer = buffer.slice(end + 1);
      if (event.id) {
        const waiter = pending.get(event.id);
        if (!waiter) continue;
        clearTimeout(waiter.timer); pending.delete(event.id);
        event.error ? waiter.reject(new Error(JSON.stringify(event.error))) : waiter.resolve(event.result);
      } else if (event.method === 'Runtime.exceptionThrown') errors.push(event.params.exceptionDetails.exception?.description || event.params.exceptionDetails.text);
      else if (event.method === 'Runtime.consoleAPICalled' && event.params.type === 'error') errors.push(event.params.args.map(a => a.value || a.description).join(' '));
    }
  });
  function call(method, params = {}, sessionId = session) {
    const id = ++seq;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout: ${method}; ${stderr.slice(-600)}`)); }, 30000);
      pending.set(id, { resolve, reject, timer });
      chrome.stdio[3].write(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }) + '\0');
    });
  }
  async function evaluate(expression) {
    const r = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.exception?.value || r.exceptionDetails.text);
    return r.result.value;
  }
  async function until(expression) {
    for (let i = 0; i < 150; i++) {
      if (await evaluate(expression)) return;
      await new Promise(r => setTimeout(r, 100));
    }
    throw new Error(`Timed out waiting for ${expression}`);
  }
  async function close() {
    chrome.kill();
    await new Promise(r => chrome.exitCode !== null ? r() : chrome.once('exit', r));
    await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
  try {
    const target = await call('Target.createTarget', { url: 'about:blank' }, null);
    ({ sessionId: session } = await call('Target.attachToTarget', { targetId: target.targetId, flatten: true }, null));
    await call('Runtime.enable'); await call('Page.enable');
    await call('Emulation.setFocusEmulationEnabled', { enabled: true });
    await call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
  } catch (error) { await close(); throw error; }
  return { call, evaluate, until, close, errors,
    async navigate(url) { await call('Page.navigate', { url }); await until(`document.readyState === 'complete' && location.href !== 'about:blank'`); },
    async theme(value) { await call('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value }] }); },
    async screenshot(path, full = false) {
      const params = { format: 'png', captureBeyondViewport: full };
      if (full) { const { cssContentSize: s } = await call('Page.getLayoutMetrics'); params.clip = { x: 0, y: 0, width: s.width, height: s.height, scale: 1 }; }
      const shot = await call('Page.captureScreenshot', params);
      await writeFile(path, Buffer.from(shot.data, 'base64'));
    },
    settle: () => evaluate('new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))'),
  };
}
