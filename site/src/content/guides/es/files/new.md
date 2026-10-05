---
title: "Dibujos nuevos"
description: "El diálogo Dibujo nuevo y las capas con las que empieza un dibujo nuevo."
related: ["color-management/color-spaces", "layers/types", "files/open-save"]
---

Puedes empezar un dibujo en el diálogo **Dibujo nuevo**. El dibujo nuevo se abre
en su propia pestaña, y el dibujo actual sigue abierto.

## Abrir el diálogo Dibujo nuevo

Haz una de las siguientes acciones:

- Elige **Archivo > Nuevo…**.
- Pulsa **Ctrl+N** (no en el editor web).
- En Pintura y Foto, selecciona **Nuevo…** en la barra de comandos.

Elige los ajustes de más abajo y después selecciona **Crear**.

**Nuevo…** no está disponible mientras hay un recorte o una transformación en
curso. Si ya hay demasiados datos de dibujo abiertos, el dibujo nuevo no se abre
hasta que cierres algunos dibujos.

## Ajustes

![El diálogo Dibujo nuevo con el ajuste preestablecido Dibujo estándar.](shot:files/new-dialog)

### Ajuste preestablecido

Rellena todos los campos a partir de un ajuste preestablecido integrado o de uno
que guardaste. Si después cambias un campo, **Ajuste preestablecido** pasa a
**Personalizado**.

Todos los ajustes preestablecidos integrados miden 2048 × 1536 píxeles, con fondo blanco.

| Ajuste preestablecido | Espacio de color | Profundidad de bits | Mezcla |
| --- | --- | --- | --- |
| **Dibujo estándar** | sRGB | SDR de 8 bits | Perceptual |
| **Color amplio** | Display P3 | SDR de 8 bits | Perceptual |
| **Edición de fotos** | ProPhoto RGB | SDR de 16 bits | Perceptual |
| **Dibujo HDR** | sRGB | HDR de coma flotante de 16 bits | Luz lineal |

### Eliminar ajuste preestablecido guardado

Elimina el ajuste preestablecido guardado que está seleccionado. Los ajustes
preestablecidos integrados no se pueden eliminar.

### Anchura (px) y Altura (px)

De 1 a 8192 píxeles. Los campos aceptan operaciones como «160*2».

### Espacio de color

**sRGB**, **Display P3**, **Adobe RGB (1998)** o **ProPhoto RGB** (consulta
[Espacio de color, profundidad de bits y mezcla](/es/docs/color-management/color-spaces/)).
Con **ProPhoto RGB** y **SDR de 8 bits**, el diálogo recomienda SDR de 16 bits.

### Profundidad de bits

**SDR de 8 bits**, **SDR de 16 bits**, **HDR de coma flotante de 16 bits** o
**HDR de coma flotante de 32 bits**. Una profundidad de bits de coma flotante
crea un dibujo HDR.

### Mezcla

**Perceptual** o **Luz lineal**. Con una profundidad de bits de coma flotante,
**Mezcla** queda fijada en **Luz lineal**.

### Fondo

**Blanco** o **Transparente**. **Transparente** oculta la capa **Papel**.

### Nombre del ajuste preestablecido

Al seleccionar **Crear**, guarda los ajustes como ajuste preestablecido con este
nombre. Un nombre admite hasta 64 caracteres, y puedes conservar hasta 64 ajustes
preestablecidos.

### Usar estos ajustes en los dibujos nuevos

Si está activado, el diálogo se abre con estos ajustes la próxima vez. El espacio
de color, la profundidad de bits y el fondo también pasan a ser los ajustes de
**Dibujos nuevos** en [Preferencias](/es/docs/preferences/).

## Las primeras capas

![El panel Capas de un dibujo nuevo, con Tinta actual sobre Papel.](shot:files/new-layers)

Un dibujo nuevo tiene dos capas. **Tinta actual**, una capa de pintura vacía, está
seleccionada sobre **Papel**, una capa de relleno blanca (consulta
[Tipos de capa](/es/docs/layers/types/)). Las capas que añades después se llaman
«Capa» y un número.

## Otras plataformas

En iPad, macOS y Android, un campo **Guardar ajuste preestablecido…** y una opción
**Usar valores predeterminados** ocupan el lugar de **Nombre del ajuste
preestablecido** y **Usar estos ajustes en los dibujos nuevos**. iPad y macOS no
tienen el botón **Eliminar ajuste preestablecido guardado**.

En Linux, **Guardar ajuste preestablecido…** abre un diálogo aparte para el
nombre, y **Espacio de color**, **Profundidad de bits** y **Mezcla** se agrupan
en **Color**.
