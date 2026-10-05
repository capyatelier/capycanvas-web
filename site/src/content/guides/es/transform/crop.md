---
title: "Recortar"
description: "Recortar y enderezar el lienzo con la herramienta Recortar."
related: ["transform/image", "selections/working", "drawing/ruler", "photo/crop"]
---

Puedes recortar el lienzo a un marco con la herramienta **Recortar**. Los píxeles
recortados se quedan en sus capas, ocultos, salvo que actives
**Eliminar lo recortado**.

## Recortar el lienzo

Haz una de las siguientes acciones:

- Elige **Editar > Imagen > Recortar**.
- Pulsa **C**.
- En Foto, selecciona **Recortar** en la barra de herramientas.

Aparece un marco con tiradores alrededor de todo el lienzo, o como el marco más
grande de la proporción elegida. El lienzo fuera del marco se atenúa, y la
[barra del lienzo](/es/docs/selections/working/) del recorte aparece en el borde
inferior del lienzo.

- Arrastra dentro del marco para moverlo.
- Arrastra un tirador de esquina o de lado para cambiar el tamaño del marco. Mantén pulsada **Mayús** para conservar sus proporciones, o **Alt** para cambiar el tamaño desde el centro.
- Arrastra el marco más allá del borde del lienzo para añadir lienzo transparente.

En una pantalla táctil, solo los tiradores responden a un dedo. Un dedo dentro
del marco mueve la vista.

Para terminar, selecciona **Aplicar** o pulsa **Intro**. **Cancelar**, **Escape**
y **Deshacer** descartan el recorte. En los dos casos, vuelve la herramienta que
usabas antes.

**Aplicar** también recorta las capas bloqueadas. No puedes empezar un recorte
mientras hay una transformación abierta.

![El marco de recorte sobre la foto del terrario, con la barra del lienzo en el borde inferior.](shot:transform/crop-bar)

## Proporción

Elige **Libre**, **Original**, **1:1**, **4:5**, **2:3**, **5:7** o **16:9** en
**Proporción**, en la barra del lienzo. El marco pasa a ser el marco más grande
de esa proporción. **Libre** es el valor predeterminado.

**Intercambiar orientación de recorte**, el botón de icono junto a
**Proporción**, cambia el marco entre horizontal y vertical.

La proporción, la superposición y **Eliminar lo recortado** se mantienen en el
siguiente recorte.

![El menú Proporción en la barra de recorte.](shot:transform/crop-ratio-menu)

## Ajustar al contenido

**Ajustar al contenido** ajusta el marco, recto, a los límites de los píxeles
visibles, incluidos los que están fuera del lienzo. **Proporción** cambia a
**Libre**.

## Superposición

Elige **Tercios**, **Cuadrícula**, **Diagonal** o **Proporción áurea** en
**Superposición**. **Tercios** es el valor predeterminado. Pulsa **O** mientras
recortas para mostrar la siguiente superposición.

## Enderezar

Selecciona **Enderezar** en la barra del lienzo y después dibuja una línea a lo
largo de algo que debería estar horizontal o vertical. El marco gira para
coincidir con la línea. Mantén pulsada **Mayús** para ajustar la línea a pasos de
15°. En una pantalla táctil, un dedo dibuja la línea mientras **Enderezar** está
seleccionado.

También puedes fijar el ángulo en **Enderezar**, en el panel Herramienta. El
marco gira como máximo 45° en cada sentido.

Al aplicar un recorte girado, las capas de pintura y las máscaras se
remuestrean. Las fotos colocadas conservan sus píxeles originales.

Para enderezar según una guía, selecciona la guía y selecciona **Enderezar** en
su barra del lienzo (consulta [Reglas y guías](/es/docs/drawing/ruler/)). Se abre
un recorte girado para quedar alineado con la guía.

## Eliminar lo recortado

Activa **Eliminar lo recortado** para descartar los píxeles fuera del marco al
aplicar el recorte. Las fotos colocadas conservan sus píxeles originales.
Desactivado de forma predeterminada.

Un recorte que sería demasiado grande si se conservaran los píxeles ocultos solo
funciona con **Eliminar lo recortado** activado.

## Restablecer

**Restablecer** devuelve el marco a todo el lienzo, recto, y desactiva
**Enderezar**. Con una proporción elegida, el marco pasa a ser el marco más grande
de esa proporción.

## Ajustes de recorte en el panel Herramienta

Mientras recortas, el panel Herramienta (y la barra Opciones de herramienta en
Foto) muestra:

- **Tamaño**: **Anchura** y **Altura** del marco, en píxeles. Con una proporción elegida, el otro lado se ajusta solo.
- **Enderezar**: el ángulo del marco, de −45° a 45°.
- Los botones de la barra del lienzo.

![El panel Herramienta mientras recortas, con Anchura, Altura y Enderezar.](shot:transform/crop-tool-panel)

## Recortar lienzo a la selección

Puedes recortar el lienzo a los límites de una selección.

Haz una de las siguientes acciones:

- Elige **Editar > Imagen > Recortar lienzo a la selección**.
- Selecciona **Recortar** en la [barra de selección](/es/docs/selections/working/).

Los píxeles fuera de los límites de la selección se quedan en sus capas,
ocultos. No puedes recortar a una selección invertida.

## Recuperar píxeles recortados

Elige **Editar > Imagen > Mostrar todo** para ampliar el lienzo hasta que muestre
los píxeles de todas las capas, o agranda el lienzo con
**Editar > Imagen > Tamaño del lienzo…** (consulta
[Tamaño y rotación de la imagen](/es/docs/transform/image/)).
