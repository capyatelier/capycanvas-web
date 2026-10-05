---
title: "Tamaño y rotación de la imagen"
description: "Los comandos de Editar > Imagen que cambian el tamaño y la orientación de toda la imagen."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Puedes cambiar el tamaño, girar y voltear toda la imagen desde
**Editar > Imagen**. La imagen se queda en su sitio en la pantalla.

Los comandos no están disponibles mientras hay un recorte o una transformación
abiertos, ni mientras editas una máscara, la Máscara rápida o una capa de
selección. Para **Recortar** y **Recortar lienzo a la selección**, consulta
[Recortar](/es/docs/transform/crop/).

![El submenú Imagen del menú Editar.](shot:transform/image-menu)

## Tamaño de imagen…

Puedes escalar toda la imagen o cambiar solo su resolución.

Elige **Editar > Imagen > Tamaño de imagen…**. Las capas de pintura y las
máscaras se remuestrean, y las fotos colocadas conservan sus píxeles originales.
Las selecciones, las guías y los ajustes de filtro medidos en píxeles se escalan
con la imagen.

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

Elige **Editar > Imagen > Tamaño del lienzo…**. Los píxeles fuera de un lienzo
más pequeño se quedan en sus capas, ocultos, y un lienzo más grande vuelve a
mostrarlos.

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

Elige una de estas opciones en **Editar > Imagen**:

- **Girar imagen 90° a la izquierda**
- **Girar imagen 90° a la derecha**
- **Girar imagen 180°**
- **Voltear imagen horizontalmente**
- **Voltear imagen verticalmente**

Toda la imagen gira o se refleja junto con su selección y sus guías. Los píxeles
no se remuestrean. Para girar o reflejar solo la vista, consulta
[Vista del lienzo](/es/docs/start/canvas/).

## Recortar bordes transparentes

Elige **Editar > Imagen > Recortar bordes transparentes** para reducir el lienzo
a los píxeles visibles. Los píxeles fuera del lienzo nuevo se quedan en sus
capas, ocultos.

## Mostrar todo

Elige **Editar > Imagen > Mostrar todo** para ampliar el lienzo hasta que muestre
los píxeles de todas las capas, incluidas las capas ocultas y los píxeles fuera
del lienzo.
