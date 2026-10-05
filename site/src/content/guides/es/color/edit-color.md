---
title: "Editar color"
description: "Definir un color por sus valores, su código hexadecimal o un texto de color en el diálogo Editar color."
related: ["color/color-panel", "color/palettes", "color/eyedropper"]
---

Puedes definir un color por sus valores en el diálogo **Editar color**. Nada cambia
hasta que seleccionas **Usar color**.

![El diálogo Editar color con la rueda a la izquierda, Actual y Nuevo con el código hexadecimal arriba a la derecha, tres filas de valores y los colores recientes en el pie.](shot:color/edit-color "1 Rueda y formas · 2 Actual y Nuevo · 3 Tomar del lienzo · 4 Hex · 5 Filas de valores · 6 Colores recientes")

## Abrir Editar color

Haz una de las siguientes acciones:

- Selecciona **Editar color…** (el lápiz) arriba a la derecha del [panel de color](/es/docs/color/color-panel/).
- Haz doble clic en la muestra de primer plano o de fondo del panel Color.
- Selecciona un botón de color en Propiedades, como el **Color** de una capa de relleno Color uniforme o el **Color del matiz** de Blanco y negro.
- Selecciona la miniatura de una capa de relleno Color uniforme en el panel Capas.
- Selecciona el **Color** de un punto de color en el editor de degradados.
- Selecciona **Color del pincel** en un panel que lo muestre. Puedes añadirlo a los paneles Pinceles y Tamaño del pincel ([Paneles y columnas](/es/docs/customize/panels/)).
- En Windows, Linux y Android, haz clic con el botón derecho o mantén pulsada la muestra de primer plano o de fondo y elige **Editar color…**.

## Rueda y formas

La rueda funciona igual que en el panel Color. Selecciona **OKLCH**, **HSB** o
**HLS** bajo la rueda para cambiar el campo a un círculo, un cuadrado o un triángulo.

## Actual y Nuevo

**Nuevo** muestra el color que estás creando. Selecciona **Actual** para devolver
**Nuevo** al color con el que empezaste.

## Hex

El campo hexadecimal muestra Nuevo como `#RRGGBB` en sRGB. Selecciónalo para
escribir un código hexadecimal u otro [texto de color](#pegar-colores).

Una etiqueta a la izquierda del código hexadecimal indica estos casos:

- «≈»: el color está fuera de sRGB, y el código muestra el color sRGB más cercano.
- «Base»: en un dibujo HDR, el código muestra el color antes de aplicar la intensidad.
- «sRGB»: el espacio de color del dibujo no es sRGB.

## Filas de valores

Cada fila muestra Nuevo en un formato. Selecciona el nombre del formato al principio
de una fila para elegir otro formato. El diálogo recuerda los formatos que eliges.

| Fila | Formatos |
| --- | --- |
| 1 | **RGB** (0–255, predeterminado), **RGB 0–1**, **RGB lineal** (0–1). Los valores están en el espacio de color del dibujo, que se indica en una etiqueta de la fila. |
| 2 | **HSB** (predeterminado), **HSL** |
| 3 | **OKLCH** (predeterminado), **OKLab** |

![Las filas de valores con el menú de formatos de la primera fila abierto.](shot:color/edit-color-formats)

## Editar valores

- Selecciona un valor para escribir un número. Pulsa **Intro** para confirmar o **Escape** para cancelar.
- Arrastra un valor hacia arriba o hacia abajo para cambiarlo. Mantén pulsada **Mayús** para pasos más grandes, o **Alt** o **Ctrl** para pasos más pequeños.
- Pulsa **Flecha arriba** o **Flecha abajo** sobre un valor para cambiarlo en un paso.

Un valor fuera del rango de un campo se ajusta al límite más cercano. El tono da la
vuelta al llegar a 360°. Si escribes un texto que no es ni un número ni un color,
el campo sigue abierto con un error. **Usar color** no está disponible hasta que
corriges el valor o pulsas **Escape**.

## Copiar colores

Selecciona el botón de copiar al final del campo hexadecimal o de una fila para
copiar ese valor como texto. Una marca de verificación en el botón confirma la
copia. Pulsa **Ctrl+C** en el diálogo, fuera de un campo de texto, para copiar el
código hexadecimal.

| Formato | Texto copiado en dibujos sRGB | En otros espacios de color |
| --- | --- | --- |
| Hex | `#RRGGBB` | `#RRGGBB` |
| RGB | `rgb(R G B)` | `color(display-p3 r g b)`, `color(a98-rgb r g b)` o `color(prophoto-rgb r g b)`, de 0 a 1 |
| RGB 0–1 | `color(srgb r g b)` | igual que RGB |
| RGB lineal | `color(srgb-linear r g b)` | `r g b` |
| HSB, HSL | `hsb(h s% b%)`, `hsl(h s% l%)` | `h° s% b%`, `h° s% l%` |
| OKLCH, OKLab | `oklch(L% C h)`, `oklab(L% a b)` | lo mismo |

## Pegar colores

Pulsa **Ctrl+V** en el diálogo, fuera de un campo de texto, para definir Nuevo a
partir de un texto de color. El campo hexadecimal y los campos de valor aceptan el
mismo texto:

- códigos hexadecimales de 3, 4, 6 u 8 dígitos, con `#`, con `0x` o sin prefijo (los dígitos de alfa se ignoran);
- nombres de color CSS, como `teal`;
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsb()`, `hsv()`, `oklch()` y `oklab()`;
- `color()` con `srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb` o `srgb-linear`;
- tres números. Una fila de valores los lee en su propio formato. En los demás campos son RGB de 0 a 255, o RGB de 0 a 1 si los tres son 1 o menos y uno lleva punto decimal.

Un texto de color nunca cambia el alfa del color.

## Tomar del lienzo

Selecciona **Tomar del lienzo** (el cuentagotas junto a Actual y Nuevo) para tomar
Nuevo como muestra del dibujo. El diálogo se oculta, y una franja en una esquina del
lienzo muestra Actual, el color muestreado y sus valores.

Haz clic, o levanta el lápiz o el dedo, para tomar el color. El diálogo vuelve con
el color tomado como Nuevo. Pulsa **Escape** o selecciona la franja para volver sin
cambios.

Con un dedo, el punto de muestreo queda por encima de la yema. **Tomar del lienzo**
está oculto cuando Editar color se abre desde otro diálogo.

## Colores recientes y paletas

El pie muestra tus colores recientes. Selecciona uno para convertirlo en Nuevo.

Selecciona **Colores recientes y todas las paletas** (la flecha que sigue a los
colores recientes) para abrir una hoja con tus colores recientes y todas las
[paletas](/es/docs/color/palettes/). Escribe en el campo de búsqueda para encontrar
nombres de paletas, nombres de colores o códigos hexadecimales. El **+** al final
de una paleta guarda Nuevo en esa paleta. Para cerrar la hoja, selecciona **Cerrar
muestras** o pulsa **Escape**.

![La hoja de muestras con el campo de búsqueda, Colores recientes y las paletas.](shot:color/edit-color-swatches)

## Intensidad HDR

En un [dibujo HDR](/es/docs/color-management/hdr/), la fila **Intensidad (EV)** y
el arco bajo la rueda definen el brillo en pasos respecto al blanco SDR. En el arco,
y al arrastrar el valor, el rango va de −2 a +6 EV. Un valor escrito puede ir más
allá, dentro del rango de la profundidad de bits del dibujo.

## Usar color y Cancelar

Selecciona **Usar color** para aplicar Nuevo. Selecciona **Cancelar** o pulsa
**Escape** para cerrar sin cambios. Si hay un menú de formatos o la hoja de muestras
abiertos, **Escape** los cierra primero.
