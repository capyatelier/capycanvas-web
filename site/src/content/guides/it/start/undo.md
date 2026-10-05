---
title: "Annullare e ripetere"
description: "Annullare e ripetere le modifiche a un disegno, e la cronologia separata per le modifiche alla disposizione."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

Puoi annullare le modifiche a un disegno un passaggio alla volta, e ripetere i
passaggi annullati. Ogni disegno aperto ha una cronologia propria.

![I pulsanti Annulla e Ripeti nella barra strumenti Comandi.](shot:start/undo-commands)

## Annulla

Esegui una delle seguenti operazioni:

- Scegli **Modifica > Annulla**.
- Premi **Ctrl+Z**.
- Seleziona **Annulla** nella barra strumenti Comandi. In Schizzo, **Annulla** si trova nella barra sul bordo sinistro dello schermo.
- Tocca la tela con due dita.

## Ripeti

Esegui una delle seguenti operazioni:

- Scegli **Modifica > Ripeti**.
- Premi **Ctrl+Maiusc+Z** o **Ctrl+Y**.
- Seleziona **Ripeti** nella barra strumenti Comandi, oppure nella barra sul bordo sinistro in Schizzo.
- Tocca la tela con tre dita.

Una nuova modifica dopo Annulla cancella i passaggi che potevi ripetere.

## Cosa conta come passaggio

Ogni tratto, riempimento, modifica a un filtro, trasformazione, ritaglio,
modifica delle dimensioni della tela e modifica della selezione è un passaggio, e
lo è anche ogni modifica a un livello. Le modifiche alla vista, allo strumento, al
pennello, al colore e alla disposizione non sono passaggi.

Mentre posizioni un'immagine, trasformi un livello o usi lo strumento Ritaglia,
Annulla interrompe quell'operazione invece di tornare indietro di un passaggio.

## Lunghezza della cronologia

Ogni disegno conserva fino a 256 passaggi. I passaggi più vecchi vengono
eliminati per primi.

## Salvare e riaprire

Il salvataggio non cancella la cronologia. Un disegno aperto da un file `.capy`
parte con la cronologia vuota, ma i disegni che si riaprono al riavvio di Capy
Canvas conservano i loro passaggi di annullamento.

## Modifiche alla disposizione

Le modifiche a pannelli, barre strumenti, barra del titolo e aree di lavoro hanno
una cronologia propria. **Modifica > Annulla** non annulla mai una modifica alla
disposizione.

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Annulla modifica disposizione** o **Finestra > Ripeti modifica disposizione**.
- Premi **Ctrl+Alt+Z** o **Ctrl+Alt+Maiusc+Z**.

Ogni area di lavoro conserva la propria cronologia della disposizione, che resta
anche dopo un riavvio. **Finestra > Aree di lavoro > Cronologia disposizione…**
elenca le disposizioni precedenti dell'area di lavoro corrente.
