---
title: "Combinar capas"
description: "Unir capas en una sola capa de pintura con los comandos de combinar."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types"]
---

Puedes combinar capas en una sola capa de pintura. Los comandos de combinar
están cerca del final del menú **Capa** y del menú de cada capa.

![El menú Capa con Ribbon activa, que muestra Combinar capas recortadas, Combinar visibles, Crear capa de visibles y Acoplar imagen.](shot:layers/merging-menu)

Cada combinación es un solo paso de deshacer. Una [capa de foto](/es/docs/layers/types/)
pierde su foto original al combinarla. No puedes combinar mientras editas una
capa de selección o la Máscara rápida, ni durante una transformación.

## Combinar hacia abajo

Puedes combinar la capa activa con la capa de debajo.

Haz una de las siguientes acciones:

- Elige **Capa > Combinar hacia abajo**.
- Pulsa **Ctrl+E** (no en el mapa de atajos Estilo GIMP).

La capa combinada toma el nombre, la posición, el recorte y **Bloquear alfa** de
la capa inferior, con opacidad al 100%, modo de mezcla Normal y sin máscara. Es
una referencia si alguna de las dos capas lo era.

Las dos capas tienen que estar visibles, desbloqueadas y en Normal. La capa de
debajo no puede ser un filtro, y no puede estar recortada salvo que la capa
activa también lo esté.

## Combinar capas recortadas

Con una base de recorte activa, **Combinar hacia abajo** pasa a decir
**Combinar capas recortadas**. Combina la base y sus capas recortadas visibles
en una sola capa con el nombre de la base. Las capas recortadas ocultas siguen
recortadas a la capa combinada.

El comando también dice **Combinar capas recortadas** en un filtro recortado, o
en un filtro adjunto a una capa que está recortada o que es base de recorte. La
base tiene que estar visible y en Normal, y al menos una capa recortada tiene
que estar visible.

## Aplicar efecto a la capa inferior

Con un filtro activo, **Combinar hacia abajo** pasa a decir
**Aplicar efecto a la capa inferior**, salvo que el filtro forme parte de una
pila de recorte. Aplica el filtro a la capa de debajo, o a la capa a la que está
adjunto (consulta [Cómo se aplican los filtros](/es/docs/filters/how-filters-apply/)).

## Combinar grupo

Con un grupo activo, **Capa > Combinar grupo** sustituye a **Combinar hacia abajo**.

El grupo se convierte en una sola capa con el modo de mezcla y la opacidad del
grupo. Traspasar pasa a Normal. Se aplica la máscara del grupo, y las capas
ocultas dentro del grupo se descartan.

El grupo tiene que estar visible y desbloqueado, y no puede contener capas de
selección.

## Combinar visibles

Elige **Capa > Combinar visibles** para combinar todas las capas visibles,
incluida **Papel**, en una sola capa. Las capas ocultas se quedan como están.

La capa combinada toma el nombre y la posición de la capa visible más baja
(**Papel**, si está visible). Las capas ocultas que estaban recortadas a una capa
combinada se liberan. Las capas visibles tienen que estar desbloqueadas, y los
grupos que haya entre ellas no pueden contener capas de selección.

## Crear capa de visibles

Elige **Capa > Crear capa de visibles** para añadir una capa nueva arriba del
todo de la lista con todo lo visible combinado en ella. Las demás capas se
mantienen.

La capa nueva se llama «Visible», cubre el lienzo y pasa a ser la capa activa.
Las capas bloqueadas no impiden **Crear capa de visibles**.

## Acoplar imagen

Elige **Capa > Acoplar imagen** para combinar todas las capas visibles en una
sola capa. Las capas ocultas y los píxeles fuera del lienzo se descartan, pero
las capas de selección que están fuera de grupos se mantienen. Las capas
visibles tienen que estar desbloqueadas.

![El aviso sobre el lienzo que dice «Flattening discards 2 hidden layers», con un botón Flatten.](shot:layers/merging-flatten-notice)

Si el dibujo tiene capas ocultas, un aviso sobre el lienzo indica cuántas son,
por ejemplo «Flattening discards 2 hidden layers». No cambia nada hasta que
seleccionas **Flatten** en el aviso.
