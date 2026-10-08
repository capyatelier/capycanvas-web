---
title: "Aprire e salvare"
description: "Aprire disegni e foto, salvare file .capy e lavorare con più disegni aperti."
related: ["files/new", "files/export", "transform/move-transform", "start/undo"]
---

I comandi di questa pagina si trovano nel menu **File**. In Schizzo, aprilo da
**Menu principale** nella barra del titolo.

![Il menu File.](shot:files/file-menu)

## Aprire un disegno o una foto

Puoi aprire disegni `.capy` e foto in formato OpenEXR, TIFF, PNG, WebP, BMP,
JPEG, GIF, HEIF e AVIF. Ogni file si apre in una scheda propria.

Esegui una delle seguenti operazioni:

- Scegli **File > Apri…**. Puoi scegliere più file, tranne che su Linux.
- Premi **Ctrl+O**.
- In Pittura e Foto, seleziona **Apri…** nella barra strumenti Comandi.
- Nell'editor web o su Linux, trascina i file sul nome del disegno o sulle schede nella barra del titolo.
- Se hai installato l'editor web come app, apri un file `.capy`, `.png`, `.jpg`, `.tif`, `.avif` o `.exr` con {appName} dal tuo sistema.

## Foto

Una foto si apre come nuovo disegno con un livello fotografico, che prende il
nome dal file, sopra un livello **Carta**. La foto mantiene il suo profilo colore
e, per impostazione predefinita, la sua profondità in bit. Il salvataggio del
disegno crea un file `.capy` e non sovrascrive mai la foto.

- Di una GIF o WebP animata si apre il primo fotogramma.
- Una foto può misurare fino a 32768 pixel per lato.
- Una foto CMYK si apre solo se ha un profilo colore incorporato.
- Le foto HEIF e AVIF HDR non possono essere aperte.

Se nelle [Preferenze](/it/docs/preferences/) **RGB e scala di grigi senza
profilo** è impostato su **Chiedi**, una foto senza profilo colore apre la
finestra di dialogo **Scegli interpretazione dell'immagine**.

## Importare immagini come livelli

Puoi aggiungere immagini al disegno corrente come nuovi livelli.

Esegui una delle seguenti operazioni:

- Scegli **File > Importa immagine come livello…**.
- Premi **Ctrl+Maiusc+O**.
- Trascina le immagini sulla tela oppure su una riga del pannello **Livelli**.

Ogni immagine diventa un livello che prende il nome dal file, sopra il livello
selezionato, con le [maniglie di trasformazione](/it/docs/transform/move-transform/)
per posizionarla. Un'immagine più grande della tela viene ridotta per starci.

Non puoi importare un file `.capy`. Nell'editor web, un'immagine può pesare fino
a 512 MiB.

## Salvare

Puoi salvare il disegno con tutti i suoi livelli come file `.capy`.

Esegui una delle seguenti operazioni:

- Scegli **File > Salva**.
- Premi **Ctrl+S**.
- In Pittura e Foto, seleziona **Salva** nella barra strumenti Comandi.

Il primo salvataggio chiede una posizione, e i salvataggi successivi scrivono
nello stesso file. Dopo il salvataggio, la scheda mostra il nome del file senza
il segno ●.

In Firefox e Safari, il disegno risulta salvato solo dopo che hai selezionato
**Scarica** e poi **File salvato** nella finestra di dialogo **Scarica file**.

![La finestra di dialogo Scarica file con Annulla, Scarica e File salvato.](shot:files/download-file)

**File > Salva con nome…** (**Ctrl+Maiusc+S**) chiede sempre una posizione, e i
salvataggi successivi vanno nel nuovo file. Anche **Salva** chiede una posizione
se il file è cambiato sul disco da quando lo hai aperto o salvato.

**Salva** non è disponibile mentre è aperto un ritaglio o una trasformazione.

## Cosa conserva un file .capy

Un file `.capy` conserva ogni livello con la sua maschera e le sue impostazioni,
i filtri, le selezioni e le guide salvate, lo spazio colore, la profondità in bit
e la fusione, e i dati EXIF, XMP e IPTC di una foto. Non conserva la cronologia
degli annullamenti, la vista né la selezione attiva.

## Disegni di sola lettura

Un file `.capy` che {appName} non può modificare, per esempio un file
danneggiato, si apre in una finestra di dialogo invece che in una scheda. **Copy
Original File…** salva una copia del file, ed **Export Preview Image…** salva
l'anteprima del disegno come PNG.

## Schede dei disegni

![Tre schede di disegni nella barra del titolo, una segnata come non salvata.](shot:files/drawing-tabs)

La barra del titolo mostra una scheda per ogni disegno aperto. Con un solo
disegno aperto, mostra invece il nome e le dimensioni del disegno.

Seleziona una scheda per passare al suo disegno, oppure usa questi tasti:

| Per | Editor web | Linux |
| --- | --- | --- |
| Mostrare il disegno precedente | **Alt+Pagina su** | **Ctrl+Pagina su** o **Ctrl+Maiusc+Tab** |
| Mostrare il disegno successivo | **Alt+Pagina giù** | **Ctrl+Pagina giù** o **Ctrl+Tab** |
| Aprire l'elenco Disegni | **Ctrl+Alt+D** | **Ctrl+Maiusc+A** |

Nell'editor web, trascina una scheda in orizzontale per riordinare le schede.

Un ● prima di un nome indica modifiche non salvate. In una barra del titolo
stretta, le schede diventano un unico pulsante che apre l'elenco Disegni.

Ogni scheda conserva la propria cronologia degli annullamenti, la vista e la
selezione. Le schede non fanno parte di un'area di lavoro.

## Disegni…

![L'elenco Disegni con tre disegni.](shot:files/drawings-list)

Puoi vedere tutti i disegni aperti in un unico elenco.

Esegui una delle seguenti operazioni:

- Scegli **File > Disegni…** o **Finestra > Disegni…**.
- Nell'editor web, fai clic con il pulsante destro su una scheda.

Seleziona una riga per passare al suo disegno, trascina la maniglia a sinistra
per riordinare, oppure seleziona **×** per chiudere il disegno. L'ordine delle
schede ha i propri **Annulla ordine schede** e **Ripeti ordine schede** in fondo
all'elenco.

## Chiudere un disegno

Esegui una delle seguenti operazioni:

- Scegli **File > Chiudi**.
- Premi **Ctrl+W**. Nell'editor web, premi **Ctrl+Alt+W**.
- Seleziona **×** sulla scheda del disegno.

Se il disegno ha modifiche non salvate, una finestra di dialogo chiede
“Salvare le modifiche a «*nome*»?” con **Annulla**, **Scarta modifiche** e
**Salva**.

Quando chiudi l'ultimo disegno, l'editor web apre un nuovo disegno vuoto. Su
Linux, la finestra si chiude.

## Riaprire dopo un riavvio

Tutti i disegni aperti, salvati o no, si riaprono al successivo avvio di {appName}, ciascuno con la propria cronologia degli annullamenti, vista, selezione e
ultima esportazione. Chiudere {appName} non chiede di salvare.

Nell'editor web, cancellare i dati del sito elimina i disegni non salvati.

Dopo una chiusura imprevista di {appName}, i disegni riaperti mostrano
«(recuperato)» dopo il nome finché non li salvi.

## Nuova finestra

Su Windows, macOS, Linux e iPad, **File > Nuova finestra** (**Ctrl+Maiusc+N**)
apre un'altra finestra con i propri disegni.
