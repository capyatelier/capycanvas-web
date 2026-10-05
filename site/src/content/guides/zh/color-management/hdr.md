---
title: "HDR"
description: "HDR 画作、它们在屏幕上的显示方式以及它们的 SDR 版本。"
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

在 HDR 画作中，可以绘制比 SDR 白色更亮的颜色。位深度为 **16 位浮点 HDR** 或 **32 位浮点 HDR** 的画作就是 HDR 画作。

## HDR 画作

要得到 HDR 画作，执行以下任一操作：

- 选择**文件 > 新建…**，然后选择 **HDR 绘画**预设或浮点**位深度**。
- 选择**编辑 > 更改位深度…**，然后选择浮点位深度。
- 打开 HDR PNG（BT.2020 PQ）或 HDR AVIF 文件（16 位浮点 HDR），或 OpenEXR 文件（32 位浮点 HDR）。
- 在[首选项](/zh/docs/preferences/)的**颜色**页面中将**位深度**设为浮点位深度，新画作即为 HDR。

在 HDR 画作中：

- [颜色面板](/zh/docs/color/color-panel/)和[编辑颜色](/zh/docs/color/edit-color/)以 EV 设置颜料强度。
- [颜色混合](/zh/docs/color-management/color-spaces/)始终为线性光。
- [混合模式](/zh/docs/layers/blend-modes/)中不提供叠加、柔光、强光、颜色加深、颜色减淡、亮光、实色混合和排除。
- 曲线有**对数 HDR** 域和 **HDR 范围**。
- [明暗范围](/zh/docs/selections/tonal-range/)工具提供**明亮 HDR · 高于 +1 档**。
- 直方图会标出 SDR 白色。
- [导出](/zh/docs/files/export/)提供 HDR 格式。

在网页版编辑器中，无法打开大于 1200 万像素的 HDR 画作。

## 屏幕上的 HDR

在能显示 HDR 的屏幕上，如果[校样](/zh/docs/color-management/proof/)面板中选择了**关闭**且色域警告已关闭，画布和导航会以 HDR 显示 HDR 画作。否则，它们显示画作的 SDR 版本，颜色控件也是如此。在网页版编辑器中，HDR 需要浏览器报告屏幕支持 HDR。

底栏左侧的提示标签显示当前看到的是哪个版本。选择它可查看详细信息。

| 提示标签 | 显示条件 |
| --- | --- |
| “HDR” | 画作以 HDR 显示。 |
| “SDR 预览” | 画作在能显示 HDR 的屏幕上处于 SDR 模式。 |
| “正在显示 SDR” | 屏幕不显示 HDR。 |

## SDR 版本

每幅 HDR 画作都保存有一个 SDR 版本，用于：

- 不支持 HDR 的屏幕以及 SDR 模式；
- 图层缩略图；
- 打印校样；
- SDR 导出，以及 HDR JPEG 和 HDR AVIF 导出的 SDR 基础图像。

可以调整 SDR 版本而不改变 HDR 像素。执行以下任一操作：

- 选择**视图 > SDR 校样**（Windows 上没有）。
- 在命令搜索中选择 **SDR 校样**。
- 选择校样面板顶部的 **SDR**。

![校样面板的 SDR 页面，带有调节平衡、对比度、亮度和颜色强度的转盘。](shot:color-management/proof-panel-sdr)

面板中的转盘设置四个值。转盘中心显示固定的示意图，而不是画作。双击或轻点两下转盘的某个部分可重置其数值，选择右上角的**重置 SDR 显示效果**可重置全部四个值。转盘获得焦点时，方向键按步长调整数值，按住 **Shift** 步长更大。**Escape** 可取消拖动。每次拖动算作一个撤销步骤，并随画作保存。

### 平衡

左右拖动转盘中心，范围为 −100% 到 +100%。向左侧重大块形状，向右侧重细微纹理。

### 对比度

上下拖动转盘中心，范围为 50% 到 200%。

### 亮度

拖动顶部弧线，范围为 −50% 到 +50%。

### 颜色强度

拖动底部弧线，从 0% 的白色到 100% 的全彩。默认值为 30%。

## 预览 SDR

无需打开校样面板，即可在 HDR 和 SDR 版本之间切换。在命令搜索中选择**预览 SDR**，或在[键盘快捷键](/zh/docs/input/keyboard/)页面为它指定一个键。

**预览 SDR** 只对 HDR 画作有效，并且屏幕要能显示 HDR，打印校样和色域警告都要关闭。
