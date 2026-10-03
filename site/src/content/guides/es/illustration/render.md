---
title: "Representación"
description: "Agregue sombreado y textura en capas recortadas a cada forma, luego exporte el resultado."
purpose: "El renderizado es donde las formas obtienen su luz y sombra. Pintar el sombreado en capas recortadas lo mantiene dentro de cada forma automáticamente y, como el sombreado está separado del color base, puede ajustarlo o rehacerlo sin perder nada."
techniques: ["Recorta una capa de sombreado a la cinta.", "Controla la fuerza del sombreado.", "Sombrea las otras formas, revisa las capas y exporta."]
figure: "1: Textura de la cinta y sombreado de la cinta encima de la cinta. 2: Recortar a la capa inferior. 3: Opacidad de capa para toda la pasada de sombreado."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Textura de la cinta y sombreado de la cinta encima de la cinta. 2: Recortar a la capa inferior. 3: Opacidad de capa para toda la pasada de sombreado."}
---

## 1. Agrega sombreado recortado

Seleccione **Ribbon**, agregue una nueva capa directamente encima y asígnele el nombre **Ribbon shading**. Abra su menú y elija **Layer Settings → Clip to layer below**. Ahora pinte las sombras en las curvas de la cinta con **Watercolor Wash** y agregue algunos acentos salvia con **Paintbrush**. Tus trazos pueden ir más allá del borde de la cinta, porque solo se muestra la parte dentro de la cinta.

Deje el modo de fusión de la capa de sombreado en **Normal** por ahora. El color base permanece de forma segura en la capa de la Cinta, por lo que al borrar el sombreado nunca se borra el color que se encuentra debajo.

## 2. Controla la fuerza

La opacidad del pincel cambia los trazos que estás a punto de pintar. El **opacity of the Ribbon shading layer** cambia todos los tonos que ya has pintado. Si cada sombra parece demasiado fuerte, reduzca la opacidad de la capa en lugar de volver a pintar.

Para resaltar, agregue **Ribbon texture** directamente encima del sombreado de la cinta y recórtelo también. Utilice un lápiz pequeño o un pincel texturizado para hacer algunas marcas claras. El orden de las capas ahora es Textura de la cinta, Sombreado de la cinta y luego Cinta. [Configuración del pincel](/es/docs/advanced/brush-engine/) explica la opacidad y el flujo con más detalle.

## 3. Finalizar y exportar

Sombrea **Disc** y **Block** de la misma manera, cada uno con sus propias capas recortadas. En el ejemplo se utiliza Aerógrafo para el sombreado suave del disco y Lápiz para las pequeñas marcas de color crema. Mantenga **Line art** por encima de todo. Si es necesario arreglar el borde exterior de una forma, pinte la máscara de esa forma; si solo el sombreado es incorrecto, cambie la capa de sombreado. [Máscaras y recortes](/es/docs/layers/masks/) también muestra cómo cambiar el color de la tinta con bloqueo alfa.

Cuando esté satisfecho con él, oculte las capas preliminares, guarde su archivo `.capy` y [exporte una imagen](/es/docs/output/export/) para compartir. Abra el archivo exportado una vez para comprobar que tiene el aspecto esperado.
