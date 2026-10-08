---
title: "Búsqueda de comandos"
description: "Buscar y ejecutar comandos, herramientas, pinceles y ajustes escribiendo su nombre."
related: ["input/keyboard", "start/undo", "customize/toolbars"]
---

Puedes buscar y ejecutar comandos, herramientas, pinceles, propiedades de capa,
espacios de trabajo y colores escribiendo su nombre.

## Abrir la búsqueda de comandos

Haz una de las siguientes acciones:

- Elige **Editar > Buscar comandos…**.
- Pulsa **Ctrl+K** o **Ctrl+Mayús+P**. En el editor web solo funciona **Ctrl+K**.
- Si añadiste la búsqueda de comandos a una barra de herramientas, selecciona su botón (consulta [Barras de herramientas y barra de título](/es/docs/customize/toolbars/)).

Otros mapas de atajos preestablecidos usan otras teclas (consulta [Atajos de teclado](/es/docs/input/keyboard/)).
Las teclas también funcionan mientras escribes en un campo de texto.

El cuadro de búsqueda se abre cerca de la parte superior de la ventana, con el
campo vacío.

La búsqueda de comandos no está disponible durante un trazo, mientras
**Preferencias** está abierto ni mientras personalizas la barra de título.

## Sugerencias

![La búsqueda de comandos con el campo vacío, que muestra Deshacer, Ajustar lienzo a la vista, Guardar, Preferencias y Atajos de teclado.](shot:start/command-search-suggestions)

Con el campo vacío, la lista muestra hasta cinco entradas: las últimas que
ejecutaste desde la búsqueda y, después, **Deshacer**, **Ajustar lienzo a la vista**,
**Guardar**, **Preferencias** y **Atajos de teclado**. Las entradas que no se
pueden ejecutar en ese momento no aparecen.

Solo cuentan como recientes las entradas que ejecutas desde la búsqueda. La lista
de recientes se vacía al salir de {appName}.

## Buscar

Escribe parte de un nombre. La lista muestra hasta ocho coincidencias, con los
nombres exactos primero.

- Mayúsculas y minúsculas se consideran iguales. Los acentos deben coincidir.
- También coinciden las letras en orden: «ajst lnz» encuentra **Ajustar lienzo a la vista**.
- Los nombres en inglés coinciden en todos los idiomas de la aplicación.
- Algunas entradas coinciden con otras palabras: «ajustes» encuentra **Preferencias**, «selector» encuentra **Cuentagotas** y «redimensionar» encuentra **Transformar**.
- Si escribes «pincel» o «pinceles», los pinceles sueltos no aparecen.

Si nada coincide, la lista muestra «No hay comandos coincidentes».

## Lo que puedes encontrar

- Todos los elementos de los menús.
- Todas las herramientas y cada variante de herramienta, como **Regla › Radial**.
- Todos los pinceles, y cada conjunto de pinceles como «Pinceles de *conjunto*».
- Los ajustes de la herramienta actual, como **Tamaño del pincel…**.
- Las propiedades de la capa seleccionada, como **Opacidad de capa…**.
- Todos los espacios de trabajo.
- **Color de primer plano**, **Color de fondo**, **Pintura transparente**, **Color temporal**, **Intercambiar primer plano y fondo**, **Negro** y **Blanco**.
- Todos los paneles y barras de herramientas del menú **Ventana**.

## Resultados

![La búsqueda de comandos con la consulta «undo», la fila Deshacer atenuada y «No hay nada que deshacer» en la parte inferior.](shot:start/command-search-unavailable)

Cada fila muestra el nombre y, a la derecha, su tecla. Una marca de verificación
señala un ajuste activado y el espacio de trabajo actual.

La línea inferior del cuadro describe la entrada resaltada con su texto de ayuda,
su ubicación en los menús o su rango de valores. Una entrada que no se puede
ejecutar en ese momento aparece atenuada, y la línea inferior indica el motivo,
por ejemplo «No hay nada que deshacer».

## Ejecutar un resultado

Haz una de las siguientes acciones:

- Pulsa **↑** o **↓** para resaltar una fila y luego pulsa **Intro**.
- Selecciona una fila.

La búsqueda se cierra y la entrada se ejecuta. Si la entrada no se puede ejecutar,
la búsqueda sigue abierta y muestra el motivo.

## Escribir un valor

![La búsqueda de comandos pide un valor para Tamaño del pincel…, con la unidad px y, en la parte inferior, el valor actual y el rango.](shot:start/command-search-typed-value)

Las entradas de ajustes numéricos, como **Tamaño del pincel…** y **Opacidad de capa…**,
piden un valor. La línea inferior muestra el valor actual y el rango.

Para establecer un valor:

1. Selecciona la entrada, o resáltala y pulsa **Intro**.
2. Escribe el valor y pulsa **Intro**.

Puedes escribir operaciones, como «12 * 2» o «sqrt(9)», y porcentajes como
«50%». Un valor fuera del rango se ajusta al límite más cercano. Pulsa **Esc**
para volver a los resultados.

## Deshacer desde un campo de texto o una paleta

Si abres la búsqueda de comandos desde un campo de texto, **Deshacer** y **Rehacer**
pasan a ser **Deshacer edición de texto** y **Rehacer edición de texto**. Estas
entradas no se pueden ejecutar desde la búsqueda. Para deshacer lo escrito en el
campo, cierra antes la búsqueda.

Si la abres desde el panel **Paletas**, la búsqueda muestra en su lugar
**Deshacer orden de colores** y **Rehacer orden de colores**. Estas entradas
deshacen cambios en el orden de los colores de la paleta, no en el dibujo.

## Cerrar la búsqueda de comandos

Haz una de las siguientes acciones:

- Pulsa **Esc**.
- Selecciona **×** a la derecha del campo.
- Haz clic o toca fuera del cuadro.

Un clic fuera del cuadro no pinta en el lienzo.
