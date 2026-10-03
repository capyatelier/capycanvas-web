---
title: "Lápiz, toque y atajos"
description: "Verifique que su lápiz funcione, ajuste su sensación y configure atajos de teclado."
purpose: "Vale la pena asegurarse de que su lápiz funcione correctamente antes de cambiar la configuración del pincel. Una vez hecho esto, algunas preferencias y atajos pueden hacer que dibujar sea más cómodo y mantener tus comandos favoritos al alcance de la mano."
techniques: ["Compruebe que la presión del lápiz funcione.", "Ajuste la presión, el cursor y la predicción de trazos.", "Configura atajos de teclado."]
figure: "1: Páginas de preferencias. 2: Configuración de lápiz y entrada. 3: Atajos de teclado."
related: ["painting/brushes", "advanced/brush-engine", "workspace"]
image: {"light": "/assets/guides/advanced-input-light.webp", "dark": "/assets/guides/advanced-input-dark.webp", "alt": "1: Páginas de preferencias. 2: Configuración de lápiz y entrada. 3: Atajos de teclado."}
---

## Revisa tu bolígrafo

Elija un lápiz y dibuje un trazo que comience ligeramente, presione con más fuerza y luego se aclare nuevamente. Si la línea permanece igual en todo momento, prueba lo mismo en otra aplicación de dibujo. Si la presión tampoco funciona allí, lo más probable es que el problema esté en el controlador de la tableta o en su configuración. Si solo falla en Capy Canvas, verifique la configuración a continuación.

En una tableta de dibujo separada, asegúrese de que la tableta esté asignada a la pantalla que muestra Capy Canvas. En un monitor interactivo, verifique que el cursor esté alineado con la punta del lápiz, tanto en el medio como cerca de los bordes. Si su bolígrafo tiene un extremo con borrador, gírelo para borrarlo. Los botones al costado del lápiz no hacen nada en el lienzo a menos que les des una función en la configuración de tu tableta, como un atajo de teclado.

En una pantalla táctil, los dedos nunca pintan: un dedo que se mantiene quieto elige un color y dos dedos se mueven, hacen zoom y rotan la vista. Esto significa que puedes apoyar la mano en la pantalla mientras dibujas con el lápiz.

## Ajusta cómo se siente el bolígrafo

Abra **Preferences** y elija **Pen & Input**. **Pressure response** cambia la fuerza con la que debes presionar: los valores más bajos hacen que una presión ligera cuente para más. **Cursor shape** elige cómo se ve el puntero sobre el lienzo y **Hide cursor when painting** lo mantiene apartado mientras dibuja.

**Enable stroke prediction** ayuda a que la línea se mantenga al día con una pluma que se mueve rápidamente. Si el final de un trazo parece sobrepasar un giro brusco, reduzca **Prediction amount** o desactive la predicción. Cambie una configuración a la vez y dibuje la misma curva después de cada cambio.

## Configurar atajos

Abra **Help → Keyboard Shortcuts** para ver cada comando y sus claves. Seleccione un comando para darle un nuevo acceso directo y Capy Canvas le permitirá saber si las teclas ya están en uso. Algunos valores predeterminados útiles son **Ctrl+Z** para deshacer y **Ctrl+Shift+Z** para rehacer, **B** para pinceles, **P** para bolígrafos y lápices, **E** para el borrador, **I** para elegir un color, **F** para rellenar, **Ctrl+0** para ajustar el dibujo en la pantalla, **Q** para máscara rápida y **Tab** para el modo Zen. Al presionar **B** o **P** nuevamente se cambia entre las herramientas que comparten la clave. También puedes darle a tus tamaños de pincel favoritos sus propias claves. En una Mac, use Command donde estas guías digan Ctrl.
