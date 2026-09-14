---
title: "Rendering"
description: "Add separate shading and texture layers clipped to each base."
purpose: "Clipping keeps a shading layer inside a base layer’s visible coverage. The shade remains editable on its own, while the base mask supplies the shared outer boundary."
techniques: ["Clip Ribbon shading above Ribbon.", "Adjust the brush and layer opacity separately.", "Add texture, check the final stack, and export."]
figure: "1: Ribbon texture and Ribbon shading above Ribbon. 2: Clip to layer below. 3: Layer opacity for the complete shading pass."
related: ["layers/groups", "layers/masks", "tools/files"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Ribbon texture and Ribbon shading above Ribbon. 2: Clip to layer below. 3: Layer opacity for the complete shading pass."}
---

## 1. Add clipped shading

Select **Ribbon**, add a layer directly above it, and name it **Ribbon shading**. Enable **Clip to layer below**. Use Watercolor Wash to shade the ribbon’s bends, then add sage accents with Paintbrush. A stroke can cross the outer silhouette while its visible result remains within the base coverage.

Leave the shading layer at **Normal** blending for this first pass. The base color stays on Ribbon, so erasing a shading mark does not erase that base.

## 2. Adjust strength and texture

Brush opacity changes new strokes. **Ribbon shading’s layer opacity** changes the whole pass you have already drawn. Reduce the latter when every shadow is too strong.

Add **Ribbon texture** directly above Ribbon shading and enable clipping again. Use a smaller pencil or textured preset for a few highlights. The order is Ribbon texture, Ribbon shading, Ribbon. The [brush settings reference](/docs/advanced/brush-engine/) explains spacing, opacity and flow.

## 3. Finish the other regions

Repeat the clipped-layer setup for **Disc** and **Block**. Use Airbrush for the disc’s soft shading and Pencil for small cream hatch marks. Keep **Line art** above them. Edit a base mask when its shared boundary needs correction; edit a shading layer when only that pass is wrong. [Masks and clipping](/docs/layers/masks/) also explains alpha lock for recoloring the ink.

Hide the rough layers, save the `.capy` project, and [export PNG](/docs/tools/files/). Inspect the exported image before sharing it.
