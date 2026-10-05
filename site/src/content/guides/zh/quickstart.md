---
title: "快速入门"
description: "打开 Capy Canvas，在第一幅空白画作上绘画，将其保存为 .capy 文件并导出 PNG。"
related: ["start/workspaces", "files/open-save", "files/export", "input/keyboard"]
---

## 打开 Capy Canvas

执行以下任一操作：

- 在 [editor.capycanvas.art](https://editor.capycanvas.art/) 打开网页版编辑器。
- 在[下载](/zh/download/)页面获取桌面应用、iPad 或 Android 测试版，或者查看将网页版编辑器安装为应用的步骤。

网页版编辑器支持以下浏览器：

| 系统 | 浏览器 |
| --- | --- |
| Windows | Chrome、Edge、Firefox 141 或更高版本 |
| macOS | Chrome、Edge、Safari 26 或更高版本、Firefox 147 或更高版本（Apple 芯片） |
| Linux（Wayland） | Chrome、Edge |
| iPadOS 26 或更高版本 | Safari |
| Android 12 或更高版本 | Chrome |

首次访问之后，网页版编辑器在没有网络连接时也能打开。

## 第一幅画作

![新画作的图层面板，当前墨色位于纸张上方。](shot:files/new-layers)

首次打开 Capy Canvas 时，会显示[“绘画”](/zh/docs/start/workspaces/)工作区和一幅空白画作，标题栏显示“未命名 · 2048 × 1536”。已选中的**当前墨色**是一个空的绘画图层，位于白色填充图层**纸张**上方。当前工具为**钢笔**，画笔为 **G 笔**，颜色接近黑色。

之后再打开 Capy Canvas 时，会进入上次使用的工作区，并打开上次打开的画作。

## 绘画

用数位笔或鼠标在画布上拖动。要使用其他工具，请在窗口左边缘的“工具”工具栏中选择。在“素描”中，选择标题栏中的**画笔**。

> **备注**：手指不会绘画。两根手指在画布上可以平移、缩放和旋转视图。

要撤销一笔，选择**编辑 > 撤销**、按 **Ctrl+Z** 或用两根手指轻点画布（参见[撤销和重做](/zh/docs/start/undo/)）。

## macOS 和 iPad 上的按键

本手册按 Windows 和 Linux 的方式书写按键。在 macOS 和 iPad 上，手册中写 **Ctrl** 的地方请按 **Command**（⌘）。在网页版编辑器和 macOS 应用中，**Ctrl** 同样有效。

网页版编辑器中所有快捷键都标为 **Ctrl**。浏览器会保留 **F5**、**F11**、**F12**，以及 **Ctrl** 或 **Ctrl+Shift** 与 **W**、**T**、**N**、**R**、**L**、**Q** 或 **P** 的组合。使用这些按键的命令在网页版编辑器中没有快捷键，请从菜单或[命令搜索](/zh/docs/start/command-search/)中选择。

## 新建另一幅画作

选择**文件 > 新建…**，然后在[新建绘画](/zh/docs/files/new/)对话框中选择**创建**。新画作在第一幅画作旁边的单独标签页中打开。

## 保存画作

![文件菜单，包含新建…、打开…、保存、另存为…和导出…。](shot:files/file-menu)

要保存包含所有图层的画作：

1. 选择**文件 > 保存**，或按 **Ctrl+S**。
2. 选择文件夹和名称。建议的名称为“未命名.capy”。

之后标题栏会显示文件名。在 Firefox 和 Safari 中，只有在**下载文件**对话框中选择**下载**，再选择**文件已保存**之后，画作才算已保存。

## 导出 PNG

![导出图像对话框，用途设为网页 / 分享。](shot:files/export-dialog)

要导出画作的拼合 PNG 副本：

1. 选择**文件 > 导出…**，或按 **Ctrl+Shift+E**。
2. 保持**用途**为**网页 / 分享**，然后选择**选择文件…**。
3. 选择文件夹和名称。建议的名称为“未命名.png”。

**网页 / 分享**按画作的完整尺寸写入 8 位 sRGB PNG。导出不会更改或保存画作。
