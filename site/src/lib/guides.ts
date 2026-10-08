import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { brandCopy } from '../data/branding.mjs';
import { docTopics } from '../data/docs-nav.mjs';
import type { Locale } from './site';

const localize = (locale: Locale, entry: CollectionEntry<'guides'>) => ({ ...entry, data: brandCopy(locale, entry.data) });

export async function getGuide(locale: Locale, slug: string) {
  const entry = await getEntry('guides', `${locale}/${slug}`);
  return entry ? localize(locale, entry) : undefined;
}

export async function getGuides(locale: Locale) {
  const entries = await getCollection('guides', ({ id }) => id.startsWith(`${locale}/`));
  return docTopics.map(topic => {
    const entry = entries.find(entry => entry.id === `${locale}/${topic.slug}`);
    if (!entry) throw new Error(`Missing guide: ${locale}/${topic.slug}`);
    return { ...topic, entry: localize(locale, entry) };
  });
}
