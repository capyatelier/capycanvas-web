---
title: "Clonar y corregir"
description: "El Tampón de clonar y los pinceles correctores, y el origen del que copian."
related: ["retouch/dodge-burn", "layers/settings", "brushes/basics", "photo/retouch"]
---

Puedes pintar sobre los defectos con píxeles copiados de otra parte de la imagen.

| Herramienta | Qué hace |
| --- | --- |
| **Tampón de clonar** | Pinta con píxeles copiados del disco de origen. |
| **Pincel corrector** | Pinta igual que **Tampón de clonar**. Al levantar el lápiz, la copia adopta el color y el brillo de alrededor del trazo y conserva su textura. |
| **Pincel corrector puntual** | Al levantar el lápiz, reemplaza la mancha que has pintado por textura de la zona cercana más parecida, fundida con lo que la rodea. |

## Elegir una herramienta de retoque

Haz una de las siguientes acciones:

- Pulsa **S**. Vuelve a pulsarla para cambiar a **Pincel corrector** y después a **Pincel corrector puntual**.
- En Foto, selecciona **Tampón de clonar** o **Pincel corrector puntual / Pincel corrector** en la barra de herramientas.
- En Pintura, selecciona **Mezclar / Tampón de clonar** en la barra de herramientas. Haz clic con el botón derecho en el botón, o mantenlo pulsado, para elegir **Tampón de clonar**.
- En Boceto, selecciona **Esculpir** en la barra de título, vuelve a seleccionarlo para abrir el cajón y selecciona **Clonar**, **Corregir** o **Corrección puntual**.
- Escribe el nombre de la herramienta en la [búsqueda de comandos](/es/docs/start/command-search/).

**Pincel corrector** y **Pincel corrector puntual** no tienen botón en Pintura.

Cada herramienta es un pincel, con **Tamaño del pincel**, **Opacidad**, **Flujo**
y los ajustes de **Punta** en el panel Herramienta (consulta
[Tamaño, opacidad y flujo](/es/docs/brushes/basics/)).

![El panel Herramienta de Tampón de clonar, con los ajustes del pincel y los ajustes del origen.](shot:retouch/clone-tool-panel)

## Origen

**Origen**, en el panel Herramienta, define qué copian las herramientas:

- **Capas de referencia** (el valor predeterminado) copia la capa en la que pintas junto con las capas de debajo que están marcadas como referencias.
- **Capa en edición** copia solo la capa en la que pintas.

Con **Capas de referencia**, puedes retocar en una capa vacía encima de la foto.
Marca la foto con [Usar como referencia](/es/docs/layers/settings/), o elige
**Capa > Ajustes de capa > Usar capa inferior como referencia**. Si pintas en
una capa vacía y no hay ninguna referencia marcada debajo, el mensaje ofrece
**Usar *nombre* como referencia**.

No puedes retocar directamente una capa escalada o girada. Retoca en una capa
nueva encima de ella.

## Establecer el origen

**Tampón de clonar** y **Pincel corrector** copian desde el disco de origen, un
pequeño anillo con una cruz.

Haz una de las siguientes acciones:

- Mantén pulsada **Alt** y haz clic donde quieras copiar.
- Selecciona **Establecer origen** y después haz clic.

Hasta que lo establezcas, el origen está en el centro de la vista. Arrastra el
disco para mover el origen. Un dedo puede arrastrar el disco, pero nunca
establece el origen. Mientras pintas, el disco sigue el punto que se está
copiando.

**Pincel corrector puntual** busca su propio origen y no tiene disco.

## Ajustes del origen

Estos ajustes son para **Tampón de clonar** y **Pincel corrector**.

### Origen alineado

Mantiene el mismo desplazamiento entre el origen y el pincel de un trazo a otro.
Cuando está desactivado, cada trazo empieza a copiar en el disco de origen.
Activado de forma predeterminada.

### Voltear origen horizontalmente y Voltear origen verticalmente

Reflejan los píxeles copiados respecto al disco de origen.

### Restablecer desplazamiento del origen

Hace que el siguiente trazo vuelva a copiar desde el disco de origen. Disponible
después de un trazo alineado.

### Establecer origen

El siguiente clic establece el origen.

## Barra del lienzo del disco de origen

Haz clic en el disco de origen sin arrastrar para mostrar a su lado la
[barra del lienzo](/es/docs/selections/working/), con **Alineado**, **Origen**,
los dos botones de voltear, **Restablecer desplazamiento** y **Establecer origen**.
Vuelve a hacer clic en el disco, o elige otra herramienta, para ocultar la barra.

![El disco de origen con su barra del lienzo.](shot:retouch/clone-source-bar)
