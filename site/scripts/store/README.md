# Software center screenshots

Linux software centers show native GTK screenshots of Capy Canvas published at
`https://capycanvas.art/store/gtk/`. Each homepage scene (Sketch, Paint and Photo)
is captured in every language the app offers, in light and dark.

The scenes come from `../capture/showcase-scenes.mjs`, which also stages the
homepage slides. `gtk.mjs` adapts them for the app's native capture helper: it fits
the canvas after opening the artwork and scales zoom from the 1920-pixel-wide
homepage window to the native 1200 × 800 window. At Flathub's suggested 1000 × 700
the app folds its menus away and hides brush presets.

## Capture

Requirements: an app checkout with the
[GTK store capture helper](https://github.com/capyatelier/capycanvas/blob/main/docs/development/store-screenshots.md)
and its prerequisites, and a hardware Vulkan GPU. From the website repository root:

```sh
APP_REPO=../capycanvas npm run capture:store
```

The helper builds the app's GTK test executable from the checkout's committed
sources and reports the app's languages. Each scene, language and theme is then
captured in a fresh app with private storage on its own headless display, at twice
the pixel density. Captures run in parallel: `STORE_JOBS` sets how many, by default
one per 8 CPU cores and 8 GiB of free memory, at most 16. Each takes about 1.5 GB
of memory and of GPU memory; 16 jobs capture all 90 images in about 8 minutes, and
their pixels match captures taken one at a time. A failed variant is tried once
more. The
generated recipe, logs and images go to `artifacts/store-capture/<time>/`
(`STORE_OUTPUT` selects another directory).

`STORE_SCENES`, `STORE_LANGUAGES`, `STORE_THEMES` and `STORE_WINDOW` (such as
`1920x1080`) limit a trial run. Use `refresh` below to replace reviewed variants in an existing complete catalog; `publish` still requires a full run.
`STORE_EXECUTABLE` reuses an executable built from unchanged app sources.

## Review and publish

Look at every image before publishing: the right artwork, workspace, tool and
panels; the right theme; readable translations without missing glyphs or clipped
labels; no open menus, dialogs or settings; intact window corners and shadow.

```sh
npm run capture:store -- publish artifacts/store-capture/<time>
npm run check
```

`publish` replaces `site/public/store/gtk/` with the run's images, named
`<language>/<scene>-<theme>.png` with the language tag in lower case, and writes
`manifest.json`. The manifest records the window size, recipe file and artwork hashes, and each image's scene, language, theme, URL, pixel size and hash. Each image also records its own app revision, executable hash and capture recipe hash. `npm test` checks the published images against
the manifest and the current recipe without rendering.

To refresh selected variants after an app fix, capture committed, clean app sources and review every selected image:

```sh
APP_REPO=../capycanvas STORE_SCENES=photo STORE_LANGUAGES=fr,de,ru \
  STORE_THEMES=light,dark npm run capture:store
npm run capture:store -- refresh artifacts/store-capture/<time>
npm run check
```

`refresh` checks the existing complete catalog and every retained file, then replaces only the captured variants. The other files and their original app provenance stay unchanged. The window, scene recipe files, canonical artwork and supported languages must still match; use a full capture and `publish` when those change. Failed, duplicate, unknown or wrongly attributed variants are rejected before any published files change.

After the site deploys:

```sh
npm run capture:store -- verify
```

`verify` downloads the manifest and every image from capycanvas.art and checks
status, content type, bytes, dimensions and transparent corners. It writes its
report to `artifacts/store-capture/verify.json`.

The URLs stay the same when the images are refreshed. Software centers cache
screenshots, so a replacement can take a while to appear.
