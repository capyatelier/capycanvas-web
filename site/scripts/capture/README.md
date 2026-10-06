# Reproduce the editor screenshots

Run from the website repository root. Every image in the manual is an actual
Capy Canvas render from the web editor, captured in a 1920 × 1080 window at twice
the pixel density, with English controls, in both light and dark appearances.
Most images are cropped to the panel, bar, menu or dialog a section describes;
the workspace overviews show the whole window.

## Prepare and capture

Requirements: Node 24, the product's Rust/Wasm build dependencies, Chrome with
hardware WebGPU, and (on Linux) Mutter and `dbus-run-session`. Install website
dependencies with `npm ci`.

```sh
# Build the released revision in an isolated copy of the app repository.
APP_REPO=../capycanvas APP_REVISION=v1.0.4 npm run capture:prepare
npm run capture
npm run check
```

`capture:prepare` archives the selected tracked revision into ignored
`artifacts/capture-app/<revision>/`, builds there, and records the prepared package
in `artifacts/capture-app.json`. It never changes the product checkout.
`CAPTURE_APP_DIR` and `CAPTURE_TARGET_DIR` select other staging and Cargo-cache
directories.

On Linux, `capture` launches **headed Chrome** on a private headless Wayland
display, which keeps the WebGPU surface on NVIDIA. It opens no window on the
desktop. `CHROME` selects another executable; `CAPTURE_BROWSER_MODE=native` uses
Chrome's own headless mode where it renders WebGPU correctly.

## Recipes

`docs/index.mjs` lists one recipe per chapter, in the order they run in one
browser. The illustration chapter runs first: it draws the tutorial study with
real pen input and saves the downloadable examples the other chapters open.
`showcase.mjs` runs last and stages the homepage slides.

- `editor.mjs` drives the editor through its own actions, commands, clicks and
  pen events. The browser file picker is replaced with an in-memory store so
  saving and opening never block on an OS dialog; the app still writes and reads
  its real `.capy` and image bytes.
- `shoot.mjs` captures `public/assets/docs/<name>-{light,dark}.webp`, cropped to
  the union of CSS selectors, document rectangles or window rectangles. A recipe
  opens menus and dialogs in `setup` and closes them in `teardown`, because the
  appearance switch can close them. `ready` waits for a state such as the canvas
  bar being shown.
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
state through the app.

## Develop one chapter

`CAPTURE_ONLY` runs selected chapters; `CAPTURE_OUTPUT` and `CAPTURE_REVIEW` keep
the results out of the published assets, so several chapters can be developed at
once:

```sh
CAPTURE_ONLY=layers CAPTURE_OUTPUT=/tmp/capture/layers CAPTURE_REVIEW=/tmp/capture/layers-review npm run capture
```

On failure the review directory holds a screenshot, the editor state and browser
errors. A partial run is marked `partial` and must not be published; run every
chapter with `npm run capture` before committing.

## Outputs and provenance

Commit the recipes and these public assets:

- `public/assets/docs/`: every manual image, by chapter.
- `public/assets/guides/illustration-{light,dark}.webp`: the documentation overview.
- `public/assets/showcase/`: the homepage slides.
- `public/assets/examples/`: the four tutorial projects and the exported study.
- `public/assets/capture.json`: the app revision of each image, the source
  hashes and browser version for each revision, recipe hashes, image sizes and
  hashes, callout bounds, and example hashes.

The manual's images all come from the released revision. The homepage slides can
come from a newer one: prepare that revision and run
`CAPTURE_ONLY=showcase npm run capture`. The other images are kept as long as
their files are unchanged; otherwise the run is marked `partial`.

Reproduction means the same source, actions, artwork and composition. GPU, fonts,
Chrome versions and input timing can change individual bytes, so review new
images rather than expecting identical output.
