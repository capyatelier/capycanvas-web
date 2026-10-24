---
title: "Combinar capas"
description: "Unir capas en una sola capa con los comandos de combinar, y qué ocurre con las capas vectoriales."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types", "layers/vector"]
---

Puedes combinar capas en una sola capa de pintura, o dos capas vectoriales en una
sola capa vectorial. Los comandos de combinar están cerca del final del menú
**Capa** y del menú de cada capa.

![El menú Capa con Ribbon activa, que muestra Combinar capas recortadas, Combinar visibles, Crear capa de visibles y Acoplar imagen.](shot:layers/merging-menu)

Cada combinación es un paso de deshacer. Una [capa de objeto](/es/docs/layers/types/) se rasteriza al combinarla. No puedes combinar mientras editas una capa de selección o Máscara rápida, ni durante una transformación.

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

## Combinar capas vectoriales

**Combinar hacia abajo** conserva los trazados cuando una
[capa vectorial](/es/docs/layers/vector/) se combina con la capa vectorial de
debajo, y los coloca por delante. Las dos capas necesitan opacidad al 100%, ninguna
máscara, ningún recorte y ningún filtro adjunto.

Cualquier otra combinación que incluya una capa vectorial convierte sus trazados en
píxeles. Un aviso indica los nombres de las capas, por ejemplo «Al combinar, los
trazados de “Line art” se convierten en píxeles.», y la combinación se ejecuta
cuando seleccionas su botón. **Acoplar imagen** añade los nombres a su aviso de
capas ocultas.

![El aviso que dice «Al combinar, los trazados de “Line art” se convierten en píxeles.», con un botón Combinar hacia abajo.](shot:vector/merge-notice)

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

Elige **Capa > Combinar visibles** para combinar las capas normales visibles. Papel permanece como capa de Papel inferior. Las capas ocultas quedan como están.

La capa combinada toma el nombre y la posición de la capa combinada más baja. Las capas ocultas que estaban recortadas a una capa combinada se liberan. Las capas visibles deben estar desbloqueadas y los grupos entre ellas no pueden contener capas de selección.

## Crear capa de visibles

Elige **Capa > Crear capa de visibles** para añadir una capa nueva arriba del
todo de la lista con todo lo visible combinado en ella. Las demás capas se
mantienen.

La capa nueva se llama «Visible», cubre el lienzo y pasa a ser la capa activa.
Las capas bloqueadas no impiden **Crear capa de visibles**.

## Acoplar imagen

Elige **Capa > Acoplar imagen** para combinar las capas normales visibles. Papel permanece como Papel al fondo. Las capas ocultas y los píxeles fuera del lienzo se descartan, pero las capas de selección fuera de los grupos se conservan. Las capas visibles deben estar desbloqueadas.

![El aviso sobre el lienzo que dice «Al acoplar se descartan 2 capas ocultas», con un botón Acoplar imagen.](shot:layers/merging-flatten-notice)

Si el dibujo tiene capas ocultas, un aviso sobre el lienzo indica cuántas son,
por ejemplo «Al acoplar se descartan 2 capas ocultas». No cambia nada hasta que
seleccionas **Acoplar imagen** en el aviso.
