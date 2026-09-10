---
title: "Custom brushes"
description: "Adapt an existing preset and check imported brushes before using them."
figure: "An original preset and a renamed copy with their test strokes."
related: ["advanced/brush-engine"]
---

## Make a variant of an existing brush

Duplicate the preset closest to the brush you want. Give the copy a name that describes its use, such as a softer pencil or a wider ink brush. Keep the original available so you can compare the marks or return to its settings.

Change one part of the preset at a time and test it at the size you actually draw with. Once the result is useful, save the changes to the copied preset. The [brush engine reference](/docs/advanced/brush-engine/) explains which settings control spacing, buildup, and pressure response.

## Change a tip or texture

The tip image defines the shape and transparency of each dab; a texture adds variation to the deposited mark. First test a new tip without additional scatter or texture so you can see its shape clearly. Then add the other settings back as needed.

Check both short and long strokes. A texture that looks convincing in a small patch may repeat visibly along a long stroke. Fix the relevant texture or spacing setting rather than adding unrelated variation to hide the problem.

## Evaluate an imported preset

Check the brush importer's supported formats before choosing a file. Brushes from another application may use an engine behavior that does not have an exact equivalent in Capy Canvas. Importing a preset does not by itself guarantee identical strokes.

Compare a light-to-heavy stroke, an overlapping stroke, and a broad painted area. These reveal differences in pressure response, paint buildup, and texture. Keep the source brush file and save any adjustments as a separate Capy Canvas preset rather than replacing your only copy.
