---
title: "Filtros y ajustes"
description: "Añade un filtro editable y cambia su configuración cuando quieras."
purpose: "Los filtros cambian el aspecto de las capas debajo de ellos, desde simples ajustes de brillo y color hasta desenfoques y efectos artísticos. Cada filtro tiene su propia capa, por lo que puedes ajustarla, ocultarla o eliminarla más tarde sin tocar la pintura que se encuentra debajo."
techniques: ["Busque y agregue un filtro.", "Cambie su configuración en Propiedades.", "Limite un filtro a parte del dibujo."]
figure: "1: Panel de filtros. 2: La capa de ajuste en Capas. 3: Pestaña Propiedades para editarlo."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1: Panel de filtros. 2: La capa de ajuste en Capas. 3: Pestaña Propiedades para editarlo."}
---

## Añadir un filtro

Seleccione la capa sobre la que debe ubicarse el filtro, luego abra el panel **Filters**. Los filtros se clasifican en grupos como Tono, Color, Desenfoque y Artístico, y puede escribir en el cuadro de búsqueda para encontrar uno por nombre, como **Curves** o **Gaussian Blur**. Elija un filtro para agregarlo como una nueva capa. El menú **Filter** en la parte superior de la ventana enumera los mismos filtros.

En Sketch, el botón **Filters** en la barra de título abre un cajón. Elija un grupo a la izquierda, luego un filtro y su configuración aparecerá a la derecha.

## Cambiar la configuración

Seleccione la capa del filtro y abra **Properties** para ver su configuración. Algunos filtros usan controles deslizantes, mientras que otros usan una curva o un color. Cambie una configuración a la vez y observe el dibujo a medida que avanza. Si desea ver cómo se distribuyen los tonos de la imagen mientras trabaja, abra **View → Histogram…**.

Oculte y muestre la capa de filtro para comparar el resultado con el original, o reduzca su opacidad para que todo el efecto sea más suave. Puede volver a Propiedades en cualquier momento para cambiar la configuración nuevamente.

## Limitar donde se aplica

Un filtro afecta todo lo que está debajo de él en la lista de capas. Para mantenerlo alejado de parte del dibujo, agregue un [mask](/es/docs/layers/masks/) a la capa de filtro, o coloque el filtro dentro de un grupo para que solo afecte a las capas de ese grupo. Mantenga el arte lineal y otros detalles que no desee cambiar encima del filtro.

Cuando utilizas varios filtros, su orden es importante, así que intenta moverlos hacia arriba o hacia abajo si el resultado no es el esperado. Para ver un ejemplo completo con una foto, consulte [Editar una foto](/es/docs/filters/image-editing/).
