---
title: "Schizzi"
description: "Disegna uno schizzo a matita e prova i colori su un livello separato."
purpose: "Uno schizzo è il luogo in cui elabori le forme, mentre un colore grezzo è il luogo in cui provi i colori. Mantenerli su livelli separati significa che puoi cambiare i colori tutte le volte che vuoi senza toccare le linee della matita."
techniques: ["Disegna con una matita e la pressione della penna.", "Seleziona e correggi parte dello schizzo.", "Metti i colori grezzi su uno strato sotto lo schizzo."]
figure: "1: Pennelli a matita. 2: Sketch sopra Colore grezzo in strati. 3: Dimensioni e opacità della matita."
related: ["tools/selections", "tools/transforms", "painting/color"]
image: {"light": "/assets/guides/illustration-draft-light.webp", "dark": "/assets/guides/illustration-draft-dark.webp", "alt": "1: Pennelli a matita. 2: Sketch sopra Colore grezzo in strati. 3: Dimensioni e opacità della matita."}
---

## 1. Disegna lo schizzo

Aggiungi un nuovo livello e chiamalo **Sketch**. Scegli lo strumento **Pencil** e una delle matite nel set di strumenti. Inizia con linee leggere per trovare il disco, il nastro curvo e il blocco inclinato, quindi premi più forte per fissare i contorni che desideri mantenere. Imposta la dimensione della matita nel pannello Strumenti.

Lascia un po' di spazio attorno alle forme. Rende le fasi successive più facili, perché sarai in grado di vedere chiaramente dove finisce ogni forma. Di tanto in tanto, seleziona **Flip view horizontally** nella barra degli strumenti in alto per vedere lo schizzo specchiato; gli errori proporzionali sono molto più facili da individuare in questo modo.

## 2. Correggi una parte che non è del tutto corretta

Se una parte è nel posto sbagliato o ha le dimensioni errate, non è necessario ridisegnarla. Scegli **Lasso selection** e disegna un anello attorno a quella parte. Quindi scegli **Scale / rotate**, trascina la parte in posizione o ridimensionala e seleziona **Apply transform**. Scegli **Select → Deselect pixels** prima di continuare a disegnare.

Le guide [selection](/it/docs/tools/selections/) e [transform](/it/docs/tools/transforms/) spiegano questi strumenti in modo più dettagliato. Se una modifica va storta, basta annullarla.

## 3. Prova i colori

Aggiungi un altro livello denominato **Color rough** e trascinalo sotto Sketch. Per ogni forma, scegli un colore, disegna attorno alla forma con **Lasso selection** e scegli **Edit → Fill selection**. L'esempio utilizza verde acqua per il nastro, ocra per il disco e terracotta per il blocco. Questi sono colori grezzi, quindi non è necessario che i bordi siano puliti. Abbassa leggermente l'opacità del livello in modo che le linee della matita rimangano facili da vedere.

Nascondi Colore grezzo per un momento ogni volta che vuoi vedere lo schizzo da solo. Salva il tuo disegno, quindi continua con [Line art](/it/docs/illustration/ink/).
