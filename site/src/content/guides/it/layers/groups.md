---
title: "Gruppi e mescolanze"
description: "Mantieni insieme i livelli correlati e modifica il modo in cui si combinano i colori."
purpose: "Man mano che un disegno cresce, i gruppi mantengono insieme i livelli correlati in modo che l'elenco rimanga facile da leggere. Le modalità di fusione modificano il modo in cui i colori di un livello si mescolano con i livelli sottostanti, il che è utile per ombre, luci e sfumature di colore."
techniques: ["Metti i livelli correlati in un gruppo.", "Prova una modalità di fusione su un livello di ombreggiatura.", "Mantieni in ordine un lungo elenco di livelli."]
figure: "1: Pila di livelli. 2: modalità di fusione. 3: pulsante Nuovo gruppo."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: Pila di livelli. 2: modalità di fusione. 3: pulsante Nuovo gruppo."}
---

## Livelli correlati al gruppo

Seleziona **New group** nella parte inferiore del pannello Livelli, quindi trascina i livelli al suo interno. Ad esempio, potresti mantenere i colori, l'ombreggiatura e la grafica di un personaggio in un gruppo e lo sfondo in un altro. Seleziona la freccia accanto a un gruppo per ripiegarlo quando non hai bisogno di vederne il contenuto.

Nascondere un gruppo nasconde tutto al suo interno. Se un livello sembra essere scomparso anche se il suo occhio è acceso, controlla se il gruppo in cui si trova è nascosto. Mantieni i livelli ritagliati direttamente sopra il loro livello di base quando li sposti in un gruppo, in modo che rimangano attaccati ad esso.

## Prova una modalità di fusione

Seleziona un livello di ombreggiatura e apri il menu della modalità di fusione sopra l'elenco. **Multiply** scurisce i colori sottostanti, il che lo rende ottimo per le ombre. **Screen** li schiarisce, adattandosi ai bagliori e ai colpi di sole. **Normal** dipinge semplicemente su ciò che è sotto e le altre modalità mescolano i colori a modo loro.

Nascondi e mostra il livello per confrontare il risultato. Se l'effetto è troppo forte, abbassa l'opacità del livello invece di ridipingerlo.

## Mantieni la lista in ordine

I gruppi mantengono un lungo elenco in ordine mentre ogni livello rimane modificabile e puoi ripiegare i gruppi su cui non stai lavorando. Se hai bisogno di una singola immagine piatta per un'altra app, [esporta](/it/docs/output/export/) una copia e conserva il file `.capy` con tutti i suoi livelli.

Per le modifiche di colore che desideri continuare a regolare, come luminosità o saturazione, utilizza un livello filtro da [Filtri e regolazioni](/it/docs/filters/overview/) invece di dipingere la modifica in un livello.
