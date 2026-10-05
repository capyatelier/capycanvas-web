---
title: "Figura"
description: "Dibujar líneas rectas, rectángulos y elipses con la herramienta Figura."
related: ["drawing/ruler", "drawing/brush-tools", "brushes/basics", "customize/toolbars"]
---

Puedes dibujar líneas rectas, rectángulos y elipses en la capa seleccionada con la
herramienta **Figura**.

## Herramienta Figura

Haz una de las siguientes acciones:

- Pulsa **U**.
- En Pintura, selecciona **Figura** en la barra de herramientas. Haz clic con el botón derecho en el botón o mantenlo pulsado para elegir **Línea**, **Rectángulo** o **Elipse**.
- Busca **Figura** en la búsqueda de comandos, o una forma como **Figura › Rectángulo**.

Boceto y Foto no tienen botón Figura. Puedes añadir uno con **Insertar herramientas…**
([Barras de herramientas y barra de título](/es/docs/customize/toolbars/)).

![El menú del botón Figura en la barra de herramientas de Pintura, con Línea, Rectángulo y Elipse.](shot:drawing/figure-menu)

Arrastra sobre el lienzo para dibujar la figura. Un contorno discontinuo muestra la
forma mientras arrastras, y la pintura aparece al soltar. Mantén pulsada **Mayús**
mientras arrastras para dibujar una línea en pasos de 45°, un cuadrado o un círculo.

- Las figuras solo pintan la imagen de una capa, y solo en capas que un pincel puede pintar ([Herramientas de pincel](/es/docs/drawing/brush-tools/)).
- Una selección activa recorta la figura, y se respeta **Bloquear alfa**.
- Con **Pintura transparente** seleccionada en el panel Color, la figura borra.
- La presión del lápiz no cambia el ancho de una figura.
- Las figuras no siguen las guías.
- Figura no está disponible en la Máscara rápida ni en una capa de selección.
- Cada figura es un paso de deshacer.

## Forma

- **Línea** va desde donde presionas hasta donde sueltas, con extremos redondeados.
- **Rectángulo** tiene sus esquinas en los puntos donde presionas y sueltas, con los lados paralelos a los bordes del lienzo.
- **Elipse** se ajusta al recuadro entre los puntos donde presionas y sueltas.

Elige la forma en la parte superior del panel **Conjunto de herramientas**, en el
menú del botón Figura o en **Herramienta** en la barra Opciones de herramienta.

## Contorno y relleno

- **Contorno** dibuja el borde de la forma con el color actual, centrado sobre el borde.
- **Rellenar** cubre la forma con el color actual.
- **Contorno + relleno** dibuja el contorno con el color de primer plano y rellena el interior con el color de fondo.

Elige el modo bajo las formas en el panel **Conjunto de herramientas**, o en
**Variante** en la barra Opciones de herramienta. Una línea solo se puede dibujar
con **Contorno**.

![El panel Conjunto de herramientas con Línea, Rectángulo y Elipse sobre Contorno, Rellenar y Contorno + relleno.](shot:drawing/figure-tool-set)

## Anchura de línea y Opacidad

**Anchura de línea** y **Opacidad** están en el panel **Herramienta** y en la barra
Opciones de herramienta. Comparten sus valores con el **Tamaño del pincel** y la
**Opacidad** del pincel actual ([Tamaño, opacidad y flujo](/es/docs/brushes/basics/)),
y **[** y **]** cambian Anchura de línea.

### Anchura de línea

Define el ancho del contorno, de 0.5 a 2048 px. No aparece en el modo **Rellenar**.

### Opacidad

Define la intensidad del contorno y del relleno por igual.
