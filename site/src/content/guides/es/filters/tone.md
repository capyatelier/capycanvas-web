---
title: "Filtros de tono"
description: "Ajustes de los filtros de la categoría Tono."
related: ["filters/adding", "filters/color", "filters/how-filters-apply"]
---

Los filtros de tono están en **Filtro > Tono** y en la categoría **Tono** del
panel **Filtros**. Sus ajustes se cambian en el panel **Propiedades**.

![El panel Filtros con la categoría Tono y una vista previa de cada filtro.](shot:filters/tone-list)

## Sombras/Iluminaciones

Aclara las zonas oscuras con **Sombras** y oscurece las zonas claras con
**Iluminaciones**, según el brillo de la zona que las rodea. Al 100%, cada uno
cambia la exposición hasta 2 pasos.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Sombras** | 0–100% | 0% |
| **Iluminaciones** | 0–100% | 0% |

## Curvas

Cambia los tonos con una curva para todos los canales en la página **RGB** y una
para cada canal en las páginas **Rojo**, **Verde** y **Azul**. Las curvas de
canal se aplican antes que la curva **RGB**.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| Páginas **RGB**, **Rojo**, **Verde**, **Azul** | Una curva cada una | Línea recta |
| **Muestrear punto**, **Ajuste dirigido** | Ajustan la curva a partir de la imagen (consulta [Añadir y editar filtros](/es/docs/filters/adding/)) | |
| **Espacio de la curva** | **RGB codificado**, **HDR logarítmico**. Solo aparece en un [dibujo HDR](/es/docs/color-management/hdr/) o cuando está en **HDR logarítmico**. | **RGB codificado**, o **HDR logarítmico** en un dibujo HDR |
| **Rango HDR** | 0–15 EV, o hasta 127 EV escrito. Solo aparece con **HDR logarítmico**: el número de pasos por encima del blanco SDR que alcanza la curva. | 4 EV |

| En el gráfico | Cómo |
| --- | --- |
| Añadir un punto | Pulsa en un sitio vacío. Una curva admite hasta 32 puntos. |
| Mover un punto | Arrástralo, o selecciónalo y pulsa las teclas de flecha. Con **Mayús** se mueve más lejos. Los puntos de los extremos solo se mueven hacia arriba y hacia abajo. |
| Introducir valores exactos | Selecciona un punto y escribe en **Entrada** y **Salida**, bajo el gráfico. |
| Quitar un punto | Haz doble clic en él, arrástralo fuera del gráfico, o selecciónalo y pulsa **Supr** o **Retroceso**. |
| Empezar de nuevo | Selecciona **Restablecer curva**. |

## Niveles

Fija el punto negro, el punto blanco y los tonos medios de la entrada, y después
los lleva al rango de **Salida**. Las páginas **Rojo**, **Verde** y **Azul** se
aplican antes que la página **RGB**.

![El panel Propiedades de Niveles con el histograma, Automático, Muestrear punto y los ajustes de entrada, salida y recorte.](shot:filters/levels-properties)

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Automático**, **Muestrear punto** | Ajustan la entrada a partir de la imagen (consulta [Añadir y editar filtros](/es/docs/filters/adding/)) | |
| **Sombras**, **Luces** (bajo el histograma) | Marcan en el lienzo las zonas recortadas | |
| **Negro** (**Entrada**) | 0–1; se puede escribir cualquier valor. Se mantiene por debajo de **Blanco** de entrada. | 0 |
| **Blanco** (**Entrada**) | 0–1; se puede escribir cualquier valor | 1 |
| **Tonos medios** | 0.1–10. Por encima de 1 aclara. | 1 |
| **Negro** (**Salida**) | 0–1; se puede escribir cualquier valor | 0 |
| **Blanco** (**Salida**) | 0–1; se puede escribir cualquier valor | 1 |
| **Limitar entrada** | Recorta los tonos fuera de **Negro** y **Blanco** de entrada, en todas las páginas | Desactivado |
| **Limitar salida** | Recorta el resultado al rango de salida, en todas las páginas | Desactivado |

## Brillo / Contraste

**Contraste** separa o junta los tonos alrededor del gris medio, y después
**Brillo** aclara u oscurece todos los tonos en la misma cantidad.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Brillo** | −100 a 100 | 0 |
| **Contraste** | −100 a 100. 50 duplica el contraste y −50 lo reduce a la mitad. | 0 |

## Umbral

Vuelve negros los píxeles más oscuros que **Umbral** y blancos los demás.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Umbral** | 0–1; se puede escribir cualquier valor | 0.5 |

## Exposición

Cambia la exposición en pasos. **Desplazamiento** sube o baja los negros.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Exposición** | −10 a 10 EV, o hasta ±126 EV escrito | 0 EV |
| **Desplazamiento** | −0.5 a 0.5 | 0 |
| **Gamma** | 0.1–10. Por encima de 1 aclara los tonos medios. | 1 |

## Viñeta

Oscurece la imagen fuera de una elipse con las proporciones del lienzo, o la
aclara cuando **Intensidad** es negativa. Al ±100%, los bordes cambian hasta 2
pasos.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Intensidad** | −100% a 100% | 40% |
| **Radio** | 10–150% de la mitad del tamaño del lienzo | 95% |
| **Suavidad** | 0–100% del radio que se usa para el degradado | 55% |
| **Centro X**, **Centro Y** (en **Posición**) | 0–100% del ancho y el alto del lienzo | 50% |
