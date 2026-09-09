# Asset and dependency notices

The production website is static HTML, CSS, images, and the site's own browser
scripts. System fonts are requested by name; no font files are bundled. Chrome
is used for local browser checks and is not distributed with the site.

Astro, `@astrojs/check`, `@types/node`, and `pngjs` are MIT-licensed build/test
dependencies; TypeScript is Apache-2.0. Exact versions and transitive dependencies
are recorded in `package-lock.json`. Their licenses remain in the installed
packages and are not replaced by this project's license or branding terms.

## Capy Canvas application assets

The capybara SVG, rounded favicon, and genuine application screenshots originate from
<https://github.com/capyatelier/capycanvas>, copyright (c) 2026 Zack Drach and
Capy Canvas contributors. Original application code and non-brand assets are
MIT OR Apache-2.0; the mark is subject to the separate terms in BRANDING.md.
Copies of both standard licenses and the branding terms accompany the built site.
`site/public/assets/capybara.svg` is the application's
`apps/layer-web/icons/layer-zen-looking-up-symbolic.svg`.
`site/public/assets/favicon.png` is the application's packaged `icon-32.png`, generated
by `apps/layer-web/package.mjs` with rounded corners and a gray background.
`site/public/assets/capture.json` records the application source revision used for the
screenshots. `site/scripts/capture.mjs` reproduces the watercolor squiggles through
browser pen events and the application's real brush engine. No external artwork is used.

## GitHub mark

The GitHub mark in `site/src/lib/icons.ts` and generated inner-page HTML identifies a
link to the official project repository. GitHub owns the mark. Its use does not
imply endorsement. It is excluded from this project's MIT/Apache and branding
grants. See <https://github.com/logos> and
<https://docs.github.com/en/site-policy/content-removal-policies/github-trademark-policy>.

Other interface symbols are original geometric SVGs under MIT OR Apache-2.0.
Platform names identify planned compatibility; their owners retain their rights.

## Design reference

<https://ghostty.org/> inspired the screenshot-first homepage composition.
No Ghostty source code, text, imagery, or font files are included in the site.
