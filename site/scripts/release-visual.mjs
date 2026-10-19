import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { materialScene, releaseMaterials } from './capture/dry-media.mjs';

const version = process.env.RELEASE_VERSION || '1.0.13';
assert.match(version, /^\d+\.\d+\.\d+$/);
const directory = resolve(process.env.RELEASE_VISUAL_OUTPUT || `site/public/assets/releases/${version}`);
const working = resolve('artifacts/release/visual');
await mkdir(directory, { recursive: true });
await mkdir(working, { recursive: true });
const prepared = JSON.parse(await readFile('artifacts/capture-app.json', 'utf8'));
const captures = [];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const sampleDirectory = process.env.RELEASE_VISUAL_SAMPLES && resolve(process.env.RELEASE_VISUAL_SAMPLES);
let nativeSource;
if (sampleDirectory) {
  const provenance = JSON.parse(await readFile(`${sampleDirectory}/provenance.json`, 'utf8'));
  assert.equal(provenance.source.revision, prepared.revision, 'Native samples and pen-input projects use the same app revision');
  nativeSource = provenance.source;
  for (const material of releaseMaterials) {
    const capture = provenance.captures.find(capture => capture.id === material.id);
    assert.ok(capture, `Native sample recorded: ${material.id}`);
    const bytes = await readFile(`${sampleDirectory}/${capture.file}`);
    assert.equal(hash(bytes), capture.sha256, `Native sample matches provenance: ${material.id}`);
    captures.push({ ...material, ...capture, source: 'Native Capy Canvas canvas capture', image: bytes.toString('base64') });
  }
} else {
  const host = await serve(0, prepared.directory);
  const b = await browser({ gpu: true, headless: process.env.CAPTURE_BROWSER_MODE !== 'wayland', width: 1920, height: 1080, scale: 2 });
  try {
    await b.navigate(host.url);
    const e = await editor(b);
    for (const material of releaseMaterials) {
      console.log(`Drawing ${material.name} on ${material.paperName}`);
      const { extent } = await materialScene(e, material);
      const bytes = await e.save(`${material.id}.png`);
      await writeFile(`${working}/${material.id}.png`, bytes);
      await e.save(`${material.id}.capy`, working);
      captures.push({ ...material, extent, source: 'Capy Canvas PNG export', sha256: hash(bytes), image: bytes.toString('base64') });
      console.log(`Captured ${material.id}`);
    }
    assert.deepEqual(b.errors, [], 'The key visual uses an error-free editor');
  } catch (error) {
    await b.screenshot(`${working}/failure.png`).catch(() => {});
    await writeFile(`${working}/failure-state.json`, await b.evaluate('JSON.stringify(layerApp.state(),(_,v)=>typeof v==="bigint"?Number(v):v)').catch(() => '{}'));
    throw error;
  } finally { await b.close(); await host.close(); }
}

const layout = [
  { id: 'charcoal', x: 64, y: 64, width: 1400, height: 959 },
  { id: 'pastel', x: 1504, y: 64, width: 832, height: 1540 },
  { id: 'pencil', x: 64, y: 1095, width: 680, height: 509 },
  { id: 'crayon', x: 784, y: 1095, width: 680, height: 509 },
];
const html = `<!doctype html><html><head><style>
*{box-sizing:border-box}html,body{margin:0;width:2400px;height:1668px;background:#e9e7e1;color:#30322d;font-family:Arial,sans-serif}
figure{position:absolute;margin:0}img{width:100%;height:calc(100% - 84px);object-fit:contain;display:block}figcaption{height:84px;padding-top:18px;font-size:37px;line-height:45px;letter-spacing:-.35px}strong{font-weight:600}span{color:#62645e;margin-left:20px}
</style></head><body>${layout.map(box => { const shot = captures.find(c => c.id === box.id); return `<figure style="left:${box.x}px;top:${box.y}px;width:${box.width}px;height:${box.height}px"><img src="data:image/png;base64,${shot.image}" alt=""><figcaption><strong>${shot.name}</strong><span>${shot.paperName}</span></figcaption></figure>`; }).join('')}</body></html>`;
const page = await browser({ width: 2400, height: 1668 });
try {
  await page.call('Page.setDocumentContent', { frameId: (await page.call('Page.getFrameTree')).frameTree.frame.id, html });
  await page.evaluate('Promise.all([...document.images].map(i=>i.decode())).then(()=>document.fonts.ready).then(()=>null)');
  await page.screenshot(`${directory}/dry-media.png`);
  const result = await page.call('Page.captureScreenshot', { format: 'webp', quality: 92 });
  await writeFile(`${directory}/dry-media.webp`, Buffer.from(result.data, 'base64'));
} finally { await page.close(); }
const { directory: appDirectory, ...provenance } = prepared;
const files = await Promise.all(['dry-media.png', 'dry-media.webp'].map(async file => { const bytes = await readFile(`${directory}/${file}`); return { file, bytes: bytes.length, sha256: hash(bytes) }; }));
await writeFile(`${directory}/manifest.json`, JSON.stringify({ version, width: 2400, height: 1668, source: provenance, ...(nativeSource ? { nativeSource } : {}), captures: captures.map(({ image, ...capture }) => capture), files }, null, 2) + '\n');
console.log(`Release key visual written to ${directory}`);
