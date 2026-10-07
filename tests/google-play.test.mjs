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
