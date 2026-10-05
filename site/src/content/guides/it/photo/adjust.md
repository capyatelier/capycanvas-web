---
title: "Regolare ed esportare"
description: "Fase 3 del tutorial di fotoritocco: regolazioni di tono e colore su livelli filtro, e un'esportazione JPEG."
related: ["filters/how-filters-apply", "filters/tone", "selections/working", "files/export"]
---

Questa fase produce livelli filtro per il tono e il colore sopra la foto, e un
JPEG per il web.

## 1. Aggiungi Curve

Seleziona *Retouch*. I filtri che aggiungi dal menu **Filtro** vanno allora
subito sopra *Retouch* e modificano sia *Retouch* sia la foto
([Come si applicano i filtri](/it/docs/filters/how-filters-apply/)).

Scegli **Filtro > Tono > Curve**. Sopra *Retouch* appare un livello **Curve**, e
le sue impostazioni si aprono nel pannello **Proprietà**. Sulla curva **RGB**,
aggiungi un punto nelle ombre e trascinalo in basso, poi aggiungi un punto nelle
luci e trascinalo in alto ([Filtri di tono](/it/docs/filters/tone/)).

![Il pannello Proprietà con una curva RGB a S in Curve.](shot:photo/adjust-curves)

## 2. Aggiungi Vividezza

Scegli **Filtro > Colore > Vividezza** e imposta **Vividezza** su 25 nel pannello
**Proprietà** ([Filtri colore](/it/docs/filters/color/)). Il livello
**Vividezza** appare sopra **Curve**.

## 3. Seleziona la roccia

1. Premi **M**, o seleziona **Selezione con lazo** nella barra strumenti Strumenti, e traccia un contorno attorno alla roccia.
2. Scegli **Seleziona > Sfuma selezione…**, oppure seleziona **Perfeziona** nella barra della selezione e scegli **Sfuma…** ([Lavorare con le selezioni](/it/docs/selections/working/)).
3. Imposta **Raggio di sfumatura** su 20 px e seleziona **Applica**.

## 4. Schiarisci le ombre nella roccia

Schiarire le ombre dell'intera foto renderebbe grigio lo sfondo nero. L'esempio
le schiarisce solo nella roccia.

Seleziona **Regola** nella barra della selezione e scegli
**Tono > Ombre/Luci**. Imposta **Ombre** al 35% nel pannello **Proprietà**.

![La barra della selezione con il menu Regola aperto sulla categoria Tono, accanto alla selezione attorno alla roccia.](shot:photo/adjust-bar)

La selezione diventa la maschera del nuovo livello **Ombre/Luci**. Cambia solo
la roccia.

## 5. Salva il disegno

Scegli **File > Salva**, o premi **Ctrl+S**. Il primo salvataggio di una foto
aperta chiede una cartella e un nome, come fa **Salva con nome…**. Il file
`.capy` conserva la foto originale, i livelli, le maschere e i livelli filtro
([Aprire e salvare](/it/docs/files/open-save/)).

## 6. Esporta un JPEG

1. Scegli **File > Esporta…**, o premi **Ctrl+Maiusc+E**.
2. Lascia **Destinazione** impostata su **Web / Condivisione** e imposta **Formato** su **Immagine JPEG**.
3. Imposta **Dimensioni in pixel** su **Adatta entro i limiti** e lascia **Larghezza massima (px)** e **Altezza massima (px)** a 2048.
4. Seleziona **Scegli file…** e scegli una cartella e un nome.

![La finestra di dialogo Esporta immagine con Web / Condivisione, Immagine JPEG, Qualità 90 e Adatta entro i limiti.](shot:photo/export-jpeg)

L'esportazione non modifica il disegno
([Esportare immagini](/it/docs/files/export/)).
