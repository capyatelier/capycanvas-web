import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve } from 'node:path';

const run = promisify(execFile);

export async function buildReleaseSite(fixture) {
  const outDir = resolve('artifacts/release-pages', fixture);
  await run(resolve('node_modules/.bin/astro'), ['build', '--root', 'site', '--outDir', outDir], {
    env: { ...process.env, RELEASES_FILE: resolve('tests/fixtures', `${fixture}.json`) },
    maxBuffer: 64 * 1024 * 1024,
  });
  return outDir;
}
