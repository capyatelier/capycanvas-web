---
title: "Spazio colore, profondità in bit e fusione"
description: "Scegliere spazio colore, profondità in bit e Fusione di un disegno, e modificarli in seguito dal menu Modifica."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Puoi scegliere spazio colore, profondità in bit e Fusione di un disegno quando lo
crei, e modificarli in seguito dal menu **Modifica**.

## Spazi colore

Lo spazio colore di lavoro di un disegno è **sRGB**, **Display P3**, **Adobe RGB
(1998)** o **ProPhoto RGB**. ProPhoto RGB usa un punto di bianco D50, gli altri
tre usano D65.

I profili ICC non possono essere spazi di lavoro. Puoi usarli per la
[prova colore di stampa](/it/docs/color-management/proof/) e per
l'[esportazione](/it/docs/files/export/).

## Profondità in bit

La profondità in bit di un disegno è **SDR a 8 bit**, **SDR a 16 bit**, **HDR a
virgola mobile a 16 bit** o **HDR a virgola mobile a 32 bit**. Una profondità a
virgola mobile lo rende un [disegno HDR](/it/docs/color-management/hdr/),
memorizzato in RGB lineare, in cui 1,0 è il bianco SDR a 203 cd/m².

## Sceglierli per un nuovo disegno

Scegli **File > Nuovo…** (**Ctrl+N**) e imposta **Spazio colore**, **Profondità
in bit** e **Fusione**, oppure scegli un **Predefinito**:

| Predefinito | Spazio colore | Profondità in bit | Fusione |
| --- | --- | --- | --- |
| **Disegno standard** | sRGB | SDR a 8 bit | Percettiva |
| **Ampia gamma di colori** | Display P3 | SDR a 8 bit | Percettiva |
| **Modifica foto** | ProPhoto RGB | SDR a 16 bit | Percettiva |
| **Disegno HDR** | sRGB | HDR a virgola mobile a 16 bit | Luce lineare |

Con una profondità a virgola mobile, **Fusione** è fissata su Luce lineare.
Attiva **Usa queste impostazioni per i nuovi disegni** per rendere queste scelte,
Fusione compresa, il valore predefinito per i nuovi disegni.

![La finestra di dialogo Nuovo disegno con Spazio colore impostato su Display P3, Profondità in bit, Fusione e la riga di riepilogo.](shot:color-management/new-dialog-color)

## Valori predefiniti nelle Preferenze

Scegli **Modifica > Preferenze** e apri la pagina **Colore**:

- Sotto **Nuovi disegni**, imposta **Spazio colore**, **Profondità in bit** e **Sfondo** dei disegni futuri. I disegni aperti non cambiano.
- Sotto **Apertura delle foto**, imposta **Precisione di modifica** (**Profondità sorgente** o **16 bit**) e **RGB e scala di grigi senza profilo** (**Considera sRGB** o **Chiedi**). Con **Chiedi**, l'apertura di una foto senza profilo mostra **Scegli interpretazione dell'immagine**. Le foto con profilo mantengono i loro profili incorporati.
- Seleziona **Gestisci profili…** per aprire la [Libreria dei profili colore](/it/docs/color-management/proof/).

Le Preferenze non hanno un'impostazione per la Fusione.

## Assegna profilo

Scegli **Modifica > Assegna profilo…** per mantenere i valori RGB del disegno e
leggerli in un altro spazio di lavoro. Scegli lo spazio sotto **Spazio colore**,
dove Adobe RGB (1998) compare come **Adobe RGB**. I livelli fotografici mantengono
il profilo sorgente della loro [foto originale](/it/docs/layers/types/).

## Converti spazio colore

Scegli **Modifica > Converti spazio colore…** per cambiare i valori RGB in modo
che i colori mantengano il loro aspetto in un altro spazio di lavoro, entro il
suo gamut.

Con **Salva copia unita**, **Applica** diventa **Salva copia…**. La copia ha un
solo livello, con le stesse dimensioni e la stessa profondità in bit. Il suo nome
file deve terminare con `.capy` e non può essere il file del disegno aperto.

![La finestra di dialogo Converti spazio colore con il confronto Prima e Dopo e il messaggio sul gamut.](shot:color-management/convert-dialog)

### Spazio colore

Lo spazio di lavoro in cui convertire. All'inizio è selezionato lo spazio
corrente.

### Risultato

**Livelli modificabili** (predefinito) converte ogni livello sul posto. **Salva
copia unita** salva una copia convertita e unita come nuovo file `.capy` e lascia
invariato il disegno aperto.

### Intento di rendering

**Colorimetrico relativo** (predefinito), **Percettivo**, **Saturazione** o
**Colorimetrico assoluto**. La compensazione del punto nero è sempre disattivata.

## Cambia profondità in bit

Scegli **Modifica > Cambia profondità in bit…** per cambiare la precisione
memorizzata. Lo spazio colore non cambia.

Passare a una profondità a virgola mobile rende il disegno HDR e, nello stesso
passaggio, imposta la Fusione su Luce lineare. Tornare a una profondità intera
mantiene Luce lineare finché non cambi la [Fusione](#fusione). Ridurre la
profondità può tagliare dei colori.

### Profondità in bit

La nuova profondità in bit. All'inizio è selezionata la profondità corrente.

### Dithering

**Nessuno** (predefinito) o **Stocastico (8 bit)**. Il dithering si applica solo
quando la destinazione è SDR a 8 bit.

## Anteprima e applicazione

Per applicare Assegna profilo, Converti spazio colore o Cambia profondità in bit:

1. Imposta i campi nella finestra di dialogo.
2. Seleziona **Anteprima risultato completo**.
3. Confronta **Prima** e **Dopo**.
4. Seleziona **Applica** (o **Salva copia…**).

**Applica** resta non disponibile finché l'anteprima non è pronta, e cambiare un
campo scarta l'anteprima. Se un colore viene tagliato, la riga di stato riporta
«Alcuni colori superano la gamma di destinazione. Confronta il risultato prima di
applicare.»

Applica è un passaggio di annullamento. Annulla e Ripeti aprono **Annulla cambio
colore** e **Ripeti cambio colore**. Queste finestre di dialogo applicano la
modifica senza altri input e offrono solo **Annulla**.

## Fusione

Puoi combinare i livelli sui valori codificati del disegno o in luce lineare.
Esegui una delle seguenti operazioni:

- Scegli **Modifica > Fusione > Fusione percettiva** o **Modifica > Fusione > Fusione in luce lineare**.
- Imposta **Fusione** su **Percettiva** o **Luce lineare** nella finestra di dialogo Nuovo.

![Il menu Modifica con il sottomenu Fusione aperto e Fusione percettiva selezionata.](shot:color-management/edit-blending-menu)

I pixel dipinti mantengono i loro valori. La Fusione cambia:

- il modo in cui i livelli si combinano;
- il modo in cui i pennelli asciutti depositano il colore sopra la pittura esistente;
- Sfocatura gaussiana, Maschera di contrasto, Passa alto, Smussatura che preserva i bordi e Fuoco morbido (Sfocatura movimento, Vignettatura e Bagliore lavorano sempre in luce lineare);
- il grigio neutro di **Nuovo livello Scherma e brucia**;
- [Separazione di frequenze…](/it/docs/retouch/dodge-burn/), che richiede Percettiva.

Cambiare la Fusione è un passaggio di annullamento. I disegni HDR usano sempre
Luce lineare, ed entrambe le voci di menu non sono disponibili. I nuovi disegni e
le foto aperte da file immagine partono con Percettiva. Le foto che si aprono a
una profondità a virgola mobile e i file `.capy` salvati prima che esistesse la
Fusione usano Luce lineare.

## Proprietà documento

Scegli **File > Proprietà documento…** per vedere **Dimensioni tela**, **Spazio
colore di lavoro**, **Profondità in bit**, **Fusione** e **Metadati di
risoluzione** del disegno. I disegni HDR aggiungono **Bianco di riferimento
HDR**. Ogni foto originale nel disegno aggiunge una riga con il suo profilo
sorgente. In questa finestra di dialogo non puoi modificare nulla.
