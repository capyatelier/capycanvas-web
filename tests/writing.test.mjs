import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { docTopics } from '../site/src/data/docs-nav.mjs';

const words = [
  'powerful', 'seamless', 'intuitive', 'effortless', 'robust', 'beautiful', 'stunning', 'perfect', 'amazing',
  'easily', 'simply', 'just', 'quickly', 'effectively', 'a variety of', 'a range of', 'various', 'numerous',
  'leverage', 'utilize', 'enhance', 'unlock', 'empower', 'explore', 'dive into', 'crucial', 'essential', 'ensure',
  'note that', 'keep in mind', 'remember that', "it's worth", "don't worry", 'feel free', "whether you're",
  'in order to', 'allows you to', 'lets you', 'helps you', 'makes it easy', 'from here', 'now that', "let's",
  'gpu', 'shader', 'webassembly', 'webgpu', 'renderer', 'compositor', 'pipeline',
];
const body = markdown => markdown.split('---').slice(2).join('---')
  .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .replace(/\]\([^)]*\)/g, ']');

for (const { slug } of docTopics) test(`en/${slug}: follows the mechanical writing rules`, async () => {
  const markdown = await readFile(`site/src/content/guides/en/${slug}.md`, 'utf8');
  assert.doesNotMatch(markdown, /\]\(\/docs\/[^)]*#/, 'Link to pages, not to translated heading anchors');
  const text = body(markdown);
  const description = JSON.parse(markdown.match(/^description: (.+)$/m)[1]);
  assert.doesNotMatch(text.split('\n').filter(line => !line.trimStart().startsWith('|')).join('\n'), /[—–]/, 'No em or en dashes in prose (ranges in tables are fine)');
  assert.doesNotMatch(text, /!(?!\[)/, 'No exclamation marks');
  const own = text.replace(/\*\*[^*]+\*\*/g, '');
  for (const word of words) assert.doesNotMatch(own.toLowerCase(), new RegExp(`(^|[^a-z])${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z]|$)`), `Leave out "${word}"`);
  assert.doesNotMatch(text, /^#{2,3} .*\?$/m, 'Headings are not questions');
  assert.doesNotMatch(text, /^#{2,3} [^,\n]+, [^,\n]+,? and [^\n]+$/m, 'Headings are not lists of three');
  assert.equal(description.split(/[.!?](\s|$)/).filter(part => part && part.trim()).length, 1, 'The description is one sentence');
  const prose = text.split('\n').filter(line => line.trim() && !/^\s*(#|\||[-*] |\d+\. |>)/.test(line)).join(' ');
  const words_ = prose.split(/\s+/).filter(Boolean).length;
  assert.ok(words_ <= 650, `Page stays short (${words_} words of prose)`);
});
