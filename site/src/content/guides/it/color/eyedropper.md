---
title: "Contagocce"
description: "Prelevare un colore di pittura dalla tela con il Contagocce, e le sue opzioni Stile, Sorgente e Dimensioni campione."
related: ["color/color-panel", "color/edit-color", "input/touch", "input/keyboard"]
---

Puoi prelevare un colore dalla tela per dipingere con esso. Dopo il prelievo,
torna lo strumento che stavi usando.

## Avviare il Contagocce

Esegui una delle seguenti operazioni:

- Premi **I** (**O** nella mappa dei tasti Stile GIMP).
- Scegli **Contagocce** nella ricerca comandi.
- In Pittura e Foto, seleziona **Contagocce** nella barra strumenti Strumenti.
- In Schizzo, seleziona **Contagocce** nella barra sul bordo sinistro, tra i cursori della dimensione e dell'opacità.

Per uscire senza prelevare, premi **I** o seleziona di nuovo lo stesso pulsante,
premi **Esc**, oppure scegli un altro strumento o pennello. Anche un tocco con il
dito senza tenerlo premuto chiude il Contagocce.

## Prelevare

Muoviti sopra la tela per vedere l'anteprima del colore nel pannello Colore. Il
colore di pittura cambia solo quando prelevi.

| Input | Anteprima | Prelievo |
| --- | --- | --- |
| Mouse | Passaggio del puntatore | Clic |
| Penna | Passaggio sopra la tela, o penna appoggiata | Sollevare la penna |
| Dito | Tocco | Sollevare il dito |

Con un dito, il punto di campionamento si trova sopra il polpastrello.

I pixel trasparenti non prelevano nulla, e i colori prelevati sono sempre opachi.
I prelievi avvengono nello spazio colore del disegno. In un disegno HDR, un
prelievo può essere più luminoso del bianco SDR. Mentre modifichi una maschera,
il prelievo imposta il colore della maschera.

## Prelevare mentre dipingi

Tieni premuto **Alt** con un pennello o con gli strumenti Sfuma, Fluidifica,
Riempi o Sfumatura selezionati. Ogni clic preleva un colore. Rilascia **Alt** per
tornare allo strumento.

Le mappe dei tasti Stile Krita e Stile GIMP usano invece **Ctrl**. Nella pagina
[Scorciatoie da tastiera](/it/docs/input/keyboard/) questa scorciatoia si chiama
**Campiona colore finché premuto**. Puoi anche assegnare il Contagocce a un
pulsante della penna nella pagina **Penna e input** ([Penna](/it/docs/input/pen/)).

## Tenere premuto un dito

Tieni fermo un dito sulla tela per iniziare a prelevare con qualsiasi strumento.
Solleva il dito per prelevare e tornare allo strumento.

- La pressione dura mezzo secondo sul web e su iPad. Android, Windows e Linux usano la durata della pressione prolungata del sistema.
- Muovere il dito prima che il selettore si avvii annulla la pressione.
- La pressione funziona solo con un dito sulla tela e nessun'altra operazione in corso.
- Mentre tieni premuto, tocca con un secondo dito per passare **Sorgente** da **Colore visibile** a **Livello selezionato** e viceversa.

## Stile

Scegli **Stile** nella barra Opzioni strumento durante il prelievo (in cima alla
finestra in Foto). Entrambe le scelte si chiamano **Contagocce**:

- **Contagocce** con la lente mostra una lente d'ingrandimento rotonda. La metà superiore del suo anello mostra il colore campionato, e la metà inferiore il colore corrente.
- **Contagocce** con la pipetta mostra un cursore a pipetta con la punta sul punto campionato.

![La lente del Contagocce sopra un tratto rosso, con il colore campionato e il colore corrente nel suo anello.](shot:color/eyedropper-loupe)

Il tocco usa sempre la lente. In Schizzo, selezionare **Contagocce** imposta
**Stile** sulla lente. Un piccolo simbolo di livelli compare quando **Sorgente**
è **Livello selezionato**.

## Sorgente e Dimensioni campione

Imposta queste opzioni nel pannello Strumento o nella barra Opzioni strumento
durante il prelievo. In Schizzo, fai doppio clic o doppio tocco su
**Contagocce** per aprirle.

![Il pannello Strumento durante il prelievo, con Sorgente e Dimensioni campione.](shot:color/eyedropper-settings)

### Sorgente

**Colore visibile** (predefinito) campiona il disegno come lo vedi, e **Livello
selezionato** il colore proprio del livello selezionato, prima di opacità,
maschere e ritaglio. **Livello selezionato** è disponibile solo per un livello di
pittura non bloccato.

### Dimensioni campione

**Singolo pixel** (predefinito), **Cerchio di 5 px**, **Cerchio di 15 px**,
**Cerchio di 51 px** o **Cerchio di 101 px**. Un cerchio calcola la media dei
pixel al suo interno.
