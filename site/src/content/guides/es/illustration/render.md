---
title: "Renderizado"
description: "Etapa 4 del tutorial de ilustración: sombreado y textura en capas recortadas a cada color base, y una exportación PNG."
related: ["layers/settings", "drawing/brush-tools", "files/open-save", "files/export"]
---

En esta etapa se crea el sombreado de cada forma, en capas recortadas a su color
base, y una exportación PNG del estudio.

## 1. Añade una capa de recorte

Selecciona *Ribbon* y elige **Capa > Nuevo > Nueva capa de recorte**, o elige
**Nuevo > Nueva capa de recorte** en el menú de la fila
([Ajustes de capa](/es/docs/layers/settings/)). Cambia el nombre de la capa nueva
a *Ribbon shading*.

![El menú de capa con Nuevo abierto y Nueva capa de recorte dentro.](shot:illustration/render-new-menu)

*Ribbon shading* aparece justo encima de *Ribbon*, y una barra a la izquierda de
las miniaturas marca el recorte. El recorte sigue la máscara de *Ribbon*, no el
verde azulado que rellena toda la capa.

## 2. Sombrea la cinta

Selecciona **Pincel de pintura** en la barra de herramientas y **Aguada de acuarela**
en el Conjunto de herramientas ([Herramientas de pincel](/es/docs/drawing/brush-tools/)).
Pon **Opacidad** en 65% en el panel **Herramienta** y pinta en azul oscuro las
sombras de las curvas de la cinta. Después añade acentos en verde salvia con el
pincel **Pincel de pintura**.

## 3. Añade una capa de textura

Con *Ribbon shading* seleccionada, vuelve a elegir
**Capa > Nuevo > Nueva capa de recorte** y cambia el nombre de la capa a
*Ribbon texture*. Se coloca encima de *Ribbon shading*, en el mismo recorte.
Selecciona **Lápiz** y el pincel **Lápiz**, y dibuja marcas de rayado y luces en
crema.

## 4. Sombrea el disco y el bloque

Selecciona *Disc*, añade una capa de recorte llamada *Disc shading* y sombrea la
mitad inferior del disco con el **Aerógrafo** en terracota. Añade una luz en
crema arriba a la izquierda.

*Block shading* va sobre *Block* de la misma manera: azul oscuro a lo largo de
los bordes derecho e inferior con el pincel **Pincel de pintura** y después un
rayado en crema con el pincel **Lápiz**.

![El panel Capas con Ribbon texture y Ribbon shading recortadas a Ribbon, y Disc shading y Block shading recortadas a sus bases.](shot:illustration/render-layers)

La lista de capas coincide con las capas terminadas de la
[introducción](/es/docs/illustration/).

## 5. Guarda y exporta

Elige **Archivo > Guardar**, o pulsa **Ctrl+S**, y guarda el dibujo como archivo
`.capy` ([Abrir y guardar](/es/docs/files/open-save/)). Para exportar un PNG:

1. Elige **Archivo > Exportar…**, o pulsa **Ctrl+Mayús+E**.
2. Deja **Destino** en **Web / Compartir** y pon **Formato** en **Imagen PNG**.
3. Selecciona **Elegir archivo…** y elige una carpeta y un nombre.

Después de la primera exportación, **Archivo > Exportar de nuevo** escribe el
mismo archivo con los mismos ajustes, sin el diálogo
([Exportar imágenes](/es/docs/files/export/)).
