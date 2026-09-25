---
title: "Edit a photo"
description: "Open a photo, adjust its colors with editable layers, and export the result."
purpose: "Photo is the workspace for adjusting pictures. You can open a photo straight from your camera or phone, brighten it or shift its colors with adjustment layers, and export a finished copy, all without changing the original file."
techniques: ["Open a photo, or add one to an existing drawing.", "Adjust it with an editable filter layer.", "Save your edits and export a copy."]
figure: "1: Photo workspace. 2: The photo and its adjustment layer. 3: Properties for the adjustment."
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1: Photo workspace. 2: The photo and its adjustment layer. 3: Properties for the adjustment."}
---

## Open the photo

Choose **Photo** in the workspace switcher, then choose **File → Open…** and select your picture. Capy Canvas opens JPEG, PNG, TIFF, WebP, HEIC, AVIF and OpenEXR files, so photos from most cameras and phones open directly. The photo opens in its own tab at full size, with its original colors.

To add a photo to a drawing you already have open, choose **File → Import Image as Layer…**, or drag the file onto the canvas. The photo appears with handles so you can move and resize it; select **Apply** when it is in place, or **Original Size (100%)** to use it at its actual size.

## Make an adjustment

Open **Filters** and choose an adjustment such as **Curves**, **Vibrance** or **Hue / Saturation**. It is added as a new layer above the photo, and its settings appear in **Properties**. Change them gradually and watch the photo as you go. Hide and show the adjustment layer to compare the result with the original.

Because the adjustment lives on its own layer, you can come back and change it at any time, or delete it without a trace. To adjust only part of the photo, select that area first, for example the sky with [Select by brightness](/docs/selections/tonal-range/). [Filters and adjustments](/docs/filters/overview/) explains more ways to limit an adjustment.

## Save and export

When you save a photo you have edited, Capy Canvas saves a `.capy` file with all of your adjustment layers, and your original photo is never overwritten. To share the result, choose **File → Export…** and save a JPEG or PNG. [Export an image](/docs/output/export/) explains the export settings.
