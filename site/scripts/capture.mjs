import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { annotate, clearAnnotations } from './capture/annotations.mjs';
import { applyTheme, settled, shooter } from './capture/shoot.mjs';
import { chapters } from './capture/docs/index.mjs';
import { PNG } from 'pngjs';

const width = 1920, height = 1080, scale = 2;
const published = resolve('site/public/assets');
const output = resolve(process.env.CAPTURE_OUTPUT || published);
const review = resolve(process.env.CAPTURE_REVIEW || 'artifacts/capture-review');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
await mkdir(`${output}/guides`, { recursive: true });
await mkdir(`${output}/docs`, { recursive: true });
await mkdir(review, { recursive: true });
const prepared = JSON.parse(await readFile('artifacts/capture-app.json', 'utf8'));
const host = process.env.APP_URL ? null : await serve(0, prepared.directory);
const appUrl = process.env.APP_URL || host.url;
const source = await fetch(new URL('capture-source.json', appUrl)).then(response => { assert.ok(response.ok, 'Capture source manifest is served'); return response.json(); });
assert.equal(source.revision, prepared.revision, 'Served revision matches prepared source');
for (const [path, expected] of Object.entries(source.hashes)) {
  const bytes = await fetch(new URL(path, appUrl)).then(response => { assert.ok(response.ok, `Source file available: ${path}`); return response.arrayBuffer(); });
  assert.equal(hash(Buffer.from(bytes)), expected, `Served bytes match source manifest: ${path}`);
}

const scope = (process.env.CAPTURE_ONLY || 'all').split(',').map(name => name.trim()).filter(Boolean);
const known = Object.keys(chapters);
for (const name of scope) assert.ok(name === 'all' || known.includes(name), `Known capture chapter: ${name}`);
const selected = scope.includes('all') ? known : known.filter(name => scope.includes(name));
const examples = selected.includes('illustration') ? `${output}/examples` : `${published}/examples`;
await mkdir(examples, { recursive: true });
const previous = JSON.parse(await readFile(`${output}/capture.json`, 'utf8').catch(() => readFile(`${published}/capture.json`, 'utf8')));
const captures = [];
for (const entry of previous.captures.filter(capture => capture.file.startsWith('showcase/'))) {
  assert.equal(hash(await readFile(`${published}/${entry.file}`)), entry.sha256, `Unchanged retained slide: ${entry.file}`);
  captures.push({ revision: previous.showcaseRevision ?? previous.revision, ...entry });
}
if (!scope.includes('all')) {
  for (const entry of previous.captures.filter(capture => !capture.file.startsWith('showcase/'))) {
    const bytes = await readFile(`${output}/${entry.file}`).catch(() => null);
    if (bytes && hash(bytes) === entry.sha256) captures.push(entry);
  }
}

const recipeFiles = async dir => (await readdir(dir, { withFileTypes: true })).flatMap(entry => entry.isDirectory() ? [] : [join(dir, entry.name)]);
const recipePaths = [
  ...['capture.mjs', 'browser.mjs', 'serve.mjs', 'capture-headless.sh', 'prepare-capture.mjs', 'capture-compatibility.mjs'].map(path => `site/scripts/${path}`),
  ...(await recipeFiles('site/scripts/capture')).filter(path => path.endsWith('.mjs')),
  ...(await recipeFiles('site/scripts/capture/docs')).filter(path => path.endsWith('.mjs')),
].sort();
const recipeHashes = Object.fromEntries(await Promise.all(recipePaths.map(async path => [path.replace('site/scripts/', ''), hash(await readFile(path))])));
const headless = process.env.CAPTURE_BROWSER_MODE !== 'wayland';
const b = await browser({ gpu: true, headless, width, height, scale });
const manifest = { ...source, width, height, scale, partial: !scope.includes('all'), browser: await b.call('Browser.getVersion'),
  display: headless ? 'Chrome native headless' : 'Headed Chrome on a private headless Wayland display',
  showcaseRevision: previous.showcaseRevision ?? previous.revision,
  canvas2d: 'Software decoding and UI previews; artwork remains hardware WebGPU.', recipeHashes,
  artwork: 'Manual: an original abstract study of a teal ribbon, ochre disc and terracotta block drawn through real browser pen input and editor actions, and a photograph of a terrarium supplied by Capy Atelier. Homepage: a pen sketch, an oil painting and a photograph supplied by Capy Atelier, shown in Sketch, Paint and Photo.',
  annotations: 'Cropped from the real editor; numbered SVG outlines are injected over measured DOM controls.', captures };

async function verifyPixels(clip = { x: 500, y: 180, width: 900, height: 750 }) {
  const check = await b.call('Page.captureScreenshot', { format: 'png', clip: { ...clip, scale: 1 } });
  const pixels = PNG.sync.read(Buffer.from(check.data, 'base64')).data;
  const buckets = new Map();
  for (let i = 0; i < pixels.length; i += 4) { const key = (pixels[i] >> 4) << 8 | (pixels[i + 1] >> 4) << 4 | pixels[i + 2] >> 4; buckets.set(key, (buckets.get(key) || 0) + 1); }
  const total = pixels.length / 4;
  assert.ok(buckets.size > 30 && Math.max(...buckets.values()) < total * .9, 'Screenshot contains rendered artwork, not a blank or missing GPU surface');
}
async function record(file, targets = [], { setup, teardown, check = true } = {}) {
  console.log(`Capturing ${file}`);
  for (const theme of ['light', 'dark']) {
    await applyTheme(b, theme);
    if (setup) await setup(theme);
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
    await settled(b);
    if (check) await verifyPixels();
    const annotations = await annotate(b, targets);
    await b.settle();
    const shot = await b.call('Page.captureScreenshot', { format: 'webp', quality: 90 });
    const bytes = Buffer.from(shot.data, 'base64');
    const name = `${file}-${theme}.webp`;
    await mkdir(dirname(`${output}/${name}`), { recursive: true });
    await writeFile(`${output}/${name}`, bytes);
    const index = captures.findIndex(capture => capture.file === name);
    const entry = { file: name, theme, size: [width, height], bytes: bytes.length, sha256: hash(bytes), annotations: annotations.map(({ number, bounds }) => ({ number, bounds })) };
    if (index >= 0) captures[index] = entry; else captures.push(entry);
    await clearAnnotations(b);
    if (teardown) await teardown(theme);
  }
}
const shoot = shooter(b, output, captures, { width, height });
const progress = () => writeFile(`${review}/progress.json`, JSON.stringify(manifest, null, 2) + '\n');
try {
  await b.navigate(appUrl);
  const e = await editor(b);
  await e.workspace('illustrator');
  const context = { e, b, shoot, record, verifyPixels, examples, output, review };
  for (const name of selected) {
    await chapters[name](context);
    await progress();
  }
  assert.deepEqual(b.errors, [], 'No application errors during capture');
  const exampleFiles = (await readdir(examples)).filter(name => !name.startsWith('_')).sort();
  manifest.examples = await Promise.all(exampleFiles.map(async name => { const bytes = await readFile(`${examples}/${name}`); return { file: `examples/${name}`, bytes: bytes.length, sha256: hash(bytes) }; }));
  manifest.captures.sort((a, b) => a.file.localeCompare(b.file));
  await writeFile(`${output}/capture.json`, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Captured ${selected.join(', ')} from ${source.revision}; ${captures.length} images recorded.`);
} catch (error) {
  await clearAnnotations(b).catch(() => {});
  await b.screenshot(`${review}/failure.png`).catch(() => {});
  await writeFile(`${review}/failure-state.json`, await b.evaluate("JSON.stringify({state:layerApp.state(),workspace:JSON.parse(layerApp.app.workspace_view())},(_,v)=>typeof v==='bigint'?Number(v):v)").catch(() => '{}')).catch(() => {});
  await writeFile(`${review}/errors.json`, JSON.stringify(b.errors, null, 2));
  console.error(b.errors.join('\n')); throw error;
} finally { await b.close(); if (host) await host.close(); }
