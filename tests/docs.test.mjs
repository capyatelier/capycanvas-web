import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { docTopics, docGroups } from '../site/src/data/docs-nav.mjs';
import { docsUI } from '../site/src/data/docs-ui.mjs';
import { content, languages } from '../site/src/data/content.mjs';

const root = resolve(process.env.SITE_OUTPUT || 'docs');
const source = resolve('site/src/content/guides');
const route = (locale, slug = '') => `${locale === 'en' ? '' : '/' + locale}/documentation/${slug ? slug + '/' : ''}`;
const read = (locale, slug = '') => readFile(join(root, route(locale, slug), 'index.html'), 'utf8');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const frontmatter = text => Object.fromEntries(text.split('---')[1].trim().split('\n').map(line => {
  const index = line.indexOf(':');
  return [line.slice(0, index), JSON.parse(line.slice(index + 1))];
}));
async function markdownFiles(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map(entry => entry.isDirectory() ? markdownFiles(join(dir, entry.name)) : join(dir, entry.name)))).flat();
}

test('the documentation collection has one page per topic and locale, with no orphaned outlines', async () => {
  assert.deepEqual(docGroups, ['start', 'illustration', 'layers', 'tools', 'advanced']);
  assert.deepEqual(docTopics.filter(topic => topic.group === 'illustration').map(topic => topic.slug), ['illustration/draft', 'illustration/ink', 'illustration/mask', 'illustration/render']);
  assert.equal(new Set(docTopics.map(topic => topic.slug)).size, docTopics.length);
  const files = await markdownFiles(source);
  assert.deepEqual(files.sort(), Object.keys(languages).flatMap(locale => docTopics.map(({ slug }) => join(source, locale, slug + '.md'))).sort());
});

for (const locale of Object.keys(languages)) {
  test(`${locale}: documentation interface has complete translations`, () => {
    assert.deepEqual(Object.keys(docsUI[locale]), Object.keys(docsUI.en));
    assert.deepEqual(Object.keys(docsUI[locale].groups), docGroups);
    assert.deepEqual(Object.keys(docsUI[locale].platformNotes), Object.keys(docsUI.en.platformNotes));
  });
  for (const { slug } of docTopics) test(`${locale}/${slug}: complete static guide, localized routes and working anchors`, async () => {
    const html = await read(locale, slug);
    const markdown = await readFile(join(source, locale, slug + '.md'), 'utf8');
    const data = frontmatter(markdown);
    assert.ok(html.includes(`<h1>${escape(data.title)}</h1>`));
    assert.ok(html.includes(`<meta name="description" content="${escape(data.description)}">`));
    assert.ok(html.includes(`<link rel="canonical" href="https://capycanvas.art${route(locale, slug)}">`));
    assert.match(html, /<article class="guide-article">/);
    assert.ok(html.includes(docsUI[locale].outline));
    assert.equal((html.match(/<main\b/g) || []).length, 1);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal((html.match(/rel="alternate"/g) || []).length, 5);
    assert.match(html, /name="color-scheme" content="light dark"/);
    assert.match(html, /name="darkreader-lock"/);
    assert.doesNotMatch(html, /<footer|<hr\b|undefined|\[object Object\]|lorem ipsum/i);
    const body = html.match(/<div class="guide-prose">([\s\S]*?)<\/div>/)?.[1];
    assert.ok(body, 'Markdown is rendered at build time');
    assert.equal((body.match(/<h2 /g) || []).length, (markdown.match(/^## /gm) || []).length);
    assert.ok((body.match(/<p>/g) || []).length >= 1);
    assert.match(html, /<figure class="guide-figure">/);
    assert.ok(html.includes(escape(data.figure)));
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
    if (slug === 'advanced/input') {
      for (const system of Object.keys(docsUI[locale].systems)) {
        assert.ok(html.includes(`data-doc-platform="${system}"`));
        assert.ok(html.includes(docsUI[locale].platformNotes[system]), 'Every platform is in static HTML');
      }
    }
  });
}
