---
title: "Dimensioni, opacità e flusso"
description: "Dimensioni pennello, Opacità e Flusso, e i pannelli, le barre e i tasti con cui modificare le impostazioni del pennello."
related: ["brushes/tip-texture", "brushes/reset", "drawing/brush-tools", "input/keyboard"]
---

Ogni modifica a un'impostazione del pennello viene salvata con il predefinito del
pennello ([Salvare e ripristinare i pennelli](/it/docs/brushes/reset/)).

## Pannello Strumento

Puoi modificare tutte le impostazioni del pennello corrente nel pannello
**Strumento**.

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Strumento**.
- In Pittura, seleziona la scheda **Strumento** nella colonna sinistra.
- In Foto, seleziona **Strumento** nella striscia di icone a destra.
- Seleziona di nuovo il pulsante dello strumento attivo. **Strumento** è l'ultima colonna del cassetto.

Ogni impostazione ha un valore, i pulsanti **−** e **+** e un cursore. Seleziona
il valore per digitare un numero. Compaiono solo le impostazioni che il pennello
usa, raggruppate sotto intestazioni come **Punta** e **Trama**
([Punta e trama](/it/docs/brushes/tip-texture/)).

![Il pannello Strumento per Matita con Dimensioni pennello, Opacità e Flusso sopra i gruppi Punta e Trama.](shot:brushes/tool-panel)

### Dimensioni pennello

Imposta il diametro del pennello, da 0,5 a 2048 px.

### Opacità

Imposta l'intensità di ogni impronta del tratto. Nessun pennello integrato varia
l'Opacità con la pressione della penna.

### Flusso

Imposta quanto colore deposita ogni impronta, misurato a piena pressione sui
pennelli in cui la pressione varia il flusso. I pennelli bagnati e di sfumatura
usano il Flusso anche per stabilire quanto ogni impronta si mescola con il colore
già presente sul livello.

I pennelli di Fluidifica non hanno Flusso.

## Accumulo all'interno di un tratto

Dove un tratto si sovrappone a se stesso, questi pennelli restano all'intensità
della loro impronta più forte: i predefiniti del gruppo **Penna**,
**Pennarello**, **Matita per ombreggiare**, **Pennello**, **Pennello a setole**,
**Pennello piatto con trama**, **Sfregazzo asciutto**, **Pastello a blocco**,
**Velatura trasparente**, **Lavatura ad acquerello** e **Acquerello bagnato**.
Gli altri pennelli si accumulano dove le loro impronte si sovrappongono.

L'impostazione **Fusione** del disegno controlla come si accumulano le impronte
([Spazio colore, profondità in bit e fusione](/it/docs/color-management/color-spaces/)).

## Pannello Dimensioni pennello

Puoi scegliere una dimensione da una griglia nel pannello **Dimensioni
pennello**.

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Dimensioni pennello**.
- In Pittura, seleziona la scheda **Dimensioni pennello** accanto a **Strumento** nella colonna sinistra.
- In Foto, seleziona **Dimensioni pennello** nella striscia di icone a destra.

Ogni pulsante mostra un punto e una dimensione in pixel. Il pulsante della
dimensione corrente appare premuto.

Con **Dipingi selezione** attivo, il pannello imposta la dimensione del pennello
di selezione. Puoi assegnare un tasto a ogni dimensione sotto **Dimensioni
pennelli** nella pagina Scorciatoie da tastiera.

![Il pannello Dimensioni pennello con la sua griglia di pulsanti delle dimensioni.](shot:brushes/brush-size-panel)

## Barra Opzioni strumento

Puoi modificare le impostazioni dello strumento corrente su un'unica riga con la
barra **Opzioni strumento**. In Foto si trova alla fine della barra strumenti
superiore. Nelle altre aree di lavoro, aggiungila a una barra strumenti con
**Inserisci strumenti…**
([Barre strumenti e barra del titolo](/it/docs/customize/toolbars/)).

Vengono prima i menu **Strumento** e **Variante**, quando lo strumento offre
delle scelte, poi **Mescolanza dei colori** per i pennelli che mescolano il
colore, poi le impostazioni numeriche. Le impostazioni che non entrano si trovano
sotto **Altre opzioni strumento**.

- Fai doppio clic (o doppio tocco) sull'etichetta o sull'icona di un'impostazione per riportarla al valore integrato del pennello.
- Scorri sopra un valore per cambiarlo a passi. Con un dito, trascina in su o in giù sul valore.
- Fai clic con il pulsante destro sulla barra o tienila premuta per scegliere **Orizzontale: testo**, **Orizzontale: icone** o **Mostra cursori**.

![La barra Opzioni strumento in Foto per il Pennello, con Variante e le impostazioni numeriche.](shot:brushes/tool-options-bar)

## Cursori in Schizzo

Puoi impostare dimensione e opacità del pennello con i due cursori della barra
sul bordo sinistro in Schizzo.

- Tocca o fai clic sulla guida del cursore per impostare un valore. Un'anteprima mostra la punta alla sua dimensione reale in pixel, oppure all'opacità scelta.
- Trascina lungo la guida per cambiare il valore. L'anteprima si chiude quando sollevi.
- Tocca il cappuccio all'estremità del cursore per vedere l'anteprima senza cambiare il valore.

Seleziona **+** (**Aggiungi questo valore ai segnalibri**) nell'anteprima per
segnare il valore sulla guida, oppure **−** (**Rimuovi segnalibro**) per
rimuovere il segno. Un tocco vicino a un segno imposta esattamente quel valore.
Ogni predefinito di pennello conserva i propri segnalibri.

Un cursore appare attenuato quando lo strumento corrente non ha dimensione od
opacità. Puoi aggiungere **Cursore dimensioni pennello** e **Cursore opacità
pennello** a qualsiasi barra strumenti con **Inserisci strumenti…**.

![La barra sul bordo sinistro in Schizzo con l'anteprima della dimensione aperta accanto a Cursore dimensioni pennello.](shot:brushes/sketch-size-slider)

## Tasti

| Tasto | Azione |
| --- | --- |
| **[** | **Riduci dimensioni pennello** di 1 px. Tieni premuto per ripetere. |
| **]** | **Aumenta dimensioni pennello** di 1 px. Tieni premuto per ripetere. |
| Nessuno | **Riduci opacità pennello** e **Aumenta opacità pennello** dell'1%. |

Puoi assegnare tasti a queste azioni sotto **Pittura** nella pagina
[Scorciatoie da tastiera](/it/docs/input/keyboard/).

## Digitare un valore

Cerca il nome di un'impostazione nella ricerca comandi, per esempio **Flusso…**,
e digita il nuovo valore ([Ricerca comandi](/it/docs/start/command-search/)).
