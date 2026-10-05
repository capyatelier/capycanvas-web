---
title: "Trabajar con capas"
description: "Añadir, ordenar y eliminar capas en el panel Capas."
related: ["layers/panel", "layers/types", "layers/merging", "files/open-save"]
---

## Crear capas

Haz una de las siguientes acciones:

- Elige **Capa > Nuevo** y después **Capa nueva**, **Nueva capa de recorte** o **Grupo nuevo**.
- Selecciona **Capa nueva** o **Grupo nuevo** en la parte inferior del panel Capas.

La capa nueva se coloca justo encima de la capa activa y de las capas recortadas
o adjuntas a ella. Si hay un grupo activo, la capa nueva va arriba del todo
dentro del grupo. No puedes añadir una capa a un grupo bloqueado.

**Nueva capa de recorte** necesita una capa de pintura activa, o un grupo activo
que no tenga Traspasar activado.

## Seleccionar capas

Puedes seleccionar varias filas para agruparlas, duplicarlas, eliminarlas o
moverlas a la vez.

- Selecciona una fila para seleccionar solo esa capa y convertirla en la capa activa.
- Haz **Mayús**+clic en una fila para seleccionar las filas entre ella y la que seleccionaste antes.
- Haz **Ctrl**+clic en una fila para añadirla a la selección o quitarla.
- Selecciona el botón de fila, a la izquierda de la miniatura, para añadir o quitar la fila sin cambiar la capa activa.
- Elige **Capa > Selección de filas de capa > Seleccionar todas las filas de capa** o **Borrar selección de filas de capa**.

Al seleccionar una fila que ya está seleccionada, las demás filas siguen
seleccionadas. Los cambios en la selección de filas no son pasos de deshacer.

## Ocultar capas

Haz una de las siguientes acciones:

- Elige **Capa > Visibilidad > Mostrar capa**.
- Selecciona el ojo de la fila.

**Capa > Visibilidad** también tiene **Mostrar capa y grupos superiores**,
**Aislar capas seleccionadas** y **Mostrar todas las capas**.

## Cambiar el nombre de las capas

Haz una de las siguientes acciones:

- Elige **Capa > Organizar > Renombrar capa…** (**Renombrar grupo…** en un grupo).
- Haz doble clic en el nombre.

![Una fila de capa con su nombre en un campo de texto.](shot:layers/working-rename)

Pulsa **Intro** para conservar el nombre o **Escape** para cancelar. No puedes
cambiar el nombre de una capa bloqueada.

## Reordenar capas

Arrastra una fila hacia arriba o hacia abajo en la lista. Con un lápiz o un dedo,
mantén pulsada la fila primero, o arrastra el asa del extremo derecho de la fila.

![Una fila mientras se arrastra, con una línea entre dos filas donde va a caer.](shot:layers/working-drag)

Una línea encima o debajo de una fila marca dónde caerá la capa. Para meter la
capa en un grupo, suéltala en el centro de la fila del grupo (aparece un marco
alrededor de la fila). Pulsa **Escape** para cancelar el arrastre.

Todas las filas seleccionadas se mueven juntas, y las capas recortadas y los
filtros adjuntos se mueven con su capa. **Subir capa** y **Bajar capa** en la
[búsqueda de comandos](/es/docs/start/command-search/) mueven las filas
seleccionadas un puesto.

## Agrupar y desagrupar

Para agrupar capas, selecciona sus filas y elige
**Capa > Organizar > Agrupar capas seleccionadas**, o selecciona **Grupo nuevo**
en la parte inferior del panel Capas.
Las filas tienen que estar en el mismo grupo, y una base de recorte tiene que
agruparse con sus capas recortadas.

Para desagrupar, elige **Capa > Organizar > Desagrupar**. Un grupo oculto deja
sus capas ocultas. **Desagrupar** no está disponible mientras el grupo tenga una
máscara, una opacidad inferior al 100%, un modo de mezcla distinto de Normal o
Traspasar, recorte o filtros adjuntos, ni cuando sus capas se verían distintas
sin el grupo.

## Duplicar capas

Elige **Capa > Organizar > Duplicar**, o **Duplicar capas seleccionadas** con
varias filas seleccionadas.

Las copias se colocan justo encima de los originales, con sus capas recortadas y
sus filtros adjuntos, y se llaman «*nombre* copia». No puedes duplicar una capa
de un grupo bloqueado.

## Eliminar capas

Haz una de las siguientes acciones:

- Elige **Capa > Eliminar capa**, o **Eliminar capas seleccionadas** con varias filas seleccionadas.
- Selecciona **Eliminar capas seleccionadas** en la parte inferior del panel Capas.
- Con un lápiz o un dedo, desliza la fila hacia la izquierda y selecciona **Eliminar**.

En un grupo contraído, el elemento del menú dice **Eliminar grupo y contenido**.
Al eliminar un grupo expandido se conservan sus capas, igual que con **Desagrupar**.

Las capas recortadas y los filtros adjuntos se quedan cuando eliminas su capa.
No puedes eliminar una capa bloqueada. La tecla **Supr** borra los píxeles
seleccionados, no las capas.

## Copiar selección a una capa nueva

Puedes copiar o mover los píxeles seleccionados de una capa de pintura a una
capa nueva, en el mismo sitio.

Haz una de las siguientes acciones:

- Elige **Capa > Nuevo > Copiar selección a una capa nueva** (**Ctrl+J**) o **Cortar selección a una capa nueva** (**Ctrl+Mayús+J**).
- Elige los mismos comandos en el menú **Seleccionar**.
- Elígelos en **Copiar a capa**, en la [barra de selección](/es/docs/selections/working/) del lienzo.

La capa nueva se coloca encima de la capa de origen, se llama «*nombre* copia» y
tiene la misma opacidad y el mismo modo de mezcla. La selección desaparece, y
**Seleccionar > Volver a seleccionar** la recupera.

Sin selección, **Copiar selección a una capa nueva** duplica las capas
seleccionadas. **Cortar selección a una capa nueva** necesita una selección y no
está disponible mientras **Bloquear alfa** está activado.

## Importar imágenes

Haz una de las siguientes acciones:

- Elige **Archivo > Importar imagen como capa…** o pulsa **Ctrl+Mayús+O**.
- Selecciona **Importar imagen como capa…** en la parte inferior del panel Capas.
- Arrastra archivos de imagen al lienzo o a una fila del panel Capas.

Cada archivo se convierte en una [capa de foto](/es/docs/layers/types/) encima
de la capa activa, o encima, debajo o dentro de la fila donde lo sueltas. La
imagen se centra y se reduce para caber en el lienzo, con
[tiradores de colocación](/es/docs/transform/move-transform/).
