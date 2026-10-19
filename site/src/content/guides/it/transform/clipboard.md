---
title: "Copiare e incollare"
description: "Copiare pixel e incollarli come livello, maschera o nuovo disegno."
related: ["selections/working", "transform/move-transform", "layers/types", "files/open-save"]
---

I comandi degli appunti sono nel menu **Modifica** e nella ricerca comandi.

![Incolla speciale nel menu Modifica.](shot:transform/clipboard-edit-menu)

## Copia e Taglia

**Copia** (**Ctrl+C**) copia i pixel del livello selezionato all'interno della selezione, senza opacità, maschera o filtri collegati. Senza selezione copia il livello entro la tela.

**Taglia** (**Ctrl+X**) copia gli stessi pixel e li cancella. Non è disponibile su un livello bloccato o con **Blocca alfa**.

**Copia elementi uniti** (**Ctrl+Shift+C**) copia il risultato visibile dentro la selezione, inclusa l'illuminazione della Carta. Gruppi, livelli filtro e livelli di selezione non hanno pixel propri.

## Incolla

**Incolla** (**Ctrl+V**) aggiunge il disegno degli appunti come nuovo livello e apre le maniglie di trasformazione quando serve posizionarlo. Un'immagine da un'altra app diventa un [livello Oggetto](/it/docs/layers/types/), conservando l'origine fino alla rasterizzazione.

Una copia eseguita in {appName} torna nella posizione copiata quando questa è visibile. Altrimenti viene posizionata al centro della vista.

## Incolla speciale

Apri **Modifica > Incolla speciale** per scegliere una destinazione.

- **Incolla nella stessa posizione** aggiunge un livello nella posizione copiata senza aprire le maniglie di trasformazione.
- **Incolla dentro** aggiunge un livello con la selezione attiva come maschera, poi cancella la selezione.
- **Incolla maschera** sostituisce o aggiunge la maschera del livello selezionato con l'immagine degli appunti.
- **Incolla come nuova immagine** crea un nuovo disegno dagli appunti.

I comandi che richiedono una selezione, un livello modificabile o un'immagine compatibile negli appunti sono attenuati.

![Le opzioni di Incolla speciale per livelli, maschere e nuovi disegni.](shot:transform/paste-special)

## Tra app

Le altre app ricevono una copia da {appName} come PNG sRGB a 8 bit. Finché la copia interna rimane negli appunti, un altro disegno di {appName} la riceve con la precisione originale.

Nell'editor web, un'immagine incollata può arrivare a 512 MiB. Se il browser non può incollare immagini, usa **File > Importa immagine come livello…**.
