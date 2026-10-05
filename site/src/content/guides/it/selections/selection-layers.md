---
title: "Livelli di selezione"
description: "Conservare le selezioni come livelli di selezione nel pannello Livelli e caricarle di nuovo."
related: ["selections/working", "selections/quick-mask", "layers/types", "layers/panel"]
---

Puoi conservare una selezione come livello nel pannello Livelli e caricarla di
nuovo in seguito.

## Salvare una selezione

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Salva come livello di selezione**.
- Seleziona **Salva** nella barra della selezione o nella barra della Maschera veloce.
- Nella Maschera veloce, scegli **Livello > Salva come livello di selezione**.

Il nuovo livello va in cima all'elenco dei livelli, con il nome *Selezione* e un
numero. Si apre per la modifica con il nome pronto da digitare. Il salvataggio
dalla Maschera veloce conserva anche il colore e l'opacità della sovrapposizione
della Maschera veloce.

Per salvare in un gruppo, apri il menu del gruppo e scegli
**Salva selezione corrente nel gruppo…**.

## Nuovo livello di selezione

Puoi iniziare un livello di selezione vuoto e dipingere la selezione.

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Nuovo livello di selezione**.
- Seleziona **Nuovo livello di selezione** in fondo al pannello Livelli.
- Apri il menu di un gruppo e scegli **Nuovo livello di selezione nel gruppo…**.

## Righe dei livelli di selezione

La riga di un livello di selezione ha una miniatura della selezione, un pulsante
a occhio che mostra o nasconde la sua sovrapposizione e un pulsante di
caricamento accanto alla miniatura.

Selezionare la riga apre il livello per la modifica. I livelli di selezione non
hanno opacità, metodo di fusione né maschera, e non puoi unirli né dipingerci
sopra fuori dalla modifica.

![La riga di un livello di selezione nel pannello Livelli, con il pulsante di caricamento accanto alla miniatura.](shot:selections/selection-layer-row)

## Modificare un livello di selezione

Mentre modifichi un livello di selezione, i pennelli, **Riempi** e **Sfumatura**
modificano la selezione memorizzata, come nella
[Maschera veloce](/it/docs/selections/quick-mask/). Il pannello Proprietà mostra
**Colore di sovrapposizione** e **Opacità di sovrapposizione** del livello, e
l'impostazione condivisa **Modalità**.

La [barra azioni della tela](/it/docs/selections/working/) in fondo alla tela ha come
didascalia «Modifica di» e il nome del livello. Con la barra azioni della tela
nascosta, questa barra non appare.

- **Carica** rende il livello la selezione corrente e torna al disegno.
- **Inverti** inverte la selezione memorizzata e lascia il livello aperto per la modifica.
- **Torna al disegno** termina la modifica. **Esc** fa lo stesso.

Dopo la modifica, torna attivo il livello che modificavi prima, o il livello di
pittura più in alto se non ce n'era uno.

Per perfezionare la selezione memorizzata, apri il menu del livello di selezione
e scegli da **Modifica**. **Seleziona > Espandi selezione…** e gli altri comandi
di perfezionamento del menu **Seleziona** prima tornano al disegno e poi
modificano la selezione corrente.

![La barra azioni della tela per un livello di selezione in modifica, con Carica, Inverti e Torna al disegno.](shot:selections/selection-layer-bar)

## Caricare un livello di selezione

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Carica selezione**, scegli il livello e poi **Carica selezione**, **Aggiungi alla selezione**, **Sottrai dalla selezione**, **Interseca con selezione** o **Carica selezione invertita**.
- Seleziona il pulsante di caricamento nella riga del livello.
- Tieni premuto **Ctrl** e fai clic sulla miniatura del livello. Aggiungi **Maiusc** per aggiungere, **Alt** per sottrarre o **Maiusc+Alt** per intersecare.
- Mentre modifichi il livello, seleziona **Carica** nella barra azioni della tela.

Il caricamento torna prima al disegno. Il livello di selezione resta com'era. I
livelli all'interno di gruppi compaiono in **Carica selezione** con il percorso
del gruppo, per esempio *Gruppo 1 / Selezione 1*.

## Sostituire un livello di selezione

Per memorizzare la selezione corrente in un livello di selezione esistente,
scegli **Seleziona > Sostituisci livello di selezione dalla selezione corrente**
e scegli il livello. Non puoi sostituire un livello di selezione bloccato.

## Menu del livello di selezione

Fai clic con il pulsante destro sulla riga di un livello di selezione, o tienila
premuta, per aprirne il menu.

- **Carica selezione**: le stesse cinque voci del menu Seleziona.
- **Modifica**: **Sostituisci dalla selezione corrente**, **Inverti**, **Seleziona tutto**, **Svuota**, **Riempi**, **Espandi…**, **Riduci…**, **Sfuma…**, **Bordo…** e **Smussa…**.
- **Organizza**: **Raggruppa livelli selezionati**, **Sposta alla radice**, **Sposta su**, **Sposta giù** e **Sposta nel gruppo**.
- **Rinomina…**, **Duplica**, **Elimina** e **Blocca modifica**. Su un livello bloccato, **Blocca modifica** diventa **Sblocca modifica**.

**Modifica** non è disponibile su un livello di selezione bloccato. Con più
livelli selezionati, il menu mostra **Duplica livelli selezionati** ed
**Elimina livelli selezionati**.
