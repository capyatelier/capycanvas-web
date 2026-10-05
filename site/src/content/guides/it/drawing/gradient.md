---
title: "Sfumatura"
description: "Dipingere una sfumatura con lo strumento Sfumatura, modificarne i colori e aggiungere livelli Riempimento sfumato."
related: ["drawing/fill", "layers/types", "filters/color", "color/edit-color"]
---

Puoi dipingere una sfumatura su un livello con lo strumento **Sfumatura**, oppure
aggiungere un livello **Riempimento sfumato** che resta modificabile.

## Strumento Sfumatura

Esegui una delle seguenti operazioni:

- Premi **G**.
- In Pittura, seleziona **Sfumatura** nella barra strumenti Strumenti.
- In Foto, seleziona il pulsante di sfumatura e riempimento dopo **Fluidifica** nella barra strumenti Strumenti.
- Cerca **Sfumatura** nella ricerca comandi.

Trascina dal punto iniziale al punto finale. Una linea segue il puntatore, e la
sfumatura viene dipinta quando rilasci.

- La sfumatura copre l'intero livello, con il primo colore prima del punto iniziale e l'ultimo colore oltre il punto finale.
- Premi **Esc** durante il trascinamento per annullare.
- Un trascinamento con un dito sposta invece la tela.
- Una selezione attiva limita la sfumatura, e **Blocca alfa** viene rispettato.
- Nella Maschera veloce o su un livello di selezione, la sfumatura va nella maschera di selezione.
- Ogni sfumatura è un passaggio di annullamento.

Lo strumento dipinge solo il disegno di un livello, e solo sui livelli su cui un
pennello può dipingere ([Strumenti pennello](/it/docs/drawing/brush-tools/)).

## Forma

- **Lineare**: il colore cambia lungo il trascinamento.
- **Radiale**: il punto iniziale è il centro, e il trascinamento imposta il raggio.
- **Reflected**: come Lineare, ma speculare su entrambi i lati del punto iniziale.

Esegui una delle seguenti operazioni:

- Seleziona la forma in **Forma** in cima al pannello **Strumento**, oppure nel pannello **Set di strumenti**.
- Fai clic con il pulsante destro sul pulsante Sfumatura nella barra strumenti Strumenti, o tienilo premuto, e scegli una forma.
- Nella barra Opzioni strumento, scegli la forma da **Variante**, oppure da **Strumento** in Foto.

## Editor dei punti

![Il pannello Strumento per lo strumento Sfumatura con la riga Forma, l'editor dei punti e Opacità.](shot:drawing/gradient-tool-panel)

Puoi modificare i colori della sfumatura nell'editor dei punti sotto **Forma**
nel pannello **Strumento**. Il pulsante della sfumatura nella barra Opzioni
strumento apre l'editor in un riquadro a comparsa. I livelli Riempimento sfumato
e il filtro **Mappa sfumatura** usano lo stesso editor
([Filtri colore](/it/docs/filters/color/)).

Finché non la modifichi, la sfumatura dello strumento va dal colore di primo
piano al colore di sfondo e segue le modifiche a entrambi i colori. Dopo una
modifica, mantiene i suoi punti finché non selezioni **Ripristina sfumatura**. Le
modifiche alla sfumatura dello strumento non sono passaggi di annullamento.

### Interpolation

Imposta come si mescolano i colori tra i punti. **Oklab** (predefinito) mescola
in modo uniforme secondo la percezione dell'occhio, **Luce lineare** mescola come
la luce e **Classico** mescola i valori di colore memorizzati.

### Inverti

Inverte l'ordine dei punti.

### Ripristina sfumatura

Riporta la sfumatura dello strumento ai colori di primo piano e di sfondo, e la
sfumatura di un livello Riempimento sfumato o di una Mappa sfumatura al bianco e
nero.

### Aggiungi punto

Seleziona la striscia lontano dagli indicatori per aggiungere un punto con il
colore in quella posizione. Una sfumatura contiene fino a 32 punti.

### Indicatori dei punti

Seleziona un indicatore per selezionarne il punto, oppure trascinalo per
spostare il punto.

### Posizione

Imposta la posizione del punto selezionato in percentuale. I punti alle estremità
restano allo 0% e al 100%, e un punto non può superare i punti vicini.

### Rimuovi punto

Rimuove il punto selezionato. I punti alle estremità non possono essere rimossi.

### Colore

Apre [Modifica colore](/it/docs/color/edit-color/) per il punto selezionato.

### Usa colore selezionato

Imposta il punto selezionato sul colore corrente.

## Opacità

**Opacità** imposta l'intensità della sfumatura, ed è lo stesso valore
dell'**Opacità** del pennello corrente. In Schizzo, usa il cursore dell'opacità
sul bordo sinistro.

## Livelli Riempimento sfumato

Puoi aggiungere un livello di riempimento la cui sfumatura resta modificabile.

Esegui una delle seguenti operazioni:

- Scegli **Livello > Nuovo > Riempimento sfumato**.
- Scegli **Filtro > Riempimento > Riempimento sfumato**.
- Nel pannello Filtri, seleziona **Riempimento sfumato** sotto **Riempimento**.

Le impostazioni del livello si trovano nel pannello Proprietà, e ogni modifica è
un passaggio di annullamento.

Una selezione attiva diventa la maschera del nuovo livello. Per dipingere sul
livello, aggiungi prima una maschera ([Tipi di livello](/it/docs/layers/types/)).

![Il pannello Proprietà per un livello Riempimento sfumato con Forma, l'editor dei punti, Angolo, Scala e Posizione.](shot:drawing/gradient-fill-properties)

### Forma

**Lineare**, **Radiale** o **Reflected**, come per lo strumento Sfumatura.

### Sfumatura

L'editor dei punti. Un nuovo livello parte dal nero al bianco.

### Angolo

Imposta la direzione della sfumatura, da −180° a 180°.

### Scala

Imposta la lunghezza della sfumatura, dal 10% al 400%.

### Centro X e Centro Y

Sotto **Posizione**, impostano il centro della sfumatura in percentuale della
larghezza e dell'altezza della tela.
