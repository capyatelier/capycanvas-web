---
title: "细化"
description: "用剪贴到底色的独立图层添加阴影与质感。"
purpose: "剪贴把阴影限制在底色的可见范围内。阴影保持独立可编辑，外边界由底色蒙版统一控制。"
techniques: ["把Ribbon shading剪贴在Ribbon上方。", "分别调整画笔与图层不透明度。", "添加质感，检查顺序并导出。"]
figure: "1：Ribbon上方的Ribbon texture与Ribbon shading。2：Clip to layer below。3：控制整遍阴影的图层不透明度。"
related: ["layers/groups", "layers/masks", "tools/files"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1：Ribbon上方的Ribbon texture与Ribbon shading。2：Clip to layer below。3：控制整遍阴影的图层不透明度。"}
---

## 1. 添加剪贴阴影

选择**Ribbon**，在正上方添加**Ribbon shading**并启用**Clip to layer below**。用Watercolor Wash为带状形的弯曲部分添加阴影，再用Paintbrush叠加鼠尾草绿色。笔画可以越过轮廓，但结果只显示在底色覆盖范围内。

初次使用**Normal**混合模式。底色保留在Ribbon上，擦除阴影不会擦掉底色。

## 2. 调整强度与质感

画笔不透明度只影响新笔画；**Ribbon shading的图层不透明度**影响已经画完的整遍阴影。全部过深时降低后者。

在Ribbon shading正上方添加**Ribbon texture**并再次启用剪贴。用较细铅笔或有纹理的预设加少量亮部。顺序从上到下为Ribbon texture、Ribbon shading、Ribbon。[画笔设置](/zh/docs/advanced/brush-engine/)解释间距、不透明度和流量。

## 3. 完成其他区域

为**Disc**和**Block**重复剪贴阴影流程。用Airbrush柔和地晕染圆形，再用Pencil画出奶油色的细排线。**Line art**始终在上方。共享边界不对时改底色蒙版，仅阴影有误时改阴影层。[蒙版与剪贴](/zh/docs/layers/masks/)还解释了为线稿换色的锁定透明像素。

隐藏草稿层，保存`.capy`并[导出PNG](/zh/docs/tools/files/)。分享前打开导出图检查。
