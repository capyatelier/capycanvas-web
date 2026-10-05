---
title: "Cómo se aplican los filtros"
description: "Cómo cambian la imagen un filtro en su propia capa y un filtro adjunto a una capa."
related: ["filters/adding", "layers/masks", "layers/merging", "layers/settings"]
---

Un filtro es una capa sin pintura propia. Sus ajustes siguen siendo editables en
el panel **Propiedades**.

![El panel Capas con Curvas y Claridad adjuntos a la foto del terrario, y un filtro Viñeta en su propia capa encima.](shot:filters/layers-chain)

| | Filtro en su propia capa | Filtro adjunto |
| --- | --- | --- |
| Se añade con | El panel **Filtros**, el menú **Filtro**, **Ajustar** en la barra de selección | **Añadir filtro** |
| Cambia | Todas las capas de debajo dentro de su grupo | Solo la capa a la que está adjunto |
| En el panel Capas | Una fila propia | Una fila unida a la fila de debajo por un eslabón |

## Filtro en su propia capa

Un filtro nuevo se coloca encima de la capa seleccionada y de las capas
recortadas o adjuntas a ella. Dentro de un grupo, el filtro solo cambia las
capas de debajo en ese grupo, salvo que el grupo tenga
[Traspasar](/es/docs/layers/settings/) activado.

## Filtro adjunto

Puedes adjuntar filtros a una capa de pintura, a una capa de foto o a un grupo
que no tenga Traspasar activado. Selecciona la capa y después selecciona
**Añadir filtro** en la parte inferior del panel Capas, en el panel
**Propiedades** o en el menú de la capa.

Los filtros adjuntos se aplican desde la parte inferior de la cadena hacia
arriba, después de la máscara de la capa y antes de su opacidad y su modo de
mezcla. En una base de recorte, también cambian dónde se ven las capas
recortadas. Los desenfoques y las distorsiones, como **Desenfoque gaussiano** y
**Remolino**, pueden extender la pintura de la capa más allá de sus bordes.

Al mover, duplicar u ocultar la capa, lo mismo les ocurre a sus filtros
adjuntos. Si eliminas la capa, sus filtros adjuntos se quedan como filtros en
sus propias capas.

## Aplicar a *capa* y Aplicar a las capas inferiores

Puedes cambiar un filtro seleccionado de un tipo al otro.

Haz una de las siguientes acciones:

- Elige **Capa > Ajustes de capa > Aplicar a *capa*** o **Aplicar a las capas inferiores**.
- Selecciona el botón del eslabón en la cabecera del panel Capas, en el lugar de **Recortar a la capa inferior**.
- Arrastra el filtro a la miniatura de una capa para adjuntarlo a esa capa.

![La cabecera del panel Capas con el botón del eslabón de un filtro seleccionado.](shot:filters/attachment-button)

**Aplicar a *capa*** adjunta el filtro a la capa más cercana por debajo.
**Aplicar a las capas inferiores** pone el filtro en su propia capa, encima de
la capa a la que estaba adjunto y de las capas recortadas a esa capa.

El botón no está disponible mientras el filtro o la capa de debajo están
bloqueados. Cuando la capa de debajo no es una capa de pintura, una capa de foto
ni un grupo, su descripción emergente dice «No hay una capa inferior a la que
vincular».

## Selecciones como máscaras de filtro

Si hay una selección activa al añadir un filtro, la selección se convierte en la
[máscara](/es/docs/layers/masks/) del filtro. Un solo **Deshacer** elimina el
filtro y restaura la selección.

## Aplicar efecto a la capa inferior

Puedes combinar un filtro con la capa de debajo como pintura.

Selecciona el filtro y después haz una de las siguientes acciones:

- Elige **Capa > Aplicar efecto a la capa inferior**, o elígelo en el menú de capa del filtro.
- Pulsa **Ctrl+E**.

![El menú de capa de un filtro con Aplicar efecto a la capa inferior.](shot:filters/apply-effect-menu)

Un filtro en su propia capa solo se aplica a la capa que está justo debajo. En
un filtro adjunto, la capa y toda su cadena de filtros se convierten en pintura.
Si esa capa está recortada o tiene capas recortadas a ella, el comando dice
**Combinar capas recortadas** (consulta [Combinar capas](/es/docs/layers/merging/)).

El filtro y la capa de debajo tienen que estar visibles, desbloqueados y en
Normal. El comando no está disponible cuando la capa que está justo debajo es un
filtro adjunto a otra capa.
