---
title: "Layer groups and blending"
description: "Layer groups, group opacity, and blending modes."
figure: "A layer group containing base colors, shadows, and highlights."
related: ["illustration/render", "layers/masks"]
---

## Groups
A group contains related layers and can contain other groups. Group visibility and opacity apply to the combined contents. A group mask limits the visible area of the group.

## Blending modes
A blending mode determines how a layer's colors combine with the layers below. Normal uses the layer's color and opacity directly. Multiply produces a darker result; Screen produces a lighter result.

## Group compositing
An isolated group composites its contents before combining the result with the rest of the document. In a pass-through group, layer blending can also affect layers outside the group.
