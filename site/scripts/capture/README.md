# Reproduce the editor screenshots

Run from the website repository root. Screenshots are actual Capy Canvas renders:
1920 × 1080, English editor controls, light and dark appearances. The homepage,
documentation overview and product README share the unannotated abstract study in
the shipped **Paint** workspace (`guides/illustration-{light,dark}.webp`). Other guide images add numbered outlines; translated
captions explain the same controls in each language.

## Prepare and capture

Requirements: Node 24, the product's Rust/Wasm build dependencies, Chrome with
hardware WebGPU, and (on Linux) Mutter and `dbus-run-session`. The app build script
checks its own toolchain requirements. Install website dependencies with `npm ci`.

```sh
# Defaults to the tracked HEAD of ../draw. Pin a commit when reproducing a release.
APP_REPO=../draw APP_REVISION=390c82e4df5c67cd8668b039dfc0aa7192e92f56 npm run capture:prepare
npm run capture
# Refresh guides (including the homepage view), preserving the old watercolor pair/project.
CAPTURE_ONLY=docs npm run capture
npm run check
```

`capture:prepare` archives the selected tracked revision into ignored
`artifacts/capture-app/<revision>/`, builds there, and records the prepared package
in `artifacts/capture-app.json`. It does not change the adjacent product checkout
or include its uncommitted edits. `CAPTURE_APP_DIR` and `CAPTURE_TARGET_DIR` can
select different staging and Cargo-cache directories.

On Linux, `capture` launches **headed Chrome** on a private headless Wayland display.
This preserves the WebGPU surface on the NVIDIA setup used for these captures.
It does not open windows or move the pointer on the user's desktop. The wrapper
starts its own Mutter process and cleans up that process and its temporary runtime
directory on exit. `CHROME` selects another executable. `CAPTURE_BROWSER_MODE=native`
opts into Chrome's native headless mode on systems where it renders WebGPU correctly;
the watercolor-study pixel check rejects a black or missing canvas.

Chrome uses software Canvas2D for image decoding and tiny UI previews, while the
editor's painting and effects remain hardware WebGPU. This avoids blank image
imports in the tested Chrome/Vulkan Canvas2D path. Captures run with a fresh browser
profile. Website browser checks use ordinary headless Chrome and need no WebGPU.

The runner serves the prepared app automatically. For a separately hosted staging
build, set `APP_URL`; it must serve the prepared `capture-source.json`, matching
JavaScript entry point and Wasm. A source checkout's revision alone is not proof
of the package served by a URL.

## Recipes and annotations

- `editor.mjs` selects actual commands, tools, layers, workspaces and dialogs.
  Artwork follows sampled paths delivered as browser pen events, with pressure.
  Every pen path is checked against the actual canvas hit target.
- `illustration.mjs` defines the original abstract study. It creates real
  sketch, ink, masked base-color and clipped shading layers. It saves four `.capy`
  stages and exports `abstract-study.png`; these are reader-downloadable examples.
  Ribbon, Disc and Block use teal, sage, ochre and terracotta, with dark blue ink
  and cream highlights. Pencil, G-Pen, Paintbrush, Watercolor Wash and Airbrush
  produce the line work, hatching and shading in the actual editor.
- `references.mjs` stages individual tool and workflow examples. Image import uses
  the real file input, then checks painted pixels in a real PNG export. The imported
  image/effect project is also saved, reopened and checked for its layer structure.
- `annotations.mjs` injects an SVG overlay above the app. It measures visible DOM
  targets and clips outlines to their containers. An HTML popover keeps the overlay
  above modal dialogs without changing the app's controls or painting. Numbers are
  language-neutral; `figure` and `image.alt` in each guide must match them.

The browser file-picker transport is replaced with an in-memory file store so an
OS save dialog does not block automation. The app still serializes and reopens its
own `.capy` data and produces the PNG bytes. Neither UI screenshots nor artwork are
replaced with fabricated DOM or a separate bitmap. The illustration is a scripted
teaching example.

## Outputs and provenance

Commit the recipes, these public assets, and rebuilt `docs/`:

- `site/public/assets/workspace-{light,dark}.webp`: unannotated watercolor captures,
  retained at their old homepage URLs for existing links.
- `site/public/assets/guides/`: 25 guide pairs, including the four tutorial stages.
- `site/public/assets/examples/`: four tutorial projects, the abstract-study PNG,
  watercolor project, and imported-image project/PNG.
- `site/public/assets/capture.json`: source revision, applied source corrections,
  app hashes, recipe hashes, browser version, dimensions, screenshot hashes,
  annotation targets/bounds, and example-file hashes. Documentation-only runs retain
  the old watercolor assets byte-for-byte and record their original environment and
  recipe hashes under the legacy `retainedHomepage` field. The manifest's legacy
  `screenshots` list also names that pair; the current homepage shares the
  `guides/illustration` entries in `captures`.

`capture-compatibility.mjs` lists any required source corrections explicitly.
The current baseline includes the WGSL hash-expression correction upstream and
needs no compatibility patch. It also includes the Web Tool Set layout fix: preset
labels and brush previews use the same arrangement as GTK. Any future correction
must be applied only to the isolated source archive and recorded in provenance.
Do not describe a corrected build as an unmodified checkout.

The capture sequence reapplies each appearance once after its CSS palette is
active. This refreshes the color wheel's canvas text, which this app revision
otherwise draws with the preceding theme's ink. It uses the normal editor action
without altering app source or screenshot pixels.

Reproduction means the same source, actions, artwork and composition. GPU, fonts,
Chrome versions and input timing can change individual screenshot bytes. Use the
recorded environment and review new images rather than promising bit-identical
output across machines.

## Review and debug

The runner writes progress to `artifacts/capture-review/progress.json`. On failure
it saves a screenshot, editor state and browser errors in that directory. Mutter
logs are in `display.log`. A failed or partial run must not be published.

```sh
# Reuses already-generated tutorial files while debugging the reference scenes.
CAPTURE_ONLY=references npm run capture
# A reference-only run writes partial provenance; restore a complete run before publishing.
npm run capture
npm run check
```

Tests verify complete topic/theme coverage, dimensions and compression, provenance
hashes, visible callouts, translated caption numbers, the editable examples and
colored PNG output. Website checks cover all guides in all four languages at desktop
and mobile widths, both themes, full-size image links, language switching and
reading without JavaScript. Review the actual art and annotation placement as well:
a passing selector check cannot establish that a screenshot explains its page.
