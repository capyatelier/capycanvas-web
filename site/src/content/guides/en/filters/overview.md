---
title: "Filters and adjustments"
description: "Add an editable filter and change its settings whenever you like."
purpose: "Filters change the look of the layers below them, from simple brightness and color adjustments to blurs and artistic effects. Each filter is its own layer, so you can adjust, hide or remove it later without touching the paint underneath."
techniques: ["Find and add a filter.", "Change its settings in Properties.", "Limit a filter to part of the drawing."]
figure: "1: Filters panel. 2: The adjustment layer in Layers. 3: Properties tab for editing it."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1: Filters panel. 2: The adjustment layer in Layers. 3: Properties tab for editing it."}
---

## Add a filter

Select the layer that the filter should sit above, then open the **Filters** panel. Filters are sorted into groups such as Tone, Color, Blur and Artistic, and you can type in the search box to find one by name, such as **Curves** or **Gaussian Blur**. Choose a filter to add it as a new layer. The **Filter** menu at the top of the window lists the same filters.

In Sketch, the **Filters** button in the title bar opens a drawer instead. Pick a group on the left, then a filter, and its settings appear on the right.

## Change the settings

Select the filter's layer and open **Properties** to see its settings. Some filters use sliders, while others use a curve or a color. Change one setting at a time and watch the drawing as you go. If you'd like to see how the tones of the image are spread out while you work, open **View → Histogram…**.

Hide and show the filter layer to compare the result with the original, or lower its opacity to make the whole effect gentler. You can come back to Properties at any time to change the settings again.

## Limit where it applies

A filter affects everything below it in the layer list. To keep it away from part of the drawing, add a [mask](/docs/layers/masks/) to the filter layer, or put the filter inside a group so it only affects the layers in that group. Keep line art and other details you don't want changed above the filter.

When you use several filters, their order matters, so try moving them up or down if the result isn't what you expected. For a complete example with a photo, see [Edit a photo](/docs/filters/image-editing/).
