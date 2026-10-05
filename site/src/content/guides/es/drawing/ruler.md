---
title: "Reglas y guías"
description: "Guías que mantienen los trazos del pincel en líneas rectas, y enderezar la imagen según una guía."
related: ["drawing/figure", "transform/crop", "transform/move-transform", "drawing/brush-tools"]
---

Puedes colocar guías en el lienzo que mantienen los trazos del pincel en líneas
rectas. Las guías se guardan en el archivo `.capy` y no aparecen en las imágenes exportadas.

## Herramienta Regla

Haz una de las siguientes acciones:

- Pulsa **Mayús+U**.
- En Pintura, selecciona **Regla** en la barra de herramientas. Haz clic con el botón derecho en el botón o mantenlo pulsado para elegir **Recta**, **Paralela** o **Radial**.
- Busca **Regla** en la búsqueda de comandos.

Boceto y Foto no tienen botón Regla. Puedes añadir uno con **Insertar herramientas…**
([Barras de herramientas y barra de título](/es/docs/customize/toolbars/)).

Arrastra por una parte vacía del lienzo para añadir una guía, o haz clic para
añadir una guía Radial. Mantén pulsada **Mayús** mientras arrastras para girar una
guía Recta o Paralela en pasos de 45°.

Arrastra el tirador de una guía para cambiar su ángulo y su longitud, o arrastra
su línea para mover la guía entera.

- Pulsa **Escape** para cancelar un arrastre.
- Añadir, mover y eliminar una guía son pasos de deshacer.
- Mientras las guías están ocultas, un arrastre añade una guía nueva y vuelve a mostrar todas las guías.
- Recortar, Tamaño de imagen, Tamaño del lienzo, Girar y Voltear mueven las guías junto con la imagen.

## Tipos de guía

![Guías Recta, Paralela y Radial en el lienzo, con líneas discontinuas, tiradores cuadrados y la cruz de la guía radial.](shot:drawing/ruler-guides)

Las guías Recta y Paralela son líneas discontinuas con un cuadrado en cada
tirador. Una guía Radial es un cuadrado con una cruz discontinua. Una guía
seleccionada tiene tiradores más grandes.

Solo los trazos de las herramientas de pincel siguen las guías.

### Recta

Un trazo que empieza a menos de 12 píxeles de pantalla de la línea de la guía
sigue esa línea. La línea se extiende por todo el lienzo.

### Paralela

Cada trazo va en paralelo a la guía desde el punto donde presionas.

### Radial

Los trazos apuntan hacia el centro de la guía. Cada uno sigue la línea que va del
centro al punto donde presionas.

## La guía que sigue un trazo

Una guía Recta cercana tiene prioridad sobre las guías Paralela y Radial. Entre
varias guías Paralela y Radial, gana aquella cuyo primer tirador o centro está más
cerca del inicio del trazo.

## Mostrar guías y ajuste

Puedes ocultar las guías o desactivar el ajuste a ellas.

Haz una de las siguientes acciones:

- Elige **Ver > Mostrar reglas** o **Ver > Ajustar a reglas**.
- Con la herramienta Regla activa, o con una guía seleccionada con Operación, selecciona **Mostrar reglas** o **Ajustar a reglas** en el panel **Herramienta**.
- Selecciona **Guías** o **Ajustar** en la barra de la guía.

Los dos están activados de forma predeterminada. **Ajustar a reglas** no está
disponible mientras las guías están ocultas.

## Eliminar una guía

Selecciona la guía y haz una de las siguientes acciones:

- Pulsa **Supr** o **Retroceso**.
- Selecciona **Eliminar regla** en el panel **Herramienta**.
- Selecciona **Eliminar** en la barra de la guía.

**Supr** y **Retroceso** solo eliminan una guía mientras la herramienta activa es
Regla, Figura, Operación, Transformar o Recortar. Con otras herramientas, estas
teclas ejecutan **Borrar píxeles seleccionados**.

## Barra de la guía

Al seleccionar una guía con la herramienta Regla u Operación, aparece una barra
bajo sus tiradores.

| Botón | Acción |
| --- | --- |
| **Eliminar** | Elimina la guía. |
| **Ajustar** | Activa o desactiva **Ajustar a reglas**. |
| **Guías** | Muestra u oculta todas las guías. Al ocultarlas también se oculta la barra. |
| **Enderezar** | Inicia **Enderezar imagen según la guía**. Solo en una guía Recta. |

Si desactivas **Ver > Mostrar barra de acciones del lienzo**, la barra de la guía
desaparece.

![La barra de la guía bajo una guía Recta seleccionada, con Eliminar, Ajustar, Guías y Enderezar.](shot:drawing/ruler-guide-bar)

## Mover guías con Operación

Con la herramienta [Operación](/es/docs/transform/move-transform/), arrastra el
tirador o la línea de una guía para mover la guía en lugar de la capa. Operación
nunca añade guías.

## Enderezar imagen según la guía

Puedes nivelar la imagen según una guía Recta.

Selecciona una guía Recta y haz una de las siguientes acciones:

- Selecciona **Enderezar** en la barra de la guía.
- Busca **Enderezar imagen según la guía** en la búsqueda de comandos.

La herramienta Recortar se abre con el marco girado para que la guía quede
horizontal o vertical, lo que esté más cerca. Aplica el recorte para girar la
imagen ([Recortar](/es/docs/transform/crop/)).
