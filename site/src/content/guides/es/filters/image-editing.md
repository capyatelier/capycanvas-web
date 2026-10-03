---
title: "Editar una foto"
description: "Abra una foto, ajuste sus colores con capas editables y exporte el resultado."
purpose: "Photo es el espacio de trabajo para ajustar imágenes. Puede abrir una foto directamente desde su cámara o teléfono, aclararla o cambiar sus colores con capas de ajuste y exportar una copia terminada, todo sin cambiar el archivo original."
techniques: ["Abra una foto o agregue una a un dibujo existente.", "Ajústelo con una capa de filtro editable.", "Guarde sus ediciones y exporte una copia."]
figure: "1: Espacio de trabajo Photo. 2: La foto y su capa de ajuste. 3: Propiedades para el ajuste."
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1: Espacio de trabajo Photo. 2: La foto y su capa de ajuste. 3: Propiedades para el ajuste."}
---

## Abre la foto

Elija **Photo** en el selector de espacio de trabajo, luego elija **File → Open…** y seleccione su imagen. Capy Canvas abre archivos JPEG, PNG, TIFF, WebP, HEIC, AVIF y OpenEXR, por lo que las fotos de la mayoría de las cámaras y teléfonos se abren directamente. La foto se abre en su propia pestaña a tamaño completo, con sus colores originales.

Para agregar una foto a un dibujo que ya tiene abierto, elija **File → Import Image as Layer…** o arrastre el archivo al lienzo. La foto aparece con asas para que puedas moverla y cambiar su tamaño; seleccione **Apply** cuando esté en su lugar, o **Original Size (100%)** para usarlo en su tamaño real.

## Hacer un ajuste

Abra **Filters** y elija un ajuste como **Curves**, **Vibrance** o **Hue / Saturation**. Se agrega como una nueva capa encima de la foto y su configuración aparece en **Properties**. Cámbialos gradualmente y observa la foto a medida que avanzas. Oculta y muestra la capa de ajuste para comparar el resultado con el original.

Debido a que el ajuste se encuentra en su propia capa, puede regresar y cambiarlo en cualquier momento o eliminarlo sin dejar rastro. Para ajustar solo una parte de la foto, seleccione esa área primero, por ejemplo el cielo con [Seleccionar por brillo](/es/docs/selections/tonal-range/). [Filtros y ajustes](/es/docs/filters/overview/) explica más formas de limitar un ajuste.

## Guardar y exportar

Cuando guarda una foto que ha editado, Capy Canvas guarda un archivo `.capy` con todas las capas de ajuste y su foto original nunca se sobrescribe. Para compartir el resultado, elija **File → Export…** y guarde un JPEG o PNG. [Exportar una imagen](/es/docs/output/export/) explica la configuración de exportación.
