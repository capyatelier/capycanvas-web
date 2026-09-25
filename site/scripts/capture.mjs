import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { annotate, clearAnnotations } from './capture/annotations.mjs';
import { illustration, colors } from './capture/illustration.mjs';
import { references } from './capture/references.mjs';
import { showcase, showcaseFiles } from './capture/showcase.mjs';
import { PNG } from 'pngjs';

const width = 1920, height = 1080, scale = 2;
const output = resolve('site/public/assets');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
await mkdir(`${output}/guides`, { recursive: true });
await mkdir(`${output}/showcase`, { recursive: true });
await mkdir(`${output}/examples`, { recursive: true });
await mkdir('artifacts/capture-review', { recursive: true });
const prepared = JSON.parse(await readFile('artifacts/capture-app.json', 'utf8'));
const host = process.env.APP_URL ? null : await serve(0, prepared.directory);
const appUrl = process.env.APP_URL || host.url;
const source = await fetch(new URL('capture-source.json', appUrl)).then(response => { assert.ok(response.ok, 'Capture source manifest is served'); return response.json(); });
assert.equal(source.revision, prepared.revision, 'Served revision matches prepared source');
for (const [path, expected] of Object.entries(source.hashes)) {
  const bytes = await fetch(new URL(path, appUrl)).then(response => { assert.ok(response.ok, `Source file available: ${path}`); return response.arrayBuffer(); });
  assert.equal(hash(Buffer.from(bytes)), expected, `Served bytes match source manifest: ${path}`);
}
const headless = process.env.CAPTURE_BROWSER_MODE !== 'wayland';
const b = await browser({ gpu: true, headless, width, height, scale });
const captures = [];
const scope = process.env.CAPTURE_ONLY || 'all';
assert.ok(['all', 'docs', 'references'].includes(scope), 'Known capture scope');
const showcaseCaptures = ['sketch', 'paint', 'photo'].flatMap(name => ['light', 'dark'].map(theme => `showcase/${name}-${theme}.webp`));
if (scope !== 'all') {
  const previous = JSON.parse(await readFile(`${output}/capture.json`, 'utf8'));
  for (const file of showcaseCaptures) {
    const entry = previous.captures.find(capture => capture.file === file);
    assert.ok(entry, `Retained homepage slide has provenance: ${file}`);
    assert.equal(hash(await readFile(`${output}/${file}`)), entry.sha256, `Unchanged retained slide: ${file}`);
    captures.push(entry);
  }
}
const recipeFiles = ['capture.mjs', 'browser.mjs', 'serve.mjs', 'capture-headless.sh', 'prepare-capture.mjs', 'capture-compatibility.mjs', 'capture/editor.mjs', 'capture/annotations.mjs', 'capture/illustration.mjs', 'capture/references.mjs', 'capture/showcase.mjs'];
const recipeHashes = Object.fromEntries(await Promise.all(recipeFiles.map(async path => [path, hash(await readFile(`site/scripts/${path}`))])));
const artwork = await Promise.all(showcaseFiles.map(async name => { const bytes = await readFile(`site/scripts/capture/showcase/${name}`); return { file: `showcase/${name}`, bytes: bytes.length, sha256: hash(bytes) }; }));
const manifest = { ...source, width, height, scale, partial: scope === 'references', browser: await b.call('Browser.getVersion'), display: headless ? 'Chrome native headless' : 'Headed Chrome on a private headless Wayland display', workspace: { id: 'builtin:workspace:illustrator', name: 'Paint' },
  canvas2d: 'Software decoding and UI previews; artwork remains hardware WebGPU.', recipeHashes,
  artwork: 'Guides: Watercolor Wash strokes and an original abstract study of a teal ribbon, ochre disc and terracotta block with pencil hatching, watercolor and airbrush shading, drawn through real browser pen input and editor actions. Homepage: a pen sketch, an oil painting and a photograph supplied by Capy Atelier as .capy projects, shown in Sketch, Paint and Photo.',
  showcase: artwork,
  annotations: 'Numbered SVG outlines injected over measured DOM controls; artwork and UI rendered by Capy Canvas.', captures };
async function verifyPixels(kind) {
  const check = await b.call('Page.captureScreenshot', { format: 'png', clip: { x: 500, y: 180, width: 900, height: 750, scale: 1 } });
  const pixels = PNG.sync.read(Buffer.from(check.data, 'base64')).data;
  if (kind === 'paper') {
    let white = 0, painted = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] > 245 && pixels[i + 1] > 245 && pixels[i + 2] > 245) white++;
      else if (pixels[i] > 50 && pixels[i + 1] > 50 && pixels[i + 2] > 50) painted++;
    }
    assert.ok(white > 50000 && painted > 10000, 'Screenshot contains visible paper and real painted pixels, not a missing GPU surface');
  } else {
    const buckets = new Map();
    let dark = 0, light = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      const key = (pixels[i] >> 4) << 8 | (pixels[i + 1] >> 4) << 4 | pixels[i + 2] >> 4; buckets.set(key, (buckets.get(key) || 0) + 1);
      const luma = .2126 * pixels[i] + .7152 * pixels[i + 1] + .0722 * pixels[i + 2];
      if (luma < 90) dark++; else if (luma > 170) light++;
    }
    const total = pixels.length / 4, dominant = Math.max(...buckets.values());
    const drawing = dark > total * .02 && light > total * .02, color = buckets.size > 60 && dominant < total * .8;
    assert.ok(drawing || color, 'Screenshot contains the rendered artwork, not a blank or missing GPU surface');
  }
}
async function record(name, targets = [], { file = `guides/${name}`, check, setup, teardown } = {}) {
  console.log(`Capturing ${file}`);
  for (const theme of ['light', 'dark']) {
    await clearAnnotations(b); await b.theme(theme);
    await b.evaluate(`layerApp.dispatch({type:'set_theme',theme:${JSON.stringify(theme)}});void 0`);
    await b.until(`document.body.dataset.theme === ${JSON.stringify(theme)}`);
    await b.evaluate(`layerApp.dispatch({type:'set_theme',theme:${JSON.stringify(theme)}});void 0`);
    if (setup) await setup();
    await b.evaluate('Promise.all([...document.images].map(i=>i.decode())).then(()=>null)');
    await b.evaluate('document.fonts.ready.then(()=>null)');
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 1916, y: 1076 });
    await new Promise(resolve => setTimeout(resolve, 350)); await b.settle();
    await b.until('!document.querySelector("#status").textContent && layerApp.app.brush_ready() && document.querySelector(".startup-progress")?.hidden !== false', 20000);
    await b.until(`[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(canvas=>{const box=canvas.getBoundingClientRect();return canvas.checkVisibility()&&box.width>0&&box.top<innerHeight&&box.bottom>0}).every(canvas=>canvas.dataset.previewRevision)`, 15000);
    assert.equal(await b.evaluate('document.body.innerText.includes("Painting is unavailable")'), false, 'Capture has a working GPU canvas');
    if (check) await verifyPixels(check);
    const annotations = await annotate(b, targets);
    await b.settle();
    const shot = await b.call('Page.captureScreenshot', { format: 'webp', quality: 90 });
    const bytes = Buffer.from(shot.data, 'base64');
    const filename = `${file}-${theme}.webp`;
    await writeFile(`${output}/${filename}`, bytes);
    captures.push({ file: filename, theme, bytes: bytes.length, sha256: hash(bytes), annotations });
    await writeFile('artifacts/capture-review/progress.json', JSON.stringify(manifest, null, 2) + '\n');
    await clearAnnotations(b);
    if (teardown) await teardown();
  }
  await clearAnnotations(b);
}
try {
  await b.navigate(appUrl);
  const e = await editor(b);
  await e.workspace('illustrator');
  if (scope !== 'references') {
    if (scope === 'all') await showcase(e, record);
    await e.newDocument(2048, 1536); await e.brush(20, 165, colors.ink);
    assert.equal(await e.read(`document.querySelector('[data-brush="20"]')?.getAttribute("aria-pressed")`), 'true');
    for (const [j, color] of [colors.ink, colors.ribbon, colors.disc].entries()) {
      await e.setColor(color);
      const points = Array.from({ length: 101 }, (_, i) => { const t = i / 100; return [390 + 1260 * t, 410 + j * 310 + 110 * Math.sin(t * Math.PI * 2 - .5 + j * .3) + 40 * Math.sin(t * Math.PI * 3 + j * .2)]; });
      for (let pass = 0; pass < 3; pass++) await e.stroke(points, { pressure: .9, taper: true });
    }
    await record('quickstart', [{ selector: '.workspace-switcher' }, { selector: '.brushes-panel' }, { selector: '.layers-panel' }]);
    await record('painting-brushes', [{ selector: '.dock-group[data-panel="toolbar"]' }, { selector: '.brushes-panel' }, { selector: '.tool-settings-control' }]);
    await record('advanced-brush-engine', [{ selector: '.tool-subtools' }, { selector: '.tool-settings-control' }, { selector: '.dock-tab[data-panel="sizes"]' }]);
    await illustration(e, record, `${output}/examples`);
  }
  await references(e, record, `${output}/examples`, { painted: scope !== 'references' });
  assert.deepEqual(b.errors, [], 'No application errors during capture');
  const exampleNames = ['01-sketch.capy', '02-line-art.capy', '03-base-colors.capy', '04-finished.capy', 'abstract-study.png', 'image-editing.capy', 'image-editing.png'];
  const examples = await Promise.all(exampleNames.map(async name => { const bytes = await readFile(`${output}/examples/${name}`); return { file: `examples/${name}`, bytes: bytes.length, sha256: hash(bytes) }; }));
  await writeFile(`${output}/capture.json`, JSON.stringify({ ...manifest, examples }, null, 2) + '\n');
  console.log(`Captured ${captures.length} images from ${source.revision}.`);
} catch (error) {
  await clearAnnotations(b).catch(() => {});
  await b.screenshot('artifacts/capture-review/failure.png').catch(() => {});
  await writeFile('artifacts/capture-review/failure-state.json', await b.evaluate("JSON.stringify({state:layerApp.state(),workspace:JSON.parse(layerApp.app.workspace_view())},(_,v)=>typeof v==='bigint'?Number(v):v)")).catch(() => {});
  await writeFile('artifacts/capture-review/errors.json', JSON.stringify(b.errors, null, 2));
  console.error(b.errors.join('\n')); throw error;
} finally { await b.close(); if (host) await host.close(); }
