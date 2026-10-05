---
title: "Añadir y editar filtros"
description: "Añadir filtros y cambiar sus ajustes en el panel Propiedades."
related: ["filters/how-filters-apply", "filters/tone", "filters/color", "start/command-search"]
---

Puedes añadir un filtro [en su propia capa o adjunto a una capa](/es/docs/filters/how-filters-apply/)
y cambiar sus ajustes en el panel **Propiedades**.

## Panel Filtros

Puedes añadir un filtro en su propia capa seleccionándolo en el panel **Filtros**.

Haz una de las siguientes acciones:

- Elige **Ventana > Filtros**.
- En Pintura y en Foto, selecciona la pestaña **Filtros**, junto a **Propiedades**, en la columna derecha.
- En Boceto, selecciona **Filtros** en la barra de título.

![El panel Filtros con el menú de categorías, el botón de búsqueda y filas de filtros con vistas previas.](shot:filters/filters-panel)

Mientras hay una capa seleccionada, cada fila muestra una vista previa del filtro
sobre esa capa y las capas de debajo. Los filtros animados tienen una marca
delante de su icono.

El menú de arriba muestra una categoría o **Todos los filtros**. **Buscar filtros**
encuentra un filtro por su nombre dentro de la categoría elegida.

Después de añadir un filtro, el panel **Propiedades** pasa al frente, junto a **Filtros**.

## Menú Filtro

Puedes añadir un filtro en su propia capa desde el menú **Filtro**.

Haz una de las siguientes acciones:

- Elige una categoría y un filtro en el menú **Filtro**.
- En Boceto, elige **Menú principal > Filtro** y después una categoría y un filtro.
- Escribe el nombre del filtro en la [búsqueda de comandos](/es/docs/start/command-search/).

El menú también tiene [**Separación de frecuencias…**](/es/docs/retouch/dodge-burn/),
y su submenú **Relleno** añade [capas de relleno](/es/docs/layers/types/). No se
pueden añadir filtros en la Máscara rápida ni mientras editas una capa de
selección.

## Ajustar

Puedes añadir un filtro con una máscara ajustada a la selección actual.
Selecciona **Ajustar** en la barra de selección del lienzo y después elige una
categoría y un filtro.

![La barra de selección con el menú Ajustar abierto en la categoría Tono.](shot:filters/selection-adjust)

## Añadir filtro

Puedes adjuntar un filtro a la capa seleccionada.

Haz una de las siguientes acciones:

- Selecciona **Añadir filtro** en la parte inferior del panel Capas o del panel **Propiedades**.
- Abre el menú de la capa y elige **Añadir filtro**.

![El menú Añadir filtro abierto desde la parte inferior del panel Capas.](shot:filters/add-filter-menu)

**Añadir filtro** funciona en capas de pintura desbloqueadas, en capas de foto y
en grupos que no tengan Traspasar activado. Su menú tiene todas las categorías
salvo **Relleno**.

## Cajón Filtros de Boceto

En Boceto, puedes elegir filtros y cambiar sus ajustes en el cajón **Filtros**.
Selecciona **Filtros** en la barra de título y después selecciona una categoría
en **Tipo de filtro** y un filtro en **Filtros**.

![El cajón Filtros de Boceto con las columnas Tipo de filtro, Filtros y Propiedades.](shot:filters/sketch-drawer)

| Capa seleccionada | Al seleccionar un filtro en el cajón |
| --- | --- |
| Un filtro | Lo reemplaza y conserva su nombre, máscara, opacidad, modo de mezcla y posición |
| Una capa recortada | Adjunta el filtro a esa capa |
| Cualquier otra capa | Añade el filtro en su propia capa, encima de ella |

**Cancelar**, en la parte inferior de **Tipo de filtro**, elimina el filtro
seleccionado y cierra el cajón. Para conservar el filtro, vuelve a seleccionar
**Filtros** en la barra de título.

## Panel Propiedades

Puedes cambiar los ajustes del filtro seleccionado en el panel **Propiedades**.

Haz una de las siguientes acciones:

- Elige **Ventana > Propiedades**.
- En Pintura y en Foto, selecciona la pestaña **Propiedades** en la columna derecha.
- En Boceto, usa la columna derecha del cajón **Filtros**.

![El panel Propiedades de Curvas con el menú de páginas, Muestrear punto, Ajuste dirigido y el gráfico de la curva.](shot:filters/properties-curves)

| Control | Uso |
| --- | --- |
| Menú de páginas | Muestra una página de los ajustes de un filtro, como la curva **Rojo** de **Curvas**. |
| Deslizador | Arrastra, o selecciona **−** o **+**. Selecciona el valor para escribir un número, una unidad o una expresión como `85/2`. Borra el valor para restaurar el valor predeterminado. |
| Color | Abre [Editar color](/es/docs/color/edit-color/). **Usar color seleccionado** lo cambia al color actual. |
| Degradado | Edita las paradas igual que la herramienta [Degradado](/es/docs/drawing/gradient/). |

Cada arrastre es un paso de deshacer, y **Escape** durante un arrastre restaura
el valor. Algunos ajustes aceptan valores escritos más allá de los extremos del
deslizador.

Los tamaños en px son píxeles del lienzo. Después de
[**Tamaño de imagen…**](/es/docs/transform/image/), el efecto se escala con la
imagen y el número no cambia.

Mientras **Sombras/Iluminaciones**, **Claridad** o **Borrar neblina** se
actualizan, el título del panel termina en «Actualizando…». Los ajustes de un
filtro bloqueado no se pueden cambiar.

## Ajustar tonos a partir de la imagen

**Niveles**, **Curvas** y **Balance de blancos** tienen botones en la parte
superior del panel **Propiedades** que leen la imagen tal como llega al filtro.

| Botón | Filtro | Qué hace |
| --- | --- | --- |
| **Muestrear punto > Elegir punto negro**, **Elegir punto neutro** o **Elegir punto blanco** | **Niveles**, **Curvas** | Haz clic en el lienzo para fijar ese punto. |
| **Elegir punto neutro** | **Balance de blancos** | Haz clic en el lienzo para ajustar **Temperatura** y **Matiz** de modo que el punto quede neutro. |
| **Automático** | **Niveles** | Ajusta **Negro**, **Blanco** y **Tonos medios** de entrada de la página actual a partir de la imagen. Dice **Cancelar** mientras se ejecuta. |
| **Ajuste dirigido** | **Curvas** | Arrastra hacia arriba o hacia abajo en el lienzo para subir o bajar la curva en el tono que hay bajo el puntero. |

En la página **RGB**, los botones cambian todos los canales, y en la página de un
canal, solo ese canal.

Mientras un selector o **Ajuste dirigido** está activado, una barra en la parte
inferior del lienzo muestra una indicación y **Cancelar** o **Listo**. Si un
punto no se puede usar, aparece un mensaje y el selector sigue activado.

## Panel Histograma

Puedes comprobar los tonos de la imagen en el panel **Histograma**.

Haz una de las siguientes acciones:

- Elige **Ventana > Histograma**.
- En Foto, selecciona la pestaña **Histograma** en la parte superior de la columna derecha.

![El panel Histograma con los menús de origen y de canal, el gráfico y los botones de recorte.](shot:filters/histogram)

| Control | Opciones |
| --- | --- |
| Menú de origen (**Visible** al principio) | **Visible**, **Capa seleccionada**, **Referencia** (las capas con **Usar como referencia**), **Selección** (la imagen visible dentro de la selección) |
| Menú de canal (**RGB** al principio) | **RGB**, **Rojo**, **Verde**, **Azul**, **Luminancia** |
| **Recuentos logarítmicos** | Muestra el número de píxeles en escala logarítmica. |
| **Sombras**, **Luces** | Marcan en el lienzo las zonas recortadas. En un dibujo HDR dicen **Sombras (SDR)** y **Luces (SDR)**. |

El estado bajo el gráfico dice «Exacto» cuando el recuento está completo.

## Panel Forma de onda

Puedes ver el brillo y el color de izquierda a derecha a lo largo de la imagen en
el panel **Forma de onda**.

Haz una de las siguientes acciones:

- Elige **Ventana > Forma de onda**.
- En Foto, selecciona la pestaña **Forma de onda**, junto a **Histograma**.

El panel tiene su propio menú de canal y **Recuentos logarítmicos**. El menú de
origen y los botones de recorte se comparten con el panel **Histograma**.
