---
title: "Filtros de detalle y desenfoque"
description: "Ajustes de los filtros de las categorías Detalle y Desenfoque."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Estos filtros están en **Filtro > Detalle** y **Filtro > Desenfoque**, y en las
categorías **Detalle** y **Desenfoque** del panel **Filtros**. Sus ajustes se
cambian en el panel **Propiedades**.

![El panel Filtros con las categorías Detalle y Desenfoque y una vista previa de cada filtro.](shot:filters/detail-blur-list)

## Claridad

Sube el contraste local con una **Cantidad** positiva, o lo baja con una
negativa, hasta 2 pasos.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Cantidad** | −100% a 100% | 0% |

## Borrar neblina

Una **Cantidad** positiva quita neblina y una negativa la añade. Al quitar
neblina, las zonas casi blancas y casi grises quedan protegidas.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Cantidad** | −100% a 100% | 0% |

## Máscara de enfoque

Enfoca los bordes según **Cantidad**. Las diferencias menores que **Umbral** no
cambian.

![El panel Propiedades de Máscara de enfoque con Radio, Cantidad y Umbral.](shot:filters/unsharp-mask-properties)

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Radio** | 0–21 px, o hasta 85 px escrito | 1.5 px |
| **Cantidad** | 0–300% | 100% |
| **Umbral** | 0–100% | 2% |

## Paso alto

Conserva solo el detalle más fino que **Radio**, sobre una base gris al 50%.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Radio** | 0–21 px, o hasta 85 px escrito | 4 px |
| **Intensidad** | 0–300% | 100% |

## Suavizado con conservación de bordes

Suaviza el ruido y mantiene nítidos los bordes. Una **Intensidad** más alta
suaviza diferencias de color más grandes.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Intensidad** | 0–100% | 25% |

## Detectar bordes

Muestra los bordes de la imagen como líneas blancas sobre negro, o como líneas
oscuras sobre blanco con **Invertir** activado.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Anchura** | 0.5–8 px | 1 px |
| **Intensidad** | 0–400% | 100% |
| **Invertir** | Activado o desactivado | Desactivado |

## Relieve

Convierte la imagen en un relieve gris. **Ángulo** fija la dirección del relieve.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Anchura** | 0.5–8 px | 1.5 px |
| **Ángulo** | −180° a 180° | 135° |
| **Profundidad** | 0–400% | 100% |

## Desenfoque gaussiano

Desenfoca la imagen de forma uniforme. Los bordes junto a zonas transparentes se
desenfocan hacia fuera.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Radio** | 0–21 px, o hasta 85 px escrito | 3 px |

## Desenfoque de movimiento

Desenfoca a lo largo de una línea recta de longitud **Distancia**, en la
dirección de **Ángulo**.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Distancia** | 0–64 px | 12 px |
| **Ángulo** | −180° a 180° | 0° |

## Resplandor

Añade un brillo alrededor de los tonos más claros que **Umbral**. El brillo puede
extenderse a las zonas transparentes.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Radio** | 0–21 px, o hasta 85 px escrito | 6 px |
| **Intensidad** | 0–200% | 60% |
| **Umbral** | 0–100% | 60% |

## Enfoque suave

Suaviza la imagen colocando encima un desenfoque de **Radio** en modo de mezcla
Aclarar, con una opacidad igual a **Intensidad**.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Radio** | 0–21 px, o hasta 85 px escrito | 5 px |
| **Intensidad** | 0–100% | 40% |
