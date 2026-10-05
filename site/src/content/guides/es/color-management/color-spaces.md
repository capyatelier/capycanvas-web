---
title: "Espacio de color, profundidad de bits y mezcla"
description: "Elegir el espacio de color, la profundidad de bits y la Mezcla de un dibujo, y cambiarlos más tarde desde el menú Editar."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Puedes elegir el espacio de color, la profundidad de bits y la Mezcla de un dibujo
al crearlo, y cambiarlos más tarde desde el menú **Editar**.

## Espacios de color

El espacio de color de trabajo de un dibujo es **sRGB**, **Display P3**, **Adobe RGB
(1998)** o **ProPhoto RGB**. ProPhoto RGB usa un punto blanco D50, y los otros tres
usan D65.

Los perfiles ICC no pueden ser espacios de trabajo. Puedes usarlos para la
[prueba de impresión](/es/docs/color-management/proof/) y para
[exportar](/es/docs/files/export/).

## Profundidades de bits

La profundidad de bits de un dibujo es **SDR de 8 bits**, **SDR de 16 bits**, **HDR
de coma flotante de 16 bits** o **HDR de coma flotante de 32 bits**. Una profundidad
de coma flotante lo convierte en un [dibujo HDR](/es/docs/color-management/hdr/),
almacenado como RGB lineal en el que 1.0 es el blanco SDR a 203 cd/m².

## Elegirlos para un dibujo nuevo

Elige **Archivo > Nuevo…** (**Ctrl+N**) y define **Espacio de color**,
**Profundidad de bits** y **Mezcla**, o elige un **Ajuste preestablecido**:

| Ajuste preestablecido | Espacio de color | Profundidad de bits | Mezcla |
| --- | --- | --- | --- |
| **Dibujo estándar** | sRGB | SDR de 8 bits | Perceptual |
| **Color amplio** | Display P3 | SDR de 8 bits | Perceptual |
| **Edición de fotos** | ProPhoto RGB | SDR de 16 bits | Perceptual |
| **Dibujo HDR** | sRGB | HDR de coma flotante de 16 bits | Luz lineal |

Con una profundidad de coma flotante, **Mezcla** queda fijada en Luz lineal. Activa
**Usar estos ajustes en los dibujos nuevos** para que estas opciones, incluida la
Mezcla, sean las predeterminadas de los dibujos nuevos.

![El diálogo Dibujo nuevo con Espacio de color en Display P3, Profundidad de bits, Mezcla y la línea de resumen.](shot:color-management/new-dialog-color)

## Valores predeterminados en Preferencias

Elige **Editar > Preferencias** y abre la página **Color**:

- En **Dibujos nuevos**, define el **Espacio de color**, la **Profundidad de bits** y el **Fondo** de los dibujos futuros. Los dibujos abiertos no cambian.
- En **Al abrir fotos**, define **Precisión de edición** (**Profundidad del original** o **16 bits**) y **RGB y escala de grises sin perfil** (**Suponer sRGB** o **Preguntar**). Con **Preguntar**, al abrir una foto sin perfil aparece **Elegir interpretación de imagen**. Las fotos con perfil conservan su perfil incrustado.
- Selecciona **Gestionar perfiles…** para abrir la [Biblioteca de perfiles de color](/es/docs/color-management/proof/).

Preferencias no tiene ningún ajuste de Mezcla.

## Asignar perfil

Elige **Editar > Asignar perfil…** para conservar los valores RGB del dibujo e
interpretarlos en otro espacio de trabajo. Elige el espacio en **Espacio de color**,
donde Adobe RGB (1998) aparece como **Adobe RGB**. Las capas de foto conservan el
perfil de origen de su [foto original](/es/docs/layers/types/).

## Convertir espacio de color

Elige **Editar > Convertir espacio de color…** para cambiar los valores RGB de modo
que los colores conserven su aspecto en otro espacio de trabajo, dentro de su gama.

Con **Guardar copia acoplada**, **Aplicar** pasa a ser **Guardar copia…**. La copia
tiene una sola capa, con el mismo tamaño y la misma profundidad de bits. Su nombre
de archivo debe terminar en `.capy` y no puede ser el archivo del dibujo abierto.

![El diálogo Convertir espacio de color con la comparación Antes y Después y el mensaje sobre la gama.](shot:color-management/convert-dialog)

### Espacio de color

El espacio de trabajo al que se convierte. Al principio está seleccionado el espacio actual.

### Resultado

**Capas editables** (predeterminado) convierte cada capa en su sitio. **Guardar
copia acoplada** guarda una copia convertida y acoplada como archivo `.capy` nuevo y
deja sin cambios el dibujo abierto.

### Propósito de conversión

**Colorimétrico relativo** (predeterminado), **Perceptual**, **Saturación** o
**Colorimétrico absoluto**. La compensación del punto negro está siempre desactivada.

## Cambiar profundidad de bits

Elige **Editar > Cambiar profundidad de bits…** para cambiar la precisión con la que
se almacena el dibujo. El espacio de color no cambia.

Al pasar a una profundidad de coma flotante, el dibujo se convierte en HDR y la
Mezcla pasa a Luz lineal en el mismo paso. Al volver a una profundidad entera, se
mantiene Luz lineal hasta que cambias la [Mezcla](#mezcla). Reducir la profundidad
puede recortar colores.

### Profundidad de bits

La nueva profundidad de bits. Al principio está seleccionada la profundidad actual.

### Tramado

**Ninguno** (predeterminado) o **Estocástico (8 bits)**. El tramado solo se aplica
cuando el destino es SDR de 8 bits.

## Previsualizar y aplicar

Para aplicar Asignar perfil, Convertir espacio de color o Cambiar profundidad de bits:

1. Define los campos del diálogo.
2. Selecciona **Previsualizar resultado completo**.
3. Compara **Antes** y **Después**.
4. Selecciona **Aplicar** (o **Guardar copia…**).

**Aplicar** no está disponible hasta que la vista previa está lista, y cambiar un
campo descarta la vista previa. Si algún color se recorta, la línea de estado
indica «Algunos colores superan la gama de destino. Compara el resultado antes de
aplicar.»

Aplicar es un paso de deshacer. Deshacer y Rehacer abren **Deshacer cambio de
color** y **Rehacer cambio de color**. Estos diálogos aplican el cambio sin pedir
nada más y solo ofrecen **Cancelar**.

## Mezcla

Puedes combinar las capas sobre los valores codificados del dibujo o en luz lineal.
Haz una de las siguientes acciones:

- Elige **Editar > Mezcla > Mezcla perceptual** o **Editar > Mezcla > Mezcla en luz lineal**.
- Pon **Mezcla** en **Perceptual** o **Luz lineal** en el diálogo Dibujo nuevo.

![El menú Editar con el submenú Mezcla abierto y Mezcla perceptual marcada.](shot:color-management/edit-blending-menu)

Los píxeles pintados conservan sus valores. La Mezcla cambia:

- cómo se combinan las capas;
- cómo los pinceles secos depositan el color sobre la pintura existente;
- Desenfoque gaussiano, Máscara de enfoque, Paso alto, Suavizado con conservación de bordes y Enfoque suave (Desenfoque de movimiento, Viñeta y Resplandor funcionan siempre en luz lineal);
- el gris neutro de **Nueva capa de sobreexposición y subexposición**;
- [Separación de frecuencias…](/es/docs/retouch/dodge-burn/), que necesita Perceptual.

Cambiar la Mezcla es un paso de deshacer. Los dibujos HDR usan siempre Luz lineal,
y los dos elementos del menú no están disponibles. Los dibujos nuevos y las fotos
abiertas desde archivos de imagen empiezan con Perceptual. Las fotos que se abren
con una profundidad de coma flotante y los archivos `.capy` guardados antes de que
existiera la Mezcla usan Luz lineal.

## Propiedades del documento

Elige **Archivo > Propiedades del documento…** para ver el **Tamaño del lienzo**, el
**Espacio de color de trabajo**, la **Profundidad de bits**, la **Mezcla** y los
**Metadatos de resolución** del dibujo. Los dibujos HDR añaden **Blanco de
referencia HDR**. Cada foto original del dibujo añade una fila con su perfil de
origen. En este diálogo no se puede cambiar nada.
