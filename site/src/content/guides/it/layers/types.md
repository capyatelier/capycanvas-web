---
title: "Tipi di livello"
description: "I tipi di livello di un disegno e le regole di ciascuno."
related: ["layers/panel", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Il pannello Livelli con un livello di selezione, un gruppo con Attraversa, un filtro Curve, un livello Riempimento sfumato, un livello Tinta unita, il livello di pittura Inchiostro corrente e Carta.](shot:layers/types-rows)

## Livello di pittura

Un livello di pittura contiene pixel dipinti. I pennelli, **Riempi**,
**Sfumatura** e **Forma** aggiungono pixel solo ai livelli di pittura.

Per aggiungere un livello di pittura, scegli **Livello > Nuovo > Nuovo livello**
o seleziona **Nuovo livello** in fondo al pannello Livelli.

Un nuovo disegno inizia con un livello di pittura vuoto, **Inchiostro corrente**,
sopra **Carta**. Solo i livelli di pittura hanno **Blocca alfa**,
**Modalità colore**, **Svuota intero livello** e **Applica maschera al livello**.

## Gruppo

Un gruppo raccoglie i livelli in una cartella che puoi comprimere in una sola riga.

Esegui una delle seguenti operazioni:

- Scegli **Livello > Nuovo > Nuovo gruppo**.
- Seleziona **Nuovo gruppo** in fondo al pannello Livelli.
- Seleziona più righe e scegli **Livello > Organizza > Raggruppa livelli selezionati**.

Seleziona la miniatura della cartella per espandere o comprimere il gruppo. Un
simbolo sulla cartella indica un gruppo impostato su [Attraversa](/it/docs/layers/settings/).

Un gruppo prima combina i propri livelli e poi fonde il risultato con i livelli
sottostanti, a meno che non sia impostato su Attraversa. Un gruppo non ha pixel
propri.

## Livelli di riempimento

Un livello di riempimento copre la tela con un colore (**Tinta unita**) o con
una sfumatura (**Riempimento sfumato**).

Esegui una delle seguenti operazioni:

- Scegli **Livello > Nuovo > Riempimento tinta unita** o **Riempimento sfumato**.
- Scegli **Filtro > Riempimento > Tinta unita** o **Riempimento sfumato**.
- Seleziona **Tinta unita** o **Riempimento sfumato** nella categoria **Riempimento** del pannello **Filtri**.

Il livello di riempimento va sopra il livello attivo e i livelli ritagliati su
di esso. Un nuovo livello Tinta unita usa il colore di pittura corrente, e un
nuovo Riempimento sfumato va dal nero al bianco. Se c'è una selezione attiva,
diventa la maschera del livello di riempimento.

Per cambiare il colore di un livello Tinta unita, seleziona la sua miniatura per
aprire [Modifica colore](/it/docs/color/edit-color/), oppure cambia **Colore** nel
pannello **Proprietà**. [Sfumatura](/it/docs/drawing/gradient/) descrive le
impostazioni di un Riempimento sfumato.

Per dipingere su un livello di riempimento, aggiungi una maschera. I pennelli
dipingono sulla maschera, non sul riempimento. Puoi ritagliare un livello di
riempimento, ma non puoi ritagliarvi altri livelli né collegarvi filtri.

## Livelli filtro

Un livello filtro contiene un filtro invece di pixel. La sua riga mostra l'icona
e il nome del filtro. Vedi [Aggiungere filtri](/it/docs/filters/adding/) e
[Come si applicano i filtri](/it/docs/filters/how-filters-apply/).

Con un livello filtro selezionato, i pennelli dipingono sul livello sottostante o
sul livello a cui il filtro è collegato. Se il filtro ha una maschera, i pennelli
dipingono sulla maschera.

## Livelli di selezione

Un livello di selezione memorizza una selezione. Per aggiungerne uno, seleziona
**Nuovo livello di selezione** in fondo al pannello Livelli.

Il pulsante a destra della miniatura carica la selezione memorizzata. L'occhio
nasconde o mostra la sovrapposizione della selezione sulla tela. Un livello di
selezione non ha opacità, metodo di fusione, maschera, ritaglio né impostazione
di riferimento, e non si può unire. [Livelli di selezione](/it/docs/selections/selection-layers/)
spiega come modificare la selezione memorizzata.

## Carta

**Carta** è un livello di riempimento **Tinta unita** bianco in fondo a un nuovo
disegno. Puoi ricolorare, nascondere o eliminare **Carta** come qualsiasi altro
livello di riempimento.

Il livello **Carta** è nascosto all'inizio quando **Sfondo** è impostato su
**Trasparente** nella finestra di dialogo [Nuovo disegno](/it/docs/files/new/), e
in una foto che apri.

## Livelli fotografici

Un livello fotografico è un livello di pittura che conserva la foto originale con le
sue dimensioni, la sua profondità in bit e il suo profilo colore. La pittura e
le cancellature vengono memorizzate sopra la foto.

Per aggiungere un livello fotografico, esegui una delle seguenti operazioni:

- Scegli **File > Apri…** e seleziona una foto.
- Scegli **File > Importa immagine come livello…**.
- Trascina un file immagine sulla tela.

Finché l'originale è conservato, **Livello > Impostazioni livello** elenca
questi comandi:

- **Ripristina foto originale** scarta la pittura, le cancellature e le maschere applicate. Posizione, maschera, opacità e metodo di fusione restano, e **Modalità colore** torna a **Colore pieno**.
- **Rasterizza sorgente…** converte l'originale nello spazio colore e nella profondità in bit del disegno, a dimensione piena. Dopo, **Ripristina foto originale** non è più disponibile.
- **Ripara profilo sorgente…** cambia il profilo con cui viene letto l'originale: **sRGB**, **Display P3**, **Adobe RGB (1998)** o **ProPhoto RGB**. Se sul livello c'è della pittura, **Aggiungi sorgente corretta** aggiunge invece la foto corretta come nuovo livello.

**Ripristina foto originale** e **Rasterizza sorgente…** si trovano anche nel
menu **Modifica**. **Svuota intero livello** scarta anche la foto originale.
