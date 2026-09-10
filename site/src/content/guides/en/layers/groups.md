---
title: "Layer groups and blending"
description: "Organize an illustration and control how its layers combine."
figure: "A Character group containing line art and separate clipped color layers."
related: ["illustration/render", "layers/masks"]
purpose: "A group keeps related layers together so you can manage a character or background as one part of the document. Blending modes control how their colors combine. These settings become useful when a painting has several color and shading layers to adjust."
techniques: ["Group a subject's layers so you can show or hide them together.", "Compare Normal, Multiply, and Screen for a particular paint layer.", "Check group blending and masks when an effect reaches beyond the intended subject."]
---

## Group a subject's layers

Put the character's line art, base colors, and clipped shading into a group named **Character**. You can then hide the character to work on the background without toggling each layer separately. Keep clipped layers immediately above their base inside the group, with no unrelated layers between them.

A group is useful for managing related layers, but it does not replace them. Select the particular paint layer or mask before drawing. See [Layer basics](/docs/layers/basics/) if an edit is affecting the wrong part of the image.

## Choose a blending mode for a specific effect

Normal combines a layer's paint with the image using its opacity. Start there when you want the chosen paint color to appear directly. Multiply combines colors to darken the underlying image, which can be useful for a separate shadow pass. Screen lightens the result and can be useful for a light effect.

Compare the result by hiding the layer, then adjust its opacity. A blending mode changes how existing paint combines with the layers below. The [rendering tutorial](/docs/illustration/render/) uses Normal so brush and layer opacity can be learned independently.

## Limit a group's effect

An isolated group combines its contents before placing the result over the rest of the document. Pass-through allows blending inside the group to interact with layers outside it. If a shadow layer unexpectedly changes the background, check the group's blending behavior as well as the shadow's clipping.

Use a group mask when several layers need the same visible boundary. Use a mask on an individual layer when only that layer needs correction. [Layer masks and clipping](/docs/layers/masks/) covers editing those boundaries.
