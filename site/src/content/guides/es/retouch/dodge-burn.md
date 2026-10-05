---
title: "Sobreexponer y subexponer, separación de frecuencias"
description: "Añadir una capa de sobreexposición y subexposición, y separar una capa en capas Baja y Alta con Separación de frecuencias."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## Nueva capa de sobreexposición y subexposición

Puedes añadir una capa gris neutra en **Luz suave** para sobreexponer y
subexponer.

Haz una de las siguientes acciones:

- Elige **Capa > Nuevo > Nueva capa de sobreexposición y subexposición**.
- Abre el menú de una capa en el panel Capas y elige **Nuevo > Nueva capa de sobreexposición y subexposición**.

Aparece una capa del tamaño del lienzo llamada *Sobreexponer y subexponer*
encima de la capa activa y de las capas recortadas a ella, y pasa a ser la capa
activa.

No puedes añadir la capa dentro de un grupo bloqueado, ni mientras hay un
recorte o una transformación abiertos.

![El panel Capas con una capa Sobreexponer y subexponer encima de la foto del terrario.](shot:retouch/dodge-burn-layer)

## Separación de frecuencias…

Puedes separar la capa activa en frecuencias en un solo paso.

Elige **Filtro > Separación de frecuencias…**. Se abre un panel en la parte
inferior del lienzo con **Radio**, 4 px de forma predeterminada, y el lienzo
muestra una vista previa del desenfoque de la capa *Baja* mientras cambias
**Radio**.

![El panel Separación de frecuencias con el valor de Radio.](shot:retouch/frequency-separation-panel)

**Aplicar** coloca un grupo llamado *Separación de frecuencias* donde estaba la
capa:

- *Alta* contiene la textura fina, en **Luz lineal**. Es la capa superior y pasa a ser la capa activa.
- *Baja* contiene los colores y los tonos, desenfocados con **Desenfoque gaussiano** según el radio, en **Normal**.

El grupo toma la opacidad y el recorte de la capa original. La capa original se
queda justo debajo del grupo, oculta.

La capa tiene que estar visible y en **Normal**, y el dibujo tiene que usar
**Editar > Mezcla > Mezcla perceptual** (consulta
[Espacio de color, profundidad de bits y mezcla](/es/docs/color-management/color-spaces/)).
Si el dibujo cambia mientras el panel está abierto, el panel se cierra.

![El panel Capas con el grupo Separación de frecuencias, Alta encima de Baja y la capa original oculta.](shot:retouch/frequency-separation-layers)
