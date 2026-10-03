---
title: "enmascaramiento"
description: "Dale a la cinta, al disco y al bloque sus propias capas de color con bordes editables."
purpose: "En esta etapa, cada forma obtiene su propia capa de color. El color llena toda la capa y una máscara decide qué parte ves. Como no se borra nada, puedes ajustar el borde de cualquier forma más adelante simplemente pintando sobre su máscara."
techniques: ["Seleccione una forma con un lazo o selección automática.", "Convierte la selección en una máscara y llena la capa con color.", "Paint en la máscara para ajustar el borde."]
figure: "1: Miniatura de la máscara seleccionada en la cinta. 2: Cinta, Disco y Bloque debajo del Arte lineal. 3: Borrador, que oculta partes de la máscara."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Miniatura de la máscara seleccionada en la cinta. 2: Cinta, Disco y Bloque debajo del Arte lineal. 3: Borrador, que oculta partes de la máscara."}
---

## 1. Selecciona una forma

Oculte **Sketch** y **Color rough**. Elija **Lasso selection** y trace con cuidado alrededor de la cinta, como en el ejemplo.

Si su arte lineal está cerrado alrededor de una forma, **Auto select** puede hacerlo con un solo clic. Marque **Line art** como capa de referencia eligiendo **Layer Settings → Use as reference** en su menú. Luego elija **Auto select**, elija **Sample reference layers** en el panel Herramientas y haga clic dentro de la forma. [Herramientas de selección](/es/docs/tools/selections/) explica las configuraciones que controlan hasta qué punto se extiende la selección.

## 2. Haz la capa de color enmascarada.

Agregue una nueva capa llamada **Ribbon** debajo de Line art. Con la selección aún activa, abra el menú de la cinta y elija **Mask → Mask: reveal selection**. La capa ahora tiene una máscara que muestra sólo la forma de la cinta.

Haga clic en la miniatura de pintura de la cinta y elija el color de la cinta. Elija **Select → Select all pixels** y luego **Edit → Fill selection** para llenar toda la capa con color y termine con **Select → Deselect pixels**. Solo se muestra la cinta, pero el color continúa debajo de la máscara, listo para cuando quieras ampliar la forma.

## 3. Ajusta el borde

Haga clic en la miniatura de la máscara de la cinta para editar la máscara. Ahora cualquier pincel revela más del color donde pintas y el **Eraser** lo vuelve a ocultar. Vuelva a hacer clic en la miniatura de la pintura cuando desee cambiar el color.

Haga **Disc** y **Block** de la misma manera. Mantenga el disco debajo de la cinta y el bloque debajo del disco, con el arte lineal encima de los tres. Guarde su dibujo y luego continúe con [Rendering](/es/docs/illustration/render/).
