---
title: "Riempimenti e sfumature"
description: "Riempi un'area con un clic o con una sfumatura uniforme da un colore all'altro."
purpose: "Lo strumento Riempimento versa il colore in un'area con un solo clic, che è il modo più rapido per colorare una grafica al tratto. Una sfumatura si fonde invece uniformemente da un colore all'altro, il che è utile per cieli, sfondi e luci soffuse."
techniques: ["Riempi un'area all'interno della tua grafica con un clic.", "Disegna un gradiente lineare o radiale.", "Mantieni un riempimento o una sfumatura all'interno di una selezione."]
figure: "1: tipi di gradiente nel set di strumenti. 2: Colori di primo piano e di sfondo. 3: il livello che riceve il gradiente."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: tipi di gradiente nel set di strumenti. 2: Colori di primo piano e di sfondo. 3: il livello che riceve il gradiente."}
---

## Riempi un'area con un clic

Scegli lo strumento **Fill** o premi **F** e fai clic all'interno di un'area per riempirla con il colore di primo piano. Per colorare un disegno al tratto che si trova su un altro livello, contrassegnare innanzitutto il livello del disegno al tratto come riferimento con **Layer Settings → Use as reference** e scegliere **Reference layers** in Set strumenti. Quindi seleziona il livello vuoto su cui vuoi dipingere e fai clic all'interno dell'area. Il riempimento si ferma alle linee, anche se si trovano su un livello diverso.

Se il riempimento fuoriesce da un piccolo spazio nelle linee, sollevare **Close gaps** nel pannello Strumenti. **Expansion** spinge leggermente il riempimento sotto le linee, in modo che non rimanga alcun bordo bianco sottile tra il colore e l'inchiostro.

## Scegli i colori e il livello

È più semplice modificare una sfumatura in un secondo momento se dispone di un livello proprio, quindi aggiungi prima un nuovo livello. Scegli quindi i due colori nel pannello **Color**: il gradiente inizia con il colore di primo piano e termina con il colore di sfondo.

Scegli lo strumento **Gradient**, quindi scegli un tipo in **Tool Set**. I gradienti **Linear** si fondono in una linea retta e i gradienti **Radial** si estendono in un cerchio a partire da un punto centrale. Le versioni *da colore a chiaro* sfumano il colore di primo piano fino a renderlo trasparente invece di fondersi con il colore di sfondo.

## Trascina per disegnarlo

Per un gradiente lineare, trascina da dove dovrebbe essere il primo colore a dove dovrebbe essere il secondo colore. Per un gradiente radiale, inizia dal centro e trascina verso l'esterno. Un breve trascinamento effettua un rapido cambio tra i colori, mentre un lungo trascinamento diffonde la fusione su una parte maggiore del disegno.

Se il risultato non è corretto, annulla e trascina nuovamente. Spesso sono necessari un paio di tentativi per trovare l'angolo e la lunghezza giusti.

## Tienilo dove vuoi

Se è attiva una [selezione](/it/docs/tools/selections/), il gradiente riempie solo l'area selezionata. Deseleziona in seguito in modo che i tuoi colpi successivi possano andare ovunque. Per un confine che potresti voler modificare in seguito, utilizza una [mask](/it/docs/layers/masks/) invece di una selezione. Poiché la sfumatura si trova su un livello separato, puoi anche ammorbidirla in seguito riducendo l'opacità del livello.
