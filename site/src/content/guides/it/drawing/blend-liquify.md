---
title: "Sfuma e Fluidifica"
description: "Gli strumenti Sfuma e Fluidifica per sfumare il colore e spostare i pixel su un livello."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

Puoi spalmare e mescolare il colore su un livello con **Sfuma**, e spostarne i
pixel con **Fluidifica**.

## Sfuma

Esegui una delle seguenti operazioni:

- Premi **J**.
- In Pittura, seleziona **Sfuma** nella barra strumenti Strumenti. Lo stesso pulsante contiene **Timbro clone**.
- In Foto, seleziona **Sfuma** nella barra strumenti Strumenti.
- In Schizzo, scegli **Sfuma** nel cassetto **Modella**.
- Cerca **Sfuma** nella ricerca comandi.

Sfuma ha due predefiniti, **Sfumino naturale** e **Sfumino**. Entrambi partono
con **Carica di colore** allo 0% e non portano un colore proprio. **Prelievo del
colore** imposta quanto lontano trascinano il colore lungo il tratto
([Mescolanza, diffusione e setole](/it/docs/brushes/wet-media/)).

## Fluidifica

Esegui una delle seguenti operazioni:

- Premi **J** mentre Sfuma è attivo.
- In Pittura o Foto, seleziona **Fluidifica** nella barra strumenti Strumenti. Fai clic con il pulsante destro sul pulsante o tienilo premuto per scegliere una modalità.
- In Schizzo, scegli **Fluidifica** nel cassetto **Modella**.
- Cerca **Fluidifica** nella ricerca comandi.

Ogni modalità è un predefinito in **Set di strumenti**:

| Predefinito | Effetto |
| --- | --- |
| **Fluidifica: spingi** | Trascina i pixel lungo il tratto. |
| **Fluidifica: vortice antiorario** | Ruota i pixel in senso antiorario attorno al centro del pennello. |
| **Fluidifica: vortice orario** | Ruota i pixel in senso orario attorno al centro del pennello. |
| **Fluidifica: contrai** | Attira i pixel verso il centro del pennello. |
| **Fluidifica: espandi** | Spinge i pixel lontano dal centro del pennello. |
| **Fluidifica: cristalli** | Spezza l'immagine sotto il pennello in piccole celle sparse. |

## Impostazioni di Fluidifica

![Il pannello Strumento per Fluidifica: cristalli, con il gruppo Fluidifica che mostra Intensità e Distorsione.](shot:drawing/liquify-settings)

**Intensità**, **Distorsione** e **Inerzia** si trovano nel gruppo
**Fluidifica** del pannello **Strumento**. Fluidifica non ha **Flusso**.

### Intensità

Imposta di quanto ogni impronta sposta i pixel. L'effetto è più debole con una
pressione leggera della penna e verso il bordo di una punta morbida.

### Distorsione

Imposta quanto **Fluidifica: cristalli** sparpaglia i pixel. Nessun'altra
modalità ha questa impostazione.

### Inerzia

Fa sì che **Fluidifica: spingi** porti i pixel più lontano di quanto si muova la
penna, e compare solo in questa modalità.

## Cassetto Modella in Schizzo

In Schizzo, **Modella** nella barra del titolo contiene Sfuma, Fluidifica e gli
strumenti di ritocco.

- Seleziona **Modella** per usare l'ultimo predefinito di modellazione. La prima volta è **Sfumino naturale**.
- Seleziona di nuovo **Modella** per aprire il suo cassetto, e un'altra volta per chiuderlo.

Il cassetto ha tre colonne. **Modellazione** elenca **Sfuma**, **Fluidifica**,
**Clona**, **Correggi** e **Correggi al volo**. **Strumenti** elenca i
predefiniti del gruppo scelto e **Strumento** contiene le loro impostazioni.

**Modella** e **Pennello** conservano ciascuno il proprio ultimo predefinito e la
propria dimensione del pennello.

![Il cassetto Modella in Schizzo con Fluidifica scelto in Modellazione e i sei predefiniti di Fluidifica in Strumenti.](shot:drawing/sketch-sculpt-drawer)

## Dipingere su una maschera

Su una maschera, Sfuma e Fluidifica dipingono una copertura uniforme senza
spalmare né spostare i pixel. Il primo tratto di questo tipo su ogni maschera
mostra un avviso.
