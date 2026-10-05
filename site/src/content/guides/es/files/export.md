---
title: "Exportar imágenes"
description: "Exportar una copia acoplada de un dibujo como imagen con el diálogo Exportar imagen y con Exportar de nuevo."
related: ["files/open-save", "color-management/hdr", "color-management/color-spaces"]
---

Puedes exportar una copia acoplada del dibujo como imagen. Exportar no cambia el
dibujo `.capy` ni cuenta como guardar.

## Exportar una imagen

Haz una de las siguientes acciones:

- Elige **Archivo > Exportar…**.
- Pulsa **Ctrl+Mayús+E**.

El diálogo **Exportar imagen** se abre con el destino **Web / Compartir**.
Selecciona **Elegir archivo…** y elige una ubicación. El nombre propuesto es el
nombre del dibujo con la extensión del formato, por ejemplo «Sin título.png». En
Firefox y Safari se abre en su lugar el diálogo **Descargar archivo** (consulta
[Abrir y guardar](/es/docs/files/open-save/)).

El nombre del archivo debe terminar con la extensión del formato. **Exportar…** no
está disponible mientras hay un recorte o una transformación en curso.

## Ajustes

![El diálogo Exportar imagen con Destino en Web / Compartir.](shot:files/export-dialog)

Algunos ajustes solo aparecen con determinados formatos.

### Destino

Establece todos los demás ajustes a la vez. Los ajustes preestablecidos de
exportación guardados aparecen después de estos destinos integrados:

- **Web / Compartir**: un PNG sRGB de 8 bits al tamaño original.
- **Imagen de gama amplia**: lo mismo en Display P3.
- **Edición posterior**: un TIFF de 16 bits en el espacio de color del dibujo.
- **Personalizado**: empieza igual que **Web / Compartir**.

### Rango dinámico

**SDR** en un dibujo SDR, o una selección de formatos HDR en un dibujo HDR
(consulta Exportación HDR, más abajo).

### Recortar colores HDR fuera de rango

Recorta los colores que superan el rango de PNG HDR, JPEG HDR y AVIF HDR. Solo
aparece con esos formatos.

### Formato

**Imagen PNG**, **Imagen TIFF**, **Imagen JPEG** o **WebP · sin pérdida**
(consulta Límites de los formatos, más abajo).

### Perfil de salida

**sRGB**, **Display P3**, **Adobe RGB (1998)** o **ProPhoto RGB**, además de
«Original: *nombre*» por cada capa de foto que tenga su propio perfil incrustado.

### Profundidad de bits

**8 bits** o **16 bits**.

### Transparencia

**Conservar**, **Fondo blanco** o **Fondo negro**.

### Propósito de conversión

**Colorimétrico relativo** (el predeterminado), **Perceptual**, **Saturación** o
**Colorimétrico absoluto**.

### Tramado

**Ninguno** o **Estocástico (salida de 8 bits)**.

### Calidad

La calidad de compresión, de 1 a 100, con 90 de forma predeterminada. Aparece con
JPEG, JPEG HDR y AVIF HDR.

### Tamaño en píxeles

**Tamaño original** o **Ajustar a los límites**. **Ajustar a los límites** añade
**Anchura máxima (px)** y **Altura máxima (px)**, y reduce la imagen para que
quepa dentro de esas medidas sin cambiar sus proporciones.

### Metadatos de resolución

**Conservar original**, **Píxeles por pulgada** u **Omitir**. **Píxeles por
pulgada** añade un campo de 1 a 65535, con 300 de forma predeterminada.

### Metadatos

**Todos**, **Derechos de autor y contacto** o **Ninguno**. Con **Todos**,
**Eliminar ubicación** está activado de forma predeterminada. Estas filas solo
aparecen en dibujos abiertos desde una foto con datos de cámara o de derechos de autor.

### Importar perfil ICC… y Perfiles guardados…

**Importar perfil ICC…** añade a **Perfil de salida** un archivo `.icc` o `.icm`
de hasta 16 MiB. **Perfiles guardados…** abre la **Biblioteca de perfiles de color**.

### Nombre del ajuste preestablecido y botones de ajustes preestablecidos

**Guardar ajuste preestablecido** guarda los ajustes como un destino nuevo con el
nombre escrito en **Nombre del ajuste preestablecido**. **Actualizar ajuste preestablecido** y
**Eliminar ajuste preestablecido** modifican o eliminan el ajuste preestablecido
guardado que está seleccionado. **Restablecer destino** recupera los ajustes de un
destino integrado.

### Previsualizar salida

Muestra la exportación junto a la imagen, con los rótulos **Imagen** y
**Salida**, y un aviso si hay colores fuera de la gama de salida. Cambiar
cualquier ajuste borra la vista previa.

### Elegir archivo…

Pregunta dónde guardar la imagen.

## Límites de los formatos

- JPEG y WebP solo admiten 8 bits.
- JPEG no puede conservar la transparencia.
- WebP admite hasta 16 384 píxeles por lado.
- Con un perfil de salida en escala de grises, WebP no está disponible.
- Con un perfil de salida CMYK, solo están disponibles TIFF y JPEG, sin transparencia.

Las opciones que no encajan con los demás ajustes aparecen atenuadas.

## Ajustes preestablecidos de exportación

Después de exportar, un destino integrado conserva los ajustes que usaste. Si
exportas con un ajuste preestablecido guardado, los ajustes se conservan en
**Personalizado**, y el ajuste preestablecido solo cambia con **Actualizar ajuste
preestablecido**.

El nombre de un ajuste preestablecido admite hasta 80 caracteres, y puedes
conservar hasta 64 ajustes preestablecidos. Los ajustes preestablecidos se
aplican a todos los dibujos.

## Exportación HDR

![El diálogo Exportar imagen de un dibujo HDR con JPEG HDR · mapa de ganancia, después de Previsualizar salida.](shot:files/export-hdr-preview)

En un dibujo de coma flotante de 16 o 32 bits, **Rango dinámico** ofrece estas opciones:

| Opción | Escribe |
| --- | --- |
| **Versión SDR** | La versión SDR del dibujo, con los ajustes SDR |
| **JPEG HDR · mapa de ganancia** | Un `.jpg` con mapa de ganancia |
| **AVIF HDR · mapa de ganancia con transparencia** | Un `.avif` con mapa de ganancia y transparencia |
| **PNG HDR · BT.2020 PQ** | Un `.png` codificado en BT.2020 PQ, con transparencia |
| **OpenEXR · coma flotante de 32 bits** | Un `.exr` en el espacio de color del dibujo, con transparencia |

**Versión SDR** usa la versión SDR definida con
[Prueba SDR](/es/docs/color-management/hdr/). OpenEXR no guarda datos de cámara
ni de derechos de autor. En un dibujo HDR, **Edición posterior** se llama
**Edición posterior (SDR)** y usa OpenEXR.

Con JPEG HDR y AVIF HDR, **Previsualizar salida** añade **Versión de vista previa**,
con **Reconstrucción HDR · vista previa SDR** y **Base SDR codificada**.

Si la vista previa encuentra colores que superan el rango de PNG, JPEG o AVIF HDR,
**Elegir archivo…** no está disponible hasta que activas **Recortar colores HDR
fuera de rango** o eliges OpenEXR.

## Exportar de nuevo

**Archivo > Exportar de nuevo** repite la última exportación del dibujo con los
mismos ajustes y el mismo archivo, sin abrir el diálogo. No está disponible hasta
que exportas el dibujo una vez.

Cada dibujo conserva su última exportación, también después de reiniciar. En
Firefox y Safari, **Exportar de nuevo** muestra el diálogo **Descargar archivo**.

## Otras plataformas

En Linux, los ajustes se reparten en las páginas **Tamaño**, **Color y
transparencia** y **Ajuste preestablecido**, y algunas etiquetas son distintas.
Los diálogos de iPad y macOS también usan sus propias etiquetas.
