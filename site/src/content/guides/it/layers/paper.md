---
title: "Carta"
description: "Colore e trama della Carta, carte importate, scala, illuminazione e limiti del livello."
related: ["layers/types", "layers/panel", "brushes/dry-media", "files/new"]
---

La Carta fornisce il colore di sfondo del disegno e la trama a cui reagiscono i pennelli con **Intensità della trama**.

## Riga Carta

![Una riga Carta con le miniature del colore e della trama.](shot:layers/paper-row)

La Carta rimane sotto i livelli ordinari. La prima miniatura apre **Modifica colore** e quella della trama apre **Scegli grana**. Seleziona la riga per modificarne le impostazioni in **Proprietà**.

Puoi nascondere o eliminare la Carta. Se il disegno non ha Carta, seleziona **Aggiungi carta** in fondo al pannello Livelli per ripristinarla.

![Aggiungi carta sotto l'elenco dei livelli.](shot:layers/add-paper)

Un disegno può contenere una sola Carta. La Carta non può avere una maschera, diventare un livello di ritaglio, essere spostata sopra un altro livello o essere usata come livello di selezione.

## Scegliere una trama

Seleziona la miniatura della trama sulla riga Carta, oppure **Scegli grana** in **Proprietà**. Scegli una carta e seleziona **Usa grana**.

![Le carte integrate in Scegli grana.](shot:layers/paper-choose-texture)

La libreria è un'unica griglia scorrevole, ordinata dalle carte per acquerello e da disegno alle trame di superficie come cemento, legno e sabbia. Le carte con una direzione della grana vengono in coppie **orizzontale** e **verticale**.

**Importa…** aggiunge un'immagine, RGB o in scala di grigi, alla fine della griglia come trama di carta riutilizzabile. Le carte importate sono incorporate nel disegno.

Apri il menu di una carta importata per **Rinomina…** o **Elimina**. Una carta incorporata nel disegno ma assente dalla libreria ha invece **Aggiungi alla libreria**.

![Il menu di una carta importata.](shot:layers/paper-imported-menu)

## Proprietà

![I controlli della Carta in Proprietà.](shot:layers/paper-properties)

### Colore

Imposta il colore della Carta.

### Grana

Apre **Scegli grana**.

### Scala

Imposta la scala fisica della trama, dal 25% al 400%. La tela mostra brevemente il rilievo della trama mentre cambi la scala.

### Visibilità della texture

Imposta quanto l'illuminazione della trama appare nell'immagine finita, da 0% a 300%. A 0%, l'illuminazione della trama è disattivata.

### Luce

Imposta la direzione della luce sulla trama della carta.

### Visibile attraverso il colore

Imposta quanta illuminazione della carta rimane visibile sul colore soprastante. A 0%, il colore opaco in modalità Normale copre l'illuminazione; al 100%, l'illuminazione interessa tutta l'immagine.

![Tratti sulla tela accanto al pannello Proprietà della Carta, impostata su Tela di lino con Visibilità della texture 55%, Luce 130° e Visibile attraverso il colore 100%.](shot:layers/paper-lighting)

Le esportazioni dell’app nativa includono l’illuminazione visibile della carta. L’editor web attualmente esporta senza illuminazione della carta. La breve anteprima della trama mostrata dopo aver cambiato **Grana** o **Scala** non viene esportata.

## Tratti e geometria

I nuovi tratti dei pennelli con **Intensità della trama** usano la Carta più vicina al livello o sotto di esso. Nascondere la Carta non impedisce alla trama di influenzare i nuovi tratti. Cambiare la trama o la sua scala non modifica i segni già disegnati.

La Carta usa la risoluzione di stampa del disegno per mantenere la scala fisica. **Immagine > Dimensioni immagine…** può cambiare tale risoluzione. Ridimensionare o ruotare l'immagine ricampiona la Carta insieme al disegno; il ritaglio non cambia la sua scala.
