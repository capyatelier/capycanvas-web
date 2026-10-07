import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
export const types = { icon: 'app-icon.png', featureGraphic: 'feature-graphic.png', phoneScreenshots: 'phone', sevenInchScreenshots: 'tablet-7-inch', tenInchScreenshots: 'tablet-10-inch' };
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');

export async function loadAssets(directory = resolve(root, 'store/google-play')) {
  const manifest = JSON.parse(await readFile(resolve(directory, 'manifest.json'), 'utf8'));
  const listing = { language: 'en-US' };
  for (const [field, file, limit] of [['title', 'app-name', 30], ['shortDescription', 'short-description', 80], ['fullDescription', 'full-description', 4000]]) {
    const value = (await readFile(resolve(directory, `en-US/${file}.txt`), 'utf8')).trim();
    assert.ok(value.length && [...value].length <= limit, `${file} must contain 1–${limit} characters`);
    listing[field] = value;
  }
  const images = {};
  for (const [type, location] of Object.entries({ ...types, desktop: 'desktop' })) {
    const files = manifest.assets.filter(item => item.file === `en-US/${location}` || item.file.startsWith(`en-US/${location}/`));
    assert.ok(type.endsWith('Screenshots') || type === 'desktop' ? files.length >= 4 && files.length <= 8 : files.length === 1, `Image count for ${type}`);
    images[type] = [];
    for (const item of files) {
      assert.match(item.file, /^en-US\/[a-z0-9/.-]+\.png$/);
      assert.ok(!item.file.includes('..'));
      const bytes = await readFile(resolve(directory, item.file));
      assert.equal(sha256(bytes), item.sha256, `Hash mismatch: ${item.file}`);
      assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', item.file);
      const width = bytes.readUInt32BE(16), height = bytes.readUInt32BE(20);
      assert.equal(width, item.width); assert.equal(height, item.height);
      const limit = type === 'icon' ? 1024 ** 2 : type === 'featureGraphic' ? 15 * 1024 ** 2 : 8 * 1024 ** 2;
      assert.ok(bytes.length <= limit, `Too large: ${item.file}`);
      if (type === 'icon') assert.deepEqual([width, height], [512, 512]);
      else if (type === 'featureGraphic') assert.deepEqual([width, height], [1024, 500]);
      else {
        assert.equal(width * 9, height * 16, `16:9 screenshot: ${item.file}`);
        assert.ok(height >= 1080 && width <= (type === 'desktop' || type === 'tenInchScreenshots' ? 7680 : 3840));
        assert.equal(bytes[25], 2, `Opaque RGB screenshot: ${item.file}`);
      }
      images[type].push({ ...item, bytes });
    }
  }
  return { listing, images };
}

export async function publish(assets, { mode, token, request = fetch, report = async () => {} }) {
  assert.ok(['validate', 'publish'].includes(mode));
  assert.ok(token, 'GOOGLE_PLAY_TOKEN is required');
  const base = 'https://androidpublisher.googleapis.com/androidpublisher/v3/applications/art.capycanvas.editor';
  const call = async (method, endpoint, body, image = false) => {
    const url = image ? `https://androidpublisher.googleapis.com/upload/androidpublisher/v3/applications/art.capycanvas.editor${endpoint}?uploadType=media` : `${base}${endpoint}`;
    const response = await request(url, {
      method, headers: { Authorization: `Bearer ${token}`, ...(body === undefined ? {} : { 'Content-Type': image ? 'image/png' : 'application/json' }) },
      body: body === undefined ? undefined : image ? body : JSON.stringify(body),
      signal: AbortSignal.timeout(120_000), redirect: 'error',
    });
    const text = await response.text();
    if (!response.ok) throw new Error(`${method} ${endpoint}: HTTP ${response.status} ${text}`);
    return text ? JSON.parse(text) : {};
  };
  const edit = await call('POST', '/edits', {});
  const prefix = `/edits/${edit.id}`;
  const result = { mode, editId: edit.id, expiryTimeSeconds: edit.expiryTimeSeconds, status: 'preparing', before: {}, uploaded: {} };
  let committed = false;
  try {
    const listings = await call('GET', `${prefix}/listings`);
    result.before.listing = listings.listings?.find(item => item.language === assets.listing.language) ?? null;
    for (const type of Object.keys(types)) result.before[type] = await call('GET', `${prefix}/listings/en-US/${type}`);
    await report(result);
    const listing = { ...result.before.listing, ...assets.listing };
    await call('PUT', `${prefix}/listings/en-US`, listing);
    for (const type of Object.keys(types)) {
      const endpoint = `${prefix}/listings/en-US/${type}`;
      await call('DELETE', endpoint);
      for (const image of assets.images[type]) await call('POST', endpoint, image.bytes, true);
      const actual = (await call('GET', endpoint)).images ?? [];
      assert.deepEqual(actual.map(image => image.sha256), assets.images[type].map(image => image.sha256), `Uploaded images differ: ${type}`);
      result.uploaded[type] = actual;
      await report(result);
    }
    const actualListing = await call('GET', `${prefix}/listings/en-US`);
    for (const [key, value] of Object.entries(assets.listing)) assert.equal(actualListing[key], value, `Listing field ${key}`);
    await call('POST', `${prefix}:validate`);
    result.status = 'validated';
    await report(result);
    if (mode === 'publish') {
      await call('POST', `${prefix}:commit?changesInReviewBehavior=ERROR_IF_IN_REVIEW`);
      committed = true;
      result.status = 'committed';
      await report(result);
    }
    return result;
  } catch (error) {
    result.status = 'failed'; result.error = error.message;
    await report(result);
    throw error;
  } finally {
    if (!committed) await call('DELETE', prefix);
  }
}

async function main() {
  const mode = process.argv[2] ?? 'check';
  assert.ok(['check', 'validate', 'publish'].includes(mode), 'Mode must be check, validate, or publish');
  const assets = await loadAssets();
  console.log('Checked listing text and 30 PNG files. Desktop screenshots require Console upload.');
  if (mode === 'check') return;
  const directory = resolve(root, 'artifacts/google-play-publish');
  await mkdir(directory, { recursive: true });
  const result = await publish(assets, { mode, token: process.env.GOOGLE_PLAY_TOKEN,
    report: value => writeFile(resolve(directory, 'report.json'), JSON.stringify(value, null, 2) + '\n'),
  });
  console.log(`Google Play edit ${result.editId}: ${result.status}`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(error => { console.error(error.message); process.exitCode = 1; });
