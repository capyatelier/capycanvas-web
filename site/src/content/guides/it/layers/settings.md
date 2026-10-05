---
title: "Impostazioni livello"
description: "Le impostazioni del livello nell'intestazione del pannello Livelli, nel menu Impostazioni livello e nel pannello Proprietà."
related: ["layers/panel", "layers/blend-modes", "layers/types", "filters/how-filters-apply"]
---

Puoi cambiare queste impostazioni nell'intestazione del pannello Livelli o in
**Impostazioni livello** nel menu del livello. Il menu **Livello** contiene le
stesse voci.

![Il sottomenu Impostazioni livello di Ribbon shading, con Ritaglia al livello sottostante spuntato e «Ritagliato a Ribbon» a destra.](shot:layers/settings-menu)

## Blocca alfa

Puoi bloccare la trasparenza di un livello di pittura. I pennelli modificano
allora solo i pixel già dipinti.

Esegui una delle seguenti operazioni:

- Seleziona il livello, poi seleziona **Blocca alfa** nell'intestazione del pannello Livelli.
- Apri il menu del livello e scegli **Impostazioni livello > Blocca alfa**.
- Scorri la riga verso destra con una penna o un dito.

Mentre Blocca alfa è attivo, a destra della riga appare un'icona di blocco alfa.

Anche **Riempi** e **Sfumatura** rispettano la trasparenza, e la **Gomma** non
ha effetto.

## Blocca modifica

Puoi bloccare un livello in modo che non si possa dipingere su di esso né
modificarlo.

Esegui una delle seguenti operazioni:

- Seleziona il livello, poi seleziona **Blocca modifica** nell'intestazione del pannello Livelli.
- Apri il menu del livello e scegli **Impostazioni livello > Blocca modifica**.
- Per un livello di selezione, scegli **Blocca modifica** dal suo menu.

Quando un livello è bloccato, sulla sua riga appare un'icona a lucchetto.

Non puoi dipingere su un livello bloccato, né rinominarlo, eliminarlo,
aggiungergli una maschera, cambiarne l'opacità o il metodo di fusione o
aggiungervi un filtro. Bloccare un gruppo blocca tutti i livelli al suo interno. Non puoi
disattivare **Blocca modifica** su un livello che si trova in un gruppo bloccato.

## Ritaglia al livello sottostante

Puoi ritagliare un livello per limitarlo all'area dipinta del livello
sottostante.

Esegui una delle seguenti operazioni:

- Seleziona il livello, poi seleziona **Ritaglia al livello sottostante** nell'intestazione del pannello Livelli.
- Apri il menu del livello e scegli **Impostazioni livello > Ritaglia al livello sottostante**.
- Per aggiungere un nuovo livello ritagliato, scegli **Nuovo > Nuovo livello ritagliato** dal menu del livello.

Una barra a sinistra delle miniature unisce i livelli ritagliati alla loro base.
Nel menu del livello, la voce indica la base, per esempio «Ritagliato a Ribbon».
Spostare il livello base sposta con sé i suoi livelli ritagliati.

Non puoi ritagliare su un gruppo impostato su Attraversa. Prima disattiva
Attraversa sul gruppo.

La base è il livello non ritagliato più vicino sotto, nello stesso gruppo,
saltando i livelli di selezione. Se quel livello è un livello di riempimento o
un filtro, la voce diventa **Nessun livello sottostante a cui collegare**. Su un
filtro, la voce collega invece il filtro (vedi
[Come si applicano i filtri](/it/docs/filters/how-filters-apply/)).

## Usa come riferimento

Puoi contrassegnare livelli di pittura e gruppi come riferimenti per gli
strumenti che campionano i **Livelli di riferimento**, come
**Selezione automatica**, **Riempi** e gli
[strumenti di ritocco](/it/docs/retouch/clone-heal/).

Esegui una delle seguenti operazioni:

- Seleziona i livelli, poi seleziona **Usa livelli selezionati come riferimenti** nell'intestazione del pannello Livelli.
- Apri il menu del livello e scegli **Impostazioni livello > Usa come riferimento**, oppure **Usa livelli selezionati come riferimenti** con più righe selezionate.

Per smettere di usare un livello come riferimento, seleziona solo quel livello e
poi seleziona **Smetti di usare questo livello come riferimento**
nell'intestazione, oppure disattiva **Usa come riferimento** nel menu del
livello.

Sul pulsante della riga di un livello di riferimento appare l'icona di un faro.
Dopo aver contrassegnato i livelli con il pulsante dell'intestazione, resta
selezionato solo il livello attivo.

## Usa livello sottostante come riferimento

Puoi contrassegnare come riferimento il livello di pittura visibile più vicino
sotto il livello attivo.

Esegui una delle seguenti operazioni:

- Scegli **Livello > Impostazioni livello > Usa livello sottostante come riferimento**.
- Quando uno strumento campiona i livelli di riferimento e nessuno è contrassegnato, seleziona **Usa *livello* come riferimento** nell'avviso sopra la tela.

## Attraversa

Puoi impostare un gruppo su Attraversa. I suoi livelli si fondono allora
direttamente con i livelli sotto il gruppo, e l'opacità e la maschera del gruppo
dosano il passaggio tra quel risultato e i livelli sottostanti.

Esegui una delle seguenti operazioni:

- Apri il menu del gruppo e scegli **Impostazioni livello > Attraversa**.
- Scegli **Attraversa** da **Metodo di fusione del livello** nell'intestazione del pannello Livelli, o da **Metodo di fusione** nel pannello **Proprietà**.
- Scorri la riga del gruppo verso destra con una penna o un dito.

Sulla cartella del gruppo appare un simbolo, e il sottotitolo indica
«Attraversa».

Disattivare Attraversa imposta il gruppo su Normale. Un gruppo con Attraversa
non può essere ritagliato, fare da base di ritaglio né avere filtri collegati.
Non puoi cambiare Attraversa su un gruppo bloccato.

I nuovi gruppi usano Normale, a meno che **Usa Attraversa per i nuovi gruppi**
non sia attivo nella pagina **Tela** delle [Preferenze](/it/docs/preferences/).
Raggruppare livelli che usano un metodo di fusione diverso da Normale, o un
filtro su un livello proprio, imposta il nuovo gruppo su Attraversa.

## Modalità colore

Puoi memorizzare un livello di pittura in **Colore pieno**, **Scala di grigi** o
**Due toni (bianco e nero)**. La pittura sul livello segue la modalità.

![Il pannello Proprietà di un livello di pittura con Opacità, Metodo di fusione e Modalità colore.](shot:layers/settings-color-mode)

Esegui una delle seguenti operazioni:

- Seleziona il livello, poi scegli una modalità da **Modalità colore** nel pannello **Proprietà**.
- Digita «Modalità colore» nella [ricerca comandi](/it/docs/start/command-search/) e scegli una modalità.

**Modalità colore** non è nel menu del livello. Il sottotitolo della riga mostra
la modalità quando non è Colore pieno.

Cambiare modalità converte i pixel esistenti, e tornare a Colore pieno non
ripristina i colori originali. Due toni rende ogni pixel nero o bianco, e del
tutto opaco o del tutto trasparente. **Modalità colore** è nascosta mentre
dipingi sulla maschera del livello.

## Altre voci di Impostazioni livello

**Impostazioni livello** elenca anche **Applica trasformazione ai pixel** (vedi
[Spostamento e trasformazione](/it/docs/transform/move-transform/)). Su un
livello fotografico, elenca **Ripara profilo sorgente…**,
**Rasterizza sorgente…** e **Ripristina foto originale** (vedi
[Tipi di livello](/it/docs/layers/types/)).
