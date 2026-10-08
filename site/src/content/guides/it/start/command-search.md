---
title: "Ricerca comandi"
description: "Trovare ed eseguire comandi, strumenti, pennelli e impostazioni digitandone il nome."
related: ["input/keyboard", "start/undo", "customize/toolbars"]
---

Puoi trovare ed eseguire comandi, strumenti, pennelli, proprietà dei livelli, aree
di lavoro e colori digitandone il nome.

## Aprire la ricerca comandi

Esegui una delle seguenti operazioni:

- Scegli **Modifica > Cerca comandi…**.
- Premi **Ctrl+K** o **Ctrl+Maiusc+P**. Nell'editor web funziona solo **Ctrl+K**.
- Se hai aggiunto la ricerca comandi a una barra strumenti, seleziona il suo pulsante (vedi [Barre strumenti e barra del titolo](/it/docs/customize/toolbars/)).

Gli altri predefiniti della mappa dei tasti usano altri tasti (vedi
[Scorciatoie da tastiera](/it/docs/input/keyboard/)). I tasti funzionano anche
mentre scrivi in un campo di testo.

La casella di ricerca si apre vicino al bordo superiore della finestra, con il
campo vuoto.

La ricerca comandi non è disponibile durante un tratto, mentre **Preferenze** è
aperto o mentre personalizzi la barra del titolo.

## Suggerimenti

![La ricerca comandi con il campo vuoto, che elenca Annulla, Adatta tela, Salva, Preferenze e Scorciatoie da tastiera.](shot:start/command-search-suggestions)

Con il campo vuoto, l'elenco mostra fino a cinque voci: quelle che hai eseguito
per ultime dalla ricerca, poi **Annulla**, **Adatta tela**, **Salva**,
**Preferenze** e **Scorciatoie da tastiera**. Le voci che al momento non possono
essere eseguite vengono omesse.

Contano come recenti solo le voci eseguite dalla ricerca. L'elenco delle voci
recenti si svuota quando chiudi {appName}.

## Cercare

Digita una parte di un nome. L'elenco mostra fino a otto corrispondenze, con i
nomi esatti per primi.

- Maiuscole e minuscole si equivalgono. Gli accenti devono corrispondere.
- Corrispondono anche lettere nell'ordine giusto: «adt tela» trova **Adatta tela**.
- I nomi inglesi funzionano in tutte le lingue dell'app.
- Alcune voci rispondono anche ad altre parole: «impostazioni» trova **Preferenze**, «selettore colore» trova **Contagocce** e «ridimensiona» trova **Trasforma**.
- Digitando «pennello» o «pennelli» vengono omessi i singoli pennelli.

Se non c'è nessuna corrispondenza, l'elenco mostra «Nessun comando
corrispondente».

## Cosa puoi trovare

- Tutte le voci dei menu.
- Tutti gli strumenti e ogni variante di strumento, come **Righello › Radiale**.
- Tutti i pennelli, e ogni set di pennelli come «Pennelli *set*».
- Le impostazioni dello strumento corrente, come **Dimensioni pennello…**.
- Le proprietà del livello selezionato, come **Opacità livello…**.
- Tutte le aree di lavoro.
- **Colore di primo piano**, **Colore di sfondo**, **Pittura trasparente**, **Colore temporaneo**, **Scambia primo piano e sfondo**, **Nero** e **Bianco**.
- Tutti i pannelli e le barre strumenti del menu **Finestra**.

## Risultati

![La ricerca comandi con la query «undo», la riga Annulla attenuata e «Niente da annullare» in basso.](shot:start/command-search-unavailable)

Ogni riga mostra il nome e, sulla destra, il relativo tasto. Un segno di spunta
indica un'impostazione attiva e l'area di lavoro corrente.

La riga in fondo alla casella descrive la voce evidenziata con il suo testo di
aiuto, la sua posizione nei menu o il suo intervallo di valori. Una voce che al
momento non può essere eseguita appare attenuata, e la riga in fondo ne indica il
motivo, per esempio «Niente da annullare».

## Eseguire un risultato

Esegui una delle seguenti operazioni:

- Premi **↑** o **↓** per evidenziare una riga, poi premi **Invio**.
- Seleziona una riga.

La ricerca si chiude e la voce viene eseguita. Se la voce non può essere
eseguita, la ricerca resta aperta e ne mostra il motivo.

## Digitare un valore

![La ricerca comandi che chiede un valore per Dimensioni pennello…, con l'unità px e il valore corrente e l'intervallo in basso.](shot:start/command-search-typed-value)

Le voci delle impostazioni numeriche, come **Dimensioni pennello…** e **Opacità
livello…**, chiedono un valore. La riga in fondo mostra il valore corrente e
l'intervallo.

Per impostare un valore:

1. Seleziona la voce, oppure evidenziala e premi **Invio**.
2. Digita il valore e premi **Invio**.

Puoi digitare espressioni aritmetiche, come «12 * 2» o «sqrt(9)», e percentuali
come «50%». Un valore fuori intervallo viene portato al limite più vicino. Premi
**Esc** per tornare ai risultati.

## Annullare da un campo di testo o da una tavolozza

Se apri la ricerca comandi da un campo di testo, **Annulla** e **Ripeti**
diventano **Annulla modifica testo** e **Ripeti modifica testo**. Queste voci non
possono essere eseguite dalla ricerca. Per annullare ciò che hai digitato nel
campo, chiudi prima la ricerca.

Se la apri dal pannello **Tavolozze**, la ricerca elenca invece **Annulla
riordino colori** e **Ripeti riordino colori**. Queste voci annullano le
modifiche all'ordine dei colori della tavolozza, non al disegno.

## Chiudere la ricerca comandi

Esegui una delle seguenti operazioni:

- Premi **Esc**.
- Seleziona **×** sulla destra del campo.
- Fai clic o tocca fuori dalla casella.

Un clic fuori dalla casella non dipinge sulla tela.
