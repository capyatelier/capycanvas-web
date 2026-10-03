---
title: "Salva e ripristina le impostazioni del pennello"
description: "Mantieni le regolazioni del pennello, provane di nuove e torna alle impostazioni predefinite."
purpose: "Quando modifichi le impostazioni di un pennello, Capy Canvas le ricorda come parte del tuo spazio di lavoro. Non è necessario salvare nulla a mano. Se vuoi sperimentare senza perdere una configurazione che ti piace, crea prima una copia dell'area di lavoro."
techniques: ["Mantieni le modifiche nell'area di lavoro corrente.", "Prova una configurazione diversa in una copia dell'area di lavoro.", "Reimposta i pennelli senza modificare il layout."]
figure: "1: area di lavoro attiva. 2: Impostazioni del pennello salvate con esso. 3: conferma Ripristina tutti i pennelli."
related: ["advanced/brush-engine", "workspace/management"]
image: {"light": "/assets/guides/advanced-custom-brushes-light.webp", "dark": "/assets/guides/advanced-custom-brushes-dark.webp", "alt": "1: area di lavoro attiva. 2: Impostazioni del pennello salvate con esso. 3: conferma Ripristina tutti i pennelli."}
---

## Le tue modifiche vengono conservate per te

Scegli un pennello e modifica le sue impostazioni nel pannello **Tool**. Quando passi a un altro pennello e torni più tardi, le modifiche sono ancora presenti. Ogni area di lavoro ricorda separatamente le impostazioni per ogni pennello, insieme agli strumenti utilizzati per ultimi e al modo in cui sono disposti i pannelli.

Le impostazioni del pennello appartengono all'area di lavoro, non ai tuoi disegni. L'apertura di un disegno non modifica i pennelli e il salvataggio di un disegno non li salva.

## Prova un'altra configurazione

Per sperimentare in libertà, scegli **Window → Workspaces → New Workspace…**. Ciò crea una copia dell'area di lavoro corrente, con i suoi pennelli e il layout, con un nuovo nome. Apporta le modifiche nella copia. Tornando all'area di lavoro originale, le impostazioni vengono ripristinate esattamente come le avevi lasciate.

[Gestisci spazi di lavoro](/it/docs/workspace/management/) spiega come passare da un'area di lavoro all'altra e scegliere quali visualizzare nella barra del titolo.

## Ricominciare da capo

**Window → Workspaces → Reset All Brushes…** riporta tutti i pennelli nell'area di lavoro corrente alle impostazioni originali, inclusi i pennelli che non stai utilizzando in questo momento. I tuoi disegni e il layout del tuo pannello non saranno interessati.

Se invece desideri che i pannelli tornino al punto di partenza, utilizza **Restore Starting Layout…**. Ciò ripristina i pannelli ma mantiene le impostazioni del pennello, quindi i due ripristini non annullano mai il lavoro dell'altro.
