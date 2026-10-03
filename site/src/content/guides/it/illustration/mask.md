---
title: "Mascheramento"
description: "Dai al nastro, al disco e al blocco i propri strati di colore con bordi modificabili."
purpose: "In questa fase, ogni forma ottiene il proprio strato di colore. Il colore riempie l'intero livello e una maschera decide quale parte di esso vedi. Poiché nulla viene cancellato, puoi regolare il bordo di qualsiasi forma in un secondo momento semplicemente dipingendo sulla sua maschera."
techniques: ["Seleziona una forma con un lazo o con la selezione automatica.", "Trasforma la selezione in una maschera e riempi il livello di colore.", "Paint sulla maschera per regolare il bordo."]
figure: "1: miniatura della maschera selezionata della barra multifunzione. 2: Nastro, disco e blocco sotto la linea art. 3: Gomma, che nasconde parti della maschera."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: miniatura della maschera selezionata della barra multifunzione. 2: Nastro, disco e blocco sotto la linea art. 3: Gomma, che nasconde parti della maschera."}
---

## 1. Seleziona una forma

Nascondi **Sketch** e **Color rough**. Scegli **Lasso selection** e traccia con attenzione il nastro, come nell'esempio.

Se la tua grafica al tratto è chiusa attorno a una forma, **Auto select** può farlo con un clic. Contrassegna **Line art** come livello di riferimento scegliendo **Layer Settings → Use as reference** nel suo menu. Quindi scegli **Auto select**, scegli **Sample reference layers** nel pannello Strumenti e fai clic all'interno della forma. [Strumenti di selezione](/it/docs/tools/selections/) spiega le impostazioni che controllano l'ampiezza della diffusione della selezione.

## 2. Crea il livello di colore mascherato

Aggiungi un nuovo livello denominato **Ribbon** sotto Line art. Con la selezione ancora attiva, apri il menu della barra multifunzione e scegli **Mask → Mask: reveal selection**. Il livello ora ha una maschera che mostra solo la forma del nastro.

Fai clic sulla miniatura della vernice del nastro e scegli il colore del nastro. Scegli **Select → Select all pixels** e poi **Edit → Fill selection** per riempire di colore l'intero strato e termina con **Select → Deselect pixels**. Si vede solo il nastro, ma il colore continua sotto la maschera, pronto per quando vorrai allargare la forma.

## 3. Regola il bordo

Fare clic sulla miniatura della maschera della barra multifunzione per modificare la maschera. Ora qualsiasi pennello rivela una parte maggiore del colore su cui dipingi e **Eraser** lo nasconde nuovamente. Fai di nuovo clic sulla miniatura della vernice quando desideri modificare il colore stesso.

Realizza **Disc** e **Block** allo stesso modo. Mantieni il disco sotto il nastro e il blocco sotto il disco, con la grafica al tratto sopra tutti e tre. Salva il tuo disegno, quindi continua con [Rendering](/it/docs/illustration/render/).
