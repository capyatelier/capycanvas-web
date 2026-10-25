---
title: "Ritaglio"
description: "Ritagliare e raddrizzare la tela con lo strumento Ritaglia."
related: ["transform/image", "selections/working", "drawing/ruler", "photo/crop"]
---

Puoi ritagliare la tela entro una cornice con lo strumento **Ritaglia**. I pixel
ritagliati restano sui loro livelli, nascosti, a meno che non attivi
**Elimina pixel dipinti ritagliati**.

## Ritagliare

Esegui una delle seguenti operazioni:

- Scegli **Immagine > Ritaglia**.
- Premi **C**.
- In Foto, seleziona **Ritaglia** nella barra strumenti Strumenti.

Appare una cornice con maniglie attorno all'intera tela, o come la cornice più
grande delle proporzioni scelte. La tela fuori dalla cornice viene scurita, e la
[barra azioni della tela](/it/docs/selections/working/) per il ritaglio appare lungo il
bordo inferiore della tela.

- Trascina all'interno della cornice per spostarla.
- Trascina una maniglia d'angolo o di lato per ridimensionare la cornice. Tieni premuto **Maiusc** per mantenerne le proporzioni, o **Alt** per ridimensionarla dal centro.
- Trascina la cornice oltre il bordo della tela per aggiungere tela trasparente.

Su uno schermo touch, solo le maniglie rispondono a un dito. Un dito all'interno
della cornice sposta la vista.

Per terminare, seleziona **Applica ritaglio** o premi **Invio**. **Annulla ritaglio**, **Escape**
e **Annulla** scartano il ritaglio. In
entrambi i casi, torna lo strumento usato in precedenza.

**Applica ritaglio** ritaglia anche i livelli bloccati. Non puoi iniziare un ritaglio
mentre è aperta una trasformazione.

![La cornice di ritaglio sulla foto del terrario, con la barra azioni della tela lungo il bordo inferiore.](shot:transform/crop-bar)

## Proporzioni

Scegli **Libero**, **Originale**, **1:1**, **4:5**, **2:3**, **5:7** o **16:9**
da **Proporzioni** nella barra azioni della tela. La cornice diventa la più grande
cornice con quelle proporzioni. **Libero** è il valore predefinito.

**Scambia orientamento ritaglio**, il pulsante a icona accanto a
**Proporzioni**, ruota la cornice tra orizzontale e verticale.

Le proporzioni, la sovrapposizione ed **Elimina pixel dipinti ritagliati** restano per il
ritaglio successivo.

![Il menu Proporzioni nella barra del ritaglio.](shot:transform/crop-ratio-menu)

## Adatta al contenuto

**Adatta al contenuto** imposta la cornice, dritta, sui limiti dei pixel
visibili, compresi quelli oltre la tela. **Proporzioni** passa a **Libero**.

## Sovrapposizione

Scegli un overlay da **Altro > Sovrapponi**. **Sovrapposizione regola dei terzi** è l'impostazione predefinita. Premi **O** mentre ritagli per mostrare la sovrapposizione successiva.

## Raddrizzare

Seleziona **Raddrizza** nella barra azioni della tela, poi traccia una linea lungo un
elemento che dovrebbe essere orizzontale o verticale. La cornice ruota per
allinearsi alla linea. Tieni premuto **Maiusc** per vincolare la linea a scatti
di 15°. Su uno schermo touch, mentre **Raddrizza** è selezionato un dito traccia
la linea.

Puoi anche impostare l'angolo in **Raddrizza** nel pannello Strumento. La
cornice ruota al massimo di 45° in ciascun verso.

Quando applichi un ritaglio ruotato, i livelli di pittura e le maschere vengono
ricampionati. Le foto posizionate conservano i pixel originali.

Per raddrizzare in base a una guida, seleziona la guida e seleziona
**Raddrizza** nella sua barra azioni della tela (vedi
[Righelli e guide](/it/docs/drawing/ruler/)). Si apre un ritaglio ruotato in
linea con la guida.

## Elimina pixel dipinti ritagliati

Attiva **Altro > Elimina pixel dipinti ritagliati** per scartare i pixel fuori dalla cornice
quando applichi il ritaglio. Le foto posizionate conservano i pixel originali.
Disattivato per impostazione predefinita.

Un ritaglio che risulterebbe troppo grande conservando i pixel nascosti funziona
solo con **Elimina pixel dipinti ritagliati** attivo.

## Ripristina ritaglio

**Ripristina ritaglio** in **Altro** riporta la cornice sull'intera tela, in posizione verticale, e disattiva **Raddrizza**. Con un rapporto scelto, il fotogramma diventa il fotogramma più grande di quel rapporto.

## Impostazioni di ritaglio nel pannello Strumento

Durante il ritaglio, il pannello Strumento (e in Foto la barra Opzioni strumento)
mostra:

- **Dimensioni**: **Larghezza** e **Altezza** della cornice, in pixel. Con delle proporzioni scelte, l'altro lato si adegua.
- **Raddrizza**: l'angolo della cornice, da −45° a 45°.
- I pulsanti della barra azioni della tela.

![Il pannello Strumento durante il ritaglio, con Larghezza, Altezza e Raddrizza.](shot:transform/crop-tool-panel)

## Ritaglia tela alla selezione

Puoi ritagliare la tela sui limiti di una selezione.

Esegui una delle seguenti operazioni:

- Scegli **Immagine > Ritaglia tela alla selezione**.
- Scegli **Altro > Ritaglia tela alla selezione** sulla [barra di selezione](/it/docs/selections/working/).

I pixel fuori dai limiti della selezione restano sui loro livelli, nascosti. Non
puoi ritagliare su una selezione invertita.

## Recuperare i pixel ritagliati

Scegli **Immagine > Mostra tutto** per allargare la tela finché non
mostra i pixel di tutti i livelli, oppure ingrandisci la tela con
**Immagine > Dimensioni tela…** (vedi
[Dimensioni e rotazione dell'immagine](/it/docs/transform/image/)).
