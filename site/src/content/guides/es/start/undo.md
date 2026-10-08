---
title: "Deshacer y rehacer"
description: "Deshacer y rehacer cambios en un dibujo, y el historial aparte para los cambios de distribución."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

Puedes deshacer los cambios de un dibujo paso a paso y rehacer los pasos que
deshiciste. Cada dibujo abierto tiene su propio historial.

![Los botones Deshacer y Rehacer en la barra de comandos.](shot:start/undo-commands)

## Deshacer

Haz una de las siguientes acciones:

- Elige **Editar > Deshacer**.
- Pulsa **Ctrl+Z**.
- Selecciona **Deshacer** en la barra de comandos. En Boceto, **Deshacer** está en la barra del borde izquierdo de la pantalla.
- Toca el lienzo con dos dedos.

## Rehacer

Haz una de las siguientes acciones:

- Elige **Editar > Rehacer**.
- Pulsa **Ctrl+Mayús+Z** o **Ctrl+Y**.
- Selecciona **Rehacer** en la barra de comandos, o en la barra del borde izquierdo en Boceto.
- Toca el lienzo con tres dedos.

Un cambio nuevo después de Deshacer borra los pasos que podías rehacer.

## Lo que cuenta como paso

Cada trazo, relleno, cambio de filtro, transformación, recorte, cambio de tamaño
del lienzo y cambio de selección es un paso, igual que cada cambio en una capa.
Los cambios de vista, herramienta, pincel, color y distribución no son pasos.

Mientras colocas una imagen, transformas una capa o usas la herramienta Recortar,
Deshacer cancela esa operación en lugar de retroceder un paso.

## Longitud del historial

Cada dibujo conserva hasta 256 pasos. Los más antiguos se descartan primero.

## Guardar y volver a abrir

Guardar no borra el historial. Un dibujo que abres desde un archivo `.capy` empieza
con el historial vacío, pero los dibujos que se vuelven a abrir al reiniciar {appName} conservan sus pasos de deshacer.

## Cambios de distribución

Los cambios en paneles, barras de herramientas, la barra de título y espacios de
trabajo tienen su propio historial. **Editar > Deshacer** nunca deshace un cambio
de distribución.

Haz una de las siguientes acciones:

- Elige **Ventana > Deshacer cambio de distribución** o **Ventana > Rehacer cambio de distribución**.
- Pulsa **Ctrl+Alt+Z** o **Ctrl+Alt+Mayús+Z**.

Cada espacio de trabajo conserva su propio historial de distribución, y ese
historial se mantiene al reiniciar. **Ventana > Espacios de trabajo > Historial de
distribución…** muestra las distribuciones anteriores del espacio de trabajo actual.
