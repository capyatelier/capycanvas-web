---
title: "Filtri e regolazioni"
description: "Aggiungi un filtro modificabile e modifica le sue impostazioni quando vuoi."
purpose: "I filtri modificano l'aspetto dei livelli sottostanti, da semplici regolazioni di luminosità e colore a sfocature ed effetti artistici. Ogni filtro ha il suo livello, quindi puoi regolarlo, nasconderlo o rimuoverlo in seguito senza toccare la vernice sottostante."
techniques: ["Trova e aggiungi un filtro.", "Modifica le sue impostazioni in Proprietà.", "Limita un filtro a una parte del disegno."]
figure: "1: pannello Filtri. 2: Il livello di regolazione in Livelli. 3: scheda Proprietà per modificarlo."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1: pannello Filtri. 2: Il livello di regolazione in Livelli. 3: scheda Proprietà per modificarlo."}
---

## Aggiungi un filtro

Seleziona il livello sopra il quale dovrebbe trovarsi il filtro, quindi apri il pannello **Filters**. I filtri sono ordinati in gruppi come Tono, Colore, Sfocatura e Artistico e puoi digitarne uno nella casella di ricerca per trovarne uno per nome, ad esempio **Curves** o **Gaussian Blur**. Scegli un filtro per aggiungerlo come nuovo livello. Il menu **Filter** nella parte superiore della finestra elenca gli stessi filtri.

In Sketch, il pulsante **Filters** nella barra del titolo apre invece un cassetto. Scegli un gruppo a sinistra, quindi un filtro e le sue impostazioni verranno visualizzate a destra.

## Modificare le impostazioni

Seleziona il livello del filtro e apri **Properties** per vederne le impostazioni. Alcuni filtri utilizzano i cursori, mentre altri utilizzano una curva o un colore. Modifica un'impostazione alla volta e guarda il disegno mentre procedi. Se desideri vedere come vengono distribuiti i toni dell'immagine mentre lavori, apri **View → Histogram…**.

Nascondi e mostra il livello del filtro per confrontare il risultato con l'originale o riduci la sua opacità per rendere l'intero effetto più delicato. Puoi tornare alle Proprietà in qualsiasi momento per modificare nuovamente le impostazioni.

## Limite dove applicabile

Un filtro influisce su tutto ciò che si trova sotto di esso nell'elenco dei livelli. Per tenerlo lontano da una parte del disegno, aggiungi un [mask](/it/docs/layers/masks/) al livello del filtro o inserisci il filtro all'interno di un gruppo in modo che influisca solo sui livelli di quel gruppo. Mantieni la grafica al tratto e gli altri dettagli che non desideri modificare sopra il filtro.

Quando utilizzi più filtri, il loro ordine è importante, quindi prova a spostarli verso l'alto o verso il basso se il risultato non è quello previsto. Per un esempio completo con una foto, vedere [Modifica una foto](/it/docs/filters/image-editing/).
