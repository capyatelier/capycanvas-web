---
title: "Come si applicano i filtri"
description: "Come cambiano l'immagine un filtro su un livello proprio e un filtro collegato a un livello."
related: ["filters/adding", "layers/masks", "layers/merging", "layers/settings"]
---

Un filtro è un livello senza pittura propria. Le sue impostazioni restano
modificabili nel pannello **Proprietà**.

![Il pannello Livelli con Curve e Chiarezza collegati alla foto del terrario, e un filtro Vignettatura su un livello proprio sopra di essi.](shot:filters/layers-chain)

| | Filtro su un livello proprio | Filtro collegato |
| --- | --- | --- |
| Si aggiunge con | Il pannello **Filtri**, il menu **Filtro**, **Regola** nella barra della selezione | **Aggiungi filtro** |
| Modifica | Tutti i livelli sottostanti nel suo gruppo | Solo il livello a cui è collegato |
| Nel pannello Livelli | Una riga propria | Una riga unita alla riga sottostante da un anello di catena |

## Filtro su un livello proprio

Un nuovo filtro va sopra il livello selezionato e i livelli ritagliati o
collegati a esso. All'interno di un gruppo, il filtro modifica solo i livelli
sottostanti di quel gruppo, a meno che il gruppo non sia impostato su
[Attraversa](/it/docs/layers/settings/).

## Filtro collegato

Puoi collegare filtri a un livello di pittura, a un livello fotografico o a un
gruppo non impostato su Attraversa. Seleziona il livello, poi seleziona
**Aggiungi filtro** in fondo al pannello Livelli o al pannello **Proprietà**,
oppure nel menu del livello.

I filtri collegati si applicano dal basso verso l'alto della catena, dopo la
maschera del livello e prima della sua opacità e del suo metodo di fusione. Su
una base di ritaglio, cambiano anche dove compaiono i livelli ritagliati. Le
sfocature e le distorsioni come **Sfocatura gaussiana** e **Vortice** possono
spargere la pittura del livello oltre i suoi bordi.

Spostare, duplicare o nascondere il livello fa lo stesso con i suoi filtri
collegati. Se elimini il livello, i suoi filtri collegati restano come filtri su
livelli propri.

## Applica a *livello* e Applica ai livelli sottostanti

Puoi passare un filtro selezionato da un tipo all'altro.

Esegui una delle seguenti operazioni:

- Scegli **Livello > Impostazioni livello > Applica a *livello*** o **Applica ai livelli sottostanti**.
- Seleziona il pulsante con l'anello di catena nell'intestazione del pannello Livelli, al posto di **Ritaglia al livello sottostante**.
- Trascina il filtro sulla miniatura di un livello per collegarlo a quel livello.

![L'intestazione del pannello Livelli con il pulsante dell'anello di catena per un filtro selezionato.](shot:filters/attachment-button)

**Applica a *livello*** collega il filtro al livello sottostante più vicino.
**Applica ai livelli sottostanti** mette il filtro su un livello proprio, sopra
il livello a cui era collegato e i livelli ritagliati su quel livello.

Il pulsante non è disponibile mentre il filtro o il livello sottostante è
bloccato. Quando il livello sottostante non è un livello di pittura, un livello
fotografico o un gruppo, il suo suggerimento indica «Nessun livello sottostante
a cui collegare».

## Selezioni come maschere dei filtri

Se c'è una selezione attiva quando aggiungi un filtro, la selezione diventa la
[maschera](/it/docs/layers/masks/) del filtro. Un solo **Annulla** rimuove il
filtro e ripristina la selezione.

## Applica effetto al livello sottostante

Puoi unire un filtro al livello sottostante come pittura.

Seleziona il filtro, poi esegui una delle seguenti operazioni:

- Scegli **Livello > Applica effetto al livello sottostante**, oppure sceglilo dal menu del livello del filtro.
- Premi **Ctrl+E**.

![Il menu del livello di un filtro con Applica effetto al livello sottostante.](shot:filters/apply-effect-menu)

Un filtro su un livello proprio viene applicato solo al livello direttamente
sottostante. Per un filtro collegato, il livello e tutta la sua catena di filtri
diventano pittura. Se quel livello è ritagliato o ha livelli ritagliati su di
sé, il comando diventa **Unisci livelli ritagliati** (vedi
[Unire i livelli](/it/docs/layers/merging/)).

Il filtro e il livello sottostante devono essere visibili, non bloccati e
impostati su Normale. Il comando non è disponibile quando il livello direttamente
sottostante è un filtro collegato a un altro livello.
