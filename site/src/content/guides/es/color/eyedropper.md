---
title: "Cuentagotas"
description: "Tomar un color de pintura del lienzo con el Cuentagotas, y sus opciones Estilo, Origen y Tamaño de muestra."
related: ["color/color-panel", "color/edit-color", "input/touch", "input/keyboard"]
---

Puedes tomar un color del lienzo para pintar con él. Después de tomarlo, vuelve la
herramienta que estabas usando.

## Activar el Cuentagotas

Haz una de las siguientes acciones:

- Pulsa **I** (**O** en el mapa de atajos Estilo GIMP).
- Elige **Cuentagotas** en la búsqueda de comandos.
- En Pintura y Foto, selecciona **Cuentagotas** en la barra de herramientas.
- En Boceto, selecciona **Selector de color** en la barra del borde izquierdo, entre los deslizadores de tamaño y de opacidad.

Para salir sin tomar un color, pulsa **I** o vuelve a seleccionar el mismo botón,
pulsa **Escape**, o elige otra herramienta u otro pincel. Un toque con el dedo sin
mantenerlo también desactiva el Cuentagotas.

## Tomar un color

Mueve el puntero sobre el lienzo para previsualizar el color en el panel Color. El
color de pintura solo cambia cuando tomas el color.

| Entrada | Vista previa | Tomar |
| --- | --- | --- |
| Ratón | Pasar por encima | Clic |
| Lápiz | Pasar por encima, o apoyar el lápiz | Levantar el lápiz |
| Dedo | Tocar | Levantar el dedo |

Con un dedo, el punto de muestreo queda por encima de la yema.

Los píxeles transparentes no dan ningún color, y los colores tomados son siempre
opacos. Los colores se toman en el espacio de color del dibujo. En un dibujo HDR,
un color tomado puede ser más brillante que el blanco SDR. Mientras editas una
máscara, el color tomado pasa a ser el color de la máscara.

## Tomar un color mientras pintas

Mantén pulsada **Alt** con un pincel o con la herramienta Mezclar, Licuar, Rellenar o
Degradado seleccionada. Cada clic toma un color. Suelta **Alt** para volver a la
herramienta.

Los mapas de atajos Estilo Krita y Estilo GIMP usan **Ctrl** en su lugar. En la
página [Atajos de teclado](/es/docs/input/keyboard/), este atajo se llama **Tomar
muestra de color mientras se mantiene pulsado**. También puedes asignar un botón del
lápiz al Cuentagotas en la página **Lápiz y entrada** ([Lápiz](/es/docs/input/pen/)).

## Mantener un dedo

Mantén un dedo quieto sobre el lienzo para empezar a tomar un color con cualquier
herramienta. Levanta el dedo para tomar el color y volver a la herramienta.

- En la web y en iPad hay que mantener medio segundo. Android, Windows y Linux usan el tiempo de pulsación larga del sistema.
- Mover el dedo antes de que se active el selector cancela la pulsación.
- La pulsación solo funciona con un único dedo sobre el lienzo y ninguna otra acción en curso.
- Mientras mantienes el dedo, toca con un segundo dedo para cambiar **Origen** entre **Color visible** y **Capa seleccionada**.

## Estilo

Elige **Estilo** en la barra Opciones de herramienta mientras tomas un color (en la
parte superior de la ventana en Foto):

- **Selector de color** muestra una lupa redonda. La mitad superior de su anillo muestra el color muestreado, y la mitad inferior, el color actual.
- **Cuentagotas** muestra un cursor de pipeta con la punta sobre el punto muestreado.

![La lupa del Selector de color sobre un trazo rojo, con los colores muestreado y actual en su anillo.](shot:color/eyedropper-loupe)

Con la pantalla táctil siempre se usa la lupa. Seleccionar **Selector de color** en
Boceto pone **Estilo** en **Selector de color**. Cuando **Origen** es **Capa
seleccionada**, aparece una pequeña marca de capas.

## Origen y Tamaño de muestra

Defínelos en el panel Herramienta o en la barra Opciones de herramienta mientras
tomas un color. En Boceto, haz doble clic o toca dos veces **Selector de color**
para abrirlos.

![El panel Herramienta mientras se toma un color, con Origen y Tamaño de muestra.](shot:color/eyedropper-settings)

### Origen

**Color visible** (predeterminado) toma la muestra del dibujo tal como lo ves, y
**Capa seleccionada**, de la pintura propia de la capa seleccionada, antes de su
opacidad, sus máscaras y su recorte. **Capa seleccionada** solo se ofrece en una
capa de pintura desbloqueada.

### Tamaño de muestra

**Un solo píxel** (predeterminado), **Círculo de 5 px**, **Círculo de 15 px**,
**Círculo de 51 px** o **Círculo de 101 px**. Un círculo promedia los píxeles de su
interior.
