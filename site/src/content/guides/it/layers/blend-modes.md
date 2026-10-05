---
title: "Metodi di fusione"
description: "Impostare il metodo di fusione e l'opacità di un livello, e i metodi del menu di fusione."
related: ["layers/settings", "layers/panel", "color-management/color-spaces", "color-management/hdr"]
---

Puoi stabilire come un livello si combina con i livelli sottostanti.

![Il menu dei metodi di fusione aperto sopra il pannello Livelli, con Normale spuntato.](shot:layers/blend-menu)

## Scegliere un metodo di fusione

Esegui una delle seguenti operazioni:

- Scegli **Livello > Metodo di fusione** e un metodo.
- Seleziona **Metodo di fusione del livello** in alto a sinistra nell'intestazione del pannello Livelli, poi scegli un metodo.
- Scegli un metodo da **Metodo di fusione** nel pannello **Proprietà**.
- Digita il nome del metodo nella [ricerca comandi](/it/docs/start/command-search/).

Il metodo attuale ha un segno di spunta nel menu, e il suo nome appare sul
pulsante dell'intestazione. Il sottotitolo della riga mostra il metodo quando non
è Normale. I nuovi livelli usano Normale.

Non puoi cambiare il metodo di fusione di un livello di selezione o di un livello
bloccato. [Unisci sotto](/it/docs/layers/merging/) richiede che entrambi i livelli
siano impostati su Normale. I metodi di fusione mescolano i colori nello spazio
di fusione del disegno, impostato con **Modifica > Fusione** (vedi
[Spazio colore, profondità in bit e fusione](/it/docs/color-management/color-spaces/)).

## Metodi del menu di fusione

Il menu di fusione elenca i metodi in queste sezioni:

- **Attraversa** (solo gruppi, vedi [Attraversa](/it/docs/layers/settings/)), **Normale**
- **Scurisci**, **Moltiplica**, **Colore brucia**, **Brucia lineare**
- **Schiarisci**, **Scolora**, **Colore scherma**, **Aggiungi**
- **Sovrapponi**, **Luce soffusa**, **Luce intensa**, **Luce vivida**, **Luce lineare**, **Luce puntiforme**, **Miscela dura**
- **Differenza**, **Esclusione**, **Sottrai**, **Dividi**
- **Tonalità**, **Saturazione**, **Colore**, **Luminosità**

## Metodi nei disegni HDR

In un [disegno HDR](/it/docs/color-management/hdr/), il menu di fusione esclude
**Sovrapponi**, **Luce soffusa**, **Luce intensa**, **Colore brucia**,
**Colore scherma**, **Luce vivida**, **Miscela dura** ed **Esclusione**. Questi
metodi sono definiti solo per i colori compresi tra il nero e il bianco. Un
livello che usa già uno di questi metodi lo mantiene, e il menu continua a
elencare quel metodo per il livello.

## Opacità

Esegui una delle seguenti operazioni:

- Trascina **Opacità livello** nell'intestazione del pannello Livelli, o digita un valore da 0 a 100.
- Cambia **Opacità** nel pannello **Proprietà**.
- Digita «Opacità livello» e un valore nella ricerca comandi.

Il sottotitolo della riga mostra l'opacità quando è sotto il 100%. Non puoi
cambiare l'opacità di un livello di selezione o di un livello bloccato, né
mentre la Maschera veloce è attiva.
