---
title: "选区与填充"
description: "确定范围和边界来源，在目标图层上填色。"
purpose: "像素选区限制编辑范围，但不选择编辑图层。因此可以读取一层上的线稿，把颜色填到另一层。"
techniques: ["使用套索或自动选择。", "选择可见图像、编辑层或参考层作为来源。", "调整容差与边缘，完成后解除选区。"]
figure: "1：Auto select及来源选项。2：容差与边缘设置。3：与边界来源分开的编辑图层。"
related: ["tools/transforms", "layers/masks", "illustration/mask"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1：Auto select及来源选项。2：容差与边缘设置。3：与边界来源分开的编辑图层。"}
---

## 选择方法

**Lasso selection**手动圈定边界；**Auto select**从已有图像读取区域。在Tool Set中选择可见图像、编辑图层或参考图层。要参考Line art，选中其行并使用Layers中的**Use selected layers as references**。

填色前回到目标图层。**Lasso Fill**直接绘制并填充自由区域，与保留像素选区的套索工具不同。

## 读取轮廓并修正边缘

**Fill**直接填充检测区域，**Auto select**则允许先检查选区。它们的**Tool**设置包括**Tolerance**、**Close gaps**、**Expansion**和**Edge smoothing**。

颜色变化导致区域碎裂时提高容差；填充漏到外部时检查轮廓并尝试闭合小间隙。少量扩张可填到抗锯齿线条下方。这些设置作用于下一次区域操作。

## 完成操作

用**Fill selection**填充当前图层的选中像素，也可转为[图层蒙版](/zh/docs/layers/masks/)。填充或[变换](/zh/docs/tools/transforms/)后，使用**Select → Deselect pixels**，让后续笔画不受限制。
