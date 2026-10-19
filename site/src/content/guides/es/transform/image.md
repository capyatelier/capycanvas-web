---
title: "Tamaño y rotación de la imagen"
description: "Los comandos del menú Imagen que cambian el tamaño y la orientación de la imagen completa."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Puedes cambiar el tamaño, girar y voltear la imagen completa desde **Imagen**. La imagen permanece en su sitio en la pantalla.

Los comandos no están disponibles mientras hay un recorte o una transformación
abiertos, ni mientras editas una máscara, la Máscara rápida o una capa de
selección. Para **Recortar** y **Recortar lienzo a la selección**, consulta
[Recortar](/es/docs/transform/crop/).

![El menú Imagen.](shot:transform/image-menu)

## Tamaño de imagen…

Puedes escalar toda la imagen o cambiar solo su resolución.

Elige **Imagen > Tamaño de imagen…**. Las capas de pintura y las máscaras se remuestrean y las capas de objeto conservan sus píxeles de origen. Las selecciones, las guías y los ajustes de filtro medidos en píxeles escalan con la imagen.

Papel se remuestrea con la imagen. Cambiar solo la resolución actualiza su escala física sin remuestrear los píxeles.

![El diálogo Tamaño de imagen.](shot:transform/image-size-dialog)

### Anchura y Altura

Indica el nuevo tamaño en **Píxeles** o **Porcentaje**. Al cambiar la unidad, los
valores se convierten.

### Mantener proporciones

Vincula **Anchura** y **Altura**. Activado de forma predeterminada.

### Resolución

Fija la resolución en píxeles por pulgada. Si solo cambias la resolución, los
píxeles se quedan como están. El campo empieza con la resolución del dibujo, o
con 72 ppp si el dibujo no tiene ninguna.

### Remuestrear

**Automático** (el valor predeterminado) usa Lanczos cuando la imagen se reduce y
Bicúbica cuando se amplía. También puedes elegir **Bicúbica**, **Lanczos**,
**Bilineal** o **Vecino más cercano**.

## Tamaño del lienzo…

Puedes añadir o quitar lienzo alrededor de la imagen sin remuestrear.

Elige **Imagen > Tamaño del lienzo…**. Los píxeles fuera de un lienzo más pequeño permanecen ocultos en sus capas y un lienzo más grande los muestra de nuevo.

![El diálogo Tamaño del lienzo.](shot:transform/canvas-size-dialog)

### Anchura y Altura

Indica el nuevo tamaño en **Píxeles** o **Porcentaje**. Al cambiar la unidad, los
valores se convierten.

### Relativo

Suma los valores que introduces al tamaño actual. Desactivado de forma
predeterminada.

### Anclaje

Elige, en una cuadrícula de 3 × 3, el lado o la esquina de la imagen que se queda
en su sitio. **Centro** es el valor predeterminado.

## Girar y voltear la imagen

Elige una de estas opciones de **Imagen**:

- **Girar imagen 90° a la izquierda**
- **Girar imagen 90° a la derecha**
- **Girar imagen 180°**
- **Voltear imagen horizontalmente**
- **Voltear imagen verticalmente**

Toda la imagen gira o se refleja junto con su selección y sus guías. Los píxeles
no se remuestrean. Para girar o reflejar solo la vista, consulta
[Vista del lienzo](/es/docs/start/canvas/).

## Recortar bordes transparentes

Elige **Imagen > Recortar bordes transparentes** para reducir el lienzo a los píxeles visibles. Los píxeles fuera del lienzo nuevo permanecen ocultos en sus capas.

## Mostrar todo

Elige **Imagen > Mostrar todo** para ampliar el lienzo hasta mostrar los píxeles de todas las capas, incluidas las capas ocultas y los píxeles fuera del lienzo.
