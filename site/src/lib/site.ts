import { docTopics } from '../data/docs-nav.mjs';
import { languages } from '../data/content.mjs';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type Locale = keyof typeof languages;
export type Page = 'home' | 'download' | 'documentation' | 'privacy';
export type SitePage = Page | '404';
export const locales = Object.keys(languages) as Locale[];
export const pages = ['home', 'download', 'documentation', 'privacy'] as const;
export const origin = 'https://capycanvas.art';
export const appUrl = 'https://editor.capycanvas.art/';
export const repositoryUrl = 'https://github.com/capyatelier/capycanvas';

export function route(locale: Locale, page: SitePage = 'home', slug = '') {
  const segment = page === 'documentation' ? 'docs' : page;
  return getRelativeLocaleUrl(locale, page === 'home' ? '' : [segment, slug].filter(Boolean).join('/'));
}

export const routes = locales.flatMap(locale => [
  ...pages.map(page => ({ locale, page, slug: '', path: route(locale, page) })),
  ...docTopics.map(({ slug }) => ({ locale, page: 'documentation' as const, slug, path: route(locale, 'documentation', slug) })),
]);
