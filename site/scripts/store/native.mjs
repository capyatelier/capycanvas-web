import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import { artwork, reference, scenes } from '../capture/showcase-scenes.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const digest = data => createHash('sha256').update(data).digest('hex');

export async function prepare(directory, appRepo) {
  const locales = JSON.parse(await readFile(resolve(root, 'store/locales.json'), 'utf8')).locales;
  const captions = {};
  for (const { ui } of locales) {
    const catalog = await readFile(resolve(appRepo, 'assets/locales', ui, 'resources.ftl'), 'utf8');
    const match = catalog.match(/^resources-histogram-exact = (.+)$/m);
    assert.ok(match, `Missing exact histogram caption for ${ui}`);
    captions[ui] = match[1];
  }
  await mkdir(dirname(directory), { recursive: true });
  await mkdir(directory, { recursive: false });
  for (const source of new Set(scenes.map(s => s.source))) await copyFile(new URL(source, artwork), resolve(directory, source));
  const nativeScenes = [];
  for (const scene of scenes) nativeScenes.push({ ...scene, sourceSha256: digest(await readFile(new URL(scene.source, artwork))) });
  const recipe = { reference, scenes: nativeScenes };
  await writeFile(resolve(directory, 'store-recipe.json'), JSON.stringify(recipe, null, 2) + '\n', { flag: 'wx' });
  await writeFile(resolve(directory, 'expected-scope-exact.json'), JSON.stringify(captions, null, 2) + '\n', { flag: 'wx' });
  return recipe;
}

export async function catalog({ input, output, recipe, platform, appRevision, binarySha256, languages, devices }) {
  assert.match(appRevision, /^[a-f0-9]{40}$/);
  assert.match(binarySha256, /^[a-f0-9]{64}$/);
  assert.ok(['android', 'windows', 'apple'].includes(platform));
  const recipeSha256 = digest(await readFile(recipe));
  const result = { schema: 1, platform, appRevision, binarySha256, recipeSha256, captures: [] };
  const files = [];
  for (const language of languages) for (const device of devices) for (const scene of ['paint', 'sketch', 'photo']) for (const theme of ['light', 'dark']) {
    for (const tag of [language, device]) assert.match(tag, /^[a-zA-Z0-9-]+$/);
    const prefix = platform === 'windows' ? resolve(input, language) : resolve(input, device, language);
    const name = `${scene}-${theme}`;
    const receipt = JSON.parse(await readFile(resolve(prefix, name + (platform === 'windows' ? '-receipt.json' : '.json')), 'utf8'));
    assert.equal(receipt.recipe_sha256, recipeSha256);
    assert.equal(receipt.executable_sha256, binarySha256);
    if (platform === 'windows') {
      const companions = receipt.companion_sha256;
      assert.ok(companions && companions['layer_windows.dll'] && companions['capy-photo-reader.exe'], 'Windows companion binaries are required');
      for (const [name, hash] of Object.entries(companions)) {
        assert.match(name, /^[a-zA-Z0-9_.-]+\.(dll|exe)$/); assert.match(hash, /^[a-f0-9]{64}$/);
      }
      if (result.companionSha256) assert.deepEqual(companions, result.companionSha256, 'Windows binaries changed between captures');
      result.companionSha256 = companions;
      const adaptation = receipt.native_adaptation;
      assert.ok(adaptation && typeof adaptation === 'object');
      for (const [key, value] of Object.entries(adaptation)) {
        assert.ok(['sketch_frame', 'brush_set', 'histogram'].includes(key));
        assert.ok(typeof value === 'string' && value.length <= 160);
      }
      if (result.nativeAdaptation) assert.deepEqual(adaptation, result.nativeAdaptation);
      result.nativeAdaptation = adaptation;
    }
    assert.equal(receipt.device ?? receipt.device_kind, device);
    assert.equal(receipt.language, language); assert.equal(receipt.scene, scene); assert.equal(receipt.theme, theme);
    assert.equal(receipt.canvas_ready, true); assert.equal(receipt.brush_ready, true);
    assert.ok(!receipt.rendering_pending);
    assert.ok(!receipt.missing_glyphs?.length);
    const source = PNG.sync.read(await readFile(resolve(prefix, name + '.png')));
    if (platform !== 'windows') for (let i = 3; i < source.data.length; i += 4) assert.equal(source.data[i], 255, 'Native screenshot has transparent pixels');
    const bytes = PNG.sync.write(source, { colorType: platform === 'windows' ? 6 : 2 });
    const file = `${device}/${language}/${name}.png`;
    files.push({ file, bytes });
    result.captures.push({ language, device, scene, theme, file, width: source.width, height: source.height, sha256: digest(bytes) });
  }
  await mkdir(dirname(output), { recursive: true });
  await mkdir(output, { recursive: false });
  for (const { file, bytes } of files) {
    await mkdir(dirname(resolve(output, file)), { recursive: true });
    await writeFile(resolve(output, file), bytes, { flag: 'wx' });
  }
  await writeFile(resolve(output, 'manifest.json'), JSON.stringify(result, null, 2) + '\n', { flag: 'wx' });
  return result;
}

async function main() {
  const [command, ...parameters] = process.argv.slice(2);
  const options = {};
  for (let i = 0; i < parameters.length; i += 2) {
    assert.ok(parameters[i].startsWith('--') && parameters[i + 1], 'Use --option value pairs');
    options[parameters[i].slice(2)] = parameters[i + 1];
  }
  if (command === 'prepare') {
    assert.ok(options.output && options['app-repo'], 'prepare --output NEW_DIRECTORY --app-repo APP_CHECKOUT');
    await prepare(resolve(options.output), resolve(options['app-repo']));
  } else if (command === 'catalog') {
    for (const key of ['input', 'output', 'recipe', 'platform', 'app-revision', 'binary-sha256', 'languages', 'devices']) assert.ok(options[key], `Missing --${key}`);
    await catalog({ input: resolve(options.input), output: resolve(options.output), recipe: resolve(options.recipe), platform: options.platform,
      appRevision: options['app-revision'], binarySha256: options['binary-sha256'], languages: options.languages.split(','), devices: options.devices.split(',') });
  } else throw new Error('Use native.mjs prepare or catalog; see store/README.md');
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(error => { console.error(error.message); process.exitCode = 1; });
