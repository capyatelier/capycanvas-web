import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { compatibility } from './capture-compatibility.mjs';

// Snapshot tracked product source, then build it separately from an artist's checkout.
// APP_REVISION may select a commit; uncommitted product edits are never captured.
const repository = resolve(process.env.APP_REPO || '../draw');
const revision = execFileSync('git', ['-C', repository, 'rev-parse', `${process.env.APP_REVISION || 'HEAD'}^{commit}`], { encoding: 'utf8' }).trim();
const staging = resolve(process.env.CAPTURE_APP_DIR || 'artifacts/capture-app', revision);
mkdirSync(staging, { recursive: true });
const archive = execFileSync('git', ['-C', repository, 'archive', revision], { maxBuffer: 256 * 1024 * 1024 });
execFileSync('tar', ['-x', '-C', staging], { input: archive });
const patches = [];
for (const correction of compatibility) {
  const path = join(staging, correction.file);
  if (!existsSync(path)) continue;
  const source = readFileSync(path, 'utf8');
  if (!source.includes(correction.before)) continue;
  if (source.split(correction.before).length !== 2) throw Error(`Ambiguous correction: ${correction.file}`);
  writeFileSync(path, source.replace(correction.before, correction.after));
  patches.push(correction);
}
const env = { ...process.env, CARGO_TARGET_DIR: resolve(process.env.CAPTURE_TARGET_DIR || 'artifacts/capture-target') };
execFileSync('bash', ['apps/layer-web/build.sh'], { cwd: staging, env, stdio: 'inherit' });
const web = join(staging, 'apps/layer-web');
// Hash both Wasm and the JS entry point: the capture runner checks these bytes.
const hashes = Object.fromEntries(['app.js', 'pkg/layer_web_bg.wasm'].map(path => [path, createHash('sha256').update(readFileSync(join(web, path))).digest('hex')]));
const provenance = { source: 'https://github.com/capyatelier/capycanvas', revision, patches, hashes };
writeFileSync(join(web, 'capture-source.json'), JSON.stringify(provenance, null, 2) + '\n');
mkdirSync('artifacts', { recursive: true });
writeFileSync('artifacts/capture-app.json', JSON.stringify({ directory: web, ...provenance }, null, 2) + '\n');
console.log(`Capture app prepared from ${revision}. Run npm run capture.`);
