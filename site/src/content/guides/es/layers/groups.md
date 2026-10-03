---
title: "Grupos y mezclas"
description: "Mantenga juntas las capas relacionadas y cambie la forma en que se combinan sus colores."
purpose: "A medida que crece un dibujo, los grupos mantienen juntas las capas relacionadas para que la lista sea fácil de leer. Los modos de fusión cambian la forma en que los colores de una capa se mezclan con las capas inferiores, lo cual es útil para sombras, luces y lavados de color."
techniques: ["Coloque capas relacionadas en un grupo.", "Pruebe un modo de fusión en una capa de sombreado.", "Mantenga ordenada una larga lista de capas."]
figure: "1: pila de capas. 2: Modo de fusión. 3: Botón nuevo grupo."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: pila de capas. 2: Modo de fusión. 3: Botón nuevo grupo."}
---

## Capas relacionadas con el grupo

Seleccione **New group** en la parte inferior del panel Capas y luego arrastre las capas hacia él. Por ejemplo, puedes mantener los colores, las sombras y las líneas de un personaje en un grupo y el fondo en otro. Seleccione la flecha al lado de un grupo para plegarlo cuando no necesite ver su contenido.

Ocultar un grupo oculta todo lo que hay dentro de él. Si una capa parece haber desaparecido aunque su ojo esté encendido, verifique si el grupo en el que se encuentra está oculto. Mantenga las capas recortadas directamente encima de su capa base cuando las mueva a un grupo, para que permanezcan unidas a él.

## Prueba un modo de fusión

Seleccione una capa de sombreado y abra el menú de modo de fusión encima de la lista. **Multiply** oscurece los colores siguientes, lo que lo hace bueno para las sombras. **Screen** los aclara, lo que favorece brillos y mechas. **Normal** simplemente pinta sobre lo que está debajo, y los otros modos mezclan colores a su manera.

Oculta y muestra la capa para comparar el resultado. Si el efecto es demasiado fuerte, reduzca la opacidad de la capa en lugar de volver a pintarla.

## Mantén la lista ordenada

Los grupos mantienen ordenada una lista larga mientras cada capa permanece editable y puedes plegar los grupos en los que no estás trabajando. Si necesita una sola imagen plana para otra aplicación, [exporte](/es/docs/output/export/) una copia y conserve el archivo `.capy` con todas sus capas.

Para los cambios de color que desea seguir ajustando, como el brillo o la saturación, use una capa de filtro de [Filtros y ajustes](/es/docs/filters/overview/) en lugar de pintar el cambio en una capa.
