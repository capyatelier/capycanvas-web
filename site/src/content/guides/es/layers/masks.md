---
title: "Máscaras y recorte"
description: "Oculta partes de una capa sin borrarlas y mantén el sombreado dentro de una forma."
purpose: "Una máscara oculta parte de una capa sin eliminar pintura, por lo que siempre puedes cambiar de opinión sobre dónde debe estar el borde. El recorte mantiene una capa dentro de la forma de la capa debajo de ella, que es la forma más fácil de agregar sombreado que nunca se salga de las líneas."
techniques: ["Haz una máscara a partir de una selección.", "Paint en una máscara para mostrar u ocultar pintura.", "Recorte el sombreado a la capa de abajo."]
figure: "1: Miniatura de la máscara de la cinta. 2: Sombreado recortado encima de la cinta. 3: Recorte a la capa inferior y controles de bloqueo alfa."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: Miniatura de la máscara de la cinta. 2: Sombreado recortado encima de la cinta. 3: Recorte a la capa inferior y controles de bloqueo alfa."}
---

## Haz una máscara a partir de una selección.

Primero [seleccione](/es/docs/tools/selections/) el área que desea mantener visible. Luego abra el menú de la capa y elija **Mask → Mask: reveal selection**. Todo lo que está fuera de la selección se oculta, pero nada se borra. También puede elegir **Mask: hide selection** para ocultar el área seleccionada. Recuerde anular la selección después, para que sus próximos trazos no se limiten a la selección.

Una máscara sólo puede mostrar la pintura que realmente se encuentra en la capa. Si cree que querrá ampliar la forma más adelante, rellene toda la capa con color antes de enmascararla, como lo hace la [etapa de enmascaramiento](/es/docs/illustration/mask/) del tutorial.

## Paint en la máscara

Haga clic en la miniatura de la máscara junto a la capa para editar la máscara en lugar de la pintura. Ahora cualquier pincel revela más capa dondequiera que pintes, y el **Eraser** la oculta nuevamente. El color con el que pintes no importa en una máscara. Cuando haya terminado, haga clic en la miniatura de pintura para volver a pintar normalmente.

El menú de la máscara puede apagar la máscara por un momento, invertirla o eliminarla. Apagarlo es una forma práctica de comparar el resultado con la pintura que hay debajo.

## Recortar sombreado a una forma

Agregue una nueva capa directamente encima de una capa base, abra su menú y elija **Layer Settings → Clip to layer below**. Lo que pintes en la capa recortada ahora solo muestra dónde tiene pintura la capa base, por lo que puedes sombrear libremente sin sobrepasar los bordes. Puedes apilar varias capas recortadas sobre la misma base, una para sombras y otra para luces.

**Alpha lock** es una alternativa más sencilla cuando desea volver a colorear trazos que ya existen, como el arte lineal. Mantiene pintura nueva dentro de los trazos existentes en la misma capa. La [etapa de renderizado](/es/docs/illustration/render/) del tutorial utiliza ambos.
