---
title: "Lavorare con le selezioni"
description: "La barra azioni della tela e i comandi che modificano una selezione o i pixel al suo interno."
related: ["selections/tools", "selections/quick-mask", "selections/selection-layers", "layers/masks"]
---

Puoi modificare una selezione, e i pixel al suo interno, dal menu **Seleziona** e
dalla barra della selezione sulla tela.

## La barra azioni della tela

La barra azioni della tela è una fila di pulsanti sulla tela con i passaggi successivi
per ciò che stai modificando.

| La barra azioni della tela appare | Trattata in |
| --- | --- |
| Accanto a una nuova selezione | La barra della selezione, più sotto |
| Mentre posizioni gli angoli di una selezione con **Lazo poligonale** | [Strumenti di selezione](/it/docs/selections/tools/) |
| Nella Maschera veloce | [Maschera veloce](/it/docs/selections/quick-mask/) |
| Mentre modifichi un livello di selezione | [Livelli di selezione](/it/docs/selections/selection-layers/) |
| Mentre modifichi la maschera di un livello | [Maschere](/it/docs/layers/masks/) |
| Mentre trasformi livelli o pixel, o posizioni un'immagine | [Spostamento e trasformazione](/it/docs/transform/move-transform/) |
| Mentre ritagli | [Ritaglio](/it/docs/transform/crop/) |
| Quando selezioni una guida | [Righelli e guide](/it/docs/drawing/ruler/) |
| Quando fai clic sul disco della sorgente di clonazione | [Clonare e correggere](/it/docs/retouch/clone-heal/) |
| Mentre scegli un punto di campionamento per Livelli, Curve o Bilanciamento del bianco | [Aggiungere e modificare filtri](/it/docs/filters/adding/) |

La barra si trova accanto all'oggetto, o lungo il bordo inferiore della tela. Da
sinistra a destra contiene:

- Una didascalia, come «Maschera veloce» o «Trasforma contorno».
- I pulsanti. Un pulsante attenuato non è disponibile; selezionalo per vederne il motivo.
- **Altro**, con i pulsanti che non entrano nella barra, poi il menu **Seleziona** per una selezione o il menu **Livello** per una maschera.
- Il pulsante che conclude, come **Applica** o **Esci**.

Una barra accanto a un oggetto si nasconde mentre tocchi la tela o sposti la
vista.

Per nascondere la barra azioni della tela, esegui una delle seguenti operazioni:

- Scegli **Visualizza > Mostra barra azioni della tela**.
- Scegli **Mostra barra azioni della tela** in fondo ad **Altro**.

Ogni area di lavoro mantiene la propria impostazione. Con la barra nascosta,
ritagli, trasformazioni, immagini posizionate e poligoni mostrano comunque i
pulsanti per concludere lungo il bordo inferiore.

## La barra della selezione

La barra della selezione appare accanto a una selezione mentre è attivo uno
strumento di selezione o **Operazione**. Con gli altri strumenti appare accanto a
una nuova selezione, ma non accanto a una selezione ripristinata da Annulla o
Ripeti. I pennelli, gli strumenti di riempimento, **Sfumatura** e **Forma** non
mostrano mai la barra.

![La barra della selezione sotto una selezione rettangolare.](shot:selections/working-selection-bar)

- **Deseleziona** e **Inverti**: vedi il menu Seleziona più sotto.
- **Lascia copia**: solo con **Operazione**, vedi [Spostamento e trasformazione](/it/docs/transform/move-transform/).
- **Copia su livello**: **Copia selezione su nuovo livello** o **Taglia selezione su nuovo livello**.
- **Copia**: **Copia**, **Copia elementi uniti** o **Taglia**, vedi [Copiare e incollare](/it/docs/transform/clipboard/).
- **Trasforma**: trasforma i pixel selezionati.
- **Perfeziona**: i comandi di perfezionamento e **Trasforma contorno**.
- **Maschera**: applica al livello attivo una maschera sulla selezione.
- **Regola**: aggiunge un filtro che usa la selezione come maschera, vedi [Come si applicano i filtri](/it/docs/filters/how-filters-apply/).
- **Riempi**: **Riempi selezione**.
- **Svuota**: **Svuota pixel selezionati** o **Svuota fuori dalla selezione**.
- **Ritaglia**: **Ritaglia tela alla selezione**, vedi [Ritaglio](/it/docs/transform/crop/).
- **Maschera veloce**: vedi [Maschera veloce](/it/docs/selections/quick-mask/).
- **Salva**: **Salva come livello di selezione**, vedi [Livelli di selezione](/it/docs/selections/selection-layers/).

## Menu Seleziona

Puoi aprire il menu **Seleziona** anche da **Altro** nella barra della selezione,
e da **Seleziona** sotto le impostazioni di uno strumento di selezione nel
pannello Strumento.

| Comando | Funzione | Tasto |
| --- | --- | --- |
| **Seleziona tutti i pixel** | Seleziona l'intera tela | **Ctrl+A** |
| **Deseleziona pixel** | Rimuove la selezione e termina la Maschera veloce o la modifica di un livello di selezione | **Ctrl+D** |
| **Riseleziona** | Ripristina la selezione rimossa dall'ultima modifica | **Ctrl+Maiusc+D** |
| **Inverti selezione** | Seleziona tutto ciò che è fuori dalla selezione | **Ctrl+Maiusc+I** |
| **Mostra contorno selezione** | Mostra o nasconde il contorno della selezione | |

**Riseleziona** è disponibile solo quando non c'è nulla di selezionato.

Nascondere il contorno della selezione mantiene la selezione.
**Mostra contorno selezione** si trova anche nel menu Visualizza.

![Il menu Seleziona.](shot:selections/working-select-menu)

## Perfezionare una selezione

Puoi espandere, ridurre, sfumare, bordare o smussare una selezione con
un'anteprima dal vivo.

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Espandi selezione…**, **Riduci selezione…**, **Sfuma selezione…**, **Bordo selezione…** o **Smussa selezione…**.
- Seleziona **Perfeziona** nella barra della selezione e scegli **Espandi…**, **Riduci…**, **Sfuma…**, **Bordo…** o **Smussa…**.

In fondo alla tela si apre un pannello con un solo valore. Per mantenere il
risultato, seleziona **Applica** o premi **Invio**. **Annulla** ed **Esc**
ripristinano la selezione che avevi.

| Comando | Valore | Intervallo | Predefinito |
| --- | --- | --- | --- |
| **Espandi selezione…** | **Grow by** | 1–128 px | 5 px |
| **Riduci selezione…** | **Shrink by** | 1–128 px | 5 px |
| **Sfuma selezione…** | **Raggio di sfumatura** | 0,1–100 px | 5 px |
| **Bordo selezione…** | **Border width** | 1–128 px | 5 px |
| **Smussa selezione…** | **Smooth radius** | 1–64 px | 5 px |

**Bordo selezione…** sostituisce la selezione con una fascia lungo il suo bordo.
La smussatura riempie le rientranze e rimuove le punte più strette del doppio del
raggio, ma non sposta i bordi che coincidono con il bordo della tela. Espandere e
ridurre mantengono morbidi i bordi morbidi.

Nella Maschera veloce, questi comandi modificano la maschera.

![Il menu Perfeziona nella barra della selezione.](shot:selections/working-refine-menu)

## Trasforma contorno selezione

Puoi spostare, scalare, ruotare, inclinare o riflettere il contorno della
selezione senza spostare alcun pixel.

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Trasforma contorno selezione**.
- Seleziona **Perfeziona > Trasforma contorno** nella barra della selezione.

Appare il riquadro di trasformazione con una barra azioni della tela intitolata
«Trasforma contorno». Funziona come [Trasforma](/it/docs/transform/move-transform/),
ma **Distorci**, **Deforma** e **Interpolazione** non sono disponibili.

## Riempire e svuotare

- **Riempi selezione** riempie i pixel selezionati del livello di pittura attivo con il colore corrente, all'opacità del pennello.
- **Svuota pixel selezionati** cancella i pixel selezionati del livello attivo. I bordi morbidi vengono cancellati in parte.
- **Svuota fuori dalla selezione** cancella i pixel fuori dalla selezione.

Esegui una delle seguenti operazioni:

- Scegli il comando dal menu **Modifica**. I comandi per svuotare si trovano anche nel menu **Seleziona**.
- Premi **Maiusc+Backspace** per riempire, oppure **Canc** o **Backspace** per svuotare i pixel selezionati.
- Seleziona **Riempi**, oppure **Svuota** e un comando, nella barra della selezione.
- In Pittura, seleziona **Riempi selezione** nella barra strumenti Comandi.
- Apri il menu del livello e scegli **Selezione pixel > Riempi selezione**.

Non puoi svuotare pixel nella Maschera veloce, su una maschera o su un livello con
**Blocca alfa** attivo.

## Copiare su un nuovo livello

**Copia selezione su nuovo livello** copia i pixel selezionati del livello di
pittura attivo su un nuovo livello subito sopra, nella stessa posizione.
**Taglia selezione su nuovo livello** li cancella anche dal livello originale.

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Copia selezione su nuovo livello** o **Seleziona > Taglia selezione su nuovo livello**.
- Premi **Ctrl+J** per copiare o **Ctrl+Maiusc+J** per tagliare.
- Seleziona **Copia su livello** nella barra della selezione e scegli un comando.

Il nuovo livello prende il nome dell'originale, per esempio *Ribbon copia*, e ne
mantiene opacità, visibilità e metodo di fusione. La selezione viene rimossa
finché non scegli **Riseleziona**.

Senza una selezione, **Copia selezione su nuovo livello** duplica i livelli
selezionati.

## Applicare a un livello una maschera sulla selezione

Puoi aggiungere al livello attivo una maschera che mostra solo la selezione.

Esegui una delle seguenti operazioni:

- Apri il menu del livello e scegli **Maschera > Maschera: mostra selezione**, oppure **Maschera > Maschera: nascondi selezione** per nascondere l'area selezionata.
- Seleziona **Maschera** nella barra della selezione.

Se il livello ha già una maschera, la selezione sostituisce la maschera
esistente. La selezione viene rimossa, e la maschera si apre per la modifica
(vedi [Maschere](/it/docs/layers/masks/)).

## Selezioni dai livelli

Puoi caricare come selezione la pittura di un livello, la sua maschera o un
livello di selezione.

Esegui una delle seguenti operazioni:

- Per un livello di pittura, scegli una voce da **Seleziona > Dall’opacità del livello**: **Seleziona opacità del livello**, **Aggiungi opacità alla selezione**, **Sottrai opacità dalla selezione** o **Interseca con opacità del livello**.
- Per un livello con maschera, scegli una voce da **Seleziona > Dalla maschera del livello**: **Carica maschera come selezione**, **Aggiungi maschera alla selezione**, **Sottrai maschera dalla selezione** o **Interseca con maschera**.
- Apri il menu del livello e scegli le stesse voci in **Selezione pixel**.
- Tieni premuto **Ctrl** e fai clic sulla miniatura del livello nel pannello Livelli. Aggiungi **Maiusc** per aggiungere alla selezione, **Alt** per sottrarre o **Maiusc+Alt** per intersecare.

**Seleziona > Carica selezione** carica i [livelli di selezione](/it/docs/selections/selection-layers/).
