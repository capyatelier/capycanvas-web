---
title: "Papel"
description: "Color y textura del Papel, papeles importados, escala, iluminación y restricciones de capa."
related: ["layers/types", "layers/panel", "brushes/dry-media", "files/new"]
---

Papel proporciona el color de fondo del dibujo y la textura que usan los pinceles de medios secos.

## Fila de Papel

![Una fila de Papel con sus miniaturas de color y textura.](shot:layers/paper-row)

Papel permanece debajo de las capas normales. Su primera miniatura abre **Editar color** y la miniatura de textura abre **Elegir textura**. Selecciona la fila para editar sus ajustes en **Propiedades**.

Puedes ocultar o eliminar Papel. Si el dibujo no tiene Papel, selecciona **Añadir papel** al pie del panel Capas para restaurarlo.

![Añadir papel debajo de la lista de capas.](shot:layers/add-paper)

Solo puede haber un Papel en un dibujo. Papel no puede tener una máscara, convertirse en capa de recorte, moverse encima de otra capa ni usarse como capa de selección.

## Elegir una textura

Selecciona la miniatura de textura en la fila de Papel o **Elegir textura** en **Propiedades**. Elige un papel y selecciona **Usar textura**.

![Papeles incluidos en Elegir textura.](shot:layers/paper-choose-texture)

La biblioteca incluye superficies Bristol, de dibujo, satinadas, de grano fino, de grano grueso, de lija, verjuradas, washi, de lienzo y de lino. **Importar…** añade una imagen como textura de papel reutilizable. Los papeles importados se incrustan en el dibujo.

Abre el menú de un papel importado para **Cambiar nombre…** o **Eliminar**. Un papel incrustado en un dibujo que falta en la biblioteca muestra **Añadir a la biblioteca** en su lugar.

![El menú de un papel importado.](shot:layers/paper-imported-menu)

## Propiedades

![Controles de Papel en Propiedades.](shot:layers/paper-properties)

### Color

Establece el color del Papel.

### Textura

Abre **Elegir textura**.

### Escala

Establece la escala física de la textura, del 25% al 400%. El lienzo muestra brevemente el relieve de la textura mientras cambias la escala.

### Visibilidad de la textura

Establece cuánto aparece la iluminación de la textura en la imagen terminada. Al 0%, la iluminación de la textura está desactivada.

### Luz

Establece la dirección de la luz sobre la textura del papel.

### Visible a través de la pintura

Establece cuánta iluminación del papel permanece visible sobre la pintura que tiene encima. Al 0%, la pintura opaca en modo Normal cubre la iluminación; al 100%, la iluminación afecta a toda la imagen.

![Las mismas marcas con distintos ajustes de iluminación del papel.](shot:layers/paper-lighting)

Las exportaciones de la aplicación nativa incluyen la iluminación visible del papel. El editor web exporta actualmente sin iluminación del papel. La breve vista previa de la textura que aparece al cambiar **Textura** o **Escala** no se exporta.

## Trazos y geometría

Los trazos nuevos de medios secos usan el Papel más cercano situado en su capa o debajo de ella. Ocultar Papel no impide que su textura afecte a los trazos nuevos. Cambiar la textura o su escala no cambia las marcas ya dibujadas.

Papel usa la resolución de impresión del dibujo para conservar su escala física. **Imagen > Tamaño de imagen…** puede cambiar esa resolución. Cambiar el tamaño o girar la imagen remuestrea Papel con el dibujo; recortar no cambia su escala.
