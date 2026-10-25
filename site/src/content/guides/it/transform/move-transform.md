---
title: "Spostamento e trasformazione"
description: "Spostare e trasformare livelli, pixel selezionati e tracciati con lo strumento Operazione e con Trasforma."
related: ["selections/working", "layers/paths", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Puoi spostare livelli e pixel selezionati con lo strumento **Operazione**, e
scalarli, ruotarli, inclinarli, distorcerli o deformarli con **Trasforma**.

## Strumento Operazione

Esegui una delle seguenti operazioni:

- Apri il menu di un livello nel pannello Livelli e scegli **Sposta livello / maschera**.
- Premi **O**.
- In Pittura e Foto, seleziona **Operazione / Trasforma / Modifica punti** nella barra strumenti Strumenti. Fai clic con il pulsante destro sul pulsante o tienilo premuto per scegliere **Operazione**.
- Digita «Operazione» nella [ricerca comandi](/it/docs/start/command-search/).

Schizzo non ha un pulsante **Operazione**.

## Spostare i livelli

Senza selezione, trascina sulla tela per spostare i livelli selezionati. I tasti
freccia li spostano di 1 px, e di 10 px con **Maiusc**.

Non puoi spostare un livello bloccato.

## Spostare i pixel selezionati

Con una selezione, trascina per spostare i pixel selezionati del livello di
pittura attivo, a passi di pixel interi. Mentre modifichi una maschera,
**Operazione** sposta la maschera.

Con le guide visibili, **Operazione** seleziona e trascina anche le guide (vedi
[Righelli e guide](/it/docs/drawing/ruler/)).

## Spostare i tracciati

Su un livello vettoriale, **Operazione** seleziona, sposta, scala e ruota i tracciati
invece di spostare il livello. Premi **Ctrl+A** per selezionare ogni tracciato.
**Modifica > Trasforma** con dei tracciati selezionati passa a **Operazione** e al
suo riquadro. Vedi [Modificare i tracciati](/it/docs/layers/paths/).

## Lascia copia

Puoi spostare una copia dei pixel selezionati e lasciare gli originali al loro
posto.

Attiva **Lascia copia** nel pannello **Strumento** oppure scegli **Altro > Lascia copia** nella [barra di selezione](/it/docs/selections/working/). Tieni premuto **Alt** all’inizio del trascinamento per invertire la scelta solo per quel trascinamento.

## Trasforma

Esegui una delle seguenti operazioni:

- Scegli **Modifica > Trasforma**.
- Premi **Ctrl+T**.
- Seleziona **Trasforma** nella barra strumenti Comandi in Pittura e Foto, o nella barra del titolo in Schizzo.
- Seleziona **Trasforma** nella barra della selezione.
- In Pittura e Foto, fai clic con il pulsante destro su **Operazione / Trasforma / Modifica punti** nella barra strumenti Strumenti, o tienilo premuto, e scegli **Trasforma**.

Con una selezione, **Trasforma** modifica i pixel selezionati del livello attivo
o della maschera. Senza selezione, modifica i livelli selezionati. Appaiono un
riquadro con maniglie e la barra azioni della tela.

Per terminare, seleziona **Applica trasformazione** o premi **Invio**. **Annulla trasformazione** o **Escape**
scartano la trasformazione, e lo stesso fa **Annulla** mentre
trasformi dei livelli.

Per trasformare più livelli, prima annulla la selezione.

## Maniglie

Durante il ridimensionamento:

- Trascina all'interno del riquadro per spostarlo. Tieni premuto **Maiusc** per spostarlo solo in orizzontale o in verticale.
- Trascina una maniglia d'angolo o di lato per scalare dal lato opposto. Tieni premuto **Maiusc** per mantenere le proporzioni, o **Alt** per scalare attorno al perno.
- Tieni premuto **Ctrl** e trascina una maniglia di lato per inclinare, fino a 85°.
- Trascina la maniglia sopra il lato superiore per ruotare attorno al perno. Tieni premuto **Maiusc** per scatti di 15°.
- Trascina il perno per spostarlo.

In **Distorci**:

- Trascina un angolo per spostarlo da solo, o una maniglia di lato per spostare quel lato.
- Tieni premuto **Maiusc** su un angolo per riflettere lo spostamento sull'angolo vicino, per una prospettiva simmetrica.

In **Deforma**:

- Trascina i punti della griglia e le maniglie tangenti del punto selezionato.
- Fai **Maiusc**+clic sui punti per spostarne diversi insieme.

In tutte le modalità:

- I tasti freccia spostano il riquadro di 1 px, e di 10 px con **Maiusc**.
- Su uno schermo touch, un dito su una maniglia o all'interno del riquadro lo trascina. Un dito altrove sposta la vista.

## Barra di trasformazione

![La barra di trasformazione con i pulsanti di modalità, i controlli di capovolgimento e aggancio, Annulla trasformazione e Applica trasformazione.](shot:transform/transform-bar)

### Modalità

Seleziona **Ridimensiona**, **Distorci** o **Deforma** sulla barra. **Mantieni proporzioni** mantiene le proporzioni durante il ridimensionamento e **Prospettiva** rispecchia i trascinamenti degli angoli in **Distorci**. **Ridimensiona** è l'impostazione predefinita.

### Dimensioni originali

Riporta una foto posizionata al 100%. Solo per foto senza **Distorci** né
**Deforma**.

### Aggancia

Aggancia i bordi e il centro del riquadro alla tela, agli altri livelli visibili
e alle guide. La rotazione non si aggancia. Disattivato per impostazione
predefinita.

### Prospettiva

Con **Distorci**, riflette ogni trascinamento di un angolo sull'angolo vicino.

### Griglia di deformazione

Con **Deforma**:

- **Griglia** apre **3 × 3** (predefinito), **4 × 4** e **5 × 5** e i comandi di suddivisione della griglia. La dimensione della griglia è disponibile finché non si modifica la forma.
- Scegli **Suddividi verticalmente**, **Suddividi orizzontalmente** o **Suddividi a croce**, quindi seleziona un punto sulla mesh per aggiungere una linea della griglia senza modificare la forma. **Escape** annulla la divisione. Una griglia può contenere fino a 32 celle in ciascuna direzione.
- **Seleziona punti** seleziona i punti da spostare insieme.
- **Ripristina griglia** ripristina una mesh diritta.

![La barra di trasformazione in modalità Deforma con Griglia e Seleziona punti.](shot:transform/warp-bar)

### Pulsanti per riflettere e ruotare

**Rifletti orizzontalmente** è sul bar. **Altro** contiene **Rifletti verticalmente**, **Ruota di 90° a sinistra** e **Ruota di 90° a destra**. Rispecchiano o trasformano il contenuto attorno al perno.

### Ripristina trasformazione

Scegli **Ripristina trasformazione** in **Altro** per annullare ogni modifica nella trasformazione corrente. La trasformazione rimane aperta e ritorna a **Ridimensiona**.

### Interpolazione

Scegli **Interpolation** in **Altro** per impostare la modalità di ricampionamento dei pixel: **Vicino più prossimo**, **Bilineare**, **Bicubica** o **Lanczos**. **Bilineare** è l'impostazione predefinita durante il ridimensionamento e **Bicubica** in **Distorci** e **Deforma**.

## Valori di trasformazione nel pannello Strumento

Il pannello Strumento, e in Foto la barra Opzioni strumento, mostrano i valori di
una trasformazione aperta, tranne in **Deforma**.

- **Punto di ancoraggio**: **X** e **Y**, in pixel, con sopra la griglia di ancoraggio che sceglie a quale punto del riquadro si riferiscono.
- **Ridimensiona**: **Larghezza** e **Altezza**, in percentuale. **Mantieni proporzioni** le mantiene collegate.
- **Rotazione**: **Angolo**, da −180° a 180°.
- **Inclinazione**: **Inclinazione**, da −85° a 85°.

![Il pannello Strumento durante una trasformazione, con Punto di ancoraggio, Scala, Rotazione e Inclinazione.](shot:transform/transform-numbers)

## Trasformazioni dei livelli

Una trasformazione di interi livelli di pittura o Oggetto viene memorizzata
con ciascun livello, e i pixel non vengono ricampionati. **Trasforma** si riapre
dalla trasformazione memorizzata.

Finché non applichi la trasformazione ai pixel, non puoi ritoccare un livello
scalato o ruotato, né dipingere su un livello distorto o deformato.

## Applica trasformazione

Puoi rendere la trasformazione memorizzata di un livello parte dei suoi pixel.

Esegui una delle seguenti operazioni:

- Scegli **Modifica > Applica trasformazione**.
- Scegli **Livello > Impostazioni livello > Applica trasformazione**.

Durante l'operazione, una barra in fondo alla tela indica «Applicazione
trasformazione…» con **Annulla trasformazione**.

## Ripeti trasformazione

Senza selezione, scegli **Modifica > Ripeti trasformazione** per applicare
l'ultima trasformazione di livello ai livelli selezionati. Le operazioni di
incolla, le importazioni e le trasformazioni di pixel selezionati non vengono
ripetute.

## Immagini posizionate

Quando incolli un'immagine da un'altra app o scegli
**File > Import Image as
Layer…**, l'immagine si apre nel riquadro di
trasformazione. **Applica trasformazione** posiziona l'immagine e **Annulla trasformazione** la rimuove.
Finché non scegli uno dei due, gli altri comandi non sono disponibili.
