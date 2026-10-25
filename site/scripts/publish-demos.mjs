import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { locales } from './capture/languages.mjs';

const directory = process.env.DEMO_DIRECTORY || 'artifacts/sketch-demos';
const output = 'site/public/assets/demos';
const themes = ['light', 'dark'];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const run = promisify(execFile);
const planned = [];
const sources = {};
for (const locale of locales) for (const theme of themes) {
  const root = `${directory}/${locale}-${theme}`;
  const capture = JSON.parse(await readFile(`${root}/capture.json`, 'utf8'));
  assert.equal(capture.locale, locale); assert.equal(capture.theme, theme);
  assert.deepEqual(capture.errors, []);
  assert.equal(capture.colorWheel, 'Medium (216px)');
  assert.equal(capture.stages.find(stage => stage.name === 'blotty-ink-selected').preset, 33);
  assert.ok(capture.hueReleaseRadius > 158, 'Hue releases outside the wheel');
  const { revision, ...sourceManifest } = capture.source;
  sources[revision] = sourceManifest;
  const source = `${root}/sketch-demo-1080p.webm`;
  const bytes = await readFile(source);
  const { stdout } = await run('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', source]);
  const probe = JSON.parse(stdout);
  assert.equal(probe.streams.length, 1, 'Silent video only');
  const stream = probe.streams[0];
  assert.deepEqual([stream.codec_name, stream.width, stream.height, stream.r_frame_rate], ['vp9', 1920, 1080, '24/1']);
  const duration = Number(probe.format.duration);
  assert.ok(duration >= 24 && duration < 28, `About 25 seconds: ${source}`);
  assert.ok(bytes.length < 1500000, `Small download: ${source}`);
  planned.push({ source, file: `${locale}/sketch-${theme}.webm`, locale, theme, duration,
    bytes: bytes.length, sha256: hash(bytes), revision: capture.source.revision });
}
const recipes = ['capture-demo.mjs', 'capture/demo/motion.mjs', 'capture/demo/pointer.mjs', 'capture/demo/encode.mjs', 'browser.mjs', 'serve.mjs', 'capture/editor.mjs', 'capture/languages.mjs', 'capture/shoot.mjs'];
const recipeHashes = Object.fromEntries(await Promise.all(recipes.map(async file => [file, hash(await readFile(`site/scripts/${file}`))])));
for (const { source, file } of planned) {
  await mkdir(`${output}/${file.split('/')[0]}`, { recursive: true });
  await copyFile(source, `${output}/${file}`);
}
await writeFile(`${output}/manifest.json`, JSON.stringify({ width: 1920, height: 1080, fps: 24,
  codec: 'vp9', audio: false, locales, themes, sources, recipeHashes,
  videos: planned.map(({ source, ...entry }) => entry),
}, null, 2) + '\n');
console.log(`Published ${planned.length} localized demos (${Math.round(planned.reduce((n, v) => n + v.bytes, 0) / 1000000)} MB total; one variant per reader).`);
