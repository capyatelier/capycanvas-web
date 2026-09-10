# Maintaining the documentation

The guides are an Astro content collection in `src/content/guides/`. They are
currently outlines, including tools that are not implemented yet. Keep the
outline label until a guide has verified steps and images from the app.

## Structure

`src/data/docs-nav.mjs` defines the sidebar order and stable topic paths:

- **Get started:** quickstart; workspace and canvas, including toolbar placement
  and tool settings.
- **Draw an illustration:** draft and color blocks → ink → flat colors and masks
  → render and finish.
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

Frontmatter is validated by `src/content.config.ts`. The initial outlines use
JSON-compatible YAML values:

```markdown
---
title: "Draft & color blocks"
description: "Plan the composition with pencil marks and large shapes of color."
figure: "Pencil sketch, loose color blocks, and the combined draft."
related: ["tools/selections", "tools/transforms"]
---

## Sketch the idea

Short, task-specific instructions go here.
```

Keep the title out of the Markdown body; the layout supplies the H1. Use H2s for
the main steps and H3s for details. Prefer a direct answer followed by a short
procedure, a useful image, and links to relevant settings. Do not add a sales pitch
or an account of how the guide was written.

Shared interface text lives in `src/data/docs-ui.mjs`. Add a topic to the sidebar
registry and supply all four Markdown files; missing translations fail the build.
Tests also reject orphaned files and broken local links.

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
`main:/docs` at `/documentation/`.

## Outline references

The tutorial sequence follows the requested illustration workflow and the public
chapter list of [RiceBrush's workflow study](https://www.youtube.com/watch?v=JNfcnJBdel4):
sketch at 01:00, line art at 03:42, masking at 05:33, and rendering at 07:40.
The public caption endpoint returned no transcript during this outline pass;
the detailed tool coverage uses the requested sequence and the following guides:

- [Krita: Flat Coloring](https://docs.krita.org/en/tutorials/flat-coloring.html)
  informs the separation of flats, selections, fill edges, and masks.
- [CLIP STUDIO PAINT: Color Blocking & Flat Colors](https://tips.clip-studio.com/en-us/articles/1231)
  provides a professional example of large color shapes and editable masked areas.

These are research references, not dependencies or sources of republished artwork.
