---
title: "Filtri di tono"
description: "Le impostazioni dei filtri della categoria Tono."
related: ["filters/adding", "filters/color", "filters/how-filters-apply"]
---

I filtri di tono si trovano in **Filtro > Tono** e nella categoria **Tono** del
pannello **Filtri**. Le loro impostazioni si cambiano nel pannello **Proprietà**.

![Il pannello Filtri con la categoria Tono e un'anteprima di ogni filtro.](shot:filters/tone-list)

## Ombre/Luci

Schiarisce le zone scure con **Ombre** e scurisce le zone chiare con **Luci**,
in base alla luminosità dell'area circostante. Al 100%, ciascuna cambia
l'esposizione fino a 2 stop.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Ombre** | 0–100% | 0% |
| **Luci** | 0–100% | 0% |

## Curve

Modifica i toni con una curva per tutti i canali nella pagina **RGB** e una per
ciascun canale nelle pagine **Rosso**, **Verde** e **Blu**. Le curve dei canali
si applicano prima della curva **RGB**.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| Pagine **RGB**, **Rosso**, **Verde**, **Blu** | Una curva ciascuna | Linea retta |
| **Campiona punto**, **Regolazione mirata** | Impostano la curva in base all'immagine (vedi [Aggiungere e modificare filtri](/it/docs/filters/adding/)) | |
| **Spazio delle curve** | **RGB codificato**, **HDR logaritmico**. Visibile solo in un [disegno HDR](/it/docs/color-management/hdr/) o quando è impostato su **HDR logaritmico**. | **RGB codificato**, o **HDR logaritmico** in un disegno HDR |
| **Intervallo HDR** | 0–15 EV, o fino a 127 EV digitando. Visibile solo con **HDR logaritmico**: il numero di stop sopra il bianco SDR raggiunto dalla curva. | 4 EV |

| Sul grafico | Come |
| --- | --- |
| Aggiungere un punto | Premi su un punto vuoto. Una curva contiene fino a 32 punti. |
| Spostare un punto | Trascinalo, oppure selezionalo e premi i tasti freccia. Con **Maiusc** si sposta di più. I punti alle estremità si spostano solo in alto e in basso. |
| Impostare valori esatti | Seleziona un punto e digita in **Ingresso** e **Uscita** sotto il grafico. |
| Rimuovere un punto | Fai doppio clic sul punto, trascinalo fuori dal grafico, oppure selezionalo e premi **Canc** o **Backspace**. |
| Ricominciare | Seleziona **Ripristina curva**. |

## Livelli

Imposta il punto nero, il punto bianco e i mezzitoni dell'ingresso, poi li
mappa sull'intervallo di **Uscita**. Le pagine **Rosso**, **Verde** e **Blu** si
applicano prima della pagina **RGB**.

![Il pannello Proprietà per Livelli con l'istogramma, Automatico, Campiona punto e le impostazioni Ingresso, Uscita e Limitazione.](shot:filters/levels-properties)

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Automatico**, **Campiona punto** | Impostano l'ingresso in base all'immagine (vedi [Aggiungere e modificare filtri](/it/docs/filters/adding/)) | |
| **Ombre**, **Luci** (sotto l'istogramma) | Segnalano sulla tela le aree in clipping | |
| **Nero** (**Ingresso**) | 0–1, qualsiasi valore digitando. Resta sotto **Bianco** di ingresso. | 0 |
| **Bianco** (**Ingresso**) | 0–1, qualsiasi valore digitando | 1 |
| **Mezzitoni** | 0,1–10. Sopra 1 schiarisce. | 1 |
| **Nero** (**Uscita**) | 0–1, qualsiasi valore digitando | 0 |
| **Bianco** (**Uscita**) | 0–1, qualsiasi valore digitando | 1 |
| **Limita ingresso** | Taglia i toni fuori da **Nero** e **Bianco** di ingresso, in ogni pagina | Disattivo |
| **Limita uscita** | Taglia il risultato all'intervallo di uscita, in ogni pagina | Disattivo |

## Luminosità / Contrasto

**Contrasto** allarga o comprime i toni attorno al grigio medio, e
**Luminosità** poi schiarisce o scurisce tutti i toni della stessa quantità.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Luminosità** | Da −100 a 100 | 0 |
| **Contrasto** | Da −100 a 100. 50 raddoppia il contrasto e −50 lo dimezza. | 0 |

## Soglia

Rende neri i pixel più scuri di **Soglia** e bianchi tutti gli altri.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Soglia** | 0–1, qualsiasi valore digitando | 0,5 |

## Esposizione

Cambia l'esposizione in stop. **Scostamento** alza o abbassa i neri.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Esposizione** | Da −10 a 10 EV, o fino a ±126 EV digitando | 0 EV |
| **Scostamento** | Da −0,5 a 0,5 | 0 |
| **Gamma** | 0,1–10. Sopra 1 schiarisce i mezzitoni. | 1 |

## Vignettatura

Scurisce l'immagine fuori da un'ellisse con le proporzioni della tela, oppure la
schiarisce quando **Intensità** è negativa. A ±100%, i bordi cambiano fino a
2 stop.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Intensità** | Da −100% a 100% | 40% |
| **Raggio** | 10–150% della metà della dimensione della tela | 95% |
| **Morbidezza** | 0–100% del raggio, usato per la sfumatura | 55% |
| **Centro X**, **Centro Y** (sotto **Posizione**) | 0–100% della larghezza e dell'altezza della tela | 50% |
