---
title: "Editar trazados"
description: "Seleccionar, mover, remodelar y cambiar el estilo de los trazados de una capa vectorial."
related: ["layers/vector", "drawing/figure", "transform/move-transform", "layers/types"]
---

Puedes editar los trazados de una [capa vectorial](/es/docs/layers/vector/) después de dibujarlos.

## Seleccionar y mover trazados

Selecciona un trazado con la herramienta **Operación** ([Mover y transformar](/es/docs/transform/move-transform/)). Mantén pulsada **Mayús** para añadir o quitar trazados. Arrastra por el lienzo vacío para seleccionar los trazados que el recuadro encierra por completo, o pulsa **Ctrl+A** para seleccionar todos los trazados.

![El panel Herramienta de Operación con un trazado seleccionado, con los botones Organizar, los botones de voltear y girar y Escalar el grosor del contorno.](shot:vector/operation-settings)

Un cuadro discontinuo con tiradores rodea la selección.

- Arrastra un trazado seleccionado para moverlo. Mantén pulsada **Alt** para mover una copia.
- Arrastra un tirador para escalar, o el tirador que está encima del cuadro para girar. **Mayús** mantiene las proporciones o gira en pasos de 15°.
- Las teclas de flecha lo desplazan 1 px, y 10 px con **Mayús**.
- Los botones de voltear y girar del panel **Herramienta** giran la selección alrededor de su centro.
- **Supr** elimina los trazados seleccionados.

**Escalar el grosor del contorno** del panel **Herramienta** está activado de forma predeterminada. Desactívalo para escalar los trazados y conservar el grosor de sus contornos.

## Editar puntos

Puedes mover, añadir y eliminar los anclajes de los trazados seleccionados.

Haz una de las siguientes acciones:

- Pulsa **A**.
- Con **Operación**, pulsa **Intro** o haz doble clic en un trazado.
- En Pintura y en Foto, haz clic con el botón derecho en **Operación / Transformar / Editar puntos** en la barra de herramientas, o mantenlo pulsado, y elige **Editar puntos**.

Unos cuadrados marcan los anclajes, y los anclajes seleccionados muestran sus tiradores. Pulsa **Escape** para volver a **Operación**.

![Editar puntos en un trazado, con sus anclajes y tiradores seleccionados.](shot:vector/edit-points)

- Haz clic en un anclaje para seleccionarlo, haz clic con **Mayús** para añadir o quitar uno, o arrastra por el lienzo vacío para seleccionar los anclajes de dentro.
- Arrastra los anclajes para moverlos. Arrastra un tirador para girar la curva, o mantén pulsada **Alt** para moverlo separado de su pareja.
- Arrastra un segmento para curvarlo. Haz clic en un segmento para añadir un anclaje.
- Haz doble clic en un anclaje para cambiarlo entre esquina y suave.
- **Supr** elimina los anclajes seleccionados.

Editar un anclaje convierte un rectángulo o una elipse en un trazado normal.

## Comandos de trazado

Puedes unir, cerrar, dividir, invertir y combinar los trazados seleccionados con **Editar > Trazado**. El panel **Herramienta** de **Editar puntos** muestra los cuatro primeros.

- **Unir trazados** conecta los extremos más cercanos de dos trazados abiertos, o cierra un trazado abierto.
- **Cerrar trazado** conecta los extremos de cada trazado abierto seleccionado.
- **Dividir en el punto** corta los trazados seleccionados en los anclajes seleccionados.
- **Invertir dirección** recorre cada trazado en sentido contrario.
- **Crear trazado compuesto** combina los trazados seleccionados en uno con huecos donde se superponen. **Liberar trazado compuesto** vuelve a separarlos.

Un comando que no puede actuar indica qué seleccionar, por ejemplo «Selecciona uno o dos trazados abiertos para unirlos».

## Organizar

Puedes cambiar el orden de apilamiento de los trazados seleccionados dentro de su capa con **Editar > Organizar**: **Traer al frente**, **Traer adelante**, **Enviar atrás** y **Enviar al fondo**. El panel **Herramienta** de **Operación** tiene los mismos botones.

## Ajustes del trazado

Con trazados seleccionados, **Propiedades** muestra el trazado seleccionado que está más al frente. Una etiqueta termina en «(mixto)» cuando los trazados seleccionados difieren, y un cambio se aplica a todos los trazados seleccionados.

![El panel Propiedades de un trazado con relleno y contorno.](shot:vector/path-properties)

### Relleno

Activa o desactiva el relleno. Un relleno nuevo usa el color de fondo.

### Color de relleno

Define el color del relleno.

### Superposiciones

Define cómo se rellenan las partes que se superponen. **Rellenas** las rellena, y **Huecos** las deja vacías. Se muestra cuando **Relleno** está activado.

### Contorno

Activa o desactiva el contorno. Un contorno nuevo usa el color de primer plano.

### Color del contorno

Define el color del contorno.

### Grosor del contorno

Define el grosor del contorno, de 0.1 a 4096 px.

### Extremos

Define la forma de los extremos abiertos: **Planos**, **Redondos** o **Cuadrados**.

### Esquinas

Define la forma del contorno en las esquinas: **Agudas**, **Redondeadas** o **Biseladas**.

### Límite de esquinas agudas

Define hasta dónde puede crecer una esquina aguda, de 1 a 20. Pasado el límite, la esquina se bisela. Se muestra cuando **Esquinas** está en **Agudas**.
