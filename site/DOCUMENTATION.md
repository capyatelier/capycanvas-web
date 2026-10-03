# Maintaining the documentation

The guides are an Astro content collection in `src/content/guides/`. They follow
the current web editor, with short tutorial-style references and a four-stage
illustration exercise. Keep instructions tied to observed controls and the recorded product
revision. Release availability must agree with the download page; source code
for a native client does not establish that a native release is available.

## Structure

`src/data/docs-nav.mjs` defines eight groups and 30 stable topic paths:

- **Getting started:** quickstart; workspaces and canvas; open, save and recover
  (`tools/files`); export an image (`output/export`).
- **Drawing:** brushes and painting; color and eyedropper; palettes; brush settings;
  saving and resetting brush settings.
- **Layers and masks:** layers; masks and clipping; groups and blending.
- **Selections:** selection tools (`tools/selections`); Quick Mask and selection
  layers; select by brightness (`selections/tonal-range`).
- **Editing tools:** transforms; gradients; shapes; rulers and snapping.
- **Photos and color:** edit a photo; filters and adjustments; color spaces, HDR and
  proofing (`color/management`).
- **Customize:** panels/toolbars/title bar; workspace management; input.
- **Illustration tutorial:** introduction, then sketching → line art → masking
  → rendering, using the same example document throughout.

The overview introduces the product before directing readers to guides. Its
short opening and real Paint screenshot lead into six sections: painting and
physical media, the three workspaces and Zen mode, pen/touch/mouse input with
120 Hz responsiveness, color (OKLCH, palettes, wide gamut, 16-bit, HDR and Proof),
photo editing, and native desktop/tablet applications. The native section links to
the GitHub repository root as “System architecture.” Getting started links the
Web Demo, downloads, Quickstart and the tutorial introduction. The sidebar remains
the complete topic index. Overview copy lives in `docs-ui.mjs`.

Use warm, concrete prose on this landing page, in the same tone as the existing
sections. Each sentence should develop its section's central idea for an artist,
without turning into a feature list or technical specification, and without
sounding like an advertisement. Reasonable descriptions of what the app is designed
to do are fine; they do not each need a benchmark. Native downloads must reflect
current availability. Existing topic URLs are retained, including `advanced/` pages
grouped under Drawing or Customize. Add new topic slugs without moving existing
pages merely to match a navigation label.

## English first, one topic at a time

Edit `src/content/guides/en/<topic>.md`, then update only the corresponding files
under every supported locale directory listed in `src/data/content.mjs`.
Use the English diff to translate changed passages;
keep unrelated translations and formatting intact. Each topic has its own file,
so a change to one guide does not require regenerating a language or the whole manual.
There is no translation API or automatic translation step in the build.
The ten locales added in October 2026 use machine-assisted static translations.
Keep product names, keyboard shortcuts, file formats, and English editor control
labels intact so the instructions match the screenshots. Review translated prose
when updating a topic, and preserve every contextual link and example file.

Use the same relative filename and related-topic paths in every language. Astro's
locale URL helpers generate navigation, canonical URLs, language alternates, and
the sitemap. Language switching and browser detection preserve the article path.
Headings are localized and Astro generates their section anchors. Use inline
`<strong>` for control labels ending in an ellipsis when adjacent CJK text would
prevent Markdown emphasis from closing. Project-file links use the HTML
`download` attribute so local previews also save them as files.

Frontmatter is validated by `src/content.config.ts`. Guides use
JSON-compatible YAML values:

```markdown
---
title: "Sketching"
description: "Draw a pencil sketch and keep the color rough on a separate layer."
purpose: "The sketch records the drawing, while a separate color rough lets you try the main colors underneath it."
techniques: ["Use a pencil preset and pen pressure to draw the sketch.", "Select and transform one part of the drawing.", "Put rough colors on a layer below the pencil lines."]
figure: "A pencil sketch above separate subject and background color roughs."
related: ["tools/selections", "tools/transforms"]
---

## 1. Set up the sketch

Create a new document for the illustration and name its first drawing layer
**Sketch**. Choose the built-in **Pencil** preset.
```

Keep the title out of the Markdown body; the layout supplies the H1. Use H2s for
the main steps and H3s for details. The layout renders `purpose`, then a short
`techniques` list, then the figure and Markdown instructions. `description` stays
brief for navigation cards and search metadata. Use an optional `navTitle` when a
short sidebar label is clearer; the tutorial's full title appears as its H1, with
“Introduction” in the sidebar.

## Editorial style

Write like a friendly tutorial. Assume readers are comfortable with computers but
new to Capy Canvas. Explain only what they need to do the task, using complete,
fleshed-out sentences for those few ideas. Avoid short, dense sentences that pack
several facts together, and leave out implementation details a reader doesn't need,
such as how the renderer, storage or file transport work. Don't walk through
familiar dialogs or list every field just because it exists.

Every guide starts with a practical explanation of what the reader is trying to
do and why the main tool or concept helps. Follow it with two to four concrete
techniques they will learn, before the steps. For the four tutorial stages, number
the step headings. Introduce an operation before asking the reader to perform it,
and explain a control through a concrete use: brush opacity changes new marks,
while layer opacity changes all existing paint on the layer. Headings should name
the task. Generic advice about lighting, composition, or artistic confidence does
not substitute for instructions on using the editor.

The tutorial follows one abstract shape study. Preserve the named layers across
stages: Sketch and Color rough; Line art; Ribbon, Disc, and Block; then clipped
shading layers such as Ribbon shading. Introduce selections during sketch corrections,
masks when preparing base colors, and clipping during rendering. Keep engine
parameters, blending details, and alternate methods in linked reference pages.

Check the document state between steps. A mask can reveal only existing paint;
the masking stage fills the entire base layer so later mask edits can extend its
visible boundary. On a mask, any brush reveals and the Eraser hides; the paint color
does not matter. Keep clipped layers directly above their base, in the stated
order. To fill an entire layer, use Select all pixels, Fill selection, then Deselect
pixels. A fill command needs a pixel selection.

Use established drawing terms. The tutorial stages are **sketching, line art,
masking, and rendering**. Distinguish the color rough from base colors, and
selections from layer masks, clipping, and alpha lock. Define terms when their
meaning matters to the operation. Do not invent feature names or menu labels.

Avoid promotional headings (“Go deeper”), vague benefits, and narrative
transitions that don't help the reader do the task. Write only for the reader:
leave out notes about the documentation itself, draft or status labels, remarks
about native ports or how screenshots were made, and advice meant for bug reports.
Before adding a detail, ask whether a new user needs it to do the task on this page;
settings they can safely leave alone deserve a sentence saying so, not an
explanation.

Translations should use complete, natural sentences, the same friendly register,
and conventional terminology for their language. Keep the app's English control
labels in bold, as they appear in the editor. Keep the example file’s English layer names in every language so readers can
match the screenshots and downloadable projects. Translate the surrounding
explanation and use conventional terms for the operations:

| English | Japanese | Simplified Chinese | Korean |
| --- | --- | --- | --- |
| Sketching | 下描き | 草稿 | 스케치 |
| Color rough | 色ラフ | 色稿 | 컬러 러프 |
| Line art | 線画 | 线稿 | 선화 |
| Masking | マスク作成 | 蒙版 | 마스킹 |
| Rendering | 塗り込み | 细化 | 렌더링 |
| Layer mask | レイヤーマスク | 图层蒙版 | 레이어 마스크 |
| Clipping | クリッピング | 剪贴 | 클리핑 |
| Alpha lock | 透明度ロック | 锁定透明像素 | 알파 잠금 |

Shared interface text lives in `src/data/docs-ui.mjs`. Add a topic to the sidebar
registry and supply a Markdown file for every locale; missing translations fail the build.
Tests also reject orphaned files, broken links, and prose links that leave the
reader's language. Use explicit localized paths in Markdown, such as
`/ja/docs/layers/masks/`; Astro's locale helpers generate the navigation links.

## Images and interactive elements

`GuideFigure.astro` renders the theme-aware screenshot, caption and full-size
image link. Every current topic has image metadata:

```yaml
image: {"light": "/assets/guides/example-light.webp", "dark": "/assets/guides/example-dark.webp", "alt": "Describe what the screenshot shows."}
```

Put public captures under `public/assets/guides/`. Include light and dark versions
with a 1920 × 1080 layout captured at twice the pixel density (3840 × 2160 pixels). Numbered annotations must match both `figure` and `image.alt` in all
four translations. The full-size link follows the selected appearance with JS;
without JS it opens the light image while the inline picture still follows CSS. Ordinary Markdown images also work within the text. Use
several captures of the same illustration for the four phases; show the active
tool, relevant settings, and layer stack when they explain the step. The overview
reuses the tutorial's unannotated Paint screenshot, with accessible alt text and
no visible caption or instructional image hint. Guides always use the abstract
study, including the photo-editing pages.

The homepage showcase (`src/components/Home.astro`) is a slideshow that crossfades
between the Sketch, Paint and Photo workspaces every few seconds, each showing
finished artwork supplied by Capy Atelier. Its small indicator is overlaid on the
screenshot so it takes no extra space.
Those sources are the `.capy` projects in `scripts/capture/showcase/`; they are
capture inputs rather than published downloads.

Do not include AI-generated illustration artwork. The current original abstract
study is drawn in the actual app through scripted pen input and layer actions.
The four `.capy` stages and final PNG in `public/assets/examples/` are shared across
languages. Asset-download links intentionally have no locale prefix.

Use [the capture guide](scripts/capture/README.md) to rebuild the isolated product
package, regenerate the screenshots and examples, and inspect provenance. Keep
source corrections explicit; do not silently modify the adjacent app checkout.

Custom behavior belongs in a small Astro component with a processed browser script.
`PlatformNotes.astro` demonstrates this: detect the device, let the reader change
it, remember the choice, and leave every variant in the static HTML. Use that same
approach for future comparison sliders or slide galleries; the homepage showcase
switches slides with styled radio buttons, so it also works without JavaScript. Reading a guide should
not initialize the editor or require WebGPU. A future live exercise should start
only after an explicit action, with a static image and instructions as its fallback.

## Validate and publish

Run `npm run check` from the repository root. It type-checks and builds Astro,
validates the published HTML, and checks desktop/mobile layouts, both themes,
all supported languages, device choices, keyboard navigation, and no-JavaScript behavior.
Inspect the screenshots in `artifacts/review/` when changing layouts or content.
Commit both `site/` sources and the generated `docs/` output; GitHub Pages serves
`main:/docs` at `/docs/`.

The output directory and URL have separate meanings: `/docs/quickstart/` is built
to `docs/docs/quickstart/index.html`. The route helper maps the internal
`documentation` page key to the public `docs` URL segment. The former
`/documentation/` routes are static redirect pages for all existing topics and
locales, excluded from the sitemap. Their small inline script retains query
parameters and section fragments; a meta refresh and link work without JavaScript.

## Workflow references

The tutorial sequence follows the requested illustration workflow and the public
chapter list of [RiceBrush's workflow study](https://www.youtube.com/watch?v=JNfcnJBdel4):
sketch at 01:00, line art at 03:42, masking at 05:33, and rendering at 07:40.
The video's caption endpoint and browser transcript panel did not return the
narration. The terminology and technical descriptions were checked against these
complete tutorials and reference pages:

- [Krita: Flat Coloring](https://docs.krita.org/en/tutorials/flat-coloring.html)
  informs the separation of flats, selections, fill edges, and masks.
- [CLIP STUDIO PAINT: Color Blocking & Flat Colors](https://tips.clip-studio.com/en-us/articles/1231)
  provides a professional example of large color shapes and editable masked areas.
- [CLIP STUDIO PAINT: Sketching & Color Rough](https://tips.clip-studio.com/en-us/articles/1229)
  distinguishes the preliminary drawing and color study from later painting.
- [CLIP STUDIO PAINT: Line Art](https://tips.clip-studio.com/en-us/articles/1230)
  describes line-art layers, contours, and separating parts for masking.
- [CLIP STUDIO PAINT: Painting the Character](https://tips.clip-studio.com/en-us/articles/1232)
  covers shadows, line color, reflected light, and highlights.
- [Krita: Opacity and Flow](https://docs.krita.org/en/reference_manual/brushes/brush_settings/opacity_and_flow.html)
  distinguishes stroke opacity from individual dab deposition.
- [Krita: Transparency Masks](https://docs.krita.org/en/reference_manual/layers_and_masks/transparency_masks.html)
  and [Procreate: Mask](https://help.procreate.com/procreate/handbook/layers/layers-mask)
  describe visibility masks, clipping, and alpha lock.

These are research references, not dependencies or sources of republished artwork.

Control details were checked against the public app source: the
[shortcut defaults](https://github.com/capyatelier/capycanvas/blob/main/crates/layer-ui/src/shortcuts.rs),
[panel customization](https://github.com/capyatelier/capycanvas/blob/main/docs/ui/panel-customization.md),
[default workspaces](https://github.com/capyatelier/capycanvas/blob/main/docs/ui/default-workspaces.md),
[supported photo formats](https://github.com/capyatelier/capycanvas/blob/main/crates/layer-color/src/photo.rs),
[export choices](https://github.com/capyatelier/capycanvas/blob/main/apps/layer-web/export-controls.js)
and [built-in brush presets](https://github.com/capyatelier/capycanvas/blob/main/crates/layer-core/src/presets.rs).
Recheck those when updating instructions. Do not invent names for unfinished
controls or supported import/export formats. Wide-gamut color, 16-bit and HDR
editing, HDR export and print proofing are part of the web editor; RAW development,
healing, cloning, cropping and CMYK editing are not, so the guides do not describe
them. Workspace-owned brush overrides are available; a standalone custom-preset
import/export library is not part of this guide.
