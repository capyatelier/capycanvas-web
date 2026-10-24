---
title: "Copiar y pegar"
description: "Copiar píxeles y pegarlos como capa o dibujo nuevo."
related: ["selections/working", "transform/move-transform", "layers/types", "files/open-save"]
---

Los comandos del portapapeles están en el menú **Editar** y en la búsqueda de comandos.

![Pegado especial en el menú Editar.](shot:transform/clipboard-edit-menu)

## Copiar y cortar

**Copiar** (**Ctrl+C**) copia los píxeles de la capa seleccionada dentro de la selección, sin su opacidad, máscara ni filtros adjuntos. Sin selección, copia la capa dentro del lienzo.

**Cortar** (**Ctrl+X**) copia los mismos píxeles y los borra. No está disponible en una capa bloqueada o con **Bloquear alfa**.

**Copiar combinado** (**Ctrl+Shift+C**) copia el resultado visible dentro de la selección, incluida la iluminación del Papel. Los grupos, las capas de filtro y las capas de selección no tienen píxeles propios.

**Copiar píxeles** funciona como **Copiar** y, en una capa de objeto, copia sus imágenes como píxeles.

## Pegar

**Pegar** (**Ctrl+V**) añade el contenido del portapapeles como una capa nueva y abre tiradores de transformación cuando es necesario colocarlo. Una imagen de otra aplicación se convierte en una [capa de objeto](/es/docs/layers/types/), conservando su origen hasta que la rasterices.

Una copia hecha dentro de {appName} vuelve a la posición copiada cuando esa posición es visible. De lo contrario, se coloca en el centro de la vista.

## Pegado especial

Abre **Editar > Pegado especial** para elegir un destino.

- **Pegar en su posición** añade una capa en la posición copiada sin abrir tiradores de transformación.
- **Pegar en la posición visible** añade una capa en el centro del lienzo visible, con su tamaño original.
- **Pegar en el cursor** añade una capa centrada en el puntero, con su tamaño original.
- **Pegar dentro** añade una capa con la selección activa como máscara y después quita la selección.
- **Pegar como imagen nueva** crea un dibujo nuevo a partir del portapapeles.

Los comandos que requieren una selección, una capa editable o una imagen compatible del portapapeles aparecen atenuados.

![El menú Pegado especial con Pegar en su posición, Pegar en la posición visible, Pegar en el cursor, Pegar dentro y Pegar como imagen nueva.](shot:transform/paste-special)

## Entre aplicaciones

Otras aplicaciones reciben una copia de {appName} como PNG sRGB de 8 bits. Mientras la copia interna permanezca en el portapapeles, otro dibujo de {appName} recibe su precisión original.

En el editor web, una imagen pegada puede tener hasta 512 MiB. Si el navegador no puede pegar imágenes, usa **Archivo > Importar imagen como capa…**.
