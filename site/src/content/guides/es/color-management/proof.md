---
title: "Prueba de color"
description: "La prueba de impresión en pantalla en el panel Prueba de color, el aviso de gama y el indicador de pantalla del pie."
related: ["color-management/hdr", "color-management/color-spaces", "files/export", "start/canvas"]
---

Puedes ver cómo se imprimirá un dibujo en el panel **Prueba de color** sin cambiar
la imagen.

## Panel Prueba de color

Haz una de las siguientes acciones:

- Elige **Ventana > Prueba de color**.
- Elige **Panel de prueba de color** en la búsqueda de comandos.
- En Pintura y Foto, selecciona la pestaña **Prueba de color**, junto a **Navegador**.

Selecciona un modo en la parte superior del panel:

- **Desactivado** muestra el dibujo con normalidad.
- **SDR** muestra la versión SDR de un [dibujo HDR](/es/docs/color-management/hdr/). Solo los dibujos HDR tienen este modo.
- **Impresión** simula una impresión con un perfil ICC.

La prueba de color se ve en el lienzo y en el Navegador, nunca en las exportaciones
ni en el Histograma. Elegir un modo no marca el dibujo como modificado. Un dibujo
que se vuelve a abrir empieza con la prueba de color desactivada, pero conserva su
perfil de impresión.

## Activar y desactivar la prueba de color

Haz una de las siguientes acciones:

- Elige **Ver > Prueba de color**.
- Pulsa **Ctrl+Alt+P**. Los mapas de atajos Estilo Photoshop y Estilo Krita también usan **Ctrl+Y**.

La prueba de color se activa en el último modo que usaste (al principio, SDR en los
dibujos HDR e Impresión en los dibujos SDR). Se abre el panel Prueba de color, y
**Ver > Prueba de color** muestra una marca de verificación.

En la página [Atajos de teclado](/es/docs/input/keyboard/), el comando se llama
**Colores de prueba**. Puedes asignarle una tecla que active la prueba solo mientras
la mantienes pulsada.

## Prueba de impresión

Puedes simular una impresión con un perfil ICC RGB, CMYK o de grises. Selecciona
**Impresión** y elige un **Perfil**. El lienzo no muestra la prueba hasta que eliges
un perfil.

Mientras la prueba de impresión está activa, el pie indica «Prueba: *perfil*». Si la
prueba falla, indica «Prueba de color no disponible», con el motivo en su
descripción emergente.

El perfil y las opciones se guardan en el dibujo. Elegir un perfil marca el dibujo
como modificado y es un paso de deshacer. Deshacer quita el perfil y desactiva la
prueba de color. En el archivo `.capy` solo se guarda el perfil de impresión activo.
Cuando sustituyes el perfil guardado en el dibujo, el anterior se añade primero a
**Perfiles guardados**. Los dibujos HDR se prueban a partir de su versión SDR.

![El panel Prueba de color en su página Impresión, con Adobe RGB (1998) elegido como perfil.](shot:color-management/proof-panel-print)

### Perfil

La lista contiene el **Perfil del documento** guardado en el dibujo, los **Perfiles
guardados** de la biblioteca y los **Espacios de color estándar**. **Añadir perfil…**
añade un archivo `.icc` o `.icm` a la biblioteca y lo selecciona, y **Gestionar
perfiles…** abre la Biblioteca de perfiles de color.

### Simular

**Colores**, **Tinta negra** (predeterminado) o **Papel y tinta**. **Papel y tinta**
también simula la tinta negra.

### Propósito

**Relativo** (predeterminado), **Perceptual**, **Saturación** o **Absoluto**.

### Compensación del punto negro

Activada de forma predeterminada. No está disponible con **Absoluto**.

### Aviso de gama

El mismo interruptor que el comando **Aviso de gama**, que se describe más abajo.

## Biblioteca de perfiles de color

Selecciona **Gestionar perfiles…** en la lista **Perfil**, o en la página **Color**
de [Preferencias](/es/docs/preferences/), para abrir la **Biblioteca de perfiles de color**.

- **Importar perfil ICC…** añade un archivo `.icc` o `.icm` de hasta 16 MiB.
- **Mostrar en los menús de perfiles** y **Ocultar en los menús de perfiles** eligen qué perfiles ofrece la lista **Perfil**.
- **Quitar** saca un perfil de la biblioteca.

La biblioteca admite hasta 128 perfiles y 64 MiB en total.

## Aviso de gama

Puedes mostrar en gris medio sobre el lienzo los colores que el perfil de impresión
no puede reproducir. Haz una de las siguientes acciones:

- Activa **Aviso de gama** en la página Impresión del panel Prueba de color.
- Pulsa **Ctrl+Mayús+Y**.
- Elige **Aviso de gama** en la búsqueda de comandos.

El pie indica «Prueba: *perfil* · Aviso de gama». Con la simulación de impresión
desactivada, indica «Gama: *perfil*».

El aviso de gama solo está disponible después de elegir un perfil de impresión.
Elegir **Desactivado** o **SDR**, o desactivar **Ver > Prueba de color**, lo
desactiva. Mientras está activo, los dibujos HDR muestran su versión SDR.

## Indicador de pantalla

Un indicador a la izquierda del pie avisa cuando la pantalla no puede mostrar con
precisión el dibujo o la prueba. Selecciona el indicador para abrir sus detalles, y
vuelve a seleccionarlo o pulsa **Escape** para cerrarlos.

| Indicador | Aparece cuando |
| --- | --- |
| «Colores recortados» | La pantalla no puede mostrar algunos colores visibles del dibujo o de la prueba. |
| «Puede no coincidir con la impresión» | La prueba de impresión o el aviso de gama están activos, y {appName} no puede saber cómo muestra los colores la pantalla. |

En un dibujo HDR, el indicador también informa de si la pantalla muestra HDR
(consulta [HDR](/es/docs/color-management/hdr/)).

![El indicador Colores recortados en el pie, con sus detalles y Resaltar estos colores.](shot:color-management/screen-chip)

Activa **Resaltar estos colores** en los detalles para pintar de azul en el lienzo
los colores recortados. El resaltado nunca se guarda.

Boceto oculta el pie de forma predeterminada. Para mostrarlo, elige **Ventana >
Personalizar barra de título…** y activa **Mostrar pie**.
