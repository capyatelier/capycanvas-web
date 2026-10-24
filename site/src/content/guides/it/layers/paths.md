---
title: "Modificare i tracciati"
description: "Selezionare, spostare, rimodellare e cambiare l'aspetto dei tracciati di un livello vettoriale."
related: ["layers/vector", "drawing/figure", "transform/move-transform", "layers/types"]
---

Puoi modificare i tracciati di un [livello vettoriale](/it/docs/layers/vector/) dopo averli disegnati.

## Selezionare e spostare i tracciati

Seleziona un tracciato con lo strumento **Operazione** ([Spostamento e trasformazione](/it/docs/transform/move-transform/)). Tieni premuto **Maiusc** per aggiungere o rimuovere tracciati. Trascina su una zona vuota della tela per selezionare i tracciati che il rettangolo di selezione racchiude per intero, oppure premi **Ctrl+A** per selezionare ogni tracciato.

![Il pannello Strumento per Operazione con un tracciato selezionato, che elenca i pulsanti Disponi, i pulsanti per riflettere e ruotare e Ridimensiona lo spessore del contorno.](shot:vector/operation-settings)

Un riquadro tratteggiato con maniglie circonda la selezione.

- Trascina un tracciato selezionato per spostarlo. Tieni premuto **Alt** per spostarne una copia.
- Trascina una maniglia per scalare, oppure la maniglia sopra il riquadro per ruotare. **Maiusc** mantiene le proporzioni o ruota a scatti di 15°.
- I tasti freccia spostano di 1 px, e di 10 px con **Maiusc**.
- I pulsanti per riflettere e ruotare nel pannello **Strumento** riflettono o ruotano la selezione attorno al suo centro.
- **Canc** rimuove i tracciati selezionati.

**Ridimensiona lo spessore del contorno** nel pannello **Strumento** è attivo per impostazione predefinita. Disattivalo per scalare i tracciati mantenendo lo spessore dei loro contorni.

## Modifica punti

Puoi spostare, aggiungere ed eliminare i punti di ancoraggio dei tracciati selezionati.

Esegui una delle seguenti operazioni:

- Premi **A**.
- Con **Operazione**, premi **Invio** o fai doppio clic su un tracciato.
- In Pittura e Foto, fai clic con il pulsante destro su **Operazione / Trasforma / Modifica punti** nella barra strumenti Strumenti, o tienilo premuto, e scegli **Modifica punti**.

Dei quadrati segnano i punti di ancoraggio, e quelli selezionati mostrano le loro maniglie. Premi **Esc** per tornare a **Operazione**.

![Modifica punti su un tracciato, con i suoi punti di ancoraggio e le sue maniglie selezionati.](shot:vector/edit-points)

- Fai clic su un punto di ancoraggio per selezionarlo, fai **Maiusc**+clic per aggiungerne o rimuoverne uno, oppure trascina su una zona vuota della tela per selezionare i punti al suo interno.
- Trascina i punti di ancoraggio per spostarli. Trascina una maniglia per orientare la curva, oppure tieni premuto **Alt** per spostarla separatamente dalla maniglia opposta.
- Trascina un segmento per piegarlo. Fai clic su un segmento per aggiungere un punto di ancoraggio.
- Fai doppio clic su un punto di ancoraggio per alternarlo tra angolo e curva.
- **Canc** rimuove i punti di ancoraggio selezionati.

Modificare un punto di ancoraggio trasforma un rettangolo o un'ellisse in un tracciato semplice.

## Comandi dei tracciati

Puoi unire, chiudere, dividere, invertire e combinare i tracciati selezionati con **Modifica > Tracciato**. Il pannello **Strumento** per **Modifica punti** elenca i primi quattro.

- **Unisci tracciati** collega le estremità più vicine di due tracciati aperti, oppure chiude un tracciato aperto.
- **Chiudi tracciato** collega le estremità di ogni tracciato aperto selezionato.
- **Dividi nel punto** taglia i tracciati selezionati nei punti di ancoraggio selezionati.
- **Inverti direzione** fa correre ogni tracciato nel verso opposto.
- **Crea tracciato composto** combina i tracciati selezionati in uno solo, con dei fori dove si sovrappongono. **Rilascia tracciato composto** li separa di nuovo.

Un comando che non può agire dice cosa selezionare, per esempio «Seleziona uno o due tracciati aperti da unire».

## Disponi

Puoi cambiare l'ordine di sovrapposizione dei tracciati selezionati all'interno del loro livello con **Modifica > Disponi**: **Porta in primo piano**, **Porta avanti**, **Porta indietro** e **Porta in fondo**. Il pannello **Strumento** per **Operazione** ha gli stessi pulsanti.

## Impostazioni del tracciato

Con dei tracciati selezionati, **Proprietà** mostra il tracciato selezionato più in primo piano. Un'etichetta termina con «(misto)» quando i tracciati selezionati differiscono, e una modifica si applica a ogni tracciato selezionato.

![Il pannello Proprietà per un tracciato con un riempimento e un contorno.](shot:vector/path-properties)

### Riempimento

Attiva o disattiva il riempimento. Un nuovo riempimento usa il colore di sfondo.

### Colore di riempimento

Imposta il colore del riempimento.

### Sovrapposizioni

Imposta come si riempiono le parti sovrapposte. **Riempite** le riempie, e **Fori** le lascia vuote. Compare quando **Riempimento** è attivo.

### Contorno

Attiva o disattiva il contorno. Un nuovo contorno usa il colore di primo piano.

### Colore del contorno

Imposta il colore del contorno.

### Spessore del contorno

Imposta lo spessore del contorno, da 0,1 a 4096 px.

### Estremità

Imposta la forma delle estremità aperte: **Piatte**, **Arrotondate** o **Quadrate**.

### Angoli

Imposta la forma del contorno negli angoli: **Vivi**, **Arrotondati** o **Smussati**.

### Limite angoli vivi

Imposta quanto può allungarsi un angolo vivo, da 1 a 20. Oltre il limite, l'angolo viene smussato. Compare quando **Angoli** è su **Vivi**.
