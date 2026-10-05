---
title: "Maschera veloce"
description: "Modificare una selezione come maschera dipinta nella Maschera veloce."
related: ["selections/working", "selections/selection-layers", "selections/tonal-range", "layers/masks"]
---

Puoi modificare una selezione come maschera dipinta nella Maschera veloce.

## Entrare nella Maschera veloce

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Maschera veloce**.
- Premi **Q**.
- Seleziona **Maschera veloce** nella [barra della selezione](/it/docs/selections/working/).

La selezione corrente diventa la maschera. Senza selezione, la maschera parte
vuota. Lo strumento passa al pennello corrente, tranne quando è attivo
**Intervallo tonale**.

Non puoi entrare nella Maschera veloce mentre è aperta una trasformazione.

## Cosa mostra la Maschera veloce

Una sovrapposizione, rossa al 50% per impostazione predefinita, indica la
maschera sulla tela. In modalità **Dipingi selezione** copre l'area selezionata,
e in modalità **Maschera in scala di grigi** l'area fuori dalla selezione.

In cima al pannello Livelli appare una riga **Maschera veloce**, selezionata. Il
suo pulsante a occhio mostra o nasconde la sovrapposizione, come
**Mostra sovrapposizione maschera** nella ricerca comandi. Il pannello Colore
mostra i colori della maschera al posto dei colori del disegno.

![La foto del terrario nella Maschera veloce, con la sovrapposizione sulle luci.](shot:selections/quick-mask-overlay)

## Dipingere la maschera

Dipingi con una penna, una matita, un aerografo o una gomma per modificare la
maschera. Gli altri pennelli non dipingono nella Maschera veloce. Anche
**Riempi**, **Sfumatura** e **Dipingi selezione** modificano la maschera.

- In modalità **Dipingi selezione**, qualsiasi colore seleziona. La gomma e il colore trasparente deselezionano.
- In modalità **Maschera in scala di grigi**, il valore di grigio del colore imposta la maschera: il bianco seleziona, il nero deseleziona e i grigi selezionano in parte.

La maschera ha colori di primo piano e di sfondo propri, copiati dai colori del
disegno quando la Maschera veloce si avvia. Premi **D**
(**Ripristina nero / bianco**) per avere il nero in primo piano e il bianco
come sfondo. Per scambiare i colori della maschera, esegui
**Scambia colori della maschera** dalla ricerca comandi.

I comandi che modificano il disegno, come **Svuota pixel selezionati** e
**Trasforma**, non sono disponibili nella Maschera veloce.

## Barra della Maschera veloce

La [barra azioni della tela](/it/docs/selections/working/) in fondo alla tela ha la
didascalia «Maschera veloce»:

- **Inverti**: **Inverti selezione**.
- **Riempi** e **Svuota**: **Riempi maschera** riempie l'intera maschera, e **Svuota copertura selezione** svuota la maschera.
- **Perfeziona**: **Espandi…**, **Riduci…**, **Sfuma…**, **Bordo…** e **Smussa…**. **Trasforma contorno** qui non è disponibile.
- **Salva**: **Salva come livello di selezione** (vedi [Livelli di selezione](/it/docs/selections/selection-layers/)).
- **Esci**: **Torna al disegno**.

Con la barra azioni della tela nascosta, la barra della Maschera veloce non appare.

![La barra della Maschera veloce in fondo alla tela.](shot:selections/quick-mask-bar)

## Menu Maschera veloce

Mentre la Maschera veloce è attiva, il menu **Livello** diventa il menu
**Maschera veloce**. Fai clic con il pulsante destro sulla riga
**Maschera veloce**, o tienila premuta, per aprire lo stesso menu.

- **Torna al disegno**
- **Salva come livello di selezione**
- **Modifica**: **Inverti selezione**, **Seleziona tutti i pixel**, **Svuota copertura selezione**, **Riempi maschera**, **Espandi…**, **Riduci…**, **Sfuma…**, **Bordo…** e **Smussa…**

## Impostazioni della sovrapposizione

Mentre la Maschera veloce è attiva, il pannello Proprietà mostra le impostazioni
della maschera.

![Il pannello Proprietà per la Maschera veloce, con Modalità, Colore di sovrapposizione e Opacità di sovrapposizione.](shot:selections/quick-mask-properties)

### Modalità

**Dipingi selezione** (il valore predefinito) o **Maschera in scala di grigi**.
La modalità è un'unica impostazione per la Maschera veloce e per tutti i livelli
di selezione, in tutti i disegni. Anche il comando
**Maschera in scala di grigi** nella ricerca comandi la cambia.

### Colore di sovrapposizione

Imposta il colore della sovrapposizione. Rosso per impostazione predefinita.

### Opacità di sovrapposizione

Da 0 a 100%. Il valore predefinito è 50%.

## Uscire dalla Maschera veloce

Esegui una delle seguenti operazioni:

- Scegli **Seleziona > Maschera veloce** o premi **Q**.
- Scegli **Livello > Torna al disegno**.
- Seleziona **Esci** nella barra della Maschera veloce.
- Premi **Esc**.
- Seleziona il pulsante di caricamento accanto alla miniatura nella riga **Maschera veloce**.

La maschera diventa la selezione corrente. Anche **Deseleziona pixel**
(**Ctrl+D**) fa uscire dalla Maschera veloce, e rimuove la selezione.
