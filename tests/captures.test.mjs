import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { PNG } from 'pngjs';
import { docTopics } from '../site/src/data/docs-nav.mjs';
import { languages } from '../site/src/data/content.mjs';

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
const shots = markdown => [...markdown.matchAll(/!\[([^\]]*)\]\(shot:([^ )]+)(?: "([^"]*)")?\)/g)].map(([, alt, name, caption]) => ({ alt, name, caption }));

const locales = Object.keys(languages);
const themes = ['light', 'dark'];
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]))).flat();
}

test('every capture is a verified light/dark image from the real editor in every site language', async () => {
  const manifest = JSON.parse(await readFile(join(root, 'assets/capture.json'), 'utf8'));
  assert.equal(manifest.partial, false, 'A partial debugging run must not be published');
  assert.deepEqual(manifest.locales, locales, 'Captured in every site language');
  assert.equal(manifest.scale, 2, 'Captured at twice the pixel density');
  const variants = new Map();
  for (const capture of manifest.captures) {
    assert.match(capture.revision, /^[a-f0-9]{40}$/, `App revision recorded: ${capture.file}`);
    assert.ok(Object.keys(manifest.sources[capture.revision]?.hashes ?? {}).length > 0, `Source hashes recorded for ${capture.revision}`);
    assert.ok(themes.includes(capture.theme), `Theme recorded: ${capture.file}`);
    assert.equal(capture.quality, capture.shot.startsWith('docs/') ? 70 : 90, `WebP quality recorded: ${capture.file}`);
    const [area, ...rest] = capture.shot.split('/');
    const shared = capture.locales.length > 1;
    if (shared) assert.deepEqual(capture.locales, locales, `A shared capture serves every language: ${capture.file}`);
    else assert.ok(locales.includes(capture.locales[0]), `Known language: ${capture.file}`);
    assert.equal(capture.file, `${area}/${shared ? 'shared' : capture.locales[0]}/${rest.join('/')}-${capture.theme}.webp`, `One naming scheme: ${capture.file}`);
    for (const locale of capture.locales) {
      const key = `${capture.shot}|${locale}|${capture.theme}`;
      assert.ok(!variants.has(key), `One image per shot, language and theme: ${key}`);
      variants.set(key, capture);
    }
  }
  const shotNames = [...new Set(manifest.captures.map(capture => capture.shot))];
  for (const shot of shotNames) {
    const numbers = variants.get(`${shot}|en|light`)?.annotations.map(item => item.number);
    for (const locale of locales) for (const theme of themes) {
      const capture = variants.get(`${shot}|${locale}|${theme}`);
      assert.ok(capture, `Capture recorded: ${shot} ${locale} ${theme}`);
      assert.deepEqual(capture.annotations.map(item => item.number), numbers, `Same callouts in every language and theme: ${shot} ${locale} ${theme}`);
    }
  }
  assert.equal(new Set(manifest.captures.filter(capture => !capture.shot.startsWith('showcase/')).map(capture => capture.revision)).size, 1, 'Every manual image comes from one app revision');
  for (const capture of manifest.captures) {
    const bytes = await readFile(join(root, 'assets', capture.file));
    assert.equal(bytes.length, capture.bytes, `Capture size matches provenance: ${capture.file}`);
    assert.equal(hash(bytes), capture.sha256, `Capture changed without updated provenance: ${capture.file}`);
    assert.deepEqual(dimensions(bytes), capture.size.map(value => value * 2), `Twice the recorded size: ${capture.file}`);
    assert.ok(bytes.length > 1500 && bytes.length < 1500000, `WebP size: ${capture.file}`);
    for (const { bounds } of capture.annotations) {
      assert.ok(bounds.x >= -1 && bounds.y >= -1 && bounds.width > 0 && bounds.height > 0, `Visible callout: ${capture.file}`);
      assert.ok(bounds.x + bounds.width <= capture.size[0] + 1 && bounds.y + bounds.height <= capture.size[1] + 1, `Callout inside the crop: ${capture.file}`);
    }
  }
  const recorded = new Set(manifest.captures.map(capture => capture.file));
  for (const area of ['docs', 'guides', 'showcase']) for (const path of await files(join(root, 'assets', area))) {
    assert.ok(recorded.has(path.slice(join(root, 'assets').length + 1)), `Published image has provenance: ${path}`);
  }
  const referenced = new Set();
  for (const { slug } of docTopics) {
    const english = shots(await readFile(`site/src/content/guides/en/${slug}.md`, 'utf8'));
    for (const locale of locales) {
      const translated = shots(await readFile(`site/src/content/guides/${locale}/${slug}.md`, 'utf8'));
      assert.deepEqual(translated.map(shot => shot.name), english.map(shot => shot.name), `Same captures in ${locale}/${slug}`);
      for (const [index, shot] of translated.entries()) {
        assert.ok(shot.alt.trim(), `Alt text for ${shot.name} in ${locale}/${slug}`);
        const numbers = (shot.caption || '').split('·').map(item => item.trim().match(/^(\d+)/)?.[1]).filter(Boolean).map(Number);
        for (const theme of themes) {
          const capture = variants.get(`docs/${shot.name}|${locale}|${theme}`);
          assert.ok(capture, `Capture exists: ${shot.name} ${locale} ${theme}`);
          assert.deepEqual(numbers, capture.annotations.map(item => item.number), `Caption and callouts agree: ${locale}/${slug} ${shot.name} ${theme}`);
        }
        assert.equal(Boolean(shot.caption), Boolean(english[index].caption));
      }
    }
    for (const shot of english) referenced.add(`docs/${shot.name}`);
  }
  for (const shot of shotNames.filter(shot => shot.startsWith('docs/'))) assert.ok(referenced.has(shot), `Every manual capture is used by a page: ${shot}`);
  for (const shot of ['guides/illustration', 'showcase/sketch', 'showcase/paint', 'showcase/photo']) for (const locale of locales) for (const theme of themes) {
    const capture = variants.get(`${shot}|${locale}|${theme}`);
    assert.ok(capture, `Full-window capture recorded: ${shot} ${locale} ${theme}`);
    assert.deepEqual(capture.size, [1920, 1080], `Full-window capture: ${capture.file}`);
  }
  assert.ok(Object.keys(manifest.recipeHashes).length >= 10, 'Capture recipe is identified');
  for (const [path, expectedHash] of Object.entries(manifest.recipeHashes)) assert.equal(hash(await readFile(`site/scripts/${path}`)), expectedHash, `Recipe changed; regenerate captures: ${path}`);
});

test('downloadable examples match provenance and open in the current editor format', async () => {
  const manifest = JSON.parse(await readFile(join(root, 'assets/capture.json'), 'utf8'));
  const names = manifest.examples.map(entry => entry.file);
  for (const name of ['01-sketch.capy', '02-line-art.capy', '03-base-colors.capy', '04-finished.capy', 'abstract-study.png']) assert.ok(names.includes(`examples/${name}`), `Example published: ${name}`);
  for (const entry of manifest.examples) {
    const bytes = await readFile(join(root, 'assets', entry.file));
    assert.equal(bytes.length, entry.bytes); assert.equal(hash(bytes), entry.sha256);
    if (entry.file.endsWith('.capy')) assert.equal(bytes.subarray(0, 4).toString('latin1'), 'PK\u0003\u0004', `Current Capy package: ${entry.file}`);
    if (entry.file.endsWith('abstract-study.png')) {
      const png = PNG.sync.read(bytes);
      assert.deepEqual([png.width, png.height], [1200, 1200]);
      let colored = 0;
      for (let i = 0; i < png.data.length; i += 4) if (png.data[i + 3] > 200 && Math.max(...png.data.subarray(i, i + 3)) - Math.min(...png.data.subarray(i, i + 3)) > 20) colored++;
      assert.ok(colored > 100000, `Export contains real colored artwork: ${entry.file}`);
    }
  }
  const stages = await Promise.all(['01-sketch', '02-line-art', '03-base-colors', '04-finished'].map(name => readFile(join(root, `assets/examples/${name}.capy`)).then(hash)));
  assert.equal(new Set(stages).size, 4, 'Each tutorial stage has its own editable project');
});
