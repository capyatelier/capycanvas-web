---
title: "Color spaces, HDR and proofing"
description: "Choose how a drawing stores color, work in HDR, and preview how an image will print."
purpose: "Most drawings look great with the default settings. When you edit photos, prepare work for print, or want the vivid colors of a modern screen, you can choose how much color the drawing can hold and preview how it will look somewhere else."
techniques: ["Pick a color space and bit depth for a new drawing.", "Paint and edit in HDR.", "Preview printed colors with Proof."]
figure: "1: Drawing presets. 2: Color space and bit depth. 3: Create, which opens the new drawing."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: Drawing presets. 2: Color space and bit depth. 3: Create, which opens the new drawing."}
---

## Choose the color for a new drawing

When you choose **File → New…**, the **Preset** menu offers a few starting points. **Standard drawing** suits most artwork and anything you'll share online. **Wide color** can hold the more vivid colors that many modern screens show, and **Photo editing** keeps extra precision so that strong adjustments don't cause banding in smooth gradients.

**Color space** sets the range of colors the drawing can hold, and **Bit depth** sets how finely each color is stored. If you change your mind later, use **Edit → Convert Color Space…** or **Edit → Change Bit Depth…**. Photos keep the colors they were taken with, so there is nothing to set up when you open one.

## Work in HDR

Choose **16-bit float HDR** or **32-bit float HDR** as the bit depth to make an HDR drawing. HDR drawings can hold colors brighter than white, such as sunlight and glowing lights. When you edit an HDR drawing, an intensity arc appears below the color wheel, so you can paint with colors brighter than white as well.

HDR shows at full brightness when your browser and display support it. On other screens you'll see a standard version of the image instead. When you export an HDR drawing, you can save an HDR JPEG or AVIF that also looks right on ordinary screens, as described in [Export an image](/docs/output/export/).

## Preview with Proof

Before you send work to a printer, **View → Proof** shows how the colors are likely to look on paper. In the **Proof** panel, choose **Print**, then choose or add the color profile of the printer or print service. **Gamut warning** marks the colors that the printer can't reproduce, so you can adjust them before printing.

For HDR drawings, the **SDR** option in the same panel shows how the image will look on an ordinary screen, and lets you fine-tune that version's brightness and contrast.
