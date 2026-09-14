---
title: "面板、工具栏与标题栏"
description: "安排操作区，并恢复以前的布局。"
purpose: "把面板移到常用位置，让频繁操作容易触及。布局有独立历史，恢复位置不会撤销绘画。"
techniques: ["停靠、浮动、合并标签和折叠面板。", "配置工具栏与标题栏。", "单独撤销布局修改。"]
figure: "1：用于移动的面板标题或手柄。2：工具栏。3：包含布局和标题栏操作的Window菜单。"
related: ["workspace", "workspace/management", "advanced/input"]
image: {"light": "/assets/guides/workspace-customization-light.webp", "dark": "/assets/guides/workspace-customization-dark.webp", "alt": "1：用于移动的面板标题或手柄。2：工具栏。3：包含布局和标题栏操作的Window菜单。"}
---

## 放置面板

拖动标题、标签或手柄。停靠提示显示可连接的位置，放到空白位置则保持浮动。面板可共享标签组，折叠列可作为抽屉展开；拖动边缘调整大小。

标题和手柄开始移动即可拖动。工具块需要长按后排序，鼠标也一样。列表中，触摸和笔通常需长按行，拖手柄则立即开始。

## 选择操作项

打开面板或工具栏的上下文菜单配置内容与显示。<strong>Manage Toolbars…</strong>管理可复用工具栏；<strong>Customize Title Bar…</strong>打开标题栏编辑器。

在标题栏编辑器中直接拖动项目和组件库中的块。组件通过拖放添加，点击不会添加。完成编辑保留变化，取消则退出预览。

## 恢复布局

**Undo Layout Change**和**Redo Layout Change**只处理布局。普通撤销仍用于绘画。<strong>Restore Starting Layout…</strong>预览恢复初始布局，并保留画笔设置。

需要为另一项任务保留布局时，创建另一个[工作区](/zh/docs/workspace/management/)。
