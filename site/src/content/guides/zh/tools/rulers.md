---
title: "标尺与吸附"
description: "引导手绘笔画沿方向或朝一点延伸。"
purpose: "标尺约束笔画，画出的内容仍留在绘画图层上。直线、平行和放射标尺适用于不同的重复线条。"
techniques: ["创建直线、平行或放射标尺。", "切换显示与吸附。", "移动或删除标尺。"]
figure: "1：标尺类型。2：画布上的标尺。3：显示、吸附与删除。"
related: ["tools/figures", "painting/brushes", "tools/transforms"]
image: {"light": "/assets/guides/tools-rulers-light.webp", "dark": "/assets/guides/tools-rulers-dark.webp", "alt": "1：标尺类型。2：画布上的标尺。3：显示、吸附与删除。"}
---

## 放置标尺

选择**Ruler**，在Tool Set中选择**Straight**、**Parallel**或**Radial**，拖动确定位置与方向。直线标尺沿自身线段引导，平行标尺提供共同方向，放射标尺把线条导向中心。

定位后切回绘画工具。标尺是辅助线，不会出现在导出图像中。

## 开启吸附绘画

启用**Snap to rulers**，用笔或画笔在标尺附近绘画。大小、压感和颜色仍决定笔迹。需要自由笔画时关闭吸附。

**Show rulers**控制显示。隐藏的标尺不约束笔画，因此吸附失效时要同时检查显示与吸附开关。

## 修改辅助线

返回Ruler或使用Operation选择标尺，移动主体或端点调整位置与方向。**Delete ruler**删除标尺，但保留已经画出的内容。

单个几何形状使用[Figure](/zh/docs/tools/figures/)，修改已有笔迹使用[变换](/zh/docs/tools/transforms/)。
