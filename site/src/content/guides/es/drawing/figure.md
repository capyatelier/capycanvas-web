---
title: "Figura"
description: "Dibujar líneas, rectángulos, elipses, polígonos, estrellas y trazados con la herramienta Figura."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

Puedes dibujar líneas, rectángulos, elipses, polígonos, estrellas y trazados en la
capa seleccionada con la herramienta **Figura**. En una
[capa vectorial](/es/docs/layers/vector/), cada figura se convierte en un trazado que
puedes editar. En una capa de pintura, pinta píxeles.

## Herramienta Figura

Haz una de las siguientes acciones:

- Pulsa **U**.
- En Pintura, selecciona **Figura** en la barra de herramientas. Haz clic con el botón derecho en el botón o mantenlo pulsado para elegir **Línea**, **Rectángulo**, **Elipse**, **Polígono**, **Estrella** o **Trazado**.
- Busca **Figura** en la búsqueda de comandos, o una forma como **Figura › Rectángulo**.

Boceto y Foto no tienen botón Figura. Puedes añadir uno con **Insertar herramientas…**
([Barras de herramientas y barra de título](/es/docs/customize/toolbars/)).

![El menú del botón Figura en la barra de herramientas de Pintura, con Línea, Rectángulo, Elipse, Polígono, Estrella y Trazado.](shot:drawing/figure-menu)

Arrastra sobre el lienzo para dibujar cualquier figura salvo **Trazado**. Un
contorno discontinuo muestra la forma mientras arrastras, y la figura aparece al
soltar. Mantén pulsada **Mayús** mientras arrastras para dibujar una línea en pasos
de 45°, un cuadrado, un círculo, o un polígono o una estrella regulares.

- Las figuras solo dibujan la imagen de una capa, en capas vectoriales y en capas que un pincel puede pintar ([Herramientas de pincel](/es/docs/drawing/brush-tools/)).
- Se respeta **Bloquear alfa**.
- En una capa de pintura, una selección activa recorta **Línea**, **Rectángulo** y **Elipse**. No recorta **Polígono**, **Estrella**, **Trazado** ni un rectángulo con esquinas redondeadas.
- Con **Pintura transparente** seleccionada en el panel Color, **Línea**, **Rectángulo** y **Elipse** borran en una capa de pintura. Cualquier otra figura muestra un aviso que pide un color.
- La presión del lápiz no cambia el ancho de una figura.
- Las figuras no siguen las guías.
- Figura no está disponible en la Máscara rápida ni en una capa de selección.
- Cada figura es un paso de deshacer.

## Forma

- **Línea** va desde donde presionas hasta donde sueltas, con extremos redondeados.
- **Rectángulo** tiene sus esquinas en los puntos donde presionas y sueltas, con los lados paralelos a los bordes del lienzo.
- **Elipse** se ajusta al recuadro entre los puntos donde presionas y sueltas.
- **Polígono** y **Estrella** se ajustan al recuadro, con la primera esquina o punta arriba.
- **Trazado** se dibuja anclaje a anclaje.

Elige la forma en la parte superior del panel **Conjunto de herramientas**, en el
menú del botón Figura o en **Herramienta** en la barra Opciones de herramienta.

## Contorno y relleno

- **Contorno** dibuja el borde de la forma con el color actual, centrado sobre el borde.
- **Rellenar** cubre la forma con el color actual.
- **Contorno + relleno** dibuja el contorno con el color de primer plano y rellena el interior con el color de fondo.

Elige el modo bajo las formas en el panel **Conjunto de herramientas**, o en
**Variante** en la barra Opciones de herramienta. Una línea solo se puede dibujar
con **Contorno**.

![El panel Conjunto de herramientas con Línea, Rectángulo, Elipse, Polígono, Estrella y Trazado sobre Contorno, Rellenar y Contorno + relleno.](shot:drawing/figure-tool-set)

## Ajustes de la forma

![El panel Herramienta de Estrella, con Anchura de línea, Opacidad, Puntas y Radio interior.](shot:vector/figure-settings)

**Radio de las esquinas**, **Esquinas**, **Puntas** y **Radio interior** están en el
panel **Herramienta** y en la barra Opciones de herramienta, para la forma a la que
pertenecen.

### Radio de las esquinas

Redondea las esquinas de un **Rectángulo**, de 0 a 4096 px.

### Esquinas

Define el número de esquinas de un **Polígono**, de 3 a 100. El valor predeterminado es 5.

### Puntas

Define el número de puntas de una **Estrella**, de 3 a 100. El valor predeterminado es 5.

### Radio interior

Define a qué distancia del centro están las esquinas interiores de una **Estrella**, como porcentaje del radio exterior, del 5% al 100%. El valor predeterminado es 50%.

## Trazado

Puedes dibujar un trazado anclaje a anclaje.

- Haz clic para añadir un anclaje de esquina. Pulsa y arrastra para sacar tiradores y crear un anclaje suave, o mantén pulsada **Alt** para arrastrar solo el tirador de salida.
- Mantén pulsada **Mayús** para colocar el siguiente anclaje en pasos de 45° desde el último.
- Haz clic en el primer anclaje para cerrar el trazado.
- Selecciona **Finalizar** en la barra del lienzo o pulsa **Intro** para añadir el trazado. **Cancelar** o **Escape** lo descarta.
- **Eliminar punto** o **Retroceso** quita el último anclaje, y **Deshacer** también.

![La barra del lienzo mientras se dibuja un trazado, con Eliminar punto, Cancelar y Finalizar.](shot:vector/path-bar)

El trazado usa el modo, la **Anchura de línea** y los colores actuales, con esquinas agudas y extremos planos. En una capa vectorial queda seleccionado al finalizar, y un trazado que empieza en el extremo abierto de un trazado seleccionado lo continúa.

## Anchura de línea y Opacidad

**Anchura de línea** y **Opacidad** están en el panel **Herramienta** y la barra Opciones de herramienta. Comparten sus valores con **Tamaño del pincel** y **Opacidad** del pincel actual ([Tamaño, intensidad y opacidad](/es/docs/brushes/basics/)), y **[** y **]** cambian la anchura de línea.

### Anchura de línea

Define el ancho del contorno, de 0.5 a 2048 px. No aparece en el modo **Rellenar**. En una capa vectorial, **Grosor del contorno** en [Propiedades](/es/docs/layers/paths/) lo cambia después.

### Opacidad

Define la intensidad del contorno y del relleno por igual.
