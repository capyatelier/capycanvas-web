---
title: "Tamaño, opacidad y flujo"
description: "Tamaño del pincel, Opacidad y Flujo, y los paneles, barras y teclas donde se cambian los ajustes del pincel."
related: ["brushes/tip-texture", "brushes/reset", "drawing/brush-tools", "input/keyboard"]
---

Cada cambio en un ajuste del pincel se guarda con el ajuste preestablecido del
pincel ([Guardar y restablecer pinceles](/es/docs/brushes/reset/)).

## Panel Herramienta

Puedes cambiar todos los ajustes del pincel actual en el panel **Herramienta**.

Haz una de las siguientes acciones:

- Elige **Ventana > Herramienta**.
- En Pintura, selecciona la pestaña **Herramienta** en la columna izquierda.
- En Foto, selecciona **Herramienta** en la tira de iconos de la derecha.
- Vuelve a seleccionar el botón de la herramienta activa. **Herramienta** es la última columna del cajón.

Cada ajuste tiene un valor, los botones **−** y **+** y un deslizador. Selecciona
el valor para escribir un número. Solo aparecen los ajustes que usa el pincel,
agrupados bajo encabezados como **Punta** y **Textura**
([Punta y textura](/es/docs/brushes/tip-texture/)).

![El panel Herramienta para Lápiz con Tamaño del pincel, Opacidad y Flujo sobre los grupos Punta y Textura.](shot:brushes/tool-panel)

### Tamaño del pincel

Define el diámetro del pincel, de 0.5 a 2048 px.

### Opacidad

Define la intensidad de cada toque del trazo. Ningún pincel integrado cambia la
Opacidad con la presión del lápiz.

### Flujo

Define cuánta pintura deposita cada toque, medida a presión máxima en los pinceles
en los que la presión cambia el flujo. Los pinceles húmedos y de mezcla también
usan Flujo para la fuerza con la que cada toque se mezcla con la pintura de la capa.

Los pinceles de Licuar no tienen Flujo.

## Acumulación dentro de un trazo

Donde un trazo se cruza consigo mismo, estos pinceles se quedan en la intensidad
de su toque más fuerte: los ajustes preestablecidos del grupo **Pluma**,
**Marcador**, **Lápiz de sombreado**, **Pincel de pintura**, **Pincel de cerdas**,
**Pincel plano con textura**, **Restregado en seco**, **Bloque de pastel**,
**Veladura transparente**, **Aguada de acuarela** y **Acuarela húmeda**. Los demás
pinceles acumulan pintura donde se superponen sus toques.

El ajuste **Mezcla** del dibujo controla cómo se acumulan los toques
([Espacio de color, profundidad de bits y mezcla](/es/docs/color-management/color-spaces/)).

## Panel Tamaño del pincel

Puedes elegir un tamaño en una cuadrícula en el panel **Tamaño del pincel**.

Haz una de las siguientes acciones:

- Elige **Ventana > Tamaño del pincel**.
- En Pintura, selecciona la pestaña **Tamaño del pincel**, junto a **Herramienta**, en la columna izquierda.
- En Foto, selecciona **Tamaño del pincel** en la tira de iconos de la derecha.

Cada botón muestra un punto y un tamaño en píxeles. El botón del tamaño actual
aparece pulsado.

Con **Pintar selección** activa, el panel define el tamaño del pincel de
selección. Puedes asignar una tecla a cada tamaño en **Tamaños de pincel**, en la
página Atajos de teclado.

![El panel Tamaño del pincel con su cuadrícula de botones de tamaño.](shot:brushes/brush-size-panel)

## Barra Opciones de herramienta

Puedes cambiar los ajustes de la herramienta actual en una sola fila con la barra
**Opciones de herramienta**. Foto la tiene al final de la barra superior. En otros
espacios de trabajo, añádela a una barra de herramientas con **Insertar herramientas…**
([Barras de herramientas y barra de título](/es/docs/customize/toolbars/)).

Los menús **Herramienta** y **Variante** van primero cuando la herramienta tiene
opciones, luego **Mezcla de colores** en los pinceles que mezclan pintura, y
después los ajustes numéricos. Los ajustes que no caben están en **Más opciones de
herramienta**.

- Haz doble clic (o toca dos veces) en la etiqueta o el icono de un ajuste para devolverlo al valor integrado del pincel.
- Desplázate con la rueda sobre un valor para cambiarlo paso a paso. Con un dedo, arrastra hacia arriba o hacia abajo sobre el valor.
- Haz clic con el botón derecho en la barra o mantenla pulsada para elegir **Horizontal: texto**, **Horizontal: iconos** o **Mostrar deslizadores**.

![La barra Opciones de herramienta en Foto para Pincel de pintura, con Variante y los ajustes numéricos.](shot:brushes/tool-options-bar)

## Deslizadores en Boceto

Puedes definir el tamaño y la opacidad del pincel con los dos deslizadores de la
barra del borde izquierdo en Boceto.

- Toca o haz clic en la pista para establecer un valor. Una vista previa muestra la punta a su tamaño real en píxeles, o con la opacidad elegida.
- Arrastra a lo largo de la pista para cambiar el valor. La vista previa se cierra al levantar el dedo o el lápiz.
- Toca el extremo del deslizador para ver la vista previa sin cambiar el valor.

Selecciona **+** (**Marcar este valor**) en la vista previa para marcar el valor en
la pista, o **−** (**Quitar marcador**) para quitar la marca. Un toque cerca de una
marca establece ese valor exacto. Cada ajuste preestablecido de pincel conserva sus
propios marcadores.

Un deslizador aparece atenuado cuando la herramienta actual no tiene tamaño u
opacidad. Puedes añadir el **Deslizador de tamaño de pincel** y el **Deslizador de
opacidad de pincel** a cualquier barra de herramientas con **Insertar herramientas…**.

![La barra del borde izquierdo en Boceto con la vista previa del tamaño abierta junto al Deslizador de tamaño de pincel.](shot:brushes/sketch-size-slider)

## Teclas

| Tecla | Acción |
| --- | --- |
| **[** | **Reducir tamaño del pincel** en 1 px. Mantén pulsada para repetir. |
| **]** | **Aumentar tamaño del pincel** en 1 px. Mantén pulsada para repetir. |
| Ninguna | **Reducir opacidad del pincel** y **Aumentar opacidad del pincel** en 1%. |

Puedes asignar teclas a estas acciones en **Pintura**, en la página
[Atajos de teclado](/es/docs/input/keyboard/).

## Escribir un valor

Busca el nombre de un ajuste, como **Flujo…**, y escribe el valor nuevo
([Búsqueda de comandos](/es/docs/start/command-search/)).
