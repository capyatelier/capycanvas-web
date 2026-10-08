import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { docTopics, docGroups, docRedirects } from '../site/src/data/docs-nav.mjs';
import { docsUI } from '../site/src/data/docs-ui.mjs';
import { content, languages } from '../site/src/data/content.mjs';
import { appName, brandCopy } from '../site/src/data/branding.mjs';

const root = resolve(process.env.SITE_OUTPUT || 'docs');
const source = resolve('site/src/content/guides');
const route = (locale, slug = '') => `${locale === 'en' ? '' : '/' + locale}/docs/${slug ? slug + '/' : ''}`;
const read = (locale, slug = '') => readFile(join(root, route(locale, slug), 'index.html'), 'utf8');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const escapeText = text => escape(text).replaceAll("'", '&#39;');
const frontmatter = text => Object.fromEntries(text.split('---')[1].trim().split('\n').map(line => {
  const index = line.indexOf(':');
  return [line.slice(0, index), JSON.parse(line.slice(index + 1))];
}));
async function markdownFiles(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map(entry => entry.isDirectory() ? markdownFiles(join(dir, entry.name)) : join(dir, entry.name)))).flat();
}

test('the documentation collection has one page per topic and locale, with no orphaned guides', async () => {
  assert.deepEqual([...new Set(docTopics.map(topic => topic.group))], docGroups, 'Every chapter has pages, in sidebar order');
  assert.deepEqual(docTopics.filter(topic => topic.group === 'illustration').map(topic => topic.slug), ['illustration', 'illustration/draft', 'illustration/ink', 'illustration/mask', 'illustration/render']);
  assert.deepEqual(docTopics.filter(topic => topic.group === 'photo').map(topic => topic.slug), ['photo', 'photo/crop', 'photo/retouch', 'photo/adjust']);
  assert.deepEqual(docTopics.filter(topic => topic.step).map(topic => topic.step), [1, 2, 3, 4, 1, 2, 3]);
  for (const [former, current] of Object.entries(docRedirects)) {
    assert.ok(docTopics.some(topic => topic.slug === current), `Redirect target exists: ${former}`);
    assert.ok(!docTopics.some(topic => topic.slug === former), `Retired path is not also a page: ${former}`);
  }
  assert.equal(new Set(docTopics.map(topic => topic.slug)).size, docTopics.length);
  const files = await markdownFiles(source);
  assert.deepEqual(files.sort(), Object.keys(languages).flatMap(locale => docTopics.map(({ slug }) => join(source, locale, slug + '.md'))).sort());
});

for (const locale of Object.keys(languages)) {
  test(`${locale}: documentation interface has complete translations`, () => {
    assert.deepEqual(Object.keys(docsUI[locale]), Object.keys(docsUI.en));
    assert.deepEqual(Object.keys(docsUI[locale].groups), docGroups);
    if (locale === 'en') {
      assert.deepEqual(Object.keys(docsUI.en.landing.sections), ['sketch', 'paint', 'photo']);
    } else {
      assert.deepEqual(Object.keys(docsUI[locale].landing.sections), ['painting', 'workspace', 'input', 'color', 'photo', 'native']);
      assert.deepEqual(Object.keys(docsUI[locale].landing.links), ['quickstart', 'illustration']);
    }
    assert.deepEqual(Object.keys(docsUI[locale].platformNotes), Object.keys(docsUI.en.platformNotes));
  });
  for (const { slug } of docTopics) test(`${locale}/${slug}: complete static guide, localized routes and working anchors`, async () => {
    const html = await read(locale, slug);
    const markdown = await readFile(join(source, locale, slug + '.md'), 'utf8');
    const data = brandCopy(locale, frontmatter(markdown));
    assert.ok(html.includes(`<h1>${escapeText(data.title)}</h1>`));
    assert.ok(html.includes(`<meta name="description" content="${data.description.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}">`), 'Description meta');
    assert.ok(html.includes(`<link rel="canonical" href="https://capycanvas.art${route(locale, slug)}">`));
    assert.match(html, /<article class="guide-article">/);
    assert.ok(html.includes(`<meta property="og:site_name" content="${appName(locale)}">`));
    assert.doesNotMatch(html, /\{appName\}/);
    assert.doesNotMatch(html, /guide-status|docs-notice|guide-image-hint|guide-image-slot|shot:/, 'Guides show no draft notes or missing captures');
    assert.equal((html.match(/<main\b/g) || []).length, 1);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal((html.match(/rel="alternate"/g) || []).length, Object.keys(languages).length + 1);
    assert.match(html, /name="color-scheme" content="light dark"/);
    assert.match(html, /name="darkreader-lock"/);
    assert.doesNotMatch(html, /<hr\b|undefined|\[object Object\]|lorem ipsum/i);
    const footer = html.match(/<footer class="site-footer">([\s\S]*?)<\/footer>/)?.[1];
    assert.ok(footer?.includes(content[locale].footer.madeBy));
    assert.ok(footer.includes(`href="${locale === 'en' ? '' : '/' + locale}/privacy/"`));
    const body = html.match(/<div class="guide-prose">([\s\S]*?)<\/div>\s*(?:<section|<\/article)/)?.[1];
    assert.ok(body, 'Markdown is rendered at build time');
    assert.doesNotMatch(body, /\*\*/, 'Emphasis around translated control labels renders correctly');
    const links = [...body.matchAll(/href="([^"]+)"/g)].map(([, href]) => href);
    for (const href of links.filter(href => href.startsWith('/'))) {
      const prefix = locale === 'en' ? '' : '/' + locale;
      assert.ok(href.startsWith(prefix + '/docs/') || href === prefix + '/download/' || href.startsWith('/assets/examples/') || href.startsWith('/assets/docs/'), `Prose link leaves the locale: ${href}`);
    }
    if (locale !== 'en') {
      const english = await read('en', slug);
      const englishBody = english.match(/<div class="guide-prose">([\s\S]*?)<\/div>\s*(?:<section|<\/article)/)[1];
      const shots = (text, own) => [...text.matchAll(/data-light="\/assets\/docs\/([^/"]+)\/([^"]+)-light\.webp"/g)].map(([, folder, name]) => {
        assert.ok(folder === own || folder === 'shared', `Captures come from the page language: ${folder}/${name}`);
        return name;
      });
      assert.deepEqual(shots(body, locale), shots(englishBody, 'en'), 'Translations show the same captures in the same order');
      const outward = list => list.filter(href => !href.startsWith('#')).map(href => href.replace(/^\/assets\/docs\/[^/]+\//, '/assets/docs/'));
      const englishLinks = outward([...englishBody.matchAll(/href="([^"]+)"/g)].map(([, href]) => href)).sort();
      assert.deepEqual(outward(links).map(href => href.replace(new RegExp(`^/${locale}/`), '/')).sort(), englishLinks, 'Translations retain the same contextual references');
    }
    if (slug === 'quickstart') {
      assert.ok(links.includes(`${locale === 'en' ? '' : '/' + locale}/download/`), 'Setup links to current release availability');
      assert.ok(links.includes('https://editor.capycanvas.art/'), 'Setup links to the usable web version');
    }
    const nextStage = { illustration: 'illustration/draft', 'illustration/draft': 'illustration/ink', 'illustration/ink': 'illustration/mask', 'illustration/mask': 'illustration/render', photo: 'photo/crop', 'photo/crop': 'photo/retouch', 'photo/retouch': 'photo/adjust' }[slug];
    if (nextStage) assert.ok(links.includes(route(locale, nextStage)), 'The tutorial provides a contextual link to its next task');
    assert.equal((body.match(/<h2 /g) || []).length, (markdown.match(/^## /gm) || []).length);
    assert.ok((body.match(/<p>/g) || []).length >= 1);
    for (const [, alt] of body.matchAll(/<img [^>]*alt="([^"]*)"/g)) assert.ok(alt.trim(), 'Every capture has alt text');
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
    assert.equal(new Set(ids).size, ids.length, 'Anchor IDs are unique');
    for (const [, hash] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(decodeURIComponent(hash)), `Missing anchor ${hash}`);
    for (const code of Object.keys(languages)) {
      assert.ok(html.includes(`hreflang="${content[code].lang}" href="https://capycanvas.art${route(code, slug)}"`));
      assert.ok(html.includes(`href="${route(code, slug)}${code === 'en' ? '?lang=en' : ''}" lang="${content[code].lang}"`), 'Language menu keeps the article');
    }
    for (const related of data.related) {
      assert.ok(docTopics.some(topic => topic.slug === related), `Unknown related topic ${related}`);
      assert.ok(html.includes(`href="${route(locale, related)}"`));
    }
    const active = html.match(/class="docs-navigation"[^>]*>([\s\S]*?)<\/nav>/)[1];
    assert.equal((active.match(/aria-current="page"/g) || []).length, 1);
    assert.ok(active.includes(`href="${route(locale, slug)}" aria-current="page"`));
    assert.ok(active.includes(escapeText(docsUI[locale].groups.illustration)));
    if (slug === 'illustration') {
      assert.ok(active.includes(`<span>${escapeText(data.navTitle)}</span>`), 'The sidebar includes the tutorial introduction');
      assert.deepEqual([...active.matchAll(/class="docs-step"[^>]*>(\d+)</g)].map(([, number]) => number), ['01', '02', '03', '04', '01', '02', '03']);
    }
    if (slug === 'input/pen') {
      for (const system of Object.keys(docsUI[locale].systems)) {
        assert.ok(html.includes(`data-doc-platform="${system}"`));
        assert.ok(html.includes(escapeText(docsUI[locale].platformNotes[system])), 'Every platform is in static HTML');
      }
    }
  });
}

test('former documentation URLs redirect to canonical docs URLs in every language', async () => {
  const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
  assert.doesNotMatch(sitemap, /\/documentation\//);
  for (const former of Object.keys(docRedirects)) assert.ok(!sitemap.includes(`/docs/${former}/<`), `Retired path is not in the sitemap: ${former}`);
  const pairs = locale => [
    ...['', ...docTopics.map(topic => topic.slug)].map(slug => [route(locale, slug).replace('/docs/', '/documentation/'), slug]),
    ...Object.entries(docRedirects).flatMap(([former, slug]) => [[route(locale, former), slug], [route(locale, former).replace('/docs/', '/documentation/'), slug]]),
  ];
  for (const locale of Object.keys(languages)) for (const [previous, slug] of pairs(locale)) {
    const destination = route(locale, slug);
    const html = await readFile(join(root, previous, 'index.html'), 'utf8');
    assert.ok(html.includes(`<meta http-equiv="refresh" content="0;url=${destination}">`), 'No-JS redirect');
    assert.ok(html.includes(`<link rel="canonical" href="https://capycanvas.art${destination}">`));
    assert.ok(html.includes(`<a href="${destination}">`), 'Fallback link goes to the same translated topic');
    assert.ok(html.includes(`<title>${escapeText(content[locale].nav.documentation)} — ${appName(locale)}</title>`));
    assert.match(html, /name="robots" content="noindex"/);
    assert.doesNotMatch(html, /class="guide-prose"/);
    const current = await read(locale, slug);
    assert.doesNotMatch(current, /href="[^" ]*\/documentation\//, 'Published navigation and article links use the new URL');
    for (const former of Object.keys(docRedirects)) assert.ok(!current.includes(`href="${route(locale, former)}"`), `Links avoid the retired path ${former}`);
  }
});
