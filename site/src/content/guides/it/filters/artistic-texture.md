---
title: "Filtri artistici e di trama"
description: "Le impostazioni dei filtri delle categorie Artistici e Trama."
related: ["filters/adding", "filters/distort", "filters/how-filters-apply"]
---

Questi filtri si trovano in **Filtro > Artistici** e **Filtro > Trama**, e nelle
categorie **Artistici** e **Trama** del pannello **Filtri**. Le loro
impostazioni si cambiano nel pannello **Proprietà**.

![Il pannello Filtri con la categoria Artistici e un'anteprima di ogni filtro.](shot:filters/artistic-list)

## Posterizza

Riduce ogni canale di colore a un numero di valori pari a **Livelli**,
distribuiti in modo uniforme.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Livelli** | 2–256 | 6 |

## Retino

Ridisegna l'immagine come punti rotondi di **Inchiostro** su **Carta**, ognuno
grande in proporzione allo scuro sottostante. **Contrasto** aumenta la
differenza tra punti piccoli e grandi.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Spaziatura punti** | 3–48 px | 9 px |
| **Angolo** | Da −180° a 180° | 15° |
| **Contrasto** | 0–100% | 30% |
| **Inchiostro** | Qualsiasi colore | #0D1217 |
| **Carta** | Qualsiasi colore | #F5F0DE |

## Tratteggio incrociato

Trasforma l'immagine in un tratteggio di **Inchiostro** su **Carta**. Le aree più
scure ricevono più direzioni di linee, fino a quattro.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Spaziatura** | 3–32 px | 8 px |
| **Spessore linea** | 0,25–4 px | 1 px |
| **Angolo** | Da −180° a 180° | 0° |
| **Inchiostro** | Qualsiasi colore | #121417 |
| **Carta** | Qualsiasi colore | #F7F2E8 |

## Mosaico a pixel

Divide l'immagine in quadrati di **Dimensioni cella**, ognuno riempito con il
colore del suo centro.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Dimensioni cella** | 1–96 px | 12 px |

## Effetto pittura

Dà all'immagine un aspetto da pittura a olio, appiattendo i dettagli entro
**Raggio** in campiture di colore uniforme e mantenendo i bordi. **Intensità**
miscela il risultato con l'originale.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Raggio** | 1–16 px | 5 px |
| **Intensità** | 0–100% | 100% |

## Matita

Disegna i bordi dell'immagine come linee di **Inchiostro** su **Carta**.
**Contrasto** scurisce le linee.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Raggio** | 0–21 px, o fino a 85 px digitando | 2 px |
| **Contrasto** | 0–100% | 40% |
| **Inchiostro** | Qualsiasi colore | #120F0D |
| **Carta** | Qualsiasi colore | #F7F2E6 |

## Grana della pellicola

Aggiunge una grana che cambia nel tempo ed è più forte nei mezzitoni.
**Grana colorata** dà a ogni canale di colore una grana propria.

![Il pannello Filtri con la categoria Trama e un'anteprima di ogni filtro.](shot:filters/texture-list)

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Quantità** | 0–100% | 18% |
| **Dimensioni** | 0,5–8 px | 1 px |
| **Grana colorata** | Attivo o disattivo | Disattivo |
| **Velocità** | 0–4 | 1 |
| **Anima** | Attivo o disattivo | Attivo |
| **Tempo fermo** | 0–3600 s | 0 s |

## VHS

Dà all'immagine un aspetto da videocassetta, con righe che oscillano di lato
fino ad **Allineamento tracce**, frange rosse e blu, linee di scansione e
rumore. L'oscillazione e il rumore cambiano nel tempo.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Allineamento tracce** | 0–32 px | 5 px |
| **Rumore** | 0–100% | 12% |
| **Linee di scansione** | 0–100% | 20% |
| **Velocità** | 0–4 | 1 |
| **Anima** | Attivo o disattivo | Attivo |
| **Tempo fermo** | 0–3600 s | 0 s |

## CRT

Fa sembrare l'immagine un vecchio schermo televisivo: curvo, con frange rosse e
blu, una maschera di pixel RGB a strisce, linee di scansione e una banda
luminosa che scorre nel tempo. Le parti dell'immagine spinte fuori dallo schermo
curvo diventano trasparenti.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Curvatura** | 0–30% | 8% |
| **Linee di scansione** | 0–100% | 35% |
| **Maschera pixel** | 0–100% | 25% |
| **Separazione** | 0–5 px | 1 px |
| **Anima** | Attivo o disattivo | Attivo |
| **Tempo fermo** | 0–3600 s | 0 s |

## Animazione

**Grana della pellicola**, **VHS** e **CRT** sono animati, e le loro righe nel
pannello **Filtri** hanno il segno dell'animazione. Con **Anima** attivo, il
filtro si riproduce di continuo a **Velocità** (CRT non ha l'impostazione
**Velocità**). Disattiva **Anima** per fermare il filtro nel momento impostato
da **Tempo fermo**.

Un'immagine esportata mostra l'animazione nel momento dell'esportazione.
