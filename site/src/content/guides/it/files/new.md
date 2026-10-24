---
title: "Nuovi disegni"
description: "Dimensioni del foglio, risoluzione, carta, impostazioni colore e predefiniti nella finestra Nuovo disegno."
related: ["layers/paper", "color-management/color-spaces", "layers/types", "files/open-save"]
---

Scegli **File > Nuovo…**, premi **Ctrl+N** dove disponibile, oppure seleziona **Nuovo…** nella barra Comandi. Il nuovo disegno si apre in una scheda dedicata.

![La finestra Nuovo disegno con dimensioni A4, risoluzione di 300 ppi, impostazioni di colore e Carta e Crea.](shot:files/new-dialog)

## Predefiniti

Scegli un predefinito per categoria, cercalo per nome oppure selezionane uno usato di recente. Un predefinito compila dimensioni, risoluzione, impostazioni colore e impostazioni della Carta.

![Il browser dei predefiniti di Nuovo disegno con le categorie Schizzo, Acquerello, Pastello, Tela, Tecnica mista, Fumetti, Stampe e Digitale.](shot:files/new-presets)

Salva le impostazioni correnti come predefinito con nome per riutilizzarle. Apri il menu di un predefinito salvato per rinominarlo o eliminarlo. I predefiniti integrati non possono essere rinominati o eliminati.

## Foglio

L'anteprima mostra proporzioni e orientamento del foglio. Inserisci un nome per il disegno, poi imposta **L** e **A**, e scegli px, in, cm o mm come unità. Usa il controllo di collegamento per mantenere le proporzioni correnti e quello di orientamento per scambiare larghezza e altezza.

**Risoluzione** imposta i pixel per pollice usati per le dimensioni fisiche e la scala della [trama della Carta](/it/docs/layers/paper/). Cambiare solo la risoluzione cambia i metadati delle dimensioni di stampa senza ricampionare il disegno.

La finestra mostra le dimensioni risultanti in pixel e la capacità stimata. Non puoi creare impostazioni oltre il limite di disegno corrente del dispositivo; il limite dipende dalle dimensioni, dalla profondità in bit e dalle risorse grafiche disponibili.

## Carta

![Il cassetto Carta in Nuovo disegno con Nessuna carta, i riquadri delle carte e Visibilità della texture.](shot:files/new-paper)

Seleziona il riquadro della trama sotto **Carta** per scegliere una trama della Carta integrata o importata per il nuovo disegno. **Visibilità della texture** in fondo al cassetto imposta lo stesso valore delle [Proprietà](/it/docs/layers/paper/) del livello Carta, e il riquadro lo mostra sotto il nome della trama. **Importa…** è l'ultimo riquadro: aggiunge un'immagine alla libreria delle carte e la seleziona.

Scegli **Nessuna carta** per creare il disegno senza un livello Carta. **Visibilità della texture** non è allora disponibile.

![Le opzioni Colore e Trasparente della Carta in Nuovo disegno.](shot:files/new-paper-color)

**Colore** imposta il colore della Carta. **Trasparente** mantiene il livello Carta ma lo nasconde all'inizio. È diverso da **Nessuna carta**, che non crea un livello Carta.

## Impostazioni colore

Scegli **Spazio colore**, **Profondità in bit** e **Fusione** del disegno. Le profondità in bit a virgola mobile usano la fusione **Luce lineare**. Vedi [Spazio colore, profondità in bit e fusione](/it/docs/color-management/color-spaces/).

## Creare il disegno

Seleziona **Crea**. Il disegno inizia con un livello di pittura vuoto, **Inchiostro corrente**, sopra la Carta scelta, se inclusa.

La finestra mantiene le ultime scelte usate per creare un disegno. Selezionare un predefinito le sostituisce con i valori di quel predefinito.
