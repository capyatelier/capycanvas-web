---
title: "Brush engine"
description: "Adjust a preset's marks, pressure response, and paint buildup."
figure: "The same test stroke before and after changing one brush parameter."
related: ["advanced/custom-brushes", "advanced/input"]
purpose: "Brush presets determine how a mark is built and how it responds to your pen. Adjust the engine when an existing preset is close to what you need but its spacing, paint buildup, or pressure response needs changing. Start with one repeatable stroke so you can judge each adjustment."
techniques: ["Compare a copied preset with the original under the same drawing conditions.", "Change tip spacing and texture to control the marks within a stroke.", "Separate opacity, flow, and pressure response when adjusting paint buildup."]
---

## Start with a repeatable stroke

Duplicate a preset that is close to the result you need, then use the same size, color, and test stroke when comparing changes. A slow curve with pressure increasing and decreasing exposes more of the response than a quick tap.

Keep the test layer's opacity at full strength and its blending mode at Normal. Otherwise layer settings can obscure the brush change. [Custom brushes](/docs/advanced/custom-brushes/) covers keeping the modified preset.

## Adjust the tip and spacing

A stroke is built from repeated impressions of a brush tip, called dabs. Spacing controls the distance between them. If the stroke looks like a row of separate marks, reduce the spacing; if you want the individual tip shapes to remain visible, increase it.

Tip rotation and scatter change the placement of those impressions. Texture changes how the mark is broken up. Adjust these separately so you can tell whether an unwanted pattern comes from the tip, its spacing, or the texture.

## Separate opacity, flow, and pressure

Brush opacity controls the transparency of a stroke. Flow controls how much color each dab deposits, changing how paint builds up within the stroke. Compare one continuous stroke with several overlapping strokes to see the difference for the preset you are editing.

A pressure curve maps pen pressure to a parameter such as size or opacity. Adjust the curve if the range is usable but the response is too abrupt. If pressure produces no change at all, check [Input settings](/docs/advanced/input/) first; a brush curve cannot supply pressure that the device is not reporting.
