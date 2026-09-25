---
title: "细化"
description: "在剪贴到各个形状的图层上添加阴影和质感，然后导出结果。"
purpose: "细化阶段为形状加上光影。在剪贴图层上画阴影，阴影会自动保持在每个形状之内；而且由于阴影与底色分开，你可以调整或重画阴影，而不会丢失任何内容。"
techniques: ["把阴影图层剪贴到Ribbon上。", "控制阴影的强度。", "为其他形状画阴影，检查图层并导出。"]
figure: "1：位于Ribbon上方的Ribbon texture和Ribbon shading。2：Clip to layer below。3：控制整层阴影的图层不透明度。"
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1：位于Ribbon上方的Ribbon texture和Ribbon shading。2：Clip to layer below。3：控制整层阴影的图层不透明度。"}
---

## 1. 添加剪贴阴影

选择**Ribbon**，在它正上方添加一个新图层，命名为**Ribbon shading**。打开它的菜单，选择**Layer Settings → Clip to layer below**。现在用**Watercolor Wash**在带状形的弯折处画出阴影，再用**Paintbrush**加几笔鼠尾草绿作为点缀。笔画可以超出带状形的边缘，因为只有带状形内部的部分才会显示出来。

暂时把阴影图层的混合模式保持为**Normal**。底色安全地保留在Ribbon图层上，所以擦除阴影永远不会擦掉下面的颜色。

## 2. 控制强度

笔刷不透明度改变的是你接下来要画的笔画，而**Ribbon shading图层的不透明度**改变的是你已经画好的全部阴影。如果每处阴影都显得太重，请降低图层的不透明度，而不是重新绘制。

画高光时，在Ribbon shading正上方添加**Ribbon texture**，同样把它剪贴。用小号铅笔或带纹理的笔刷画几笔浅色笔迹。现在的图层顺序从上到下依次是Ribbon texture、Ribbon shading和Ribbon。[笔刷设置](/zh/docs/advanced/brush-engine/)更详细地说明了不透明度和流量。

## 3. 完成并导出

用同样的方法为**Disc**和**Block**画阴影，每个形状都有自己的剪贴图层。示例中，圆形上柔和的阴影用Airbrush绘制，奶油色的细小排线用Pencil绘制。让**Line art**始终位于所有图层之上。如果形状的外边缘需要修正，就在该形状的蒙版上绘画；如果只是阴影有问题，就修改阴影图层。[蒙版与剪贴](/zh/docs/layers/masks/)还介绍了如何用Alpha lock为墨线重新上色。

满意之后，隐藏草稿和色稿图层，保存`.capy`文件，然后[导出图像](/zh/docs/output/export/)用于分享。打开导出的文件看一看，确认效果符合预期。
