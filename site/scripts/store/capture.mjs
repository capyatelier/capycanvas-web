import assert from 'node:assert/strict';
import { execFile, execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { availableParallelism, freemem } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import { artwork, scenes } from '../capture/showcase-scenes.mjs';
import { directory, imagePath, origin, recipe, recipeFiles, themes, window } from './gtk.mjs';

const scripts = fileURLToPath(new URL('../', import.meta.url));
const published = resolve(scripts, '../public');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const hashFile = async path => hash(await readFile(path));
const json = async path => JSON.parse(await readFile(path, 'utf8'));
const list = value => value?.split(',').map(item => item.trim()).filter(Boolean);
const key = ({ scene, language, theme }) => `${scene}|${language}|${theme}`;

function dimensions(bytes) {
  assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], 'PNG signature');
  assert.equal(bytes.subarray(12, 16).toString('latin1'), 'IHDR');
  return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
}

function alpha(bytes) {
  const png = PNG.sync.read(bytes);
  const at = (x, y) => png.data[(y * png.width + x) * 4 + 3];
  let transparent = 0;
  for (let i = 3; i < png.data.length; i += 4) if (png.data[i] === 0) transparent++;
  return { colorType: png.colorType, transparent, corners: [at(0, 0), at(png.width - 1, 0), at(0, png.height - 1), at(png.width - 1, png.height - 1)] };
}

async function recipeHashes() {
  return Object.fromEntries(await Promise.all(recipeFiles.map(async path => [path, await hashFile(join(scripts, path))])));
}

const gibibyte = 1024 ** 3;
const defaultJobs = () => Math.max(1, Math.min(Math.floor(availableParallelism() / 8), Math.floor(freemem() / (8 * gibibyte)), 16));

async function helper(app, args) {
  try {
    const { stdout } = await promisify(execFile)('python3', [join(app, 'tools/visual/gtk-store-capture.py'), ...args], { maxBuffer: 64 * 1024 * 1024 });
    return JSON.parse(stdout);
  } catch (error) {
    throw Error((error.stderr || error.stdout || error.message).trim());
  }
}

async function builtExecutable(log) {
  const found = new Set();
  for (const line of (await readFile(log, 'utf8')).split('\n')) {
    let item;
    try { item = JSON.parse(line); } catch { continue; }
    if (item.reason === 'compiler-artifact' && item.profile?.test && ['layer-linux', 'layer_linux'].includes(item.target?.name) && item.executable) found.add(item.executable);
  }
  assert.equal(found.size, 1, 'Cargo reported exactly one GTK test executable');
  return [...found][0];
}

async function capture() {
  const app = resolve(process.env.APP_REPO || '../capycanvas');
  const git = (...args) => execFileSync('git', ['-C', app, ...args], { encoding: 'utf8' }).trim();
  const run = resolve(process.env.STORE_OUTPUT || `artifacts/store-capture/${new Date().toISOString().replace(/[:.]/g, '-')}`);
  assert.ok(!existsSync(run), `Output must be new: ${run}`);
  await mkdir(run, { recursive: true });
  const [width, height] = (process.env.STORE_WINDOW || `${window.width}x${window.height}`).split('x').map(Number);
  const size = { width, height, scale: window.scale };
  const recipePath = join(run, 'recipe.json');
  await writeFile(recipePath, JSON.stringify(recipe(run), null, 2) + '\n');

  let executable = process.env.STORE_EXECUTABLE && resolve(process.env.STORE_EXECUTABLE);
  const capabilities = await helper(app, ['--list-languages', '--output', join(run, 'capabilities'), ...(executable ? ['--executable', executable] : [])]);
  executable ??= await builtExecutable(join(run, 'capabilities/session/build.log'));
  const selected = {
    scenes: list(process.env.STORE_SCENES) ?? scenes.map(scene => scene.id),
    languages: list(process.env.STORE_LANGUAGES) ?? capabilities.languages,
    themes: list(process.env.STORE_THEMES) ?? themes,
  };
  for (const language of selected.languages) assert.ok(capabilities.languages.includes(language), `App language: ${language}`);
  assert.deepEqual([...capabilities.themes].sort(), [...themes].sort(), 'The app offers light and dark');
  const complete = !process.env.STORE_WINDOW && ['scenes', 'languages', 'themes'].every(name => !process.env[`STORE_${name.toUpperCase()}`]);
  const summary = {
    app: { repository: app, revision: git('rev-parse', 'HEAD'), dirty: Boolean(git('status', '--porcelain', '--untracked-files=no')), executable, executable_sha256: await hashFile(executable) },
    window: size, recipe_sha256: await hashFile(recipePath), recipeHashes: await recipeHashes(),
    languages: capabilities.languages, themes, scenes: scenes.map(scene => scene.id), complete, results: [],
  };
  let saving = Promise.resolve();
  const save = () => (saving = saving.then(() => writeFile(join(run, 'run.json'), JSON.stringify(summary, null, 2) + '\n')));
  for (const scene of selected.scenes) for (const language of selected.languages) for (const theme of selected.themes) summary.results.push({ scene, language, theme, attempts: [] });
  const jobs = Number(process.env.STORE_JOBS) || defaultJobs();
  summary.jobs = jobs;
  await save();
  const queue = [...summary.results];
  await Promise.all(Array.from({ length: Math.min(jobs, queue.length) }, async () => {
    for (let result; (result = queue.shift());) {
      const { scene, language, theme } = result;
      const started = Date.now();
      for (let attempt = 1; attempt <= 2 && !result.ok; attempt++) {
        result.output = join(run, `${scene}-${language.toLowerCase()}-${theme}${attempt > 1 ? `-${attempt}` : ''}`);
        try {
          await helper(app, ['--recipe', recipePath, '--scene', scene, '--language', language, '--theme', theme,
            '--width', String(width), '--height', String(height), '--scale', String(window.scale), '--executable', executable, '--output', result.output]);
          result.ok = true;
        } catch (error) {
          result.ok = false;
          result.attempts.push({ output: result.output, error: error.message.split('\n').at(-1) });
        }
      }
      result.seconds = Math.round((Date.now() - started) / 100) / 10;
      await save();
      console.log(`${result.ok ? 'ok  ' : 'FAIL'} ${scene} ${language} ${theme} ${result.seconds} s${result.attempts.length ? ` after ${result.attempts.length} failed attempt(s)` : ''}`);
    }
  }));
  const failed = summary.results.filter(result => !result.ok);
  console.log(`${summary.results.length - failed.length} of ${summary.results.length} captured in ${run}`);
  if (failed.length) process.exitCode = 1;
}

const appSource = { source: 'https://github.com/capyatelier/capycanvas', helper: 'tools/visual/gtk-store-capture.py' };
const expectedKeys = manifest => manifest.scenes.flatMap(scene => manifest.languages.flatMap(language => themes.map(theme => key({ scene, language, theme }))));
const provenance = capture => {
  assert.deepEqual(Object.keys(capture).sort(), ['executable_sha256', 'recipe_sha256', 'source_revision']);
  assert.match(capture.source_revision, /^[a-f0-9]{40}$/);
  for (const field of ['executable_sha256', 'recipe_sha256']) assert.match(capture[field], /^[a-f0-9]{64}$/);
};

export function mergeRefresh(current, run, replacements) {
  assert.deepEqual(current.app, appSource, 'Per-image app provenance is required');
  for (const field of ['window', 'recipeHashes', 'languages', 'themes', 'scenes']) assert.deepEqual(current[field], run[field], `Refresh cannot change ${field}`);
  assert.deepEqual(current.images.map(key), expectedKeys(current), 'Existing catalog covers every variant exactly once');
  for (const image of current.images) {
    provenance(image.capture);
    assert.equal(image.path, imagePath(image), 'Canonical image path');
    assert.equal(image.url, `${origin}/${image.path}`, 'Canonical image URL');
  }
  assert.ok(replacements.length, 'Refresh needs at least one captured variant');
  const updated = new Map(replacements.map(image => [key(image), image]));
  assert.equal(updated.size, replacements.length, 'One replacement per variant');
  const known = new Set(current.images.map(key));
  for (const [variant, image] of updated) {
    assert.ok(known.has(variant), `Existing variant: ${variant}`);
    assert.deepEqual(image.capture, { source_revision: run.app.revision, executable_sha256: run.app.executable_sha256, recipe_sha256: run.recipe_sha256 }, `Captured provenance: ${variant}`);
    assert.equal(image.path, imagePath(image), 'Canonical replacement path');
    assert.equal(image.url, `${origin}/${image.path}`, 'Canonical replacement URL');
  }
  return { ...current, images: current.images.map(image => updated.get(key(image)) ?? image) };
}

async function captureImages(run) {
  assert.equal(run.app.dirty, false, 'Captured from committed app sources');
  provenance({ source_revision: run.app.revision, executable_sha256: run.app.executable_sha256, recipe_sha256: run.recipe_sha256 });
  assert.deepEqual(run.window, window, 'Captured at the published window size');
  assert.deepEqual(run.recipeHashes, await recipeHashes(), 'Scene recipe changed since the capture; capture again');
  assert.deepEqual(run.themes, themes);
  assert.deepEqual(run.scenes, scenes.map(scene => scene.id));
  assert.ok(run.results.length, 'Run needs captured variants');
  assert.equal(new Set(run.results.map(key)).size, run.results.length, 'Captured variants are unique');
  const supported = new Set(expectedKeys(run));
  const images = [];
  for (const result of run.results) {
    assert.ok(supported.has(key(result)), `Supported variant: ${key(result)}`);
    assert.ok(result.ok, `Captured: ${key(result)}`);
    const manifest = await json(join(result.output, 'capture.json'));
    for (const [field, value] of Object.entries({ source_revision: run.app.revision, source_dirty: false, executable_sha256: run.app.executable_sha256, recipe_sha256: run.recipe_sha256, ...run.window })) {
      assert.deepEqual(manifest[field], value, `${key(result)}: ${field}`);
    }
    assert.equal(manifest.captures.length, 1, 'Exactly one image per capture');
    const [shot] = manifest.captures;
    assert.deepEqual([shot.scene, shot.language, shot.theme], [result.scene, result.language, result.theme], `Variant recorded: ${key(result)}`);
    const source = resolve(result.output, shot.image);
    for (const file of [shot.image, shot.sidecar]) assert.ok(resolve(result.output, file).startsWith(resolve(result.output, 'images') + '/'), 'Capture files remain inside output/images');
    const bytes = await readFile(source);
    const sidecar = await json(join(result.output, shot.sidecar));
    const [width, height] = dimensions(bytes);
    assert.deepEqual([width, height], sidecar.dimensions, `Sidecar dimensions: ${key(result)}`);
    const padding = alpha(bytes);
    assert.equal(padding.colorType, 6, 'RGBA capture');
    assert.ok(padding.transparent > 0, 'Transparent padding');
    assert.ok(width > window.width * window.scale && height > window.height * window.scale, 'Full-scale window and shadow');
    assert.deepEqual(padding.corners, [0, 0, 0, 0], `Transparent PNG corners: ${key(result)}`);
    assert.deepEqual(sidecar.alpha.corners, [0, 0, 0, 0], `Transparent sidecar corners: ${key(result)}`);
    const path = imagePath(result);
    images.push({ scene: result.scene, language: result.language, theme: result.theme, url: `${origin}/${path}`, path, width, height, bytes: bytes.length, sha256: hash(bytes),
      capture: { source_revision: run.app.revision, executable_sha256: run.app.executable_sha256, recipe_sha256: run.recipe_sha256 }, source });
  }
  return images;
}

async function artworkHashes() {
  return Object.fromEntries(await Promise.all(scenes.map(async ({ source }) => {
    const bytes = await readFile(new URL(source, artwork));
    return [source, { bytes: bytes.length, sha256: hash(bytes) }];
  })));
}

async function writeImages(images, manifest) {
  for (const image of images) {
    await mkdir(join(published, image.path, '..'), { recursive: true });
    await copyFile(image.source, join(published, image.path));
    delete image.source;
  }
  await writeFile(join(published, directory, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
}

async function publish(runDirectory) {
  assert.ok(runDirectory, 'Usage: publish <run directory>');
  const run = await json(join(resolve(runDirectory), 'run.json'));
  assert.ok(run.complete, 'Only a full run at the published window size can replace the whole catalog');
  assert.deepEqual(run.results.map(key), expectedKeys(run), 'Every scene, language and theme was captured');
  const images = await captureImages(run);
  const manifest = {
    description: 'Native GTK screenshots of Capy Canvas for software centers: each showcase scene in every app language, light and dark, captured from a fresh app on a private headless display at real monitor scale. Images keep the native window corners and shadow on transparent padding.',
    app: appSource, window: run.window, recipeHashes: run.recipeHashes, artwork: await artworkHashes(), languages: run.languages, themes, scenes: run.scenes, images,
  };
  await rm(join(published, directory), { recursive: true, force: true });
  await writeImages(images, manifest);
  console.log(`Published ${images.length} images to ${join(published, directory)}`);
}

async function refresh(runDirectory) {
  assert.ok(runDirectory, 'Usage: refresh <run directory>');
  const run = await json(join(resolve(runDirectory), 'run.json'));
  const replacements = await captureImages(run);
  const current = await json(join(published, directory, 'manifest.json'));
  const manifest = mergeRefresh(current, run, replacements);
  assert.deepEqual(current.artwork, await artworkHashes(), 'Refresh cannot change canonical artwork');
  for (const image of current.images) {
    const bytes = await readFile(join(published, image.path));
    assert.equal(hash(bytes), image.sha256, `Existing image matches provenance: ${image.path}`);
    assert.equal(bytes.length, image.bytes, `Existing image size: ${image.path}`);
    assert.deepEqual(dimensions(bytes), [image.width, image.height], `Existing image dimensions: ${image.path}`);
  }
  await writeImages(replacements, manifest);
  console.log(`Refreshed ${replacements.length} images; retained ${current.images.length - replacements.length} in ${join(published, directory)}`);
}

async function verify(base = origin) {
  const local = join(published, directory, 'manifest.json');
  const manifest = await json(local);
  const remote = await fetch(`${base}/${directory}/manifest.json`, { cache: 'no-store' });
  assert.equal(remote.status, 200, 'Manifest is published');
  assert.equal(hash(Buffer.from(await remote.arrayBuffer())), await hashFile(local), 'Published manifest matches the committed one');
  const checks = [];
  for (let i = 0; i < manifest.images.length; i += 6) {
    checks.push(...await Promise.all(manifest.images.slice(i, i + 6).map(async image => {
      const url = image.url.replace(origin, base);
      const response = await fetch(url, { cache: 'no-store' });
      const bytes = Buffer.from(await response.arrayBuffer());
      const check = { url, status: response.status, redirected: response.redirected, type: response.headers.get('content-type'), bytes: bytes.length, sha256: hash(bytes) };
      assert.equal(check.status, 200, url);
      assert.equal(check.redirected, false, `Served without a redirect: ${url}`);
      assert.equal(check.type, 'image/png', url);
      assert.equal(check.sha256, image.sha256, `Deployed bytes match the manifest: ${url}`);
      assert.equal(await hashFile(join(published, image.path)), image.sha256, `Committed bytes match the manifest: ${image.path}`);
      assert.deepEqual(dimensions(bytes), [image.width, image.height], url);
      Object.assign(check, alpha(bytes));
      assert.equal(check.colorType, 6, `RGBA: ${url}`);
      assert.ok(check.transparent > 0, `Transparent padding: ${url}`);
      assert.deepEqual(check.corners, [0, 0, 0, 0], `Transparent corners: ${url}`);
      return check;
    })));
  }
  const report = { verified: new Date().toISOString(), base, manifest: hash(await readFile(local)), images: checks };
  await mkdir('artifacts/store-capture', { recursive: true });
  await writeFile('artifacts/store-capture/verify.json', JSON.stringify(report, null, 2) + '\n');
  console.log(`Verified ${checks.length} images at ${base}`);
}

const [command = 'capture', ...args] = process.argv.slice(2);
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const commands = { capture, publish, refresh, verify };
  assert.ok(commands[command], `Unknown command: ${command}`);
  await commands[command](...args);
}
