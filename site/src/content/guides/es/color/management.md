---
title: "Espacios de color, HDR y pruebas."
description: "Elija cómo un dibujo almacena el color, trabaje en HDR y obtenga una vista previa de cómo se imprimirá una imagen."
purpose: "La mayoría de los dibujos se ven geniales con la configuración predeterminada. Cuando editas fotografías, preparas un trabajo para imprimir o quieres los colores vivos de una pantalla moderna, puedes elegir cuánto color puede contener el dibujo y obtener una vista previa de cómo se verá en otro lugar."
techniques: ["Elija un espacio de color y una profundidad de bits para un nuevo dibujo.", "Paint y editar en HDR.", "Obtenga una vista previa de los colores impresos con Prueba."]
figure: "1: Ajustes preestablecidos de dibujo. 2: Espacio de color y profundidad de bits. 3: Crear, que abre el nuevo dibujo."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: Ajustes preestablecidos de dibujo. 2: Espacio de color y profundidad de bits. 3: Crear, que abre el nuevo dibujo."}
---

## Elige el color para un nuevo dibujo.

Cuando elige **File → New…**, el menú **Preset** ofrece algunos puntos de partida. **Standard drawing** se adapta a la mayoría de las obras de arte y a cualquier cosa que compartas en línea. **Wide color** puede contener los colores más vivos que muestran muchas pantallas modernas, y **Photo editing** mantiene una precisión adicional para que los ajustes fuertes no causen bandas en gradientes suaves.

**Color space** establece la gama de colores que puede contener el dibujo y **Bit depth** establece con qué precisión se almacena cada color. Si cambia de opinión más tarde, utilice **Edit → Convert Color Space…** o **Edit → Change Bit Depth…**. Las fotos mantienen los colores con los que fueron tomadas, por lo que no hay nada que configurar cuando abres una.

## Trabajar en HDR

Elija **16-bit float HDR** o **32-bit float HDR** como profundidad de broca para hacer un dibujo HDR. Los dibujos HDR pueden contener colores más brillantes que el blanco, como la luz del sol y las luces brillantes. Cuando editas un dibujo HDR, aparece un arco de intensidad debajo de la rueda de color, por lo que también puedes pintar con colores más brillantes que el blanco.

HDR se muestra con brillo máximo cuando su navegador y pantalla lo admiten. En otras pantallas verás una versión estándar de la imagen. Cuando exporta un dibujo HDR, puede guardar un HDR JPEG o AVIF que también se ve bien en pantallas normales, como se describe en [Exportar una imagen](/es/docs/output/export/).

## Vista previa con prueba

Antes de enviar el trabajo a una impresora, **View → Proof** muestra cómo se verán los colores en el papel. En el panel **Proof**, elija **Print**, luego elija o agregue el perfil de color de la impresora o servicio de impresión. **Gamut warning** marca los colores que la impresora no puede reproducir, para que puedas ajustarlos antes de imprimir.

Para los dibujos HDR, la opción **SDR** en el mismo panel muestra cómo se verá la imagen en una pantalla normal y le permite ajustar el brillo y el contraste de esa versión.
