---
title: "Degradado"
description: "Pintar un degradado con la herramienta Degradado, editar sus colores y añadir capas de Relleno degradado."
related: ["drawing/fill", "layers/types", "filters/color", "color/edit-color"]
---

Puedes pintar un degradado en una capa con la herramienta **Degradado**, o añadir
una capa de **Relleno degradado** que sigue siendo editable.

## Herramienta Degradado

Haz una de las siguientes acciones:

- Pulsa **G**.
- En Pintura, selecciona **Degradado** en la barra de herramientas.
- En Foto, selecciona el botón de degradado y relleno que sigue a **Licuar** en la barra de herramientas.
- Busca **Degradado** en la búsqueda de comandos.

Arrastra desde el punto inicial hasta el punto final. Una línea sigue al puntero,
y el degradado se pinta al soltar.

- El degradado cubre toda la capa, con el primer color antes del punto inicial y el último color más allá del punto final.
- Pulsa **Escape** durante el arrastre para cancelar.
- Si arrastras con un dedo, se mueve el lienzo.
- Una selección activa limita el degradado, y se respeta **Bloquear alfa**.
- En la Máscara rápida o en una capa de selección, el degradado va a la máscara de selección.
- Cada degradado es un paso de deshacer.

La herramienta solo pinta la imagen de una capa, y solo en capas que un pincel
puede pintar ([Herramientas de pincel](/es/docs/drawing/brush-tools/)).

## Forma

- **Lineal**: el color cambia a lo largo del arrastre.
- **Radial**: el punto inicial es el centro, y el arrastre define el radio.
- **Reflected**: como Lineal, reflejado a ambos lados del punto inicial.

Haz una de las siguientes acciones:

- Selecciona la forma en **Forma**, en la parte superior del panel **Herramienta**, o en el panel **Conjunto de herramientas**.
- Haz clic con el botón derecho o mantén pulsado el botón Degradado en la barra de herramientas y elige una forma.
- En la barra Opciones de herramienta, elige la forma en **Variante**, o en **Herramienta** en Foto.

## Editor de puntos de color

![El panel Herramienta de la herramienta Degradado con la fila Forma, el editor de puntos de color y Opacidad.](shot:drawing/gradient-tool-panel)

Puedes editar los colores del degradado en el editor de puntos de color, bajo
**Forma** en el panel **Herramienta**. El botón de degradado de la barra Opciones
de herramienta abre el editor en una ventana emergente. Las capas de Relleno
degradado y el filtro **Mapa de degradado** usan el mismo editor
([Filtros de color](/es/docs/filters/color/)).

Mientras no lo edites, el degradado de la herramienta va del color de primer plano
al color de fondo y sigue los cambios de ambos colores. Después de editarlo,
conserva sus puntos de color hasta que seleccionas **Restablecer degradado**. Las
ediciones del degradado de la herramienta no son pasos de deshacer.

### Interpolación

Define cómo se mezclan los colores entre los puntos de color. **Oklab** (el
predeterminado) mezcla de forma uniforme según cómo percibe el ojo el color,
**Luz lineal** mezcla como lo hace la luz y **Clásico** mezcla los valores de color
almacenados.

### Invertir dirección

Invierte el orden de los puntos de color.

### Restablecer degradado

Devuelve el degradado de la herramienta a los colores de primer plano y de fondo,
y el degradado de una capa de Relleno degradado o de un Mapa de degradado a negro
y blanco.

### Añadir punto de color

Selecciona la franja fuera de los marcadores para añadir un punto de color con el
color de ese punto. Un degradado admite hasta 32 puntos de color.

### Marcadores de puntos de color

Selecciona un marcador para seleccionar su punto de color, o arrástralo para
moverlo.

### Posición

Define la posición del punto de color seleccionado, en porcentaje. Los puntos de
los extremos se quedan en 0% y 100%, y un punto de color no puede rebasar a sus vecinos.

### Eliminar punto de color

Elimina el punto de color seleccionado. Los puntos de los extremos no se pueden eliminar.

### Color

Abre [Editar color](/es/docs/color/edit-color/) para el punto de color seleccionado.

### Usar color seleccionado

Asigna el color actual al punto de color seleccionado.

## Opacidad

**Opacidad** define la intensidad del degradado, y es el mismo valor que la
**Opacidad** del pincel actual. En Boceto, usa el deslizador de opacidad del borde
izquierdo.

## Capas de Relleno degradado

Puedes añadir una capa de relleno cuyo degradado sigue siendo editable.

Haz una de las siguientes acciones:

- Elige **Capa > Nuevo > Relleno degradado**.
- Elige **Filtro > Relleno > Relleno degradado**.
- En el panel Filtros, selecciona **Relleno degradado** en **Relleno**.

Los ajustes de la capa están en el panel Propiedades, y cada cambio es un paso de
deshacer.

Una selección activa pasa a ser la máscara de la capa nueva. Para pintar en la
capa, añade antes una máscara ([Tipos de capa](/es/docs/layers/types/)).

![El panel Propiedades de una capa de Relleno degradado con Forma, el editor de puntos de color, Ángulo, Escala y Posición.](shot:drawing/gradient-fill-properties)

### Forma

**Lineal**, **Radial** o **Reflected**, como en la herramienta Degradado.

### Degradado

El editor de puntos de color. Una capa nueva empieza con un degradado de negro a blanco.

### Ángulo

Define la dirección del degradado, de −180° a 180°.

### Escala

Define la longitud del degradado, del 10% al 400%.

### Centro X y Centro Y

En **Posición**, definen el centro del degradado en porcentaje de la anchura y la
altura del lienzo.
