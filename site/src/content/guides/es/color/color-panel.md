---
title: "Panel de color"
description: "Elegir el color de pintura con la rueda y las muestras del panel Color."
related: ["color/edit-color", "color/palettes", "color/eyedropper", "color-management/hdr"]
---

Puedes elegir el color de pintura en el panel **Color**. Todos los espacios de
trabajo usan el mismo color de pintura.

![El panel Color con la rueda circular, la lectura arriba a la izquierda y las muestras bajo la rueda.](shot:color/panel "1 Lectura · 2 Botones de forma · 3 Editar color · 4 Primer plano y fondo · 5 Intercambiar · 6 Pintura transparente · 7 Negro y blanco")

## Abrir el panel Color

Haz una de las siguientes acciones:

- Elige **Ventana > Color**.
- Elige **Panel de color** en la búsqueda de comandos.
- En Pintura, selecciona la pestaña **Color** en la columna izquierda.
- Selecciona **Color del pincel** al final de la barra de herramientas, o en el extremo derecho de la barra de título en Boceto. Se abre un cajón con los paneles Color y Paletas.

## Rueda de color

Arrastra el anillo exterior para definir el tono, y el campo de su interior para
definir la saturación y el brillo.

En el círculo, arrastra más allá del borde del campo cerca de la parte superior
izquierda, la superior derecha o la inferior para ir directamente al blanco, al
color pleno o al negro. Un gris conserva el último tono que definiste en el anillo.

## Formas del campo

Selecciona uno de los dos botones pequeños que hay fuera del anillo, arriba a la
derecha, para cambiar la forma del campo. Sus descripciones emergentes dicen
**Usar círculo Okhsv**, **Usar cuadrado HSV** y **Usar triángulo HLS**.

| Forma | Campo | Lectura |
| --- | --- | --- |
| Círculo (predeterminado) | Okhsv. Blanco arriba a la izquierda, el color pleno arriba a la derecha, negro abajo. | OKLCH |
| Cuadrado | HSV. La saturación aumenta hacia la derecha y el brillo hacia arriba. | HSB |
| Triángulo | HLS. Las esquinas son el blanco, el negro y el tono puro. | HLS |

## Lectura

Los números de la parte superior izquierda del panel muestran el color en el modelo
de la forma del campo. Selecciona la lectura para alternar entre ese modelo y RGB
de 0 a 255.

## Colores de primer plano y de fondo

Selecciona **Color de primer plano** (la muestra grande de abajo a la izquierda) o
**Color de fondo** (la muestra que hay detrás) para pintar con ese color. La
búsqueda de comandos usa los mismos nombres. La muestra seleccionada tiene un borde
más grueso.

Los pinceles de cerdas vetean cada trazo con el color con el que no estás pintando.

> **Nota:** En la [Máscara rápida](/es/docs/selections/quick-mask/) y en una [capa de selección](/es/docs/selections/selection-layers/), las muestras contienen un par aparte, al principio negro y blanco, y la pintura usa el valor de gris del color. Los colores de la imagen vuelven al salir. En una máscara de capa el color no importa: los pinceles revelan y el Borrador oculta.

## Pintura transparente

Puedes borrar con cualquier pincel o forma de Figura pintando con pintura
transparente. Haz una de las siguientes acciones:

- Selecciona **Pintura transparente** (la muestra a cuadros de abajo a la derecha).
- Elige **Pintura transparente** en la búsqueda de comandos.
- Asigna una tecla a **Pintar con transparencia** en la página [Atajos de teclado](/es/docs/input/keyboard/) y púlsala para activar o desactivar la pintura transparente. **Pintar con transparencia mientras se mantiene pulsado** usa pintura transparente solo mientras mantienes pulsada la tecla.

Al arrastrar en la rueda vuelves a pintar con el color.

## Intercambiar colores

Puedes intercambiar los colores de primer plano y de fondo. Haz una de las
siguientes acciones:

- Selecciona **Intercambiar primer plano y fondo** (las dos flechas a la derecha de la muestra de fondo).
- Elige **Intercambiar primer plano y fondo** en la búsqueda de comandos.
- Pulsa **X** en los mapas de atajos Estilo Photoshop, Estilo Krita, Estilo Clip Studio Paint y Estilo GIMP, o **Mayús+X** en Estilo Affinity.

La misma muestra sigue seleccionada. El mapa de atajos CapyCanvas no tiene tecla
para **Intercambiar colores**.

## Negro y blanco

Selecciona **Pintar con negro** o **Pintar con blanco** (los dos círculos pequeños
junto a la muestra transparente), o elige **Negro** o **Blanco** en la búsqueda de
comandos.

El negro o el blanco sustituye el color de la muestra de primer plano o de fondo
seleccionada. Si **Pintura transparente** está seleccionada, el negro o el blanco
pasa a ser un color de pintura temporal. La rueda edita entonces el color temporal,
y los colores de primer plano y de fondo no cambian.

## Editar color

Selecciona **Editar color…** (el lápiz de la parte superior derecha del panel), o
haz doble clic en la muestra de primer plano o de fondo, para definir el color por
sus valores en [Editar color](/es/docs/color/edit-color/). **Editar color…** no está
disponible mientras **Pintura transparente** está seleccionada.

## Menú de las muestras

En Windows, Linux y Android, haz clic con el botón derecho o mantén pulsada la
muestra de primer plano o de fondo para acceder a **Editar color…**, **Paletas…** e
**Intercambiar primer plano y fondo**.

## Intensidad HDR

En un [dibujo HDR](/es/docs/color-management/hdr/), un arco bajo la rueda define
la intensidad de la pintura en pasos (EV) respecto al blanco SDR, de −2 a +6 EV.
El valor aparece bajo las muestras, por ejemplo «+2.00 EV».

![El panel Color en un dibujo HDR con el arco de intensidad bajo la rueda.](shot:color/panel-hdr)

- Arrastra a lo largo del arco para definir la intensidad.
- Haz doble clic en el arco para volver a 0 EV.
- Con el foco en el arco, pulsa las teclas de flecha para avanzar en pasos de 0.1 EV, o **Inicio** para volver a 0 EV.

La rueda define el color base, y la intensidad lo multiplica en luz lineal. Las
muestras y el arco previsualizan los colores a través de la versión SDR del dibujo.
El arco no está disponible mientras **Pintura transparente** está seleccionada.
