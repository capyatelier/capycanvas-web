import { getCollection } from 'astro:content';
import { docTopics } from '../data/docs-nav.mjs';
import type { Locale } from './site';

export async function getGuides(locale: Locale) {
  const entries = await getCollection('guides', ({ id }) => id.startsWith(`${locale}/`));
  return docTopics.map(topic => {
    const entry = entries.find(entry => entry.id === `${locale}/${topic.slug}`);
    if (!entry) throw new Error(`Missing guide: ${locale}/${topic.slug}`);
    return { ...topic, entry };
  });
}
