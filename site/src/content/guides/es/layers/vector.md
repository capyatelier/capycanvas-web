---
title: "Capas vectoriales"
description: "Capas que contienen trazados en lugar de píxeles, y las plumas, formas y el borrador que actúan sobre ellas."
related: ["layers/paths", "layers/types", "drawing/figure", "layers/merging"]
---

Una capa vectorial contiene trazados en lugar de píxeles. Puedes remodelar sus trazados después de dibujarlos ([Editar trazados](/es/docs/layers/paths/)).

## Crear una capa vectorial

Haz una de las siguientes acciones:

- Selecciona **Nueva capa vectorial** al pie del panel Capas.
- Elige **Capa > Nuevo > Nueva capa vectorial**.
- Pulsa **Ctrl+Alt+Mayús+N**.
- Escribe «arte lineal» en la [búsqueda de comandos](/es/docs/start/command-search/).

Una insignia de trazado marca la miniatura de una capa vectorial.

![El panel Capas con la capa vectorial Line art encima de Current ink y Paper, con una insignia de trazado en su miniatura.](shot:vector/layers-panel)

## Dibujar trazados

Puedes dibujar trazados con **Plumilla G**, cuya anchura sigue la presión del lápiz, y con **Monolínea**, que mantiene una sola anchura. Cada trazo se convierte en un trazado. Un trazo que empieza en el extremo abierto de un trazado seleccionado continúa ese trazado.

Al seleccionar una capa vectorial se pasa a la última pluma que dibujó trazados, al principio Plumilla G. Al volver a seleccionar una capa de pintura, regresa el pincel que tenías.

En una capa vectorial, **Conjunto de herramientas** atenúa los pinceles que no pueden dibujar trazados. Una pluma deja de dibujar trazados si bajas su **Dureza** o su **Intensidad**.

![El aviso sobre el lienzo para un pincel que no puede dibujar trazados, con Usar Plumilla G, Nueva capa de pintura y Rasterizar capa.](shot:vector/refusal-notice)

Un trazo con otro pincel no pinta nada, y un aviso indica el nombre de la capa. Sus acciones son **Usar Plumilla G**, **Nueva capa de pintura** (añade una capa de pintura encima) y **Rasterizar capa**. Cuando un ajuste impide dibujar a la pluma, **Restablecer** con el nombre del ajuste, como **Restablecer Dureza**, sustituye a **Usar Plumilla G**.

## Formas

Con **Figura**, cada **Línea**, **Rectángulo**, **Elipse**, **Polígono**, **Estrella** y **Trazado** se convierte en un trazado, seleccionado y por delante de los demás. Consulta [Figura](/es/docs/drawing/figure/).

## Borrar trazados

Puedes borrar trazados con el **Borrador**, con **Pintura transparente** o con el extremo borrador de un lápiz. Mientras el Borrador está activo en una capa vectorial, aparecen tres modos encima de los pinceles de borrador en **Conjunto de herramientas**. En Boceto, encabezan la columna **Herramientas** del cajón **Borrador**.

![El panel Conjunto de herramientas del Borrador en una capa vectorial, con Borrar la parte tocada, Borrar trazados completos y Borrar hasta la intersección encima del pincel Borrador.](shot:vector/eraser-modes)

- **Borrar la parte tocada** corta un trazado donde lo toca el borrador y deja el resto del trazado sin cambios. Es el modo predeterminado.
- **Borrar trazados completos** elimina todos los trazados que toca el borrador.
- **Borrar hasta la intersección** elimina la parte tocada de un trazado hasta los cruces más cercanos con otros trazados o consigo mismo. Un trazado que no cruza nada se elimina por completo.

Borrar no elimina el área rellena.

## Relleno

**Rellenar** colorea el trazado cerrado en el que haces clic, y **Relleno con lazo** añade un trazado relleno. Consulta [Herramientas de relleno](/es/docs/drawing/fill/).

## Rasterizar capa

Elige **Capa > Rasterizar capa** para convertir una capa vectorial en una capa de pintura que contiene lo que muestran sus trazados.

## Combinar

**Combinar hacia abajo** conserva los trazados cuando una capa vectorial se combina con otra capa vectorial. Cualquier otra combinación convierte los trazados en píxeles tras un aviso. Consulta [Combinar capas](/es/docs/layers/merging/).
