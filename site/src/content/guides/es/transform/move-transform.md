---
title: "Mover y transformar"
description: "Mover y transformar capas y píxeles seleccionados con la herramienta Operación y con Transformar."
related: ["selections/working", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Puedes mover capas y píxeles seleccionados con la herramienta **Operación**, y
escalarlos, girarlos, inclinarlos, distorsionarlos o deformarlos con
**Transformar**.

## Herramienta Operación

Haz una de las siguientes acciones:

- Abre el menú de una capa en el panel Capas y elige **Mover capa / máscara**.
- Pulsa **O**.
- En Pintura y en Foto, selecciona **Operación / Transformar** en la barra de herramientas. Haz clic con el botón derecho en el botón, o mantenlo pulsado, para elegir **Operación**.
- Escribe «Operación» en la [búsqueda de comandos](/es/docs/start/command-search/).

Boceto no tiene botón **Operación**.

## Mover capas

Sin selección, arrastra en el lienzo para mover las capas seleccionadas. Las
teclas de flecha las desplazan 1 px, y 10 px con **Mayús**.

No puedes mover una capa bloqueada.

## Mover píxeles seleccionados

Con una selección, arrastra para mover los píxeles seleccionados de la capa de
pintura activa, en pasos de píxeles enteros. Mientras editas una máscara,
**Operación** mueve la máscara.

Con las guías visibles, **Operación** también selecciona y arrastra guías
(consulta [Reglas y guías](/es/docs/drawing/ruler/)).

## Dejar copia

Puedes mover una copia de los píxeles seleccionados y dejar los originales en su
sitio.

Activa **Dejar copia** en el panel Herramienta o en la
[barra de selección](/es/docs/selections/working/). Mantén pulsada **Alt** al
empezar a arrastrar para hacer lo contrario en ese arrastre.

## Transformar

Haz una de las siguientes acciones:

- Elige **Editar > Transformar**.
- Pulsa **Ctrl+T**.
- Selecciona **Transformar** en la barra de comandos en Pintura y en Foto, o en la barra de título en Boceto.
- Selecciona **Transformar** en la barra de selección.
- En Pintura y en Foto, haz clic con el botón derecho en **Operación / Transformar** en la barra de herramientas, o mantenlo pulsado, y elige **Transformar**.

Con una selección, **Transformar** cambia los píxeles seleccionados de la capa o
la máscara activa. Sin selección, cambia las capas seleccionadas. Aparecen un
cuadro con tiradores y la barra del lienzo.

Para terminar, selecciona **Aplicar** o pulsa **Intro**. **Cancelar** o **Escape**
descartan la transformación, igual que **Deshacer** mientras transformas capas.

Para transformar varias capas, quita antes la selección.

## Tiradores

En **Libre** y **Uniforme**:

- Arrastra dentro del cuadro para moverlo. Mantén pulsada **Mayús** para moverlo solo en horizontal o en vertical.
- Arrastra un tirador de esquina o de lado para escalar desde el lado opuesto. Mantén pulsada **Mayús** para conservar las proporciones, o **Alt** para escalar respecto al pivote.
- Mantén pulsada **Ctrl** y arrastra un tirador de lado para inclinar, hasta 85°.
- Arrastra el tirador que hay sobre el borde superior para girar respecto al pivote. Mantén pulsada **Mayús** para girar en pasos de 15°.
- Arrastra el pivote para moverlo.

En **Distorsionar**:

- Arrastra una esquina para moverla por separado, o un tirador de lado para mover ese lado.
- Mantén pulsada **Mayús** sobre una esquina para reflejar el movimiento en la esquina vecina y obtener una perspectiva simétrica.

En **Deformar**:

- Arrastra los puntos de la malla y los tiradores tangentes del punto seleccionado.
- Haz clic con **Mayús** pulsada en varios puntos para moverlos juntos.

En todos los modos:

- Las teclas de flecha desplazan el cuadro 1 px, y 10 px con **Mayús**.
- En una pantalla táctil, un dedo sobre un tirador o dentro del cuadro lo arrastra. Un dedo en cualquier otro sitio mueve la vista.

## Barra de transformación

![La barra del lienzo de una transformación, con Modo, Ajustar, los botones de voltear y girar, Restablecer, Interpolación, Cancelar y Aplicar.](shot:transform/transform-bar)

### Modo

**Libre**, **Uniforme**, **Distorsionar** o **Deformar**. **Uniforme** conserva
las proporciones. Las transformaciones de capa se abren en **Uniforme**.

### Tamaño original

Devuelve una foto colocada al 100%. Solo para fotos sin **Distorsionar** ni
**Deformar**.

### Ajustar

Ajusta los bordes y el centro del cuadro al lienzo, a otras capas visibles y a
las guías. El giro no se ajusta. Desactivado de forma predeterminada.

### Perspectiva

Con **Distorsionar**, refleja cada arrastre de esquina en la esquina vecina.

### Cuadrícula de deformación

Con **Deformar**:

- **Dividir cuadrícula**: elige **Dividir verticalmente**, **Dividir horizontalmente** o **Dividir en cruz** y después toca la deformación para añadir ahí una línea de cuadrícula sin cambiar la forma. **Escape** cancela la división. Una cuadrícula admite hasta 32 celdas en cada dirección.
- **Seleccionar puntos**: toca puntos para seleccionarlos y moverlos juntos.
- **Restablecer cuadrícula**: reemplaza la deformación por una cuadrícula recta.
- **Cuadrícula**: **3 × 3** (el valor predeterminado), **4 × 4** o **5 × 5**. Disponible hasta que cambias la forma.

![La barra del lienzo en el modo Deformar, con Dividir cuadrícula, Seleccionar puntos, Restablecer cuadrícula y Cuadrícula.](shot:transform/warp-bar)

### Botones de voltear y girar

Los botones de icono **Voltear horizontalmente**, **Voltear verticalmente**,
**Girar 90° a la izquierda** y **Girar 90° a la derecha** reflejan o giran el
contenido respecto al pivote.

### Restablecer

Deshace todos los cambios hechos en esta transformación y la mantiene abierta.
**Modo** vuelve a **Libre**.

### Interpolación

Define cómo se remuestrean los píxeles: **Más cercano**, **Bilineal**, **Bicúbica**
o **Lanczos**. **Bilineal** es el valor predeterminado en **Libre** y
**Uniforme**, y **Bicúbica** en **Distorsionar** y **Deformar**.

## Valores de transformación en el panel Herramienta

El panel Herramienta, y la barra Opciones de herramienta en Foto, muestran los
valores de una transformación abierta, salvo en **Deformar**.

- **Anclaje de posición**: **X** e **Y**, en píxeles. La cuadrícula de anclaje que hay encima elige a qué punto del cuadro corresponden.
- **Escala**: **Anchura** y **Altura**, en porcentaje. **Uniforme** los mantiene vinculados.
- **Rotación**: **Ángulo**, de −180° a 180°.
- **Inclinación**: **Inclinación**, de −85° a 85°.

![El panel Herramienta durante una transformación, con Anclaje de posición, Escala, Rotación e Inclinación.](shot:transform/transform-numbers)

## Transformaciones de capa

La transformación de capas de pintura o de foto completas se guarda con cada
capa, y los píxeles no se remuestrean. **Transformar** vuelve a abrirse a partir
de la transformación guardada.

Hasta que apliques la transformación a los píxeles, no puedes retocar una capa
escalada o girada, ni pintar en una capa distorsionada o deformada.

## Aplicar transformación a píxeles

Puedes hacer que la transformación guardada de una capa pase a formar parte de
sus píxeles.

Haz una de las siguientes acciones:

- Elige **Editar > Aplicar transformación a píxeles**.
- Elige **Capa > Ajustes de capa > Aplicar transformación a píxeles**.

Mientras se aplica, una barra en la parte inferior del lienzo dice «Aplicando
transformación…» y muestra **Cancelar**.

## Repetir transformación

Sin selección, elige **Editar > Repetir transformación** para aplicar la última
transformación de capa a las capas seleccionadas. Los pegados, las importaciones
y las transformaciones de píxeles seleccionados no se repiten.

## Imágenes colocadas

Cuando pegas una imagen de otra aplicación o eliges
**Archivo > Importar imagen como capa…**, la imagen se abre en el cuadro de
transformación. **Aplicar** coloca la imagen y **Cancelar** la quita. Hasta que
elijas una de las dos opciones, los demás comandos no están disponibles.
