---
title: "Lavorare con i livelli"
description: "Aggiungere, disporre ed eliminare livelli nel pannello Livelli."
related: ["layers/panel", "layers/types", "layers/merging", "files/open-save"]
---

## Creare livelli

Esegui una delle seguenti operazioni:

- Scegli **Livello > Nuovo** e poi **Nuovo livello**, **Nuovo livello ritagliato** o **Nuovo gruppo**.
- Seleziona **Nuovo livello** o **Nuovo gruppo** in fondo al pannello Livelli.

Il nuovo livello va subito sopra il livello attivo e i livelli ritagliati o
collegati a esso. Se è attivo un gruppo, il nuovo livello va in cima al gruppo.
Non puoi aggiungere un livello a un gruppo bloccato.

**Nuovo livello ritagliato** richiede un livello di pittura attivo, o un gruppo
attivo non impostato su Attraversa.

## Selezionare i livelli

Puoi selezionare più righe per raggrupparle, duplicarle, eliminarle o spostarle
insieme.

- Seleziona una riga per selezionare solo quel livello e renderlo il livello attivo.
- Fai **Maiusc**+clic su una riga per selezionare le righe comprese tra questa e la riga selezionata prima.
- Fai **Ctrl**+clic su una riga per aggiungerla alla selezione o toglierla.
- Seleziona il pulsante della riga, a sinistra della miniatura, per aggiungere o togliere la riga senza cambiare il livello attivo.
- Scegli **Livello > Selezione righe dei livelli > Seleziona tutte le righe dei livelli** o **Deseleziona righe dei livelli**.

Selezionare una riga già selezionata mantiene selezionate le altre righe. Le
modifiche alla selezione delle righe non sono passaggi di annullamento.

## Nascondere i livelli

Esegui una delle seguenti operazioni:

- Scegli **Livello > Visibilità > Mostra livello**.
- Seleziona l'occhio sulla riga.

**Livello > Visibilità** contiene anche **Mostra livello e gruppi superiori**,
**Isola livelli selezionati** e **Mostra tutti i livelli**.

## Rinominare i livelli

Esegui una delle seguenti operazioni:

- Scegli **Livello > Organizza > Rinomina livello…** (**Rinomina gruppo…** per un gruppo).
- Fai doppio clic sul nome.

![Una riga di livello con il nome in un campo di testo.](shot:layers/working-rename)

Premi **Invio** per confermare il nome, o **Esc** per annullare. Non puoi
rinominare un livello bloccato.

## Riordinare i livelli

Trascina una riga in alto o in basso nell'elenco. Con una penna o un dito, prima
tieni premuta la riga, oppure trascina la maniglia all'estremità destra della
riga.

![Una riga trascinata, con una linea tra due righe nel punto in cui verrà rilasciata.](shot:layers/working-drag)

Una linea sopra o sotto una riga indica dove finirà il livello. Per spostare il
livello in un gruppo, rilascialo al centro della riga del gruppo (attorno alla
riga appare una cornice). Premi **Esc** per annullare il trascinamento.

Tutte le righe selezionate si spostano insieme, e i livelli ritagliati e i
filtri collegati si spostano con il loro livello. **Alza livello** e
**Abbassa livello** nella [ricerca comandi](/it/docs/start/command-search/)
spostano le righe selezionate di una posizione.

## Raggruppare e separare

Per raggruppare dei livelli, seleziona le loro righe e scegli
**Livello > Organizza > Raggruppa livelli selezionati**, oppure seleziona
**Nuovo gruppo** in fondo al pannello Livelli. Le righe devono trovarsi nello
stesso gruppo, e una base di ritaglio va raggruppata insieme ai suoi livelli
ritagliati.

Per separare un gruppo, scegli **Livello > Organizza > Separa gruppo**. Un
gruppo nascosto lascia nascosti i suoi livelli. **Separa gruppo** non è
disponibile se il gruppo ha una maschera, un'opacità sotto il 100%, un metodo di
fusione diverso da Normale o Attraversa, un ritaglio o filtri collegati, oppure
se senza il gruppo i suoi livelli apparirebbero diversi.

## Duplicare i livelli

Scegli **Livello > Organizza > Duplica**, oppure **Duplica livelli selezionati**
con più righe selezionate.

Le copie vanno subito sopra gli originali, con i loro livelli ritagliati e i
filtri collegati, e si chiamano «*nome* copia». Non puoi duplicare un livello in
un gruppo bloccato.

## Eliminare i livelli

Esegui una delle seguenti operazioni:

- Scegli **Livello > Elimina livello**, oppure **Elimina livelli selezionati** con più righe selezionate.
- Seleziona **Elimina livelli selezionati** in fondo al pannello Livelli.
- Con una penna o un dito, scorri la riga verso sinistra e seleziona **Elimina**.

Su un gruppo compresso, la voce di menu diventa **Elimina gruppo e contenuto**.
Eliminare un gruppo espanso mantiene i suoi livelli, come fa **Separa gruppo**.

I livelli ritagliati e i filtri collegati restano quando elimini il loro livello.
Non puoi eliminare un livello bloccato. Il tasto **Canc** cancella i pixel
selezionati, non i livelli.

## Copia selezione su nuovo livello

Puoi copiare o spostare i pixel selezionati di un livello di pittura su un nuovo
livello, nella stessa posizione.

Esegui una delle seguenti operazioni:

- Scegli **Livello > Nuovo > Copia selezione su nuovo livello** (**Ctrl+J**) o **Taglia selezione su nuovo livello** (**Ctrl+Maiusc+J**).
- Scegli gli stessi comandi dal menu **Seleziona**.
- Sceglili da **Copia su livello** nella [barra della selezione](/it/docs/selections/working/) sulla tela.

Il nuovo livello va sopra il livello di origine, si chiama «*nome* copia» e ha
la stessa opacità e lo stesso metodo di fusione. La selezione viene annullata, e
**Seleziona > Riseleziona** la ripristina.

Senza una selezione, **Copia selezione su nuovo livello** duplica i livelli
selezionati. **Taglia selezione su nuovo livello** richiede una selezione e non è
disponibile mentre **Blocca alfa** è attivo.

## Importare immagini

Esegui una delle seguenti operazioni:

- Scegli **File > Importa immagine come livello…** o premi **Ctrl+Maiusc+O**.
- Seleziona **Importa immagine come livello…** in fondo al pannello Livelli.
- Trascina file immagine sulla tela o su una riga del pannello Livelli.

Ogni file diventa un [livello fotografico](/it/docs/layers/types/) sopra il
livello attivo, oppure sopra, sotto o dentro la riga su cui lo rilasci.
L'immagine viene centrata e ridotta per stare nella tela, con le
[maniglie di posizionamento](/it/docs/transform/move-transform/).
