---
title: "蒙版与剪贴"
description: "隐藏图层的一部分而不擦除它，并让阴影保持在形状之内。"
purpose: "蒙版可以隐藏图层的一部分，而不删除任何颜色，所以你随时可以改变主意，重新决定边缘的位置。剪贴会把一个图层限制在其下方图层的形状之内，这是添加阴影又不画出界的最简单方法。"
techniques: ["从选区建立蒙版。", "在蒙版上绘画，显示或隐藏颜色。", "把阴影剪贴到下方图层。"]
figure: "1：Ribbon的蒙版缩略图。2：剪贴在Ribbon上方的阴影。3：Clip to layer below和Alpha lock控件。"
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1：Ribbon的蒙版缩略图。2：剪贴在Ribbon上方的阴影。3：Clip to layer below和Alpha lock控件。"}
---

## 从选区建立蒙版

首先用[选区](/zh/docs/tools/selections/)圈出要保持可见的区域。然后打开图层菜单，选择**Mask → Mask: reveal selection**。选区以外的部分都会被隐藏，但不会被擦除。你也可以选择**Mask: hide selection**，改为隐藏选中的区域。完成后记得取消选择，这样接下来的笔画就不会被限制在选区内。

蒙版只能显示图层上实际存在的颜色。如果你觉得以后可能要扩大形状，请在添加蒙版之前先用颜色填满整个图层，就像教程的[蒙版阶段](/zh/docs/illustration/mask/)那样。

## 在蒙版上绘画

点击图层旁边的蒙版缩略图，就能编辑蒙版而不是颜色。这时，无论用哪支笔刷，画过的地方都会显示出更多图层内容，而**Eraser**会再次把它们隐藏起来。在蒙版上绘画时，用什么颜色都没有关系。完成后，点击内容缩略图就能回到正常绘画。

蒙版的菜单可以暂时关闭蒙版、反相蒙版或删除蒙版。暂时关闭蒙版，是把结果与蒙版下的颜色进行比较的便捷方法。

## 把阴影剪贴到形状上

在基底图层正上方添加一个新图层，打开它的菜单，选择**Layer Settings → Clip to layer below**。此后，在剪贴图层上画的任何内容都只会在基底图层有颜色的地方显示，你可以放心地画阴影，不用担心画出边缘。同一个基底图层上方可以叠放多个剪贴图层，例如一个画阴影，另一个画高光。

**Alpha lock**是更简单的选择，适合为已有的笔画（例如线稿）重新上色。它会让新的颜色保持在同一图层现有的笔画之内。教程的[细化阶段](/zh/docs/illustration/render/)同时用到了这两种方法。
