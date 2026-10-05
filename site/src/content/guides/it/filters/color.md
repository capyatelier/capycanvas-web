---
title: "Filtri colore"
description: "Le impostazioni dei filtri della categoria Colore."
related: ["filters/adding", "filters/tone", "filters/how-filters-apply"]
---

I filtri colore si trovano in **Filtro > Colore** e nella categoria **Colore**
del pannello **Filtri**. Le loro impostazioni si cambiano nel pannello
**Proprietà**.

![Il pannello Filtri con la categoria Colore e un'anteprima di ogni filtro.](shot:filters/color-list)

## Tonalità / Saturazione

Sposta la tonalità, la saturazione e la chiarezza dell'intera immagine nella
pagina **Globale**, o di una sola gamma di colori nelle pagine da **Rossi** a
**Magenta**. **Colora** dà a ogni pixel la stessa tonalità e saturazione e ne
mantiene la chiarezza.

![Il pannello Proprietà per Tonalità / Saturazione nella pagina Rossi.](shot:filters/hue-saturation-properties)

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Tonalità** | Da −180° a 180°, o 0–360° con **Colora** | 0° |
| **Saturazione** | Da −100% a 100%, o 0–100% con **Colora** | 0%, o 25% con **Colora** |
| **Chiarezza** | Da −100% a 100% | 0% |
| **Centro** | Tonalità Oklab 0–360°. Solo nelle pagine dei colori. | Rossi 30°, Gialli 110°, Verdi 145°, Ciano 195°, Blu 265°, Magenta 330° |
| **Larghezza** | 0–180°. Solo nelle pagine dei colori. | 30° |
| **Sfumatura** | 0–90°. Solo nelle pagine dei colori. | 30° |
| **Colora** | Attivo o disattivo. Quando è attivo, resta solo la pagina **Globale**. | Disattivo |

## Inverti

Inverte ogni canale di colore. Non ha impostazioni.

## Desatura

Sostituisce ogni colore con un grigio della stessa chiarezza HSL, e non ha
impostazioni.

## Filtro fotografico

Tinge l'immagine verso **Colore** in base a **Densità**.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Colore** | Qualsiasi colore | #FFB873 |
| **Densità** | 0–100% | 25% |
| **Mantieni luminosità** | Attivo o disattivo | Attivo |

## Correzione colore selettiva

Cambia ciano, magenta, giallo e nero in una gamma di colori per pagina. Le
pagine da **Rossi** a **Magenta** agiscono sui colori saturi, e **Bianchi**,
**Neutri** e **Neri** sui toni vicini al grigio.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Ciano** | Da −100% a 100% | 0% |
| **Magenta** | Da −100% a 100% | 0% |
| **Giallo** | Da −100% a 100% | 0% |
| **Nero** | Da −100% a 100% | 0% |
| **Metodo** | **Relativo** scala ogni modifica in base all'inchiostro già presente nel colore. **Assoluto** la aggiunge così com'è. Vale per tutte le pagine. | **Relativo** |

## Miscelatore di canali

Costruisce ogni canale di uscita nelle pagine **Rosso**, **Verde** e **Blu** da
una miscela dei canali di ingresso rosso, verde e blu, più **Costante**. Con
**Monocromatico** attivo, resta solo la pagina **Grigio**, e la sua miscela
produce un'immagine in grigio.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Rosso** | Da −200% a 200% | 100% nella pagina **Rosso**, 21,26% in **Grigio**, altrimenti 0% |
| **Verde** | Da −200% a 200% | 100% nella pagina **Verde**, 71,52% in **Grigio**, altrimenti 0% |
| **Blu** | Da −200% a 200% | 100% nella pagina **Blu**, 7,22% in **Grigio**, altrimenti 0% |
| **Costante** | Da −100% a 100% | 0% |
| **Monocromatico** | Attivo o disattivo | Disattivo |

## Consultazione colore (LUT)

Applica ai colori una tabella di consultazione scelta nel menu dei look (mostra
il look corrente, per esempio **Caldo**), miscelata con l'originale in base a
**Intensità**. Per usare una tua LUT, seleziona **Importa LUT…** accanto al menu
dei look e apri un file 3D `.cube` di massimo 16 MB.

![Il pannello Proprietà per Consultazione colore (LUT) con il menu dei look e Importa LUT….](shot:filters/color-lookup)

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| Menu dei look | **Originale** (nessuna modifica), **Caldo**, **Freddo**, **Monocromatico**, o una LUT importata con il suo titolo. Le LUT importate vengono salvate nel disegno. | **Originale** |
| **Spazio colore della LUT** | **sRGB**, **Display P3**, **Adobe RGB (1998)**, **ProPhoto RGB**: lo spazio colore previsto da una LUT importata. Nascosto per **Originale** e per i look integrati. | **sRGB** |
| **Intensità** | 0–100% | 100% |

## Bilanciamento colore

Sposta i colori separatamente nelle pagine **Ombre**, **Mezzitoni** e **Luci**.
I valori positivi spostano verso il secondo colore dell'etichetta di ogni
cursore.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Ciano — Rosso** | Da −100 a 100 | 0 |
| **Magenta — Verde** | Da −100 a 100 | 0 |
| **Giallo — Blu** | Da −100 a 100 | 0 |
| **Mantieni luminosità** | Attivo o disattivo, per tutte le pagine | Attivo |

## Vividezza

**Vividezza** aumenta la saturazione dei colori spenti più di quella dei colori
saturi. **Saturazione** cambia tutti i colori in modo uniforme.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Vividezza** | Da −100% a 100% | 0% |
| **Saturazione** | Da −100% a 100% | 0% |
| **Proteggi tonalità della pelle** | Attivo o disattivo. Limita una **Vividezza** positiva sulle tonalità arancioni e della pelle. | Attivo |

## Bianco e nero

Converte l'immagine in grigio, con un cursore per la chiarezza di ogni tonalità.
**Viraggio** colora il risultato con **Colore del viraggio**.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Rossi** | Da −100% a 200% | 40% |
| **Gialli** | Da −100% a 200% | 60% |
| **Verdi** | Da −100% a 200% | 40% |
| **Ciano** | Da −100% a 200% | 60% |
| **Blu** | Da −100% a 200% | 20% |
| **Magenta** | Da −100% a 200% | 80% |
| **Viraggio** | Attivo o disattivo | Disattivo |
| **Colore del viraggio** | Qualsiasi colore | #BF874C |

## Mappa sfumatura

Mappa i toni dell'immagine su **Sfumatura**, dal punto a sinistra per
i toni più scuri a quello a destra per i più chiari. **Quantità** miscela il
risultato con l'originale.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Sfumatura** | Qualsiasi sfumatura, modificata come nello strumento [Sfumatura](/it/docs/drawing/gradient/) | Dal nero al bianco, interpolazione **Oklab** |
| **Quantità** | 0–100% | 100% |

## Bilanciamento del bianco

Riscalda o raffredda l'immagine con **Temperatura** e la sposta verso il magenta
o il verde con **Tinta**. **Campiona punto neutro** in cima al pannello
**Proprietà** imposta entrambi i valori in modo che il punto su cui fai clic
sulla tela diventi neutro.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Temperatura** | Da −100 a 100, o fino a ±1000 digitando. I valori positivi sono più caldi. | 0 |
| **Tinta** | Da −100 a 100, o fino a ±800 digitando. I valori positivi sono più magenta. | 0 |
| **Mantieni luminosità** | Attivo o disattivo | Attivo |

## Viraggio diviso

Tinge le ombre verso il colore **Ombre** e le luci verso il colore **Luci**,
mantenendone la luminosità.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Ombre** | Qualsiasi colore | #295494 |
| **Luci** | Qualsiasi colore | #F5AD57 |
| **Bilanciamento** | Da −100 a 100. Sposta il punto in cui si incontrano i due viraggi. I valori positivi danno il colore **Ombre** a una parte più ampia dell'immagine. | 0 |
| **Intensità** | 0–100% | 30% |

## Solarizza

Inverte ogni canale di colore dove è più chiaro di **Soglia**. **Intensità**
miscela il risultato con l'originale.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Soglia** | 0–100% | 50% |
| **Intensità** | 0–100% | 100% |

## Iridescenza

Aggiunge un arcobaleno a pellicola sottile che segue la luminosità dell'immagine
e cambia nel tempo. Un'immagine esportata mostra i colori del momento
dell'esportazione.

| Impostazione | Intervallo o opzioni | Predefinito |
| --- | --- | --- |
| **Intensità** | 0–100% | 55% |
| **Dimensioni pellicola** | 8–240 px | 64 px |
| **Velocità** | 0–4 | 0,3 |
| **Anima** | Attivo o disattivo. Quando è attivo, i colori cambiano di continuo a **Velocità**. | Attivo |
| **Tempo fermo** | 0–3600 s: il momento mostrato mentre **Anima** è disattivo | 0 s |
