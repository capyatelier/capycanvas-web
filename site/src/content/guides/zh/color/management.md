---
title: "色彩空间、HDR与打样"
description: "选择作品存储颜色的方式，在HDR中工作，并预览图像的打印效果。"
purpose: "大多数作品使用默认设置就很好看。当你编辑照片、为印刷准备作品，或者想要现代屏幕上的鲜艳色彩时，可以选择作品能够容纳多少颜色，并预览它在其他地方的显示效果。"
techniques: ["为新作品选择色彩空间和位深度。", "在HDR中绘画和编辑。", "用Proof预览打印出来的颜色。"]
figure: "1：新作品预设。2：色彩空间和位深度。3：Create，用于打开新作品。"
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1：新作品预设。2：色彩空间和位深度。3：Create，用于打开新作品。"}
---

## 为新作品选择颜色设置

选择<strong>File → New…</strong>时，**Preset**菜单提供了几个起点。**Standard drawing**适合大多数作品，以及要在网上分享的内容。**Wide color**可以容纳许多现代屏幕能够显示的更鲜艳的颜色，**Photo editing**则会保留额外的精度，避免强烈的调整在平滑的渐变中造成色带。

**Color space**设置作品能够容纳的颜色范围，**Bit depth**设置每种颜色存储的精细程度。如果以后改变主意，可以使用<strong>Edit → Convert Color Space…</strong>或<strong>Edit → Change Bit Depth…</strong>。照片会保留拍摄时的颜色，所以打开照片时无需任何设置。

## 在HDR中工作

把位深度设为**16-bit float HDR**或**32-bit float HDR**，即可创建HDR作品。HDR作品可以容纳比白色更亮的颜色，例如阳光和发光的灯。编辑HDR作品时，色环下方会出现一条亮度弧，让你也能用比白色更亮的颜色绘画。

当浏览器和显示器都支持时，HDR会以全亮度显示。在其他屏幕上，你看到的是图像的标准版本。导出HDR作品时，可以保存为在普通屏幕上也能正确显示的HDR JPEG或AVIF，详见[导出图像](/zh/docs/output/export/)。

## 用Proof预览

把作品交给打印机之前，**View → Proof**会显示颜色印在纸上大致的样子。在**Proof**面板中选择**Print**，然后选择或添加打印机或印刷服务的色彩配置文件。**Gamut warning**会标出打印机无法再现的颜色，方便你在打印前进行调整。

对于HDR作品，同一面板中的**SDR**选项会显示图像在普通屏幕上的效果，并让你微调该版本的亮度和对比度。
