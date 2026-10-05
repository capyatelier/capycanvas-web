---
title: "Spostamento e trasformazione"
description: "Spostare e trasformare livelli e pixel selezionati con lo strumento Operazione e con Trasforma."
related: ["selections/working", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Puoi spostare livelli e pixel selezionati con lo strumento **Operazione**, e
scalarli, ruotarli, inclinarli, distorcerli o deformarli con **Trasforma**.

## Strumento Operazione

Esegui una delle seguenti operazioni:

- Apri il menu di un livello nel pannello Livelli e scegli **Sposta livello / maschera**.
- Premi **O**.
- In Pittura e Foto, seleziona **Operazione / Trasforma** nella barra strumenti Strumenti. Fai clic con il pulsante destro sul pulsante o tienilo premuto per scegliere **Operazione**.
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

## Lascia copia

Puoi spostare una copia dei pixel selezionati e lasciare gli originali al loro
posto.

Attiva **Lascia copia** nel pannello Strumento o nella
[barra della selezione](/it/docs/selections/working/). Tieni premuto **Alt**
quando inizi a trascinare per ottenere l'effetto opposto per un solo
trascinamento.

## Trasforma

Esegui una delle seguenti operazioni:

- Scegli **Modifica > Trasforma**.
- Premi **Ctrl+T**.
- Seleziona **Trasforma** nella barra strumenti Comandi in Pittura e Foto, o nella barra del titolo in Schizzo.
- Seleziona **Trasforma** nella barra della selezione.
- In Pittura e Foto, fai clic con il pulsante destro su **Operazione / Trasforma** nella barra strumenti Strumenti, o tienilo premuto, e scegli **Trasforma**.

Con una selezione, **Trasforma** modifica i pixel selezionati del livello attivo
o della maschera. Senza selezione, modifica i livelli selezionati. Appaiono un
riquadro con maniglie e la barra azioni della tela.

Per terminare, seleziona **Applica** o premi **Invio**. **Annulla** o **Esc**
scartano la trasformazione, e lo stesso fa **Modifica > Annulla** mentre
trasformi dei livelli.

Per trasformare più livelli, prima annulla la selezione.

## Maniglie

In **Libero** e **Uniforme**:

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

![La barra azioni della tela per una trasformazione, con Modalità, Aggancia, i pulsanti per riflettere e ruotare, Ripristina, Interpolazione, Annulla e Applica.](shot:transform/transform-bar)

### Modalità

**Libero**, **Uniforme**, **Distorci** o **Deforma**. **Uniforme** mantiene le
proporzioni. Le trasformazioni dei livelli si aprono in **Uniforme**.

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

- **Suddividi griglia**: scegli **Suddividi verticalmente**, **Suddividi orizzontalmente** o **Suddividi a croce**, poi tocca la deformazione per aggiungere lì una linea della griglia senza cambiare la forma. **Esc** annulla la suddivisione. Una griglia contiene fino a 32 celle in ogni direzione.
- **Seleziona punti**: tocca i punti per selezionarli e spostarli insieme.
- **Ripristina griglia**: sostituisce la deformazione con una griglia regolare.
- **Griglia**: **3 × 3** (il valore predefinito), **4 × 4** o **5 × 5**. Disponibile finché non cambi la forma.

![La barra azioni della tela in modalità Deforma, con Suddividi griglia, Seleziona punti, Ripristina griglia e Griglia.](shot:transform/warp-bar)

### Pulsanti per riflettere e ruotare

I pulsanti a icona **Rifletti orizzontalmente**, **Rifletti verticalmente**,
**Ruota di 90° a sinistra** e **Ruota di 90° a destra** riflettono o ruotano il
contenuto attorno al perno.

### Ripristina

Annulla tutte le modifiche fatte in questa trasformazione e la lascia aperta.
**Modalità** torna a **Libero**.

### Interpolazione

Imposta come vengono ricampionati i pixel: **Più vicino**, **Bilineare**,
**Bicubica** o **Lanczos**. **Bilineare** è il valore predefinito in **Libero**
e **Uniforme**, e **Bicubica** in **Distorci** e **Deforma**.

## Valori di trasformazione nel pannello Strumento

Il pannello Strumento, e in Foto la barra Opzioni strumento, mostrano i valori di
una trasformazione aperta, tranne in **Deforma**.

- **Punto di ancoraggio**: **X** e **Y**, in pixel, con sopra la griglia di ancoraggio che sceglie a quale punto del riquadro si riferiscono.
- **Scala**: **Larghezza** e **Altezza**, in percentuale. **Uniforme** le mantiene collegate.
- **Rotazione**: **Angolo**, da −180° a 180°.
- **Inclinazione**: **Inclinazione**, da −85° a 85°.

![Il pannello Strumento durante una trasformazione, con Punto di ancoraggio, Scala, Rotazione e Inclinazione.](shot:transform/transform-numbers)

## Trasformazioni dei livelli

Una trasformazione di interi livelli di pittura o fotografici viene memorizzata
con ciascun livello, e i pixel non vengono ricampionati. **Trasforma** si riapre
dalla trasformazione memorizzata.

Finché non applichi la trasformazione ai pixel, non puoi ritoccare un livello
scalato o ruotato, né dipingere su un livello distorto o deformato.

## Applica trasformazione ai pixel

Puoi rendere la trasformazione memorizzata di un livello parte dei suoi pixel.

Esegui una delle seguenti operazioni:

- Scegli **Modifica > Applica trasformazione ai pixel**.
- Scegli **Livello > Impostazioni livello > Applica trasformazione ai pixel**.

Durante l'operazione, una barra in fondo alla tela indica «Applicazione
trasformazione…» con **Annulla**.

## Ripeti trasformazione

Senza selezione, scegli **Modifica > Ripeti trasformazione** per applicare
l'ultima trasformazione di livello ai livelli selezionati. Le operazioni di
incolla, le importazioni e le trasformazioni di pixel selezionati non vengono
ripetute.

## Immagini posizionate

Quando incolli un'immagine da un'altra app o scegli
**File > Importa immagine come livello…**, l'immagine si apre nel riquadro di
trasformazione. **Applica** posiziona l'immagine e **Annulla** la rimuove.
Finché non scegli uno dei due, gli altri comandi non sono disponibili.
