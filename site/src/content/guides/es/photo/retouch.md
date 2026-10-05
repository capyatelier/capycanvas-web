---
title: "Retoque"
description: "Etapa 2 del tutorial de edición de fotos: polvo y una mancha eliminados con los pinceles correctores en una capa encima de la foto."
related: ["retouch/clone-heal", "layers/settings", "layers/working"]
---

En esta etapa se crea una capa *Retouch* que tapa el polvo y una mancha de la
foto. La capa de la foto no cambia.

## 1. Añade una capa de retoque

1. Selecciona **Capa nueva** en la parte inferior del panel Capas y cambia el nombre de la capa nueva a *Retouch*.
2. Elige **Capa > Ajustes de capa > Usar capa inferior como referencia** ([Ajustes de capa](/es/docs/layers/settings/)).

La capa de la foto pasa a ser una capa de referencia, y aparece un icono de faro
junto al ojo de su fila. Las herramientas de corrección copian de las capas de
referencia de forma predeterminada y pintan en *Retouch*.

![El panel Capas con Retouch encima de la capa terrarium, que muestra el icono de referencia.](shot:photo/retouch-layers)

## 2. Quita el polvo

Al levantar el lápiz, el **Pincel corrector puntual** reemplaza lo que has
pintado por textura de la zona cercana más parecida
([Clonar y corregir](/es/docs/retouch/clone-heal/)). El ejemplo quita el polvo
del cristal en la base del terrario.

1. Elige **Ver > Píxeles reales**, o pulsa **Ctrl+1**, para ver la foto al 100%.
2. Selecciona **Pincel corrector puntual** en la barra de herramientas, o pulsa **S** hasta que quede seleccionado.
3. Pulsa **]** hasta que el pincel sea más grande que las motas.
4. Pinta sobre cada mota.

## 3. Quita la mancha

El **Pincel corrector** pinta con píxeles copiados de un origen y después los
iguala al color y al brillo de alrededor del trazo.

1. Haz clic con el botón derecho en **Pincel corrector puntual** en la barra de herramientas, o mantenlo pulsado, y elige **Pincel corrector**.
2. Mantén pulsada **Alt** y haz clic en una zona limpia junto a la mancha, o selecciona **Establecer origen** en **Opciones de herramienta** y haz clic en la zona limpia.
3. Pinta sobre la mancha.

![El disco de origen del Pincel corrector sobre el cristal, con su barra de opciones del origen.](shot:photo/retouch-disc-bar)

Un disco en el lienzo marca el origen. Arrastra el disco para mover el origen, o
selecciona el disco para mostrar su barra.

Para comparar con la foto original, oculta *Retouch*.

Siguiente etapa: [Ajustar y exportar](/es/docs/photo/adjust/).
