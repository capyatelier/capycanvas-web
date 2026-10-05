---
title: "Righelli e guide"
description: "Guide che vincolano i tratti di pennello a linee rette, e raddrizzare l'immagine lungo una guida."
related: ["drawing/figure", "transform/crop", "transform/move-transform", "drawing/brush-tools"]
---

Puoi posizionare sulla tela delle guide che vincolano i tratti di pennello a
linee rette. Le guide vengono salvate nel file `.capy` e non compaiono nelle
immagini esportate.

## Strumento Righello

Esegui una delle seguenti operazioni:

- Premi **Maiusc+U**.
- In Pittura, seleziona **Righello** nella barra strumenti Strumenti. Fai clic con il pulsante destro sul pulsante o tienilo premuto per scegliere **Retto**, **Parallelo** o **Radiale**.
- Cerca **Righello** nella ricerca comandi.

Schizzo e Foto non hanno un pulsante Righello. Puoi aggiungerne uno con
**Inserisci strumenti…**
([Barre strumenti e barra del titolo](/it/docs/customize/toolbars/)).

Trascina su una parte vuota della tela per aggiungere una guida, oppure fai clic
per aggiungere una guida di tipo Radiale. Tieni premuto **Maiusc** durante il
trascinamento per ruotare una guida di tipo Retto o Parallelo a passi di 45°.

Trascina una maniglia della guida per cambiarne angolo e lunghezza, oppure
trascina la sua linea per spostare l'intera guida.

- Premi **Esc** per annullare un trascinamento.
- Aggiungere, spostare ed eliminare una guida sono passaggi di annullamento.
- Mentre le guide sono nascoste, un trascinamento aggiunge una nuova guida e mostra di nuovo tutte le guide.
- Ritaglio, Dimensioni immagine, Dimensioni tela, la rotazione e la riflessione spostano le guide insieme all'immagine.

## Tipi di guida

![Guide di tipo Retto, Parallelo e Radiale sulla tela, con linee tratteggiate, maniglie quadrate e il mirino radiale.](shot:drawing/ruler-guides)

Le guide di tipo Retto e Parallelo sono linee tratteggiate con un quadrato su
ogni maniglia. Una guida di tipo Radiale è un quadrato con un mirino tratteggiato.
Una guida selezionata ha maniglie più grandi.

Solo i tratti degli strumenti pennello seguono le guide.

### Retto

Un tratto che inizia entro 12 pixel dello schermo dalla linea della guida segue
quella linea. La linea si estende su tutta la tela.

### Parallelo

Ogni tratto corre parallelo alla guida a partire dal punto in cui premi.

### Radiale

I tratti puntano verso il centro della guida. Ciascuno segue la linea che va dal
centro al punto in cui premi.

## Quale guida segue un tratto

Una guida di tipo Retto vicina prevale sulle guide di tipo Parallelo e Radiale.
Tra più guide di tipo Parallelo e Radiale, prevale quella la cui prima maniglia o
il cui centro è più vicino all'inizio del tratto.

## Mostrare le guide e l'aggancio

Puoi nascondere le guide o disattivare l'aggancio.

Esegui una delle seguenti operazioni:

- Scegli **Visualizza > Mostra righelli** o **Visualizza > Aggancia ai righelli**.
- Con lo strumento Righello attivo, o con una guida selezionata con Operazione, seleziona **Mostra righelli** o **Aggancia ai righelli** nel pannello **Strumento**.
- Seleziona **Guide** o **Aggancia** nella barra della guida.

Entrambe le opzioni sono attive per impostazione predefinita. **Aggancia ai
righelli** non è disponibile mentre le guide sono nascoste.

## Eliminare una guida

Seleziona la guida, poi esegui una delle seguenti operazioni:

- Premi **Canc** o **Backspace**.
- Seleziona **Elimina righello** nel pannello **Strumento**.
- Seleziona **Elimina** nella barra della guida.

**Canc** e **Backspace** eliminano una guida solo quando lo strumento attivo è
Righello, Forma, Operazione, Trasforma o Ritaglia. Con gli altri strumenti, questi
tasti eseguono **Svuota pixel selezionati**.

## Barra della guida

Quando selezioni una guida con lo strumento Righello o Operazione, sotto le sue
maniglie compare una barra.

| Pulsante | Azione |
| --- | --- |
| **Elimina** | Elimina la guida. |
| **Aggancia** | Attiva o disattiva **Aggancia ai righelli**. |
| **Guide** | Mostra o nasconde tutte le guide. Nasconderle nasconde anche la barra. |
| **Raddrizza** | Avvia **Raddrizza immagine alla guida**. Solo per una guida di tipo Retto. |

Disattivare **Visualizza > Mostra barra azioni della tela** rimuove la barra
della guida.

![La barra della guida sotto una guida di tipo Retto selezionata, con Elimina, Aggancia, Guide e Raddrizza.](shot:drawing/ruler-guide-bar)

## Spostare le guide con Operazione

Con lo strumento [Operazione](/it/docs/transform/move-transform/), trascina una
maniglia o la linea di una guida per spostare la guida invece del livello.
Operazione non aggiunge mai guide.

## Raddrizza immagine alla guida

Puoi mettere in piano l'immagine lungo una guida di tipo Retto.

Seleziona una guida di tipo Retto, poi esegui una delle seguenti operazioni:

- Seleziona **Raddrizza** nella barra della guida.
- Cerca **Raddrizza immagine alla guida** nella ricerca comandi.

Lo strumento Ritaglia si apre con la cornice ruotata in modo che la guida diventi
orizzontale o verticale, a seconda di quale sia più vicina. Applica il ritaglio
per ruotare l'immagine ([Ritaglio](/it/docs/transform/crop/)).
