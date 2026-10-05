---
title: "Colores base"
description: "Etapa 3 del tutorial de ilustración: una capa de pintura para cada forma, con una máscara ajustada a la forma y rellena con su color base."
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

En esta etapa se crea una capa de pintura para cada forma, rellena con su color
base y con una máscara ajustada a la forma. Los colores base van en capas de
pintura porque una capa de relleno no puede ser base de recorte para el
sombreado de la etapa 4.

## 1. Añade la capa Block

Oculta *Sketch*, selecciona su fila y añade una capa llamada *Block* con
**Capa nueva**. La capa nueva aparece justo encima de *Sketch*, debajo de
*Line art*.

## 2. Ajusta la máscara de la capa al bloque

Pulsa **M**, o selecciona **Selección con lazo** en el grupo **Seleccionar** de la
barra de herramientas, y traza el contorno del bloque en *Line art*. Después
selecciona **Máscara** en la barra de selección
([Trabajar con selecciones](/es/docs/selections/working/)).

![La barra de selección con Máscara, junto a una selección alrededor del bloque.](shot:illustration/mask-selection-bar)

La selección se convierte en la máscara de *Block* ([Máscaras](/es/docs/layers/masks/)).
En la fila aparece una miniatura de máscara, y una barra en la parte inferior del
lienzo dice «Editando máscara de Block».

## 3. Rellena la capa

**Rellenar selección** no está disponible mientras editas una máscara. Para
rellenar la capa:

1. Selecciona la miniatura de la capa en la fila *Block*, o selecciona **Editar contenido** en la barra de la parte inferior del lienzo.
2. Elige terracota en el panel **Color**.
3. Elige **Seleccionar > Seleccionar todos los píxeles**, o pulsa **Ctrl+A**.
4. Elige **Editar > Rellenar selección**, o pulsa **Mayús+Retroceso**.
5. Elige **Seleccionar > Deseleccionar píxeles**, o pulsa **Ctrl+D**.

El color cubre toda la capa, y la máscara solo lo muestra dentro del bloque.

## 4. Añade Disc y Ribbon

Crea *Disc* en ocre y después *Ribbon* en verde azulado, de la misma manera.

![El panel Capas con Ribbon, Disc y Block, cada una con una miniatura de máscara, debajo de Line art.](shot:illustration/mask-layers)

La lista de capas muestra *Line art*, *Ribbon*, *Disc*, *Block*, *Sketch*,
*Color rough* y **Papel**.

## 5. Ajusta un borde

Selecciona la miniatura de la máscara en la fila *Ribbon*. La barra de la parte
inferior del lienzo dice «Editando máscara de Ribbon».

![La barra de la parte inferior del lienzo con el texto Editando máscara de Ribbon, con Invertir, Desactivar, Aplicar máscara y Editar contenido.](shot:illustration/mask-bar)

Pinta a lo largo de un borde con el pincel **Plumilla G** para mostrar más verde
azulado, o usa el **Borrador** para recortar el borde. En una máscara, los
pinceles ignoran el color de pintura.

Siguiente etapa: [Renderizado](/es/docs/illustration/render/).
