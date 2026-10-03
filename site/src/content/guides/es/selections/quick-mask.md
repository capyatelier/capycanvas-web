---
title: "Máscara rápida y capas de selección"
description: "Paint una selección con un pincel y guarde las selecciones para usarlas nuevamente más tarde."
purpose: "Algunas áreas son más fáciles de pintar que delinear, como el cabello suave, las nubes o un fondo borroso. Máscara rápida muestra tu selección como una superposición de color que puedes pintar con cualquier pincel. Las capas de selección mantienen una selección en su dibujo para que pueda cargarla nuevamente cuando la necesite."
techniques: ["Refine una selección con un pincel en Máscara rápida.", "Paint una selección directamente con la selección Paint.", "Guarde una selección como capa de selección y cárguela más tarde."]
figure: "1: La capa temporal de Máscara rápida. 2: Configuración de Máscara rápida, incluido el color de superposición. 3: La selección se muestra como una superposición de color, ampliada con una pincelada."
related: ["tools/selections", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/selections-quick-mask-light.webp", "dark": "/assets/guides/selections-quick-mask-dark.webp", "alt": "1: La capa temporal de Máscara rápida. 2: Configuración de Máscara rápida, incluido el color de superposición. 3: La selección se muestra como una superposición de color, ampliada con una pincelada."}
---

## Refinar una selección en Máscara rápida

Haga una selección aproximada con cualquier herramienta de selección, luego elija **Select → Quick Mask** o presione **Q**. La selección aparece como una superposición de color y aparece una capa temporal **Quick Mask** en la parte superior del panel Capas. Ahora pinta con cualquier pincel para agregarlo a la selección y usa el **Eraser** para quitarlo. Los cepillos suaves crean bordes suaves, que es exactamente lo que desea para el pelaje o el follaje.

Si la superposición es difícil de ver en su dibujo, cambie su color u opacidad en **Properties**. Cuando la selección parezca correcta, elija **Return to Artwork** para volver a pintar con la selección activa.

## Paint una selección directamente

Si prefiere omitir el primer paso, elija la herramienta **Paint selection** de las herramientas de selección. Cada trazo que realizas se suma a la selección, y al rodear un área se selecciona todo lo que hay dentro de ella. Mantenga presionado **Alt** o cambie el modo en el panel Herramientas para pintar partes de la selección nuevamente.

## Guardar selecciones para más tarde

Una selección se pierde tan pronto como realiza una nueva, así que guarde cualquier selección que necesite nuevamente. Elija **Select → Save as Selection Layer** o **Save as Selection Layer** en el menú de la capa Máscara rápida. La selección se almacena como una capa de selección en el panel Capas y se guarda con su dibujo.

Para usarlo nuevamente, elija **Select → Load Selection**, o mantenga presionado **Ctrl** y haga clic en la miniatura de la capa de selección. También puedes combinarlo con la selección actual del menú de la capa. El botón **New Selection Layer** en la parte inferior del panel Capas crea una capa de selección vacía en la que puedes pintar directamente.
