---
title: "画笔设置"
description: "调整笔迹、颜料累积与输入响应。"
purpose: "Tool显示当前预设的设置。每次只改一项并重复相同笔画，才能看清是哪项设置改变了结果。"
techniques: ["区分大小、不透明度与流量。", "调整笔尖和间距。", "改画笔前先检查压感。"]
figure: "1：当前预设。2：大小、不透明度和流量。3：选择常用尺寸的Brush size标签。"
related: ["painting/brushes", "advanced/custom-brushes", "advanced/input"]
image: {"light": "/assets/guides/advanced-brush-engine-light.webp", "dark": "/assets/guides/advanced-brush-engine-dark.webp", "alt": "1：当前预设。2：大小、不透明度和流量。3：选择常用尺寸的Brush size标签。"}
---

## 用相同笔画比较

选择接近目标效果的预设，图层保持100%不透明度和**Normal**模式。重复相同尺寸与曲线，每次只改一个参数。滚动**Tool**可查看该预设的更多设置。

大小改变宽度，不透明度改变透视程度，流量改变一笔中的颜料量。比较一条连续笔画和多次叠画；图层不透明度会影响已有颜色整体，测试时应保持不变。

## 调整笔尖

笔迹由连续的笔尖印记构成。提高**Spacing**会让单个印记更明显。预设支持时，也可调整**Hardness**、角度和随机变化。

不同媒介的参数不同。水彩、油彩可能与已有颜色相互作用，应分别在空白处和其他颜色上测试。

## 保留合适的响应

没有压感时，先用铅笔检查[输入设置](/zh/docs/advanced/input/)。画笔参数无法补回设备未传入的压力。

合适的修改保存在工作区；另存配置与恢复默认值的方法见[保存与重置画笔设置](/zh/docs/advanced/custom-brushes/)。
