---
title: "保存与重置画笔设置"
description: "在工作区中保留修改，并按需恢复默认值。"
purpose: "画笔调整随工作区保存。需要保留一套工具设置，同时尝试另一套时，可以创建另一个工作区。"
techniques: ["保留各预设的修改。", "复制工作区用于另一套画笔设置。", "区分重置画笔与恢复布局。"]
figure: "1：当前工作区。2：随工作区保存的工具设置。3：重置画笔的确认窗口。"
related: ["advanced/brush-engine", "workspace/management"]
image: {"light": "/assets/guides/advanced-custom-brushes-light.webp", "dark": "/assets/guides/advanced-custom-brushes-dark.webp", "alt": "1：当前工作区。2：随工作区保存的工具设置。3：重置画笔的确认窗口。"}
---

## 保留调整

选择预设并修改**Tool**中的设置，再切换到其他预设后返回，检查保留的数值。工作区记住各预设的修改，以及选中的工具和布局。

这些设置与`.capy`文档分开。保存作品不会生成便携画笔库，打开作品也不会替换当前工作区。

## 保存另一套配置

用**New Workspace**复制当前布局和工具并命名，在副本中试验。切回原工作区即可恢复另一套数值。

目前可通过这种方式保留多套设置，编辑器尚未提供独立自定义预设的复制、导入和导出流程。切换、固定与恢复的方法见[工作区管理](/zh/docs/workspace/management/)。

## 重置正确的部分

**Reset All Brushes**恢复当前工作区内所有内置画笔的默认值，包括未选中的预设。作品和布局保留，但画笔修改会被移除。

**Restore Starting Layout**恢复面板位置并保留工具设置。如果还要比较原来的数值，应先复制工作区。
