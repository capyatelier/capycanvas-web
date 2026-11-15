import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { loadAssets, publish, types } from '../site/scripts/store/google-play.mjs';

test('the reviewed listing and every platform image pass upload requirements', async () => {
  const assets = await loadAssets();
  assert.equal(assets.listing.title, 'Capy Canvas');
  assert.equal(assets.images.desktop.length, 7);
  assert.equal(assets.images.phoneScreenshots.length, 7);
});

function fixture({ wrongHash = false, rejectValidation = false } = {}) {
  const calls = [], uploaded = {};
  const bytes = Buffer.from('reviewed image');
  const digest = createHash('sha256').update(bytes).digest('hex');
  const assets = { listing: { language: 'en-US', title: 'Capy Canvas', shortDescription: 'Sketch and paint.', fullDescription: 'Artist-owned tools.' }, images: Object.fromEntries(Object.keys(types).map(type => [type, [{ bytes, sha256: digest }]])) };
  let listing;
  const request = async (url, options) => {
    const endpoint = new URL(url).pathname.split('/applications/art.capycanvas.editor')[1];
    const method = options.method;
    calls.push({ method, endpoint, url });
    let body = {};
    if (endpoint === '/edits' && method === 'POST') body = { id: '123', expiryTimeSeconds: '2000000000' };
    else if (endpoint === '/edits/123/listings') body = { listings: [{ language: 'en-US', title: 'Before', video: 'https://www.youtube.com/watch?v=existing' }] };
    else if (endpoint === '/edits/123/listings/en-US') {
      if (method === 'PUT') listing = JSON.parse(options.body);
      body = listing;
    } else if (endpoint.startsWith('/edits/123/listings/en-US/')) {
      const type = endpoint.split('/').at(-1);
      if (method === 'DELETE') uploaded[type] = [];
      if (method === 'POST') uploaded[type].push({ sha256: wrongHash ? 'wrong' : digest });
      body = { images: uploaded[type] ?? [{ sha256: 'old' }] };
    }
    if (rejectValidation && endpoint.endsWith(':validate')) return new Response('Rejected by Play', { status: 400 });
    return new Response(JSON.stringify(body));
  };
  return { assets, calls, request, listing: () => listing };
}

test('validation uploads and verifies an edit, preserves video, then discards without committing', async () => {
  const f = fixture();
  const result = await publish(f.assets, { mode: 'validate', token: 'fixture-token', request: f.request });
  assert.equal(result.status, 'validated');
  assert.equal(f.listing().video, 'https://www.youtube.com/watch?v=existing');
  assert.ok(!f.calls.some(call => call.endpoint.endsWith(':commit')));
  assert.equal(f.calls.at(-1).method, 'DELETE');
  assert.equal(f.calls.at(-1).endpoint, '/edits/123');
});

test('publish verifies assets and validates before a commit that refuses to interrupt review', async () => {
  const f = fixture();
  const result = await publish(f.assets, { mode: 'publish', token: 'fixture-token', request: f.request });
  assert.equal(result.status, 'committed');
  assert.equal(f.calls.at(-2).endpoint, '/edits/123:validate');
  assert.equal(f.calls.at(-1).endpoint, '/edits/123:commit');
  assert.equal(new URL(f.calls.at(-1).url).searchParams.get('changesInReviewBehavior'), 'ERROR_IF_IN_REVIEW');
});

for (const options of [{ wrongHash: true }, { rejectValidation: true }]) {
  test(`failed ${options.wrongHash ? 'image verification' : 'Play validation'} cannot commit`, async () => {
    const f = fixture(options);
    await assert.rejects(publish(f.assets, { mode: 'publish', token: 'fixture-token', request: f.request }));
    assert.ok(!f.calls.some(call => call.endpoint.endsWith(':commit')));
    assert.equal(f.calls.at(-1).method, 'DELETE');
    assert.equal(f.calls.at(-1).endpoint, '/edits/123');
  });
}


test('selected localized updates preserve English, video, graphics, tracks and app details', async () => {
  const calls = [], images = {};
  const listings = new Map([['en-US', { language: 'en-US', title: 'English', video: 'english-video' }],
    ['ja-JP', { language: 'ja-JP', title: 'Before', video: 'japanese-video' }],
    ['fr-FR', { language: 'fr-FR', title: 'French' }]]);
  const originalEnglish = structuredClone(listings.get('en-US'));
  const bytes = Buffer.from('native-image');
  const sha256 = createHash('sha256').update(bytes).digest('hex');
  const request = async (url, options) => {
    const path = new URL(url).pathname.split('/applications/art.capycanvas.editor')[1];
    calls.push({ method: options.method, path });
    let body = {};
    if (path === '/edits') body = { id: 'owned' };
    else if (path === '/edits/owned/listings') body = { listings: [...listings.values()] };
    else if (path === '/edits/owned/tracks') body = { tracks: [{ track: 'production', releases: [] }] };
    else if (path === '/edits/owned/details') body = { defaultLanguage: 'en-US' };
    else if (/\/listings\/[^/]+$/.test(path)) {
      const language = path.split('/').at(-1);
      if (options.method === 'PUT') listings.set(language, JSON.parse(options.body));
      body = listings.get(language);
    } else if (path.includes('/listings/ja-JP/')) {
      if (options.method === 'DELETE') images[path] = [];
      if (options.method === 'POST') images[path].push({ sha256 });
      body = { images: images[path] ?? [] };
    }
    return new Response(JSON.stringify(body));
  };
  await publish([{ listing: { language: 'ja-JP', title: 'カピカン', shortDescription: 'Draw', fullDescription: 'Paint' },
    images: { phoneScreenshots: [{ bytes, sha256 }] } }], { mode: 'validate', token: 'fixture', request });
  assert.deepEqual(listings.get('en-US'), originalEnglish);
  assert.equal(listings.get('ja-JP').video, 'japanese-video');
  assert.equal(listings.get('fr-FR').title, 'French');
  const mutations = calls.filter(c => c.method !== 'GET');
  assert.ok(!mutations.some(c => c.path.includes('/tracks') || c.path.includes('/details') || /icon|featureGraphic|en-US|fr-FR/.test(c.path)));
  assert.ok(mutations.every(c => c.path === '/edits' || c.path.startsWith('/edits/owned')));
  assert.deepEqual(calls.at(-1), { method: 'DELETE', path: '/edits/owned' });
});
