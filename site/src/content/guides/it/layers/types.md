---
title: "Tipi di livello"
description: "Livelli di pittura, Oggetto, Carta, gruppo, riempimento, filtro e selezione e le regole per ciascuno."
related: ["layers/panel", "layers/paper", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![I tipi di livello correnti nel pannello Livelli.](shot:layers/types-rows)

## Livello di pittura

Un livello di pittura contiene pixel nello spazio colore del disegno. Pennelli, **Riempimento**, **Sfumatura** e **Forma** dipingono su questo tipo di livello.

Scegli **Livello > Nuovo > Nuovo livello**, oppure seleziona **Nuovo livello** in fondo al pannello Livelli. Un nuovo disegno inizia con **Inchiostro corrente** sopra la Carta.

## Livello Oggetto

Un livello Oggetto conserva un'immagine importata con dimensioni, profondità in bit e profilo colore propri. Aprire o importare un'immagine, trascinarla sulla tela e incollarla da un'altra app crea livelli Oggetto.

Puoi spostare, ridimensionare e ruotare un livello Oggetto senza ricampionarne ripetutamente l'origine. Scegli **Livello > Rasterizza livello** quando devi dipingere sui suoi pixel o usare un comando che richiede un livello di pittura. La rasterizzazione lo converte nello spazio colore, nella profondità in bit e nella griglia di pixel del disegno.

## Carta

La Carta fornisce il colore di sfondo e la trama usata dai tratti a secco. Rimane in fondo alla pila dei livelli e ha miniature del colore e della trama.

Un disegno può contenere una Carta. La Carta non può avere una maschera, diventare un livello di ritaglio, essere spostata sopra i livelli ordinari o essere unita a un livello ordinario. Vedi [Carta](/it/docs/layers/paper/) per trama, illuminazione e altre impostazioni.

## Gruppo

Un gruppo contiene livelli in una cartella comprimibile. Scegli **Livello > Nuovo > Nuovo gruppo**, seleziona **Nuovo gruppo** sotto l'elenco dei livelli oppure scegli **Livello > Organizza > Raggruppa livelli selezionati**.

Un gruppo combina il proprio contenuto prima di fonderlo con i livelli sottostanti, a meno che [Attraversamento](/it/docs/layers/settings/) sia attivo.

## Livelli di riempimento

**Tinta unita** e **Riempimento sfumato** coprono la tela con contenuto generato. Aggiungili da **Livello > Nuovo**, dal menu **Filtro > Riempimento** o dal pannello **Filtri**.

Seleziona la miniatura di Colore uniforme per aprire **Modifica colore**. Aggiungi una maschera per dipingere l'area visibile di un riempimento. Puoi ritagliare un livello di riempimento, ma non ritagliare altri livelli su di esso.

## Livelli filtro

Un livello filtro modifica i livelli sottostanti invece di contenere pixel. La sua riga mostra l'icona e il nome del filtro. Vedi [Come si applicano i filtri](/it/docs/filters/how-filters-apply/).

## Livelli di selezione

Un livello di selezione memorizza una selezione. Seleziona **Nuovo livello di selezione** sotto l'elenco dei livelli per aggiungerne uno. Non ha opacità, modalità di fusione, maschera, ritaglio o impostazione di riferimento e non può essere unito.
