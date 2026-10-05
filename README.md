# Capy Canvas website

The static, localized website for **[capycanvas.art](https://capycanvas.art)**.
The drawing app lives in [capyatelier/capycanvas](https://github.com/capyatelier/capycanvas);
the Web Demo button opens [editor.capycanvas.art](https://editor.capycanvas.art).

## Develop

Node.js 22.12 or newer (Node 24 is used in CI).

```sh
npm ci                  # install the pinned build and test tools
npm run dev             # Astro development server
npm run build           # type-check and render site/ into docs/
npm test                # validate the generated output
npm run test:browser    # Chrome: desktop/tablet/mobile, both themes, all languages
npm run serve           # http://127.0.0.1:4321
```

`CHROME=/path/to/chromium npm run test:browser` selects a different Chromium
executable; the default is `google-chrome`. Browser checks launch their own
local server and save review screenshots to ignored `artifacts/review/`.

Edit source in `site/`. `docs/` is ignored build output that Astro replaces
completely on every build; the **Deploy site** workflow builds and publishes it to
GitHub Pages, with no server-side JavaScript, external fonts, or analytics.
The source is independent of the adjacent app repository except when explicitly
recapturing screenshots and reading published releases at build time.

The build reads the GitHub API, so it needs network access. Set `GITHUB_TOKEN`
to any GitHub token to avoid the anonymous rate limit; the workflows pass their own.
`RELEASES_FILE=tests/fixtures/releases.json npm run build` builds from a JSON file
shaped like the API response instead.

## Source structure

This is a plain Astro static site with the existing Capy Canvas theme.

- `site/astro.config.mjs`: output directory, Astro i18n routing, favicon version,
  and copying the root license/branding notices into the build.
- `site/src/pages/`: static page routes, 404, robots.txt, and sitemap.
- `site/src/layouts/SiteLayout.astro`: shared document, metadata, and header.
- `site/src/components/`: header, language controls, and page components.
- `site/src/data/`: translations and installation instructions for all fourteen languages.
- `site/src/content/guides/`: one Markdown guide per topic and language.
- `site/src/content/policies/`: the privacy policy in every language with a shared effective date.
- `site/src/content.config.ts`: typed Astro content collection schema.
- `site/src/layouts/DocsLayout.astro`: documentation sidebar, article area, and section links.
- `site/src/styles/documentation.css`: documentation styles using the existing editor palette.
- `site/src/lib/site.ts`: typed page/locale definitions and Astro locale URL helpers.
- `site/src/lib/releases.mjs`: reads Capy Canvas releases from GitHub, picks the offered
  files and renders sanitized release notes; `release-data.ts` loads them once per build.
- `site/src/scripts/pwa.js`: browser/OS detection and installation picker behavior.
- `site/public/assets/`: unchanged global CSS, brand assets, and app screenshots.
- `site/scripts/`: static preview server and Chrome/capture utilities.

Use shared components and the locale URL helper when adding pages. Astro processes
the components' browser scripts; the PWA script is only included on download pages.
The short language-detection script deliberately runs inline in the head before paint.
There is no client router or UI framework runtime. Documentation uses Astro's Markdown
content collections, with complete HTML generated for every translated guide.
See [the documentation authoring guide](site/DOCUMENTATION.md) for the structure,
English-first editing, screenshots, and custom interactive components.

## Routes and languages

| Language | Code | Home |
| --- | --- | --- |
| English | `en` | `/` |
| 日本語 | `ja` | `/ja/` |
| 简体中文 | `zh` | `/zh/` |
| 한국어 | `ko` | `/ko/` |
| Español | `es` | `/es/` |
| Português (Brasil) | `pt-BR` | `/pt-BR/` |
| Bahasa Indonesia | `id` | `/id/` |
| Français | `fr` | `/fr/` |
| Deutsch | `de` | `/de/` |
| Русский | `ru` | `/ru/` |
| ไทย | `th` | `/th/` |
| Tiếng Việt | `vi` | `/vi/` |
| Türkçe | `tr` | `/tr/` |
| Italiano | `it` | `/it/` |

Download, past versions, the two beta sign-up pages, documentation, and privacy append
`download/`, `download/past-versions/`, `download/ipad-beta/`, `download/android-beta/`,
`docs/`, and `privacy/` to the language's home URL.
The Brazilian Portuguese path preserves `pt-BR` casing.

Guides extend the documentation route with the same topic path in every locale,
for example `/docs/illustration/draft/` and
`/ja/docs/illustration/draft/`. The sidebar, related guides, section links,
and previous/next links all point to static pages. Device-specific input notes
auto-detect the reader's platform and provide a manual selector; all variants are
present in the HTML and remain readable without JavaScript.

Astro's `i18n` configuration defines English as the unprefixed default and
all other languages under their locale codes. Navigation,
alternate links, the sitemap, and detection destinations use `astro:i18n` URL
helpers. Each translated page is generated as complete HTML.

Unprefixed entry pages detect `navigator.languages`, trying supported choices
in preference order. Regional tags map to the corresponding translation;
Portuguese tags (including `pt`, `pt-PT`, and `pt-BR`) select Brazilian Portuguese.
Unsupported languages fall back to English. Chinese is Simplified Chinese, including when
selected for other Chinese regional preferences. The language menu remembers
an explicit choice in local storage and preserves the current page. An explicit
translated URL takes priority over detection or a saved preference. `?lang=en`
forces English even when storage is unavailable. Without JavaScript all pages,
navigation, theme selection, and the language menu still work; automatic
language detection and remembering a choice require JavaScript.

Astro's request-based `preferredLocale` detection needs a server. GitHub Pages
serves static files, so `LanguagePreference.astro` performs browser detection
using URLs generated by Astro. `LanguageMenu.astro` handles remembering a choice
and keyboard interaction. The browser tests cover both behaviors.

The browser's `prefers-color-scheme` selects the whole page palette and the
matching genuine app screenshots. Changes apply live. The home page contains a
workspace showcase, a short description, three primary links, and the language
selector. The showcase is a slideshow that crossfades between real Sketch, Paint and
Photo screenshots every few seconds. A small indicator overlaid on the screenshot
names the current workspace and lets the reader jump to another; without JavaScript
it still switches slides with plain CSS. The showcase scales to fit the viewport. Other pages have a small footer with a privacy link
and a Capy Atelier credit. All pages use borderless controls. Source translations live
in `site/src/data/content.mjs`; each language gets static HTML, appropriate metadata,
canonical and alternate links, and a sitemap entry.

## Downloads and past versions

The Download page and Past versions are built from the published
[Capy Canvas releases](https://github.com/capyatelier/capycanvas/releases).
Drafts are private and pre-releases are not offered, so both are skipped.
If the GitHub API request fails, the build fails rather than publishing pages
without the releases.

The Download page shows the latest release's version and date, one direct download
per platform, a link to `SHA256SUMS`, and the release notes. Past versions lists every
published release, newest first, with its date, notes and files. Only these assets are
offered, matched by exact name:

| Platform | Asset |
| --- | --- |
| Windows | `capycanvas-<version>-windows-x64-setup.exe` |
| macOS | `capycanvas-<version>-macos-arm64.dmg` |
| Linux | `capycanvas-<version>-linux-x86_64.AppImage` |
| Android | `capycanvas-<version>-android.apk` |
| Checksums | `SHA256SUMS` |

The Microsoft Store `.msix`, Google Play `.aab`, AppImage `.zsync` update data and
the `.zip` archives are never linked. Until a release is published, Linux, Windows and
macOS keep their "Coming soon" status and the page links to the GitHub releases list.

The iPad and Android rows always show **Join the beta**, which opens a short sign-up
page: `/download/ipad-beta/` (install TestFlight, open the invitation, install) and
`/download/android-beta/` (join the Google Group, accept the Google Play test, install,
all with the tablet's Google account). On Android the button sits beside the APK once a
release exists. The TestFlight, Google Group and Google Play test links are `betaLinks`
in `site/src/lib/site.ts`; the Google Group is what puts testers on the Play test's list.

Page text is translated in every language; release notes stay in English. They are
rendered from the release body's Markdown and sanitized with `rehype-sanitize`'s
GitHub schema before being written into the page. Headings in the notes are moved below the page's
headings, relative links resolve to GitHub, and in-page anchors are kept unique.

Tests build the site from `tests/fixtures/releases.json`, shaped like the GitHub API
response and including a draft, a pre-release and an unfinished upload, and from the empty
`tests/fixtures/no-releases.json`, into `artifacts/release-pages/`.

**After publishing a Capy Canvas release, run Actions › Deploy site** in this
repository (or `gh workflow run deploy.yml --repo capyatelier/capycanvas-web`)
so the Download page picks it up. The online editor at editor.capycanvas.art is
deployed separately, by **Actions › Deploy editor** in
[capyatelier/capycanvas-release](https://github.com/capyatelier/capycanvas-release).

## Web app installation instructions

The download page includes brief install instructions in `site/src/data/pwa-content.mjs`.
`site/src/scripts/pwa.js` uses browser/OS hints to select a guide, including desktop-mode
iPads and Android client hints. OS and browser pickers sit side by side; the OS
picker reuses the platform icons and supports keyboard navigation. Browser
choices update for the selected OS. This is guidance, not a capability check:
users can change either choice, and unknown combinations get a supported-browser
recommendation. Without JavaScript, a general guide remains visible. Only the
editor is installed; the marketing site has no service worker or install prompt.

The editor's package precaches its runtime for offline use and updates itself on
a normal refresh. It keeps recovery copies of unsaved drawings in browser storage,
which is not the same as saving a `.capy` file.

Browser instructions were checked against these upstream sources on 2026-09-08:

- Chrome: [computer](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DDesktop), [Android](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DAndroid), [iPhone/iPad](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DiOS).
- [Microsoft Edge](https://support.microsoft.com/en-us/edge/install-manage-or-uninstall-apps-in-microsoft-edge).
- Safari: [Mac (macOS 14+)](https://support.apple.com/en-us/104996), [iPhone/iPad](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios).
- Firefox: [Windows (143+, or 150+ for Microsoft Store installs)](https://support.mozilla.org/en-US/kb/web-apps-firefox-windows), [Android](https://support.mozilla.org/en-US/kb/use-web-apps-firefox-android). Firefox on Mac/Linux currently receives Chrome instructions.

Unit tests cover browser/OS detection; Chrome browser tests exercise the rendered
guides using those hints in all supported locales. Those checks validate the website's
instructions, not native install dialogs on each operating system.

## Regenerate screenshots

```sh
APP_REPO=../draw npm run capture:prepare
npm run capture
npm run check
```

The capture pipeline builds a tracked product revision in an isolated directory,
then uses headed Chrome on a private Wayland display on Linux. It captures the
three homepage showcase slides and light/dark images for all 30 guides with a
1920 × 1080 layout at twice the pixel density (3840 × 2160 pixels). Numbered outlines identify real controls, and the tutorial provides
editable `.capy` examples drawn through actual editor actions and browser pen input.
Pin `APP_REVISION` to the revision deployed at editor.capycanvas.art so the
screenshots match the live editor.

See [the capture guide](site/scripts/capture/README.md) for dependencies, source
pinning, annotations, browser settings, debugging and provenance. The recorded
baseline includes an explicit WGSL compatibility correction in the isolated build.
The adjacent product checkout is not modified. The screenshot UI remains English;
all guide languages supply localized captions and full-size image links.

## Migration comparisons

`npm run test:migration` compares a reference build with the current `docs/`
in the same Chrome process. It checks screenshot pixels and rendered content,
links, and accessibility attributes across 270 views: all four languages,
both themes, seven viewport sizes, open menus, alternate installation guides,
404 pages, and pages with JavaScript disabled. Screenshots and a JSON report are
written to ignored `artifacts/migration/comparison/`.

To recreate the reference from the last commit before the Astro migration:

```sh
mkdir -p artifacts/migration/legacy
git archive 13dd245 docs | tar -x --strip-components=1 -C artifacts/migration/legacy
npm run build
npm run test:migration
```

For later comparisons, set `BASELINE_OUTPUT` to a saved build directory and
optionally `SITE_OUTPUT` to the candidate build. Both browser suites accept
`CHROME`; the regular browser and output tests also accept `SITE_OUTPUT`.
Pixel comparisons should use the same machine and fonts for both builds.
The documentation redesign intentionally differs from the pre-Astro reference;
use a current reference build when checking subsequent visual regressions.

## Publish

The **Deploy site** workflow (`.github/workflows/deploy.yml`) runs on every push to
`main` and from **Actions › Deploy site › Run workflow**. It runs the build, output
and browser checks, then publishes `docs/` with GitHub Pages' Actions deployment.
It needs no secrets. Pull requests run the same checks in **Verify site**.
See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages, Porkbun, and Cloudflare setup.

The public documentation route is `/docs/`.
The former `/documentation/` URLs redirect to the matching `/docs/` pages,
including translated guides. The build directory is also named `docs/`,
so the documentation landing page is built to `docs/docs/index.html`.

## License

Original software, text, and non-brand assets: **MIT OR Apache-2.0**.
Names and the capybara mark have separate [branding terms](BRANDING.md).
See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).
