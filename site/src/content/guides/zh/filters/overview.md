---
title: "滤镜与调整"
description: "添加可编辑的滤镜，随时修改它的设置。"
purpose: "滤镜会改变其下方图层的外观，从简单的亮度和颜色调整，到模糊和艺术效果都有。每个滤镜都是一个独立的图层，因此你以后可以调整、隐藏或删除它，而不会碰到下方的颜色。"
techniques: ["查找并添加滤镜。", "在Properties中修改滤镜的设置。", "把滤镜限制在作品的一部分。"]
figure: "1：Filters面板。2：Layers中的调整图层。3：用于编辑它的Properties标签页。"
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1：Filters面板。2：Layers中的调整图层。3：用于编辑它的Properties标签页。"}
---

## 添加滤镜

先选中一个图层，滤镜会添加在它的上方，然后打开**Filters**面板。滤镜分为Tone、Color、Blur和Artistic等组，你也可以在搜索框中输入名称来查找，例如**Curves**或**Gaussian Blur**。选择一个滤镜，它就会作为新图层添加进来。窗口顶部的**Filter**菜单中也列出了同样的滤镜。

在Sketch中，标题栏里的**Filters**按钮会改为打开一个抽屉。先在左侧选择一个组，再选择滤镜，右侧就会显示它的设置。

## 修改设置

选择滤镜所在的图层，然后打开**Properties**查看它的设置。有些滤镜使用滑块，有些则使用曲线或颜色。每次只修改一项设置，同时观察作品的变化。如果想在操作时查看图像的色调分布，请打开<strong>View → Histogram…</strong>。

隐藏再显示滤镜图层，可以把结果与原图进行比较；降低它的不透明度，则可以让整体效果更柔和。你随时都可以回到Properties再次修改设置。

## 限制作用范围

滤镜会影响图层列表中位于它下方的所有内容。要让它避开作品的某一部分，可以给滤镜图层添加[蒙版](/zh/docs/layers/masks/)，或者把滤镜放进一个组，让它只影响该组中的图层。把线稿和其他不希望被改变的细节放在滤镜上方。

使用多个滤镜时，它们的顺序很重要；如果结果与预期不符，可以试着把它们上下移动。关于照片的完整示例，请参阅[编辑照片](/zh/docs/filters/image-editing/)。
