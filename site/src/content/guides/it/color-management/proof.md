---
title: "Prova colore"
description: "La prova colore a video di una stampa nel pannello Prova colore, l'avviso fuori gamma e l'indicatore dello schermo nel piè di pagina."
related: ["color-management/hdr", "color-management/color-spaces", "files/export", "start/canvas"]
---

Puoi vedere come verrà stampato un disegno nel pannello **Prova colore**, senza
modificare il disegno.

## Pannello Prova colore

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Prova colore**.
- Scegli **Pannello Prova colore** nella ricerca comandi.
- In Pittura e Foto, seleziona la scheda **Prova colore** accanto a **Navigatore**.

Seleziona una modalità in cima al pannello:

- **Disattivato** mostra il disegno normalmente.
- **SDR** mostra la versione SDR di un [disegno HDR](/it/docs/color-management/hdr/). Solo i disegni HDR hanno questa modalità.
- **Stampa** simula una stampa con un profilo ICC.

La prova colore compare sulla tela e nel Navigatore, mai nelle esportazioni né
nell'Istogramma. Scegliere una modalità non segna il disegno come modificato. Un
disegno riaperto parte con la prova colore disattivata, ma mantiene il suo
profilo di stampa.

## Attivare e disattivare la prova colore

Esegui una delle seguenti operazioni:

- Scegli **Visualizza > Prova colore**.
- Premi **Ctrl+Alt+P**. Le mappe dei tasti Stile Photoshop e Stile Krita usano anche **Ctrl+Y**.

La prova colore si attiva nell'ultima modalità usata (all'inizio, SDR per i
disegni HDR e Stampa per i disegni SDR). Il pannello Prova colore si apre, e
**Visualizza > Prova colore** mostra un segno di spunta.

Nella pagina [Scorciatoie da tastiera](/it/docs/input/keyboard/), il comando si
chiama **Colori di prova**. Puoi assegnargli un tasto che attiva la prova colore
solo mentre lo tieni premuto.

## Prova colore di stampa

Puoi simulare una stampa con un profilo ICC RGB, CMYK o in scala di grigi.
Seleziona **Stampa** e scegli un **Profilo**. La tela non viene simulata finché
non scegli un profilo.

Mentre la prova colore di stampa è attiva, il piè di pagina riporta «Prova
colore: *profilo*». Se la prova non riesce, riporta «Prova colore non
disponibile», con il motivo nel suggerimento.

Il profilo e le opzioni vengono salvati nel disegno. Scegliere un profilo segna
il disegno come modificato ed è un passaggio di annullamento. Annulla rimuove il
profilo e disattiva la prova colore. Nel file `.capy` viene salvato solo il
profilo di stampa attivo. Quando sostituisci il profilo salvato nel disegno,
quello precedente viene prima aggiunto a **Profili salvati**. I disegni HDR
vengono simulati a partire dalla loro versione SDR.

![Il pannello Prova colore sulla pagina Stampa con Adobe RGB (1998) scelto come profilo.](shot:color-management/proof-panel-print)

### Profilo

L'elenco contiene il **Profilo documento** salvato nel disegno, i **Profili
salvati** della libreria e gli **Spazi colore standard**. **Aggiungi profilo…**
aggiunge un file `.icc` o `.icm` alla libreria e lo seleziona, e **Gestisci
profili…** apre la Libreria dei profili colore.

### Simula

**Colori**, **Inchiostro nero** (predefinito) o **Carta e inchiostro**. **Carta e
inchiostro** simula anche l'inchiostro nero.

### Intento

**Relativo** (predefinito), **Percettivo**, **Saturazione** o **Assoluto**.

### Compensazione del punto nero

Attiva per impostazione predefinita. Non disponibile con **Assoluto**.

### Avviso fuori gamma

Lo stesso interruttore del comando **Avviso fuori gamma**, descritto più sotto.

## Libreria dei profili colore

Seleziona **Gestisci profili…** nell'elenco **Profilo**, oppure nella pagina
**Colore** delle [Preferenze](/it/docs/preferences/), per aprire la **Libreria dei
profili colore**.

- **Importa profilo ICC…** aggiunge un file `.icc` o `.icm` fino a 16 MiB.
- **Mostra nei menu dei profili** e **Nascondi dai menu dei profili** scelgono quali profili offre l'elenco **Profilo**.
- **Rimuovi** toglie un profilo dalla libreria.

La libreria contiene fino a 128 profili e 64 MiB in tutto.

## Avviso fuori gamma

Puoi mostrare sulla tela in grigio medio i colori che il profilo di stampa non
riesce a riprodurre. Esegui una delle seguenti operazioni:

- Attiva **Avviso fuori gamma** nella pagina Stampa del pannello Prova colore.
- Premi **Ctrl+Maiusc+Y**.
- Scegli **Avviso fuori gamma** nella ricerca comandi.

Il piè di pagina riporta «Prova colore: *profilo* · Avviso fuori gamma». Con la
simulazione di stampa disattivata, riporta «Gamma: *profilo*».

L'avviso fuori gamma è disponibile solo dopo che hai scelto un profilo di stampa.
Scegliere **Disattivato** o **SDR**, oppure disattivare **Visualizza > Prova
colore**, lo disattiva. Mentre è attivo, i disegni HDR mostrano la loro versione
SDR.

## Indicatore dello schermo

Un indicatore a sinistra nel piè di pagina avvisa quando lo schermo non può
mostrare con precisione il disegno o la prova colore. Seleziona l'indicatore per
aprirne i dettagli, e selezionalo di nuovo o premi **Esc** per chiuderli.

| Indicatore | Compare quando |
| --- | --- |
| «Colori fuori gamma» | Lo schermo non può mostrare alcuni colori visibili del disegno o della prova colore. |
| «Può differire dalla stampa» | La prova colore di stampa o l'avviso fuori gamma è attivo, e {appName} non riesce a stabilire come lo schermo mostra i colori. |

Per un disegno HDR, l'indicatore riporta anche se lo schermo mostra l'HDR (vedi
[HDR](/it/docs/color-management/hdr/)).

![L'indicatore Colori fuori gamma nel piè di pagina con i suoi dettagli ed Evidenzia questi colori.](shot:color-management/screen-chip)

Attiva **Evidenzia questi colori** nei dettagli per colorare di blu sulla tela i
colori tagliati. L'evidenziazione non viene mai salvata.

Schizzo nasconde il piè di pagina per impostazione predefinita. Per mostrarlo,
scegli **Finestra > Personalizza barra del titolo…** e attiva **Mostra piè di
pagina**.
