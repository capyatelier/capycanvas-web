import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { mergeRefresh } from '../site/scripts/store/capture.mjs';

const baseline = JSON.parse(await readFile('site/public/store/gtk/manifest.json', 'utf8'));
const capture = { source_revision: 'a'.repeat(40), executable_sha256: 'b'.repeat(64), recipe_sha256: 'c'.repeat(64) };
const run = { ...baseline, app: { revision: capture.source_revision, executable_sha256: capture.executable_sha256 }, recipe_sha256: capture.recipe_sha256 };
const selected = image => image.scene === 'photo' && ['fr', 'de', 'ru'].includes(image.language);
const replacements = baseline.images.filter(selected).map(image => ({ ...image, sha256: 'd'.repeat(64), capture }));

test('a six-photo refresh retains every other image and its original provenance', () => {
  const before = structuredClone(baseline);
  const merged = mergeRefresh(baseline, run, replacements);
  assert.deepEqual(baseline, before, 'Input catalog remains unchanged');
  assert.equal(merged.images.length, 90);
  assert.equal(replacements.length, 6);
  for (let i = 0; i < merged.images.length; i++) {
    if (selected(merged.images[i])) {
      assert.equal(merged.images[i].sha256, 'd'.repeat(64));
      assert.deepEqual(merged.images[i].capture, capture);
    } else assert.deepEqual(merged.images[i], before.images[i], 'Retained bytes, URLs, sizes and provenance stay exact');
  }
  assert.deepEqual(merged.artwork, before.artwork);
});

test('refresh rejects changed recipes, window, languages, themes and scenes', () => {
  for (const field of ['window', 'recipeHashes', 'languages', 'themes', 'scenes']) {
    const changed = structuredClone(run);
    changed[field] = field === 'window' ? { ...changed.window, width: 1920 } : [];
    assert.throws(() => mergeRefresh(baseline, changed, replacements), new RegExp(`Refresh cannot change ${field}`));
  }
});

test('refresh rejects missing, duplicate, unknown or wrongly attributed variants', () => {
  assert.throws(() => mergeRefresh(baseline, run, []), /at least one/);
  assert.throws(() => mergeRefresh(baseline, run, [replacements[0], replacements[0]]), /One replacement/);
  assert.throws(() => mergeRefresh(baseline, run, [{ ...replacements[0], language: 'xx' }]), /Existing variant/);
  assert.throws(() => mergeRefresh(baseline, run, [{ ...replacements[0], capture: baseline.images[0].capture }]), /Captured provenance/);
  assert.throws(() => mergeRefresh(baseline, run, [{ ...replacements[0], path: 'store/gtk/other.png' }]), /replacement path/);
  assert.throws(() => mergeRefresh(baseline, run, [{ ...replacements[0], url: 'https:\/\/example.invalid/other.png' }]), /replacement URL/);
  assert.throws(() => mergeRefresh({ ...baseline, images: baseline.images.slice(1) }, run, replacements), /every variant/);
  const missing = structuredClone(baseline);
  delete missing.images[0].capture;
  assert.throws(() => mergeRefresh(missing, run, replacements));
});
