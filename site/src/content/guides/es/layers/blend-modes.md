---
title: "Modos de mezcla"
description: "Ajustar el modo de mezcla y la opacidad de una capa, y los modos del menú de modos de mezcla."
related: ["layers/settings", "layers/panel", "color-management/color-spaces", "color-management/hdr"]
---

Puedes elegir cómo se combina una capa con las capas de debajo.

![El menú de modos de mezcla abierto sobre el panel Capas, con Normal marcado.](shot:layers/blend-menu)

## Elegir un modo de mezcla

Haz una de las siguientes acciones:

- Elige **Capa > Modo de mezcla** y un modo.
- Selecciona **Modo de mezcla de la capa**, arriba a la izquierda en la cabecera del panel Capas, y elige un modo.
- Elige un modo en **Modo de mezcla**, en el panel **Propiedades**.
- Escribe el nombre del modo en la [búsqueda de comandos](/es/docs/start/command-search/).

El modo actual tiene una marca de verificación en el menú, y su nombre aparece
en el botón de la cabecera. El subtítulo de la fila muestra el modo cuando no es
Normal. Las capas nuevas usan Normal.

No puedes cambiar el modo de mezcla de una capa de selección ni de una capa
bloqueada. [Combinar hacia abajo](/es/docs/layers/merging/) necesita que las dos
capas estén en Normal. Los modos de mezcla combinan los colores en el espacio de
mezcla del dibujo, que se ajusta con **Editar > Mezcla** (consulta
[Espacio de color, profundidad de bits y mezcla](/es/docs/color-management/color-spaces/)).

## Modos del menú de modos de mezcla

El menú de modos de mezcla agrupa los modos en estas secciones:

- **Traspasar** (solo grupos, consulta [Traspasar](/es/docs/layers/settings/)), **Normal**
- **Oscurecer**, **Multiplicar**, **Subexponer color**, **Subexposición lineal**
- **Aclarar**, **Trama**, **Sobreexponer color**, **Añadir**
- **Superposición**, **Luz suave**, **Luz fuerte**, **Luz intensa**, **Luz lineal**, **Luz focal**, **Mezcla definida**
- **Diferencia**, **Exclusión**, **Restar**, **Dividir**
- **Tono**, **Saturación**, **Color**, **Luminosidad**

## Modos en dibujos HDR

En un [dibujo HDR](/es/docs/color-management/hdr/), el menú de modos de mezcla
no incluye **Superposición**, **Luz suave**, **Luz fuerte**, **Subexponer color**,
**Sobreexponer color**, **Luz intensa**, **Mezcla definida** ni **Exclusión**.
Estos modos solo están definidos para colores entre el negro y el blanco. Una
capa que ya usa uno de ellos lo conserva, y el menú sigue mostrando ese modo
para esa capa.

## Opacidad

Haz una de las siguientes acciones:

- Arrastra **Opacidad de capa** en la cabecera del panel Capas, o escribe un valor de 0 a 100.
- Cambia **Opacidad** en el panel **Propiedades**.
- Escribe «Opacidad de capa» y un valor en la búsqueda de comandos.

El subtítulo de la fila muestra la opacidad cuando es inferior al 100%. No
puedes cambiar la opacidad de una capa de selección ni de una capa bloqueada, ni
mientras la Máscara rápida está activada.
