import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

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
        assert.ok(Math.min(width, height) >= 320 && Math.max(width, height) <= (type === 'desktop' ? 7680 : 3840));
        assert.ok(Math.max(width, height) <= 2 * Math.min(width, height), `Screenshot aspect ratio: ${item.file}`);
        assert.equal(bytes[25], 2, `Opaque RGB screenshot: ${item.file}`);
      }
      images[type].push({ ...item, bytes });
    }
  }
  return { listing, images };
}

export async function loadLocalized(listingsPath, manifestPath, locales) {
  const listings = JSON.parse(await readFile(listingsPath, 'utf8')).languages;
  const manifest = manifestPath ? JSON.parse(await readFile(manifestPath, 'utf8')) : null;
  if (manifest) {
    assert.equal(manifest.schema, 1); assert.equal(manifest.platform, 'android');
    assert.match(manifest.appRevision, /^[a-f0-9]{40}$/); assert.match(manifest.recipeSha256, /^[a-f0-9]{64}$/);
  }
  const selected = listings.filter(row => locales.includes(row.play));
  assert.deepEqual(selected.map(r => r.play).sort(), [...new Set(locales)].sort(), 'Unknown Play locale');
  const result = [];
  for (const row of selected) {
    const listing = { language: row.play, title: row.name, shortDescription: row.summary, fullDescription: row.description };
    for (const [key, limit] of [['title', 30], ['shortDescription', 80], ['fullDescription', 4000]]) assert.ok([...listing[key]].length > 0 && [...listing[key]].length <= limit);
    const images = {};
    if (manifest) for (const [type, device] of [['phoneScreenshots', 'phone'], ['sevenInchScreenshots', 'tablet'], ['tenInchScreenshots', 'tablet']]) {
      const entries = manifest.captures.filter(i => i.language === row.ui && i.device === device);
      entries.sort((a, b) => ['light', 'dark'].indexOf(a.theme) - ['light', 'dark'].indexOf(b.theme) || ['paint', 'sketch', 'photo'].indexOf(a.scene) - ['paint', 'sketch', 'photo'].indexOf(b.scene));
      assert.equal(entries.length, 6, `${row.play}/${device}: six native variants required`);
      assert.equal(new Set(entries.map(i => i.scene + '/' + i.theme)).size, 6);
      images[type] = [];
      for (const item of entries) {
        assert.ok(['paint', 'sketch', 'photo'].includes(item.scene) && ['light', 'dark'].includes(item.theme));
        assert.match(item.file, /^[a-zA-Z0-9/.-]+\.png$/); assert.ok(!item.file.includes('..') && !item.file.startsWith('/'));
        const bytes = await readFile(resolve(dirname(manifestPath), item.file));
        assert.equal(sha256(bytes), item.sha256);
        assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
        const width = bytes.readUInt32BE(16), height = bytes.readUInt32BE(20);
        assert.deepEqual([width, height], [item.width, item.height]); assert.equal(bytes[25], 2);
        assert.ok(bytes.length <= 8 * 1024 ** 2 && Math.min(width, height) >= 320 && Math.max(width, height) <= 3840 && Math.max(width, height) <= 2 * Math.min(width, height));
        images[type].push({ ...item, bytes });
      }
    }
    result.push({ listing, images });
  }
  return result;
}

export async function publish(assets, { mode, token, request = fetch, report = async () => {} }) {
  assert.ok(['validate', 'publish'].includes(mode));
  assert.ok(token, 'GOOGLE_PLAY_TOKEN is required');
  const selected = Array.isArray(assets) ? assets : [assets];
  assert.ok(selected.length); assert.equal(new Set(selected.map(a => a.listing.language)).size, selected.length);
  for (const item of selected) {
    assert.match(item.listing.language, /^[a-zA-Z0-9-]+$/);
    for (const type of Object.keys(item.images)) assert.ok(type in types || type === 'desktop', `Unsupported image slot: ${type}`);
  }
  const base = 'https://androidpublisher.googleapis.com/androidpublisher/v3/applications/art.capycanvas.editor';
  const call = async (method, endpoint, body, image = false) => {
    const url = image ? `https://androidpublisher.googleapis.com/upload/androidpublisher/v3/applications/art.capycanvas.editor${endpoint}?uploadType=media` : `${base}${endpoint}`;
    const response = await request(url, {
      method, headers: { Authorization: `Bearer ${token}`, ...(body === undefined ? {} : { 'Content-Type': image ? 'image/png' : 'application/json' }) },
      body: body === undefined ? undefined : image ? body : JSON.stringify(body),
      signal: AbortSignal.timeout(120_000), redirect: 'error',
    });
    const text = await response.text();
    if (!response.ok) throw new Error(`${method} ${endpoint}: HTTP ${response.status}`);
    return text ? JSON.parse(text) : {};
  };
  const edit = await call('POST', '/edits', {});
  const prefix = `/edits/${edit.id}`;
  const result = { mode, editId: edit.id, status: 'preparing', uploaded: {} };
  let committed = false;
  try {
    const before = await call('GET', `${prefix}/listings`);
    const protectedState = { tracks: await call('GET', `${prefix}/tracks`), details: await call('GET', `${prefix}/details`) };
    const selectedLanguages = new Set(selected.map(a => a.listing.language));
    result.before = before;
    for (const item of selected) {
      const language = item.listing.language;
      const listingPath = `${prefix}/listings/${language}`;
      const previous = before.listings?.find(value => value.language === language);
      const listing = { ...previous, ...item.listing };
      await call('PUT', listingPath, listing);
      result.uploaded[language] = {};
      for (const type of Object.keys(item.images).filter(t => t !== 'desktop')) {
        const endpoint = `${listingPath}/${type}`;
        assert.ok(item.images[type].length > 0, 'Refusing an empty image replacement');
        await call('DELETE', endpoint);
        for (const image of item.images[type]) await call('POST', endpoint, image.bytes, true);
        const actual = (await call('GET', endpoint)).images ?? [];
        assert.deepEqual(actual.map(image => image.sha256), item.images[type].map(image => image.sha256), `Uploaded images differ: ${language}/${type}`);
        result.uploaded[language][type] = actual.map(image => ({ sha256: image.sha256 }));
        await report(result);
      }
      const actualListing = await call('GET', listingPath);
      for (const [key, value] of Object.entries(listing)) assert.equal(actualListing[key], value, `Listing field ${language}/${key}`);
    }
    const after = await call('GET', `${prefix}/listings`);
    const unaffected = values => (values.listings ?? []).filter(v => !selectedLanguages.has(v.language)).sort((a, b) => a.language.localeCompare(b.language));
    assert.deepEqual(unaffected(after), unaffected(before), 'Unselected listing changed');
    assert.deepEqual(await call('GET', `${prefix}/tracks`), protectedState.tracks, 'Tracks changed');
    assert.deepEqual(await call('GET', `${prefix}/details`), protectedState.details, 'App details changed');
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
  const { values, positionals } = parseArgs({ allowPositionals: true, options: { listings: { type: 'string' }, captures: { type: 'string' }, locale: { type: 'string', multiple: true } } });
  const mode = positionals[0] ?? 'check';
  assert.ok(['check', 'validate', 'publish'].includes(mode), 'Mode must be check, validate, or publish');
  assert.ok(!values.captures || values.listings, '--captures requires --listings');
  assert.ok(!values.listings || values.locale?.length, 'Select --locale explicitly with --listings');
  const assets = values.listings ? await loadLocalized(resolve(values.listings), values.captures && resolve(values.captures), values.locale) : await loadAssets();
  console.log('Checked selected listing text and image integrity. Desktop screenshots require Console upload.');
  if (mode === 'check') return;
  const directory = resolve(root, 'artifacts/google-play-publish');
  await mkdir(directory, { recursive: true });
  const result = await publish(assets, { mode, token: process.env.GOOGLE_PLAY_TOKEN,
    report: value => writeFile(resolve(directory, 'report.json'), JSON.stringify(value, null, 2) + '\n', { mode: 0o600 }),
  });
  console.log(`Google Play edit ${result.editId}: ${result.status}`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(error => { console.error(error.message); process.exitCode = 1; });
