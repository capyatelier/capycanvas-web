import { languages } from '../data/content.mjs';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type Locale = keyof typeof languages;
export type Page = 'home' | 'download' | 'documentation';
export type SitePage = Page | '404';
export const locales = Object.keys(languages) as Locale[];
export const pages = ['home', 'download', 'documentation'] as const;
export const origin = 'https://capycanvas.art';
export const appUrl = 'https://editor.capycanvas.art/';
export const repositoryUrl = 'https://github.com/capyatelier/capycanvas';

export function route(locale: Locale, page: SitePage = 'home') {
  return getRelativeLocaleUrl(locale, page === 'home' ? '' : page);
}

export const routes = locales.flatMap(locale => pages.map(page => ({
  locale, page, path: route(locale, page),
})));
