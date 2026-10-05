---
title: "Penna"
description: "Le impostazioni della penna nelle Preferenze, e il doppio tocco e la pressione laterale di Apple Pencil."
related: ["input/touch", "input/keyboard", "preferences", "brushes/basics"]
---

Le impostazioni della penna si trovano nella pagina **Penna e input** di
**Modifica > Preferenze**.

![La pagina Penna e input delle Preferenze.](shot:pen/pen-and-input)

## Risposta alla pressione

Puoi cambiare come la penna risponde alla pressione leggera con **Risposta alla
pressione** sotto **Risposta della penna**. Valori più bassi rendono più forte la
pressione leggera, e valori più alti richiedono più forza. L'intervallo va da
0,25 × a 4,00 ×. Al valore predefinito, 1,00 ×, la pressione della penna viene
usata senza modifiche.

L'impostazione vale per tutti i pennelli e gli strumenti, compresi **Dipingi
selezione** e **Maschera veloce**. I tratti già disegnati non cambiano.

## Previsione del tratto

La previsione del tratto disegna un breve tratto davanti alla punta della penna,
e il tratto reale lo sostituisce mentre disegni. Le impostazioni si trovano sotto
**Risposta della penna**:

- **Attiva previsione del tratto** attiva o disattiva entrambi i tipi di previsione.
- **Usa previsione del tratto di *sistema***, per esempio **Usa previsione del tratto di Windows**, usa la previsione del sistema o del browser.
- **Intensità della previsione** imposta quanto in anticipo prevede Capy Canvas da solo, da 0 a 64 ms.

Entrambi gli interruttori sono attivi per impostazione predefinita, e
**Intensità della previsione** è 16 ms. Mentre **Attiva previsione del tratto** è
disattivato, le altre due impostazioni non sono disponibili.

| Sistema | La previsione del sistema |
| --- | --- |
| iPad | Disponibile |
| Windows | Disponibile quando Windows la offre |
| Android | Android 14 e successivi, con uno stilo supportato dal sistema |
| Web | Nei browser che la offrono |
| macOS, Linux | Mai disponibile |

Dove la previsione del sistema non è disponibile, il suo interruttore non è
disponibile e la previsione è impostata da **Intensità della previsione**. Mentre
è in uso la previsione del sistema, **Intensità della previsione** non è
disponibile (su iPad è nascosta).

Il cursore segue la penna, non il tratto previsto.

![Le impostazioni Risposta della penna.](shot:pen/prediction)

## Forma cursore

Puoi scegliere il puntatore mostrato sopra la tela con **Forma cursore** sotto
**Puntatore**.

| Scelta | Mostra |
| --- | --- |
| **Dimensioni pennello** | Il contorno della punta del pennello con la sua dimensione, forma e rotazione (predefinito) |
| **Croce**, **Triangolo** | Una croce o un piccolo triangolo |
| **Punto** | Una minuscola croce |
| **Punto di un pixel** | Un pixel dello schermo |
| **Mirino** | Una croce con un punto al centro |
| **Strumento** | L'icona dello strumento, con il suo punto di lavoro sul puntatore |
| **Strumento e dimensione del pennello**, **Dimensioni pennello e croce**, **Dimensioni pennello e punto**, **Dimensioni pennello e punto di un pixel** | Il contorno del pennello insieme all'altro segno |
| **Nessuno** | Niente per una penna su uno schermo. Un mouse, un trackpad o una tavoletta senza schermo mostrano **Mirino**. |

La forma vale per gli strumenti di pittura e per **Dipingi selezione**. Gli altri
strumenti mostrano la loro icona quando la forma include **Strumento**, e una
croce negli altri casi.

![L'elenco Forma cursore.](shot:pen/cursor-shapes)

## Nascondi cursore mentre dipingi

Con **Nascondi cursore mentre dipingi** attivo (predefinito), il cursore scompare
mentre la penna tocca la tela o mentre il pulsante del mouse è premuto con uno
strumento di pittura. Il contorno del pennello resta visibile mentre cancelli.

## Estremità gomma

Puoi scegliere cosa fa l'estremità gomma della penna. Il gruppo **Estremità
gomma** non compare su iPad.

- **Strumento**: **Strumento corrente** (predefinito) mantiene lo strumento che stai usando. **Gomma**, **Penna**, **Matita**, **Pennello**, **Aerografo** e **Sfuma** passano a quello strumento mentre usi l'estremità gomma, e poi torna lo strumento precedente.
- **Dipingi con trasparenza**: se è attivo (predefinito), l'estremità gomma cancella con il pennello dello strumento. Se è disattivato, l'estremità gomma dipinge. Questo interruttore è nascosto quando **Strumento** è **Gomma**.

## Pulsanti della penna

Puoi assegnare un'azione a ogni pulsante laterale della penna, e un'azione
diversa per ogni tipo di strumento.

Per impostare un pulsante della penna:

1. Seleziona il pulsante sotto **Pulsanti della penna**.
2. Seleziona **Azione**, oppure disattiva **Uguale per tutti gli strumenti** e seleziona un tipo di strumento, come **Strumenti di disegno**.
3. Scegli un'azione. **Niente** libera il pulsante.

Strumenti, pennelli e modalità, come **Sposta vista** o **Campiona colore**,
restano attivi finché tieni premuto il pulsante. Le altre azioni vengono eseguite
una volta. Una pressione durante un tratto ha effetto dopo il tratto.

Tutti i pulsanti partono da **Niente**. Un pulsante impostato su **Niente**
mantiene l'azione che gli assegna il driver della tavoletta o il sistema.

| Sistema | Pulsanti elencati |
| --- | --- |
| Linux | **Pulsante laterale inferiore**, **Pulsante laterale superiore**, **Terzo pulsante laterale** |
| Windows | **Pulsante laterale inferiore** |
| macOS, Android, web | **Pulsante laterale inferiore**, **Pulsante laterale superiore** |
| iPad | Nessuno |

Su Linux e Android, i pulsanti sul pad di una tavoletta si impostano come tasti
nella pagina [Scorciatoie da tastiera](/it/docs/input/keyboard/).

![La pagina di Pulsante laterale inferiore, con un'azione per ogni tipo di strumento.](shot:pen/pen-button-page)

## Doppio tocco e pressione laterale di Apple Pencil

Su iPad, il doppio tocco su Apple Pencil e la pressione laterale di Apple Pencil
Pro seguono l'impostazione dell'iPad in **Impostazioni > Apple Pencil**.

- «Switch between current tool and eraser» passa alla **Gomma** e ritorna.
- «Switch between current tool and last used» passa allo strumento scelto in precedenza.

Le altre scelte non hanno effetto in Capy Canvas. La pressione laterale agisce
quando rilasci. Quando Apple Pencil passa sopra lo schermo, compare il cursore.
