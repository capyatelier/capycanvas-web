---
title: "Panel de capas"
description: "Qué muestra y qué hace cada parte del panel Capas, incluido el menú de capa."
related: ["layers/working", "layers/settings", "layers/types", "layers/masks"]
---

El panel **Capas** muestra las capas del dibujo, con la capa que está más al
frente arriba del todo. La cabecera muestra los ajustes de la capa activa.

![El panel Capas con las capas de la ilustración terminada.](shot:layers/panel "1 Cabecera · 2 Filas de capa · 3 Botones inferiores")

## Abrir el panel Capas

Haz una de las siguientes acciones:

- Elige **Ventana > Capas**.
- En Pintura, selecciona **Capas** en la columna derecha.
- En Boceto, selecciona **Panel de capas** en la barra de título.
- Escribe «Panel de capas» en la [búsqueda de comandos](/es/docs/start/command-search/).

En Foto, el panel está abierto en la columna derecha.

## Cabecera

![La cabecera del panel Capas para Ribbon shading, con Recortar a la capa inferior activado.](shot:layers/panel-header "1 Modo de mezcla de la capa · 2 Opacidad de capa · 3 Bloquear alfa · 4 Bloquear edición · 5 Recortar a la capa inferior · 6 Usar capas seleccionadas como referencias")

1. **Modo de mezcla de la capa** muestra el modo actual y abre el [menú de modos de mezcla](/es/docs/layers/blend-modes/).
2. **Opacidad de capa**, de 0 a 100. Arrastra el deslizador o escribe un valor.
3. **Bloquear alfa**.
4. **Bloquear edición**.
5. **Recortar a la capa inferior**. En un filtro, el botón dice **Aplicar a *capa*** o **Aplicar a las capas inferiores** (consulta [Cómo se aplican los filtros](/es/docs/filters/how-filters-apply/)).
6. **Usar capas seleccionadas como referencias**. Dice **Dejar de usar esta capa como referencia** cuando la capa activa es la única fila seleccionada y ya es una referencia.

Un interruptor resaltado está activado (consulta [Ajustes de capa](/es/docs/layers/settings/)).
**Modo de mezcla de la capa** y **Opacidad de capa** no están disponibles en las
capas de selección ni en las capas bloqueadas.

## Filas de capa

![La fila de Ribbon, con su máscara, Bloquear alfa activado y la opacidad al 80%.](shot:layers/panel-row "1 Ojo · 2 Botón de fila · 3 Miniatura · 4 Vínculo de máscara · 5 Miniatura de máscara · 6 Nombre y subtítulo · 7 Candado · 8 Asa")

Las capas de un grupo aparecen con sangría debajo del grupo.

1. El ojo oculta o muestra la capa.
2. El botón de fila añade la fila a la selección o la quita de ella, sin cambiar la capa activa. Muestra un pincel en la capa que recibe la pintura, un faro en una capa de referencia y una marca de verificación en las demás filas seleccionadas.
3. Selecciona la miniatura para pintar en los píxeles de la capa. En un grupo, la miniatura expande o contrae el grupo.
4. En una capa con máscara, el botón de vínculo decide si la máscara se mueve con la capa (**Desvincular máscara de la capa**, **Vincular máscara a la capa**).
5. Selecciona la miniatura de la máscara para pintar en la [máscara](/es/docs/layers/masks/).
6. El subtítulo bajo el nombre muestra el modo de color, el modo de mezcla y la opacidad cuando no son Color completo, Normal y 100%, por ejemplo «Multiplicar · 60%».
7. Un icono de candado marca una capa bloqueada, y un icono de bloqueo alfa marca una capa con **Bloquear alfa** activado.
8. Arrastra el asa para [mover la capa](/es/docs/layers/working/).

Selecciona una fila para convertirla en la capa activa y en la única fila seleccionada.
[Tipos de capa](/es/docs/layers/types/) muestra la miniatura de cada tipo.

Haz **Ctrl**+clic en la miniatura de una capa de pintura para cargar su opacidad
como selección, o en la miniatura de la máscara para cargar la máscara. Añade
**Mayús** para sumar a la selección, **Alt** para restar de ella o **Mayús+Alt**
para intersecar con ella.

## Indicadores de las filas

- Un contorno alrededor de la miniatura o de la miniatura de la máscara marca dónde pintan los pinceles.
- Una barra a la izquierda de las miniaturas une las [capas recortadas](/es/docs/layers/settings/) a su base.
- Un eslabón entre dos miniaturas une un [filtro adjunto](/es/docs/filters/how-filters-apply/) a la fila de debajo.
- Un ojo atenuado y tachado marca una capa activada que su grupo oculta, o un filtro adjunto cuya capa está oculta.
- Una miniatura de máscara atenuada marca una máscara desactivada.
- Mientras la [Máscara rápida](/es/docs/selections/quick-mask/) está activada, aparece una fila **Máscara rápida** arriba del todo.

## Botones inferiores

![Los botones de la parte inferior del panel Capas.](shot:layers/panel-footer "1 Capa nueva · 2 Grupo nuevo · 3 Nueva capa de selección · 4 Añadir máscara · 5 Añadir filtro · 6 Importar imagen como capa… · 7 Eliminar capas seleccionadas · 8 Acciones de capa")

1. **Capa nueva** añade una capa de pintura.
2. **Grupo nuevo**. Con varias filas seleccionadas, las agrupa.
3. **Nueva capa de selección** (consulta [Capas de selección](/es/docs/selections/selection-layers/)).
4. **Añadir máscara**.
5. **Añadir filtro** adjunta un filtro a la capa activa.
6. **Importar imagen como capa…**
7. **Eliminar capas seleccionadas**.
8. **Acciones de capa** abre el menú de capa de la capa activa.

Un botón no está disponible cuando su acción no se aplica a la capa activa, por
ejemplo **Añadir máscara** en una capa bloqueada (consulta
[Trabajar con capas](/es/docs/layers/working/)).

## Deslizar y mantener pulsado

Con un lápiz o un dedo:

- Desliza una fila hacia la izquierda para mostrar **Eliminar** en su extremo derecho. Selecciona **Eliminar** para eliminar la capa, o desliza hacia la derecha para ocultar el botón.
- Desliza una capa de pintura hacia la derecha para activar o desactivar **Bloquear alfa**.
- Desliza un grupo hacia la derecha para activar o desactivar **Traspasar**.
- Mantén pulsada una fila para abrir su menú de capa. Si te mueves sin levantar, arrastras la fila.

![Una fila deslizada hacia la izquierda, con Eliminar en su extremo derecho.](shot:layers/panel-swipe-delete)

Un deslizamiento corto no cambia nada. Los deslizamientos no funcionan con el
ratón, sobre el asa ni en capas bloqueadas.

## Menú de capa

Cada capa tiene un menú de comandos que puedes abrir.

Haz una de las siguientes acciones:

- Abre el menú **Capa**. Contiene el menú de la capa activa, sin **Añadir filtro**.
- Haz clic con el botón derecho en una fila, o mantenla pulsada con un lápiz o un dedo.
- Selecciona **Acciones de capa** en la parte inferior del panel.
- Con una fila enfocada, pulsa **Mayús+F10** o la tecla Menú.

![El menú de capa de Ribbon.](shot:layers/panel-menu)

| Elemento | Contenido |
| --- | --- |
| **Nuevo** | **Capa nueva**, **Nueva capa de recorte**, **Grupo nuevo**, **Relleno de color uniforme**, **Relleno degradado**, **Nueva capa de sobreexposición y subexposición**, **Copiar selección a una capa nueva**, **Cortar selección a una capa nueva** |
| **Añadir filtro** | Filtros para adjuntar a la capa, por categoría |
| **Organizar** | **Renombrar capa…**, **Duplicar**, **Agrupar capas seleccionadas** y, en un grupo, **Desagrupar** |
| **Modo de mezcla** | Todos los [modos de mezcla](/es/docs/layers/blend-modes/) |
| **Ajustes de capa** | Los [ajustes de capa](/es/docs/layers/settings/) |
| **Máscara** | Los comandos de [máscara](/es/docs/layers/masks/) |
| **Selección de píxeles** | **Seleccionar opacidad de la capa**, **Añadir opacidad a la selección**, **Restar opacidad de la selección**, **Intersecar con la opacidad de la capa**, **Rellenar selección**, **Invertir selección**, **Deseleccionar píxeles** |
| **Selección de filas de capa** | **Seleccionar todas las filas de capa**, **Borrar selección de filas de capa** |
| **Visibilidad** | **Mostrar capa**, **Mostrar capa y grupos superiores**, **Aislar capas seleccionadas**, **Mostrar todas las capas** |
| **Mover capa / máscara** | Selecciona la herramienta [Operación](/es/docs/transform/move-transform/) |
| **Combinar hacia abajo**, **Combinar visibles**, **Crear capa de visibles**, **Acoplar imagen** | Consulta [Combinar capas](/es/docs/layers/merging/) |
| **Borrar capa completa**, **Eliminar capa** | **Borrar capa completa** solo aparece en las capas de pintura |

Al abrir el menú de una fila, esa capa pasa a ser la activa. El menú de un grupo
empieza con **Nueva capa de selección en el grupo…** y
**Guardar selección actual en el grupo…**. Las capas de selección tienen su propio menú (consulta
[Tipos de capa](/es/docs/layers/types/)). Haz clic con el botón derecho en la
miniatura de la máscara, o mantenla pulsada, para abrir el
[menú de máscara](/es/docs/layers/masks/).
