---
title: "Esportare immagini"
description: "Esportare una copia unita di un disegno come immagine con la finestra di dialogo Esporta immagine ed Esporta di nuovo."
related: ["files/open-save", "color-management/hdr", "color-management/color-spaces"]
---

Puoi esportare una copia unita del disegno come immagine. L'esportazione non
modifica il disegno `.capy` e non vale come salvataggio.

## Esportare un'immagine

Esegui una delle seguenti operazioni:

- Scegli **File > Esporta…**.
- Premi **Ctrl+Maiusc+E**.

La finestra di dialogo **Esporta immagine** si apre sulla destinazione **Web /
Condivisione**. Seleziona **Scegli file…** e scegli una posizione. Il nome
proposto è il nome del disegno con l'estensione del formato, per esempio
«Senza titolo.png». In Firefox e Safari si apre invece la finestra di dialogo
**Scarica file** (vedi [Aprire e salvare](/it/docs/files/open-save/)).

Il nome del file deve terminare con l'estensione del formato. **Esporta…** non è
disponibile mentre è aperto un ritaglio o una trasformazione.

## Impostazioni

![La finestra di dialogo Esporta immagine con Destinazione impostata su Web / Condivisione.](shot:files/export-dialog)

Alcune impostazioni compaiono solo per determinati formati.

### Destinazione

Imposta tutte le altre impostazioni in una volta. I predefiniti di esportazione
salvati compaiono dopo queste destinazioni integrate:

- **Web / Condivisione**: un PNG sRGB a 8 bit alle dimensioni originali.
- **Immagine ad ampia gamma di colori**: lo stesso in Display P3.
- **Ulteriori modifiche**: un TIFF a 16 bit nello spazio colore del disegno.
- **Personalizzato**: parte come **Web / Condivisione**.

### Gamma dinamica

**SDR** su un disegno SDR, oppure una scelta di formati HDR su un disegno HDR
(vedi Esportazione HDR più sotto).

### Taglia colori HDR fuori intervallo

Taglia i colori che superano l'intervallo di PNG HDR, JPEG HDR e AVIF HDR.
Compare solo per questi formati.

### Formato

**Immagine PNG**, **Immagine TIFF**, **Immagine JPEG** o **WebP · senza
perdita** (vedi Limiti dei formati più sotto).

### Profilo di uscita

**sRGB**, **Display P3**, **Adobe RGB (1998)** o **ProPhoto RGB**, più
«Originale: *nome*» per ogni livello fotografico con un proprio profilo
incorporato.

### Profondità in bit

**8 bit** o **16 bit**.

### Trasparenza

**Mantieni**, **Sfondo bianco** o **Sfondo nero**.

### Intento di rendering

**Colorimetrico relativo** (predefinito), **Percettivo**, **Saturazione** o
**Colorimetrico assoluto**.

### Dithering

**Nessuno** o **Stocastico (uscita a 8 bit)**.

### Qualità

La qualità di compressione, da 1 a 100, con valore predefinito 90. Compare per
JPEG, JPEG HDR e AVIF HDR.

### Dimensioni in pixel

**Dimensioni originali** o **Adatta entro i limiti**. **Adatta entro i limiti**
aggiunge **Larghezza massima (px)** e **Altezza massima (px)**, e riduce
l'immagine per farla stare entro questi valori senza cambiarne le proporzioni.

### Metadati di risoluzione

**Mantieni originale**, **Pixel per pollice** o **Ometti**. **Pixel per pollice**
aggiunge un campo da 1 a 65535, con valore predefinito 300.

### Metadati

**Tutti**, **Copyright e contatti** o **Nessuno**. Con **Tutti**, **Rimuovi
posizione** è attivo per impostazione predefinita. Queste righe compaiono solo
per i disegni aperti da una foto con dati della fotocamera o di copyright.

### Importa profilo ICC… e Profili salvati…

**Importa profilo ICC…** aggiunge a **Profilo di uscita** un file `.icc` o `.icm`
fino a 16 MiB. **Profili salvati…** apre la **Libreria dei profili colore**.

### Nome del predefinito e pulsanti dei predefiniti

**Salva predefinito** salva le impostazioni come nuova destinazione con il
**Nome del predefinito**. **Aggiorna predefinito** ed **Elimina predefinito**
modificano o rimuovono il predefinito salvato selezionato. **Ripristina
destinazione** ripristina le impostazioni di una destinazione integrata.

### Anteprima uscita

Mostra l'immagine esportata accanto al disegno, con le didascalie **Disegno** e
**Uscita**, e un avviso se dei colori cadono fuori dal gamut di uscita. Cambiare
una qualsiasi impostazione cancella l'anteprima.

### Scegli file…

Chiede dove salvare l'immagine.

## Limiti dei formati

- JPEG e WebP sono solo a 8 bit.
- JPEG non può mantenere la trasparenza.
- WebP ammette fino a 16.384 pixel per lato.
- Con un profilo di uscita in scala di grigi, WebP non è disponibile.
- Con un profilo di uscita CMYK sono disponibili solo TIFF e JPEG, senza trasparenza.

Le scelte non compatibili con le altre impostazioni appaiono attenuate.

## Predefiniti di esportazione

Dopo un'esportazione, una destinazione integrata conserva le impostazioni che hai
usato. Quando esporti con un predefinito salvato, le impostazioni vengono
conservate in **Personalizzato**, e il predefinito stesso cambia solo con
**Aggiorna predefinito**.

Il nome di un predefinito può avere fino a 80 caratteri, e puoi conservare fino a
64 predefiniti. I predefiniti valgono per tutti i disegni.

## Esportazione HDR

![La finestra di dialogo Esporta immagine per un disegno HDR con JPEG HDR · mappa di guadagno, dopo Anteprima uscita.](shot:files/export-hdr-preview)

Su un disegno a virgola mobile a 16 o 32 bit, **Gamma dinamica** offre queste
scelte:

| Scelta | Scrive |
| --- | --- |
| **Resa SDR** | La versione SDR del disegno, con le impostazioni SDR |
| **JPEG HDR · mappa di guadagno** | Un `.jpg` con una mappa di guadagno |
| **AVIF HDR · mappa di guadagno con trasparenza** | Un `.avif` con una mappa di guadagno e trasparenza |
| **PNG HDR · BT.2020 PQ** | Un `.png` codificato in BT.2020 PQ, con trasparenza |
| **OpenEXR · 32 bit a virgola mobile** | Un `.exr` nello spazio colore del disegno, con trasparenza |

**Resa SDR** usa la versione SDR impostata con
[Prova SDR](/it/docs/color-management/hdr/). OpenEXR non conserva dati della
fotocamera o di copyright. Su un disegno HDR, **Ulteriori modifiche** si chiama
**Ulteriori modifiche (SDR)** e usa OpenEXR.

Per JPEG HDR e AVIF HDR, **Anteprima uscita** aggiunge **Anteprima resa**, con
**Ricostruzione HDR · anteprima SDR** e **Base SDR codificata**.

Se l'anteprima trova colori oltre l'intervallo di PNG, JPEG o AVIF HDR, **Scegli
file…** non è disponibile finché non attivi **Taglia colori HDR fuori
intervallo** o non scegli OpenEXR.

## Esporta di nuovo

**File > Esporta di nuovo** ripete l'ultima esportazione del disegno con le
stesse impostazioni e lo stesso file, senza la finestra di dialogo. Non è
disponibile finché non hai esportato il disegno almeno una volta.

Ogni disegno conserva la propria ultima esportazione, anche dopo un riavvio. In
Firefox e Safari, **Esporta di nuovo** mostra la finestra di dialogo **Scarica
file**.

## Altre piattaforme

Su Linux, le impostazioni sono suddivise nelle pagine **Dimensioni**, **Colore e
trasparenza** e **Predefinito**, e alcune etichette sono diverse. Anche le
finestre di dialogo di iPad e macOS usano etichette proprie.
