import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { promisify } from 'node:util';
import { PNG } from 'pngjs';

const execute = promisify(execFile);
const required = name => { assert.ok(process.env[name], `${name} is required`); return process.env[name]; };
const app = resolve(required('NATIVE_APP_REPO'));
const executable = resolve(required('NATIVE_EXECUTABLE'));
const projects = resolve(process.env.RELEASE_PROJECT_DIR || 'artifacts/release/visual');
const output = resolve(process.env.NATIVE_VISUAL_OUTPUT || 'artifacts/release/native-visual');
const run = join(output, 'runs', new Date().toISOString().replace(/[:.]/g, '-'));
const helper = 'tools/visual/gtk-store-capture.py';
const ids = ['charcoal', 'pastel', 'pencil', 'crayon'];
const jobs = Number(process.env.NATIVE_VISUAL_JOBS || 1);
assert.ok(Number.isInteger(jobs) && jobs >= 1 && jobs <= ids.length, 'NATIVE_VISUAL_JOBS must be between 1 and 4');
const window = { width: 1840, height: 1200, scale: 2 };
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const hashFile = async file => hash(await readFile(file));
const git = async (...args) => (await execute('git', ['-C', app, ...args])).stdout.trim();
const revision = await git('rev-parse', 'HEAD');
assert.match(revision, /^[a-f0-9]{40}$/);
assert.equal(await git('status', '--porcelain', '--untracked-files=no'), '', 'Native app sources must be clean');
const executableHash = await hashFile(executable);
await mkdir(run, { recursive: true });

async function capture(id) {
  const project = join(projects, `${id}.capy`);
  const projectHash = await hashFile(project);
  const { stdout } = await execute('python3', ['-c', `
import json,sys,zipfile
with zipfile.ZipFile(sys.argv[1]) as package:
    manifest=json.loads(package.read('manifest.json'))
    root=next(item for item in manifest['objects'] if item['id']==manifest['root']['ref'])
    assert root['type']=='capy.composition/2'
    print(json.dumps(root['data']['size']))
`, project]);
  const extent = JSON.parse(stdout);
  assert.ok(extent.length === 2 && extent.every(value => Number.isInteger(value) && value > 0), 'Project pixel dimensions');
  const recipe = join(run, `${id}-recipe.json`);
  await writeFile(recipe, JSON.stringify({ scenes: [{
    id, source: relative(run, project), workspace: 'illustrator', steps: [
      { type: 'action', action: { type: 'invoke', command: 'zen_mode' } },
      { type: 'action', action: { type: 'invoke', command: 'fit_canvas' } },
    ],
  }] }, null, 2) + '\n');
  const captureDirectory = join(run, id);
  console.log(`Capturing native ${id}`);
  try {
    const result = await execute('python3', [join(app, helper), '--recipe', recipe, '--scene', id,
      '--language', 'en', '--theme', 'light', '--width', String(window.width), '--height', String(window.height),
      '--scale', String(window.scale), '--executable', executable, '--output', captureDirectory],
    { maxBuffer: 64 * 1024 * 1024 });
    await writeFile(join(run, `${id}.log`), result.stdout + result.stderr);
  } catch (error) {
    await writeFile(join(run, `${id}.log`), (error.stdout || '') + (error.stderr || '') + error.message);
    throw Error(`Native ${id} capture failed; see ${join(captureDirectory, 'session/run.log')}`, { cause: error });
  }
  const metadataBytes = await readFile(join(captureDirectory, 'capture.json'));
  const metadata = JSON.parse(metadataBytes);
  assert.equal(metadata.source_revision, revision);
  assert.equal(metadata.source_dirty, false);
  assert.equal(metadata.executable_sha256, executableHash);
  assert.equal(metadata.recipe_sha256, await hashFile(recipe));
  for (const [key, value] of Object.entries(window)) assert.equal(metadata[key], value);
  assert.equal(metadata.captures.length, 1);
  const shot = metadata.captures[0];
  assert.equal(shot.scene, id);
  assert.equal(shot.missing_glyphs, 0);
  assert.deepEqual(shot.window, [window.width, window.height]);
  const camera = shot.camera;
  assert.equal(camera.rotation, 0);
  assert.deepEqual(camera.flipped, [false, false]);
  assert.deepEqual(camera.viewport, [window.width * window.scale, window.height * window.scale]);
  const sourceBytes = await readFile(join(captureDirectory, shot.image));
  const source = PNG.sync.read(sourceBytes);
  const sidecar = JSON.parse(await readFile(join(captureDirectory, shot.sidecar), 'utf8'));
  assert.deepEqual(sidecar.dimensions, [source.width, source.height]);
  assert.deepEqual(sidecar.alpha.corners, [0, 0, 0, 0]);
  const padding = [(source.width - camera.viewport[0]) / 2, (source.height - camera.viewport[1]) / 2];
  assert.ok(padding.every(value => Number.isInteger(value) && value > 0), 'Symmetric native window shadow padding');
  const bounds = [padding[0] + camera.translation[0], padding[1] + camera.translation[1],
    extent[0] * camera.zoom, extent[1] * camera.zoom];
  assert.ok(bounds.every(Number.isFinite) && camera.zoom > 0);
  const crop = [Math.ceil(bounds[0]), Math.ceil(bounds[1]),
    Math.floor(bounds[0] + bounds[2]) - Math.ceil(bounds[0]),
    Math.floor(bounds[1] + bounds[3]) - Math.ceil(bounds[1])];
  const [x, y, width, height] = crop;
  assert.ok(x >= padding[0] && y >= padding[1] && width > 0 && height > 0
    && x + width <= source.width - padding[0] && y + height <= source.height - padding[1], 'Entire paper is inside the native client');
  const paper = new PNG({ width, height });
  PNG.bitblt(source, paper, x, y, width, height, 0, 0);
  for (let alpha = 3; alpha < paper.data.length; alpha += 4) assert.equal(paper.data[alpha], 255, 'Paper crop is opaque');
  const bytes = PNG.sync.write(paper);
  const file = `${id}.png`;
  await writeFile(join(output, file), bytes);
  assert.equal(await hashFile(project), projectHash, 'Source project is unchanged');
  console.log(`Cropped ${id}: ${width} × ${height}`);
  return { id, file, sha256: hash(bytes), project_sha256: projectHash, crop, size: [width, height],
    extent, paper_bounds: bounds, camera, shadow_padding: padding, source_image_size: [source.width, source.height],
    source_image_sha256: hash(sourceBytes), capture_manifest_sha256: hash(metadataBytes), recipe_sha256: metadata.recipe_sha256 };
}

const captures = [];
for (let start = 0; start < ids.length; start += jobs) {
  captures.push(...await Promise.all(ids.slice(start, start + jobs).map(capture)));
}

assert.equal(await git('rev-parse', 'HEAD'), revision, 'App revision is unchanged');
assert.equal(await git('status', '--porcelain', '--untracked-files=no'), '', 'Native app sources remain clean');
assert.equal(await hashFile(executable), executableHash, 'Native executable is unchanged');
await writeFile(join(output, 'provenance.json'), JSON.stringify({
  source: { repository: 'https://github.com/capyatelier/capycanvas', revision, executable_sha256: executableHash,
    helper, helper_sha256: await hashFile(join(app, helper)), capture: 'Native GTK Wayland window, paper cropped without resampling', window },
  captures,
}, null, 2) + '\n');
console.log(`Native paper samples written to ${output}`);
