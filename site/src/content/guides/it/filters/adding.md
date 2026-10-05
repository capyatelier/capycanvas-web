---
title: "Aggiungere e modificare filtri"
description: "Aggiungere filtri e cambiarne le impostazioni nel pannello Proprietà."
related: ["filters/how-filters-apply", "filters/tone", "filters/color", "start/command-search"]
---

Puoi aggiungere un filtro [su un livello proprio o collegato a un livello](/it/docs/filters/how-filters-apply/)
e cambiarne le impostazioni nel pannello **Proprietà**.

## Pannello Filtri

Puoi aggiungere un filtro su un livello proprio selezionandolo nel pannello
**Filtri**.

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Filtri**.
- In Pittura e Foto, seleziona la scheda **Filtri** accanto a **Proprietà** nella colonna destra.
- In Schizzo, seleziona **Filtri** nella barra del titolo.

![Il pannello Filtri con il menu delle categorie, il pulsante di ricerca e le righe dei filtri con le anteprime.](shot:filters/filters-panel)

Mentre è selezionato un livello, ogni riga mostra un'anteprima del filtro su quel
livello e sui livelli sottostanti. I filtri animati hanno un segno prima
dell'icona.

Il menu in alto mostra una categoria o **Tutti i filtri**. **Cerca filtri**
trova un filtro per nome nella categoria scelta.

Dopo che hai aggiunto un filtro, il pannello **Proprietà** passa in primo piano,
accanto a **Filtri**.

## Menu Filtro

Puoi aggiungere un filtro su un livello proprio dal menu **Filtro**.

Esegui una delle seguenti operazioni:

- Scegli una categoria e un filtro dal menu **Filtro**.
- In Schizzo, scegli **Menu principale > Filtro**, poi una categoria e un filtro.
- Digita il nome del filtro nella [ricerca comandi](/it/docs/start/command-search/).

Il menu contiene anche [**Separazione di frequenze…**](/it/docs/retouch/dodge-burn/),
e il suo sottomenu **Riempimento** aggiunge [livelli di riempimento](/it/docs/layers/types/).
Non puoi aggiungere filtri nella Maschera veloce o mentre modifichi un livello
di selezione.

## Regola

Puoi aggiungere un filtro con una maschera sulla selezione corrente. Seleziona
**Regola** nella barra della selezione sulla tela, poi scegli una categoria e un
filtro.

![La barra della selezione con il menu Regola aperto sulla categoria Tono.](shot:filters/selection-adjust)

## Aggiungi filtro

Puoi collegare un filtro al livello selezionato.

Esegui una delle seguenti operazioni:

- Seleziona **Aggiungi filtro** in fondo al pannello Livelli o al pannello **Proprietà**.
- Apri il menu del livello e scegli **Aggiungi filtro**.

![Il menu Aggiungi filtro aperto dal fondo del pannello Livelli.](shot:filters/add-filter-menu)

**Aggiungi filtro** funziona su livelli di pittura non bloccati, livelli
fotografici e gruppi non impostati su Attraversa. Il suo menu contiene tutte le
categorie tranne **Riempimento**.

## Cassetto Filtri in Schizzo

In Schizzo, puoi scegliere i filtri e cambiarne le impostazioni nel cassetto **Filtri**. Seleziona **Filtri** nella barra del titolo, poi seleziona
una categoria in **Tipo di filtro** e un filtro in **Filtri**.

![Il cassetto Filtri di Schizzo con le colonne Tipo di filtro, Filtri e Proprietà.](shot:filters/sketch-drawer)

| Livello selezionato | Selezionare un filtro nel cassetto |
| --- | --- |
| Un filtro | Lo sostituisce, mantenendone nome, maschera, opacità, metodo di fusione e posizione |
| Un livello ritagliato | Collega il filtro a quel livello |
| Qualsiasi altro livello | Aggiunge il filtro su un livello proprio sopra di esso |

**Annulla** in fondo a **Tipo di filtro** elimina il filtro selezionato e chiude
il cassetto. Per tenere il filtro, seleziona di nuovo **Filtri**
nella barra del titolo.

## Pannello Proprietà

Puoi cambiare le impostazioni del filtro selezionato nel pannello **Proprietà**.

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Proprietà**.
- In Pittura e Foto, seleziona la scheda **Proprietà** nella colonna destra.
- In Schizzo, usa la colonna destra del cassetto **Filtri**.

![Il pannello Proprietà per Curve con il menu delle pagine, Campiona punto, Regolazione mirata e il grafico della curva.](shot:filters/properties-curves)

| Controllo | Uso |
| --- | --- |
| Menu delle pagine | Mostra una pagina delle impostazioni di un filtro, come la curva **Rosso** di **Curve**. |
| Cursore | Trascina, o seleziona **−** o **+**. Seleziona il valore per digitare un numero, un'unità o un'espressione come `85/2`. Cancella il valore per ripristinare quello predefinito. |
| Colore | Apre [Modifica colore](/it/docs/color/edit-color/). **Usa colore selezionato** lo imposta sul colore corrente. |
| Sfumatura | Modifica i punti come nello strumento [Sfumatura](/it/docs/drawing/gradient/). |

Ogni trascinamento è un passaggio di annullamento, ed **Esc** durante un
trascinamento ripristina il valore. Alcune impostazioni accettano valori digitati
oltre gli estremi del cursore.

Le dimensioni in px sono pixel della tela. Dopo
[**Dimensioni immagine…**](/it/docs/transform/image/), l'effetto si adatta
all'immagine e il numero resta lo stesso.

Mentre **Ombre/Luci**, **Chiarezza** o **Rimozione foschia** si aggiorna, il
titolo del pannello termina con «Aggiornamento…». Le impostazioni di un filtro
bloccato non si possono cambiare.

## Impostare i toni dall'immagine

**Livelli**, **Curve** e **Bilanciamento del bianco** hanno in cima al pannello
**Proprietà** dei pulsanti che leggono l'immagine così come arriva al filtro.

| Pulsante | Filtro | Funzione |
| --- | --- | --- |
| **Campiona punto > Campiona punto nero**, **Campiona punto neutro** o **Campiona punto bianco** | **Livelli**, **Curve** | Fai clic sulla tela per impostare quel punto. |
| **Campiona punto neutro** | **Bilanciamento del bianco** | Fai clic sulla tela per impostare **Temperatura** e **Tinta** in modo che il punto diventi neutro. |
| **Automatico** | **Livelli** | Imposta **Nero**, **Bianco** e **Mezzitoni** di ingresso della pagina corrente in base all'immagine. Mentre è in corso diventa **Annulla**. |
| **Regolazione mirata** | **Curve** | Trascina in alto o in basso sulla tela per alzare o abbassare la curva nel tono sotto il puntatore. |

Nella pagina **RGB** i pulsanti modificano tutti i canali, e nella pagina di un
canale solo quel canale.

Mentre è attivo un selettore o **Regolazione mirata**, una barra in fondo alla
tela mostra un'indicazione e **Annulla** o **Fatto**. Se un punto non è
utilizzabile, appare un messaggio e il selettore resta attivo.

## Pannello Istogramma

Puoi controllare i toni dell'immagine nel pannello **Istogramma**.

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Istogramma**.
- In Foto, seleziona la scheda **Istogramma** in cima alla colonna destra.

![Il pannello Istogramma con i menu della sorgente e del canale, il grafico e i pulsanti di clipping.](shot:filters/histogram)

| Controllo | Opzioni |
| --- | --- |
| Menu della sorgente (all'inizio **Visibile**) | **Visibile**, **Livello selezionato**, **Riferimento** (i livelli impostati su **Usa come riferimento**), **Selezione** (l'immagine visibile all'interno della selezione) |
| Menu del canale (all'inizio **RGB**) | **RGB**, **Rosso**, **Verde**, **Blu**, **Luminanza** |
| **Conteggi logaritmici** | Mostra il numero di pixel su scala logaritmica. |
| **Ombre**, **Luci** | Segnalano sulla tela le aree in clipping. In un disegno HDR diventano **Ombre (SDR)** e **Luci (SDR)**. |

Lo stato sotto il grafico indica «Esatto» quando il conteggio è completo.

## Pannello Forma d’onda

Puoi vedere la luminosità e il colore da sinistra a destra lungo l'immagine nel
pannello **Forma d’onda**.

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Forma d’onda**.
- In Foto, seleziona la scheda **Forma d’onda** accanto a **Istogramma**.

Il pannello ha un proprio menu del canale e **Conteggi logaritmici**. Il menu
della sorgente e i pulsanti di clipping sono condivisi con il pannello
**Istogramma**.
