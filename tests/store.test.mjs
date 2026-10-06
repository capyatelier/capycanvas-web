import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { artwork, scenes } from '../site/scripts/capture/showcase-scenes.mjs';
import { directory, imagePath, origin, recipeFiles, themes, window } from '../site/scripts/store/gtk.mjs';

const root = resolve(process.env.SITE_OUTPUT || 'docs');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]))).flat();
}

test('GTK store screenshots cover every scene, app language and theme with provenance', async () => {
  const text = await readFile(join(root, directory, 'manifest.json'), 'utf8');
  const manifest = JSON.parse(text);
  assert.doesNotMatch(text, /\/home\/|\/tmp\/|artifacts\//, 'No local paths are published');
  assert.match(manifest.app.revision, /^[a-f0-9]{40}$/);
  assert.match(manifest.app.executable_sha256, /^[a-f0-9]{64}$/);
  assert.match(manifest.recipe_sha256, /^[a-f0-9]{64}$/);
  assert.deepEqual(manifest.window, window);
  assert.deepEqual(manifest.themes, themes);
  assert.deepEqual(manifest.scenes, scenes.map(scene => scene.id));
  assert.ok(manifest.languages.includes('en') && manifest.languages.includes('zh-Hans') && manifest.languages.includes('zh-Hant'), 'Simplified and Traditional Chinese are separate');
  for (const language of manifest.languages) assert.match(language, /^[a-z]{2,3}(?:-[A-Z][a-z]{3}|-[A-Z]{2})?$/, `BCP47 tag: ${language}`);
  assert.deepEqual(Object.keys(manifest.recipeHashes), recipeFiles);
  for (const [path, expected] of Object.entries(manifest.recipeHashes)) assert.equal(hash(await readFile(`site/scripts/${path}`)), expected, `Recipe changed; capture the store screenshots again: ${path}`);
  for (const { source } of scenes) assert.equal(manifest.artwork[source].sha256, hash(await readFile(new URL(source, artwork))), `Artwork unchanged: ${source}`);

  const expected = manifest.scenes.flatMap(scene => manifest.languages.flatMap(language => themes.map(theme => `${scene}|${language}|${theme}`)));
  assert.deepEqual(manifest.images.map(image => `${image.scene}|${image.language}|${image.theme}`), expected, 'One image per scene, language and theme');
  for (const image of manifest.images) {
    assert.equal(image.path, imagePath(image));
    assert.equal(image.url, `${origin}/${image.path}`);
    const bytes = await readFile(join(root, image.path));
    assert.equal(bytes.length, image.bytes, `Size matches provenance: ${image.path}`);
    assert.equal(hash(bytes), image.sha256, `Image changed without updated provenance: ${image.path}`);
    assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], `PNG: ${image.path}`);
    assert.deepEqual([bytes.readUInt32BE(16), bytes.readUInt32BE(20)], [image.width, image.height], `Dimensions: ${image.path}`);
    assert.equal(bytes[25], 6, `RGBA keeps the native shadow and corners: ${image.path}`);
    assert.ok(image.width > window.width * window.scale && image.height > window.height * window.scale, `Window at full scale with its shadow: ${image.path}`);
  }
  const published = new Set([`${directory}/manifest.json`, ...manifest.images.map(image => image.path)]);
  for (const path of await files(join(root, directory))) assert.ok(published.has(path.slice(root.length + 1)), `Listed in the manifest: ${path}`);
});
