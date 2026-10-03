---
title: "Maschere e ritagli"
description: "Nascondi parti di un livello senza cancellarle e mantieni l'ombreggiatura all'interno di una forma."
purpose: "Una maschera nasconde parte di un livello senza eliminare la vernice, quindi puoi sempre cambiare idea su dove dovrebbe essere il bordo. Il ritaglio mantiene un livello all'interno della forma del livello sottostante, che è il modo più semplice per aggiungere un'ombreggiatura che non fuoriesca mai dalle linee."
techniques: ["Crea una maschera da una selezione.", "Paint su una maschera per mostrare o nascondere la vernice.", "Aggancia l'ombreggiatura al livello sottostante."]
figure: "1: miniatura della maschera della barra multifunzione. 2: Ombreggiatura ritagliata sopra il nastro. 3: Clip al livello sottostante e controlli Alpha Lock."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: miniatura della maschera della barra multifunzione. 2: Ombreggiatura ritagliata sopra il nastro. 3: Clip al livello sottostante e controlli Alpha Lock."}
---

## Crea una maschera da una selezione

Per prima cosa [seleziona](/it/docs/tools/selections/) l'area che desideri mantenere visibile. Quindi apri il menu del livello e scegli **Mask → Mask: reveal selection**. Tutto ciò che è esterno alla selezione viene nascosto, ma nulla viene cancellato. Puoi anche scegliere **Mask: hide selection** per nascondere l'area selezionata. Ricordati di deselezionare in seguito, in modo che i tratti successivi non siano limitati alla selezione.

Una maschera può mostrare solo la vernice effettivamente presente sul livello. Se pensi di voler allargare la forma in un secondo momento, riempi l'intero livello con il colore prima di mascherarlo, come fa la [fase di mascheramento](/it/docs/illustration/mask/) del tutorial.

## Paint sulla maschera

Fai clic sulla miniatura della maschera accanto al livello per modificare la maschera anziché la vernice. Ora qualsiasi pennello rivela una parte maggiore dello strato ovunque dipingi e **Eraser** lo nasconde di nuovo. Il colore con cui dipingi non ha importanza su una maschera. Quando hai finito, fai clic sulla miniatura della pittura per tornare a dipingere normalmente.

Il menu della maschera può disattivare la maschera per un momento, invertirla o eliminarla. Spegnerlo è un modo pratico per confrontare il risultato con la vernice sottostante.

## Aggancia l'ombreggiatura a una forma

Aggiungi un nuovo livello direttamente sopra un livello base, apri il suo menu e scegli **Layer Settings → Clip to layer below**. Qualunque cosa dipingi sullo strato ritagliato ora mostra solo dove c'è vernice sullo strato di base, così puoi ombreggiare liberamente senza andare oltre i bordi. Puoi impilare diversi livelli ritagliati sopra la stessa base, uno per le ombre e un altro per le luci.

**Alpha lock** è un'alternativa più semplice quando desideri ricolorare tratti già esistenti, come la grafica al tratto. Mantiene la nuova vernice all'interno dei tratti esistenti sullo stesso livello. La [fase di rendering](/it/docs/illustration/render/) del tutorial utilizza entrambi.
