---
title: "Unire i livelli"
description: "Combinare più livelli in un solo livello di pittura con i comandi di unione."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types"]
---

Puoi unire più livelli in un solo livello di pittura. I comandi di unione si
trovano verso la fine del menu **Livello** e del menu di ogni livello.

![Il menu Livello con Ribbon attivo, con Unisci livelli ritagliati, Unisci visibili, Crea livello dai visibili e Appiattisci immagine.](shot:layers/merging-menu)

Ogni unione è un singolo passaggio di annullamento. Un
[livello fotografico](/it/docs/layers/types/) perde la foto originale quando lo
unisci. Non puoi unire livelli mentre modifichi un livello di selezione o la
Maschera veloce, né durante una trasformazione.

## Unisci sotto

Puoi unire il livello attivo al livello sottostante.

Esegui una delle seguenti operazioni:

- Scegli **Livello > Unisci sotto**.
- Premi **Ctrl+E** (non nella mappa dei tasti Stile GIMP).

Il livello unito prende il nome, la posizione, il ritaglio e **Blocca alfa** del
livello inferiore, con opacità al 100%, metodo di fusione Normale e nessuna
maschera. È un riferimento se lo era uno dei due livelli.

Entrambi i livelli devono essere visibili, non bloccati e impostati su Normale.
Il livello sottostante non può essere un filtro, e non può essere ritagliato a
meno che non lo sia anche il livello attivo.

## Unisci livelli ritagliati

Con una base di ritaglio attiva, **Unisci sotto** diventa
**Unisci livelli ritagliati**. Il comando unisce la base e i suoi livelli
ritagliati visibili in un solo livello con il nome della base. I livelli
ritagliati nascosti restano ritagliati sul livello unito.

Il comando diventa **Unisci livelli ritagliati** anche per un filtro ritagliato,
o per un filtro collegato a un livello ritagliato o che fa da base di ritaglio.
La base deve essere visibile e impostata su Normale, e almeno un livello
ritagliato deve essere visibile.

## Applica effetto al livello sottostante

Con un filtro attivo, **Unisci sotto** diventa
**Applica effetto al livello sottostante**, a meno che il filtro non faccia parte
di una pila di ritaglio. Il comando applica il filtro al livello sottostante o al
livello a cui è collegato (vedi
[Come si applicano i filtri](/it/docs/filters/how-filters-apply/)).

## Unisci gruppo

Con un gruppo attivo, **Livello > Unisci gruppo** prende il posto di
**Unisci sotto**.

Il gruppo diventa un solo livello con il metodo di fusione e l'opacità del
gruppo. Attraversa diventa Normale. La maschera del gruppo viene applicata, e i
livelli nascosti all'interno del gruppo vengono scartati.

Il gruppo deve essere visibile e non bloccato, e non può contenere livelli di
selezione.

## Unisci visibili

Scegli **Livello > Unisci visibili** per unire tutti i livelli visibili,
compreso il livello **Carta**, in un solo livello. I livelli nascosti restano come sono.

Il livello unito prende il nome e la posizione del livello visibile più in basso
(**Carta**, se è visibile). I livelli nascosti che erano ritagliati su un
livello unito vengono sganciati. I livelli visibili devono essere non bloccati,
e i gruppi tra di essi non possono contenere livelli di selezione.

## Crea livello dai visibili

Scegli **Livello > Crea livello dai visibili** per aggiungere in cima all'elenco
un nuovo livello in cui è unito tutto ciò che è visibile. Tutti gli altri livelli
restano.

Il nuovo livello si chiama «Visible», copre la tela e diventa il livello attivo.
I livelli bloccati non impediscono **Crea livello dai visibili**.

## Appiattisci immagine

Scegli **Livello > Appiattisci immagine** per unire tutti i livelli visibili in
un solo livello. I livelli nascosti e i pixel fuori dalla tela vengono scartati,
ma i livelli di selezione fuori dai gruppi restano. I livelli visibili devono
essere non bloccati.

![L'avviso sopra la tela con la scritta «L'appiattimento scarta 2 livelli nascosti» e un pulsante Appiattisci immagine.](shot:layers/merging-flatten-notice)

Se il disegno ha livelli nascosti, un avviso sopra la tela ne indica il numero,
per esempio «L'appiattimento scarta 2 livelli nascosti». Non cambia nulla finché non
selezioni **Appiattisci immagine** nell'avviso.
