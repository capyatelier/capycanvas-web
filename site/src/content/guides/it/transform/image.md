---
title: "Dimensioni e rotazione dell'immagine"
description: "I comandi di Modifica > Immagine che cambiano le dimensioni e l'orientamento dell'intera immagine."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Puoi ridimensionare, ruotare e riflettere l'intera immagine da
**Modifica > Immagine**. L'immagine resta nella stessa posizione sullo schermo.

I comandi non sono disponibili mentre è aperto un ritaglio o una trasformazione,
né mentre modifichi una maschera, la Maschera veloce o un livello di selezione.
Per **Ritaglia** e **Ritaglia tela alla selezione**, vedi
[Ritaglio](/it/docs/transform/crop/).

![Il sottomenu Immagine del menu Modifica.](shot:transform/image-menu)

## Dimensioni immagine…

Puoi scalare l'intera immagine, o cambiarne solo la risoluzione.

Scegli **Modifica > Immagine > Dimensioni immagine…**. I livelli di pittura e le
maschere vengono ricampionati, e le foto posizionate conservano i pixel
originali. Le selezioni, le guide e le impostazioni dei filtri espresse in pixel
si adattano all'immagine.

![La finestra di dialogo Dimensioni immagine.](shot:transform/image-size-dialog)

### Larghezza e Altezza

Imposta le nuove dimensioni in **Pixel** o **Percentuale**. Cambiare unità
converte i valori.

### Mantieni proporzioni

Collega **Larghezza** e **Altezza**. Attivo per impostazione predefinita.

### Risoluzione

Imposta la risoluzione in pixel per pollice. Se cambi solo la risoluzione, i
pixel restano come sono. Il campo parte dalla risoluzione del disegno, o da
72 ppi se il disegno non ne ha una.

### Ricampiona

**Automatico** (il valore predefinito) usa Lanczos quando l'immagine si
rimpicciolisce e Bicubica quando si ingrandisce. Puoi anche scegliere
**Bicubica**, **Lanczos**, **Bilineare** o **Vicino più prossimo**.

## Dimensioni tela…

Puoi aggiungere o togliere tela attorno all'immagine senza ricampionare.

Scegli **Modifica > Immagine > Dimensioni tela…**. I pixel fuori da una tela più
piccola restano sui loro livelli, nascosti, e una tela più grande li mostra di
nuovo.

![La finestra di dialogo Dimensioni tela.](shot:transform/canvas-size-dialog)

### Larghezza e Altezza

Imposta le nuove dimensioni in **Pixel** o **Percentuale**. Cambiare unità
converte i valori.

### Relativo

Aggiunge i valori inseriti alle dimensioni attuali. Disattivato per impostazione
predefinita.

### Ancoraggio

Sceglie, da una griglia 3 × 3, il lato o l'angolo dell'immagine che resta fermo.
**Al centro** è il valore predefinito.

## Ruotare e riflettere l'immagine

Scegli uno di questi comandi da **Modifica > Immagine**:

- **Ruota immagine di 90° a sinistra**
- **Ruota immagine di 90° a destra**
- **Ruota immagine di 180°**
- **Rifletti immagine orizzontalmente**
- **Rifletti immagine verticalmente**

L'intera immagine ruota o si riflette insieme alla selezione e alle guide. I
pixel non vengono ricampionati. Per ruotare o riflettere solo la vista, vedi
[Visualizzare la tela](/it/docs/start/canvas/).

## Rifila

Scegli **Modifica > Immagine > Rifila** per ridurre la tela ai pixel visibili. I
pixel fuori dalla nuova tela restano sui loro livelli, nascosti.

## Mostra tutto

Scegli **Modifica > Immagine > Mostra tutto** per allargare la tela finché non
mostra i pixel di tutti i livelli, compresi i livelli nascosti e i pixel fuori
dalla tela.
