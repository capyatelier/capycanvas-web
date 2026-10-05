---
title: "Seleccionar por brillo"
description: "La herramienta Rango tonal para seleccionar píxeles según su brillo."
related: ["selections/tools", "selections/quick-mask", "color-management/hdr", "customize/toolbars"]
---

Puedes seleccionar píxeles según su brillo con la herramienta **Rango tonal**. El
brillo se mide en pasos respecto al blanco de referencia (0). La herramienta lee
la imagen visible, con todas las capas juntas, y crea una selección de bordes
suaves.

## Elegir Rango tonal

Haz una de las siguientes acciones:

- Escribe «Rango tonal» en la [búsqueda de comandos](/es/docs/start/command-search/).
- En Boceto, selecciona **Seleccionar** en la barra de título, vuelve a seleccionarlo para abrir el cajón y selecciona **Rango tonal**.
- Pulsa una tecla que hayas asignado a **Rango tonal** en [Atajos de teclado](/es/docs/input/keyboard/).
- Selecciona **Rango tonal** en una barra donde lo hayas añadido con **Insertar herramientas…** (consulta [Barras de herramientas y barra de título](/es/docs/customize/toolbars/)).

**Rango tonal** no tiene tecla predeterminada ni botón en las barras de Pintura
o de Foto. Mientras es la herramienta activa, el panel Conjunto de herramientas
muestra todas las herramientas de selección.

![Los ajustes de Rango tonal en el cajón Seleccionar de Boceto, con Modo, Tonos, Suavidad y Suavizado de bordes.](shot:selections/tonal-range-settings)

## Tonos

Selecciona un botón de la fila **Tonos · pasos respecto al blanco de referencia**
para seleccionar esa franja de brillo. La franja se combina con la selección
actual según **Modo** (consulta [Herramientas de selección](/es/docs/selections/tools/)).

La descripción emergente de cada botón nombra su franja:

- **Sombras · por debajo de −5 pasos**
- **Sombras medias · de −5 a −3.5 pasos**
- **Tonos medios · de −3.5 a −1.5 pasos**
- **Luces medias · de −1.5 a −0.5 pasos**
- **Luces · por encima de −0.5 pasos**
- **HDR brillante · por encima de +1 paso**, solo en [dibujos HDR](/es/docs/color-management/hdr/)
- **Personalizado · establece o toma una muestra de un rango en pasos**

Mientras hay un botón de tono seleccionado, la selección sigue los cambios de
**Suavidad**, **Suavizado de bordes**, **Desde** y **Hasta**. Al elegir otra
herramienta u otro **Modo**, el botón de tono se deselecciona.

## Rango personalizado

Puedes fijar la franja a mano o tomarla como muestra del lienzo.

Haz una de las siguientes acciones:

- Selecciona **Personalizado · establece o toma una muestra de un rango en pasos** y ajusta **Desde** y **Hasta**, en pasos. Los valores predeterminados son −3.5 y −1.5.
- Arrastra por una zona del lienzo para usar el rango de brillo de esa zona.
- Haz clic en el lienzo para centrar una franja en el brillo de ese punto. La franja conserva la anchura personalizada actual, o mide 1 paso cuando había otro tono seleccionado.

Al tomar una muestra en el lienzo, el tono pasa a Personalizado. En el editor
web, **Desde** y **Hasta** comparten un único control de rango.

![Los ajustes de Rango tonal con Personalizado seleccionado y el rango en pasos.](shot:selections/tonal-range-custom)

## Suavidad

Amplía la transición suave en los dos extremos de la franja, de 0 a 200%. El
valor predeterminado es 100%.

## Suavizado de bordes

Suaviza el borde de la selección hasta 100 px.

## Modo y teclas mantenidas

**Rango tonal** tiene los mismos botones de **Modo** que las demás herramientas
de selección, y no tiene **Suavizado de contornos**. Mantén pulsada **Mayús**,
**Alt** o **Mayús+Alt** al hacer clic o arrastrar para añadir, restar o
intersecar.

## Máscara rápida y capas de selección

**Rango tonal** funciona en la [Máscara rápida](/es/docs/selections/quick-mask/)
y mientras editas una [capa de selección](/es/docs/selections/selection-layers/),
y cambia esa máscara. Su barra del lienzo es la
[barra de selección](/es/docs/selections/working/), en el borde inferior del
lienzo.
