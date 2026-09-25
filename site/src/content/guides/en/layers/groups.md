---
title: "Groups and blending"
description: "Keep related layers together and change how their colors combine."
purpose: "As a drawing grows, groups keep related layers together so the list stays easy to read. Blend modes change how a layer's colors mix with the layers below, which is useful for shadows, highlights and color washes."
techniques: ["Put related layers in a group.", "Try a blend mode on a shading layer.", "Keep a long layer list tidy."]
figure: "1: Layer stack. 2: Blend mode. 3: New group button."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: Layer stack. 2: Blend mode. 3: New group button."}
---

## Group related layers

Select **New group** at the bottom of the Layers panel, then drag layers into it. For example, you might keep a character's colors, shading and line art in one group and the background in another. Select the arrow beside a group to fold it away when you don't need to see its contents.

Hiding a group hides everything inside it. If a layer seems to have vanished even though its eye is on, check whether the group it is in is hidden. Keep clipped layers directly above their base layer when you move them into a group, so they stay attached to it.

## Try a blend mode

Select a shading layer and open the blend mode menu above the list. **Multiply** darkens the colors below, which makes it good for shadows. **Screen** lightens them, which suits glows and highlights. **Normal** simply paints over what is below, and the other modes each mix colors in their own way.

Hide and show the layer to compare the result. If the effect is too strong, lower the layer's opacity rather than repainting it.

## Keep the list tidy

Groups keep a long list tidy while every layer stays editable, and you can fold away the groups you aren't working on. If you need a single flat image for another app, [export](/docs/output/export/) a copy and keep the `.capy` file with all its layers.

For color changes you'd like to keep adjusting, such as brightness or saturation, use a filter layer from [Filters and adjustments](/docs/filters/overview/) instead of painting the change into a layer.
