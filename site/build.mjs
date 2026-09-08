import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { content, languages } from './content.mjs';
import { icon, github } from './icons.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = join(root, 'docs');
const origin = 'https://capycanvas.art';
const demo = 'https://editor.capycanvas.art/';
const repo = 'https://github.com/capyatelier/capycanvas';
export const route = (locale, page = 'home') => `${locale === 'en' ? '' : '/' + locale}/${page === 'home' ? '' : page + '/'}`;
const e = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const brandSvg = (await readFile(join(root, 'site/assets/capybara.svg'), 'utf8')).replace('<svg ', '<svg aria-hidden="true" ');
const brand = locale => `<a class="brand" href="${route(locale)}" aria-label="Capy Canvas · ${e(content[locale].nav.home)}">${brandSvg}<span>Capy Canvas</span></a>`;
function languageMenu(locale, page) {
  const t = content[locale];
  return `<details class="language-menu"><summary aria-label="${e(t.nav.language)}">${icon('globe')}<span>${e(t.name)}</span>${icon('chevron', 'chevron')}</summary><div class="language-options">${Object.entries(languages).map(([code,name]) => `<a href="${route(code, page === '404' ? 'home' : page)}${code === 'en' ? '?lang=en' : ''}" lang="${content[code].lang}" hreflang="${content[code].lang}" data-language="${code}"${code === locale ? ' aria-current="true"' : ''}>${name}${code === locale ? icon('check') : ''}</a>`).join('')}</div></details>`;
}
function header(locale, page) {
  const t = content[locale];
  if (page === 'home') return `<div class="home-top">${languageMenu(locale,page)}</div>`;
  return `<header class="site-header"><div class="nav-inner">${brand(locale)}<nav class="nav-links" aria-label="${e(t.nav.main)}">${['download','documentation'].map(p=>`<a href="${route(locale,p)}"${p===page?' aria-current="page"':''}>${e(t.nav[p])}</a>`).join('')}<a href="${demo}">${e(t.nav.demo)}${icon('external')}</a></nav><div class="nav-tools">${languageMenu(locale,page)}<a class="icon-button" href="${repo}" target="_blank" rel="noopener noreferrer" aria-label="${e(t.nav.github)}">${github}</a></div></div></header>`;
}
function home(locale) {
  const t=content[locale],h=t.home;
  return `<main id="main" class="hero"><h1 class="visually-hidden">${e(h.title)}</h1><picture class="workspace"><source media="(prefers-color-scheme: dark)" srcset="/assets/workspace-dark.webp"><img src="/assets/workspace-light.webp" width="1440" height="810" alt="${e(h.screenshot)}" fetchpriority="high"></picture><p class="home-description">${e(h.description)}</p><div class="actions"><a class="button primary" href="${demo}">${e(t.nav.demo)}</a><a class="button" href="${route(locale,'download')}">${e(t.nav.download)}</a><a class="button" href="${route(locale,'documentation')}">${e(t.nav.documentation)}</a></div></main>`;
}
function download(locale) {
  const t=content[locale].download;
  return `<main id="main" class="page"><h1>${e(t.title)}</h1><p class="lead">${e(t.intro)}</p><ul class="platforms" aria-label="${e(t.platformsLabel)}">${t.platforms.map((name,i)=>`<li class="platform">${icon(['ipad','android','linux','windows','mac'][i])}<h2>${e(name)}</h2><p>${e(t.status)}</p></li>`).join('')}</ul></main>`;
}
function documentation(locale) {
  const t=content[locale].documentation;
  const section=(title,items)=>`<section><h2>${e(title)}</h2><ul>${items.map(item=>`<li>${e(item)}</li>`).join('')}</ul></section>`;
  return `<main id="main" class="page documentation"><h1>${e(t.title)}</h1><p class="lead">${e(t.intro)}</p>${section(t.now,t.built)}${section(t.next,t.planned)}<section><h2>${e(t.focus)}</h2><p>${e(t.direction)}</p></section></main>`;
}
function render(locale,page) {
  const t=content[locale],p=t[page] || t.notFound;
  const title=page==='home'?p.title:page==='404'?p.title:`${t.nav[page]} — Capy Canvas`;
  const canonical=origin+route(locale,page);
  const body=page==='home'?home(locale):page==='download'?download(locale):page==='documentation'?documentation(locale):`<main class="page error-page" id="main"><p class="error-code">404</p><h1>${e(p.title)}</h1><p class="lead">${e(p.text)}</p><a class="button primary" href="${route(locale)}">${e(p.action)}${icon('arrow')}</a></main>`;
  return `<!doctype html>
<html lang="${t.lang}" data-locale="${locale}" data-page="${page}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light dark">
<meta name="darkreader-lock">
<title>${e(title)}</title><meta name="description" content="${e(p.meta||p.text)}">
${page==='404'?'<meta name="robots" content="noindex">':`<link rel="canonical" href="${canonical}">${Object.keys(languages).map(code=>`<link rel="alternate" hreflang="${content[code].lang}" href="${origin+route(code,page)}">`).join('')}<link rel="alternate" hreflang="x-default" href="${origin+route('en',page)}">`}
<meta property="og:type" content="website"><meta property="og:site_name" content="Capy Canvas"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(p.meta||p.text)}"><meta property="og:locale" content="${t.locale}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}/assets/workspace-light.webp"><meta property="og:image:width" content="1440"><meta property="og:image:height" content="810"><meta property="og:image:alt" content="${e(t.home.screenshot)}"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ededed" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#333333" media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="stylesheet" href="/assets/style.css"><script src="/assets/language.js"></script>
</head><body><a class="skip" href="#main">${e(t.nav.skip)}</a>${header(locale,page)}${body}</body></html>
`;
}
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
await cp(join(root,'site/assets'),join(out,'assets'),{recursive:true});
const favicon=brandSvg.replace('fill="currentColor"','fill="currentColor"').replace(/<svg[^>]*>/,match=>match+'<style>svg{color:#2e2e32}@media(prefers-color-scheme:dark){svg{color:#fafafb}}</style>');
await writeFile(join(out,'assets/favicon.svg'),favicon);
const urls=[];
for(const locale of Object.keys(languages)) for(const page of ['home','download','documentation']) {
  const path=route(locale,page); const dir=join(out,path);
  await mkdir(dir,{recursive:true}); await writeFile(join(dir,'index.html'),render(locale,page)); urls.push(origin+path);
}
await writeFile(join(out,'404.html'),render('en','404'));
await writeFile(join(out,'CNAME'),'capycanvas.art\n');
await writeFile(join(out,'.nojekyll'),'');
await writeFile(join(out,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(join(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${url}</loc></url>`).join('')}</urlset>\n`);
for(const file of ['LICENSE','LICENSE-MIT','LICENSE-APACHE','BRANDING.md','THIRD_PARTY_NOTICES.md']) await cp(join(root,file),join(out,file));
console.log('Built 12 localized pages, a 404 page, and static assets into docs/.');
