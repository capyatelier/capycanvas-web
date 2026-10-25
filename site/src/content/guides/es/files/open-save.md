---
title: "Abrir y guardar"
description: "Abrir dibujos y fotos, guardar archivos .capy y trabajar con varios dibujos abiertos."
related: ["files/new", "files/export", "transform/move-transform", "start/undo"]
---

Los comandos de esta página están en el menú **Archivo**. En Boceto, ábrelo desde
**Menú principal** en la barra de título.

![El menú Archivo.](shot:files/file-menu)

## Abrir un dibujo o una foto

Puedes abrir dibujos `.capy` y fotos en formato OpenEXR, TIFF, PNG, WebP, BMP, JPEG, GIF, HEIF y AVIF. Cada uno se abre en su propia pestaña.

Haz una de las siguientes acciones:

- Elige **Archivo > Abrir…**. Puedes elegir varios archivos, excepto en Linux.
- Pulsa **Ctrl+O**.
- En Pintura y Foto, selecciona **Abrir…** en la barra Comandos.
- En el editor web o en Linux, arrastra archivos al nombre del dibujo o a las pestañas de la barra de título.
- Si instalaste el editor web como aplicación, abre un archivo compatible con {appName} desde tu sistema.

## Fotos

Una foto se abre como un dibujo nuevo con una capa de pintura que lleva el nombre del archivo. El dibujo conserva el tamaño original de la foto, su perfil de color y, de forma predeterminada, su profundidad de bits. Guardar el dibujo crea un archivo `.capy` y nunca sobrescribe la imagen original.

- De un GIF o un WebP animado se abre el primer fotograma.
- Una foto puede medir hasta 32768 píxeles por lado.
- Una foto CMYK solo se abre si tiene un perfil de color incrustado.
- Las fotos HEIF y AVIF en HDR no se pueden abrir.

Si **RGB y escala de grises sin perfil** está en **Preguntar** en
[Preferencias](/es/docs/preferences/), una foto sin perfil de color abre el
diálogo **Elegir interpretación de imagen**.

## Importar imágenes como capas

Puedes añadir imágenes a un dibujo como capas nuevas.

Haz una de las siguientes acciones:

- Elige **Archivo > Importar imagen como capa…**.
- Pulsa **Ctrl+Mayús+O**.
- Arrastra imágenes sobre el lienzo o sobre una fila del panel **Capas**.

Cada imagen se convierte en una [capa de objeto](/es/docs/layers/types/) con el nombre del archivo, encima de la capa seleccionada, con [tiradores de transformación](/es/docs/transform/move-transform/) para colocarla. Una imagen más grande que el lienzo se reduce para ajustarse.

No puedes importar un archivo `.capy`. En el editor web, una imagen puede ocupar
hasta 512 MiB.

## Guardar

Puedes guardar el dibujo con todas sus capas como archivo `.capy`.

Haz una de las siguientes acciones:

- Elige **Archivo > Guardar**.
- Pulsa **Ctrl+S**.
- En Pintura y Foto, selecciona **Guardar** en la barra de comandos.

El primer guardado pide una ubicación; los siguientes usan el mismo archivo. La pestaña guardada muestra el nombre del archivo sin la marca ●.

En Firefox y Safari, el dibujo solo cuenta como guardado después de seleccionar
**Descargar** y luego **Archivo guardado** en el diálogo **Descargar archivo**.

![El diálogo Descargar archivo con Cancelar, Descargar y Archivo guardado.](shot:files/download-file)

**Archivo > Guardar como…** (**Ctrl+Mayús+S**) siempre pide una ubicación, y lo
que guardes después va al archivo nuevo. **Guardar** también pide una ubicación si
el archivo cambió en el disco desde que lo abriste o lo guardaste.

**Guardar** no está disponible mientras hay un recorte o una transformación en curso.

## Lo que guarda un archivo .capy

Un archivo `.capy` conserva cada capa con su máscara y ajustes, las imágenes de origen incrustadas de los objetos y las texturas de Papel importadas, los filtros, las selecciones y guías guardadas, el espacio de color, la profundidad de bits y la mezcla, y los datos EXIF, XMP e IPTC de una foto. No conserva el historial de deshacer, la vista ni la selección activa.

## Dibujos de solo lectura

Un archivo `.capy` que {appName} no puede editar, incluido un archivo de un formato más nuevo no compatible o un archivo dañado, se abre en un diálogo en lugar de una pestaña. **Copy Original File…** guarda una copia del archivo y **Export Preview Image…** guarda la vista previa del dibujo como PNG.

## Pestañas de dibujo

![Tres pestañas de dibujo en la barra de título, una marcada como no guardada.](shot:files/drawing-tabs)

La barra de título muestra una pestaña por cada dibujo abierto. Si solo hay un
dibujo abierto, muestra en su lugar el nombre y el tamaño del dibujo.

Selecciona una pestaña para pasar a su dibujo, o usa estas teclas:

| Para | Editor web | Linux |
| --- | --- | --- |
| Mostrar el dibujo anterior | **Alt+Re Pág** | **Ctrl+Re Pág** o **Ctrl+Mayús+Tab** |
| Mostrar el dibujo siguiente | **Alt+Av Pág** | **Ctrl+Av Pág** o **Ctrl+Tab** |
| Abrir la lista Dibujos | **Ctrl+Alt+D** | **Ctrl+Mayús+A** |

En el editor web, arrastra una pestaña hacia un lado para reordenar las pestañas.

Un ● delante de un nombre indica cambios sin guardar. Si la barra de título es
estrecha, las pestañas se convierten en un solo botón que abre la lista Dibujos.

Cada pestaña conserva su historial de deshacer, vista y selección. Las pestañas no forman parte de un espacio de trabajo.

## Dibujos…

![La lista Dibujos con tres dibujos.](shot:files/drawings-list)

Puedes ver todos los dibujos abiertos en una sola lista.

Haz una de las siguientes acciones:

- Elige **Archivo > Dibujos…** o **Ventana > Dibujos…**.
- En el editor web, haz clic con el botón derecho en una pestaña.

Selecciona una fila para pasar a su dibujo, arrastra el asa de su izquierda para
reordenar o selecciona **×** para cerrar el dibujo. El orden de las pestañas tiene
sus propios **Deshacer orden de pestañas** y **Rehacer orden de pestañas** en la
parte inferior de la lista.

## Cerrar un dibujo

Haz una de las siguientes acciones:

- Elige **Archivo > Cerrar**.
- Pulsa **Ctrl+W**. En el editor web, pulsa **Ctrl+Alt+W**.
- Selecciona **×** en la pestaña del dibujo.

Si el dibujo tiene cambios sin guardar, un diálogo pregunta “¿Guardar los cambios
de «*nombre*»?” con **Cancelar**, **Descartar cambios** y **Guardar**.

Al cerrar el último dibujo, el editor web abre un dibujo nuevo en blanco. En
Linux, la ventana se cierra.

## Volver a abrir tras reiniciar

Todos los dibujos abiertos, guardados o no, se vuelven a abrir la próxima vez que
inicias {appName}, cada uno con su historial de deshacer, su vista, su selección
y su última exportación. Al salir de {appName} no se te pide guardar.

En el editor web, borrar los datos del sitio elimina los dibujos sin guardar.

Si {appName} se cierra de forma inesperada, los dibujos que se vuelven a abrir
muestran «(recuperado)» después del nombre hasta que los guardas.

## Nueva ventana

En Windows, macOS, Linux y iPad, **Archivo > Nueva ventana** (**Ctrl+Mayús+N**)
abre otra ventana con sus propios dibujos.
