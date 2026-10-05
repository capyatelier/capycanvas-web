---
title: "Ajustar y exportar"
description: "Etapa 3 del tutorial de edición de fotos: ajustes de tono y color en capas de filtro, y una exportación JPEG."
related: ["filters/how-filters-apply", "filters/tone", "selections/working", "files/export"]
---

En esta etapa se crean capas de filtro de tono y de color encima de la foto, y
un JPEG para la web.

## 1. Añade Curvas

Selecciona *Retouch*. Los filtros que añadas después desde el menú **Filtro** se
colocan justo encima de *Retouch* y cambian tanto *Retouch* como la foto
([Cómo se aplican los filtros](/es/docs/filters/how-filters-apply/)).

Elige **Filtro > Tono > Curvas**. Aparece una capa **Curvas** encima de *Retouch*,
y sus ajustes se abren en el panel **Propiedades**. En la curva **RGB**, añade un
punto en las sombras y arrástralo hacia abajo, y después añade un punto en las
luces y arrástralo hacia arriba ([Filtros de tono](/es/docs/filters/tone/)).

![El panel Propiedades con una curva RGB en forma de S en Curvas.](shot:photo/adjust-curves)

## 2. Añade Intensidad de color

Elige **Filtro > Color > Intensidad de color** y pon **Intensidad de color** en 25
en el panel **Propiedades** ([Filtros de color](/es/docs/filters/color/)). La capa
**Intensidad de color** aparece encima de **Curvas**.

## 3. Selecciona la roca

1. Pulsa **M**, o selecciona **Selección con lazo** en la barra de herramientas, y dibuja alrededor de la roca.
2. Elige **Seleccionar > Suavizar bordes de selección…**, o selecciona **Perfeccionar** en la barra de selección y elige **Suavizar bordes…** ([Trabajar con selecciones](/es/docs/selections/working/)).
3. Pon **Feather radius** en 20 px y selecciona **Aplicar**.

## 4. Aclara las sombras de la roca

Aclarar las sombras de toda la foto volvería gris el fondo negro. El ejemplo
solo las aclara en la roca.

Selecciona **Ajustar** en la barra de selección y elige
**Tono > Sombras/Iluminaciones**. Pon **Sombras** en 35% en el panel
**Propiedades**.

![La barra de selección con el menú Ajustar abierto en la categoría Tono, junto a la selección alrededor de la roca.](shot:photo/adjust-bar)

La selección se convierte en la máscara de la nueva capa
**Sombras/Iluminaciones**. Solo cambia la roca.

## 5. Guarda el dibujo

Elige **Archivo > Guardar**, o pulsa **Ctrl+S**. La primera vez que guardas una
foto abierta, se te pide una carpeta y un nombre, igual que con
**Guardar como…**. El archivo `.capy` conserva la foto original, las capas, las
máscaras y las capas de filtro ([Abrir y guardar](/es/docs/files/open-save/)).

## 6. Exporta un JPEG

1. Elige **Archivo > Exportar…**, o pulsa **Ctrl+Mayús+E**.
2. Deja **Destino** en **Web / Compartir** y pon **Formato** en **Imagen JPEG**.
3. Pon **Tamaño en píxeles** en **Ajustar a los límites**, y deja **Anchura máxima (px)** y **Altura máxima (px)** en 2048.
4. Selecciona **Elegir archivo…** y elige una carpeta y un nombre.

![El diálogo Exportar imagen con Web / Compartir, Imagen JPEG, Calidad 90 y Ajustar a los límites.](shot:photo/export-jpeg)

Exportar no cambia el dibujo
([Exportar imágenes](/es/docs/files/export/)).
