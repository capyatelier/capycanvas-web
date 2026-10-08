---
title: "Lápiz"
description: "Los ajustes del lápiz en Preferencias y los gestos de tocar dos veces y apretar el Apple Pencil."
related: ["input/touch", "input/keyboard", "preferences", "brushes/basics"]
---

Los ajustes del lápiz están en la página **Lápiz y entrada** de **Editar >
Preferencias**.

![La página Lápiz y entrada de Preferencias.](shot:pen/pen-and-input)

## Respuesta a la presión

Puedes cambiar cómo responde el lápiz a la presión suave con **Respuesta a la
presión**, en **Respuesta del lápiz**. Los valores más bajos intensifican la presión
suave, y los más altos requieren más fuerza. El rango va de 0.25 × a 4.00 ×. Con el
valor predeterminado, 1.00 ×, la presión del lápiz se usa sin cambios.

El ajuste se aplica a todos los pinceles y herramientas, incluidos **Pintar
selección** y **Máscara rápida**. Los trazos que ya dibujaste no cambian.

## Predicción de trazos

La predicción de trazos dibuja un tramo corto del trazo por delante de la punta del
lápiz, y el trazo real lo sustituye a medida que dibujas. Los ajustes están en
**Respuesta del lápiz**:

- **Activar predicción de trazos** activa o desactiva los dos tipos de predicción.
- **Usar predicción de trazos de *sistema***, por ejemplo **Usar predicción de trazos de Windows**, usa la predicción del sistema o del navegador.
- **Cantidad de predicción** define cuánto se adelanta la predicción propia de {appName}, de 0 a 64 ms.

Los dos interruptores están activados de forma predeterminada, y **Cantidad de
predicción** es 16 ms. Mientras **Activar predicción de trazos** está desactivado,
los otros dos ajustes no están disponibles.

| Sistema | La predicción del sistema |
| --- | --- |
| iPad | Disponible |
| Windows | Disponible cuando Windows la ofrece |
| Android | Android 14 y posterior, con un lápiz compatible con el sistema |
| Web | En los navegadores que la ofrecen |
| macOS, Linux | Nunca disponible |

Donde la predicción del sistema no está disponible, su interruptor no está
disponible y **Cantidad de predicción** define la predicción. Mientras se usa la
predicción del sistema, **Cantidad de predicción** no está disponible (en iPad
está oculta).

El cursor sigue al lápiz, no al trazo predicho.

![Los ajustes de Respuesta del lápiz.](shot:pen/prediction)

## Forma del cursor

Puedes elegir el puntero que se muestra sobre el lienzo con **Forma del cursor**, en
**Puntero**.

| Opción | Muestra |
| --- | --- |
| **Tamaño del pincel** | El contorno de la punta del pincel con su tamaño, su forma y su rotación (la predeterminada) |
| **Cruz**, **Triángulo** | Una cruz o un triángulo pequeño |
| **Punto** | Una cruz diminuta |
| **Punto de un píxel** | Un píxel de la pantalla |
| **Mira** | Una cruz con un punto en el centro |
| **Herramienta** | El icono de la herramienta, con su punto de trabajo en el puntero |
| **Herramienta y tamaño del pincel**, **Tamaño del pincel y cruz**, **Tamaño del pincel y punto**, **Tamaño del pincel y punto de un píxel** | El contorno del pincel junto con la otra marca |
| **Ninguno** | Nada con un lápiz sobre una pantalla. Un ratón, un trackpad o una tableta sin pantalla muestran **Mira**. |

La forma se aplica a las herramientas de pintura y a **Pintar selección**. Las demás
herramientas muestran su icono cuando la forma incluye **Herramienta**, y una cruz
en otro caso.

![La lista Forma del cursor.](shot:pen/cursor-shapes)

## Ocultar cursor al pintar

Con **Ocultar cursor al pintar** activado (el predeterminado), el cursor desaparece
mientras el lápiz toca el lienzo o el botón del ratón está pulsado con una
herramienta de pintura. El contorno del pincel sigue visible mientras borras.

## Extremo borrador

Puedes elegir qué hace el extremo borrador del lápiz. El grupo **Extremo borrador**
no aparece en iPad.

- **Herramienta**: **Herramienta actual** (la predeterminada) conserva la herramienta que estás usando. **Borrador**, **Pluma**, **Lápiz**, **Pincel de pintura**, **Aerógrafo** y **Mezclar** cambian a esa herramienta mientras usas el extremo borrador, y después vuelve la herramienta anterior.
- **Pintar con transparencia**: si está activado (el predeterminado), el extremo borrador borra con el pincel de la herramienta. Si está desactivado, el extremo borrador pinta. Este interruptor se oculta mientras **Herramienta** es **Borrador**.

## Botones del lápiz

Puedes asignar una acción a cada botón lateral del lápiz, y una distinta para cada
tipo de herramienta.

Para configurar un botón del lápiz:

1. Selecciona el botón en **Botones del lápiz**.
2. Selecciona **Acción**, o desactiva **Igual para todas las herramientas** y selecciona un tipo de herramienta, como **Herramientas de dibujo**.
3. Elige una acción. **Nada** deja el botón sin acción.

Las herramientas, los pinceles y los modos, como **Desplazar vista** o **Tomar
muestra de color**, duran mientras mantienes pulsado el botón. Las demás acciones se
ejecutan una vez. Una pulsación durante un trazo surte efecto después del trazo.

Todos los botones empiezan en **Nada**. Un botón en **Nada** conserva la acción que
le asigna el controlador de la tableta o el sistema.

| Sistema | Botones que aparecen |
| --- | --- |
| Linux | **Botón lateral inferior**, **Botón lateral superior**, **Tercer botón lateral** |
| Windows | **Botón lateral inferior** |
| macOS, Android, web | **Botón lateral inferior**, **Botón lateral superior** |
| iPad | Ninguno |

En Linux y Android, los botones del panel de una tableta se configuran como teclas
en la página [Atajos de teclado](/es/docs/input/keyboard/).

![La página del Botón lateral inferior, con una acción para cada tipo de herramienta.](shot:pen/pen-button-page)

## Tocar dos veces y apretar el Apple Pencil

En iPad, tocar dos veces el Apple Pencil y apretar un Apple Pencil Pro siguen el
ajuste propio del iPad en **Ajustes > Apple Pencil**.

- «Switch between current tool and eraser» cambia al **Borrador** y vuelve.
- «Switch between current tool and last used» cambia a la herramienta que elegiste antes.

Las demás opciones no hacen nada en {appName}. El gesto de apretar actúa al soltar. Cuando
el Apple Pencil se mantiene sobre la pantalla sin tocarla, aparece el cursor.
