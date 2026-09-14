---
title: "Groups and blending"
description: "Organize related layers and control how they combine."
purpose: "Groups keep related layers together. Blend modes change how their colors combine; layer opacity controls the overall strength of the result."
techniques: ["Create and populate a layer group.", "Compare blend modes on a shading layer.", "Keep masks and clipped layers in the intended order."]
figure: "1: Layer stack. 2: Blend-mode selector. 3: New group control."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: Layer stack. 2: Blend-mode selector. 3: New group control."}
---

## Group related parts

Use **New group** in Layers and move related layers into it. For a shape study, keep its base colors, shading and Line art together while leaving the background separate. Collapse the group when you want a shorter list.

Check the hierarchy after moving rows. A group’s visibility affects its contents, so a layer can be enabled yet remain hidden by its parent. Keep clipped layers directly above their base within the same intended stack.

## Compare a blend mode

Select a shading layer and use the blend-mode selector above the rows. **Multiply** is useful for darkening underlying paint; **Screen** lightens it. **Normal** uses ordinary paint-over composition. Other modes depend on both the layer’s colors and the content below.

Toggle visibility to compare the change, then reduce layer opacity if the whole effect is too strong. Changing brush opacity only affects new strokes.

## Keep edits separable

Avoid merging merely to shorten the list: a group can organize the same layers while preserving them. Keep an editable `.capy` copy before flattening content for another application.

For a color correction whose parameters should remain editable, use [Filters and properties](/docs/filters/overview/) instead of painting the correction into a base layer.
