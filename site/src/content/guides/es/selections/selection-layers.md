---
title: "Capas de selección"
description: "Guardar selecciones como capas de selección en el panel Capas y volver a cargarlas."
related: ["selections/working", "selections/quick-mask", "layers/types", "layers/panel"]
---

Puedes guardar una selección como una capa del panel Capas y volver a cargarla
más tarde.

## Guardar una selección

Haz una de las siguientes acciones:

- Elige **Seleccionar > Guardar como capa de selección**.
- Selecciona **Guardar** en la barra de selección o en la barra de Máscara rápida.
- En la Máscara rápida, elige **Capa > Guardar como capa de selección**.

La capa nueva se coloca arriba del todo en la lista de capas, con el nombre
*Selección* y un número. Se abre para editarla, con el nombre listo para
escribir. Al guardar desde la Máscara rápida, también se conservan el color y la
opacidad de la superposición de la Máscara rápida.

Para guardar dentro de un grupo, abre el menú del grupo y elige
**Guardar selección actual en el grupo…**.

## Nueva capa de selección

Puedes empezar una capa de selección vacía y pintar la selección.

Haz una de las siguientes acciones:

- Elige **Seleccionar > Nueva capa de selección**.
- Selecciona **Nueva capa de selección** en la parte inferior del panel Capas.
- Abre el menú de un grupo y elige **Nueva capa de selección en el grupo…**.

## Filas de las capas de selección

La fila de una capa de selección tiene una miniatura de la selección, un botón
de ojo que muestra u oculta su superposición y un botón de carga junto a la
miniatura.

Al seleccionar la fila, la capa se abre para editarla. Las capas de selección no
tienen opacidad, modo de mezcla ni máscara, y no puedes combinarlas ni pintar en
ellas fuera de la edición.

![La fila de una capa de selección en el panel Capas, con su botón de carga junto a la miniatura.](shot:selections/selection-layer-row)

## Editar una capa de selección

Mientras editas una capa de selección, los pinceles, **Rellenar** y **Degradado**
cambian la selección guardada, igual que en la
[Máscara rápida](/es/docs/selections/quick-mask/). El panel Propiedades muestra
**Color de superposición** y **Opacidad de superposición** de la capa, y el
ajuste compartido **Modo**.

La [barra del lienzo](/es/docs/selections/working/) de la parte inferior del
lienzo tiene el rótulo «Editando» seguido del nombre de la capa. Con la barra del
lienzo oculta, esta barra no aparece.

- **Cargar** convierte la capa en la selección actual y vuelve a la imagen.
- **Invertir** invierte la selección guardada y mantiene la capa abierta para editarla.
- **Volver a la imagen** termina la edición. **Escape** hace lo mismo.

Al terminar la edición, vuelve a estar activa la capa que editabas antes, o la
capa de pintura superior si no había ninguna.

Para perfeccionar la selección guardada, abre el menú de la capa de selección y
elige una opción de **Modificar**. **Seleccionar > Expandir selección…** y los demás comandos
para perfeccionar del menú **Seleccionar** vuelven primero a la imagen y cambian
la selección actual.

![La barra del lienzo de una capa de selección en edición, con Cargar, Invertir y Volver a la imagen.](shot:selections/selection-layer-bar)

## Cargar una capa de selección

Haz una de las siguientes acciones:

- Elige **Seleccionar > Cargar selección**, elige la capa y elige **Cargar selección**, **Añadir a la selección**, **Restar de la selección**, **Intersecar con la selección** o **Cargar selección invertida**.
- Selecciona el botón de carga en la fila de la capa.
- Mantén pulsada **Ctrl** y haz clic en la miniatura de la capa. Añade **Mayús** para sumar, **Alt** para restar o **Mayús+Alt** para intersecar.
- Mientras editas la capa, selecciona **Cargar** en la barra del lienzo.

Al cargar, primero se vuelve a la imagen. La capa de selección se queda como
estaba. Las capas que están en grupos aparecen en **Cargar selección** con la
ruta de su grupo, como *Grupo 1 / Selección 1*.

## Reemplazar una capa de selección

Para guardar la selección actual en una capa de selección existente, elige
**Seleccionar > Reemplazar capa de selección con la selección actual** y elige
la capa. No puedes reemplazar una capa de selección bloqueada.

## Menú de la capa de selección

Haz clic con el botón derecho en la fila de una capa de selección, o mantenla
pulsada, para abrir su menú.

- **Cargar selección**: los mismos cinco elementos que en el menú Seleccionar.
- **Modificar**: **Reemplazar con la selección actual**, **Invertir**, **Seleccionar todo**, **Borrar**, **Rellenar**, **Expandir…**, **Contraer…**, **Suavizar bordes…**, **Borde…** y **Suavizar…**.
- **Organizar**: **Agrupar capas seleccionadas**, **Mover a la raíz**, **Subir**, **Bajar** y **Mover al grupo**.
- **Renombrar…**, **Duplicar**, **Eliminar** y **Bloquear edición**. En una capa bloqueada, **Bloquear edición** dice **Desbloquear edición**.

**Modificar** no está disponible en una capa de selección bloqueada. Con varias
capas seleccionadas, el menú muestra **Duplicar capas seleccionadas** y
**Eliminar capas seleccionadas**.
