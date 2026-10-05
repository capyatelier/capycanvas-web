---
title: "Máscaras"
description: "Ocultar partes de una capa con una máscara, y todos los comandos que cambian una máscara."
related: ["layers/panel", "selections/working", "filters/how-filters-apply", "layers/merging"]
---

Puedes ocultar partes de una capa con una máscara. Las zonas pintadas en la
máscara muestran la capa, y las zonas vacías la ocultan. Las capas de pintura,
las capas de foto, los grupos, las capas de relleno y los filtros pueden tener
máscara.

## Añadir una máscara

Haz una de las siguientes acciones:

- Elige **Capa > Máscara > Añadir máscara**.
- Selecciona **Añadir máscara** en la parte inferior del panel Capas.

![La fila de Ribbon, con un contorno alrededor de la miniatura de su máscara.](shot:layers/masks-row)

La miniatura de la máscara aparece a la derecha de la miniatura de la capa, con
un contorno que la marca como destino de los pinceles. Una máscara nueva muestra
toda la capa. Si hay una selección activa, la máscara muestra solo la zona
seleccionada, y la selección desaparece.

Si la capa ya tiene máscara, **Añadir máscara** la selecciona para pintar en
ella. No puedes añadir una máscara a una capa de selección ni a una capa
bloqueada.

## Pintar en una máscara

Selecciona la miniatura de la máscara para pintar en la máscara. Para volver a
pintar en la capa, selecciona la miniatura de la capa o pulsa **Escape**.

> **Nota:** En una máscara, los pinceles ignoran el color de pintura. Los pinceles muestran la capa, y el **Borrador** la oculta.

En una máscara invertida, los pinceles y el **Borrador** intercambian sus
papeles. Los trazos en la máscara son secos, sin mezcla, sangrado ni textura.

## Barra de edición de máscara

Mientras pintas en una máscara, aparece en la parte inferior del lienzo una barra
con el texto «Editando máscara de *capa*».

![La barra de edición de máscara con Invertir, Desactivar, Aplicar máscara, Más y Editar contenido.](shot:layers/masks-bar)

- **Invertir**
- **Desactivar** desactiva la máscara, y el botón pasa a decir **Activar**.
- **Aplicar máscara** borra los píxeles que oculta la máscara y después elimina la máscara.
- **Más** contiene el menú **Capa** y **Mostrar barra de acciones del lienzo**. Desactiva **Mostrar barra de acciones del lienzo** para ocultar la barra.
- **Editar contenido** vuelve a pintar en la capa.

## Máscaras a partir de selecciones

Puedes crear una máscara a partir de la selección actual.

Haz una de las siguientes acciones:

- Elige **Capa > Máscara > Máscara: mostrar selección** o **Máscara: ocultar selección**. En una capa con máscara, los elementos dicen **Reemplazar máscara: mostrar selección** y **Reemplazar máscara: ocultar selección**.
- Selecciona **Máscara** en la [barra de selección](/es/docs/selections/working/) del lienzo. La máscara nueva muestra la zona seleccionada y reemplaza la máscara que tuviera la capa.

Una capa de filtro o de relleno añadida con una selección activa recibe una
máscara a partir de la selección. **Pegar dentro** crea una capa nueva con una
máscara ajustada a la selección (consulta [Copiar y pegar](/es/docs/transform/clipboard/)).

## Selecciones a partir de máscaras

Puedes cargar una máscara como selección.

Haz una de las siguientes acciones:

- Elige **Seleccionar > Desde la máscara de la capa** y **Cargar máscara como selección**, **Añadir máscara a la selección**, **Restar máscara de la selección** o **Intersecar con la máscara**.
- Elige los mismos elementos en **Selección de píxeles**, en el menú de máscara.
- Haz **Ctrl**+clic en la miniatura de la máscara. Añade **Mayús** para sumar a la selección, **Alt** para restar de ella o **Mayús+Alt** para intersecar con ella.

## Menú de máscara

Haz una de las siguientes acciones:

- Elige **Capa > Máscara** (el primer elemento dice **Editar máscara**).
- Haz clic con el botón derecho en la miniatura de la máscara, o mantenla pulsada.
- Mientras pintas en la máscara, abre el menú **Capa** o selecciona **Acciones de capa** en la parte inferior del panel Capas.

En una capa sin máscara, **Capa > Máscara** solo tiene **Añadir máscara**,
**Máscara: mostrar selección**, **Máscara: ocultar selección** y **Pegar máscara**.

![El menú de máscara de Ribbon.](shot:layers/masks-menu)

| Elemento | Qué hace |
| --- | --- |
| **Editar contenido de la capa** | Vuelve a pintar en la capa. |
| **Mostrar área de máscara** | Muestra la máscara en el lienzo y la selecciona para pintar en ella. |
| **Activar máscara** | Activa o desactiva la máscara sin cambiarla. Una máscara desactivada tiene la miniatura atenuada. |
| **Vincular máscara a la capa** | Activado, la máscara se mueve con la capa. Desactivado, **Mover capa / máscara** mueve la capa o la máscara, según en cuál pintes. El botón de vínculo entre las miniaturas hace lo mismo. |
| **Reemplazar máscara: mostrar selección**, **Reemplazar máscara: ocultar selección** | Reemplaza la máscara por la selección. |
| **Copiar máscara** | Copia la máscara, para usar **Reemplazar con la máscara copiada** en otra capa, o **Pegar máscara** en una capa sin máscara. |
| **Invertir máscara** | Intercambia las zonas visibles y las ocultas. |
| **Mostrar todo**, **Ocultar todo** | Hace que la máscara muestre u oculte toda la capa, y desactiva la inversión. |
| **Aplicar máscara a la capa** | Borra los píxeles que oculta la máscara y después elimina la máscara. |
| **Eliminar máscara** | Elimina la máscara. Los píxeles de la capa no cambian. |
| **Selección de píxeles** | Carga la máscara como selección. |

Todos los elementos salvo **Editar contenido de la capa**, **Mostrar área de máscara**
y **Copiar máscara** necesitan una capa desbloqueada.

## Aplicar una máscara

Haz una de las siguientes acciones:

- Elige **Capa > Máscara > Aplicar máscara a la capa**.
- Selecciona **Aplicar máscara** en la barra de edición de máscara.

**Aplicar máscara a la capa** solo funciona en capas de pintura, y la máscara
tiene que estar activada. En una capa distorsionada o deformada, elige antes
**Aplicar transformación a píxeles**. Para aplicar la máscara de un grupo, usa
**Combinar grupo** (consulta [Combinar capas](/es/docs/layers/merging/)).

En una capa de foto, **Volver a la foto original** recupera lo que borró una
máscara aplicada.

## Máscaras en capas de filtro y de relleno

La máscara de un filtro determina dónde se aplica el filtro. Con una capa de
filtro o de relleno seleccionada, los pinceles siempre pintan su máscara.
**Rellenar**, **Degradado** y las demás herramientas que dibujan en la imagen no
funcionan en la máscara de un filtro. Para pintar en una capa de relleno hace falta una
máscara.
