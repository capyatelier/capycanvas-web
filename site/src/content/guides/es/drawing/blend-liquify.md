---
title: "Mezclar y Licuar"
description: "Las herramientas Mezclar y Licuar para arrastrar la pintura y desplazar los píxeles de una capa."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

Puedes arrastrar y mezclar la pintura de una capa con **Mezclar**, y desplazar sus
píxeles con **Licuar**.

## Mezclar

Haz una de las siguientes acciones:

- Pulsa **J**.
- En Pintura, selecciona **Mezclar** en la barra de herramientas. El mismo botón contiene **Tampón de clonar**.
- En Foto, selecciona **Mezclar** en la barra de herramientas.
- En Boceto, elige un mezclador en el cajón **Esculpir**.
- Busca **Mezclar** en la búsqueda de comandos.

Elige un conjunto y un mezclador en **Conjunto de herramientas**. **Dedo** es el
mezclador predeterminado.

| Conjunto | Mezcladores |
| --- | --- |
| **Mezclar** | **Dedo**, **Mezclador suave**, **Desenfocar**, **Difumino**, **Pañuelo de papel**, **Mezclador granulado**, **Mezclador que conserva la textura**, **Mezclador de tono** |
| **Pintura húmeda** | **Mezclador natural**, **Mezclador húmedo**, **Mezclador de color**, **Espátula de mezcla**, **Mezclador de cerdas** |
| **Efectos** | **Mezclador pictórico**, **Mezclador peine**, **Mezclador disperso**, **Enfocar**, **Marmolado**, **Mezclador de cristal**, **Mezclador de tramado** |

Los ajustes de cada mezclador están en
[Mezcla, difusión y cerdas](/es/docs/brushes/wet-media/).

## Licuar

Haz una de las siguientes acciones:

- Pulsa **J** con Mezclar activa.
- En Pintura o Foto, selecciona **Licuar** en la barra de herramientas. Haz clic con el botón derecho en el botón o mantenlo pulsado para elegir un modo.
- En Boceto, elige un modo en el conjunto **Licuar** del cajón **Esculpir**.
- Busca **Licuar** en la búsqueda de comandos.

Cada modo es un ajuste preestablecido en **Conjunto de herramientas**:

| Ajuste preestablecido | Efecto |
| --- | --- |
| **Licuar empujar** | Arrastra los píxeles a lo largo del trazo. |
| **Licuar remolino antihorario** | Gira los píxeles en sentido antihorario alrededor del centro del pincel. |
| **Licuar remolino horario** | Gira los píxeles en sentido horario alrededor del centro del pincel. |
| **Licuar contraer** | Atrae los píxeles hacia el centro del pincel. |
| **Licuar expandir** | Empuja los píxeles hacia fuera desde el centro del pincel. |
| **Licuar cristales** | Rompe la imagen bajo el pincel en pequeñas celdas dispersas. |
| **Borde** | Atrae los píxeles hacia la línea del trazo desde ambos lados. |
| **Reconstruir** | Recupera la deformación de Licuar bajo el pincel. |

Licuar no tiene botón Aplicar. Cada trazo cambia la capa y es un paso de deshacer
propio. Los trazos siguen deformando los píxeles que tenía la capa antes del primer
trazo, hasta que pintas, rellenas, filtras, transformas o pegas en la capa.

## Ajustar Licuar y Restablecer Licuar

Puedes reducir todo lo que Licuar ha hecho en una capa con **Ajustar Licuar**, o
devolver la capa a sus píxeles de antes del primer trazo con **Restablecer Licuar**.

Haz una de las siguientes acciones:

- En el panel **Herramienta**, activa **Ajustar Licuar** o selecciona **Restablecer Licuar**.
- Busca **Ajustar Licuar** o **Restablecer Licuar** en la búsqueda de comandos.

Con **Ajustar Licuar** activado, aparece un deslizador **Cantidad** en el panel
**Herramienta**. Al 100% la deformación se queda como está, y al 0% desaparece.
Soltar el deslizador es un paso de deshacer, y **Restablecer Licuar** también.

Ninguno de los dos comandos está disponible, con el mensaje «Aplica Licuar a esta
capa primero», hasta que la capa tiene cambios de Licuar.

## Ajustes de Licuar

![El panel Herramienta de Licuar cristales con Intensidad, el grupo Licuar con Distorsión e Inercia, y Ajustar Licuar y Restablecer Licuar.](shot:drawing/liquify-settings)

**Distorsión** e **Inercia** están en el grupo **Licuar** del panel **Herramienta**.

### Intensidad

Define cuánto desplaza los píxeles cada toque. El efecto es más débil con poca
presión del lápiz y hacia el borde de una punta suave.

### Distorsión

Hace irregular el movimiento. En **Licuar cristales** define hasta dónde se
dispersan las celdas. **Reconstruir** no tiene **Distorsión**.

### Inercia

Prolonga el efecto en la última dirección del trazo después de levantar el lápiz.
**Reconstruir** no tiene **Inercia**.

## Cajón Esculpir en Boceto

En Boceto, selecciona **Esculpir** en la barra de título para usar la última
herramienta de Mezclar, Licuar o Retoque, selecciónalo otra vez para abrir su cajón,
y una vez más para cerrarlo. El cajón muestra los conjuntos, las herramientas del
conjunto elegido y sus ajustes. **Esculpir** y **Pincel** conservan cada uno su
propio último ajuste preestablecido y su tamaño de pincel.

![El cajón Esculpir en Boceto con los conjuntos Mezclar, Pintura húmeda, Efectos, Licuar y Retoque a la izquierda, los mezcladores del conjunto Mezclar en el centro y los ajustes de Dedo a la derecha.](shot:drawing/sketch-sculpt-drawer)

## Pintar en una máscara

En una máscara, Mezclar y Licuar pintan cobertura simple, sin arrastrar ni
desplazar píxeles. El primer trazo de este tipo en cada máscara muestra un aviso.
