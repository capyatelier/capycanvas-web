---
title: "Brush settings"
description: "Adjust a preset’s marks, paint buildup and response."
purpose: "Tool exposes settings for the selected preset. Compare one repeatable stroke after each change so you can tell which parameter changed the result."
techniques: ["Separate size, opacity and flow.", "Adjust the tip and spacing.", "Check pressure before changing brush behavior."]
figure: "1: Selected preset. 2: Size, opacity and flow. 3: Brush size tab for preset sizes."
related: ["painting/brushes", "advanced/custom-brushes", "advanced/input"]
image: {"light": "/assets/guides/advanced-brush-engine-light.webp", "dark": "/assets/guides/advanced-brush-engine-dark.webp", "alt": "1: Selected preset. 2: Size, opacity and flow. 3: Brush size tab for preset sizes."}
---

## Compare the same stroke

Choose a preset close to the desired result. Keep the layer at full opacity with **Normal** blending while testing. Draw the same curve at the same size, changing one setting between strokes. Scroll **Tool** for the controls available to that preset.

Brush size changes the mark’s width. Opacity controls its transparency, while flow changes how paint builds up during the stroke. Compare one continuous stroke with several overlapping strokes. Layer opacity changes all existing paint and should stay fixed during this comparison.

## Adjust the tip

A brush places repeated tip impressions along the path. **Spacing** controls their separation; larger values can expose individual impressions. **Hardness**, tip angle and variation controls change the mark’s edge and orientation where the preset supports them.

Different media expose different settings. A watercolor or oil preset can interact with existing paint, so test it both on empty paper and over another color.

## Keep a useful response

If pressure produces no variation, first test a pencil and check [input settings](/docs/advanced/input/). Adjusting the brush cannot supply missing device pressure.

Your changes belong to the current workspace. [Save and reset brush settings](/docs/advanced/custom-brushes/) explains how to preserve a setup and return to defaults.
