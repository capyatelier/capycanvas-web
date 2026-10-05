---
title: "Ajustes de capa"
description: "Los ajustes de capa de la cabecera del panel Capas, el menú Ajustes de capa y el panel Propiedades."
related: ["layers/panel", "layers/blend-modes", "layers/types", "filters/how-filters-apply"]
---

Puedes cambiar estos ajustes en la cabecera del panel Capas o en
**Ajustes de capa**, dentro del menú de la capa. El menú **Capa** tiene los
mismos elementos.

![El submenú Ajustes de capa de Ribbon shading, con Recortar a la capa inferior marcado y «Recortado a Ribbon» a la derecha.](shot:layers/settings-menu)

## Bloquear alfa

Puedes bloquear la transparencia de una capa de pintura. Los pinceles solo
cambian entonces los píxeles que ya están pintados.

Haz una de las siguientes acciones:

- Selecciona la capa y después selecciona **Bloquear alfa** en la cabecera del panel Capas.
- Abre el menú de la capa y elige **Ajustes de capa > Bloquear alfa**.
- Desliza la fila hacia la derecha con un lápiz o un dedo.

Mientras Bloquear alfa está activado, aparece un icono de bloqueo alfa a la
derecha de la fila.

**Rellenar** y **Degradado** también respetan la transparencia, y el **Borrador**
no tiene efecto.

## Bloquear edición

Puedes bloquear una capa para que no se pueda pintar en ella ni cambiarla.

Haz una de las siguientes acciones:

- Selecciona la capa y después selecciona **Bloquear edición** en la cabecera del panel Capas.
- Abre el menú de la capa y elige **Ajustes de capa > Bloquear edición**.
- En una capa de selección, elige **Bloquear edición** en su menú.

Cuando una capa está bloqueada, aparece un icono de candado en su fila.

No puedes pintar en una capa bloqueada, ni cambiarle el nombre, eliminarla,
añadirle una máscara, cambiar su opacidad o su modo de mezcla ni añadirle un
filtro. Al bloquear un grupo se bloquean todas sus capas. No puedes desactivar
**Bloquear edición** en una capa que está dentro de un grupo bloqueado.

## Recortar a la capa inferior

Puedes recortar una capa para limitarla a la zona pintada de la capa de debajo.

Haz una de las siguientes acciones:

- Selecciona la capa y después selecciona **Recortar a la capa inferior** en la cabecera del panel Capas.
- Abre el menú de la capa y elige **Ajustes de capa > Recortar a la capa inferior**.
- Para añadir una capa recortada nueva, elige **Nuevo > Nueva capa de recorte** en el menú de la capa.

Una barra a la izquierda de las miniaturas une las capas recortadas a su base.
En el menú de la capa, el elemento nombra la base, por ejemplo «Recortado a
Ribbon». Al mover la capa base, sus capas recortadas se mueven con ella.

No puedes recortar a un grupo con Traspasar activado. Desactiva antes Traspasar
en el grupo.

La base es la capa sin recortar más cercana por debajo en el mismo grupo, sin
contar las capas de selección. Si esa capa es una capa de relleno o un filtro,
el elemento dice **No hay una capa inferior a la que vincular**. En un filtro, el
elemento adjunta el filtro (consulta
[Cómo se aplican los filtros](/es/docs/filters/how-filters-apply/)).

## Usar como referencia

Puedes marcar capas de pintura y grupos como referencias para las herramientas
que toman muestras de **Capas de referencia**, como **Seleccionar automáticamente**,
**Rellenar** y las [herramientas de retoque](/es/docs/retouch/clone-heal/).

Haz una de las siguientes acciones:

- Selecciona las capas y después selecciona **Usar capas seleccionadas como referencias** en la cabecera del panel Capas.
- Abre el menú de la capa y elige **Ajustes de capa > Usar como referencia**, o **Usar capas seleccionadas como referencias** con varias filas seleccionadas.

Para dejar de usar una capa como referencia, selecciona solo esa capa y después
selecciona **Dejar de usar esta capa como referencia** en la cabecera, o
desactiva **Usar como referencia** en el menú de la capa.

Aparece un icono de faro en el botón de fila de una capa de referencia. Después
de marcar capas con el botón de la cabecera, solo la capa activa sigue
seleccionada.

## Usar la capa inferior como referencia

Puedes marcar como referencia la capa de pintura visible más cercana por debajo
de la capa activa.

Haz una de las siguientes acciones:

- Elige **Capa > Ajustes de capa > Usar capa inferior como referencia**.
- Cuando una herramienta toma muestras de las capas de referencia y no hay ninguna marcada, selecciona **Usar *capa* como referencia** en el aviso que aparece sobre el lienzo.

## Traspasar

Puedes poner un grupo en Traspasar. Sus capas se mezclan entonces directamente
con las capas de debajo del grupo, y la opacidad y la máscara del grupo funden
ese resultado con las capas de debajo.

Haz una de las siguientes acciones:

- Abre el menú del grupo y elige **Ajustes de capa > Traspasar**.
- Elige **Traspasar** en **Modo de mezcla de la capa**, en la cabecera del panel Capas, o en **Modo de mezcla**, en el panel **Propiedades**.
- Desliza la fila del grupo hacia la derecha con un lápiz o un dedo.

Aparece una insignia en la carpeta del grupo, y el subtítulo dice «Traspasar».

Al desactivar Traspasar, el grupo pasa a Normal. Un grupo con Traspasar no se
puede recortar, no puede ser base de recorte y no admite filtros adjuntos. No
puedes cambiar Traspasar en un grupo bloqueado.

Los grupos nuevos usan Normal, salvo que **Usar Traspasar en los grupos nuevos**
esté activado en la página **Lienzo** de [Preferencias](/es/docs/preferences/).
Si agrupas capas que usan un modo de mezcla distinto de Normal, o un filtro en
su propia capa, el grupo nuevo queda en Traspasar.

## Modo de color

Puedes guardar una capa de pintura en **Color completo**, **Escala de grises** o
**Dos tonos (blanco y negro)**. Lo que pintas en la capa sigue el modo.

![El panel Propiedades de una capa de pintura con Opacidad, Modo de mezcla y Modo de color.](shot:layers/settings-color-mode)

Haz una de las siguientes acciones:

- Selecciona la capa y después elige un modo en **Modo de color**, en el panel **Propiedades**.
- Escribe «Modo de color» en la [búsqueda de comandos](/es/docs/start/command-search/) y elige un modo.

**Modo de color** no está en el menú de la capa. El subtítulo de la fila muestra
el modo cuando no es Color completo.

Al cambiar el modo se convierten los píxeles existentes, y volver a Color
completo no recupera los colores originales. Dos tonos deja cada píxel en negro o
blanco, y totalmente opaco o totalmente transparente. **Modo de color** se oculta
mientras pintas en la máscara de la capa.

## Otros elementos de Ajustes de capa

**Ajustes de capa** también incluye **Aplicar transformación a píxeles**
(consulta [Mover y transformar](/es/docs/transform/move-transform/)). En una
capa de foto, incluye **Reparar perfil del original…**, **Rasterizar original…**
y **Volver a la foto original** (consulta [Tipos de capa](/es/docs/layers/types/)).
