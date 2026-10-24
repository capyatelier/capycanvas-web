---
title: "Mescolanza, diffusione e setole"
description: "Le impostazioni che controllano come i pennelli bagnati, ad acquerello, di sfumatura e a setole trattano il colore."
related: ["brushes/tip-texture", "brushes/basics", "drawing/blend-liquify", "drawing/brush-tools"]
---

Puoi impostare come i pennelli bagnati e di sfumatura trattano il colore nel
pannello **Strumento**. Ogni gruppo compare solo sui pennelli elencati nella sua
sezione.

![La parte inferiore del pannello Strumento per Acquerello bagnato, con i gruppi Mescolanza, Acquerello, Diffusione e Fusione.](shot:brushes/wet-media-settings)

## Mescolanza

**Mescolanza** compare sui pennelli a olio, su **Gouache coprente**, sui
pennelli ad acquerello e su ogni sfumino. **Prelievo mediato**,
**Persistenza** e **Ricarica con pressione** compaiono solo sui pennelli a olio,
su **Gouache coprente**, **Sfumino bagnato** e **Miscelatore di colori**.

### Carica di colore

Imposta quanto colore proprio porta il pennello e, nei pennelli ad acquerello,
l'intensità del pigmento. Valori più bassi lasciano prevalere il colore prelevato
dal livello.

### Prelievo del colore

Imposta quanto lontano il pennello trascina lungo il tratto il colore che preleva
dal livello.

### Diluizione

Diluisce il colore che il pennello porta. Valori più alti indeboliscono il colore
proprio del pennello nella mescolanza.

### Prelievo mediato

Imposta quanto i colori prelevati lungo la punta si fondono in uno solo. A 0%,
ogni parte della punta mantiene il proprio.

### Persistenza

Imposta quanto lontano il colore mediato viene portato lungo il tratto. Compare
solo quando **Prelievo mediato** è sopra lo 0%.

### Ricarica con pressione

Imposta quanto una pressione decisa ricarica nel pennello il colore selezionato.
**Pennello miscelatore** stende il suo colore con una pressione decisa e sfuma
solo con un tocco leggero.

## Sfumino

Ogni sfumino aggiunge impostazioni al gruppo **Sfumino**. **Estensione** si trova
in cima al pannello **Strumento**.

| Impostazione | Sfumini | Imposta |
| --- | --- | --- |
| **Estensione** | Tutti tranne **Spatola per sfumare** e **Marmorizzazione** | Quanto lontano attorno a ogni punto del tratto lo sfumino raccoglie colore. |
| **Striature** | **Sfumino**, **Sfumino morbido**, **Sfumino di carta**, **Fazzoletto di carta**, **Sfumino naturale**, **Sfumino a setole**, **Spatola per sfumare** | Quanto il tratto si spezza in striature lungo la sua direzione. |
| **Nitidezza** | **Nitidezza** | Quanto contrasto aggiunge il tratto. |
| **Texture conservata** | **Sfumino che preserva la texture** | Quanta parte della texture fine sotto il tratto resta sopra il colore sfumato. |
| **Dimensione dei dettagli** | **Sfumino che preserva la texture** | Le dimensioni della texture che viene conservata. |
| **Sfuma la luminosità** | **Sfumino della tinta** | Quanta luminosità si fonde insieme a tinta e saturazione. |
| **Grana** | **Sfumino sparso** | Quanto completamente ogni pixel sparso sostituisce quello sottostante. |
| **Allungamento** | **Sfumino pittorico**, **Sfumino cristallino** | Quanto si allungano le macchie o le celle lungo il tratto. |
| **Dimensione delle celle** | **Sfumino cristallino** | La dimensione delle celle. |
| **Vortice** | **Marmorizzazione** | Quanto il colore si arriccia. |
| **Dimensione dei vortici** | **Marmorizzazione** | La dimensione dei vortici. |
| **Conservazione dei bordi** | **Sfumino a pettine** | Con quanta facilità la sfumatura si ferma su un bordo tra due colori. |

## Acquerello

**Lavatura ad acquerello** e **Acquerello bagnato** hanno un gruppo
**Acquerello** per il bordo più scuro dove il colore si raccoglie. L'acquerello
reagisce solo al colore sullo stesso livello. **Intensità bordo** si trova in cima
al pannello **Strumento**, sopra i gruppi.

### Intensità bordo

Imposta quanto è scuro il bordo.

### Larghezza bordo

Imposta la larghezza del bordo, da 0 a 32 px.

## Diffusione

Il gruppo **Diffusione** dei due pennelli ad acquerello imposta come acqua e
pigmento si espandono nella carta attorno al tratto. Il colore si espande solo
durante il tratto, non dopo che sollevi la penna.

### Diffusione sul bagnato

Imposta la velocità con cui il colore si espande nella carta già bagnata.

### Diffusione a secco

Imposta la velocità con cui il colore si espande nella carta asciutta.

### Distanza di diffusione

Imposta fin dove il colore può espandersi da ogni impronta, da 0 a 96 px.

### Carica d'acqua

Imposta quanta acqua ogni impronta deposita sulla carta. Si trova in cima al pannello **Strumento**, sopra i gruppi.

## Mescolanza dei colori

Puoi scegliere come un pennello che mescola combina i colori che preleva.

Esegui una delle seguenti operazioni:

- Scegli **Mescolanza Oklab**, **Mescolanza in luce lineare** o **Mescolanza classica** da **Mescolanza dei colori** nel pannello **Strumento**.
- Apri **Altre opzioni strumento** nella barra Opzioni strumento, poi scegli **Mescolanza dei colori** nel cassetto Strumento ([Dimensioni, intensità e opacità](/it/docs/brushes/basics/)).
- Cerca il nome della scelta nella ricerca comandi.

| Scelta | Mescolanza |
| --- | --- |
| **Mescolanza Oklab** | Mescola i colori prelevati in modo uniforme, come li vede l'occhio. |
| **Mescolanza in luce lineare** | Mescola i colori prelevati come si mescola la luce. |
| **Mescolanza classica** | Mescola i valori di colore così come sono memorizzati nel disegno. |

Tutti i pennelli integrati che mescolano partono da **Mescolanza Oklab**. La
scelta viene salvata con il pennello, e l'impostazione **Fusione** del disegno
non la modifica. Per un pennello che non mescola, le scelte non sono disponibili.

![L'impostazione Mescolanza dei colori con Mescolanza Oklab.](shot:brushes/color-mixing-menu)

## Setole

Il gruppo **Setole** compare solo su **Pennello a setole**. Questo pennello
striscia l'altro colore della coppia primo piano e sfondo in spesse creste di
colore.

### Scala delle setole

Imposta la dimensione dei segni delle setole rispetto alla dimensione del
pennello. Il cursore va dal 25% al 200%, e puoi digitare valori fino al 400%.

### Carica di colore

Imposta quanto colore porta il pennello all'inizio di ogni tratto.
