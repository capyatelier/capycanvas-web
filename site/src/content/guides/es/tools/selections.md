---
title: "Herramientas de selección"
description: "Selecciona parte de tu dibujo para que los cambios solo afecten a esa área."
purpose: "Una selección marca la parte del dibujo en la que desea trabajar. Mientras está activo, pintar, rellenar y transformar solo afecta el área seleccionada, por lo que el resto del dibujo permanece seguro. Capy Canvas tiene herramientas de selección para formas simples, contornos a mano alzada y áreas de color similar."
techniques: ["Elija la herramienta de selección adecuada.", "Sumar o restar de una selección.", "Complete una selección y bórrela cuando haya terminado."]
figure: "1: Herramientas de selección en el conjunto de herramientas. 2: Modo de selección, opciones de pluma y forma. 3: Una selección de elipse alrededor del disco."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Herramientas de selección en el conjunto de herramientas. 2: Modo de selección, opciones de pluma y forma. 3: Una selección de elipse alrededor del disco."}
---

## Elija una herramienta de selección

En Paint, elija **Lasso selection** o **Auto select** en la barra de herramientas y Tool Set enumerará todas las herramientas de selección. En Sketch, están debajo del botón **Select** y Photo mantiene la mayoría de ellos en su barra de herramientas.

**Rectangle select** y **Ellipse select** dibujan formas simples; mantenga presionado **Shift** para dibujar un cuadrado o un círculo y **Alt** para dibujar desde el centro. **Lasso selection** sigue tu lápiz a mano alzada y **Polygonal lasso** une líneas rectas entre los puntos en los que haces clic; haga clic en el primer punto nuevamente o presione **Enter** para cerrarlo. **Auto select** selecciona un área de color similar con un clic y **Select by color** selecciona todas las áreas de ese color a la vez. Dos herramientas más, **Paint selection** y **Tonal range**, tienen sus propias páginas: [Máscara rápida y capas de selección](/es/docs/selections/quick-mask/) y [Seleccionar por brillo](/es/docs/selections/tonal-range/).

## Combinar y suavizar selecciones

Los cuatro botones en la parte superior del panel **Tool** eligen lo que sucede cuando realiza otra selección. Puede reemplazar el actual, agregarle, restarle o mantener solo el área donde los dos se superponen. También puedes mantener presionado **Shift** para sumar o **Alt** para restar, sin cambiar los botones.

**Feather radius** suaviza el borde de la selección, de modo que la pintura y los ajustes se desvanecen gradualmente en lugar de detenerse en una línea dura. Para la selección automática, **Tolerance** controla qué tan diferente puede ser un color y aún así incluirse, y **Close gaps** evita que la selección se filtre a través de pequeñas interrupciones en el arte lineal.

## Usa la selección

Para seleccionar todo lo pintado en una capa, mantenga presionado **Ctrl** y haga clic en la miniatura de la capa. Con una selección activa, pinta libremente: los trazos solo aterrizan dentro de ella. Elija **Edit → Fill selection** para rellenarlo con el color actual o conviértalo en una [máscara de capa](/es/docs/layers/masks/). El menú **Select** también puede invertir la selección, aumentarla o reducirla unos pocos píxeles, o recuperar la última selección con **Reselect**.

Cuando hayas terminado, elige **Select → Deselect pixels** para que tus próximos trazos puedan volver a cualquier lugar.
