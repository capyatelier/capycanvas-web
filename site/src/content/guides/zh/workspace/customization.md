---
title: "面板、工具栏与标题栏"
description: "在画布周围布置面板和工具栏，并更改界面的外观。"
purpose: "每个面板和工具栏都可以移到你顺手的位置，如果你用惯了其他应用，这一点尤其有用。布局修改有独立的撤销，所以调整界面永远不会撤销你画的内容。"
techniques: ["移动、组合和折叠面板。", "选择工具栏和标题栏中显示的内容。", "更改界面的外观，并撤销布局修改。"]
figure: "1：用于移动面板的面板标签。2：工具栏。3：包含布局和标题栏命令的Window菜单。"
related: ["workspace", "workspace/management", "advanced/input"]
image: {"light": "/assets/guides/workspace-customization-light.webp", "dark": "/assets/guides/workspace-customization-dark.webp", "alt": "1：用于移动面板的面板标签。2：工具栏。3：包含布局和标题栏命令的Window菜单。"}
---

## 布置面板

拖动面板的标签或手柄即可移动它。拖动时，标记会显示可以停靠的位置；在其他任何地方松开，面板就会自由浮动。把一个面板放到另一个面板的标签上，可以把它们组合在一起；拖动面板之间的边界，可以把其中一个放大。一整列面板还可以折叠成一排图标，让每个面板只在需要时以抽屉形式打开。

面板一拖动就会开始移动。工具栏中的按钮则不同：请先按住按钮片刻再拖动，这样快速轻点就不会被误当成移动。

## 选择工具栏

右键点击工具栏或长按工具栏，就可以选择它显示哪些工具和命令。工具栏里不只可以放按钮：你可以添加笔刷大小和不透明度滑块，或者添加一个始终显示当前工具设置的**Tool Options**工具栏。拖动工具栏的手柄可以移动它，把它放在任意屏幕边缘的开头、中间或末尾附近，它就会停靠在那里。**Window → Quick Access Toolbars**用于创建和管理额外的工具栏。

<strong>Window → Customize Title Bar…</strong>让你排列窗口顶部的按钮，包括工作区切换器。把各项拖到合适的位置，完成后即可保留新的排列。

## 更改外观或撤销修改

**Preferences → Appearance**包含界面外观的设置。你可以选择浅色或深色主题、挑选强调色，并设置面板的透明程度，让作品柔和地透过面板显现出来。

用**Window → Undo Layout Change**和**Redo Layout Change**可以逐步撤销或重做布局修改；普通的撤销只作用于你的作品。要让工作区回到最初的样子，请选择<strong>Restore Starting Layout…</strong>。如果想保留多种布局，可以把每一种都保存为单独的[工作区](/zh/docs/workspace/management/)。
