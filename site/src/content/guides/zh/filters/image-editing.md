---
title: "编辑导入图像"
description: "把图像导入为图层，调整后导出副本。"
purpose: "Photo把图像调整工具放在方便的位置。导入图层会向当前文档添加图像，而打开.capy会恢复整个可编辑文档。"
techniques: ["在Photo中导入图像。", "添加可编辑的颜色调整。", "保存分层项目并导出PNG。"]
figure: "1：Photo工作区。2：导入图像与效果层。3：颜色调整的Properties。"
related: ["filters/overview", "tools/transforms", "tools/files"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1：Photo工作区。2：导入图像与效果层。3：颜色调整的Properties。"}
---

## 导入到文档

选择**Photo**，按需要的尺寸创建文档。在**Layers**底部选择**Import image as layer**，打开浏览器能解码的图像。它会成为新的图像图层。

用**Operation**或**Scale / rotate**定位。导入不会把文档改成原图尺寸；试验期间保留原始图像。

## 调整外观

在**Filters**中添加**Curves**或**Hue / Saturation**等调整，选择效果层并在**Properties**中修改。切换可见性与原图比较。

只改局部时添加蒙版。通过顺序、剪贴与组避免影响无关内容，关系见[滤镜与属性](/zh/docs/filters/overview/)。

## 保存与导出

用<strong>Save As…</strong>保存包含图像和可编辑效果的`.capy`，再用<strong>Export PNG…</strong>生成合成副本。重新打开PNG检查尺寸和外观。

此流程使用当前共用工具，不包含RAW显影、修复或颜色配置文件操作。
