---
title: "Pannello Colore"
description: "Scegliere il colore di pittura con la ruota e i campioni del pannello Colore."
related: ["color/edit-color", "color/palettes", "color/eyedropper", "color-management/hdr"]
---

Puoi scegliere il colore di pittura nel pannello **Colore**. Tutte le aree di
lavoro usano lo stesso colore di pittura.

![Il pannello Colore con la ruota circolare, l'indicatore in alto a sinistra e i campioni sotto la ruota.](shot:color/panel "1 Indicatore · 2 Pulsanti della forma · 3 Modifica colore · 4 Primo piano e sfondo · 5 Scambia · 6 Pittura trasparente · 7 Bianco e nero")

## Aprire il pannello Colore

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Colore**.
- Scegli **Pannello Colore** nella ricerca comandi.
- In Pittura, seleziona la scheda **Colore** nella colonna sinistra.
- Seleziona **Colore pennello** alla fine della barra strumenti Strumenti, oppure all'estremità destra della barra del titolo in Schizzo. Si apre un cassetto con i pannelli Colore e Tavolozze.

## Ruota dei colori

Trascina l'anello esterno per impostare la tinta, e il campo al suo interno per
impostare saturazione e luminosità.

Nel cerchio, trascina oltre il bordo del campo vicino all'angolo in alto a
sinistra, in alto a destra o in basso per agganciarti al bianco, al colore pieno
o al nero. Un grigio mantiene l'ultima tinta impostata sull'anello.

## Forme del campo

Seleziona uno dei due piccoli pulsanti fuori dall'anello, in alto a destra, per
cambiare la forma del campo. I loro suggerimenti riportano **Usa cerchio Okhsv**,
**Usa quadrato HSV** e **Usa triangolo HLS**.

| Forma | Campo | Indicatore |
| --- | --- | --- |
| Cerchio (predefinito) | Okhsv. Bianco in alto a sinistra, colore pieno in alto a destra, nero in basso. | OKLCH |
| Quadrato | HSV. La saturazione aumenta verso destra e la luminosità verso l'alto. | HSB |
| Triangolo | HLS. Gli angoli sono il bianco, il nero e la tinta pura. | HLS |

## Indicatore

I numeri in alto a sinistra del pannello mostrano il colore nel modello della
forma del campo. Seleziona l'indicatore per passare da quel modello a RGB da 0 a
255 e viceversa.

## Colori di primo piano e di sfondo

Seleziona **Colore di primo piano** (il campione grande in basso a sinistra) o
**Colore di sfondo** (il campione dietro di esso) per dipingere con quel colore.
La ricerca comandi usa gli stessi nomi. Il campione selezionato ha un bordo più
spesso.

I pennelli a setole striano ogni tratto con il colore con cui non stai
dipingendo.

> **Nota:** nella [Maschera veloce](/it/docs/selections/quick-mask/) e su un [livello di selezione](/it/docs/selections/selection-layers/), i campioni contengono una coppia separata, all'inizio bianco e nero, e la pittura usa il valore di grigio del colore. I colori del disegno tornano quando esci. Su una maschera di livello il colore non conta: i pennelli rivelano e la Gomma nasconde.

## Pittura trasparente

Puoi cancellare con qualsiasi pennello o forma dello strumento Forma dipingendo con colore
trasparente. Esegui una delle seguenti operazioni:

- Seleziona **Pittura trasparente** (il campione a scacchi in basso a destra).
- Scegli **Pittura trasparente** nella ricerca comandi.
- Assegna un tasto a **Dipingi con trasparenza** nella pagina [Scorciatoie da tastiera](/it/docs/input/keyboard/), poi premilo per attivare o disattivare la pittura trasparente. **Dipingi con trasparenza finché premuto** usa la pittura trasparente solo mentre tieni premuto il tasto.

Trascinare sulla ruota riporta alla pittura con il colore.

## Scambiare i colori

Puoi scambiare i colori di primo piano e di sfondo. Esegui una delle seguenti
operazioni:

- Seleziona **Scambia primo piano e sfondo** (le due frecce a destra del campione di sfondo).
- Scegli **Scambia primo piano e sfondo** nella ricerca comandi.
- Premi **X** nelle mappe dei tasti Stile Photoshop, Stile Krita, Stile Clip Studio Paint e Stile GIMP, oppure **Maiusc+X** in Stile Affinity.

Resta selezionato lo stesso campione. La mappa dei tasti CapyCanvas non ha un
tasto per **Scambia colori**.

## Bianco e nero

Seleziona **Dipingi con nero** o **Dipingi con bianco** (i due piccoli cerchi
accanto al campione trasparente), oppure scegli **Nero** o **Bianco** nella
ricerca comandi.

Il nero o il bianco sostituisce il colore del campione di primo piano o di sfondo
selezionato. Se è selezionato **Pittura trasparente**, il nero o il bianco
diventa invece un colore di pittura temporaneo. La ruota modifica allora il colore
temporaneo, e i colori di primo piano e di sfondo non cambiano.

## Modifica colore

Seleziona **Modifica colore…** (la matita in alto a destra del pannello), oppure
fai doppio clic sul campione di primo piano o di sfondo, per impostare il colore
in base ai suoi valori in [Modifica colore](/it/docs/color/edit-color/).
**Modifica colore…** non è disponibile mentre è selezionato **Pittura
trasparente**.

## Menu dei campioni

Su Windows, Linux e Android, fai clic con il pulsante destro sul campione di primo
piano o di sfondo, o tienilo premuto, per **Modifica colore…**, **Tavolozze…** e
**Scambia primo piano e sfondo**.

## Intensità HDR

In un [disegno HDR](/it/docs/color-management/hdr/), un arco sotto la ruota
imposta l'intensità del colore in stop (EV) rispetto al bianco SDR, da −2 a
+6 EV. Il valore compare sotto i campioni, per esempio «+2.00 EV».

![Il pannello Colore in un disegno HDR con l'arco dell'intensità sotto la ruota.](shot:color/panel-hdr)

- Trascina lungo l'arco per impostare l'intensità.
- Fai doppio clic sull'arco per tornare a 0 EV.
- Con lo stato attivo sull'arco, premi i tasti freccia per cambiare di 0,1 EV, oppure **Inizio** per 0 EV.

La ruota imposta il colore di base, e l'intensità lo moltiplica in luce lineare.
I campioni e l'arco mostrano l'anteprima dei colori attraverso la versione SDR del
disegno. L'arco non è disponibile mentre è selezionato **Pittura trasparente**.
