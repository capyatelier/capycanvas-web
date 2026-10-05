---
title: "Filtri di distorsione"
description: "Le impostazioni dei filtri della categoria Distorsione."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

I filtri di distorsione si trovano in **Filtro > Distorsione** e nella categoria
**Distorsione** del pannello **Filtri**. Le loro impostazioni si cambiano nel
pannello **Proprietà**. Ognuno di essi può spostare la pittura nelle aree
trasparenti di un livello.

![Il pannello Filtri con la categoria Distorsione e un'anteprima di ogni filtro.](shot:filters/distort-list)

## Aberrazione cromatica

Aggiunge frange di colore sui bordi spostando il canale rosso in un verso e il
canale blu nell'altro, di **Separazione** lungo **Angolo**.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Separazione** | 0–32 px | 3 px |
| **Angolo** | Da −180° a 180° | 0° |

## Caleidoscopio

Riflette uno spicchio dell'immagine in un numero di spicchi pari a **Segmenti**
attorno al centro.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Segmenti** | 2–24 | 6 |
| **Angolo** | Da −180° a 180° | 0° |
| **Centro X**, **Centro Y** (sotto **Posizione**) | 0–100% della larghezza e dell'altezza della tela | 50% |

## Vortice

Ruota l'immagine attorno al centro di **Torsione**, fino ad annullare la
torsione a **Raggio**.

![Il pannello Proprietà per Vortice con Torsione, Raggio e le impostazioni di Posizione.](shot:filters/swirl-properties)

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Torsione** | Da −720° a 720° | 120° |
| **Raggio** | 1–150% della metà del lato corto della tela | 70% |
| **Centro X**, **Centro Y** (sotto **Posizione**) | 0–100% della larghezza e dell'altezza della tela | 50% |

## Increspatura

Sposta l'immagine in anelli attorno al centro, fino ad **Ampiezza**, con anelli a
distanza di **Lunghezza d'onda**. Gli anelli si allargano verso l'esterno nel
tempo.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Ampiezza** | 0–48 px | 12 px |
| **Lunghezza d'onda** | 8–256 px | 64 px |
| **Velocità** | 0–4 | 0,5 |
| **Centro X**, **Centro Y** (sotto **Posizione**) | 0–100% della larghezza e dell'altezza della tela | 50% |
| **Anima** | Attivo o disattivo | Attivo |
| **Tempo fermo** | 0–3600 s | 0 s |

## Vetro

Distorce l'immagine con un motivo a vetro smerigliato di **Dimensioni trama**,
fino a **Distorsione**. **Rugosità** aggiunge un motivo più fine.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Distorsione** | 0–48 px | 12 px |
| **Dimensioni trama** | 4–160 px | 24 px |
| **Rugosità** | 0–100% | 35% |

## Vetro bagnato

Aggiunge gocce di pioggia che scivolano verso il basso lasciando scie nel tempo
e piegano l'immagine fino a **Rifrazione**. **Pioggia** imposta il numero di
gocce.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Rifrazione** | 0–32 px | 8 px |
| **Dimensioni gocce** | 12–120 px | 48 px |
| **Pioggia** | 0–100% | 65% |
| **Velocità** | 0–4 | 0,5 |
| **Anima** | Attivo o disattivo | Attivo |
| **Tempo fermo** | 0–3600 s | 0 s |

## Foschia da calore

Fa tremolare l'immagine nel tempo, fino a **Distorsione** in fondo alla tela e
per niente in cima. **Dettaglio** aggiunge increspature più fini.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Distorsione** | 0–48 px | 8 px |
| **Dimensioni onda** | 10–240 px | 90 px |
| **Velocità** | 0–4 | 0,6 |
| **Dettaglio** | 0–100% | 50% |
| **Anima** | Attivo o disattivo | Attivo |
| **Tempo fermo** | 0–3600 s | 0 s |

## Deformazione del dominio

Deforma l'immagine con un motivo marmorizzato di **Dimensioni motivo**, fino a
**Distorsione**. Il motivo si sposta lentamente nel tempo.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Distorsione** | 0–64 px | 24 px |
| **Dimensioni motivo** | 8–256 px | 96 px |
| **Velocità** | 0–4 | 0,25 |
| **Anima** | Attivo o disattivo | Attivo |
| **Tempo fermo** | 0–3600 s | 0 s |

## Animazione

**Increspatura**, **Vetro bagnato**, **Foschia da calore** e
**Deformazione del dominio** sono animati, e le loro righe nel pannello
**Filtri** hanno il segno dell'animazione. Con **Anima** attivo, il filtro si
riproduce di continuo a **Velocità**. Disattiva **Anima** per fermare il filtro
nel momento impostato da **Tempo fermo**.

Un'immagine esportata mostra l'animazione nel momento dell'esportazione.
