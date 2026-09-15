# Maintaining the documentation

The guides are an Astro content collection in `src/content/guides/`. They follow
the current web editor, with short references and a four-stage illustration
exercise. Keep instructions tied to observed controls and the recorded product
revision. Release availability must agree with the download page; source code
for a native client does not establish that a native release is available.

## Structure

`src/data/docs-nav.mjs` defines seven groups and 25 stable topic paths:

- **Getting started:** quickstart; workspace and canvas.
- **Drawing:** brushes and painting; color and eyedropper; brush settings;
  saving and resetting brush settings.
- **Layers and masks:** layers; masks and clipping; groups and blending.
- **Selections and editing:** selections and fill; transforms; gradients;
  shapes; rulers and snapping.
- **Filters and output:** filters and properties; editing an imported image;
  saving and exporting.
- **Customize:** panels/toolbars/title bar; workspace management; input.
- **Illustration tutorial:** introduction, then sketching → line art → masking
  → rendering, using the same example document throughout.

The overview introduces the product before directing readers to guides. Its
short, descriptive opening and real Paint screenshot lead into painting, workspaces
and Zen mode, perceptual color, and native desktop/tablet applications. Each concept
links to a detailed guide or current download availability. A final getting-started
path links Quickstart, the tutorial introduction, and saving/exporting. The sidebar
remains the complete topic index. Overview copy lives in `docs-ui.mjs`.

Use descriptive prose on this landing page; procedural instructions belong in the
task guides. Explain what the design enables for an artist. Keep 120 Hz responsiveness,
performance and battery efficiency framed as design goals on supported hardware.
OKLCH selection is available; higher-precision color, HDR and RAW workflows must not
be described as shipped based on design proposals. Existing topic URLs are retained,
including `advanced/` pages grouped under Drawing or Customize. Add new topic slugs
without moving existing pages merely to match a navigation label.

## English first, one topic at a time

Edit `src/content/guides/en/<topic>.md`, then update only the corresponding files
under `ja/`, `zh/`, and `ko/`. Use the English diff to translate changed passages;
keep unrelated translations and formatting intact. Each topic has its own file,
so a change to one guide does not require regenerating a language or the whole manual.
There is no translation API or automatic translation step in the build.

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

Assume readers are comfortable with computers and office software. Explain what
they need to decide or do in Capy Canvas, including the result and the reason when
it is not obvious. Do not walk through familiar dialogs or list their fields just
because those controls exist. Quickstart covers versions, hardware, and a pen
check, then links to painting basics and the tutorial introduction.

Every guide starts with a practical explanation of what the reader is trying to
do and why the main tool or concept helps. Follow it with two to four concrete
techniques or controls they will learn, before the detailed steps. For the four
tutorial stages, number the step headings. Introduce an operation before asking
the reader to perform it. Avoid abstract learning goals: “Use a mask to correct
the ribbon's edge” explains more than “Build a flexible, non-destructive workflow.”
The introduction describes the intended result and the overall sequence; individual
stages should not repeat the entire tutorial's setup.

Write complete, natural sentences. Be concise by limiting each section to its
current task, not by compressing explanations into fragments. Use a neutral manual
register, with procedures for tasks and practical explanations for references.
Headings should identify the operation. Explain controls through a concrete use:
brush opacity changes new marks, while layer opacity changes all existing paint
on the layer. Generic advice about lighting, composition, or artistic confidence
does not substitute for instructions on using the editor.

The tutorial follows one abstract shape study. Preserve the named layers across
stages: Sketch and Color rough; Line art; Ribbon, Disc, and Block; then clipped
shading layers such as Ribbon shading. Introduce selections during sketch corrections,
masks when preparing base colors, and clipping during rendering. Explain each
concept when it first becomes necessary. Keep engine parameters, blending details,
and alternate methods in linked reference pages rather than front-loading them.

Check the document state between steps. A mask can reveal only existing paint;
the masking stage fills the entire base layer so later mask edits can extend its
visible boundary. Keep clipped layers directly above their base, in the stated
order. Set a selection's reference before selecting, and clear it before the next unrestricted drawing operation. To fill an entire
layer with Fill selection, select its content thumbnail, use Select all pixels,
Fill selection, then Deselect pixels. A fill command needs a pixel selection.

Use established drawing terms. The tutorial stages are **sketching, line art,
masking, and rendering**. Distinguish the color rough from base colors, and
selections from layer masks, clipping, and alpha lock. Define terms when their
meaning matters to the operation. Do not invent feature names or menu labels.

Avoid promotional headings (“Go deeper”), encouragement (“find your way around”),
vague benefits (“make room to draw”), and narrative transitions (“one drawing,
four phases”). Remove author-directed notes such as “Cover…,” “Explain…,” and
“Show…” from published guides. The brief status notice identifies the guide’s scope;
the body should still contain useful instructions rather than notes to an author.

Translations should use complete sentences, the same neutral register, and
conventional terminology for their language. Keep the example file’s English layer names in every language so readers can
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
registry and supply all four Markdown files; missing translations fail the build.
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
at 1920 × 1080. Numbered annotations must match both `figure` and `image.alt` in all
four translations. The full-size link follows the selected appearance with JS;
without JS it opens the light image while the inline picture still follows CSS. Ordinary Markdown images also work within the text. Use
several captures of the same illustration for the four phases; show the active
tool, relevant settings, and layer stack when they explain the step. The overview
reuses the tutorial's unannotated Paint screenshot, with a descriptive caption and
no instructional image hint.

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
approach for future comparison sliders or slide galleries. Reading a guide should
not initialize the editor or require WebGPU. A future live exercise should start
only after an explicit action, with a static image and instructions as its fallback.

## Validate and publish

Run `npm run check` from the repository root. It type-checks and builds Astro,
validates the published HTML, and checks desktop/mobile layouts, both themes,
all four languages, device choices, keyboard navigation, and no-JavaScript behavior.
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
[panel customization](https://github.com/capyatelier/capycanvas/blob/main/docs/panel-customization.md),
[preferences and shortcut editor](https://github.com/capyatelier/capycanvas/blob/main/docs/settings-implementation-plan.md),
and [built-in brush presets](https://github.com/capyatelier/capycanvas/blob/main/crates/layer-core/src/presets.rs).
Recheck those when updating instructions. Do not invent names for unfinished
controls or supported import/export formats; the relevant reference page should
describe only workflows verified in the current product. Workspace-owned brush
overrides are available; a standalone custom-preset import/export library is not
part of this guide. Color-management design proposals are not shipped features.
