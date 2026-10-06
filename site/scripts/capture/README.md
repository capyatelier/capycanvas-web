# Reproduce the editor screenshots

Run from the website repository root. Every image on the site is an actual
Capy Canvas render from the web editor, captured in a 1920 × 1080 window at twice
the pixel density, in both light and dark appearances and in every site language,
with the editor showing that language. Most images are cropped to the panel, bar,
menu or dialog a section describes; the workspace overviews show the whole window.

## Prepare and capture

Requirements: Node 24, the product's Rust/Wasm build dependencies, Chrome with
hardware WebGPU, and (on Linux) Mutter and `dbus-run-session`. Install website
dependencies with `npm ci`.

```sh
# Build the app revision in an isolated copy of the app repository.
APP_REPO=../capycanvas APP_REVISION=origin/main npm run capture:prepare
npm run capture
npm run check
```

`capture:prepare` archives the selected tracked revision into ignored
`artifacts/capture-app/<revision>/`, builds there, and records the prepared package
in `artifacts/capture-app.json`. It never changes the product checkout.
`CAPTURE_APP_DIR` and `CAPTURE_TARGET_DIR` select other staging and Cargo-cache
directories.

On Linux, `capture` launches **headed Chrome** on private headless Wayland
displays, which keeps the WebGPU surface on NVIDIA. It opens no window on the
desktop. Each chapter runs in its own fresh browser on its own display, all at
once; `CAPTURE_JOBS` (default 16) sets how many run together. A full run of every
chapter in every language takes about 13 minutes this way. `CHROME` selects
another executable; `CAPTURE_BROWSER_MODE=native` uses Chrome's own headless mode
where it renders WebGPU correctly.

## Recipes

`docs/index.mjs` lists one recipe per chapter. The illustration chapter draws
the tutorial study with real pen input and saves the downloadable examples;
other chapters get them with `example(name)`, which waits for that chapter.
`showcase.mjs` stages the homepage slides.

- `editor.mjs` drives the editor through its own actions, commands, clicks and
  pen events. The browser file picker is replaced with an in-memory store so
  saving and opening never block on an OS dialog; the app still writes and reads
  its real `.capy` and image bytes.
- `shoot.mjs` captures each shot once per theme and language as WebP, at quality
  70 for manual images and 90 for the homepage slides and documentation
  overview, cropped to the
  union of CSS selectors, document rectangles or window rectangles. A recipe opens
  menus and dialogs in `setup` and closes them in `teardown`, because the
  appearance switch can close them; both run once per theme with the editor in
  English, and `ready` waits for a state such as the canvas bar being shown. The
  shot then switches the editor language in place for each site language, which
  keeps the drawing, selection, open menus and dialogs, and measures the crop and
  callouts again, because labels change length. Selector targets are found once in
  English and the same elements are measured in every language. `target` may be a
  function, and `variant`, `check` and `release` run in every language, for
  anything measured from the layout, typed in the artist's language, or held
  during the shot.
- `languages.mjs` switches languages as the browser does (`navigator.languages`
  and `languagechange`, with the editor's language left on System). The editor
  keeps default layer, palette and swatch names (*Paper*, *Layer 7*, *Curves*,
  *Ocean Study*) in the language they were created in, so a shot renames the
  ones visible in its crop to the editor's own names for each language and
  restores them afterwards. Layer names are restored with Undo; the capture fails
  if the Redo this leaves would be visible in a later image. Names the recipes
  type (*Ribbon*, *Line art*) and text the editor always shows in English stay as
  they are. `message(key, locale)` reads an editor string for text a recipe types
  in the artist's language.
- `annotations.mjs` draws numbered outlines over measured controls for images with
  callouts. Numbers match the image caption in the page.
- `docs/illustration.mjs` defines the original abstract study (a teal ribbon, an
  ochre disc and a terracotta block) and the tutorial's four stages.
- `photo/terrarium.jpg` is a photograph supplied by Capy Atelier for the photo
  tutorial and photo features, resized with its metadata removed.
- `showcase/spring.png` (an ink drawing), `showcase/house.png` (an oil painting)
  and `showcase/NDF_4717.jpg` (the terrarium photograph at full size) are supplied
  by Capy Atelier for the Sketch, Paint and Photo slides on the homepage.

Never fake UI: no injected controls, CSS overrides or replaced pixels. Reach every
state through the app. Wait on app state or events, never on fixed delays.

Before the first chapter, the capture checks that Japanese, Chinese, Korean and
Thai interface text renders with real glyphs (Noto Sans CJK and Noto Sans Thai on
Linux).

## Develop one chapter

`CAPTURE_ONLY` runs selected chapters; `CAPTURE_OUTPUT` and `CAPTURE_REVIEW` keep
the results out of the published assets, so several chapters can be developed at
once:

```sh
CAPTURE_ONLY=layers CAPTURE_OUTPUT=/tmp/capture/layers CAPTURE_REVIEW=/tmp/capture/layers-review npm run capture
```

A failed chapter does not stop the others and is retried once in a fresh
browser, except the illustration chapter, which the others depend on. The review
directory holds a screenshot, the editor state and browser errors for each failed
attempt, and `timings.json` with the time of each chapter and the retries. A partial run is marked `partial`
and must not be published; run every chapter with `npm run capture` before
committing.

## Outputs and provenance

Commit the recipes and these public assets:

- `public/assets/docs/<locale>/<chapter>/<name>-{light,dark}.webp`: every manual
  image, per site language (`en`, `ja`, `zh`, … `it`).
- `public/assets/guides/<locale>/illustration-{light,dark}.webp`: the documentation overview.
- `public/assets/showcase/<locale>/`: the homepage slides.
- `<area>/shared/…`: an image that came out identical in every language, such as
  a crop of the canvas alone, stored once.

A run keeps a committed image when the new capture has the same size, quality
and callouts and its pixels match within a small tolerance (no channel off by
more than 32, mean difference under 1). Only images that really changed are
rewritten, so a recapture doesn't add every image to the repository again.
- `public/assets/examples/`: the four tutorial projects and the exported study.
- `public/assets/capture.json`: for each image its shot, theme, languages and app
  revision; the source hashes and browser version for each revision, recipe
  hashes, image sizes and hashes, callout bounds, and example hashes. The site
  looks up each page's images here (`src/lib/captures.mjs`).

The manual's images all come from one app revision. The homepage slides can
come from a newer one: prepare that revision and run
`CAPTURE_ONLY=showcase npm run capture`. The other images are kept as long as
their files are unchanged; otherwise the run is marked `partial`.

Reproduction means the same source, actions, artwork and composition. GPU, fonts,
Chrome versions and input timing can change individual bytes, so review new
images rather than expecting identical output.
