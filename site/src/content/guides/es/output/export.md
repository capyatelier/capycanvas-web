---
title: "Exportar una imagen"
description: "Guarde una copia PNG, JPEG o TIFF de su dibujo para compartirlo o imprimirlo."
purpose: "La exportación crea una imagen normal a partir de su dibujo, lista para publicar en línea, enviarla a alguien o imprimir. Su archivo .capy permanece como estaba, con todas sus capas, por lo que siempre puede cambiar el dibujo y exportarlo nuevamente."
techniques: ["Elija un destino preestablecido.", "Elija el formato y tamaño del archivo.", "Guarde la imagen exportada."]
figure: "1: Preajustes de destino. 2: Formato, perfil de color y profundidad de bits. 3: Transparencia, que decide cómo se guardan las áreas vacías."
related: ["tools/files", "color/management", "filters/image-editing"]
image: {"light": "/assets/guides/output-export-light.webp", "dark": "/assets/guides/output-export-dark.webp", "alt": "1: Preajustes de destino. 2: Formato, perfil de color y profundidad de bits. 3: Transparencia, que decide cómo se guardan las áreas vacías."}
---

## Elige hacia dónde va la imagen

Elija **File → Export…** para abrir el cuadro de diálogo **Export image**. El lugar más fácil para comenzar es **Destination**, que completa las configuraciones prácticas por usted. **Web / Share** crea una imagen estándar que se ve bien en cualquier navegador o aplicación. **Wide-color image** mantiene los colores más vivos que pueden mostrar las pantallas modernas, y **Further editing** mantiene tantos detalles como sea posible para abrirlos en otro editor.

Solo se exportan las capas visibles, así que oculte primero cualquier boceto o capa de referencia que no desee en la imagen final.

## Ajustar los detalles

Si desea tener más control, cambie la configuración debajo del destino. **Format** elige entre PNG, JPEG y TIFF. PNG es una buena opción para obras de arte con bordes nítidos o áreas transparentes, mientras que JPEG crea archivos más pequeños para fotografías. Normalmente puedes dejar **Output profile** y **Bit depth** como los establece el destino.

**Transparency** decide qué sucede con las áreas vacías del dibujo. Puedes mantenerlos transparentes en formatos que lo admitan, o rellenarlos con blanco o negro. **Pixel size** le permite hacer una copia más pequeña, por ejemplo para un sitio web. Cuando desee una combinación de configuraciones, puede guardarla como un ajuste preestablecido propio.

## Guardar el archivo

Seleccione **Preview Output** si desea ver el resultado antes de guardarlo, luego seleccione **Choose File…** para elegir un nombre y un lugar para la imagen. Abra el archivo exportado una vez para comprobar que tiene el aspecto esperado.

Los dibujos HDR tienen más opciones en **Dynamic range**, incluidos los archivos HDR JPEG y AVIF que se ven brillantes en las pantallas HDR y aún se ven bien en las pantallas normales. [Espacios de color, HDR y pruebas](/es/docs/color/management/) explica cuándo usarlos.
