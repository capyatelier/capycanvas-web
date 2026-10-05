---
title: "Strumenti di selezione"
description: "Gli strumenti di selezione e le loro impostazioni nel pannello Strumento."
related: ["selections/working", "selections/tonal-range", "selections/quick-mask", "customize/toolbars"]
---

Puoi selezionare una parte del disegno con gli strumenti di selezione. Le
impostazioni di uno strumento si trovano nel pannello Strumento e, in Foto,
anche nella barra Opzioni strumento in cima alla finestra.

| Strumento | Seleziona | Tasto |
| --- | --- | --- |
| **Selezione rettangolare** | Un rettangolo che trascini | |
| **Selezione ellittica** | Un'ellisse che trascini | |
| **Selezione con lazo** | Una forma che disegni a mano libera | **M** |
| **Lazo poligonale** | Una forma che definisci con un clic per ogni angolo | |
| **Selezione automatica** | Un'area contigua di colore simile | **W** |
| **Seleziona per colore** | Tutti i pixel di colore simile, contigui o no | |
| **Dipingi selezione** | L'area che dipingi | |
| **Intervallo tonale** | I pixel in una fascia di luminosità (vedi [Selezionare per luminosità](/it/docs/selections/tonal-range/)) | |

## Scegliere uno strumento di selezione

Esegui una delle seguenti operazioni:

- Digita il nome dello strumento nella [ricerca comandi](/it/docs/start/command-search/).
- Premi **M** per **Selezione con lazo** o **W** per **Selezione automatica**.
- In Pittura, seleziona **Seleziona** o **Selezione automatica / Seleziona per colore** nella barra strumenti Strumenti.
- In Foto, seleziona **Selezione rettangolare / Selezione ellittica**, **Selezione con lazo / Lazo poligonale**, **Selezione automatica / Seleziona per colore** o **Dipingi selezione** nella barra strumenti Strumenti.
- In Schizzo, seleziona **Seleziona** nella barra del titolo. Selezionalo di nuovo per aprire, accanto al pannello Strumento, un cassetto con tutti gli strumenti di selezione.

Un pulsante della barra strumenti che raccoglie più strumenti mostra
l'ultimo che hai usato. Per sceglierne un altro, fai clic con il pulsante destro
sul pulsante o tienilo premuto, oppure seleziona lo strumento nel pannello
**Set di strumenti**. **Seleziona** nella barra del titolo di Schizzo torna
all'ultimo strumento di selezione usato.

**Intervallo tonale** non ha un pulsante nelle barre strumenti di Pittura
e Foto.

Se scegli uno strumento di selezione nella Maschera veloce, o mentre modifichi un
livello di selezione, quella modalità resta attiva.

![Il cassetto Seleziona in Schizzo, con gli strumenti di selezione accanto al pannello Strumento per Selezione rettangolare.](shot:selections/tools-sketch-select-drawer)

## Modalità

Puoi combinare la prossima area che selezioni con la selezione corrente.

Seleziona **Nuova selezione**, **Aggiungi alla selezione**,
**Sottrai dalla selezione** o **Interseca con selezione** nella riga
**Modalità** del pannello Strumento. **Nuova selezione** è l'impostazione
predefinita.

Per cambiare la modalità di una sola selezione, tieni premuto un tasto mentre la
inizi:

- **Maiusc**: **Aggiungi alla selezione**
- **Alt**: **Sottrai dalla selezione**
- **Maiusc+Alt**: **Interseca con selezione**
- **Ctrl**: **Nuova selezione**

Mentre tieni premuto il tasto, la riga **Modalità** mostra la modalità
corrispondente. **Dipingi selezione** ha solo **Aggiungi alla selezione** e
**Sottrai dalla selezione**.

## Antialiasing e Raggio di sfumatura

**Antialiasing** è attivo per impostazione predefinita. **Raggio di sfumatura**
ammorbidisce il bordo di ogni nuova selezione fino a 100 px, e parte da 0.

**Dipingi selezione** non ha nessuna delle due impostazioni.
**Intervallo tonale** ha **Sfumatura** e non ha **Antialiasing**.

## Selezione rettangolare e Selezione ellittica

Trascina da un angolo all'angolo opposto. Dopo aver iniziato a trascinare, tieni
premuto **Maiusc** per un quadrato o un cerchio, o **Alt** per disegnare dal
centro.

- **Proporzioni fisse** mantiene la selezione nelle proporzioni impostate in **Proporzione larghezza** e **Proporzione altezza**, 1 : 1 per impostazione predefinita.
- **Dimensioni fisse** disegna una selezione con la **Larghezza** e l'**Altezza** impostate, in pixel. Il valore predefinito è 256 × 256.
- **Disegna dal centro** mette il centro della selezione nel punto in cui inizi a trascinare.

Attivare **Proporzioni fisse** disattiva **Dimensioni fisse**, e viceversa. Un
clic senza trascinamento lascia la selezione com'era.

## Selezione con lazo

Disegna attorno all'area. Quando sollevi la penna o rilasci il pulsante del
mouse, la forma chiusa diventa la selezione.

## Lazo poligonale

Fai clic su ogni angolo della forma. Per terminare, esegui una delle seguenti operazioni:

- Fai di nuovo clic sul primo angolo.
- Premi **Invio**.
- Seleziona **Termina** nella barra azioni della tela, o **Termina selezione** nel pannello Strumento.

Un poligono richiede almeno tre angoli.

- Per rimuovere l'ultimo angolo, premi **Backspace** o **Canc**, oppure seleziona **Rimuovi punto** nella barra azioni della tela o **Rimuovi ultimo punto** nel pannello Strumento.
- Per annullare il poligono, premi **Esc**, oppure seleziona **Annulla** nella barra azioni della tela o **Annulla selezione** nel pannello Strumento.
- Per vincolare il lato successivo a scatti di 45°, tieni premuto **Maiusc**. Per vincolare tutti i lati, attiva **Vincola bordi a 45°** nel pannello Strumento.

Mentre posizioni gli angoli, la [barra azioni della tela](/it/docs/selections/working/)
in fondo alla tela mostra **Rimuovi punto**, **Annulla** e **Termina**.

![La barra azioni della tela per un poligono, con Rimuovi punto, Annulla e Termina.](shot:selections/tools-polygon-bar)

## Selezione automatica e Seleziona per colore

Fai clic su un colore della tela. **Selezione automatica** prende l'area
contigua attorno a quel punto, e **Seleziona per colore** prende i pixel
corrispondenti in qualsiasi punto dell'immagine.

![Il pannello Strumento per Selezione automatica, con Modalità, Antialiasing, Sorgente, Tolleranza, le impostazioni Bordi e Raggio di sfumatura.](shot:selections/tools-auto-select-settings)

### Sorgente

Imposta dove gli strumenti cercano i colori: **Disegno visibile** (il valore
predefinito), **Livello in modifica** o **Livelli di riferimento**, cioè i
livelli contrassegnati con [Usa come riferimento](/it/docs/layers/settings/).

### Tolleranza

Imposta quanto un colore può differire da quello su cui fai clic per essere
ancora selezionato. Il valore predefinito è 10%.

### Chiudi gli spazi

Chiude le interruzioni fino a questa larghezza nei bordi attorno all'area, da 0
a 32 px. Solo **Selezione automatica**.

### Espansione

Allarga la selezione fino a 32 px, o la restringe con un valore negativo.

### Smussatura bordi

Ammorbidisce i bordi a gradini della selezione. Allo 0%, i bordi seguono i pixel
interi. Nascosta mentre **Antialiasing** è disattivo.

**Selezione automatica** e **Seleziona per colore** condividono un'unica
impostazione **Sorgente**, e condividono **Tolleranza** e le impostazioni
**Bordi** con gli [strumenti di riempimento](/it/docs/drawing/fill/).

## Dipingi selezione

Dipingi sopra l'area con un pennello tondo. Un anello chiuso che dipingi si
riempie.

- **Aggiungi alla selezione** o **Sottrai dalla selezione** stabilisce cosa fa il pennello.
- **La pressione controlla le dimensioni** è disattivo per impostazione predefinita.
- **Dimensioni**, **Durezza** e **Opacità** impostano il pennello tondo.

Tieni premuto **Maiusc** mentre dipingi per aggiungere, o **Alt** per fare
l'opposto dell'impostazione corrente. L'estremità gomma di una penna sottrae. Un
tratto che sottrae non ha effetto finché non c'è una selezione.

## Il pulsante Seleziona

**Seleziona** sotto le impostazioni di uno strumento di selezione nel pannello
Strumento apre il [menu Seleziona](/it/docs/selections/working/). Le impostazioni
di **Intervallo tonale** non hanno il pulsante **Seleziona**.
