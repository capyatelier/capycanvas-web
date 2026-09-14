import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { PNG } from 'pngjs';
import { docTopics } from '../site/src/data/docs-nav.mjs';

const root = resolve(process.env.SITE_OUTPUT || 'docs');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
function dimensions(bytes) {
  assert.equal(bytes.subarray(0, 4).toString(), 'RIFF');
  assert.equal(bytes.subarray(8, 12).toString(), 'WEBP');
  for (let offset = 12; offset + 8 < bytes.length;) {
    const tag = bytes.subarray(offset, offset + 4).toString(), length = bytes.readUInt32LE(offset + 4), data = offset + 8;
    if (tag === 'VP8X') return [bytes.readUIntLE(data + 4, 3) + 1, bytes.readUIntLE(data + 7, 3) + 1];
    if (tag === 'VP8 ') return [bytes.readUInt16LE(data + 6) & 0x3fff, bytes.readUInt16LE(data + 8) & 0x3fff];
    offset = data + length + length % 2;
  }
  throw Error('No supported WebP dimensions');
}

test('every guide and the home page have complete, verified light/dark captures', async () => {
  const manifest = JSON.parse(await readFile(join(root, 'assets/capture.json'), 'utf8'));
  assert.equal(manifest.partial, false, 'A partial debugging run must not be published');
  assert.equal(manifest.workspace.name, 'Paint');
  assert.deepEqual([manifest.width, manifest.height], [1920, 1080]);
  const expected = ['workspace', ...docTopics.map(({slug}) => 'guides/' + slug.replaceAll('/', '-'))].flatMap(name => ['light', 'dark'].map(theme => `${name}-${theme}.webp`)).sort();
  assert.deepEqual(manifest.captures.map(capture => capture.file).sort(), expected);
  for (const capture of manifest.captures) {
    const bytes = await readFile(join(root, 'assets', capture.file));
    assert.equal(bytes.length, capture.bytes);
    assert.equal(hash(bytes), capture.sha256, `Capture has changed without updated provenance: ${capture.file}`);
    assert.deepEqual(dimensions(bytes), [1920, 1080]);
    assert.ok(bytes.length > 10000 && bytes.length < 500000, `WebP size: ${capture.file}`);
    assert.deepEqual(capture.annotations.map(item => item.number), Array.from({length:capture.annotations.length}, (_,i) => i+1));
    for (const {bounds} of capture.annotations) {
      assert.ok(bounds.x >= 0 && bounds.y >= 0 && bounds.width > 0 && bounds.height > 0);
      assert.ok(bounds.x + bounds.width <= 1920 && bounds.y + bounds.height <= 1080, `Visible annotation: ${capture.file}`);
    }
  }
  for (const {slug} of docTopics) for (const locale of ['en', 'ja', 'zh', 'ko']) {
    const markdown = await readFile(`site/src/content/guides/${locale}/${slug}.md`, 'utf8');
    const figure = JSON.parse(markdown.match(/^figure: (.+)$/m)[1]);
    const numbers = [...figure.matchAll(/(\d)[:：]/g)].map(([,n]) => Number(n));
    const name = 'guides/' + slug.replaceAll('/', '-');
    for (const theme of ['light', 'dark']) {
      const capture = manifest.captures.find(item => item.file === `${name}-${theme}.webp`);
      assert.deepEqual(numbers, capture.annotations.map(item => item.number), `Caption and callouts agree: ${locale}/${slug}/${theme}`);
    }
  }
  assert.ok(Object.keys(manifest.recipeHashes).length >= 8, 'Capture recipe is identified');
  for (const [path, expectedHash] of Object.entries(manifest.recipeHashes)) assert.equal(hash(await readFile(`site/scripts/${path}`)), expectedHash, `Recipe changed; regenerate captures: ${path}`);
});

test('downloadable examples match provenance and contain a painted 1200px portrait', async () => {
  const manifest = JSON.parse(await readFile(join(root, 'assets/capture.json'), 'utf8'));
  assert.equal(manifest.examples.length, 8);
  for (const entry of manifest.examples) {
    const bytes = await readFile(join(root, 'assets', entry.file));
    assert.equal(bytes.length, entry.bytes); assert.equal(hash(bytes), entry.sha256);
    assert.ok(bytes.length > 100);
    if (entry.file.endsWith('.png')) {
      const png = PNG.sync.read(bytes);
      assert.deepEqual([png.width, png.height], [1200, 1200]);
      let colored = 0;
      for (let i = 0; i < png.data.length; i += 4) if (png.data[i + 3] > 200 && Math.max(...png.data.subarray(i,i+3)) - Math.min(...png.data.subarray(i,i+3)) > 20) colored++;
      assert.ok(colored > 100000, `Export contains real colored artwork: ${entry.file}`);
    }
  }
  const stages = await Promise.all(['01-sketch','02-line-art','03-base-colors','04-finished'].map(name => readFile(join(root, `assets/examples/${name}.capy`)).then(hash)));
  assert.equal(new Set(stages).size, 4, 'Each tutorial stage has its own editable project');
});
