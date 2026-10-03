---
title: "Rendering"
description: "Aggiungi ombreggiatura e texture sui livelli ritagliati su ciascuna forma, quindi esporta il risultato."
purpose: "Il rendering è il luogo in cui le forme ottengono la loro luce e ombra. Dipingere l'ombreggiatura sui livelli ritagliati la mantiene automaticamente all'interno di ogni forma e, poiché l'ombreggiatura è separata dal colore di base, puoi regolarla o rifarla senza perdere nulla."
techniques: ["Aggancia uno strato di ombreggiatura al nastro.", "Controlla la forza dell'ombreggiatura.", "Ombreggia le altre forme, controlla i livelli ed esporta."]
figure: "1: Trama del nastro e ombreggiatura del nastro sopra il nastro. 2: aggancia al livello sottostante. 3: Opacità del livello per l'intera passata di ombreggiatura."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Trama del nastro e ombreggiatura del nastro sopra il nastro. 2: aggancia al livello sottostante. 3: Opacità del livello per l'intera passata di ombreggiatura."}
---

## 1. Aggiungi ombreggiatura ritagliata

Seleziona **Ribbon**, aggiungi un nuovo livello direttamente sopra di esso e chiamalo **Ribbon shading**. Apri il suo menu e scegli **Layer Settings → Clip to layer below**. Ora dipingi le ombre nelle pieghe del nastro con **Watercolor Wash** e aggiungi qualche accento salvia con **Paintbrush**. I tuoi tratti possono oltrepassare il bordo del nastro, perché è visibile solo la parte all'interno del nastro.

Per ora lascia la modalità di fusione del livello di ombreggiatura su **Normal**. Il colore di base rimane al sicuro sul livello della barra multifunzione, quindi la cancellazione dell'ombreggiatura non cancella mai il colore sottostante.

## 2. Controlla la forza

L'opacità del pennello modifica i tratti che stai per dipingere. Lo **opacity of the Ribbon shading layer** cambia tutte le sfumature che hai già dipinto. Se ogni ombra sembra troppo forte, abbassa l'opacità del livello invece di ridipingere.

Per le luci, aggiungi **Ribbon texture** direttamente sopra l'ombreggiatura del nastro e ritaglia anche questo. Usa una piccola matita o un pennello strutturato per alcuni segni leggeri. L'ordine dei livelli ora è Texture nastro, Ombreggiatura nastro, quindi Nastro. [Le impostazioni del pennello](/it/docs/advanced/brush-engine/) spiegano l'opacità e il flusso in modo più dettagliato.

## 3. Termina ed esporta

Ombreggia **Disc** e **Block** allo stesso modo, ciascuno con i propri strati ritagliati. L'esempio utilizza l'aerografo per l'ombreggiatura morbida sul disco e la matita per piccoli segni di tratteggio color crema. Tieni **Line art** sopra ogni cosa. Se è necessario fissare il bordo esterno di una forma, dipingi sulla maschera di quella forma; se solo l'ombreggiatura è sbagliata, cambia il livello dell'ombreggiatura. [Maschere e ritaglio](/it/docs/layers/masks/) mostra anche come ricolorare l'inchiostro con il blocco alfa.

Quando sei soddisfatto, nascondi gli strati grezzi, salva il tuo file `.capy` ed [esporta un'immagine](/it/docs/output/export/) da condividere. Apri il file esportato una volta per verificare che abbia l'aspetto previsto.
