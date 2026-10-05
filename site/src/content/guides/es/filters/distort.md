---
title: "Filtros de distorsión"
description: "Ajustes de los filtros de la categoría Distorsión."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Los filtros de distorsión están en **Filtro > Distorsión** y en la categoría
**Distorsión** del panel **Filtros**. Sus ajustes se cambian en el panel
**Propiedades**. Todos pueden llevar pintura a las zonas transparentes de una
capa.

![El panel Filtros con la categoría Distorsión y una vista previa de cada filtro.](shot:filters/distort-list)

## Aberración cromática

Añade franjas de color en los bordes desplazando el canal rojo hacia un lado y
el canal azul hacia el otro, según **Separación** y en la dirección de **Ángulo**.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Separación** | 0–32 px | 3 px |
| **Ángulo** | −180° a 180° | 0° |

## Caleidoscopio

Refleja una cuña de la imagen en tantas cuñas como indica **Segmentos**,
alrededor del centro.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Segmentos** | 2–24 | 6 |
| **Ángulo** | −180° a 180° | 0° |
| **Centro X**, **Centro Y** (en **Posición**) | 0–100% del ancho y el alto del lienzo | 50% |

## Remolino

Retuerce la imagen alrededor del centro según **Torsión**, hasta no retorcer nada
en **Radio**.

![El panel Propiedades de Remolino con Torsión, Radio y los ajustes de Posición.](shot:filters/swirl-properties)

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Torsión** | −720° a 720° | 120° |
| **Radio** | 1–150% de la mitad del lado más corto del lienzo | 70% |
| **Centro X**, **Centro Y** (en **Posición**) | 0–100% del ancho y el alto del lienzo | 50% |

## Ondulación

Desplaza la imagen en anillos alrededor del centro, hasta **Amplitud**, con los
anillos separados por **Longitud de onda**. Los anillos avanzan hacia fuera con
el tiempo.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Amplitud** | 0–48 px | 12 px |
| **Longitud de onda** | 8–256 px | 64 px |
| **Velocidad** | 0–4 | 0.5 |
| **Centro X**, **Centro Y** (en **Posición**) | 0–100% del ancho y el alto del lienzo | 50% |
| **Animar** | Activado o desactivado | Activado |
| **Tiempo congelado** | 0–3600 s | 0 s |

## Vidrio

Distorsiona la imagen con un patrón de vidrio esmerilado de **Tamaño de textura**,
hasta **Distorsión**. **Rugosidad** añade un patrón más fino.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Distorsión** | 0–48 px | 12 px |
| **Tamaño de textura** | 4–160 px | 24 px |
| **Rugosidad** | 0–100% | 35% |

## Vidrio con lluvia

Añade gotas de lluvia que se deslizan hacia abajo dejando rastro con el tiempo y
curvan la imagen hasta **Refracción**. **Lluvia** fija el número de gotas.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Refracción** | 0–32 px | 8 px |
| **Tamaño de gota** | 12–120 px | 48 px |
| **Lluvia** | 0–100% | 65% |
| **Velocidad** | 0–4 | 0.5 |
| **Animar** | Activado o desactivado | Activado |
| **Tiempo congelado** | 0–3600 s | 0 s |

## Ondas de calor

Hace que la imagen reverbere con el tiempo, hasta **Distorsión** en la parte
inferior del lienzo y nada en la parte superior. **Detalle** añade ondas más
finas.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Distorsión** | 0–48 px | 8 px |
| **Tamaño de onda** | 10–240 px | 90 px |
| **Velocidad** | 0–4 | 0.6 |
| **Detalle** | 0–100% | 50% |
| **Animar** | Activado o desactivado | Activado |
| **Tiempo congelado** | 0–3600 s | 0 s |

## Deformación de dominio

Deforma la imagen con un patrón jaspeado de **Tamaño del patrón**, hasta
**Distorsión**. El patrón se desplaza con el tiempo.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Distorsión** | 0–64 px | 24 px |
| **Tamaño del patrón** | 8–256 px | 96 px |
| **Velocidad** | 0–4 | 0.25 |
| **Animar** | Activado o desactivado | Activado |
| **Tiempo congelado** | 0–3600 s | 0 s |

## Animación

**Ondulación**, **Vidrio con lluvia**, **Ondas de calor** y
**Deformación de dominio** son animados, y sus filas en el panel **Filtros**
tienen la marca de animación. Con **Animar** activado, el filtro se reproduce
sin parar a la **Velocidad** indicada. Desactiva **Animar** para dejar el filtro
quieto en el momento que fija **Tiempo congelado**.

Una imagen exportada muestra la animación en el momento de la exportación.
