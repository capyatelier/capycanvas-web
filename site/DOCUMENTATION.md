# Maintaining the documentation

The guides are an Astro content collection in `src/content/guides/`. They are
currently mock tutorials and references, including tools that are not implemented
yet. Keep the draft label and development notice until the steps and images have
been verified against the app. Release availability must still agree with the
download page; do not imply that a native build can be downloaded before it exists.

## Structure

`src/data/docs-nav.mjs` defines the sidebar order and stable topic paths:

- **Getting started:** quickstart; workspace and canvas, including toolbar placement
  and tool settings.
- **Illustration:** sketching → line art → masking → rendering. Sketching includes
  the pencil sketch and color rough; masking includes base-color layers.
- **Layers:** basics; masks and clipping; groups and blending.
- **Tools & files:** selections and fill; transforms; save and export.
- **Advanced:** brush engine; custom brushes and import; pen, gestures, and shortcuts.

The overview introduces the tutorial. Reference pages explain a particular tool
or setting and link back to the phase where it is useful. Color is covered within
the workflow, layers, and brush settings rather than as a separate sidebar group.

## English first, one topic at a time

Edit `src/content/guides/en/<topic>.md`, then update only the corresponding files
under `ja/`, `zh/`, and `ko/`. Use the English diff to translate changed passages;
keep unrelated translations and formatting intact. Each topic has its own file,
so a change to one guide does not require regenerating a language or the whole manual.
There is no translation API or automatic translation step in the build.

Use the same relative filename and related-topic paths in every language. Astro's
locale URL helpers generate navigation, canonical URLs, language alternates, and
the sitemap. Language switching and browser detection preserve the article path.
Headings are localized and Astro generates their section anchors.

Frontmatter is validated by `src/content.config.ts`. Guides use
JSON-compatible YAML values:

```markdown
---
title: "Sketching"
description: "Draw a pencil sketch and keep the color rough on a separate layer."
figure: "A pencil sketch above separate subject and background color roughs."
related: ["tools/selections", "tools/transforms"]
---

## Set up the sketch

Name the drawing layer **Sketch** and choose a pencil preset.
```

Keep the title out of the Markdown body; the layout supplies the H1. Use H2s for
the main steps and H3s for details.

## Editorial style

Assume readers are comfortable with computers and office software. Explain what
they need to decide or do in Capy Canvas, including the result and the reason when
it is not obvious. Do not walk through familiar dialogs or list their fields just
because those controls exist. Quickstart covers versions, hardware, and a pen
check, then sends the reader directly to sketching.

Write complete, natural sentences. Be concise by limiting each section to its
current task, not by compressing explanations into fragments. Use a neutral manual
register, with procedures for tasks and practical explanations for references.
Headings should identify the operation. Explain controls through a concrete use:
brush opacity changes new marks, while layer opacity changes all existing paint
on the layer. Generic advice about lighting, composition, or artistic confidence
does not substitute for instructions on using the editor.

The tutorial follows one character illustration. Preserve the named layers across
stages: Sketch and Color rough; Line art; Hair, Skin, and Clothing; then clipped
shading layers such as Hair shading. Introduce selections during sketch corrections,
masks when preparing base colors, and clipping during rendering. Explain each
concept when it first becomes necessary. Keep engine parameters, blending details,
and alternate methods in linked reference pages rather than front-loading them.

Use established drawing terms. The tutorial stages are **sketching, line art,
masking, and rendering**. Distinguish the color rough from base colors, and
selections from layer masks, clipping, and alpha lock. Define terms when their
meaning matters to the operation. Do not invent feature names or menu labels.

Avoid promotional headings (“Go deeper”), encouragement (“find your way around”),
vague benefits (“make room to draw”), and narrative transitions (“one drawing,
four phases”). Remove author-directed notes such as “Cover…,” “Explain…,” and
“Show…” from published guides. The draft notice identifies the provisional status;
the body should still contain useful instructions rather than notes to an author.

Translations should use complete sentences, the same neutral register, and
conventional terminology for their language. Keep the example layer names
consistent within each language rather than translating English word order.

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

`GuideFigure.astro` renders a labeled image slot from `figure`. To replace it with
a real capture, add image metadata:

```yaml
image: {"light": "/assets/guides/example-light.webp", "dark": "/assets/guides/example-dark.webp", "alt": "Describe what the screenshot shows."}
```

Put public captures under `public/assets/guides/`. Include light and dark versions
where the UI differs. Ordinary Markdown images also work within the text. Use
several captures of the same illustration for the four phases; show the active
tool, relevant settings, and layer stack when they explain the step. The abstract
marks on the overview are navigation illustrations, not app screenshots.

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
