---
title: "Máscara rápida"
description: "Editar una selección como una máscara pintada en la Máscara rápida."
related: ["selections/working", "selections/selection-layers", "selections/tonal-range", "layers/masks"]
---

Puedes editar una selección como una máscara pintada en la Máscara rápida.

## Entrar en la Máscara rápida

Haz una de las siguientes acciones:

- Elige **Seleccionar > Máscara rápida**.
- Pulsa **Q**.
- Selecciona **Máscara rápida** en la [barra de selección](/es/docs/selections/working/).

La selección actual se convierte en la máscara. Sin selección, la máscara empieza
vacía. La herramienta cambia al pincel actual, salvo cuando **Rango tonal** está
activo.

No puedes entrar en la Máscara rápida mientras hay una transformación abierta.

## Qué muestra la Máscara rápida

Una superposición, roja al 50% de forma predeterminada, marca la máscara en el
lienzo. En el modo **Pintar selección** cubre la zona seleccionada, y en el modo
**Máscara en escala de grises**, la zona fuera de la selección.

En la parte superior del panel Capas aparece una fila llamada **Máscara rápida**,
seleccionada. Su botón de ojo muestra u oculta la superposición, igual que
**Mostrar superposición de máscara** en la búsqueda de comandos. El panel Color
muestra los colores de la máscara en lugar de los colores del dibujo.

![La foto del terrario en la Máscara rápida, con la superposición sobre las luces.](shot:selections/quick-mask-overlay)

## Pintar la máscara

Pinta con una pluma, un lápiz, un aerógrafo o un borrador para cambiar la
máscara. Los demás pinceles no pintan en la Máscara rápida. **Rellenar**,
**Degradado** y **Pintar selección** también cambian la máscara.

- En el modo **Pintar selección**, cualquier color selecciona. El borrador y el color transparente deseleccionan.
- En el modo **Máscara en escala de grises**, el valor de gris del color fija la máscara: el blanco selecciona, el negro deselecciona y los grises seleccionan en parte.

La máscara tiene sus propios colores de primer plano y de fondo, copiados de los
colores del dibujo al empezar la Máscara rápida. Pulsa **D**
(**Restablecer a negro / blanco**) para tener un primer plano negro y un fondo
blanco. Para intercambiar los colores de la máscara, ejecuta
**Intercambiar colores de máscara** desde la búsqueda de comandos.

Los comandos que cambian la imagen, como **Borrar píxeles seleccionados** y
**Transformar**, no están disponibles en la Máscara rápida.

## Barra de Máscara rápida

La [barra del lienzo](/es/docs/selections/working/) de la parte inferior del
lienzo tiene el rótulo «Máscara rápida»:

- **Invertir**: **Invertir selección**.
- **Rellenar** y **Borrar**: **Rellenar máscara** rellena toda la máscara, y **Borrar cobertura de selección** vacía la máscara.
- **Perfeccionar**: **Expandir…**, **Contraer…**, **Suavizar bordes…**, **Borde…** y **Suavizar…**. **Transformar contorno** no está disponible aquí.
- **Guardar**: **Guardar como capa de selección** (consulta [Capas de selección](/es/docs/selections/selection-layers/)).
- **Salir**: **Volver a la imagen**.

Con la barra del lienzo oculta, la barra de Máscara rápida no aparece.

![La barra de Máscara rápida en la parte inferior del lienzo.](shot:selections/quick-mask-bar)

## Menú Máscara rápida

Mientras la Máscara rápida está activada, el menú **Capa** pasa a ser el menú
**Máscara rápida**. Haz clic con el botón derecho en la fila **Máscara rápida**, o
mantenla pulsada, para abrir el mismo menú.

- **Volver a la imagen**
- **Guardar como capa de selección**
- **Modificar**: **Invertir selección**, **Seleccionar todos los píxeles**, **Borrar cobertura de selección**, **Rellenar máscara**, **Expandir…**, **Contraer…**, **Suavizar bordes…**, **Borde…** y **Suavizar…**

## Ajustes de la superposición

El panel Propiedades muestra los ajustes de la máscara mientras la Máscara
rápida está activada.

![El panel Propiedades de la Máscara rápida, con Modo, Color de superposición y Opacidad de superposición.](shot:selections/quick-mask-properties)

### Modo

**Pintar selección** (el valor predeterminado) o **Máscara en escala de grises**.
El modo es un único ajuste para la Máscara rápida y para todas las capas de
selección, en todos los dibujos. El comando **Máscara en escala de grises** de la
búsqueda de comandos también lo cambia.

### Color de superposición

Fija el color de la superposición. Rojo de forma predeterminada.

### Opacidad de superposición

De 0 a 100%. El valor predeterminado es 50%.

## Salir de la Máscara rápida

Haz una de las siguientes acciones:

- Elige **Seleccionar > Máscara rápida** o pulsa **Q**.
- Elige **Capa > Volver a la imagen**.
- Selecciona **Salir** en la barra de Máscara rápida.
- Pulsa **Escape**.
- Selecciona el botón de carga junto a la miniatura de la fila **Máscara rápida**.

La máscara se convierte en la selección actual. **Deseleccionar píxeles**
(**Ctrl+D**) también sale de la Máscara rápida y quita la selección.
