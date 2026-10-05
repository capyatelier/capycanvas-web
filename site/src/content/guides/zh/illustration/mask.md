---
title: "底色"
description: "插画教程第 3 阶段：为每个形状建立一个绘画图层，用蒙版限定在形状内，并填充底色。"
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

这一阶段为每个形状建立一个绘画图层，填充底色并用蒙版限定在形状内。底色放在绘画图层上，是因为填充图层不能作为第 4 阶段中明暗图层的剪贴基底。

## 1. 添加 Block 图层

隐藏 *Sketch*，选择其所在行，然后用**新建图层**添加一个名为 *Block* 的图层。新图层出现在 *Sketch* 正上方、*Line art* 下方。

## 2. 用蒙版将图层限定在方块内

按 **M**，或选择“工具”工具栏**选择**组中的**套索选区**，然后沿 *Line art* 中方块的轮廓描一圈。再选择选区操作栏中的**蒙版**（[使用选区](/zh/docs/selections/working/)）。

![选区操作栏中的蒙版，位于方块周围的选区旁边。](shot:illustration/mask-selection-bar)

选区成为 *Block* 的蒙版（[蒙版](/zh/docs/layers/masks/)）。该行上出现蒙版缩略图，画布底部的栏显示“正在编辑Block的蒙版”。

## 3. 填充图层

编辑蒙版时**填充选区**不可用。要填充图层：

1. 选择 *Block* 行上的图层缩略图，或选择画布底部栏中的**编辑内容**。
2. 在**颜色**面板中选择赤陶色。
3. 选择**选择 > 选择所有像素**，或按 **Ctrl+A**。
4. 选择**编辑 > 填充选区**，或按 **Shift+Backspace**。
5. 选择**选择 > 取消像素选择**，或按 **Ctrl+D**。

颜色覆盖整个图层，蒙版只在方块内显示颜色。

## 4. 添加 Disc 和 Ribbon

用同样的方法建立赭黄色的 *Disc*，再建立蓝绿色的 *Ribbon*。

![图层面板，Line art 下方是 Ribbon、Disc 和 Block，每个都有蒙版缩略图。](shot:illustration/mask-layers)

图层列表依次为 *Line art*、*Ribbon*、*Disc*、*Block*、*Sketch*、*Color rough* 和**纸张**。

## 5. 调整边缘

选择 *Ribbon* 行上的蒙版缩略图。画布底部的栏显示“正在编辑Ribbon的蒙版”。

![画布底部显示“正在编辑Ribbon的蒙版”的栏，包含反转、禁用、应用蒙版和编辑内容。](shot:illustration/mask-bar)

用 **G 笔**画笔沿边缘涂抹可显示更多蓝绿色，或用**橡皮擦**修整边缘。在蒙版上，画笔会忽略绘画颜色。

下一阶段：[细化](/zh/docs/illustration/render/)。
