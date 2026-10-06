import test, { before } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { content, languages } from '../site/src/data/content.mjs';
import { fetchReleases, publishedReleases, releasesApiUrl, releasesUrl, renderNotes } from '../site/src/lib/releases.mjs';
import { buildReleaseSite } from './release-sites.mjs';

const fixture = JSON.parse(await readFile('tests/fixtures/releases.json', 'utf8'));
const download = 'https://github.com/capyatelier/capycanvas/releases/download';
const flatpakRef = 'https://capyatelier.github.io/capycanvas/capycanvas.flatpakref';
const neverOffered = /(?:\.msix|\.aab|\.zsync|\.zip|\.AppImage|\.tar\.zst|SHA256SUMS)"/;
const prefix = locale => locale === 'en' ? '' : `${locale}/`;
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const escapeText = text => escape(text).replaceAll("'", '&#39;');
const lead = t => escapeText(t.intro).replace('{feedback}', `<a href="https://github.com/capyatelier/capycanvas/issues">${escapeText(t.feedback)}</a>`);

test('only published releases are offered, newest first', () => {
  const releases = publishedReleases(fixture);
  assert.ok(fixture.some(release => release.draft) && fixture.some(release => release.prerelease), 'The fixture includes a draft and a pre-release');
  assert.deepEqual(releases.map(release => [release.version, release.date]), [['1.0.2', '2026-10-02'], ['1.0.1', '2026-09-12'], ['1.0.0', '2026-08-30']]);
  assert.deepEqual(publishedReleases([]), []);
});

test('each platform offers its variants, and the Flatpak installs through its reference', () => {
  const [latest, previous, first] = publishedReleases(fixture);
  const asset = name => ({ name, url: `${download}/v1.0.2/${name}` });
  assert.deepEqual(latest.files, {
    android: [{ variant: 'apk', ...asset('capycanvas-1.0.2-android.apk') }],
    linux: [{ variant: 'flatpak', ...asset('capycanvas-1.0.2-linux-x86_64.flatpak'), install: { name: 'capycanvas.flatpakref', url: flatpakRef } }],
    windows: [{ variant: 'x64', ...asset('capycanvas-1.0.2-windows-x64-setup.exe') }, { variant: 'arm64', ...asset('capycanvas-1.0.2-windows-arm64-setup.exe') }],
    mac: [{ variant: 'appleSilicon', ...asset('capycanvas-1.0.2-macos-arm64.dmg') }],
  });
  assert.equal(latest.url, 'https://github.com/capyatelier/capycanvas/releases/tag/v1.0.2');
  assert.deepEqual(Object.keys(previous.files), ['android', 'windows'], 'AppImages and an unfinished upload are not offered');
  assert.deepEqual(Object.keys(first.files), ['windows']);
  assert.equal(first.notes, '');
  for (const release of publishedReleases(fixture)) {
    for (const file of Object.values(release.files).flat().flatMap(file => [file, file.install].filter(Boolean))) assert.doesNotMatch(`${file.url}"`, neverOffered);
  }
});

test('release notes are sanitized Markdown that fits under the page headings', () => {
  const html = renderNotes([
    '# Title', '## Section', '<script>alert(1)</script><style>body{}</style>',
    '<img src="https://github.com/user-attachments/assets/a.png" onerror="alert(1)"> <a href="#top" onclick="alert(1)">top</a>',
    '', '[bad](javascript:alert(1)) [pull](/capyatelier/capycanvas/pull/1) <iframe src="https://example.com"></iframe>', '', 'Note[^1]', '', '[^1]: Footnote.',
  ].join('\n'), { base: 'https://github.com/capyatelier/capycanvas/releases/tag/v1.0.2', prefix: 'notes-1-0-2-' });
  assert.match(html, /^<h3>Title<\/h3>\n<h4>Section<\/h4>/);
  assert.doesNotMatch(html, /<script|<style|<iframe|alert|body\{\}|onerror|onclick|javascript:/);
  assert.ok(html.includes('<img src="https://github.com/user-attachments/assets/a.png">'));
  assert.ok(html.includes('<a href="#notes-1-0-2-top">top</a>'));
  assert.ok(html.includes('<a href="https://github.com/capyatelier/capycanvas/pull/1">pull</a>'));
  assert.match(html, /href="#notes-1-0-2-fn-1" id="notes-1-0-2-fnref-1"/);
  assert.match(html, /<li id="notes-1-0-2-fn-1">/);
});

test('the GitHub API is read page by page, with GITHUB_TOKEN when set', async () => {
  const requests = [];
  const pages = { [releasesApiUrl]: [[fixture[0]], '<https://api.github.com/page2>; rel="next", <https://api.github.com/page2>; rel="last"'], 'https://api.github.com/page2': [[fixture[1]], ''] };
  const fetch = async (url, { headers }) => {
    requests.push([url, headers.Authorization]);
    return new Response(JSON.stringify(pages[url][0]), { headers: { link: pages[url][1] } });
  };
  assert.deepEqual(await fetchReleases({ token: 'secret', fetch }), fixture.slice(0, 2));
  assert.deepEqual(requests, [[releasesApiUrl, 'Bearer secret'], ['https://api.github.com/page2', 'Bearer secret']]);
  requests.length = 0;
  await fetchReleases({ token: '', fetch });
  assert.deepEqual(requests.map(([, authorization]) => authorization), [undefined, undefined]);
  await assert.rejects(fetchReleases({ token: '', fetch: async () => new Response('{}', { status: 403, statusText: 'rate limit exceeded' }) }), /403 rate limit exceeded/);
});

let published, empty;
before(async () => {
  published = await buildReleaseSite('releases');
  empty = await buildReleaseSite('no-releases');
});
const read = (root, path) => readFile(join(root, path, 'index.html'), 'utf8');
const main = html => html.match(/<main[\s\S]*<\/main>/)[0];

for (const locale of Object.keys(languages)) {
  const t = content[locale];
  test(`${locale}: the Download page offers the latest published release`, async () => {
    const html = await read(published, `${prefix(locale)}download`);
    const page = main(html);
    assert.ok(html.includes(`<meta name="description" content="${escape(t.download.metaReleased)}">`));
    assert.match(page, new RegExp(`<p class="lead"[^>]*>${lead(t.download)}</p><div class="pick"`));
    const variants = t.download.variants;
    const buttons = [...page.matchAll(/<a class="button" href="([^"]+)" aria-describedby="platform-(\w+)"[^>]*>(?:<svg[\s\S]*?<\/svg>)?([^<]+)<\/a>/g)].map(([, url, platform, label]) => [platform, url, label]);
    assert.deepEqual(buttons, [
      ['ipad', `/${prefix(locale)}download/ipad-beta/`, escapeText(t.download.joinBeta)],
      ['android', `/${prefix(locale)}download/android-beta/`, escapeText(t.download.joinBeta)],
      ['android', `${download}/v1.0.2/capycanvas-1.0.2-android.apk`, variants.apk],
      ['linux', flatpakRef, variants.flatpak],
      ['windows', `${download}/v1.0.2/capycanvas-1.0.2-windows-x64-setup.exe`, variants.x64],
      ['windows', `${download}/v1.0.2/capycanvas-1.0.2-windows-arm64-setup.exe`, variants.arm64],
      ['mac', `${download}/v1.0.2/capycanvas-1.0.2-macos-arm64.dmg`, escapeText(variants.appleSilicon)],
    ]);
    assert.ok(!page.includes(`>${escapeText(t.download.status)}</p>`));
    const picks = [...page.matchAll(/<div data-platform="(\w+)"(?: data-arch="(\w+)")? hidden[^>]*><a class="button primary" href="([^"]+)"/g)].map(([, platform, arch = '', url]) => [platform, arch, url]);
    assert.deepEqual(picks, [
      ['ipad', '', `/${prefix(locale)}download/ipad-beta/`],
      ['android', '', `/${prefix(locale)}download/android-beta/`],
      ['linux', '', flatpakRef],
      ['windows', 'x86', `${download}/v1.0.2/capycanvas-1.0.2-windows-x64-setup.exe`],
      ['windows', 'arm', `${download}/v1.0.2/capycanvas-1.0.2-windows-arm64-setup.exe`],
      ['mac', '', `${download}/v1.0.2/capycanvas-1.0.2-macos-arm64.dmg`],
      ['other', '', 'https://editor.capycanvas.art/'],
    ]);
    for (const name of ['Linux Flatpak', 'Windows x64', 'Windows Arm64', `macOS ${variants.appleSilicon}`]) {
      assert.ok(page.includes(`>${escapeText(t.download.downloadFor.replace('{version}', '1.0.2').replace('{platform}', name))}</a>`), name);
    }
    assert.ok(page.includes(escapeText(t.versions.released.replace('{date}', new Intl.DateTimeFormat(t.lang, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date('2026-10-02T12:00:00Z'))))));
    assert.ok(!page.includes('SHA256SUMS'));
    assert.ok(page.includes(`href="/${prefix(locale)}download/past-versions/"`));
    assert.ok(page.includes(`href="${releasesUrl}"`));
    assert.doesNotMatch(page, /whats-new|release-notes/);
    assert.doesNotMatch(page, /onclick|javascript:|alert\(/);
    assert.doesNotMatch(page, neverOffered);
    assert.doesNotMatch(html, /1\.0\.3|1\.1\.0-beta/);
  });

  test(`${locale}: Past versions lists every published release, newest first`, async () => {
    const html = await read(published, `${prefix(locale)}download/past-versions`);
    const page = main(html);
    assert.ok(html.includes(`<title>${escapeText(t.versions.title)} — Capy Canvas</title>`));
    assert.ok(page.includes(escapeText(t.versions.intro)));
    assert.deepEqual([...page.matchAll(/<article class="release" id="v([^"]+)"/g)].map(([, version]) => version), ['1.0.2', '1.0.1', '1.0.0']);
    assert.equal(page.split(`>${escapeText(t.versions.latest)}</span>`).length, 2);
    const variants = t.download.variants;
    for (const [version, date, files] of [
      ['1.0.2', '2026-10-02', [['android.apk', 'Android APK'], ['linux-x86_64.flatpak', 'Linux Flatpak'], ['windows-x64-setup.exe', 'Windows x64'], ['windows-arm64-setup.exe', 'Windows Arm64'], ['macos-arm64.dmg', `macOS ${variants.appleSilicon}`]]],
      ['1.0.1', '2026-09-12', [['android.apk', 'Android APK'], ['windows-x64-setup.exe', 'Windows x64']]],
      ['1.0.0', '2026-08-30', [['windows-x64-setup.exe', 'Windows x64']]],
    ]) {
      const article = page.match(new RegExp(`<article class="release" id="v${version.replaceAll('.', '\\.')}"[\\s\\S]*?</article>`))[0];
      assert.match(article, new RegExp(`<time datetime="${date}"`));
      const links = [...article.matchAll(/<li[^>]*><a href="([^"]+)"[^>]*>(?:<svg[\s\S]*?<\/svg>)?([^<]+)(?:<svg[\s\S]*?<\/svg>)?<\/a>/g)].map(([, url, label]) => [url, label]);
      assert.deepEqual(links, [
        ...files.map(([file, label]) => [`${download}/v${version}/capycanvas-${version}-${file}`, escapeText(label)]),
        [`https://github.com/capyatelier/capycanvas/releases/tag/v${version}`, escapeText(t.versions.github)],
      ]);
    }
    assert.equal(page.split('class="release-notes" lang="en"').length, 3, 'A release without notes shows none');
    assert.equal(page.includes(escapeText(t.download.notesLanguage)), locale !== 'en');
    assert.ok(page.includes(`href="${releasesUrl}"`));
    assert.doesNotMatch(page, /onclick|javascript:|alert\(/);
    assert.doesNotMatch(page, neverOffered);
    assert.doesNotMatch(html, /1\.0\.3|1\.1\.0-beta/);
  });

  test(`${locale}: with no published release, both pages keep the coming-soon state`, async () => {
    const downloadHtml = await read(empty, `${prefix(locale)}download`);
    const page = main(downloadHtml);
    assert.ok(downloadHtml.includes(`<meta name="description" content="${escape(t.download.meta)}">`));
    assert.match(page, new RegExp(`<p class="lead"[^>]*>${lead(t.download)}</p>`));
    assert.equal(page.split(`>${escapeText(t.download.status)}</p>`).length, 4);
    assert.ok(page.includes(`<a class="button" href="/${prefix(locale)}download/ipad-beta/" aria-describedby="platform-ipad"`));
    assert.ok(page.includes(`<a class="button" href="/${prefix(locale)}download/android-beta/" aria-describedby="platform-android"`));
    assert.ok(page.includes(`href="${releasesUrl}"`));
    assert.doesNotMatch(page, /releases\/download\/|class="whats-new"|past-versions/);
    assert.deepEqual([...page.matchAll(/<div data-platform="(\w+)" hidden[^>]*><a class="button primary" href="([^"]+)"/g)].map(([, platform, url]) => [platform, url]), [
      ['ipad', `/${prefix(locale)}download/ipad-beta/`],
      ['android', `/${prefix(locale)}download/android-beta/`],
      ['other', 'https://editor.capycanvas.art/'],
    ]);
    const versions = main(await read(empty, `${prefix(locale)}download/past-versions`));
    assert.match(versions, new RegExp(`<p class="lead"[^>]*>${escapeText(t.versions.empty)}</p>`));
    assert.doesNotMatch(versions, /<article|release-notes/);
    assert.ok(versions.includes(`href="${releasesUrl}"`));
  });
}

test('drafts, pre-releases and upload-only files appear nowhere in the built site', async () => {
  const files = async dir => (await Promise.all((await readdir(dir, { withFileTypes: true })).map(entry => entry.isDirectory() ? files(join(dir, entry.name)) : join(dir, entry.name)))).flat();
  for (const path of (await files(published)).filter(path => path.endsWith('.html'))) {
    const html = await readFile(path, 'utf8');
    assert.doesNotMatch(html, neverOffered, path);
    assert.doesNotMatch(html, /1\.0\.3|1\.1\.0-beta|\/untagged-/, path);
  }
});
