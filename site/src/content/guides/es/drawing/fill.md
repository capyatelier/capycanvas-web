---
title: "Herramientas de relleno"
description: "Rellenar zonas, formas a mano alzada y regiones cerradas de una capa con el color actual."
related: ["drawing/gradient", "layers/settings", "selections/working", "drawing/brush-tools"]
---

Puedes rellenar partes de la capa seleccionada con el color actual mediante
**Rellenar**, **Relleno con lazo** y **Rodear y rellenar**. Cada relleno es un paso
de deshacer, y se respeta **Bloquear alfa**.

Los rellenos solo pintan la imagen de una capa, nunca una máscara de capa ni la
máscara de un filtro. En una capa que un pincel no puede pintar, un relleno no
pinta nada y un aviso indica el motivo ([Herramientas de pincel](/es/docs/drawing/brush-tools/)).

## Seleccionar una herramienta de relleno

Haz una de las siguientes acciones:

- Pulsa **F** para seleccionar la herramienta Rellenar. Las otras dos herramientas no tienen tecla predeterminada.
- En Pintura, selecciona **Rellenar** en la barra de herramientas. Haz clic con el botón derecho en el botón o mantenlo pulsado para elegir otra herramienta de relleno.
- En Foto, haz clic con el botón derecho o mantén pulsado el botón de degradado y relleno que sigue a **Licuar** en la barra de herramientas, y elige una herramienta.
- Con una herramienta de relleno activa, selecciona **Rellenar** o **Relleno con lazo** en el panel **Conjunto de herramientas**. **Rodear y rellenar** aparece dentro de **Relleno con lazo**.
- Busca el nombre de la herramienta en la búsqueda de comandos.

Boceto no tiene botón de relleno.

## Rellenar

Puedes rellenar una zona conectada de color parecido haciendo clic en ella.
**Origen** define en qué píxeles se basa la herramienta para encontrar la zona.

- Una selección activa limita el relleno a la selección.
- En la Máscara rápida o en una capa de selección, Rellenar rellena la máscara de selección ([Máscara rápida](/es/docs/selections/quick-mask/)).

## Relleno con lazo

Puedes dibujar una forma a mano alzada y rellenarla con el color actual. Arrastra
el contorno sobre el lienzo; la forma se rellena al soltar.

Relleno con lazo solo tiene el ajuste **Opacidad**. No está disponible en la Máscara
rápida ni en una capa de selección.

## Rodear y rellenar

Puedes rellenar todas las regiones transparentes cerradas dentro de un contorno
que dibujas. Rodear y rellenar busca las regiones en los píxeles de **Origen**.

- Pulsa **Escape** mientras dibujas para cancelar el contorno.
- Un solo deshacer quita todo lo que rellenó un contorno.
- Una selección activa limita el relleno a la selección.
- Rodear y rellenar no está disponible mientras editas una máscara de selección o una máscara de capa.

## Origen

Puedes elegir en qué píxeles se basan Rellenar y Rodear y rellenar para encontrar
la zona. La pintura siempre va a la capa seleccionada.

- **Imagen visible**: todo lo visible en el dibujo.
- **Capa en edición**: solo la capa seleccionada.
- **Capas de referencia**: las capas marcadas con **Usar como referencia** ([Ajustes de capa](/es/docs/layers/settings/)).

Elige el origen en la lista que hay bajo las herramientas en **Conjunto de
herramientas** para Rellenar, o en el panel **Herramienta** para Rodear y rellenar.
La barra Opciones de herramienta tiene un menú **Origen** para las dos.

![El panel Conjunto de herramientas con Rellenar seleccionado y las opciones Imagen visible, Capa en edición y Capas de referencia debajo.](shot:drawing/fill-tool-set)

Cada herramienta conserva su propio origen. Rellenar empieza en **Imagen visible**,
y Rodear y rellenar vuelve a **Capas de referencia** cada vez que abres {appName}.

Si Rellenar usa **Capas de referencia** y no hay ninguna capa marcada, no pinta
nada y un aviso ofrece marcar la capa de debajo.

## Ajustes de relleno

![El panel Herramienta para Rellenar con Tolerancia, el grupo Bordes y Opacidad.](shot:drawing/fill-settings)

Rellenar y Rodear y rellenar comparten los ajustes siguientes. **Seleccionar
automáticamente** y **Seleccionar por color** usan los mismos valores en todos
salvo en **Opacidad**. Para restablecer un ajuste, haz doble clic en su etiqueta
en la barra Opciones de herramienta ([Tamaño, opacidad y flujo](/es/docs/brushes/basics/)).

### Tolerancia

Define cuánto puede diferir un color para seguir contando como parte de la misma
zona. El valor predeterminado es 10%.

### Cerrar huecos

Cierra las aberturas de las líneas de hasta este ancho, de 0 a 32 px, antes de
buscar la zona. El ancho se mide en píxeles del dibujo, no de la pantalla.

### Expansión

Amplía la zona rellenada en este número de píxeles, o la reduce con un valor
negativo, de −32 a 32 px.

### Suavizado del contorno

Suaviza los bordes escalonados de la zona rellenada. Al 0%, el relleno conserva
los bordes de píxel duros.

### Opacidad

Define la intensidad del relleno. Al cambiarla cambia la **Opacidad** del pincel
actual, y al revés. En Boceto, usa el deslizador de opacidad de la barra del borde
izquierdo.

## Rellenar una selección

Para rellenar una selección con el color actual, elige **Editar > Rellenar
selección** o pulsa **Mayús+Retroceso**
([Trabajar con selecciones](/es/docs/selections/working/)).
