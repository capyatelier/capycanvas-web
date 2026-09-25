---
title: "编辑照片"
description: "打开照片，用可编辑的图层调整颜色，并导出结果。"
purpose: "Photo是用于调整照片的工作区。你可以直接打开相机或手机拍摄的照片，用调整图层提亮画面或改变颜色，再导出一份完成的副本，整个过程都不会改动原始文件。"
techniques: ["打开照片，或把照片添加到现有作品中。", "用可编辑的滤镜图层进行调整。", "保存编辑内容并导出副本。"]
figure: "1：Photo工作区。2：照片及其调整图层。3：该调整的Properties。"
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1：Photo工作区。2：照片及其调整图层。3：该调整的Properties。"}
---

## 打开照片

在工作区切换器中选择**Photo**，然后选择<strong>File → Open…</strong>并选中你的照片。Capy Canvas可以打开JPEG、PNG、TIFF、WebP、HEIC、AVIF和OpenEXR文件，所以大多数相机和手机拍摄的照片都能直接打开。照片会以完整尺寸在单独的标签页中打开，并保持原有的颜色。

要把照片添加到已经打开的作品中，请选择<strong>File → Import Image as Layer…</strong>，或者把文件拖到画布上。照片出现时会带有控制柄，方便你移动和调整大小；放好位置后选择**Apply**，或者选择<strong>Original Size (100%)</strong>，以实际尺寸使用它。

## 进行调整

打开**Filters**，选择一种调整，例如**Curves**、**Vibrance**或**Hue / Saturation**。它会作为新图层添加到照片上方，设置则显示在**Properties**中。一点一点地修改设置，同时观察照片的变化。隐藏再显示调整图层，就能把结果与原图进行比较。

由于调整位于单独的图层上，你随时可以回来修改它，也可以把它删除而不留任何痕迹。如果只想调整照片的一部分，请先选中该区域，例如用[按亮度选择](/zh/docs/selections/tonal-range/)选中天空。[滤镜与调整](/zh/docs/filters/overview/)介绍了更多限制调整范围的方法。

## 保存与导出

保存编辑过的照片时，Capy Canvas会保存一个包含所有调整图层的`.capy`文件，原始照片永远不会被覆盖。要分享结果，请选择<strong>File → Export…</strong>，保存为JPEG或PNG。[导出图像](/zh/docs/output/export/)介绍了导出设置。
