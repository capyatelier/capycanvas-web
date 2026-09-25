---
title: "保存与重置笔刷设置"
description: "保留你的笔刷调整，尝试新的设置，并恢复默认值。"
purpose: "修改笔刷设置后，Capy Canvas会把它们作为工作区的一部分记住，你不需要手动保存任何东西。如果想做些尝试，又不想丢掉一套满意的配置，请先复制工作区。"
techniques: ["在当前工作区中保留修改。", "在工作区副本中尝试另一套配置。", "重置笔刷而不改变布局。"]
figure: "1：当前工作区。2：随工作区保存的笔刷设置。3：Reset All Brushes确认窗口。"
related: ["advanced/brush-engine", "workspace/management"]
image: {"light": "/assets/guides/advanced-custom-brushes-light.webp", "dark": "/assets/guides/advanced-custom-brushes-dark.webp", "alt": "1：当前工作区。2：随工作区保存的笔刷设置。3：Reset All Brushes确认窗口。"}
---

## 修改会自动保留

选择一支笔刷，然后在**Tool**面板中修改它的设置。切换到其他笔刷、之后再回来时，你的修改依然还在。每个工作区都会分别记住每支笔刷的设置，以及你最近使用的工具和面板的排列方式。

笔刷设置属于工作区，而不属于作品。打开作品不会改变你的笔刷，保存作品也不会保存笔刷。

## 尝试另一套配置

想要自由尝试时，请选择<strong>Window → Workspaces → New Workspace…</strong>。这会以新的名称复制当前工作区，连同其中的笔刷和布局。在副本中进行修改即可。切换回原来的工作区时，它的设置会完全恢复成你离开时的样子。

[管理工作区](/zh/docs/workspace/management/)介绍了如何在工作区之间切换，以及如何选择哪些工作区显示在标题栏中。

## 从头开始

<strong>Window → Workspaces → Reset All Brushes…</strong>会把当前工作区中的每支笔刷恢复为原始设置，包括你现在没有使用的笔刷。你的作品和面板布局都不受影响。

如果你想让面板回到最初的位置，请改用<strong>Restore Starting Layout…</strong>。它会恢复面板位置，但保留笔刷设置，因此这两种重置永远不会抵消彼此的效果。
