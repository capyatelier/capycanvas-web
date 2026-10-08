---
title: "Strumenti di riempimento"
description: "Riempire aree, forme a mano libera e zone chiuse di un livello con il colore corrente."
related: ["drawing/gradient", "layers/settings", "selections/working", "drawing/brush-tools"]
---

Puoi riempire parti del livello selezionato con il colore corrente usando
**Riempi**, **Riempimento con lazo** e **Racchiudi e riempi**. Ogni riempimento è
un passaggio di annullamento, e **Blocca alfa** viene rispettato.

I riempimenti dipingono solo il disegno di un livello, mai una maschera di
livello o la maschera di un filtro. Su un livello su cui un pennello non può
dipingere, un riempimento non dipinge nulla e un avviso ne indica il motivo
([Strumenti pennello](/it/docs/drawing/brush-tools/)).

## Selezionare uno strumento di riempimento

Esegui una delle seguenti operazioni:

- Premi **F** per selezionare Riempi. Gli altri due strumenti non hanno un tasto predefinito.
- In Pittura, seleziona **Riempi** nella barra strumenti Strumenti. Fai clic con il pulsante destro sul pulsante o tienilo premuto per scegliere un altro strumento di riempimento.
- In Foto, fai clic con il pulsante destro sul pulsante di sfumatura e riempimento dopo **Fluidifica** nella barra strumenti Strumenti, o tienilo premuto, e scegli uno strumento.
- Con uno strumento di riempimento attivo, seleziona **Riempi** o **Riempimento con lazo** nel pannello **Set di strumenti**. **Racchiudi e riempi** si trova sotto **Riempimento con lazo**.
- Cerca il nome dello strumento nella ricerca comandi.

Schizzo non ha un pulsante di riempimento.

## Riempi

Puoi riempire un'area contigua di colore simile facendo clic su di essa.
**Sorgente** imposta quali pixel esamina Riempi per trovare l'area.

- Una selezione attiva limita il riempimento alla selezione.
- Nella Maschera veloce o su un livello di selezione, Riempi riempie la maschera di selezione ([Maschera veloce](/it/docs/selections/quick-mask/)).

## Riempimento con lazo

Puoi disegnare una forma a mano libera e riempirla con il colore corrente.
Trascina il contorno sulla tela: la forma si riempie quando rilasci.

Riempimento con lazo ha solo l'impostazione **Opacità**. Non è disponibile nella
Maschera veloce né su un livello di selezione.

## Racchiudi e riempi

Puoi riempire ogni zona trasparente chiusa all'interno di un anello che disegni.
Racchiudi e riempi trova le zone nei pixel della **Sorgente**.

- Premi **Esc** mentre disegni per annullare l'anello.
- Un solo annullamento rimuove tutto ciò che un anello ha riempito.
- Una selezione attiva limita il riempimento alla selezione.
- Racchiudi e riempi non è disponibile mentre modifichi una maschera di selezione o una maschera di livello.

## Sorgente

Puoi scegliere quali pixel esaminano Riempi e Racchiudi e riempi per trovare
l'area. Il colore va sempre sul livello selezionato.

- **Disegno visibile**: tutto ciò che è visibile nel disegno.
- **Livello in modifica**: solo il livello selezionato.
- **Livelli di riferimento**: i livelli contrassegnati con **Usa come riferimento** ([Impostazioni livello](/it/docs/layers/settings/)).

Scegli la sorgente nell'elenco sotto gli strumenti in **Set di strumenti** per
Riempi, oppure nel pannello **Strumento** per Racchiudi e riempi. La barra
Opzioni strumento ha un menu **Sorgente** per entrambi.

![Il pannello Set di strumenti con Riempi selezionato e sotto le scelte Disegno visibile, Livello in modifica e Livelli di riferimento.](shot:drawing/fill-tool-set)

Ogni strumento conserva la propria sorgente. Riempi parte da **Disegno
visibile**, mentre Racchiudi e riempi torna a **Livelli di riferimento** ogni
volta che apri {appName}.

Se Riempi usa **Livelli di riferimento** e nessun livello è contrassegnato,
Riempi non dipinge nulla e un avviso propone di contrassegnare il livello
sottostante.

## Impostazioni di riempimento

![Il pannello Strumento per Riempi con Tolleranza, il gruppo Bordi e Opacità.](shot:drawing/fill-settings)

Riempi e Racchiudi e riempi condividono le impostazioni seguenti. **Selezione
automatica** e **Seleziona per colore** usano gli stessi valori per tutte tranne
**Opacità**. Per ripristinare un'impostazione, fai doppio clic sulla sua
etichetta nella barra Opzioni strumento
([Dimensioni, opacità e flusso](/it/docs/brushes/basics/)).

### Tolleranza

Imposta quanto un colore può differire e contare ancora come parte della stessa
area. Il valore predefinito è 10%.

### Chiudi gli spazi

Chiude le aperture nelle linee fino a questa larghezza, da 0 a 32 px, prima di
trovare l'area. La larghezza è in pixel del disegno, non dello schermo.

### Espansione

Allarga l'area riempita di questo numero di pixel, oppure la restringe con un
valore negativo, da −32 a 32 px.

### Smussatura bordi

Smussa i bordi a gradini dell'area riempita. Allo 0%, il riempimento mantiene
bordi netti a pixel.

### Opacità

Imposta l'intensità del riempimento. Modificarla cambia l'**Opacità** del
pennello corrente, e viceversa. In Schizzo, usa il cursore dell'opacità nella
barra sul bordo sinistro.

## Riempire una selezione

Per riempire una selezione con il colore corrente, scegli **Modifica > Riempi
selezione** o premi **Maiusc+Backspace**
([Lavorare con le selezioni](/it/docs/selections/working/)).
