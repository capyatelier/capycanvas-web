---
title: "Livelli vettoriali"
description: "Livelli che contengono tracciati invece di pixel, e le penne, le forme e la gomma che funzionano su di essi."
related: ["layers/paths", "layers/types", "drawing/figure", "layers/merging"]
---

Un livello vettoriale contiene tracciati invece di pixel. Puoi rimodellare i suoi tracciati dopo averli disegnati ([Modificare i tracciati](/it/docs/layers/paths/)).

## Creare un livello vettoriale

Esegui una delle seguenti operazioni:

- Seleziona **Nuovo livello vettoriale** in fondo al pannello Livelli.
- Scegli **Livello > Nuovo > Nuovo livello vettoriale**.
- Premi **Ctrl+Alt+Maiusc+N**.
- Digita «line art» nella [ricerca comandi](/it/docs/start/command-search/).

Un badge tracciato contrassegna la miniatura di un livello vettoriale.

![Il pannello Livelli con il livello vettoriale Line art sopra Inchiostro corrente e Carta, con un badge tracciato sulla miniatura.](shot:vector/layers-panel)

## Disegnare tracciati

Puoi disegnare tracciati con **G-Pen**, il cui spessore segue la pressione della penna, e con **Monolinea**, che mantiene uno spessore unico. Ogni tratto diventa un tracciato. Un tratto che inizia all'estremità aperta di un tracciato selezionato continua quel tracciato.

Selezionando un livello vettoriale si passa all'ultima penna che ha disegnato tracciati, all'inizio G-Pen. Selezionando di nuovo un livello di pittura torna il pennello che avevi.

Su un livello vettoriale, **Set di strumenti** attenua i pennelli che non possono disegnare tracciati. Una penna smette di disegnare tracciati quando abbassi la sua **Durezza** o la sua **Intensità**.

![L'avviso sopra la tela per un pennello che non può disegnare tracciati, con Usa G-Pen, Nuovo livello di pittura e Rasterizza livello.](shot:vector/refusal-notice)

Un tratto con un altro pennello non dipinge nulla, e un avviso nomina il livello. Le sue azioni sono **Usa G-Pen**, **Nuovo livello di pittura** (aggiunge un livello di pittura sopra) e **Rasterizza livello**. Quando un'impostazione ferma la penna, **Ripristina** seguito dal nome dell'impostazione, per esempio **Ripristina Durezza**, sostituisce **Usa G-Pen**.

## Forme

Con **Forma**, ogni **Linea**, **Rettangolo**, **Ellisse**, **Poligono**, **Stella** e **Tracciato** diventa un tracciato, selezionato e davanti agli altri. Vedi [Forma](/it/docs/drawing/figure/).

## Cancellare i tracciati

Puoi cancellare i tracciati con la **Gomma**, con **Pittura trasparente**, o con l'estremità gomma di una penna. Mentre la Gomma è attiva su un livello vettoriale, tre modalità compaiono sopra i pennelli gomma in **Set di strumenti**. In Schizzo, intestano la colonna **Strumenti** del cassetto **Gomma**.

![Il pannello Set di strumenti per la Gomma su un livello vettoriale, con Cancella la parte toccata, Cancella tracciati interi e Cancella fino all’intersezione sopra il pennello Gomma.](shot:vector/eraser-modes)

- **Cancella la parte toccata** taglia un tracciato dove la gomma lo tocca e lascia invariato il resto del tracciato. È l'impostazione predefinita.
- **Cancella tracciati interi** rimuove ogni tracciato toccato dalla gomma.
- **Cancella fino all’intersezione** rimuove la parte toccata di un tracciato fino agli incroci più vicini con altri tracciati o con se stesso. Un tracciato che non incrocia nulla viene rimosso per intero.

Cancellare non rimuove l'area riempita.

## Riempi

**Riempi** colora il tracciato chiuso su cui fai clic, e **Riempimento con lazo** aggiunge un tracciato riempito. Vedi [Strumenti di riempimento](/it/docs/drawing/fill/).

## Rasterizza livello

Scegli **Livello > Rasterizza livello** per trasformare un livello vettoriale in un livello di pittura che contiene ciò che mostrano i suoi tracciati.

## Unione

**Unisci sotto** mantiene i tracciati quando un livello vettoriale si unisce a un altro livello vettoriale. Ogni altra unione trasforma i tracciati in pixel dopo un avviso. Vedi [Unire i livelli](/it/docs/layers/merging/).
