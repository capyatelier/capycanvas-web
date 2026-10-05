---
title: "Trabajar con selecciones"
description: "La barra del lienzo y los comandos que cambian una selección o los píxeles que contiene."
related: ["selections/tools", "selections/quick-mask", "selections/selection-layers", "layers/masks"]
---

Puedes cambiar una selección, y los píxeles que contiene, desde el menú
**Seleccionar** y desde la barra de selección del lienzo.

## La barra del lienzo

La barra del lienzo es una fila de botones sobre el lienzo con los siguientes
pasos para lo que estás editando.

| La barra del lienzo aparece | Se explica en |
| --- | --- |
| Junto a una selección nueva | La barra de selección, más abajo |
| Mientras colocas las esquinas de una selección con **Lazo poligonal** | [Herramientas de selección](/es/docs/selections/tools/) |
| En la Máscara rápida | [Máscara rápida](/es/docs/selections/quick-mask/) |
| Mientras editas una capa de selección | [Capas de selección](/es/docs/selections/selection-layers/) |
| Mientras editas la máscara de una capa | [Máscaras](/es/docs/layers/masks/) |
| Mientras transformas capas o píxeles, o colocas una imagen | [Mover y transformar](/es/docs/transform/move-transform/) |
| Mientras recortas | [Recortar](/es/docs/transform/crop/) |
| Al seleccionar una guía | [Reglas y guías](/es/docs/drawing/ruler/) |
| Al hacer clic en el disco del origen de clonación | [Clonar y corregir](/es/docs/retouch/clone-heal/) |
| Mientras eliges un punto de muestra para Niveles, Curvas o Balance de blancos | [Añadir y editar filtros](/es/docs/filters/adding/) |

La barra se sitúa junto al objeto o en el borde inferior del lienzo. De
izquierda a derecha tiene:

- Un rótulo, como «Máscara rápida» o «Transformar contorno».
- Los botones. Un botón atenuado no está disponible; selecciónalo para ver el motivo.
- **Más**, con los botones que no caben y después el menú **Seleccionar** para una selección o el menú **Capa** para una máscara.
- El botón que termina, como **Aplicar** o **Salir**.

Una barra situada junto a un objeto se oculta mientras tocas el lienzo o mueves
la vista.

Para ocultar la barra del lienzo, haz una de las siguientes acciones:

- Elige **Ver > Mostrar barra de acciones del lienzo**.
- Elige **Mostrar barra de acciones del lienzo** al final de **Más**.

Cada espacio de trabajo guarda su propio ajuste. Con la barra oculta, los
recortes, las transformaciones, las imágenes colocadas y los polígonos siguen
mostrando sus botones para terminar en el borde inferior.

## La barra de selección

La barra de selección aparece junto a una selección mientras está activa una
herramienta de selección u **Operación**. Con otras herramientas aparece junto a
una selección nueva, pero no junto a una que recuperan Deshacer o Rehacer. Los
pinceles, las herramientas de relleno, **Degradado** y **Figura** nunca muestran
la barra.

![La barra de selección bajo una selección rectangular.](shot:selections/working-selection-bar)

- **Deseleccionar** e **Invertir**: consulta el menú Seleccionar, más abajo.
- **Dejar copia**: solo con **Operación**, consulta [Mover y transformar](/es/docs/transform/move-transform/).
- **Copiar a capa**: **Copiar selección a una capa nueva** o **Cortar selección a una capa nueva**.
- **Copiar**: **Copiar**, **Copiar combinado** o **Cortar**, consulta [Copiar y pegar](/es/docs/transform/clipboard/).
- **Transformar**: transforma los píxeles seleccionados.
- **Perfeccionar**: los comandos para perfeccionar y **Transformar contorno**.
- **Máscara**: aplica a la capa activa una máscara con la forma de la selección.
- **Ajustar**: añade un filtro que usa la selección como máscara, consulta [Cómo se aplican los filtros](/es/docs/filters/how-filters-apply/).
- **Rellenar**: **Rellenar selección**.
- **Borrar**: **Borrar píxeles seleccionados** o **Borrar fuera de la selección**.
- **Recortar**: **Recortar lienzo a la selección**, consulta [Recortar](/es/docs/transform/crop/).
- **Máscara rápida**: consulta [Máscara rápida](/es/docs/selections/quick-mask/).
- **Guardar**: **Guardar como capa de selección**, consulta [Capas de selección](/es/docs/selections/selection-layers/).

## Menú Seleccionar

También puedes abrir el menú **Seleccionar** desde **Más**, en la barra de
selección, y desde **Seleccionar**, bajo los ajustes de una herramienta de
selección en el panel Herramienta.

| Comando | Qué hace | Tecla |
| --- | --- | --- |
| **Seleccionar todos los píxeles** | Selecciona todo el lienzo | **Ctrl+A** |
| **Deseleccionar píxeles** | Quita la selección y termina la Máscara rápida o la edición de una capa de selección | **Ctrl+D** |
| **Volver a seleccionar** | Recupera la selección que quitó el último cambio | **Ctrl+Mayús+D** |
| **Invertir selección** | Selecciona todo lo que está fuera de la selección | **Ctrl+Mayús+I** |
| **Mostrar contorno de selección** | Muestra u oculta el contorno de la selección | |

**Volver a seleccionar** solo está disponible mientras no hay nada seleccionado.

Ocultar el contorno de la selección no quita la selección.
**Mostrar contorno de selección** también está en el menú Ver.

![El menú Seleccionar.](shot:selections/working-select-menu)

## Perfeccionar una selección

Puedes expandir, contraer, suavizar los bordes, crear un borde o suavizar una
selección con vista previa en directo.

Haz una de las siguientes acciones:

- Elige **Seleccionar > Expandir selección…**, **Contraer selección…**, **Suavizar bordes de selección…**, **Borde de selección…** o **Suavizar selección…**.
- Selecciona **Perfeccionar** en la barra de selección y elige **Expandir…**, **Contraer…**, **Suavizar bordes…**, **Borde…** o **Suavizar…**.

Se abre un panel con un valor en la parte inferior del lienzo. Para conservar el
resultado, selecciona **Aplicar** o pulsa **Intro**. **Cancelar** y **Escape**
restauran la selección que tenías.

| Comando | Valor | Rango | Predeterminado |
| --- | --- | --- | --- |
| **Expandir selección…** | **Grow by** | 1–128 px | 5 px |
| **Contraer selección…** | **Shrink by** | 1–128 px | 5 px |
| **Suavizar bordes de selección…** | **Feather radius** | 0.1–100 px | 5 px |
| **Borde de selección…** | **Border width** | 1–128 px | 5 px |
| **Suavizar selección…** | **Smooth radius** | 1–64 px | 5 px |

**Borde de selección…** reemplaza la selección por una franja a lo largo de su
borde. Suavizar rellena las muescas y quita los picos más estrechos que el doble
del radio, pero no mueve los bordes que están sobre el borde del lienzo. Al
expandir y contraer, los bordes suaves siguen suaves.

En la Máscara rápida, estos comandos cambian la máscara.

![El menú Perfeccionar en la barra de selección.](shot:selections/working-refine-menu)

## Transformar contorno de selección

Puedes mover, escalar, girar, inclinar o voltear el contorno de la selección sin
mover ningún píxel.

Haz una de las siguientes acciones:

- Elige **Seleccionar > Transformar contorno de selección**.
- Selecciona **Perfeccionar > Transformar contorno** en la barra de selección.

Aparece el cuadro de transformación con una barra del lienzo con el rótulo
«Transformar contorno». Funciona como [Transformar](/es/docs/transform/move-transform/),
salvo que **Distorsionar**, **Deformar** e **Interpolación** no están disponibles.

## Rellenar y borrar

- **Rellenar selección** rellena los píxeles seleccionados de la capa de pintura activa con el color actual, a la opacidad del pincel.
- **Borrar píxeles seleccionados** borra los píxeles seleccionados de la capa activa. Los bordes suaves se borran en parte.
- **Borrar fuera de la selección** borra los píxeles que quedan fuera de la selección.

Haz una de las siguientes acciones:

- Elige el comando en el menú **Editar**. Los comandos para borrar también están en el menú **Seleccionar**.
- Pulsa **Mayús+Retroceso** para rellenar, o **Supr** o **Retroceso** para borrar los píxeles seleccionados.
- Selecciona **Rellenar**, o **Borrar** y un comando, en la barra de selección.
- En Pintura, selecciona **Rellenar selección** en la barra de comandos.
- Abre el menú de la capa y elige **Selección de píxeles > Rellenar selección**.

No puedes borrar píxeles en la Máscara rápida, en una máscara ni en una capa con
**Bloquear alfa** activado.

## Copiar a una capa nueva

**Copiar selección a una capa nueva** copia los píxeles seleccionados de la capa
de pintura activa a una capa nueva situada justo encima, en el mismo sitio.
**Cortar selección a una capa nueva** además los borra de la capa original.

Haz una de las siguientes acciones:

- Elige **Seleccionar > Copiar selección a una capa nueva** o **Seleccionar > Cortar selección a una capa nueva**.
- Pulsa **Ctrl+J** para copiar o **Ctrl+Mayús+J** para cortar.
- Selecciona **Copiar a capa** en la barra de selección y elige un comando.

La capa nueva recibe el nombre de la original, por ejemplo *Ribbon copia*, y
conserva su opacidad, su visibilidad y su modo de mezcla. La selección se quita
hasta que eliges **Volver a seleccionar**.

Sin selección, **Copiar selección a una capa nueva** duplica las capas
seleccionadas.

## Enmascarar una capa con la selección

Puedes añadir a la capa activa una máscara que muestre solo la selección.

Haz una de las siguientes acciones:

- Abre el menú de la capa y elige **Máscara > Máscara: mostrar selección**, o **Máscara > Máscara: ocultar selección** para ocultar la zona seleccionada.
- Selecciona **Máscara** en la barra de selección.

Si la capa ya tiene máscara, la selección reemplaza la máscara existente. La
selección se quita y la máscara se abre para editarla (consulta
[Máscaras](/es/docs/layers/masks/)).

## Selecciones a partir de capas

Puedes cargar como selección la pintura de una capa, su máscara o una capa de
selección.

Haz una de las siguientes acciones:

- En una capa de pintura, elige un elemento de **Seleccionar > Desde la opacidad de la capa**: **Seleccionar opacidad de la capa**, **Añadir opacidad a la selección**, **Restar opacidad de la selección** o **Intersecar con la opacidad de la capa**.
- En una capa con máscara, elige un elemento de **Seleccionar > Desde la máscara de la capa**: **Cargar máscara como selección**, **Añadir máscara a la selección**, **Restar máscara de la selección** o **Intersecar con la máscara**.
- Abre el menú de la capa y elige los mismos elementos en **Selección de píxeles**.
- Mantén pulsada **Ctrl** y haz clic en la miniatura de la capa en el panel Capas. Añade **Mayús** para sumar a la selección, **Alt** para restar o **Mayús+Alt** para intersecar.

**Seleccionar > Cargar selección** carga [capas de selección](/es/docs/selections/selection-layers/).
