---
title: "Filtros artísticos y de textura"
description: "Ajustes de los filtros de las categorías Artísticos y Textura."
related: ["filters/adding", "filters/distort", "filters/how-filters-apply"]
---

Estos filtros están en **Filtro > Artísticos** y **Filtro > Textura**, y en las
categorías **Artísticos** y **Textura** del panel **Filtros**. Sus ajustes se
cambian en el panel **Propiedades**.

![El panel Filtros con la categoría Artísticos y una vista previa de cada filtro.](shot:filters/artistic-list)

## Posterizar

Reduce cada canal de color a un número de valores igual a **Niveles**,
repartidos de forma uniforme.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Niveles** | 2–256 | 6 |

## Semitono

Vuelve a dibujar la imagen como puntos redondos de **Tinta** sobre **Papel**,
cada uno con un tamaño que depende de lo oscura que es la zona que tiene debajo.
**Contraste** amplía la diferencia entre los puntos pequeños y los grandes.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Espaciado de puntos** | 3–48 px | 9 px |
| **Ángulo** | −180° a 180° | 15° |
| **Contraste** | 0–100% | 30% |
| **Tinta** | Cualquier color | #0D1217 |
| **Papel** | Cualquier color | #F5F0DE |

## Trama cruzada

Convierte la imagen en un rayado de **Tinta** sobre **Papel**. Las zonas más
oscuras reciben más direcciones de línea, hasta cuatro.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Espaciado** | 3–32 px | 8 px |
| **Anchura de línea** | 0.25–4 px | 1 px |
| **Ángulo** | −180° a 180° | 0° |
| **Tinta** | Cualquier color | #121417 |
| **Papel** | Cualquier color | #F7F2E8 |

## Mosaico de píxeles

Divide la imagen en cuadrados de **Tamaño de celda**, cada uno relleno con el
color de su centro.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Tamaño de celda** | 1–96 px | 12 px |

## Efecto pictórico

Da a la imagen un aspecto de óleo: aplana el detalle dentro de **Radio** en
manchas de color uniforme y conserva los bordes. **Intensidad** mezcla el
resultado con el original.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Radio** | 1–16 px | 5 px |
| **Intensidad** | 0–100% | 100% |

## Lápiz

Dibuja los bordes de la imagen como líneas de **Tinta** sobre **Papel**.
**Contraste** oscurece las líneas.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Radio** | 0–21 px, o hasta 85 px escrito | 2 px |
| **Contraste** | 0–100% | 40% |
| **Tinta** | Cualquier color | #120F0D |
| **Papel** | Cualquier color | #F7F2E6 |

## Grano de película

Añade un grano que cambia con el tiempo y es más fuerte en los tonos medios.
**Grano de color** da a cada canal de color su propio grano.

![El panel Filtros con la categoría Textura y una vista previa de cada filtro.](shot:filters/texture-list)

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Cantidad** | 0–100% | 18% |
| **Tamaño** | 0.5–8 px | 1 px |
| **Grano de color** | Activado o desactivado | Desactivado |
| **Velocidad** | 0–4 | 1 |
| **Animar** | Activado o desactivado | Activado |
| **Tiempo congelado** | 0–3600 s | 0 s |

## VHS

Da a la imagen un aspecto de videocinta, con filas que tiemblan hacia los
lados hasta **Seguimiento**, franjas rojas y azules, líneas de barrido y ruido.
El temblor y el ruido cambian con el tiempo.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Seguimiento** | 0–32 px | 5 px |
| **Ruido** | 0–100% | 12% |
| **Líneas de barrido** | 0–100% | 20% |
| **Velocidad** | 0–4 | 1 |
| **Animar** | Activado o desactivado | Activado |
| **Tiempo congelado** | 0–3600 s | 0 s |

## CRT

Hace que la imagen parezca una pantalla de televisor antigua: curvada, con
franjas rojas y azules, una máscara de píxeles RGB a rayas, líneas de barrido y
una banda de brillo que se desplaza con el tiempo. Las partes de la imagen que
quedan fuera de la pantalla curvada se vuelven transparentes.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Curvatura** | 0–30% | 8% |
| **Líneas de barrido** | 0–100% | 35% |
| **Máscara de píxeles** | 0–100% | 25% |
| **Separación** | 0–5 px | 1 px |
| **Animar** | Activado o desactivado | Activado |
| **Tiempo congelado** | 0–3600 s | 0 s |

## Animación

**Grano de película**, **VHS** y **CRT** son animados, y sus filas en el panel
**Filtros** tienen la marca de animación. Con **Animar** activado, el filtro se
reproduce sin parar a la **Velocidad** indicada (CRT no tiene el ajuste
**Velocidad**). Desactiva **Animar** para dejar el filtro quieto en el momento
que fija **Tiempo congelado**.

Una imagen exportada muestra la animación en el momento de la exportación.
