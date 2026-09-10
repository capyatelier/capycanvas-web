---
title: "Rendering"
description: "Add shading and texture on clipped layers, then revise the result."
figure: "Hair shading clipped to Hair, with the base layer's mask visible in the Layers panel."
related: ["layers/groups", "tools/files"]
purpose: "You will now paint over the base colors while keeping the outlines from the previous stage. A clipped layer holds the new paint but only shows it inside the base layer's shape. This lets you revise shading separately and reuse the same boundary for several passes."
techniques: ["Clip a shading layer to a base-color layer so strokes stay inside its shape.", "Adjust new strokes with brush opacity and existing shading with layer opacity.", "Correct the base mask once, then recolor the line art and export the finished image."]
---

## 1. Add paint above a base layer

Select **Hair**, add a layer directly above it, and name it **Hair shading**. Enable clipping for this new layer. Clipping uses the base layer's visible shape to limit the paint above it, so a stroke can cross the hair's outline without covering the face or background.

Choose a painting preset and a shading color, then paint on Hair shading. Leave the layer's blending mode at Normal for this pass. The base color stays on Hair, so you can erase a shading stroke without cutting a hole in the base.

## 2. Control the stroke and the whole layer separately

Use the brush's size, opacity, and pressure response to change the marks you are making. Use **Hair shading's layer opacity** to reduce the strength of all the shading already on that layer. Lowering brush opacity affects new strokes; it does not fade existing ones.

For a separate texture pass, add **Hair texture** directly above **Hair shading** and enable clipping. The order from top to bottom is Hair texture, Hair shading, then Hair; the upper two layers clip to Hair. Hide and show Hair texture to compare its effect. For a different brush response, see opacity, flow, and pressure in [Brush engine](/docs/advanced/brush-engine/).

## 3. Revise an edge or color

To correct the hair's outline, edit the mask on Hair. The clipped paint follows the revised base shape, so the same edge does not need to be cleaned up on every shading layer. If you are only correcting a shading stroke, edit Hair shading instead.

Repeat the clipped-layer setup for **Skin** and **Clothing**. Keep **Line art** above the paint. To recolor the ink without making the lines wider, enable alpha lock on Line art; this preserves its transparency while you paint over its existing marks. [Layer masks and clipping](/docs/layers/masks/) compares these ways of restricting paint.

Save the layered document, then [export an image](/docs/tools/files/) for sharing. The document retains the masks and separate shading layers for later revisions.
