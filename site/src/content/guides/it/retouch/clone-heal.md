---
title: "Clonare e correggere"
description: "Il Timbro clone e i pennelli correttivi, e la sorgente da cui copiano."
related: ["retouch/dodge-burn", "layers/settings", "brushes/basics", "photo/retouch"]
---

Puoi dipingere sopra i difetti con pixel copiati da un altro punto
dell'immagine.

| Strumento | Funzione |
| --- | --- |
| **Timbro clone** | Dipinge con i pixel copiati dal disco della sorgente. |
| **Pennello correttivo** | Dipinge come **Timbro clone**. Quando sollevi la penna, la copia assume il colore e la luminosità attorno al tratto e mantiene la propria trama. |
| **Pennello correttivo al volo** | Quando sollevi la penna, sostituisce la zona su cui hai dipinto con la trama dell'area vicina più simile, fusa con ciò che la circonda. |

## Scegliere uno strumento di ritocco

Esegui una delle seguenti operazioni:

- Premi **S**. Premilo di nuovo per passare a **Pennello correttivo**, poi a **Pennello correttivo al volo**.
- In Foto, seleziona **Timbro clone** o **Pennello correttivo al volo / Pennello correttivo** nella barra strumenti Strumenti.
- In Pittura, seleziona **Sfuma / Timbro clone** nella barra strumenti Strumenti. Fai clic con il pulsante destro sul pulsante o tienilo premuto per scegliere **Timbro clone**.
- In Schizzo, seleziona **Modella** nella barra del titolo, selezionalo di nuovo per aprire il cassetto e seleziona **Clona**, **Correggi** o **Correggi al volo**.
- Digita il nome dello strumento nella [ricerca comandi](/it/docs/start/command-search/).

**Pennello correttivo** e **Pennello correttivo al volo** non hanno un pulsante
in Pittura.

Ogni strumento è un pennello, con **Dimensioni pennello**, **Opacità**,
**Flusso** e le impostazioni di **Punta** nel pannello Strumento (vedi
[Dimensioni, opacità e flusso](/it/docs/brushes/basics/)).

![Il pannello Strumento per Timbro clone, con le impostazioni del pennello e della sorgente.](shot:retouch/clone-tool-panel)

## Sorgente

**Sorgente** nel pannello Strumento stabilisce cosa copiano gli strumenti:

- **Livelli di riferimento** (il valore predefinito) copia il livello su cui dipingi insieme ai livelli sottostanti contrassegnati come riferimenti.
- **Livello in modifica** copia solo il livello su cui dipingi.

Con **Livelli di riferimento**, puoi ritoccare su un livello vuoto sopra la
foto. Contrassegna la foto con [Usa come riferimento](/it/docs/layers/settings/),
oppure scegli **Livello > Impostazioni livello > Usa livello sottostante come riferimento**.
Se dipingi su un livello vuoto e sotto di esso non c'è nessun riferimento
contrassegnato, il messaggio propone **Usa *nome* come riferimento**.

Non puoi ritoccare direttamente un livello scalato o ruotato. Ritocca su un nuovo
livello sopra quello scalato o ruotato.

## Impostare la sorgente

**Timbro clone** e **Pennello correttivo** copiano dal disco della sorgente, un
piccolo anello con una croce.

Esegui una delle seguenti operazioni:

- Tieni premuto **Alt** e fai clic nel punto da cui vuoi copiare.
- Seleziona **Imposta sorgente**, poi fai clic.

Finché non la imposti, la sorgente si trova al centro della vista. Trascina il
disco per spostare la sorgente. Un dito può trascinare il disco, ma non imposta
mai la sorgente. Mentre dipingi, il disco segue il punto che viene copiato.

**Pennello correttivo al volo** trova da sé la propria sorgente e non ha un
disco.

## Impostazioni della sorgente

Queste impostazioni valgono per **Timbro clone** e **Pennello correttivo**.

### Sorgente allineata

Mantiene uno scostamento costante tra la sorgente e il pennello da un tratto
all'altro. Quando è disattivata, ogni tratto inizia a copiare dal disco della
sorgente. Attiva per impostazione predefinita.

### Rifletti sorgente orizzontalmente e Rifletti sorgente verticalmente

Riflettono i pixel copiati rispetto al disco della sorgente.

### Azzera scostamento sorgente

Fa ripartire la copia dal disco della sorgente al tratto successivo. Disponibile
dopo un tratto allineato.

### Imposta sorgente

Il clic successivo imposta la sorgente.

## Barra azioni della tela per il disco della sorgente

Fai clic sul disco della sorgente senza trascinare per mostrare accanto a esso
la [barra azioni della tela](/it/docs/selections/working/), con **Allineato**,
**Sorgente**, i due pulsanti per riflettere, **Azzera scostamento** e
**Imposta sorgente**. Fai di nuovo clic sul disco, o scegli un altro strumento,
per nascondere la barra.

![Il disco della sorgente con la sua barra azioni della tela.](shot:retouch/clone-source-bar)
