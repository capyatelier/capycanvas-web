import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { content, languages } from '../site/src/data/content.mjs';

const root = resolve(process.env.SITE_OUTPUT || 'docs');
const source = locale => readFile(`site/src/content/policies/${locale}.md`, 'utf8');
const links = markdown => [...markdown.matchAll(/\]\(([^)]+)\)/g)].map(([, href]) => href).sort();

for (const locale of Object.keys(languages)) test(`${locale}: privacy policy is complete static HTML with consistent publication details`, async () => {
  const markdown = await source(locale);
  const english = await source('en');
  const date = markdown.match(/^effectiveDate: "([^"]+)"$/m)?.[1];
  assert.match(date, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(date, english.match(/^effectiveDate: "([^"]+)"$/m)?.[1], 'Translations share the effective date');
  assert.deepEqual(links(markdown), links(english), 'Translations preserve contact and provider references');
  const html = await readFile(join(root, locale === 'en' ? '' : locale, 'privacy/index.html'), 'utf8');
  assert.ok(html.includes(content[locale].privacy.title));
  assert.equal(html.match(/<time\b[^>]*datetime="([^"]+)"/)?.[1], date);
  const article = html.match(/<article\b[^>]*class="policy-prose"[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert.ok(article, 'Policy content is delivered without client-side rendering');
  assert.equal((article.match(/<h2\b/g) || []).length, (markdown.match(/^## /gm) || []).length);
  assert.equal((article.match(/<p>/g) || []).length, english.split('---')[2].trim().split(/\n\n/).filter(block => !block.startsWith('#')).length, 'All policy paragraphs are published in every language');
  for (const name of ['Zachary Drach', 'Capy Atelier', 'capycanvas.art', 'editor.capycanvas.art']) assert.ok(article.includes(name));
  for (const href of links(markdown)) assert.ok(article.includes(`href="${href.replaceAll('&', '&amp;')}"`), `Missing policy link: ${href}`);
  assert.doesNotMatch(article, /draft for review|prepared September|set the effective date|Google Drive|Dropbox|TestFlight/i);
  assert.doesNotMatch(html, /guide-status|docs-notice|docs-sidebar/, 'The published policy is distinct from mock tutorial content');
});
