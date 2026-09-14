# Website refresh investigation and plan

Investigated September 14, 2026. Scope: refresh the homepage screenshot with the
Paint workspace and reorganize the documentation around the current feature set,
keeping individual pages brief. This records the investigation and accepted plan. Implementation adds all 25
topics in four languages, 1920 × 1080 headed Chrome captures, numbered guide
annotations, editable tutorial examples, and a reproducible capture pipeline.
See `site/scripts/capture/README.md` for the implemented workflow and provenance.

The product baseline is the clean local `../draw` checkout on `main`, revision
`fb81ebebe6987c7b773a17ec07c5b86472d7087a`. Findings come from source, product
documentation, existing browser tests, and inspection of stored screenshots.
The current app was not rebuilt or exercised during this investigation. Existing
acceptance screenshots can predate the current labels; source controls the names
below. The local checkout was used instead of fetching GitHub.

## Findings

| Area | Website today | Current product evidence and implication |
| --- | --- | --- |
| Homepage capture | Two 1440 × 810 WebPs from revision `46010d54…`, showing a flat Brushes list, brush sizes, a simple layer list, and three watercolor strokes. | Paint has a tools strip, Tool Set, Tool/Brush size, Color, commands, Navigator, Properties/Filters, and Layers. The workspace switcher now says Sketch, Paint, Photo. Capture this arrangement explicitly. |
| Navigation | 16 topics in five groups; the overview and quickstart direct readers into a character illustration tutorial. | Shared tools now support drawing, image editing, effects, and extensive workspace customization. These need direct entry points, with the illustration tutorial retained as an optional sequence. |
| Files | Saving and export described as planned, without formats. | The web host opens/saves `.capy` projects, exports PNG, and imports an image as a layer. Explain each distinct operation. Workspace autosaving does not save artwork. |
| Editing | Transforms are described as unfinished; masks from selections are described as planned. | Operation, Scale / rotate, Apply/Cancel transform, and mask creation/replacement from selections have implementations. Replace speculative instructions with exact verified controls. |
| Canvas | Rotation is described as touch-only. | Rotate view 90° left/right and horizontal/vertical view flips are commands; Navigator also exposes view controls. Recheck shortcuts and precise behavior against the capture build. |
| Drawing | Basic brush use is scattered across the tutorial; color has no page. | Tool Set groups, paint media, Blend, Liquify, foreground/background/transparent paint, Eyedropper, Gradient, Figure, and Ruler deserve concise coverage. |
| Effects | No documentation group. | Filters/Properties provide a searchable catalog, editable parameters, and effect/mask relationships. The bundled manifest contains 40 filters in seven categories; two short guides can cover the workflow without cataloging every filter. |
| Customization | One workspace page plus input settings. | Named workspaces save layout and tool settings; users can manage/pin workspaces, customize panels/toolbars/title bar, use separate layout history, restore the starting layout, and reset brushes. Split orientation from customization. |
| Brush persistence | Instructions assume duplicating, naming, and saving a custom preset; import is described as planned. | Inspected code saves per-preset overrides within a workspace and exposes Reset All Brushes. A standalone duplicate/import/export brush-library workflow was not found. Rewrite around verified persistence, rather than retaining assumed controls. |

Do not treat product design documents as shipped features. The color-management
journey is explicitly a proposal: profiles, proofing, HDR and extended export
workflows should not become instructions in this refresh. Likewise, the Photo
workspace does not imply crop, healing, cloning, RAW development, or a histogram.
Native release availability must be checked at implementation time; the presence
of a native client in source does not establish a downloadable release.

## 1. Regenerate the homepage screenshot

Keep the existing three pressure-sensitive Watercolor Wash strokes and the 16:9
presentation. This makes the UI update easy to compare and avoids requiring a new
illustration. Capture actual rendering and actual controls together.

1. Select and record a clean product revision. Build the web client from it and
   serve a matching package locally. The inspected `pkg/` and `dist/capycanvas/`
   directories predate the source baseline, so neither is sufficient evidence of
   a current build. Use an isolated build/staging location if the app checkout is
   being used for other work.
2. Update `site/scripts/capture.mjs` to explicitly select and verify **Paint**
   (`builtin:workspace:illustrator`, despite its internal name), using a fresh
   browser profile and the shipped layout. Wait for workspace initialization,
   document readiness, the selected brush, and rendered frames. The old optional
   `gpu_ready` check is not a sufficient readiness contract for staged startup.
3. Select Watercolor Wash through the current tool/preset model. Its existing
   numeric ID is still 20 and the `data-brush` selector still exists; verify the
   selected label and visible Tool Set instead of assuming the old flat list.
4. Fit the canvas after the panels settle, then draw through browser pen events.
   Compute positions from the current camera and document bounds, checking that
   every stroke stays on the canvas and clear of the controls.
5. Compose at 1920 × 1080 with Paint selected, Tool Set and Color visible, and
   Navigator, Properties and Layers readable on the right. Wait for thumbnails
   and previews to update; close menus and move the pointer clear of the image.
   Capture light and dark themes from the same document and arrangement.
6. Replace `workspace-light.webp` and `workspace-dark.webp`; update `capture.json`
   with the actual revision, package identifier, dimensions, workspace ID/name,
   and artwork recipe. Verify the served package matches the recorded revision;
   `git rev-parse HEAD` alone cannot prove what an arbitrary `APP_URL` served.
7. Update the capture instructions and localized image descriptions. The same
   assets are used on the homepage, workspace guide, and social metadata, so
   inspect all three uses. Rebuild the generated `docs/` output.

Acceptance: both images show the current Paint workspace and actual watercolor
rendering, have matching composition, readable controls, no loading/error UI,
and accurate provenance. Keep each below the existing 500 KB test limit. The
homepage continues to switch the image with the system appearance.

## 2. Reorganize the documentation

Use seven groups, 25 topics in total: retain all 16 existing topic URLs and add
nine. Group names and displayed page titles can change without moving Markdown
files or breaking links. Existing `advanced/` URLs can therefore remain stable
even when their pages move into Drawing or Customize in the sidebar.

| Group | Pages in sidebar order | Treatment |
| --- | --- | --- |
| Getting started | Quickstart; Workspace and canvas | Rewrite existing `quickstart` and `workspace`. Introduce Sketch/Paint/Photo, orient readers in Paint, cover canvas navigation and Zen. |
| Drawing | Brushes and painting; Color and eyedropper; Brush settings; Save and reset brush settings | Add `painting/brushes` and `painting/color`. Retitle/rewrite `advanced/brush-engine` and `advanced/custom-brushes`. Cover selecting tools and media, Blend/Liquify, size/opacity/flow, pressure, and workspace-owned overrides. |
| Layers and masks | Layers; Masks and clipping; Groups and blending | Retain `layers/basics`, `layers/masks`, `layers/groups`. Update actual layer actions, reference-layer use, selection-derived masks, clipping and alpha lock. Link effect layers to Filters. |
| Selections and editing | Selections and fill; Moving and transforming; Gradients; Shapes; Rulers and snapping | Retain `tools/selections` and `tools/transforms`. Add `tools/gradients`, `tools/figures`, `tools/rulers`. Use actual labels such as Auto select, Operation, Scale / rotate, Figure, and Snap to rulers. |
| Filters and output | Filters and properties; Edit an imported image; Saving and exporting | Add `filters/overview` and `filters/image-editing`; retain `tools/files`. The image-editing page supplies a short Photo workflow: import as layer, adjust, limit the effect with a mask, save and export. |
| Customize | Panels, toolbars and title bar; Manage workspaces; Pen, touch and shortcuts | Add `workspace/customization` and `workspace/management`; retain `advanced/input`. Cover docking/drawers, device-specific dragging, saved workspaces, pins/order, layout history/restoration, and preferences. |
| Illustration tutorial | Introduction; Sketching; Line art; Masking; Rendering | Retain `illustration` and all four stage URLs in their current order. Update control names and contextual links, keeping the same example layer names and brief procedures. |

The overview should give a clear starting sequence:

**Set up → choose Paint → make marks and choose colors → organize layers → edit
regions → save/export.**

Provide direct links for image editing in Photo and workspace customization, then
offer the existing illustration tutorial as a guided practice option. Use the
existing card/sidebar styling; the change is content order and navigation, not a
new visual design. Make all seven groups discoverable from the overview, replacing
the three hard-coded reference cards with entries driven by navigation metadata.

Keep ordinary previous/next navigation consistent with the sidebar. Use explicit
contextual links for the shorter getting-started path and preserve the tutorial's
stage-to-stage links, including the final link to exporting.

### Keep pages brief

- One practical purpose paragraph, two to four techniques, and roughly three
  short sections. Aim for 150–300 body words per new reference page, allowing a
  little more where an existing tutorial step needs it.
- Cover one useful operation or decision per section. Use actual control names
  and one small example; link to related tools rather than repeating explanations.
- Keep the current figure slot and draft presentation. Only use verified captures
  or supplied artwork; unfinished figures can remain labeled placeholders.
- Give a relevant limitation in one sentence where needed. Remove obsolete
  “planned” language only after checking the documented operation in the current
  app. Keep the global draft label until the full tutorial and images are verified.
- Do not add separate pages for every preset, filter, menu command, or platform.
  Reuse the platform-note component where a real input difference matters.

### Implementation details

Update `site/src/data/docs-nav.mjs`, localized labels in `docs-ui.mjs`, and the
overview in `Documentation.astro`. Retain the content collection and existing
article layout; a new CMS, search system, or per-feature status schema is unnecessary.
Update `site/DOCUMENTATION.md` to describe the new structure and editorial rules.

Write English first, then update corresponding Japanese, Simplified Chinese and
Korean files and all shared labels. Nine additions mean 36 new Markdown files;
the final collection has 100 guide files. Existing localized prose links, related
links, titles, and figure descriptions need the same factual corrections.

Retaining slugs preserves public `/docs/…` URLs and the existing
`/documentation/…` redirects. Verify localized canonicals, alternates, language
switching, sitemap entries, active sidebar state, and previous/next destinations.

## Delivery sequence and validation

1. **Capture update:** build the selected app revision, update the capture script,
   inspect both Paint images, record provenance, and update image descriptions.
2. **Navigation and English:** add the nine topics, regroup existing ones, revise
   the overview, and replace outdated instructions. Walk through the short
   painting and imported-image routes in the same app build.
3. **Translations and integration:** apply corresponding updates across all four
   languages, fix contextual links, and update the maintainer guide. Add all
   translations before running the full build: missing topics intentionally fail.
4. **Website checks:** update existing expectations for group names, the overview,
   quickstart links and capture metadata. Run `npm run check`; inspect generated
   desktop/mobile screenshots in both themes, including the longer sidebar and
   long translated titles. Confirm keyboard and no-JavaScript navigation.
5. **Reviewable delivery:** include the sources, capture assets/provenance, and
   regenerated `docs/` output. Keep the screenshot and documentation work in
   separately reviewable changes. Deployment is outside this planning task.

App checks should focus on the documented journeys: switching workspaces without
changing artwork, pen painting, selection/fill/mask/transform, an editable filter,
image-as-layer import, `.capy` save/reopen, and PNG export. Existing app tests are
useful evidence, but reading them is not equivalent to running those journeys.

## Source map

- Website structure and rendering: [navigation](site/src/data/docs-nav.mjs),
  [overview](site/src/components/Documentation.astro),
  [guide layout](site/src/components/Guide.astro),
  [maintenance guide](site/DOCUMENTATION.md).
- Screenshot pipeline: [capture script](site/scripts/capture.mjs),
  [browser helper](site/scripts/browser.mjs),
  [current provenance](site/public/assets/capture.json),
  [output tests](tests/output.test.mjs).
- Product workspace defaults: [behavior](../draw/docs/ui/default-workspaces.md),
  [current names/layouts](../draw/crates/layer-ui/src/layout_presets.rs),
  [web switcher acceptance tests](../draw/apps/layer-web/workspace-switcher.test.mjs).
- Tools: [command labels](../draw/crates/layer-ui/src/lib.rs),
  [brush groups and overrides](../draw/crates/layer-ui/src/tools.rs),
  [web tool panels](../draw/apps/layer-web/editor-panels.js),
  [transforms](../draw/crates/layer-ui/src/operation.rs),
  [region controls](../draw/crates/layer-ui/src/region_tools.rs),
  [figures](../draw/crates/layer-ui/src/figures.rs),
  [rulers](../draw/crates/layer-ui/src/rulers.rs).
- Editing and output: [layers/masks](../draw/crates/layer-ui/src/art_layers.rs),
  [image import](../draw/apps/layer-web/layers.js),
  [effects](../draw/crates/layer-ui/src/effects.rs),
  [filter catalog](../draw/assets/filters/manifest.json),
  [web file handling](../draw/apps/layer-web/documents.js),
  [editor acceptance tests](../draw/apps/layer-web/editor.test.mjs).
- Implementation boundaries: [color-management proposal](../draw/docs/ui/color-management.md),
  [drag convention](../draw/docs/ui/drag-and-reorder.md),
  [web build instructions](../draw/docs/development/web.md).
