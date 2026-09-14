---
title: "渐变"
description: "用颜色之间的过渡填充区域。"
purpose: "Gradient在编辑图层上建立颜色过渡。拖动决定方向和范围，选区可以限制渐变出现的位置。"
techniques: ["选择线性或径向渐变。", "使用前景色、背景色或透明渐变。", "用选区或蒙版限制范围。"]
figure: "1：渐变子工具。2：前景色和背景色。3：接收渐变的图层。"
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1：渐变子工具。2：前景色和背景色。3：接收渐变的图层。"}
---

## 选择颜色与目标

新建渐变图层或选择目标图层，在**Color**中设置前景色和背景色。只修改局部时，先建立[选区](/zh/docs/tools/selections/)。

选择**Gradient**，在**Tool Set**中选择线性或径向变体。透明变体从前景色渐隐到透明，而非背景色。

## 拖出过渡

线性渐变从起始色向结束色拖动；径向渐变从中心向外拖动。距离越长，过渡覆盖的范围越大。

在合适倍率下检查。不满意时撤销并重画。把渐变与需要保留在上方的线稿、细节分开。

## 调整显示范围

完成后解除选区。需要持续修改边界时使用[蒙版](/zh/docs/layers/masks/)。独立图层还可以单独调整不透明度和混合模式。

[颜色指南](/zh/docs/painting/color/)解释了前景色、背景色和透明绘画。
