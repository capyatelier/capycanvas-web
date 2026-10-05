---
title: "Vista del lienzo"
description: "Hacer zoom, desplazar, girar y voltear la vista del lienzo sin cambiar el dibujo."
related: ["input/touch", "start/workspaces", "transform/image", "preferences"]
---

Puedes hacer zoom, desplazar, girar y voltear la vista sin cambiar el dibujo. Los
cambios de vista no cuentan como pasos de deshacer.

## Menú Ver

![El menú Ver con los comandos de zoom, rotación y volteo.](shot:start/canvas-view-menu)

El menú **Ver** reúne los comandos de vista con sus teclas. En Boceto, ábrelo
desde **Menú principal** en la barra de título.

## Zoom

Haz una de las siguientes acciones:

- Elige **Ver > Acercar** o **Ver > Alejar**.
- Pulsa **Ctrl+=** o **Ctrl+-**.
- Mantén pulsada **Ctrl** y desplázate con la rueda. En macOS y iPad, mantén pulsada **Control**, no Command.
- Pellizca con dos dedos en una pantalla táctil, o en el trackpad en macOS y iPad.
- Selecciona un nivel de zoom en el menú del indicador de zoom, o un botón de zoom en el panel **Navegador**.
- Mueve hacia arriba o hacia abajo el joystick derecho de un mando de videojuegos.

El zoom va del 2% al 1600%. Con **Ctrl** y la rueda, el zoom se centra en el
puntero; al pellizcar, se centra en los dedos. **Velocidad de zoom con la rueda**,
en [Preferencias](/es/docs/preferences/), define cuánto cambia el zoom en cada paso de la rueda.

## Ajustar lienzo a la vista

Elige **Ver > Ajustar lienzo a la vista** o pulsa **Ctrl+0** para mostrar el
dibujo completo y centrado. Ajustar lienzo a la vista también devuelve la rotación
de la vista a 0°, pero conserva los volteos.

El dibujo se ajusta a la vista al abrirse, y no vuelve a ajustarse cuando cambias
el tamaño de la ventana.

## Píxeles reales

Elige **Ver > Píxeles reales**, o pulsa **Ctrl+1** o **Ctrl+Alt+0**, para mostrar
un píxel de la imagen por cada píxel de la pantalla (100%). El menú del indicador
de zoom también ofrece 25%, 50%, 200% y 400%. En estos niveles, con la vista
girada 0°, 90°, 180° o 270°, los píxeles de la imagen coinciden con los de la pantalla.

## Desplazar la vista

Haz una de las siguientes acciones:

- Desplázate con la rueda. Mantén pulsada **Mayús** mientras te desplazas para moverte en horizontal.
- Mantén pulsada **Espacio** y arrastra.
- Arrastra con dos dedos en una pantalla táctil.
- Selecciona la herramienta **Mano** o pulsa **H**, y arrastra.
- Arrastra en el panel **Navegador**.
- En el editor web, arrastra con el botón central o derecho del ratón.
- Mueve el joystick izquierdo de un mando de videojuegos.

**Velocidad de desplazamiento**, en [Preferencias](/es/docs/preferences/), define
la distancia que recorre cada paso de la rueda.

## Girar la vista

Haz una de las siguientes acciones:

- Elige **Ver > Girar vista 90° a la izquierda** o **Ver > Girar vista 90° a la derecha**.
- Gira dos dedos en una pantalla táctil, o en el trackpad en macOS y iPad.
- Escribe un ángulo o arrastra el deslizador de rotación en el menú del indicador de zoom.
- Selecciona un botón de giro en el panel **Navegador**.

De forma predeterminada, ninguna tecla gira la vista. Para volver a 0°, selecciona
**Restablecer rotación** en el menú del indicador de zoom.

## Voltear la vista

Haz una de las siguientes acciones:

- Elige **Ver > Voltear vista horizontalmente** o **Ver > Voltear vista verticalmente**.
- En Pintura, selecciona **Voltear vista horizontalmente** en el extremo derecho de la barra de comandos.
- Selecciona un botón de volteo en el panel **Navegador** o en el menú del indicador de zoom.

Mientras un volteo está activo, su elemento de menú lleva una marca de verificación
y su botón aparece pulsado. Los trazos quedan donde los dibujas sobre la vista
volteada. Para voltear o girar el propio dibujo, consulta
[Tamaño y rotación de la imagen](/es/docs/transform/image/).

## Indicador de zoom

![El indicador de zoom en el pie, con su menú abierto.](shot:start/canvas-zoom-menu)

El extremo derecho del pie muestra el zoom y la rotación, por ejemplo «100% ·
0°». Selecciona el indicador para abrir un menú con campos y deslizadores de zoom
y rotación, los comandos y niveles de zoom, **Restablecer rotación**, los bloqueos
y botones para hacer zoom, girar y voltear la vista.

Elegir una fila cierra el menú. Los botones y los valores escritos lo dejan abierto.

Boceto oculta el pie. Para mostrarlo, activa **Mostrar pie** en
**Ventana > Personalizar barra de título…**.

## Bloquear zoom y Bloquear rotación

Activa **Bloquear zoom** en el menú del indicador de zoom para que el pellizco,
**Ctrl** con la rueda y el mando de videojuegos dejen de cambiar el zoom.
**Bloquear rotación** impide girar con dos dedos. Los comandos, las teclas, los
niveles de zoom y los valores escritos siguen funcionando con un bloqueo activo.

## Panel Navegador

![El panel Navegador con un contorno alrededor de la parte visible del dibujo.](shot:start/canvas-navigator)

El panel **Navegador** muestra el dibujo completo con un contorno alrededor de la
parte visible.

Para mostrar el panel, haz una de las siguientes acciones:

- Elige **Ventana > Navegador**.
- En Pintura y Foto, selecciona el icono **Navegador** a la derecha de la ventana.

Arrastra el contorno para mover la vista, o selecciona un punto fuera de él para
centrar la vista en ese punto. Los botones bajo el dibujo hacen zoom, giran y
voltean la vista.

## Pantalla completa

Haz una de las siguientes acciones:

- Elige **Ver > Pantalla completa**.
- En las aplicaciones para Windows y Linux, pulsa **F11**.
- En el editor web, selecciona **Pantalla completa** a la derecha de la barra de título.
- En macOS, elige **Ver > Enter Full Screen**.

Repite el paso para salir de la pantalla completa. La pantalla completa no está
disponible en iPad ni en Android.

En el editor web, **F11** activa la pantalla completa del propio navegador. Sal de
ella con los controles del navegador. Mientras el editor web está en pantalla
completa, Pintura y Foto muestran en la barra de título la hora y, si el navegador
lo indica, el nivel de batería.

## La vista de cada dibujo

Cada dibujo abierto conserva su propio zoom, rotación, volteos y bloqueos, también
después de reiniciar. Cambiar de pestaña de dibujo o de espacio de trabajo no
cambia la vista. Un archivo `.capy` no guarda la vista.
