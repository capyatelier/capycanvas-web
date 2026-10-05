---
title: "Salvare e ripristinare i pennelli"
description: "Come vengono conservate le modifiche ai pennelli, e riportare i pennelli alle impostazioni integrate."
related: ["brushes/basics", "drawing/brush-tools", "customize/workspaces"]
---

Puoi modificare qualsiasi impostazione di un pennello integrato e riportarla in
seguito al valore originale.

## Modifiche ai pennelli

Ogni modifica a un'impostazione del pennello viene salvata subito con il suo
predefinito.

- Le modifiche sono condivise da tutte le aree di lavoro, comprese quelle che crei.
- Le modifiche restano dopo il riavvio di Capy Canvas.
- Le impostazioni dei pennelli non vengono salvate nei file `.capy`.
- Una modifica a un'impostazione del pennello non è un passaggio di annullamento, e Cronologia disposizione non elenca le modifiche ai pennelli.
- Un pennello non conserva un colore. Dipinge con il colore corrente del [pannello Colore](/it/docs/color/color-panel/).

## Ripristinare un'impostazione

Puoi riportare un'impostazione al valore integrato del pennello. Fai doppio clic
(o doppio tocco) sull'etichetta o sull'icona dell'impostazione nella barra Opzioni
strumento ([Dimensioni, opacità e flusso](/it/docs/brushes/basics/)).

Il pannello **Strumento** non ha un ripristino. Per ripristinare **Mescolanza dei
colori**, seleziona **Mescolanza Oklab**, la scelta integrata di tutti i pennelli
che mescolano.

## Ripristina tutti i pennelli…

Puoi riportare tutti i pennelli alle impostazioni integrate. Scegli **Finestra >
Aree di lavoro > Ripristina tutti i pennelli…**, poi seleziona **Ripristina
pennelli** nella finestra di dialogo.

![La finestra di dialogo Ripristinare tutti i pennelli? con il pulsante Ripristina pennelli.](shot:brushes/reset-all-dialog)

Vengono ripristinati tutti i predefiniti, anche quelli che non hai usato. I
colori, lo strumento selezionato, la disposizione e il disegno non cambiano, e i
segnalibri sui cursori di Schizzo restano. Il ripristino di tutti i pennelli non
può essere annullato.

## Creare e importare pennelli

Non puoi creare, duplicare, rinominare, eliminare, importare o esportare
pennelli. I predefiniti integrati sono gli unici pennelli, e non esiste un
formato di file per i pennelli.
