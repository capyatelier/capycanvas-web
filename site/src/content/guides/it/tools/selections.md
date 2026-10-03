---
title: "Strumenti di selezione"
description: "Seleziona parte del tuo disegno in modo che le modifiche influiscano solo su quell'area."
purpose: "Una selezione contrassegna la parte del disegno su cui vuoi lavorare. Mentre è attivo, dipingere, riempire e trasformare influisce solo sull'area selezionata, quindi il resto del disegno rimane al sicuro. Capy Canvas dispone di strumenti di selezione per forme semplici, contorni a mano libera e aree di colore simile."
techniques: ["Scegli lo strumento di selezione giusto.", "Aggiungere o sottrarre da una selezione.", "Compila una selezione e cancellala quando hai finito."]
figure: "1: Strumenti di selezione nel Set Strumenti. 2: Modalità di selezione, opzioni di sfumatura e forma. 3: una selezione ellittica attorno al disco."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Strumenti di selezione nel Set Strumenti. 2: Modalità di selezione, opzioni di sfumatura e forma. 3: una selezione ellittica attorno al disco."}
---

## Scegli uno strumento di selezione

In Paint, scegli **Lasso selection** o **Auto select** nella barra degli strumenti e Set strumenti elencherà tutti gli strumenti di selezione. In Sketch, si trovano sotto il pulsante **Select** e Photo ne mantiene la maggior parte nella barra degli strumenti.

**Rectangle select** e **Ellipse select** disegnano forme semplici; tieni premuto **Shift** per un quadrato o un cerchio e **Alt** per disegnare dal centro. **Lasso selection** segue la penna a mano libera e **Polygonal lasso** unisce linee rette tra i punti su cui fai clic; fare nuovamente clic sul primo punto o premere **Enter** per chiuderlo. **Auto select** seleziona un'area di colore simile con un clic e **Select by color** seleziona contemporaneamente tutte le aree di quel colore. Altri due strumenti, **Paint selection** e **Tonal range**, hanno le proprie pagine: [Maschera veloce e livelli di selezione](/it/docs/selections/quick-mask/) e [Seleziona per luminosità](/it/docs/selections/tonal-range/).

## Combina e ammorbidisci le selezioni

I quattro pulsanti nella parte superiore del pannello **Tool** scelgono cosa succede quando si effettua un'altra selezione. Può sostituire quello corrente, aggiungerlo, sottrarlo o mantenere solo l'area in cui i due si sovrappongono. Puoi anche tenere premuto **Shift** per aggiungere o **Alt** per sottrarre, senza cambiare i pulsanti.

**Feather radius** ammorbidisce il bordo della selezione, in modo che la pittura e le regolazioni svaniscano gradualmente invece di fermarsi su una linea netta. Per la selezione automatica, **Tolerance** controlla quanto diverso un colore può essere ed essere comunque incluso, e **Close gaps** impedisce alla selezione di fuoriuscire attraverso piccole interruzioni nella grafica al tratto.

## Usa la selezione

Per selezionare tutto ciò che è dipinto su un livello, tieni premuto **Ctrl** e fai clic sulla miniatura del livello. Con una selezione attiva, dipingi liberamente: i tratti arrivano solo al suo interno. Scegli **Edit → Fill selection** per riempirlo con il colore corrente o trasformalo in una [maschera di livello](/it/docs/layers/masks/). Il menu **Select** può anche invertire la selezione, ingrandirla o ridurla di alcuni pixel o ripristinare l'ultima selezione con **Reselect**.

Quando hai finito, scegli **Select → Deselect pixels** così i tuoi colpi successivi potranno andare ovunque.
