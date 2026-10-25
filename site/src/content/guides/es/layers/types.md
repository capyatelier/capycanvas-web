---
title: "Tipos de capa"
description: "Capas de pintura, objeto, vectoriales, Papel, grupo, relleno, filtro y selección y las reglas de cada una."
related: ["layers/panel", "layers/vector", "layers/paper", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![El panel Capas con una capa de selección, un grupo, una capa de pintura, un filtro, capas de relleno, una capa vectorial y Papel.](shot:layers/types-rows)

## Capa de pintura

Una capa de pintura contiene píxeles en el espacio de color del dibujo. Los pinceles, **Rellenar**, **Degradado** y **Figura** pintan en este tipo de capa.

Elige **Capa > Nuevo > Capa nueva** o selecciona **Capa nueva** al pie del panel Capas. Un dibujo nuevo comienza con **Tinta actual** encima de Papel.

## Capa de objeto

Una capa de objeto conserva el tamaño, la profundidad de bits y el perfil de color de la imagen importada. Al importar una imagen como capa, soltarla en el lienzo o pegarla desde otra aplicación, se crea una capa de objeto.

Puedes mover, escalar y girar una capa de objeto sin remuestrear su origen repetidamente. Elige **Capa > Rasterizar capa** cuando necesites pintar en sus píxeles o usar un comando que requiera una capa de pintura. Rasterizar la convierte al espacio de color, la profundidad de bits y la cuadrícula de píxeles del dibujo.

## Capa vectorial

Una capa vectorial contiene trazados en lugar de píxeles. Elige **Capa > Nuevo > Nueva capa vectorial**, o selecciona **Nueva capa vectorial** al pie del panel Capas. Una insignia de trazado marca su miniatura. Consulta [Capas vectoriales](/es/docs/layers/vector/).

## Papel

Papel proporciona el color de fondo y la textura a la que reaccionan los pinceles con **Intensidad de textura**. Permanece al fondo de la pila de capas y tiene miniaturas de color y textura.

Un dibujo puede contener un Papel. Papel no puede tener una máscara, convertirse en capa de recorte, moverse encima de las capas normales ni combinarse con una capa normal. Consulta [Papel](/es/docs/layers/paper/) para la textura, la iluminación y los demás ajustes.

## Grupo

Un grupo contiene capas en una carpeta plegable. Elige **Capa > Nuevo > Grupo nuevo**, selecciona **Grupo nuevo** debajo de la lista de capas o elige **Capa > Organizar > Agrupar capas seleccionadas**.

Un grupo combina su contenido antes de mezclarse con las capas inferiores, salvo que [Traspasar](/es/docs/layers/settings/) esté activado.

## Capas de relleno

**Color uniforme** y **Relleno degradado** cubren el lienzo con contenido generado. Añade una desde **Capa > Nuevo**, el menú **Filtro > Rellenar** o el panel **Filtros**.

Selecciona la miniatura de Color sólido para abrir **Editar color**. Añade una máscara para pintar el área visible de un relleno. Puedes recortar una capa de relleno, pero no puedes recortar otras capas a ella.

## Capas de filtro

Una capa de filtro cambia las capas inferiores en lugar de contener píxeles. Su fila muestra el icono y el nombre del filtro. Consulta [Cómo se aplican los filtros](/es/docs/filters/how-filters-apply/).

## Capas de selección

Una capa de selección guarda una selección. Selecciona **Nueva capa de selección** debajo de la lista de capas para añadir una. No tiene opacidad, modo de fusión, máscara, recorte ni ajuste de referencia y no se puede combinar.
