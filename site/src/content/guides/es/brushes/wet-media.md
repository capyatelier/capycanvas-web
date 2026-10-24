---
title: "Mezcla, difusión y cerdas"
description: "Los ajustes que controlan cómo manejan la pintura los pinceles húmedos, de acuarela, de mezcla y de cerdas."
related: ["brushes/tip-texture", "brushes/basics", "drawing/blend-liquify", "drawing/brush-tools"]
---

Puedes definir cómo manejan la pintura los pinceles húmedos y de mezcla en el panel
**Herramienta**. Cada grupo aparece solo en los pinceles que se nombran en su sección.

![La parte inferior del panel Herramienta para Acuarela húmeda, con los grupos Mezcla, Acuarela, Difusión y Fusión.](shot:brushes/wet-media-settings)

## Mezcla

**Mezcla** aparece en los pinceles de pintura al óleo, **Gouache opaco**, los
pinceles de acuarela y todos los mezcladores. **Recogida promediada**,
**Persistencia** y **Recarga por presión** aparecen solo en los pinceles de pintura
al óleo, **Gouache opaco**, **Mezclador húmedo** y **Mezclador de color**.

### Carga de pintura

Define cuánto color propio lleva el pincel y, en los pinceles de acuarela, la
intensidad del pigmento. Con valores más bajos predomina el color recogido de la capa.

### Recogida de color

Define cuánto arrastra el pincel a lo largo del trazo el color que recoge de la capa.

### Dilución

Diluye la pintura que lleva el pincel. Con valores más altos, el color propio del
pincel pierde fuerza en la mezcla.

### Recogida promediada

Define hasta qué punto los colores recogidos por toda la punta se funden en uno. Al
0%, cada parte de la punta conserva el suyo.

### Persistencia

Define hasta dónde se arrastra el color promediado a lo largo del trazo. Solo
aparece mientras **Recogida promediada** está por encima del 0%.

### Recarga por presión

Define cuánto recarga la presión firme el color seleccionado en el pincel.
**Pincel de mezcla** deposita su color con presión firme y solo mezcla con un toque
suave.

## Mezclador

Cada mezclador añade ajustes al grupo **Mezclador**. **Alcance** está arriba del
todo del panel **Herramienta**.

| Ajuste | Mezcladores | Define |
| --- | --- | --- |
| **Alcance** | Todos salvo **Espátula de mezcla** y **Marmolado** | Hasta dónde recoge color el mezclador alrededor de cada punto del trazo. |
| **Vetas** | **Dedo**, **Mezclador suave**, **Difumino**, **Pañuelo de papel**, **Mezclador natural**, **Mezclador de cerdas**, **Espátula de mezcla** | Cuánto se rompe el trazo en vetas a lo largo de su dirección. |
| **Nitidez** | **Enfocar** | Cuánto contraste añade el trazo. |
| **Textura conservada** | **Mezclador que conserva la textura** | Cuánto de la textura fina bajo el trazo permanece sobre el color mezclado. |
| **Tamaño del detalle** | **Mezclador que conserva la textura** | El tamaño de la textura que se conserva. |
| **Mezclar luminosidad** | **Mezclador de tono** | Cuánta luminosidad se mezcla junto con el tono y la saturación. |
| **Grano** | **Mezclador disperso** | Con qué plenitud sustituye cada píxel disperso al que tiene debajo. |
| **Estiramiento** | **Mezclador pictórico**, **Mezclador de cristal** | Cuánto se estiran las manchas o las celdas a lo largo del trazo. |
| **Tamaño de celda** | **Mezclador de cristal** | El tamaño de las celdas. |
| **Remolino** | **Marmolado** | Con qué fuerza se riza la pintura. |
| **Tamaño del remolino** | **Marmolado** | El tamaño de los remolinos. |
| **Conservación de bordes** | **Mezclador peine** | Con qué facilidad se detiene la mezcla en un borde entre colores. |

## Acuarela

**Aguada de acuarela** y **Acuarela húmeda** tienen un grupo **Acuarela** para el
borde más oscuro que se forma donde se acumula la pintura. La acuarela solo reacciona a la pintura de la misma capa. **Intensidad del borde** está en la parte superior del panel **Herramienta**, sobre los grupos.

### Intensidad del borde

Define lo oscuro que es el borde.

### Anchura del borde

Define el ancho del borde, de 0 a 32 px.

## Difusión

El grupo **Difusión** de los dos pinceles de acuarela define cómo se extienden el
agua y el pigmento por el papel alrededor del trazo. La pintura solo se extiende
durante el trazo, no después de levantar el lápiz.

### Difusión en húmedo

Define la rapidez con la que la pintura se extiende por el papel que ya está húmedo.

### Difusión en seco

Define la rapidez con la que la pintura se extiende por el papel seco.

### Distancia de difusión

Define hasta dónde puede extenderse la pintura desde cada toque, de 0 a 96 px.

### Carga de agua

Define cuánta agua deposita cada toque en el papel. Está en la parte superior del panel **Herramienta**, sobre los grupos.

## Mezcla de colores

Puedes elegir cómo combina un pincel de mezcla los colores que recoge.

Haz una de las siguientes acciones:

- Elige **Mezcla Oklab**, **Mezcla en luz lineal** o **Mezcla clásica** en **Mezcla de colores** del panel **Herramienta**.
- Abre **Más opciones de herramienta** en la barra Opciones de herramienta y elige **Mezcla de colores** en el cajón Herramienta ([Tamaño, intensidad y opacidad](/es/docs/brushes/basics/)).
- Busca el nombre de la opción en la búsqueda de comandos.

| Opción | Mezcla |
| --- | --- |
| **Mezcla Oklab** | Mezcla los colores recogidos de forma uniforme, según los percibe el ojo. |
| **Mezcla en luz lineal** | Mezcla los colores recogidos como se mezcla la luz. |
| **Mezcla clásica** | Mezcla los valores de color tal como están almacenados en el dibujo. |

Todos los pinceles de mezcla integrados empiezan con **Mezcla Oklab**. La opción se
guarda con el pincel, y el ajuste **Mezcla** del dibujo no la cambia. En un pincel
que no mezcla, las opciones no están disponibles.

![El ajuste Mezcla de colores con Mezcla Oklab.](shot:brushes/color-mixing-menu)

## Cerdas

El grupo **Cerdas** solo aparece en **Pincel de cerdas**. Este pincel introduce
vetas del otro color del par de primer plano y fondo en gruesos surcos de pintura.

### Escala de las cerdas

Define el tamaño de las marcas de las cerdas en relación con el tamaño del pincel.
El deslizador va del 25% al 200%, y puedes escribir valores de hasta el 400%.

### Carga de pintura

Define cuánta pintura lleva el pincel al empezar cada trazo.
