---
title: "Nuovi disegni"
description: "La finestra di dialogo Nuovo disegno e i livelli con cui parte un nuovo disegno."
related: ["color-management/color-spaces", "layers/types", "files/open-save"]
---

Puoi iniziare un disegno nella finestra di dialogo **Nuovo disegno**. Il nuovo
disegno si apre in una scheda propria, e il disegno corrente resta aperto.

## Aprire la finestra di dialogo Nuovo disegno

Esegui una delle seguenti operazioni:

- Scegli **File > Nuovo…**.
- Premi **Ctrl+N** (non nell'editor web).
- In Pittura e Foto, seleziona **Nuovo…** nella barra strumenti Comandi.

Scegli le impostazioni descritte sotto, poi seleziona **Crea**.

**Nuovo…** non è disponibile mentre è aperto un ritaglio o una trasformazione. Se
sono già aperti troppi dati di disegno, il nuovo disegno non si apre finché non
chiudi alcuni disegni.

## Impostazioni

![La finestra di dialogo Nuovo disegno con il predefinito Disegno standard.](shot:files/new-dialog)

### Predefinito

Compila tutti i campi da un predefinito integrato o da uno che hai salvato. Se
poi modifichi un campo, **Predefinito** passa a **Personalizzato**.

Tutti i predefiniti integrati misurano 2048 × 1536 pixel su sfondo bianco.

| Predefinito | Spazio colore | Profondità in bit | Fusione |
| --- | --- | --- | --- |
| **Disegno standard** | sRGB | SDR a 8 bit | Percettiva |
| **Ampia gamma di colori** | Display P3 | SDR a 8 bit | Percettiva |
| **Modifica foto** | ProPhoto RGB | SDR a 16 bit | Percettiva |
| **Disegno HDR** | sRGB | HDR a virgola mobile a 16 bit | Luce lineare |

### Rimuovi predefinito salvato

Elimina il predefinito salvato selezionato. I predefiniti integrati non possono
essere rimossi.

### Larghezza (px) e Altezza (px)

Da 1 a 8192 pixel. I campi accettano espressioni aritmetiche come «160*2».

### Spazio colore

**sRGB**, **Display P3**, **Adobe RGB (1998)** o **ProPhoto RGB** (vedi
[Spazio colore, profondità in bit e fusione](/it/docs/color-management/color-spaces/)).
Con **ProPhoto RGB** e **SDR a 8 bit**, la finestra di dialogo consiglia SDR a
16 bit.

### Profondità in bit

**SDR a 8 bit**, **SDR a 16 bit**, **HDR a virgola mobile a 16 bit** o **HDR a
virgola mobile a 32 bit**. Una profondità in bit a virgola mobile crea un
disegno HDR.

### Fusione

**Percettiva** o **Luce lineare**. Con una profondità in bit a virgola mobile,
**Fusione** è fissata su **Luce lineare**.

### Sfondo

**Bianco** o **Trasparente**. **Trasparente** nasconde il livello **Carta**.

### Nome del predefinito

Quando selezioni **Crea**, salva le impostazioni come predefinito con questo
nome. Un nome può avere fino a 64 caratteri, e puoi conservare fino a 64
predefiniti.

### Usa queste impostazioni per i nuovi disegni

Se è attivo, la finestra di dialogo si apre con queste impostazioni la volta
successiva. Spazio colore, profondità in bit e sfondo diventano anche le
impostazioni di **Nuovi disegni** nelle [Preferenze](/it/docs/preferences/).

## I primi livelli

![Il pannello Livelli di un nuovo disegno, con Inchiostro corrente sopra Carta.](shot:files/new-layers)

Un nuovo disegno ha due livelli. **Inchiostro corrente**, un livello di pittura
vuoto, è selezionato sopra **Carta**, un livello di riempimento bianco (vedi
[Tipi di livello](/it/docs/layers/types/)). I livelli che aggiungi in seguito si
chiamano «Livello» seguito da un numero.

## Altre piattaforme

Su iPad, macOS e Android, un campo **Salva predefinito…** e un'opzione **Usa
valori predefiniti** prendono il posto di **Nome del predefinito** e **Usa queste
impostazioni per i nuovi disegni**. iPad e macOS non hanno il pulsante
**Rimuovi predefinito salvato**.

Su Linux, **Salva predefinito…** apre una finestra di dialogo separata per il
nome, e **Spazio colore**, **Profondità in bit** e **Fusione** sono raggruppati
sotto **Colore**.
