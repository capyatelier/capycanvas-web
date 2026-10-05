---
title: "HDR"
description: "Los dibujos HDR, cómo se ven en pantalla y su versión SDR."
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

Puedes pintar colores más brillantes que el blanco SDR en un dibujo HDR. Un dibujo
en **HDR de coma flotante de 16 bits** o **HDR de coma flotante de 32 bits** es un
dibujo HDR.

## Dibujos HDR

Para obtener un dibujo HDR, haz una de las siguientes acciones:

- En **Archivo > Nuevo…**, elige el ajuste preestablecido **Dibujo HDR** o una **Profundidad de bits** de coma flotante.
- Elige **Editar > Cambiar profundidad de bits…** y una profundidad de coma flotante.
- Abre un archivo PNG HDR (BT.2020 PQ) o AVIF HDR (HDR de coma flotante de 16 bits), o un archivo OpenEXR (HDR de coma flotante de 32 bits).
- Pon **Profundidad de bits** en una profundidad de coma flotante en la página **Color** de [Preferencias](/es/docs/preferences/) para que los dibujos nuevos sean HDR.

En un dibujo HDR:

- El [panel de color](/es/docs/color/color-panel/) y [Editar color](/es/docs/color/edit-color/) definen la intensidad de la pintura en EV.
- La [Mezcla](/es/docs/color-management/color-spaces/) es siempre Luz lineal.
- Superposición, Luz suave, Luz fuerte, Subexponer color, Sobreexponer color, Luz intensa, Mezcla definida y Exclusión no se ofrecen como [modos de mezcla](/es/docs/layers/blend-modes/).
- Curvas tiene un dominio **HDR logarítmico** y un **Rango HDR**.
- La herramienta [Rango tonal](/es/docs/selections/tonal-range/) ofrece **HDR brillante · por encima de +1 paso**.
- El Histograma marca el blanco SDR.
- [Exportar](/es/docs/files/export/) ofrece formatos HDR.

En el editor web, no se puede abrir un dibujo HDR de más de 12 megapíxeles.

## HDR en pantalla

En una pantalla que puede mostrar HDR, el lienzo y el Navegador muestran un dibujo
HDR en HDR mientras **Desactivado** está seleccionado en el panel
[Prueba de color](/es/docs/color-management/proof/) y el aviso de gama está
desactivado. En otro caso muestran la versión SDR del dibujo, igual que los
controles de color. En el editor web, HDR requiere un navegador que informe de una
pantalla HDR.

Un indicador a la izquierda del pie muestra qué versión ves. Selecciónalo para ver
los detalles.

| Indicador | Aparece cuando |
| --- | --- |
| «HDR» | El dibujo se muestra en HDR. |
| «Vista previa SDR» | El dibujo está en modo SDR en una pantalla que muestra HDR. |
| «Mostrando SDR» | La pantalla no muestra HDR. |

## Versión SDR

Cada dibujo HDR tiene una versión SDR guardada. Se usa:

- en pantallas sin HDR y en el modo SDR;
- en las miniaturas de las capas;
- en la prueba de impresión;
- en las exportaciones SDR y en la base SDR de las exportaciones JPEG HDR y AVIF HDR.

Puedes ajustar la versión SDR sin cambiar los píxeles HDR. Haz una de las
siguientes acciones:

- Elige **Ver > Prueba SDR** (no en Windows).
- Elige **Prueba SDR** en la búsqueda de comandos.
- Selecciona **SDR** en la parte superior del panel Prueba de color.

![La página SDR del panel Prueba de color con el dial de equilibrio, contraste, brillo e intensidad del color.](shot:color-management/proof-panel-sdr)

El dial del panel define cuatro valores. Su centro muestra una ilustración fija, no
el dibujo. Haz doble clic o toca dos veces una parte del dial para restablecer sus
valores, o selecciona **Restablecer apariencia SDR**, arriba a la derecha, para
restablecer los cuatro. Con el foco en el dial, las teclas de flecha cambian un
valor paso a paso, y **Mayús** da pasos más grandes. **Escape** cancela un
arrastre. Cada arrastre es un paso de deshacer y se guarda con el dibujo.

### Equilibrio

Arrastra el centro del dial a la izquierda o a la derecha, de −100% a +100%. La
izquierda favorece las formas amplias, y la derecha, la textura fina.

### Contraste

Arrastra el centro del dial hacia abajo o hacia arriba, del 50% al 200%.

### Brillo

Arrastra el arco superior, de −50% a +50%.

### Intensidad del color

Arrastra el arco inferior, desde el blanco (0%) hasta el color pleno (100%). El valor
predeterminado es 30%.

## Previsualizar SDR

Puedes alternar entre HDR y la versión SDR sin abrir el panel Prueba de color. Elige
**Previsualizar SDR** en la búsqueda de comandos, o asígnale una tecla en la página
[Atajos de teclado](/es/docs/input/keyboard/).

**Previsualizar SDR** solo funciona en un dibujo HDR, en una pantalla que muestra
HDR, con la prueba de impresión y el aviso de gama desactivados.
