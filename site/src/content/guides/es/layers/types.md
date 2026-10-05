---
title: "Tipos de capa"
description: "Los tipos de capa de un dibujo y las reglas de cada uno."
related: ["layers/panel", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![El panel Capas con una capa de selección, un grupo con Traspasar, un filtro Curvas, una capa Relleno degradado, una capa Color uniforme, la capa de pintura Tinta actual y Papel.](shot:layers/types-rows)

## Capa de pintura

Una capa de pintura contiene píxeles pintados. Los pinceles, **Rellenar**,
**Degradado** y **Figura** solo añaden píxeles a las capas de pintura.

Para añadir una capa de pintura, elige **Capa > Nuevo > Capa nueva** o selecciona
**Capa nueva** en la parte inferior del panel Capas.

Un dibujo nuevo empieza con una capa de pintura vacía, **Tinta actual**, encima
de **Papel**. Solo las capas de pintura tienen **Bloquear alfa**, **Modo de color**,
**Borrar capa completa** y **Aplicar máscara a la capa**.

## Grupo

Un grupo reúne capas en una carpeta que puedes contraer en una sola fila.

Haz una de las siguientes acciones:

- Elige **Capa > Nuevo > Grupo nuevo**.
- Selecciona **Grupo nuevo** en la parte inferior del panel Capas.
- Selecciona varias filas y elige **Capa > Organizar > Agrupar capas seleccionadas**.

Selecciona la miniatura de la carpeta para expandir o contraer el grupo. Una
insignia en la carpeta marca un grupo con [Traspasar](/es/docs/layers/settings/) activado.

Un grupo combina primero sus capas y después mezcla el resultado con las capas
de debajo, salvo que tenga Traspasar activado. Un grupo no tiene píxeles propios.

## Capas de relleno

Una capa de relleno cubre el lienzo con un color (**Color uniforme**) o con un
degradado (**Relleno degradado**).

Haz una de las siguientes acciones:

- Elige **Capa > Nuevo > Relleno de color uniforme** o **Relleno degradado**.
- Elige **Filtro > Relleno > Color uniforme** o **Relleno degradado**.
- Selecciona **Color uniforme** o **Relleno degradado** en la categoría **Relleno** del panel **Filtros**.

La capa de relleno se coloca encima de la capa activa y de las capas recortadas
a ella. Un Color uniforme nuevo usa el color de pintura actual, y un Relleno
degradado nuevo va de negro a blanco. Si hay una selección activa, se convierte
en la máscara de la capa de relleno.

Para cambiar el color de un Color uniforme, selecciona su miniatura para abrir
[Editar color](/es/docs/color/edit-color/), o cambia **Color** en el panel
**Propiedades**. [Degradado](/es/docs/drawing/gradient/) describe los ajustes de
un Relleno degradado.

Para pintar en una capa de relleno, añádele una máscara. Los pinceles pintan la
máscara, no el relleno. Puedes recortar una capa de relleno, pero no puedes
recortar otras capas a ella ni adjuntarle filtros.

## Capas de filtro

Una capa de filtro contiene un filtro en lugar de píxeles. Su fila muestra el
icono y el nombre del filtro. Consulta [Añadir filtros](/es/docs/filters/adding/)
y [Cómo se aplican los filtros](/es/docs/filters/how-filters-apply/).

Con una capa de filtro seleccionada, los pinceles pintan en la capa de debajo o
en la capa a la que está adjunto el filtro. Si el filtro tiene máscara, los
pinceles pintan la máscara.

## Capas de selección

Una capa de selección guarda una selección. Para añadir una, selecciona
**Nueva capa de selección** en la parte inferior del panel Capas.

El botón a la derecha de la miniatura carga la selección guardada. El ojo oculta
o muestra la superposición de la selección en el lienzo. Una capa de selección
no tiene opacidad, modo de mezcla, máscara, recorte ni ajuste de referencia, y
no se puede combinar. [Capas de selección](/es/docs/selections/selection-layers/)
explica cómo editar la selección guardada.

## Papel

**Papel** es una capa de relleno **Color uniforme** blanca en la parte inferior
de un dibujo nuevo. Puedes cambiar el color de **Papel**, ocultarla o eliminarla
como cualquier otra capa de relleno.

**Papel** empieza oculta cuando **Fondo** está en **Transparente** en el diálogo
[Dibujo nuevo](/es/docs/files/new/), y también en una foto que abres.

## Capas de foto

Una capa de foto es una capa de pintura que conserva la foto original con su
propio tamaño, profundidad de bits y perfil de color. Lo que pintas y borras se
guarda encima de la foto.

Para añadir una capa de foto, haz una de las siguientes acciones:

- Elige **Archivo > Abrir…** y selecciona una foto.
- Elige **Archivo > Importar imagen como capa…**.
- Suelta un archivo de imagen en el lienzo.

Mientras se conserva el original, **Capa > Ajustes de capa** muestra estos comandos:

- **Volver a la foto original** descarta lo pintado, lo borrado y las máscaras aplicadas. La posición, la máscara, la opacidad y el modo de mezcla se mantienen, y **Modo de color** vuelve a **Color completo**.
- **Rasterizar original…** convierte el original al espacio de color y la profundidad de bits del dibujo, a tamaño completo. Después, **Volver a la foto original** deja de estar disponible.
- **Reparar perfil del original…** cambia el perfil con el que se lee el original: **sRGB**, **Display P3**, **Adobe RGB (1998)** o **ProPhoto RGB**. Si la capa tiene pintura, **Añadir original corregido** añade en su lugar la foto corregida como capa nueva.

**Volver a la foto original** y **Rasterizar original…** también están en el
menú **Editar**. **Borrar capa completa** también descarta la foto original.
