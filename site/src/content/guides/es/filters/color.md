---
title: "Filtros de color"
description: "Ajustes de los filtros de la categoría Color."
related: ["filters/adding", "filters/tone", "filters/how-filters-apply"]
---

Los filtros de color están en **Filtro > Color** y en la categoría **Color** del
panel **Filtros**. Sus ajustes se cambian en el panel **Propiedades**.

![El panel Filtros con la categoría Color y una vista previa de cada filtro.](shot:filters/color-list)

## Tono / Saturación

Desplaza el tono, la saturación y la claridad de toda la imagen en la página
**General**, o de un rango de colores en las páginas de **Rojos** a **Magentas**.
**Colorear** da a cada píxel un mismo tono y una misma saturación y conserva su
claridad.

![El panel Propiedades de Tono / Saturación en la página Rojos.](shot:filters/hue-saturation-properties)

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Tono** | −180° a 180°, o 0–360° con **Colorear** | 0° |
| **Saturación** | −100% a 100%, o 0–100% con **Colorear** | 0%, o 25% con **Colorear** |
| **Claridad** | −100% a 100% | 0% |
| **Centro** | 0–360° de tono Oklab. Solo en las páginas de color. | Rojos 30°, Amarillos 110°, Verdes 145°, Cianes 195°, Azules 265°, Magentas 330° |
| **Anchura** | 0–180°. Solo en las páginas de color. | 30° |
| **Suavizado de bordes** | 0–90°. Solo en las páginas de color. | 30° |
| **Colorear** | Activado o desactivado. Mientras está activado, solo queda la página **General**. | Desactivado |

## Invertir

Invierte todos los canales de color. No tiene ajustes.

## Desaturar

Sustituye cada color por un gris con la misma claridad HSL. No tiene ajustes.

## Filtro fotográfico

Tiñe la imagen hacia **Color** según **Densidad**.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Color** | Cualquier color | #FFB873 |
| **Densidad** | 0–100% | 25% |
| **Conservar luminosidad** | Activado o desactivado | Activado |

## Corrección selectiva de color

Cambia el cian, el magenta, el amarillo y el negro de un rango de colores en cada
página. De **Rojos** a **Magentas** actúan sobre colores saturados, y **Blancos**,
**Neutros** y **Negros** actúan sobre tonos casi grises.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Cian** | −100% a 100% | 0% |
| **Magenta** | −100% a 100% | 0% |
| **Amarillo** | −100% a 100% | 0% |
| **Negro** | −100% a 100% | 0% |
| **Método** | **Relativo** escala cada cambio según la tinta que ya tiene el color. **Absoluto** lo añade tal cual. Se aplica a todas las páginas. | **Relativo** |

## Mezclador de canales

Construye cada canal de salida en las páginas **Rojo**, **Verde** y **Azul** a
partir de una mezcla de los canales de entrada rojo, verde y azul, más
**Constante**. Con **Monocromo** activado, solo queda la página **Gris**, y su
mezcla da una imagen en gris.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Rojo** | −200% a 200% | 100% en la página **Rojo**, 21.26% en **Gris** y 0% en las demás |
| **Verde** | −200% a 200% | 100% en la página **Verde**, 71.52% en **Gris** y 0% en las demás |
| **Azul** | −200% a 200% | 100% en la página **Azul**, 7.22% en **Gris** y 0% en las demás |
| **Constante** | −100% a 100% | 0% |
| **Monocromo** | Activado o desactivado | Desactivado |

## Consulta de color (LUT)

Aplica a los colores una tabla de consulta del menú de estilos (muestra el estilo
actual, como **Cálido**), mezclada con el original según **Intensidad**. Para
usar tu propia LUT, selecciona **Importar LUT…** junto al menú de estilos y abre un
archivo 3D `.cube` de hasta 16 MB.

![El panel Propiedades de Consulta de color (LUT) con el menú de estilos e Importar LUT….](shot:filters/color-lookup)

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| Menú de estilos | **Original** (sin cambios), **Cálido**, **Frío**, **Monocromo** o una LUT importada con su título. Las LUT importadas se guardan en el dibujo. | **Original** |
| **Espacio de color de la LUT** | **sRGB**, **Display P3**, **Adobe RGB (1998)**, **ProPhoto RGB**: el espacio de color que espera una LUT importada. Oculto con **Original** y con los estilos integrados. | **sRGB** |
| **Intensidad** | 0–100% | 100% |

## Equilibrio de color

Desplaza los colores por separado en las páginas **Sombras**, **Tonos medios** y
**Luces**. Los valores positivos se acercan al segundo color de la etiqueta de
cada deslizador.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Cian — Rojo** | −100 a 100 | 0 |
| **Magenta — Verde** | −100 a 100 | 0 |
| **Amarillo — Azul** | −100 a 100 | 0 |
| **Conservar luminosidad** | Activado o desactivado, para todas las páginas | Activado |

## Intensidad de color

**Intensidad de color** sube la saturación de los colores apagados más que la de
los saturados. **Saturación** cambia todos los colores por igual.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Intensidad de color** | −100% a 100% | 0% |
| **Saturación** | −100% a 100% | 0% |
| **Proteger tonos de piel** | Activado o desactivado. Limita una **Intensidad de color** positiva en los tonos naranjas y de piel. | Activado |

## Blanco y negro

Convierte la imagen a gris, con un deslizador que fija lo claro que
queda cada tono. **Matiz** colorea el resultado con **Color del matiz**.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Rojos** | −100% a 200% | 40% |
| **Amarillos** | −100% a 200% | 60% |
| **Verdes** | −100% a 200% | 40% |
| **Cianes** | −100% a 200% | 60% |
| **Azules** | −100% a 200% | 20% |
| **Magentas** | −100% a 200% | 80% |
| **Matiz** | Activado o desactivado | Desactivado |
| **Color del matiz** | Cualquier color | #BF874C |

## Mapa de degradado

Asigna los tonos de la imagen a **Degradado**, desde la parada izquierda para los
tonos más oscuros hasta la parada derecha para los más claros. **Cantidad**
mezcla el resultado con el original.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Degradado** | Cualquier degradado, editado igual que en la herramienta [Degradado](/es/docs/drawing/gradient/) | De negro a blanco, interpolación **Oklab** |
| **Cantidad** | 0–100% | 100% |

## Balance de blancos

Calienta o enfría la imagen con **Temperatura** y la desplaza hacia el magenta o
el verde con **Matiz**. **Elegir punto neutro**, en la parte superior del panel
**Propiedades**, ajusta los dos para que el punto en el que haces clic en el
lienzo quede neutro.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Temperatura** | −100 a 100, o hasta ±1000 escrito. Los valores positivos son más cálidos. | 0 |
| **Matiz** | −100 a 100, o hasta ±800 escrito. Los valores positivos son más magenta. | 0 |
| **Conservar luminosidad** | Activado o desactivado | Activado |

## Virado dividido

Tiñe las sombras hacia el color de **Sombras** y las luces hacia el color de
**Luces**, sin cambiar su brillo.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Sombras** | Cualquier color | #295494 |
| **Luces** | Cualquier color | #F5AD57 |
| **Equilibrio** | −100 a 100. Mueve el punto donde se encuentran los dos tintes. Los valores positivos dan el color de **Sombras** a una parte mayor de la imagen. | 0 |
| **Intensidad** | 0–100% | 30% |

## Solarizar

Invierte cada canal de color donde es más claro que **Umbral**. **Intensidad**
mezcla el resultado con el original.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Umbral** | 0–100% | 50% |
| **Intensidad** | 0–100% | 100% |

## Iridescencia

Añade un arcoíris de película fina que sigue el brillo de la imagen y cambia con
el tiempo. Una imagen exportada muestra los colores del momento de la
exportación.

| Ajuste | Rango u opciones | Predeterminado |
| --- | --- | --- |
| **Intensidad** | 0–100% | 55% |
| **Tamaño de la película** | 8–240 px | 64 px |
| **Velocidad** | 0–4 | 0.3 |
| **Animar** | Activado o desactivado. Mientras está activado, los colores cambian sin parar a la **Velocidad** indicada. | Activado |
| **Tiempo congelado** | 0–3600 s: el momento que se muestra mientras **Animar** está desactivado | 0 s |
