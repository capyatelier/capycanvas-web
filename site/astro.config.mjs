import { defineConfig } from 'astro/config';
import { copyFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { languages } from './src/data/content.mjs';

export default defineConfig({
  site: 'https://capycanvas.art',
  output: 'static',
  outDir: '../docs',
  trailingSlash: 'always',
  i18n: {
    locales: Object.keys(languages),
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
  vite: {
    define: {
      'import.meta.env.FAVICON_VERSION': JSON.stringify(createHash('sha256').update(readFileSync(new URL('./public/assets/favicon.png', import.meta.url))).digest('hex').slice(0, 12)),
    },
  },
  integrations: [{
    name: 'distributable-notices',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        for (const name of ['LICENSE', 'LICENSE-MIT', 'LICENSE-APACHE', 'BRANDING.md', 'THIRD_PARTY_NOTICES.md']) {
          await copyFile(new URL(`../${name}`, import.meta.url), new URL(name, dir));
        }
      },
    },
  }],
});
