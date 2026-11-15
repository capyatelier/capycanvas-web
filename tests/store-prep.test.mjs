import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import test from 'node:test';
import { PNG } from 'pngjs';
import { createHash } from 'node:crypto';
import { catalog, prepare } from '../site/scripts/store/native.mjs';

test('store preparation regression suite', () => {
  execFileSync('python3', ['-m', 'unittest', 'discover', '-s', 'tests', '-p', 'test_store_prep.py'], { stdio: 'pipe' });
});

for (const platform of ['android', 'windows']) test(`native ${platform} catalog removes diagnostic fields and rejects mismatched recipe evidence`, async () => {
  const root = await mkdtemp(resolve(tmpdir(), 'capy-store-catalog-'));
  try {
    const input = resolve(root, 'input');
    const device = platform === 'windows' ? 'desktop' : 'tablet';
    const prefix = platform === 'windows' ? resolve(input, 'ja') : resolve(input, device, 'ja');
    await mkdir(prefix, { recursive: true });
    const recipe = resolve(root, 'recipe.json'); await writeFile(recipe, '{}');
    const recipeHash = createHash('sha256').update('{}').digest('hex');
    const image = new PNG({ width: 8, height: 4 }); image.data.fill(255);
    if (platform === 'windows') image.data[3] = 0;
    for (const scene of ['paint', 'sketch', 'photo']) for (const theme of ['light', 'dark']) {
      const file = resolve(prefix, `${scene}-${theme}`);
      await writeFile(file + '.png', PNG.sync.write(image));
      await writeFile(file + (platform === 'windows' ? '-receipt.json' : '.json'), JSON.stringify({ language: 'ja', device_kind: device, scene, theme, canvas_ready: true, brush_ready: true,
        recipe_sha256: recipeHash, executable_sha256: 'b'.repeat(64), companion_sha256: { 'layer_windows.dll': 'c'.repeat(64), 'capy-photo-reader.exe': 'd'.repeat(64) }, native_adaptation: { histogram: 'native histogram counts readiness' }, fingerprint: 'private-device-detail', snapshot: { privatePath: '/private/profile' } }));
    }
    const options = { input, output: resolve(root, 'public'), recipe, platform, appRevision: 'a'.repeat(40), binarySha256: 'b'.repeat(64), languages: ['ja'], devices: [device] };
    const manifest = await catalog(options);
    assert.equal(manifest.captures.length, 6);
    if (platform === 'windows') assert.equal(manifest.companionSha256['layer_windows.dll'], 'c'.repeat(64));
    const contents = await readFile(resolve(options.output, 'manifest.json'), 'utf8');
    assert.ok(!contents.includes('private') && !contents.includes('fingerprint') && !contents.includes(root));
    const encoded = await readFile(resolve(options.output, manifest.captures[0].file));
    assert.equal(encoded[25], platform === 'windows' ? 6 : 2);
    assert.deepEqual(PNG.sync.read(encoded).data, image.data);
    await writeFile(recipe, '{"changed":true}');
    await assert.rejects(catalog({ ...options, output: resolve(root, 'invalid') }));
  } finally { await rm(root, { recursive: true, force: true }); }
});


test('native preparation works with new parent directories and refuses to overwrite a prior run', async () => {
  const parent = resolve('artifacts/store-prep-tests');
  await mkdir(parent, { recursive: true });
  const root = await mkdtemp(resolve(parent, 'native-'));
  try {
    const settings = JSON.parse(await readFile(new URL('../store/locales.json', import.meta.url), 'utf8'));
    const appRepo = resolve(root, 'app');
    for (const { ui } of settings.locales) {
      const folder = resolve(appRepo, 'assets/locales', ui);
      await mkdir(folder, { recursive: true });
      await writeFile(resolve(folder, 'resources.ftl'), 'resources-histogram-exact = Exact\n');
    }
    const output = resolve(root, 'new-parent/store-inputs');
    const recipe = await prepare(output, appRepo);
    assert.equal(recipe.scenes.length, 3);
    assert.ok(recipe.scenes.every(scene => /^[a-f0-9]{64}$/.test(scene.sourceSha256)));
    await assert.rejects(prepare(output, appRepo), /EEXIST/);
    assert.equal(JSON.parse(await readFile(resolve(output, 'store-recipe.json'), 'utf8')).scenes.length, 3);
  } finally { await rm(root, { recursive: true, force: true }); }
});
