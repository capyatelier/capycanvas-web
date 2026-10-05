---
title: "Filtri di dettaglio e sfocatura"
description: "Le impostazioni dei filtri delle categorie Dettaglio e Sfocatura."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Questi filtri si trovano in **Filtro > Dettaglio** e **Filtro > Sfocatura**, e
nelle categorie **Dettaglio** e **Sfocatura** del pannello **Filtri**. Le loro
impostazioni si cambiano nel pannello **Proprietà**.

![Il pannello Filtri con le categorie Dettaglio e Sfocatura e un'anteprima di ogni filtro.](shot:filters/detail-blur-list)

## Chiarezza

Aumenta il contrasto locale con un valore positivo di **Intensità**, o lo
riduce con un valore negativo, fino a 2 stop.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Intensità** | Da −100% a 100% | 0% |

## Rimozione foschia

Un valore positivo di **Intensità** rimuove la foschia e un valore negativo la
aggiunge. Quando la foschia viene rimossa, le aree vicine al bianco e al grigio
sono protette.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Intensità** | Da −100% a 100% | 0% |

## Maschera di contrasto

Aumenta la nitidezza dei bordi in base a **Quantità**. Le differenze più piccole
di **Soglia** restano invariate.

![Il pannello Proprietà per Maschera di contrasto con Raggio, Quantità e Soglia.](shot:filters/unsharp-mask-properties)

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Raggio** | 0–21 px, o fino a 85 px digitando | 1,5 px |
| **Quantità** | 0–300% | 100% |
| **Soglia** | 0–100% | 2% |

## Passa alto

Mantiene solo i dettagli più fini di **Raggio**, su una base grigia al 50%.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Raggio** | 0–21 px, o fino a 85 px digitando | 4 px |
| **Intensità** | 0–300% | 100% |

## Smussatura che preserva i bordi

Attenua il rumore e mantiene nitidi i bordi. Un valore più alto di **Intensità**
smussa anche tra colori più diversi.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Intensità** | 0–100% | 25% |

## Rilevamento bordi

Mostra i bordi dell'immagine come linee bianche su nero, o come linee scure su
bianco con **Inverti** attivo.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Larghezza** | 0,5–8 px | 1 px |
| **Intensità** | 0–400% | 100% |
| **Inverti** | Attivo o disattivo | Disattivo |

## Rilievo

Trasforma l'immagine in un rilievo grigio. **Angolo** imposta la direzione del
rilievo.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Larghezza** | 0,5–8 px | 1,5 px |
| **Angolo** | Da −180° a 180° | 135° |
| **Profondità** | 0–400% | 100% |

## Sfocatura gaussiana

Sfoca l'immagine in modo uniforme. I bordi accanto alle aree trasparenti si
sfocano verso l'esterno.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Raggio** | 0–21 px, o fino a 85 px digitando | 3 px |

## Sfocatura movimento

Sfoca lungo una linea retta lunga **Distanza**, nella direzione di **Angolo**.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Distanza** | 0–64 px | 12 px |
| **Angolo** | Da −180° a 180° | 0° |

## Bagliore

Aggiunge un alone attorno ai toni più chiari di **Soglia**. L'alone può
estendersi nelle aree trasparenti.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Raggio** | 0–21 px, o fino a 85 px digitando | 6 px |
| **Intensità** | 0–200% | 60% |
| **Soglia** | 0–100% | 60% |

## Fuoco morbido

Ammorbidisce l'immagine sovrapponendole una sfocatura di **Raggio** con il
metodo di fusione Schiarisci, con opacità pari a **Intensità**.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Raggio** | 0–21 px, o fino a 85 px digitando | 5 px |
| **Intensità** | 0–100% | 40% |
