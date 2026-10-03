---
title: "Dibujar"
description: "Dibuja un boceto a lápiz y prueba colores en una capa separada."
purpose: "Un boceto es donde trabajas las formas y un color aproximado es donde pruebas los colores. Mantenerlos en capas separadas significa que puedes cambiar los colores tantas veces como quieras sin tocar las líneas del lápiz."
techniques: ["Dibuja con lápiz y presión del bolígrafo.", "Seleccione y arregle parte del boceto.", "Coloque colores rugosos en una capa debajo del boceto."]
figure: "1: Pinceles tipo lápiz. 2: Sketch arriba Color rugoso en capas. 3: Tamaño del lápiz y opacidad."
related: ["tools/selections", "tools/transforms", "painting/color"]
image: {"light": "/assets/guides/illustration-draft-light.webp", "dark": "/assets/guides/illustration-draft-dark.webp", "alt": "1: Pinceles tipo lápiz. 2: Sketch arriba Color rugoso en capas. 3: Tamaño del lápiz y opacidad."}
---

## 1. Dibuja el boceto

Agregue una nueva capa y asígnele el nombre **Sketch**. Elija la herramienta **Pencil** y uno de los lápices en Tool Set. Comience con líneas claras para encontrar el disco, la cinta curva y el bloque inclinado, luego presione con más fuerza para reafirmar los contornos que desea conservar. Establece el tamaño del lápiz en el panel de herramientas.

Deja un poco de espacio alrededor de las formas. Facilita las etapas posteriores, porque podrás ver claramente dónde termina cada forma. De vez en cuando, seleccione **Flip view horizontally** en la barra de herramientas superior para ver el boceto reflejado; Los errores en proporción son mucho más fáciles de detectar de esa manera.

## 2. Arreglar una parte que no esté del todo bien

Si una parte está en el lugar incorrecto o tiene el tamaño incorrecto, no es necesario volver a dibujarla. Elija **Lasso selection** y dibuje un bucle alrededor de esa parte. Luego elija **Scale / rotate**, arrastre la pieza a su lugar o cambie su tamaño y seleccione **Apply transform**. Elija **Select → Deselect pixels** antes de continuar dibujando.

Las guías [selection](/es/docs/tools/selections/) y [transform](/es/docs/tools/transforms/)] explican estas herramientas con más detalle. Si un cambio sale mal, simplemente deshazlo.

## 3. Prueba los colores

Agregue otra capa llamada **Color rough** y arrástrela debajo de Sketch. Para cada forma, elija un color, dibuje alrededor de la forma con **Lasso selection** y elija **Edit → Fill selection**. El ejemplo utiliza verde azulado para la cinta, ocre para el disco y terracota para el bloque. Estos son colores ásperos, por lo que no es necesario que los bordes estén limpios. Reduce un poco la opacidad de la capa para que las líneas del lápiz sean fáciles de ver.

Oculta Color aproximado por un momento cuando quieras ver el boceto por sí solo. Guarde su dibujo y luego continúe con [Line art](/es/docs/illustration/ink/).
