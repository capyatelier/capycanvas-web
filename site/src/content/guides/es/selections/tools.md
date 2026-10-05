---
title: "Herramientas de selección"
description: "Las herramientas de selección y sus ajustes en el panel Herramienta."
related: ["selections/working", "selections/tonal-range", "selections/quick-mask", "customize/toolbars"]
---

Puedes seleccionar una parte del dibujo con las herramientas de selección. Los
ajustes de una herramienta están en el panel Herramienta y, en Foto, también en
la barra Opciones de herramienta, en la parte superior de la ventana.

| Herramienta | Selecciona | Tecla |
| --- | --- | --- |
| **Selección rectangular** | Un rectángulo que arrastras | |
| **Selección elíptica** | Una elipse que arrastras | |
| **Selección con lazo** | Una forma que dibujas a mano alzada | **M** |
| **Lazo poligonal** | Una forma que marcas esquina a esquina con clics | |
| **Seleccionar automáticamente** | Una zona continua de color parecido | **W** |
| **Seleccionar por color** | Todos los píxeles de color parecido, estén unidos o no | |
| **Pintar selección** | La zona que pintas | |
| **Rango tonal** | Los píxeles de una franja de brillo (consulta [Seleccionar por brillo](/es/docs/selections/tonal-range/)) | |

## Elegir una herramienta de selección

Haz una de las siguientes acciones:

- Escribe el nombre de la herramienta en la [búsqueda de comandos](/es/docs/start/command-search/).
- Pulsa **M** para **Selección con lazo** o **W** para **Seleccionar automáticamente**.
- En Pintura, selecciona **Seleccionar** o **Seleccionar automáticamente / Seleccionar por color** en la barra de herramientas.
- En Foto, selecciona **Selección rectangular / Selección elíptica**, **Selección con lazo / Lazo poligonal**, **Seleccionar automáticamente / Seleccionar por color** o **Pintar selección** en la barra de herramientas.
- En Boceto, selecciona **Seleccionar** en la barra de título. Vuelve a seleccionarlo para abrir, junto al panel Herramienta, un cajón con todas las herramientas de selección.

Un botón de la barra que agrupa varias herramientas muestra la última que
usaste. Para elegir otra, haz clic con el botón derecho en el botón o mantenlo
pulsado, o selecciona la herramienta en el panel **Conjunto de herramientas**.
**Seleccionar**, en la barra de título de Boceto, vuelve a la última herramienta
de selección que usaste.

**Rango tonal** no tiene botón en las barras de Pintura ni de Foto.

Si eliges una herramienta de selección en la Máscara rápida, o mientras editas
una capa de selección, ese modo sigue activado.

![El cajón Seleccionar en Boceto, con las herramientas de selección junto al panel Herramienta de Selección rectangular.](shot:selections/tools-sketch-select-drawer)

## Modo

Puedes combinar la próxima zona que selecciones con la selección actual.

Selecciona **Selección nueva**, **Añadir a la selección**, **Restar de la selección**
o **Intersecar con la selección** en la fila **Modo** del panel Herramienta.
**Selección nueva** es el valor predeterminado.

Para cambiar el modo de una sola selección, mantén pulsada una tecla al
empezarla:

- **Mayús**: **Añadir a la selección**
- **Alt**: **Restar de la selección**
- **Mayús+Alt**: **Intersecar con la selección**
- **Ctrl**: **Selección nueva**

Mientras mantienes pulsada la tecla, la fila **Modo** muestra el modo que elige.
**Pintar selección** solo tiene **Añadir a la selección** y **Restar de la selección**.

## Suavizado de contornos y Radio de suavizado de bordes

**Suavizado de contornos** está activado de forma predeterminada.
**Radio de suavizado de bordes** suaviza el borde de cada selección nueva hasta
100 px, y empieza en 0.

**Pintar selección** no tiene ninguno de los dos ajustes. **Rango tonal** tiene
**Suavizado de bordes** y no tiene **Suavizado de contornos**.

## Selección rectangular y Selección elíptica

Arrastra de una esquina a la esquina opuesta. Una vez empezado el arrastre,
mantén pulsada **Mayús** para obtener un cuadrado o un círculo, o **Alt** para
dibujar desde el centro.

- **Proporción fija** mantiene la selección en la proporción fijada en **Anchura de la proporción** y **Altura de la proporción**, 1 : 1 de forma predeterminada.
- **Tamaño fijo** dibuja una selección con la **Anchura** y la **Altura** que indiques, en píxeles. El valor predeterminado es 256 × 256.
- **Dibujar desde el centro** coloca el centro de la selección donde empiezas a arrastrar.

Al activar **Proporción fija** se desactiva **Tamaño fijo**, y al revés. Un clic
sin arrastre deja la selección como estaba.

## Selección con lazo

Dibuja alrededor de la zona. Al levantar el lápiz o soltar el botón del ratón, la
forma cerrada se convierte en la selección.

## Lazo poligonal

Haz clic en cada esquina de la forma. Para terminar, haz una de las siguientes acciones:

- Vuelve a hacer clic en la primera esquina.
- Pulsa **Intro**.
- Selecciona **Finalizar** en la barra del lienzo, o **Finalizar selección** en el panel Herramienta.

Un polígono necesita al menos tres esquinas.

- Para quitar la última esquina, pulsa **Retroceso** o **Supr**, o selecciona **Eliminar punto** en la barra del lienzo o **Eliminar último punto** en el panel Herramienta.
- Para cancelar el polígono, pulsa **Escape**, o selecciona **Cancelar** en la barra del lienzo o **Cancelar selección** en el panel Herramienta.
- Para ajustar el siguiente borde a pasos de 45°, mantén pulsada **Mayús**. Para ajustar todos los bordes, activa **Restringir bordes a 45°** en el panel Herramienta.

Mientras colocas esquinas, la [barra del lienzo](/es/docs/selections/working/)
de la parte inferior del lienzo muestra **Eliminar punto**, **Cancelar** y
**Finalizar**.

![La barra del lienzo de un polígono, con Eliminar punto, Cancelar y Finalizar.](shot:selections/tools-polygon-bar)

## Seleccionar automáticamente y Seleccionar por color

Haz clic en un color del lienzo. **Seleccionar automáticamente** toma la zona
continua alrededor de ese punto, y **Seleccionar por color** toma los píxeles que
coinciden en cualquier parte de la imagen.

![El panel Herramienta de Seleccionar automáticamente, con Modo, Suavizado de contornos, Origen, Tolerancia, los ajustes de Bordes y Radio de suavizado de bordes.](shot:selections/tools-auto-select-settings)

### Origen

Fija dónde buscan colores las herramientas: **Imagen visible** (el valor
predeterminado), **Capa en edición** o **Capas de referencia**, las capas marcadas
con [Usar como referencia](/es/docs/layers/settings/).

### Tolerancia

Fija cuánto puede alejarse un color del color en el que haces clic para seguir
quedando seleccionado. El valor predeterminado es 10%.

### Cerrar huecos

Cierra los huecos de hasta esta anchura en los bordes que rodean la zona, de 0 a
32 px. Solo en **Seleccionar automáticamente**.

### Expansión

Amplía la selección hasta 32 px, o la reduce con un valor negativo.

### Suavizado del contorno

Suaviza los bordes escalonados de la selección. Al 0%, los bordes siguen píxeles
enteros. Se oculta mientras **Suavizado de contornos** está desactivado.

**Seleccionar automáticamente** y **Seleccionar por color** comparten un mismo
ajuste **Origen**, y comparten **Tolerancia** y los ajustes de **Bordes** con las
[herramientas de relleno](/es/docs/drawing/fill/).

## Pintar selección

Pinta sobre la zona con un pincel redondo. Un bucle cerrado que pintes se
rellena.

- **Añadir a la selección** o **Restar de la selección** fija lo que hace el pincel.
- **La presión controla el tamaño** está desactivado de forma predeterminada.
- **Tamaño**, **Dureza** y **Opacidad** ajustan el pincel redondo.

Mantén pulsada **Mayús** mientras pintas para añadir, o **Alt** para hacer lo
contrario del ajuste actual. El extremo borrador de un lápiz resta. Un trazo que
resta no hace nada mientras no haya selección.

## El botón Seleccionar

**Seleccionar**, bajo los ajustes de una herramienta de selección en el panel
Herramienta, abre el [menú Seleccionar](/es/docs/selections/working/). Los ajustes
de **Rango tonal** no tienen botón **Seleccionar**.
