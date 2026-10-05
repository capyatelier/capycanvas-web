---
title: "Maschere"
description: "Nascondere parti di un livello con una maschera, e tutti i comandi che modificano una maschera."
related: ["layers/panel", "selections/working", "filters/how-filters-apply", "layers/merging"]
---

Puoi nascondere parti di un livello con una maschera. Le aree dipinte sulla
maschera mostrano il livello, e le aree vuote lo nascondono. Possono avere una
maschera i livelli di pittura, i livelli fotografici, i gruppi, i livelli di
riempimento e i filtri.

## Aggiungere una maschera

Esegui una delle seguenti operazioni:

- Scegli **Livello > Maschera > Aggiungi maschera**.
- Seleziona **Aggiungi maschera** in fondo al pannello Livelli.

![La riga di Ribbon, con un contorno attorno alla miniatura della maschera.](shot:layers/masks-row)

La miniatura della maschera appare a destra della miniatura del livello, con un
contorno che la indica come destinazione dei pennelli. Una nuova maschera mostra
l'intero livello. Se c'è una selezione attiva, la maschera mostra solo l'area
selezionata, e la selezione viene annullata.

Se il livello ha già una maschera, **Aggiungi maschera** la seleziona per
dipingerci sopra. Non puoi aggiungere una maschera a un livello di selezione o a
un livello bloccato.

## Dipingere su una maschera

Seleziona la miniatura della maschera per dipingere sulla maschera. Per tornare a
dipingere sul livello, seleziona la miniatura del livello o premi **Esc**.

> **Nota:** su una maschera i pennelli ignorano il colore di pittura. Rivelano il livello, e la **Gomma** lo nasconde.

Su una maschera invertita, i pennelli e la **Gomma** si scambiano i ruoli. I
tratti sulla maschera sono asciutti, senza mescolanza, diffusione né trama.

## Barra di modifica della maschera

Mentre dipingi su una maschera, in fondo alla tela appare una barra con la
scritta «Modifica della maschera di *livello*».

![La barra di modifica della maschera con Inverti, Disattiva, Applica maschera, Altro e Modifica contenuto.](shot:layers/masks-bar)

- **Inverti**
- **Disattiva** spegne la maschera, e il pulsante diventa **Attiva**.
- **Applica maschera** cancella i pixel nascosti dalla maschera, poi rimuove la maschera.
- **Altro** contiene il menu **Livello** e **Mostra barra azioni della tela**. Disattiva **Mostra barra azioni della tela** per nascondere la barra.
- **Modifica contenuto** torna a dipingere sul livello.

## Maschere dalle selezioni

Puoi creare una maschera dalla selezione corrente.

Esegui una delle seguenti operazioni:

- Scegli **Livello > Maschera > Maschera: mostra selezione** o **Maschera: nascondi selezione**. Su un livello con maschera, le voci diventano **Sostituisci maschera: mostra selezione** e **Sostituisci maschera: nascondi selezione**.
- Seleziona **Maschera** nella [barra della selezione](/it/docs/selections/working/) sulla tela. La nuova maschera mostra l'area selezionata e sostituisce l'eventuale maschera del livello.

Un filtro o un livello di riempimento aggiunto mentre c'è una selezione attiva
riceve una maschera dalla selezione. **Incolla dentro** crea un nuovo livello con
una maschera sulla selezione (vedi [Copiare e incollare](/it/docs/transform/clipboard/)).

## Selezioni dalle maschere

Puoi caricare una maschera come selezione.

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Dalla maschera del livello** e poi **Carica maschera come selezione**, **Aggiungi maschera alla selezione**, **Sottrai maschera dalla selezione** o **Interseca con maschera**.
- Scegli le stesse voci da **Selezione pixel** nel menu della maschera.
- Fai **Ctrl**+clic sulla miniatura della maschera. Aggiungi **Maiusc** per aggiungere alla selezione, **Alt** per sottrarre o **Maiusc+Alt** per intersecare.

## Menu della maschera

Esegui una delle seguenti operazioni:

- Scegli **Livello > Maschera** (la prima voce è **Modifica maschera**).
- Fai clic con il pulsante destro sulla miniatura della maschera, o tienila premuta.
- Mentre dipingi sulla maschera, apri il menu **Livello** o seleziona **Azioni livello** in fondo al pannello Livelli.

Su un livello senza maschera, **Livello > Maschera** contiene solo
**Aggiungi maschera**, **Maschera: mostra selezione**,
**Maschera: nascondi selezione** e **Incolla maschera**.

![Il menu della maschera di Ribbon.](shot:layers/masks-menu)

| Voce | Funzione |
| --- | --- |
| **Modifica contenuto livello** | Torna a dipingere sul livello. |
| **Mostra area della maschera** | Mostra la maschera sulla tela e la seleziona per dipingerci sopra. |
| **Attiva maschera** | Attiva o disattiva la maschera senza modificarla. Una maschera disattivata ha la miniatura sbiadita. |
| **Collega maschera al livello** | Se attivo, la maschera si sposta con il livello. Se disattivo, **Sposta livello / maschera** sposta il livello o la maschera, a seconda di dove stai dipingendo. Il pulsante di collegamento tra le miniature fa lo stesso. |
| **Sostituisci maschera: mostra selezione**, **Sostituisci maschera: nascondi selezione** | Sostituisce la maschera con la selezione. |
| **Copia maschera** | Copia la maschera, per **Sostituisci con maschera copiata** su un altro livello o **Incolla maschera** su un livello senza maschera. |
| **Inverti maschera** | Scambia le aree mostrate e quelle nascoste. |
| **Mostra tutto**, **Nascondi tutto** | La maschera mostra o nasconde l'intero livello, e l'inversione viene disattivata. |
| **Applica maschera al livello** | Cancella i pixel nascosti dalla maschera, poi rimuove la maschera. |
| **Elimina maschera** | Rimuove la maschera. I pixel del livello non cambiano. |
| **Selezione pixel** | Carica la maschera come selezione. |

Tutte le voci tranne **Modifica contenuto livello**,
**Mostra area della maschera** e **Copia maschera** richiedono un livello non
bloccato.

## Applicare una maschera

Esegui una delle seguenti operazioni:

- Scegli **Livello > Maschera > Applica maschera al livello**.
- Seleziona **Applica maschera** nella barra di modifica della maschera.

**Applica maschera al livello** funziona solo sui livelli di pittura, e la
maschera deve essere attiva. Su un livello distorto o deformato, scegli prima
**Applica trasformazione ai pixel**. Per applicare la maschera di un gruppo, usa
**Unisci gruppo** (vedi [Unire i livelli](/it/docs/layers/merging/)).

Su un livello fotografico, **Ripristina foto originale** recupera ciò che una
maschera applicata ha cancellato.

## Maschere sui livelli filtro e di riempimento

La maschera di un filtro stabilisce dove si applica il filtro. Con un filtro o
un livello di riempimento selezionato, i pennelli dipingono sempre sulla sua
maschera. **Riempi**, **Sfumatura** e gli altri strumenti che disegnano non
funzionano sulla maschera di un filtro. Per dipingere su un livello di
riempimento serve una maschera.
