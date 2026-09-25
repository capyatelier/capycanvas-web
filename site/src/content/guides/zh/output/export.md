---
title: "导出图像"
description: "把作品另存为PNG、JPEG或TIFF副本，用于分享或打印。"
purpose: "导出会把你的作品制作成一张普通图像，可以直接发布到网上、发给别人或拿去打印。.capy文件会保持原样，所有图层都还在，因此你随时可以修改作品并再次导出。"
techniques: ["选择用途预设。", "选择文件格式、色彩配置文件和位深度。", "保存导出的图像。"]
figure: "1：Destination预设。2：格式、色彩配置文件和位深度。3：Transparency，决定空白区域如何保存。"
related: ["tools/files", "color/management", "filters/image-editing"]
image: {"light": "/assets/guides/output-export-light.webp", "dark": "/assets/guides/output-export-dark.webp", "alt": "1：Destination预设。2：格式、色彩配置文件和位深度。3：Transparency，决定空白区域如何保存。"}
---

## 确定图像的用途

选择<strong>File → Export…</strong>，打开**Export image**对话框。最简单的做法是从**Destination**开始，它会替你填好合适的设置。**Web / Share**生成一张在任何浏览器或应用中都能正确显示的标准图像。**Wide-color image**会保留现代屏幕能够显示的更鲜艳的颜色，**Further editing**则会尽可能保留细节，方便在其他编辑器中打开。

只有可见图层会被导出，所以请先隐藏不想出现在最终图像中的草稿或参考图层。

## 调整细节

如果想更精细地控制，可以修改Destination下方的设置。**Format**用于在PNG、JPEG和TIFF之间选择。PNG适合边缘清晰或带有透明区域的作品，JPEG则能让照片的文件更小。**Output profile**设置文件的色彩空间，**Bit depth**设置颜色存储的精细程度。

**Transparency**决定作品中空白区域的处理方式。在支持透明的格式中，你可以保留透明，也可以用白色或黑色填充。**Pixel size**可以生成较小的副本，例如用于网站。如果你喜欢某一组设置，可以把它另存为自己的预设。

## 保存文件

如果想在保存前查看效果，请选择**Preview Output**，然后选择<strong>Choose File…</strong>，为图像指定名称和保存位置。打开导出的文件看一看，确认效果符合预期。

HDR作品在**Dynamic range**下还有更多选项，包括HDR JPEG和AVIF文件，它们在HDR屏幕上显得明亮，在普通屏幕上也能正确显示。[色彩空间、HDR与打样](/zh/docs/color/management/)说明了何时使用它们。
