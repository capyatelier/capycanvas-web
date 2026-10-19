---
title: "Compatibilidad de dispositivos"
description: "Requisitos de sistema operativo, navegador y gráficos para las aplicaciones nativas y el editor web."
related: ["quickstart", "input/pen", "input/touch"]
---

{appName} usa el procesador gráfico del dispositivo para dibujar y mostrar el lienzo. La compatibilidad depende conjuntamente de la aplicación o navegador, el sistema operativo y el hardware gráfico.

## Aplicaciones nativas

La aplicación de escritorio es compatible con Windows, macOS y Linux. La aplicación nativa para iPad requiere iPadOS 17.5 o posterior. La aplicación para Android requiere Android 12 o posterior.

Las aplicaciones para iPad y Android son versiones beta. Cumplir el requisito del sistema operativo no confirma por sí solo que todos los procesadores gráficos o lápices funcionen.

## Editor web

El editor web funciona en estos navegadores:

| Sistema | Navegadores |
| --- | --- |
| Windows | Chrome, Edge, Firefox 141 o posterior |
| macOS | Chrome, Edge, Safari 26 o posterior, Firefox 147 o posterior en Apple silicon |
| Linux con Wayland | Chrome, Edge |
| iPadOS 26 o posterior | Safari |
| Android 12 o posterior | Chrome |

El mínimo de iPadOS 17.5 de la aplicación nativa para iPad no se aplica a Safari. El editor web requiere iPadOS 26 o posterior porque usa funciones gráficas del navegador incluidas en esa versión.

## Compatibilidad gráfica

Si el lienzo no puede iniciarse, {appName} muestra un mensaje que describe la capacidad gráfica que falta. Actualiza primero el sistema operativo, el navegador y el controlador gráfico. Si el mensaje persiste, incluye su texto exacto y el modelo del dispositivo y de los gráficos al informar del problema.
