---
title: "Guardar y restablecer pinceles"
description: "Cómo se conservan los cambios en los pinceles y cómo devolverlos a sus ajustes integrados."
related: ["brushes/basics", "drawing/brush-tools", "customize/workspaces"]
---

Puedes cambiar cualquier ajuste de un pincel integrado y devolverlo más tarde a su
valor original.

## Cambios en los pinceles

Cada cambio en un ajuste del pincel se guarda al instante con su ajuste preestablecido.

- Los cambios se comparten entre todos los espacios de trabajo, incluidos los que creas tú.
- Los cambios se conservan al reiniciar {appName}.
- Los ajustes de los pinceles no se guardan en los archivos `.capy`.
- Un cambio en un ajuste del pincel no es un paso de deshacer, y el Historial de distribución no muestra los cambios en los pinceles.
- Un pincel no conserva ningún color. Pinta con el color actual del [panel de color](/es/docs/color/color-panel/).

## Restablecer un ajuste

Puedes devolver un ajuste al valor integrado del pincel. Haz doble clic (o toca dos
veces) en la etiqueta o el icono del ajuste en la barra Opciones de herramienta
([Tamaño, opacidad y flujo](/es/docs/brushes/basics/)).

El panel **Herramienta** no tiene opción para restablecer. Para restablecer **Mezcla
de colores**, selecciona **Mezcla Oklab**, la opción integrada de todos los pinceles
de mezcla.

## Restablecer todos los pinceles…

Puedes devolver todos los pinceles a sus ajustes integrados. Elige **Ventana >
Espacios de trabajo > Restablecer todos los pinceles…** y selecciona **Restablecer
pinceles** en el diálogo.

![El diálogo ¿Restablecer todos los pinceles? con el botón Restablecer pinceles.](shot:brushes/reset-all-dialog)

Se restablecen todos los ajustes preestablecidos, incluidos los que no has usado.
Los colores, la herramienta seleccionada, la distribución y el dibujo no cambian, y
los marcadores de los deslizadores de Boceto se conservan. Restablecer todos los
pinceles no se puede deshacer.

## Crear e importar pinceles

No puedes crear, duplicar, renombrar, eliminar, importar ni exportar pinceles. Los
ajustes preestablecidos integrados son los únicos pinceles, y no existe ningún
formato de archivo de pinceles.
