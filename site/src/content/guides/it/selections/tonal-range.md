---
title: "Selezionare per luminosità"
description: "Lo strumento Intervallo tonale per selezionare i pixel in base alla luminosità."
related: ["selections/tools", "selections/quick-mask", "color-management/hdr", "customize/toolbars"]
---

Puoi selezionare i pixel in base alla luminosità con lo strumento
**Intervallo tonale**. La luminosità si misura in stop rispetto al bianco di
riferimento (0). Lo strumento legge l'immagine visibile, con tutti i livelli
insieme, e crea una selezione dai bordi morbidi.

## Scegliere Intervallo tonale

Esegui una delle seguenti operazioni:

- Digita «Intervallo tonale» nella [ricerca comandi](/it/docs/start/command-search/).
- In Schizzo, seleziona **Seleziona** nella barra del titolo, selezionalo di nuovo per aprire il cassetto e seleziona **Intervallo tonale**.
- Premi un tasto che hai assegnato a **Intervallo tonale** in [Scorciatoie da tastiera](/it/docs/input/keyboard/).
- Seleziona **Intervallo tonale** in una barra strumenti in cui l'hai aggiunto con **Inserisci strumenti…** (vedi [Barre strumenti e barra del titolo](/it/docs/customize/toolbars/)).

**Intervallo tonale** non ha un tasto predefinito né un pulsante nelle barre
strumenti di Pittura o Foto. Mentre è lo strumento attivo, il pannello Set
di strumenti elenca tutti gli strumenti di selezione.

![Le impostazioni di Intervallo tonale nel cassetto Seleziona di Schizzo, con Modalità, Toni, Morbidezza e Sfumatura.](shot:selections/tonal-range-settings)

## Toni

Seleziona un pulsante nella riga **Toni · stop rispetto al bianco di riferimento**
per selezionare quella fascia di luminosità. La fascia si combina con la
selezione corrente secondo **Modalità** (vedi
[Strumenti di selezione](/it/docs/selections/tools/)).

Il suggerimento di ogni pulsante indica la sua fascia:

- **Ombre · sotto −5 stop**
- **Ombre medie · da −5 a −3,5 stop**
- **Mezzitoni · da −3,5 a −1,5 stop**
- **Luci medie · da −1,5 a −0,5 stop**
- **Luci · oltre −0,5 stop**
- **HDR luminoso · oltre +1 stop**, solo nei [disegni HDR](/it/docs/color-management/hdr/)
- **Personalizzato · imposta o campiona un intervallo in stop**

Mentre è selezionato un pulsante di tono, la selezione segue le modifiche a
**Morbidezza**, **Sfumatura**, **Da** e **A**. Scegliere un altro strumento o
un'altra **Modalità** deseleziona il pulsante di tono.

## Intervallo personalizzato

Puoi impostare la fascia tu stesso, o campionarla dalla tela.

Esegui una delle seguenti operazioni:

- Seleziona **Personalizzato · imposta o campiona un intervallo in stop** e imposta **Da** e **A**, in stop. I valori predefiniti sono −3,5 e −1,5.
- Trascina su un'area della tela per usare l'intervallo di luminosità di quell'area.
- Fai clic sulla tela per centrare una fascia sulla luminosità di quel punto. La fascia mantiene l'ampiezza personalizzata corrente, oppure è ampia 1 stop quando era selezionato un altro tono.

Campionare sulla tela imposta il tono su Personalizzato. Nell'editor web,
**Da** e **A** condividono un unico controllo di intervallo.

![Le impostazioni di Intervallo tonale con Personalizzato selezionato e l'intervallo in stop.](shot:selections/tonal-range-custom)

## Morbidezza

Allarga la transizione morbida a entrambe le estremità della fascia, da 0 a
200%. Il valore predefinito è 100%.

## Sfumatura

Ammorbidisce il bordo della selezione fino a 100 px.

## Modalità e tasti premuti

**Intervallo tonale** ha gli stessi pulsanti **Modalità** degli altri strumenti
di selezione, e non ha **Antialiasing**. Tieni premuto **Maiusc**, **Alt** o
**Maiusc+Alt** mentre fai clic o trascini per aggiungere, sottrarre o
intersecare.

## Maschera veloce e livelli di selezione

**Intervallo tonale** funziona nella [Maschera veloce](/it/docs/selections/quick-mask/)
e mentre modifichi un [livello di selezione](/it/docs/selections/selection-layers/),
e in quel caso modifica la maschera. La sua barra azioni della tela è la
[barra della selezione](/it/docs/selections/working/), lungo il bordo inferiore
della tela.
