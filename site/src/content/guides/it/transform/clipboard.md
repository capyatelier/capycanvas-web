---
title: "Copiare e incollare"
description: "Copiare pixel e incollarli come nuovi livelli, all'interno di Capy Canvas e tra app diverse."
related: ["selections/working", "transform/move-transform", "layers/working", "files/open-save"]
---

Puoi copiare pixel da un livello o dall'immagine visibile, e incollarli come
nuovo livello. I comandi si trovano nel menu **Modifica** e nella ricerca
comandi.

![I comandi degli appunti nel menu Modifica.](shot:transform/clipboard-edit-menu)

| Comando | Tasto |
| --- | --- |
| **Taglia** | **Ctrl+X** |
| **Copia** | **Ctrl+C** |
| **Copia elementi uniti** | **Ctrl+Maiusc+C** |
| **Incolla** | **Ctrl+V** |
| **Incolla nella stessa posizione** | **Ctrl+Maiusc+V** |
| **Incolla dentro** | |

**Copia** nella [barra della selezione](/it/docs/selections/working/) contiene
**Copia**, **Copia elementi uniti** e **Taglia**.

## Copia

Copia i pixel propri del livello attivo all'interno della selezione, senza
l'opacità, la maschera e i filtri collegati del livello. Senza selezione, copia
l'intero livello entro i limiti della tela.

## Taglia

Copia come **Copia**, poi cancella dal livello i pixel selezionati. Non puoi
tagliare da un livello con **Blocca alfa** attivo.

## Copia elementi uniti

Copia l'immagine visibile all'interno della selezione, così come appare in
un'esportazione.

## Cosa non puoi copiare

I gruppi, i livelli filtro e i livelli di selezione non hanno pixel propri. Per
copiare da un gruppo, seleziona un livello al suo interno. Non puoi copiare il
disegno nella Maschera veloce, e **Copia** e **Taglia** non sono disponibili
mentre modifichi una maschera.

Una copia di grandi dimensioni mostra un avviso di avanzamento con **Annulla**.

## Incolla

Aggiunge il contenuto degli appunti come nuovo livello attivo.

- Una copia da Capy Canvas finisce nel punto da cui è stata copiata se quel punto è visibile, altrimenti al centro della vista.
- Un'immagine da un'altra app si apre nel riquadro di trasformazione. **Applica** posiziona l'immagine e **Annulla** scarta l'operazione (vedi [Spostamento e trasformazione](/it/docs/transform/move-transform/)).

## Incolla nella stessa posizione

Aggiunge il contenuto degli appunti come nuovo livello nel punto da cui è stato
copiato, senza riquadro di trasformazione. Un'immagine da un'altra app finisce
al centro della vista a dimensione piena.

## Incolla dentro

Funziona come **Incolla nella stessa posizione**, e dà al nuovo livello una
[maschera](/it/docs/layers/masks/) che mostra solo la selezione. Poi la selezione
viene rimossa. **Incolla dentro** richiede una selezione.

## Incollare tra app diverse

Le altre app ricevono una copia da Capy Canvas come immagine PNG sRGB a 8 bit.
Incollando di nuovo in Capy Canvas, viene usata la copia con la sua profondità
in bit completa finché è ancora negli appunti.

Una copia incollata in un disegno con impostazioni colore diverse diventa un
[livello fotografico](/it/docs/layers/types/), convertito dal proprio profilo
colore.

Mentre digiti in un campo di testo, i tasti degli appunti tagliano, copiano e
incollano il testo.

Nell'editor web, un'immagine incollata può arrivare a 512 MiB. In un browser che
non può incollare immagini, scegli invece
**File > Importa immagine come livello…**.
