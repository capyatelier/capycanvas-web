// Compare two built sites in the same Chrome process, using identical device settings.
// Keep the reference output outside docs/ so rebuilding cannot replace it.
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { PNG } from 'pngjs';
import { browser } from '../site/scripts/browser.mjs';
import { serve } from '../site/scripts/serve.mjs';

const reference = resolve(process.env.BASELINE_OUTPUT || 'artifacts/migration/legacy');
const candidate = resolve(process.env.SITE_OUTPUT || 'docs');
assert.notEqual(reference, candidate, 'The two output directories must differ.');
const output = resolve('artifacts/migration/comparison');
await mkdir(output, { recursive: true });
const before = await serve(0, reference);
const after = await serve(0, candidate);
const b = await browser();
const report = [];

// Compare content, navigation, accessibility attributes, and active PWA state.
// Ignore serialization whitespace, comments, and the deliberately different script packaging.
const semanticSnapshot = `(() => {
  function visit(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent.replace(/\\s+/g, ' ').trim() || null;
    if (node.nodeType !== Node.ELEMENT_NODE || node.tagName === 'SCRIPT') return null;
    return {
      tag: node.tagName,
      attributes: Object.fromEntries([...node.attributes].map(a => [a.name, a.value]).sort(([a], [b]) => a.localeCompare(b))),
      children: [...node.childNodes].map(visit).filter(Boolean),
    };
  }
  return visit(document.documentElement);
})()`;

async function capture(host, name, scenario) {
  await b.navigate(host.url + scenario.path);
  if (!scenario.noJs) await b.evaluate('Promise.all([document.fonts.ready, ...[...document.images].map(i => i.decode())]).then(() => null)');
  if (scenario.action) await b.evaluate(scenario.action);
  // requestAnimationFrame callbacks cannot run when script execution is disabled.
  if (!scenario.noJs) await b.settle();
  const state = await b.evaluate(semanticSnapshot);
  const path = join(output, `${name}-${scenario.id}.png`);
  await b.screenshot(path, true);
  return { state, png: PNG.sync.read(await readFile(path)) };
}

async function compare(scenario) {
  const a = await capture(before, 'before', scenario);
  const z = await capture(after, 'after', scenario);
  const sameDimensions = a.png.width === z.png.width && a.png.height === z.png.height;
  let changedPixels = null;
  if (sameDimensions) {
    changedPixels = 0;
    const diff = new PNG({ width: a.png.width, height: a.png.height });
    for (let i = 0; i < a.png.data.length; i += 4) {
      const changed = a.png.data.subarray(i, i + 4).compare(z.png.data.subarray(i, i + 4)) !== 0;
      if (changed) changedPixels++;
      diff.data.set(changed ? [255, 0, 100, 255] : [255, 255, 255, 255], i);
    }
    if (changedPixels) await writeFile(join(output, `diff-${scenario.id}.png`), PNG.sync.write(diff));
  }
  const sameContent = JSON.stringify(a.state) === JSON.stringify(z.state);
  if (!sameContent) await writeFile(join(output, `content-${scenario.id}.json`), JSON.stringify({ before: a.state, after: z.state }, null, 2));
  report.push({ ...scenario, action: undefined, sameDimensions, changedPixels, sameContent });
  if (report.length % 25 === 0) console.log(`Compared ${report.length} views; ${report.filter(r => r.changedPixels !== 0 || !r.sameContent).length} differences.`);
}

try {
  await b.call('Page.addScriptToEvaluateOnNewDocument', { source: "Object.defineProperty(navigator,'languages',{get:()=>['en-US','en'],configurable:true})" });
  for (const [width, height] of [[1440, 900], [1280, 720], [1024, 600], [768, 1024], [390, 844], [320, 568], [844, 390]]) {
    await b.call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 0, y: 0 });
    for (const theme of ['light', 'dark']) {
      await b.theme(theme);
      for (const locale of ['en', 'ja', 'zh', 'ko']) for (const page of ['home', 'download', 'documentation']) {
        const path = `${locale === 'en' ? '' : '/' + locale}/${page === 'home' ? '' : page + '/'}`;
        const id = `${width}-${height}-${theme}-${locale}-${page}`;
        await compare({ id, path });
        if ([1440, 390].includes(width)) {
          await compare({ id: id + '-language-menu', path, action: "document.querySelector('.language-menu').open = true" });
          if (page === 'download') {
            await compare({ id: id + '-os-menu', path, action: "document.querySelector('#pwa-os').open = true" });
            await compare({ id: id + '-mac-safari', path, action: "document.querySelector('[data-os=macos]').click(); const s=document.querySelector('#pwa-browser');s.value='safari';s.dispatchEvent(new Event('change',{bubbles:true}));" });
          }
        }
      }
      await compare({ id: `${width}-${height}-${theme}-404`, path: '/missing-page' });
    }
  }
  await b.call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: false });
  await b.call('Emulation.setScriptExecutionDisabled', { value: true });
  for (const theme of ['light', 'dark']) {
    await b.theme(theme);
    for (const locale of ['en', 'ja', 'zh', 'ko']) {
      await compare({ id: `390-${theme}-${locale}-no-js`, path: `${locale === 'en' ? '' : '/' + locale}/download/`, noJs: true });
    }
  }
  const failures = report.filter(r => !r.sameContent || !r.sameDimensions || r.changedPixels !== 0);
  await writeFile(join(output, 'report.json'), JSON.stringify({ reference, candidate, comparisons: report.length, failures: failures.length, browserErrors: b.errors, report }, null, 2) + '\n');
  assert.equal(b.errors.length, 0, b.errors.join('\n'));
  assert.equal(failures.length, 0, `Migration differences in ${failures.length}/${report.length} views; inspect ${output}/report.json`);
  console.log(`PASS: ${report.length} pixel-identical views with matching content and accessibility attributes.`);
} finally {
  await b.close();
  await before.close();
  await after.close();
}
