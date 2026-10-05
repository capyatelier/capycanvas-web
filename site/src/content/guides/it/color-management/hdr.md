---
title: "HDR"
description: "I disegni HDR, come appaiono sullo schermo e la loro versione SDR."
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

In un disegno HDR puoi dipingere colori più luminosi del bianco SDR. Un disegno a
**HDR a virgola mobile a 16 bit** o **HDR a virgola mobile a 32 bit** è un
disegno HDR.

## Disegni HDR

Per ottenere un disegno HDR, esegui una delle seguenti operazioni:

- In **File > Nuovo…**, scegli il predefinito **Disegno HDR** o una **Profondità in bit** a virgola mobile.
- Scegli **Modifica > Cambia profondità in bit…** e una profondità a virgola mobile.
- Apri un file PNG HDR (BT.2020 PQ) o AVIF HDR (HDR a virgola mobile a 16 bit), oppure un file OpenEXR (HDR a virgola mobile a 32 bit).
- Imposta **Profondità in bit** su una profondità a virgola mobile nella pagina **Colore** delle [Preferenze](/it/docs/preferences/) per rendere HDR i nuovi disegni.

In un disegno HDR:

- Il [pannello Colore](/it/docs/color/color-panel/) e [Modifica colore](/it/docs/color/edit-color/) impostano l'intensità del colore in EV.
- La [Fusione](/it/docs/color-management/color-spaces/) è sempre Luce lineare.
- Sovrapponi, Luce soffusa, Luce intensa, Colore brucia, Colore scherma, Luce vivida, Miscela dura ed Esclusione non sono disponibili come [metodi di fusione](/it/docs/layers/blend-modes/).
- Curve ha un dominio **HDR logaritmico** e un **Intervallo HDR**.
- Lo strumento [Intervallo tonale](/it/docs/selections/tonal-range/) offre **HDR luminoso · oltre +1 stop**.
- L'Istogramma segna il bianco SDR.
- L'[esportazione](/it/docs/files/export/) offre formati HDR.

Nell'editor web, un disegno HDR più grande di 12 megapixel non può essere aperto.

## HDR sullo schermo

Su uno schermo in grado di mostrare l'HDR, la tela e il Navigatore mostrano un
disegno HDR in HDR quando è selezionato **Disattivato** nel pannello
[Prova colore](/it/docs/color-management/proof/) e l'avviso fuori gamma è
disattivato. Altrimenti mostrano la versione SDR del disegno, e lo stesso fanno i
controlli del colore. Nell'editor web, l'HDR richiede un browser che segnali uno
schermo HDR.

Un indicatore a sinistra nel piè di pagina mostra quale versione stai vedendo.
Selezionalo per i dettagli.

| Indicatore | Compare quando |
| --- | --- |
| «HDR» | Il disegno è mostrato in HDR. |
| «Anteprima SDR» | Il disegno è in modalità SDR su uno schermo che mostra l'HDR. |
| «Visualizzazione SDR» | Lo schermo non mostra l'HDR. |

## Versione SDR

Ogni disegno HDR ha una versione SDR salvata. Viene usata:

- sugli schermi senza HDR e in modalità SDR;
- per le miniature dei livelli;
- per la prova colore di stampa;
- per le esportazioni SDR e per la base SDR delle esportazioni JPEG HDR e AVIF HDR.

Puoi regolare la versione SDR senza modificare i pixel HDR. Esegui una delle
seguenti operazioni:

- Scegli **Visualizza > Prova SDR** (non su Windows).
- Scegli **Prova SDR** nella ricerca comandi.
- Seleziona **SDR** in cima al pannello Prova colore.

![La pagina SDR del pannello Prova colore con il quadrante per bilanciamento, contrasto, luminosità e intensità del colore.](shot:color-management/proof-panel-sdr)

Il quadrante nel pannello imposta quattro valori. Il suo centro mostra
un'illustrazione fissa, non il disegno. Fai doppio clic o doppio tocco su una
parte del quadrante per ripristinarne i valori, oppure seleziona **Ripristina
aspetto SDR** in alto a destra per ripristinarli tutti e quattro. Con lo stato
attivo sul quadrante, i tasti freccia cambiano un valore a passi, e **Maiusc**
usa passi più grandi. **Esc** annulla un trascinamento. Ogni trascinamento è un
passaggio di annullamento e viene salvato con il disegno.

### Bilanciamento

Trascina il centro del quadrante a sinistra o a destra, da −100% a +100%. La
sinistra privilegia le forme ampie, la destra la trama fine.

### Contrasto

Trascina il centro del quadrante in giù o in su, dal 50% al 200%.

### Luminosità

Trascina l'arco superiore, da −50% a +50%.

### Intensità colore

Trascina l'arco inferiore, dal bianco allo 0% al colore pieno al 100%. Il valore
predefinito è 30%.

## Anteprima SDR

Puoi passare dall'HDR alla versione SDR senza aprire il pannello Prova colore.
Scegli **Anteprima SDR** nella ricerca comandi, oppure assegnagli un tasto nella
pagina [Scorciatoie da tastiera](/it/docs/input/keyboard/).

**Anteprima SDR** funziona solo per un disegno HDR su uno schermo che mostra
l'HDR, con la prova colore di stampa e l'avviso fuori gamma disattivati.
