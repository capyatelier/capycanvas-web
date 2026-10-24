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
- In Schizzo, scegli uno sfumino nel cassetto **Modella**.
- Cerca **Sfuma** nella ricerca comandi.

Scegli un set e uno sfumino in **Set di strumenti**. **Sfumino** è lo sfumino
predefinito.

| Set | Sfumini |
| --- | --- |
| **Sfuma** | **Sfumino**, **Sfumino morbido**, **Sfocatura**, **Sfumino di carta**, **Fazzoletto di carta**, **Sfumino granuloso**, **Sfumino che preserva la texture**, **Sfumino della tinta** |
| **Colore fresco** | **Sfumino naturale**, **Sfumino bagnato**, **Miscelatore di colori**, **Spatola per sfumare**, **Sfumino a setole** |
| **Effetti** | **Sfumino pittorico**, **Sfumino a pettine**, **Sfumino sparso**, **Nitidezza**, **Marmorizzazione**, **Sfumino cristallino**, **Sfumino a retino** |

Le impostazioni di ogni sfumino si trovano in
[Mescolanza, diffusione e setole](/it/docs/brushes/wet-media/).

## Fluidifica

Esegui una delle seguenti operazioni:

- Premi **J** mentre Sfuma è attivo.
- In Pittura o Foto, seleziona **Fluidifica** nella barra strumenti Strumenti. Fai clic con il pulsante destro sul pulsante o tienilo premuto per scegliere una modalità.
- In Schizzo, scegli una modalità nel set **Fluidifica** del cassetto **Modella**.
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
| **Bordo** | Attira i pixel verso la linea del tratto da entrambi i lati. |
| **Ricostruisci** | Annulla sotto il pennello la deformazione di Fluidifica. |

Fluidifica non ha un pulsante Applica. Ogni tratto modifica il livello ed è un
passaggio di annullamento a sé. I tratti continuano a deformare i pixel che il
livello aveva prima del primo tratto, finché non dipingi sul livello, lo riempi,
lo filtri, lo trasformi o ci incolli.

## Regola Fluidifica e Ripristina Fluidifica

Puoi ridurre tutto ciò che Fluidifica ha fatto a un livello con **Regola
Fluidifica**, oppure riportare il livello ai suoi pixel precedenti al primo
tratto con **Ripristina Fluidifica**.

Esegui una delle seguenti operazioni:

- Nel pannello **Strumento**, attiva **Regola Fluidifica** o seleziona **Ripristina Fluidifica**.
- Cerca **Regola Fluidifica** o **Ripristina Fluidifica** nella ricerca comandi.

Con **Regola Fluidifica** attivo, nel pannello **Strumento** compare un cursore
**Intensità**. Al 100% la deformazione resta com'è, e allo 0% è sparita.
Rilasciare il cursore è un passaggio di annullamento, e lo è anche **Ripristina
Fluidifica**.

Entrambi i comandi non sono disponibili, con il messaggio «Applica prima
Fluidifica a questo livello», finché il livello non ha modifiche di Fluidifica.

## Impostazioni di Fluidifica

![Il pannello Strumento per Fluidifica: cristalli con Intensità, il gruppo Fluidifica che mostra Distorsione e Inerzia, e Regola Fluidifica e Ripristina Fluidifica.](shot:drawing/liquify-settings)

**Distorsione** e **Inerzia** si trovano nel gruppo **Fluidifica** del pannello **Strumento**.

### Intensità

Imposta di quanto ogni impronta sposta i pixel. L'effetto è più debole con una
pressione leggera della penna e verso il bordo di una punta morbida.

### Distorsione

Rende irregolare il movimento. Su **Fluidifica: cristalli** imposta quanto si
sparpagliano le celle. **Ricostruisci** non ha **Distorsione**.

### Inerzia

Porta avanti l'effetto lungo l'ultima direzione del tratto dopo che sollevi la
penna. **Ricostruisci** non ha **Inerzia**.

## Cassetto Modella in Schizzo

In Schizzo, seleziona **Modella** nella barra del titolo per usare l'ultimo
strumento Sfuma, Fluidifica o Ritocco, selezionalo di nuovo per aprire il suo
cassetto, e un'altra volta per chiuderlo. Il cassetto elenca i set, gli strumenti
del set scelto e le loro impostazioni. **Modella** e **Pennello** conservano
ciascuno il proprio ultimo predefinito e la propria dimensione del pennello.

![Il cassetto Modella in Schizzo con i set Sfuma, Colore fresco, Effetti, Fluidifica e Ritocco a sinistra, gli sfumini del set Sfuma al centro e le impostazioni di Sfumino a destra.](shot:drawing/sketch-sculpt-drawer)

## Dipingere su una maschera

Su una maschera, Sfuma e Fluidifica dipingono una copertura uniforme senza
spalmare né spostare i pixel. Il primo tratto di questo tipo su ogni maschera
mostra un avviso.
