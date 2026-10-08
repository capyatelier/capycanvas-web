---
title: "Copiar y pegar"
description: "Copiar píxeles y pegarlos como capas nuevas, dentro de {appName} y entre aplicaciones."
related: ["selections/working", "transform/move-transform", "layers/working", "files/open-save"]
---

Puedes copiar píxeles de una capa o de la imagen visible y pegarlos como una capa
nueva. Los comandos están en el menú **Editar** y en la búsqueda de comandos.

![Los comandos del portapapeles en el menú Editar.](shot:transform/clipboard-edit-menu)

| Comando | Tecla |
| --- | --- |
| **Cortar** | **Ctrl+X** |
| **Copiar** | **Ctrl+C** |
| **Copiar combinado** | **Ctrl+Mayús+C** |
| **Pegar** | **Ctrl+V** |
| **Pegar en su posición** | **Ctrl+Mayús+V** |
| **Pegar dentro** | |

**Copiar**, en la [barra de selección](/es/docs/selections/working/), contiene
**Copiar**, **Copiar combinado** y **Cortar**.

## Copiar

Copia los píxeles propios de la capa activa que están dentro de la selección,
sin la opacidad, la máscara ni los filtros adjuntos de la capa. Sin selección,
copia toda la capa dentro del lienzo.

## Cortar

Copia igual que **Copiar** y después borra de la capa los píxeles seleccionados.
No puedes cortar de una capa con **Bloquear alfa** activado.

## Copiar combinado

Copia la imagen visible dentro de la selección, tal como aparece en una
exportación.

## Lo que no se puede copiar

Los grupos, las capas de filtro y las capas de selección no tienen píxeles
propios. Para copiar de un grupo, selecciona una capa dentro de él. No puedes
copiar la imagen en la Máscara rápida, y **Copiar** y **Cortar** no están
disponibles mientras editas una máscara.

Una copia grande muestra un aviso de progreso con **Cancelar**.

## Pegar

Añade el portapapeles como una capa nueva activa.

- Una copia de {appName} aparece donde se copió si ese sitio está a la vista, o en el centro de la vista si no lo está.
- Una imagen de otra aplicación se abre en el cuadro de transformación. **Aplicar** coloca la imagen y **Cancelar** descarta el pegado (consulta [Mover y transformar](/es/docs/transform/move-transform/)).

## Pegar en su posición

Añade el portapapeles como una capa nueva en el sitio de donde se copió, sin
cuadro de transformación. Una imagen de otra aplicación aparece en el centro de
la vista a tamaño completo.

## Pegar dentro

Funciona igual que **Pegar en su posición** y da a la capa nueva una
[máscara](/es/docs/layers/masks/) que muestra solo la selección. Después, la
selección se quita. **Pegar dentro** necesita una selección.

## Pegar entre aplicaciones

Las demás aplicaciones reciben una copia de {appName} como imagen PNG sRGB de
8 bits. Al volver a pegar en {appName}, se usa la copia con toda su
profundidad de bits mientras siga en el portapapeles.

Una copia pegada en un dibujo con otros ajustes de color pasa a ser una
[capa de foto](/es/docs/layers/types/), convertida desde su propio perfil de
color.

Mientras escribes en un campo de texto, las teclas del portapapeles cortan,
copian y pegan texto.

En el editor web, una imagen pegada puede ocupar hasta 512 MiB. En un navegador
que no puede pegar imágenes, elige **Archivo > Importar imagen como capa…** en
su lugar.
