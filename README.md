# Capy Canvas website

The static, localized website for **[capycanvas.art](https://capycanvas.art)**.
The drawing app lives in [capyatelier/capycanvas](https://github.com/capyatelier/capycanvas);
the Web Demo button opens [editor.capycanvas.art](https://editor.capycanvas.art).

## Develop

Node.js 22 or newer. No npm dependencies or installation step.

```sh
npm run build           # render site/ into docs/
npm test                # validate the generated output
npm run test:browser    # Chrome: desktop/tablet/mobile, both themes, all languages
npm run serve           # http://127.0.0.1:4321
```

`CHROME=/path/to/chromium npm run test:browser` selects a different Chromium
executable; the default is `google-chrome`. Browser checks launch their own
local server and save review screenshots to ignored `artifacts/review/`.

Edit source in `site/`; commit the rebuilt `docs/` output with every change.
The generator replaces `docs/` completely. GitHub Pages publishes the committed
files directly, with no server-side JavaScript, external fonts, or analytics.
The source is independent of the adjacent app repository except when explicitly
recapturing screenshots.

## Routes and languages

| Page | English | Japanese | Simplified Chinese | Korean |
| --- | --- | --- | --- | --- |
| Home | `/` | `/ja/` | `/zh/` | `/ko/` |
| Download | `/download/` | `/ja/download/` | `/zh/download/` | `/ko/download/` |
| Documentation | `/documentation/` | `/ja/documentation/` | `/zh/documentation/` | `/ko/documentation/` |

Unprefixed entry pages detect `navigator.languages`. Japanese, Chinese, and
Korean regional tags map to the corresponding translation. Other languages
fall back to English. Chinese is currently Simplified Chinese, including when
selected for other Chinese regional preferences. The language menu remembers
an explicit choice in local storage and preserves the current page. An explicit
translated URL takes priority over detection or a saved preference. `?lang=en`
forces English even when storage is unavailable. Without JavaScript all pages,
navigation, theme selection, and the language menu still work; automatic
language detection and remembering a choice require JavaScript.

The browser's `prefers-color-scheme` selects the whole page palette and the
matching genuine app screenshot. Changes apply live. The home page contains only
the screenshot, a short description, three links, and the language selector; its
image scales to fit the viewport. All pages use borderless controls and omit footers. Source translations live
in `site/content.mjs`; each language gets static HTML, appropriate metadata,
canonical and alternate links, and a sitemap entry.

## Web app installation instructions

The download page includes brief install instructions in `site/pwa-content.mjs`.
`site/assets/pwa.js` uses browser/OS hints to select a guide, including desktop-mode
iPads and Android client hints. OS and browser pickers sit side by side; the OS
picker reuses the platform icons and supports keyboard navigation. Browser
choices update for the selected OS. This is guidance, not a capability check:
users can change either choice, and unknown combinations get a supported-browser
recommendation. Without JavaScript, a general guide remains visible. Only the
editor is installed; the marketing site has no service worker or install prompt.

The editor's package precaches its runtime for offline use. This does not imply
drawing autosave.

Browser instructions were checked against these upstream sources on 2026-09-08:

- Chrome: [computer](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DDesktop), [Android](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DAndroid), [iPhone/iPad](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DiOS).
- [Microsoft Edge](https://support.microsoft.com/en-us/edge/install-manage-or-uninstall-apps-in-microsoft-edge).
- Safari: [Mac (macOS 14+)](https://support.apple.com/en-us/104996), [iPhone/iPad](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios).
- Firefox: [Windows (143+, or 150+ for Microsoft Store installs)](https://support.mozilla.org/en-US/kb/web-apps-firefox-windows), [Android](https://support.mozilla.org/en-US/kb/use-web-apps-firefox-android). Firefox on Mac/Linux currently receives Chrome instructions.

Unit tests cover browser/OS detection; Chrome browser tests exercise the rendered
guides using those hints in all four locales. Those checks validate the website's
instructions, not native install dialogs on each operating system.

## Recapture the app

Start a compatible build of the actual app, for example a stable copy of
`../draw/dist/capycanvas`, using a local HTTP server. Then:

```sh
APP_URL=http://127.0.0.1:4184 npm run capture
npm run build
npm test
```

Screenshots are captured at 1440 × 810 (16:9), with pen pressure tapering at both
ends of each watercolor stroke. Capture requires Linux/Wayland, Chrome, and working hardware WebGPU. It paints
three simple watercolor squiggles with the app's Watercolor Wash brush through
real browser pen input, scrolls the brush list to the selection, and captures the
entire workspace in both themes. The script does not fabricate or composite UI.
`site/assets/capture.json` records the source revision and capture dimensions.
The app UI in the screenshots remains in its original English; the website is
localized independently.

## Publish

See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages, Porkbun, and Cloudflare setup.
The publishing directory is **`/docs`**, not the generator's `site/` directory.
The public documentation route is `/documentation/`.

## License

Original software, text, and non-brand assets: **MIT OR Apache-2.0**.
Names and the capybara mark have separate [branding terms](BRANDING.md).
See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).
