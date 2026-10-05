---
title: "Tavolozze"
description: "Salvare i colori nelle tavolozze e dipingere con i colori salvati e recenti dal pannello Tavolozze."
related: ["color/color-panel", "color/edit-color", "color/eyedropper"]
---

Puoi salvare i colori nelle tavolozze e dipingere con essi dal pannello
**Tavolozze**. Le tavolozze e i colori recenti sono gli stessi in tutte le aree di
lavoro.

![Il pannello Tavolozze con i colori recenti in alto, i campioni della tavolozza attiva, e il nome della tavolozza e del colore in basso.](shot:color/palettes-panel)

## Aprire il pannello Tavolozze

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Tavolozze**.
- Scegli **Pannello Tavolozze** nella ricerca comandi.
- In Pittura, seleziona la scheda **Tavolozze** accanto a **Colore**.
- Seleziona **Colore pennello** alla fine della barra strumenti Strumenti, oppure all'estremità destra della barra del titolo in Schizzo. Nel cassetto, Tavolozze si trova sotto il pannello Colore.
- Su Windows, Linux e Android, fai clic con il pulsante destro sul campione di primo piano o di sfondo nel pannello Colore, o tienilo premuto, e scegli **Tavolozze…**.

## Colori recenti

La riga superiore mostra fino a 64 colori usati nel disegno, dal più recente.
Seleziona un colore recente per dipingere con esso. Seleziona **Espandi
cronologia colori** (la freccia alla fine della riga) per mostrare fino a
quattro righe.

Un colore viene aggiunto quando un tratto, un riempimento, una sfumatura o una
forma lo usa. Prelevare un colore, cancellare, dipingere una maschera e usare
Sfuma o Fluidifica non aggiungono nulla. Annulla non rimuove un colore recente.

## Dipingere con un colore salvato

Seleziona un campione per dipingere con il suo colore, oppure per impostare il
colore della maschera mentre modifichi una maschera. Il campione che corrisponde
al colore corrente è contornato.

## Aggiungere un colore

Seleziona **+** dopo l'ultimo campione per salvare nella tavolozza il colore di
pittura corrente. Il campione conserva il colore esatto, compresi spazio colore,
alfa e intensità HDR. **+** non è disponibile mentre è selezionato **Pittura
trasparente**.

## Dare un nome ai colori

Il nome del colore corrente si trova in basso a destra nel pannello, con il suo
codice esadecimale come anteprima sRGB. Un colore con intensità HDR mostra anche
l'intensità, per esempio «+1.0 EV». Un colore non salvato mostra un nome
suggerito, come «Verde acqua» o «Terra d'ombra».

Seleziona il nome per digitarne un altro, poi premi **Invio** per confermare o
**Esc** per annullare. Un colore non salvato riceve il nome quando lo salvi con
**+**. Per un campione salvato, il nuovo nome sostituisce il precedente.

I nomi hanno da 1 a 64 caratteri e sono unici all'interno di una tavolozza.

## Disporre e rimuovere i colori

Trascina un campione per spostarlo. Rilascia fuori dalla griglia o premi **Esc**
per annullare lo spostamento.

Fai clic con il pulsante destro su un campione o tienilo premuto (oppure premi
**Maiusc+F10**) per questi comandi:

- **Rename Color…**
- **Remove Color**
- **Annulla riordino colori** e **Ripeti riordino colori**

Quando lo stato attivo è sul pannello, **Ctrl+Z** e **Ctrl+Maiusc+Z** (o
**Ctrl+Y**) annullano e ripetono i riordini. Aggiungere o rimuovere un campione
cancella la cronologia dei riordini della tavolozza.

## Scegliere una tavolozza

Seleziona il nome della tavolozza in basso a sinistra nel pannello per aprire
l'elenco delle tavolozze. Digita in **Cerca una tavolozza** per filtrare l'elenco,
e seleziona una tavolozza per renderla attiva.

![L'elenco delle tavolozze con il campo di ricerca, il pulsante + e il nome e i colori di ogni tavolozza.](shot:color/palettes-chooser)

## Nuove tavolozze

Seleziona **+** nell'elenco delle tavolozze e scegli **Nuova tavolozza…**. Una
tavolozza lasciata senza nome si chiama «Nuova tavolozza».

La libreria contiene fino a 64 tavolozze e 4.096 colori in tutto.

## Rinominare e rimuovere le tavolozze

Fai clic con il pulsante destro su una tavolozza nell'elenco, o tienila premuta,
e scegli **Rinomina tavolozza…** o **Rimuovi tavolozza…**. Non puoi rimuovere
l'ultima tavolozza.

## Importare ed esportare le tavolozze

Per importare un file di tavolozza, seleziona **+** nell'elenco delle tavolozze e
scegli **Importa tavolozza…**. Capy Canvas legge file `.capycolor`, `.aco`,
`.cls`, `.swatches`, `.ase`, `.afpalette`, `.gpl`, `.kpl` e `.json` fino a 1 MB.
Il file diventa una nuova tavolozza con il nome memorizzato nel file, oppure con
il nome del file.

Per esportare una tavolozza, fai clic con il pulsante destro su di essa
nell'elenco, o tienila premuta, e scegli **Esporta tavolozza**, poi un formato:

- **Capycolor (.capycolor)** conserva i colori esatti, compresi spazio colore, alfa e intensità HDR.
- **Clip Studio Paint, Photoshop (.aco)**, **Procreate (.swatches)**, **Affinity, Adobe (.ase)** e **Krita, GIMP (.gpl)** salvano colori sRGB opachi. I colori fuori da sRGB vengono tagliati. Un file Procreate conserva i primi 30 colori.

Il pannello indica quanti colori sono stati tagliati o resi opachi.

![Il menu della tavolozza con i formati di Esporta tavolozza.](shot:color/palettes-menu)

## Tavolozze iniziali

Capy Canvas include Studio dell'oceano, Arcade a pixel, Fantasia oscura, Pop art,
Pastelli caramella, Stampa risografica, Synthwave, Stampa anni Settanta,
Xilografia e Inchiostro. Puoi modificare le tavolozze iniziali come qualsiasi
altra tavolozza. Una tavolozza iniziale rimossa non ritorna.
