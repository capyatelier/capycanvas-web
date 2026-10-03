---
title: "Rellenos y degradados"
description: "Rellena un área con un clic o con una mezcla suave de un color a otro."
purpose: "La herramienta Relleno vierte color en un área con un solo clic, que es la forma más rápida de colorear un arte lineal. En cambio, un degradado combina suavemente de un color a otro, lo cual es útil para cielos, fondos e iluminación suave."
techniques: ["Llene un área dentro de su arte lineal con un solo clic.", "Dibuja un degradado lineal o radial.", "Mantenga un relleno o degradado dentro de una selección."]
figure: "1: Tipos de degradado en el conjunto de herramientas. 2: Colores de primer plano y de fondo. 3: La capa que recibe el degradado."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: Tipos de degradado en el conjunto de herramientas. 2: Colores de primer plano y de fondo. 3: La capa que recibe el degradado."}
---

## Rellena un área con un clic

Elija la herramienta **Fill** o presione **F** y haga clic dentro de un área para rellenarla con el color de primer plano. Para colorear un arte lineal que está en otra capa, primero marque la capa de arte lineal como referencia con **Layer Settings → Use as reference** y elija **Reference layers** en el conjunto de herramientas. Luego seleccione la capa vacía sobre la que desea pintar y haga clic dentro del área. El relleno se detiene en las líneas, aunque estén en una capa diferente.

Si el relleno se escapa a través de un pequeño espacio en las líneas, levante **Close gaps** en el panel de herramientas. **Expansion** empuja el relleno ligeramente debajo de las líneas, de modo que no quede ningún borde blanco fino entre el color y la tinta.

## Elige los colores y la capa.

Es más fácil cambiar un degradado más adelante si tiene una capa propia, así que primero agregue una nueva capa. Luego elija los dos colores en el panel **Color**: el degradado comienza con el color de primer plano y termina con el color de fondo.

Elija la herramienta **Gradient**, luego elija un tipo en **Tool Set**. Los degradados **Linear** se mezclan en línea recta y los degradados **Radial** se extienden en un círculo desde un punto central. Las versiones de *color para borrar* desvanecen el color de primer plano hasta convertirlo en transparente en lugar de fusionarse con el color de fondo.

## Arrastra para dibujarlo

Para un degradado lineal, arrastre desde donde debería estar el primer color hasta donde debería estar el segundo color. Para un degradado radial, comience en el centro y arrastre hacia afuera. Un arrastre breve realiza un cambio rápido entre los colores y un arrastre largo extiende la combinación por una mayor parte del dibujo.

Si el resultado no es del todo correcto, deshaga y arrastre nuevamente. A menudo son necesarios un par de intentos para encontrar el ángulo y la longitud correctos.

## Guárdalo donde quieras

Si hay una [selection](/es/docs/tools/selections/) activa, el degradado solo llena el área seleccionada. Anula la selección después para que tus próximos trazos puedan ir a cualquier parte. Para un límite que quizás desee ajustar más adelante, use [mask](/es/docs/layers/masks/) en lugar de una selección. Debido a que el degradado está en su propia capa, también puedes suavizarlo más tarde reduciendo la opacidad de la capa.
