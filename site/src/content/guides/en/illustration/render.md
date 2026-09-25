---
title: "Rendering"
description: "Add shading and texture on layers clipped to each shape, then export the result."
purpose: "Rendering is where the shapes get their light and shadow. Painting the shading on clipped layers keeps it inside each shape automatically, and because the shading is separate from the base color, you can adjust or redo it without losing anything."
techniques: ["Clip a shading layer to Ribbon.", "Control the strength of the shading.", "Shade the other shapes, check the layers, and export."]
figure: "1: Ribbon texture and Ribbon shading above Ribbon. 2: Clip to layer below. 3: Layer opacity for the whole shading pass."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Ribbon texture and Ribbon shading above Ribbon. 2: Clip to layer below. 3: Layer opacity for the whole shading pass."}
---

## 1. Add clipped shading

Select **Ribbon**, add a new layer directly above it, and name it **Ribbon shading**. Open its menu and choose **Layer Settings → Clip to layer below**. Now paint the shadows in the bends of the ribbon with **Watercolor Wash**, and add a few sage accents with **Paintbrush**. Your strokes can go past the edge of the ribbon, because only the part inside the ribbon shows.

Leave the shading layer's blend mode at **Normal** for now. The base color stays safely on the Ribbon layer, so erasing shading never erases the color underneath.

## 2. Control the strength

Brush opacity changes the strokes you are about to paint. The **opacity of the Ribbon shading layer** changes all of the shading you have already painted. If every shadow looks too strong, lower the layer's opacity instead of repainting.

For highlights, add **Ribbon texture** directly above Ribbon shading and clip it too. Use a small pencil or a textured brush for a few light marks. The layer order is now Ribbon texture, Ribbon shading, then Ribbon. [Brush settings](/docs/advanced/brush-engine/) explains opacity and flow in more detail.

## 3. Finish and export

Shade **Disc** and **Block** in the same way, each with its own clipped layers. The example uses Airbrush for the soft shading on the disc, and Pencil for small cream hatching marks. Keep **Line art** above everything. If the outer edge of a shape needs fixing, paint on that shape's mask; if only the shading is wrong, change the shading layer. [Masks and clipping](/docs/layers/masks/) also shows how to recolor the ink with alpha lock.

When you're happy with it, hide the rough layers, save your `.capy` file, and [export an image](/docs/output/export/) to share. Open the exported file once to check that it looks the way you expect.
