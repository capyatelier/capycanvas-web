---
title: "Paletas"
description: "Guardar colores en paletas y pintar con los colores guardados y recientes en el panel Paletas."
related: ["color/color-panel", "color/edit-color", "color/eyedropper"]
---

Puedes guardar colores en paletas y pintar con ellos desde el panel **Paletas**.
Las paletas y los colores recientes son los mismos en todos los espacios de trabajo.

![El panel Paletas con los colores recientes arriba, las muestras de la paleta activa y, abajo, el nombre de la paleta y el nombre del color.](shot:color/palettes-panel)

## Abrir el panel Paletas

Haz una de las siguientes acciones:

- Elige **Ventana > Paletas**.
- Elige **Panel de paletas** en la búsqueda de comandos.
- En Pintura, selecciona la pestaña **Paletas**, junto a **Color**.
- Selecciona **Color del pincel** al final de la barra de herramientas, o en el extremo derecho de la barra de título en Boceto. En el cajón, Paletas está debajo del panel Color.
- En Windows, Linux y Android, haz clic con el botón derecho o mantén pulsada la muestra de primer plano o de fondo del panel Color y elige **Paletas…**.

## Colores recientes

La fila superior muestra hasta 64 colores que usaste en la imagen, del más reciente
al más antiguo. Selecciona un color reciente para pintar con él. Selecciona
**Expandir historial de colores** (la flecha al final de la fila) para mostrar
hasta cuatro filas.

Un color se añade cuando lo usa un trazo, un relleno, un degradado o una figura.
Tomar un color, borrar, pintar una máscara y usar Mezclar o Licuar no añaden nada.
Deshacer no quita un color reciente.

## Pintar con un color guardado

Selecciona una muestra para pintar con su color, o para definir el color de la
máscara mientras editas una máscara. La muestra que coincide con el color actual
aparece con un contorno.

## Añadir un color

Selecciona **+** después de la última muestra para guardar el color de pintura
actual en la paleta. La muestra conserva el color exacto, con su espacio de color,
su alfa y su intensidad HDR. **+** no está disponible mientras **Pintura
transparente** está seleccionada.

## Nombrar colores

El nombre del color actual está abajo a la derecha del panel, con su código
hexadecimal como vista previa sRGB. Un color con intensidad HDR también muestra la
intensidad, por ejemplo «+1.0 EV». Un color que no está guardado muestra un nombre
sugerido, como «Verde azulado» o «Sombra natural».

Selecciona el nombre para escribir otro y pulsa **Intro** para confirmar o
**Escape** para cancelar. Un color sin guardar recibe el nombre cuando lo guardas
con **+**. En una muestra guardada, el nombre nuevo sustituye al anterior.

Los nombres tienen de 1 a 64 caracteres y son únicos dentro de una paleta.

## Ordenar y quitar colores

Arrastra una muestra para moverla. Suelta fuera de la cuadrícula o pulsa
**Escape** para cancelar el movimiento.

Haz clic con el botón derecho o mantén pulsada una muestra (o pulsa **Mayús+F10**)
para acceder a estos comandos:

- **Rename Color…**
- **Remove Color**
- **Undo Color Reorder** y **Redo Color Reorder**

Mientras el panel tiene el foco, **Ctrl+Z** y **Ctrl+Mayús+Z** (o **Ctrl+Y**)
deshacen y rehacen los cambios de orden. Añadir o quitar una muestra borra el
historial de orden de la paleta.

## Elegir una paleta

Selecciona el nombre de la paleta, abajo a la izquierda del panel, para abrir la
lista de paletas. Escribe en **Buscar una paleta** para filtrar la lista, y
selecciona una paleta para activarla.

![La lista de paletas con el campo de búsqueda, el botón + y el nombre y los colores de cada paleta.](shot:color/palettes-chooser)

## Paletas nuevas

Selecciona **+** en la lista de paletas y elige **New Palette…**. Una paleta que
se queda sin nombre se llama «Paleta nueva».

La biblioteca admite hasta 64 paletas y 4096 colores en total.

## Renombrar y eliminar paletas

Haz clic con el botón derecho o mantén pulsada una paleta en la lista de paletas y
elige **Rename Palette…** o **Remove Palette…**. No puedes eliminar la última paleta.

## Importar y exportar paletas

Para importar un archivo de paleta, selecciona **+** en la lista de paletas y elige
**Import Palette…**. Capy Canvas lee archivos `.capycolor`, `.aco`, `.cls`,
`.swatches`, `.ase`, `.afpalette`, `.gpl`, `.kpl` y `.json` de hasta 1 MB. El
archivo se convierte en una paleta nueva con el nombre guardado en el archivo o con
el nombre del archivo.

Para exportar una paleta, haz clic con el botón derecho o mantenla pulsada en la
lista de paletas, elige **Export Palette** y luego un formato:

- **Capycolor (.capycolor)** conserva los colores exactos, con su espacio de color, su alfa y su intensidad HDR.
- **Clip Studio Paint, Photoshop (.aco)**, **Procreate (.swatches)**, **Affinity, Adobe (.ase)** y **Krita, GIMP (.gpl)** guardan colores sRGB opacos. Los colores fuera de sRGB se recortan. Un archivo de Procreate conserva los 30 primeros colores.

El panel indica cuántos colores se recortaron o se volvieron opacos.

![El menú de la paleta con los formatos de Export Palette.](shot:color/palettes-menu)

## Paletas iniciales

Capy Canvas incluye Estudio del océano, Arcade de píxeles, Fantasía oscura, Arte
pop, Pasteles de caramelo, Impresión riso, Synthwave, Impresión de los setenta,
Xilografía y Tinta. Puedes cambiar las paletas iniciales como cualquier otra
paleta. Una paleta inicial eliminada no vuelve.
