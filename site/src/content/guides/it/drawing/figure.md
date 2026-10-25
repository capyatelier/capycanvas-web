---
title: "Forma"
description: "Disegnare linee, rettangoli, ellissi, poligoni, stelle e tracciati con lo strumento Forma."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

Puoi disegnare linee, rettangoli, ellissi, poligoni, stelle e tracciati sul livello
selezionato con lo strumento **Forma**. Su un [livello vettoriale](/it/docs/layers/vector/),
ogni forma diventa un tracciato che puoi modificare. Su un livello di pittura,
dipinge pixel.

## Strumento Forma

Esegui una delle seguenti operazioni:

- Premi **U**.
- In Pittura, seleziona **Forma** nella barra strumenti Strumenti. Fai clic con il pulsante destro sul pulsante o tienilo premuto per scegliere **Linea**, **Rettangolo**, **Ellisse**, **Poligono**, **Stella** o **Tracciato**.
- Cerca **Forma** nella ricerca comandi, oppure una forma come **Forma › Rettangolo**.

Schizzo e Foto non hanno un pulsante Forma. Puoi aggiungerne uno con
**Inserisci strumenti…**
([Barre strumenti e barra del titolo](/it/docs/customize/toolbars/)).

![Il menu del pulsante Forma nella barra strumenti Strumenti di Pittura, con Linea, Rettangolo, Ellisse, Poligono, Stella e Tracciato.](shot:drawing/figure-menu)

Trascina sulla tela per disegnare una forma qualsiasi tranne **Tracciato**.
Durante il trascinamento un contorno tratteggiato mostra la forma, e la forma
compare quando rilasci. Tieni premuto **Maiusc** durante il trascinamento per
disegnare una linea a passi di 45°, un quadrato, un cerchio, oppure un poligono o
una stella regolari.

- Le forme riguardano solo il disegno di un livello, e funzionano sui livelli vettoriali e sui livelli su cui un pennello può dipingere ([Strumenti pennello](/it/docs/drawing/brush-tools/)).
- **Blocca alfa** viene rispettato.
- Su un livello di pittura, una selezione attiva ritaglia **Linea**, **Rettangolo** ed **Ellisse**. Non ritaglia **Poligono**, **Stella**, **Tracciato** né un rettangolo con angoli arrotondati.
- Con **Pittura trasparente** selezionato nel pannello Colore, **Linea**, **Rettangolo** ed **Ellisse** cancellano su un livello di pittura. Ogni altra forma mostra un avviso che chiede un colore.
- La pressione della penna non cambia lo spessore di una forma.
- Le forme non seguono le guide.
- Forma non è disponibile nella Maschera veloce né su un livello di selezione.
- Ogni forma è un passaggio di annullamento.

## Tipo di forma

- **Linea** va dal punto in cui premi a quello in cui rilasci, con estremità arrotondate.
- **Rettangolo** ha gli angoli nei punti di pressione e di rilascio, con i lati paralleli ai bordi della tela.
- **Ellisse** si inscrive nel riquadro tra i punti di pressione e di rilascio.
- **Poligono** e **Stella** si inscrivono nel riquadro, con il primo angolo o la prima punta in alto.
- **Tracciato** si disegna punto di ancoraggio dopo punto di ancoraggio.

Scegli la forma in cima al pannello **Set di strumenti**, dal menu del pulsante
Forma, oppure da **Strumento** nella barra Opzioni strumento.

## Contorno e riempimento

- **Contorno** disegna il bordo della forma nel colore corrente, centrato sul bordo.
- **Riempimento** copre la forma con il colore corrente.
- **Contorno + riempimento** disegna il contorno nel colore di primo piano e riempie l'interno con il colore di sfondo.

Scegli la modalità sotto le forme nel pannello **Set di strumenti**, oppure da
**Variante** nella barra Opzioni strumento. Una linea può essere disegnata solo
con **Contorno**.

![Il pannello Set di strumenti con Linea, Rettangolo, Ellisse, Poligono, Stella e Tracciato sopra Contorno, Riempimento e Contorno + riempimento.](shot:drawing/figure-tool-set)

## Impostazioni della forma

![Il pannello Strumento per Stella, con Spessore linea, Opacità, Punte e Raggio interno.](shot:vector/figure-settings)

**Raggio degli angoli**, **Angoli**, **Punte** e **Raggio interno** si trovano nel
pannello **Strumento** e nella barra Opzioni strumento, per la forma a cui
appartengono.

### Raggio degli angoli

Arrotonda gli angoli di un **Rettangolo**, da 0 a 4096 px.

### Angoli

Imposta il numero di angoli di un **Poligono**, da 3 a 100. Il valore predefinito
è 5.

### Punte

Imposta il numero di punte di una **Stella**, da 3 a 100. Il valore predefinito è
5.

### Raggio interno

Imposta quanto gli angoli interni di una **Stella** sono lontani dal suo centro,
come percentuale del raggio esterno, dal 5% al 100%. Il valore predefinito è 50%.

## Tracciato

Puoi disegnare un tracciato punto di ancoraggio dopo punto di ancoraggio.

- Fai clic per aggiungere un punto di ancoraggio ad angolo. Premi e trascina per tirare fuori le maniglie di un punto di ancoraggio curvo, oppure tieni premuto **Alt** per trascinare solo la maniglia in uscita.
- Tieni premuto **Maiusc** per posizionare il punto successivo a passi di 45° dall'ultimo.
- Fai clic sul primo punto di ancoraggio per chiudere il tracciato.
- Seleziona **Termina tracciato** nella barra della tela o premi **Invio** per aggiungere il tracciato. **Annulla tracciato** o **Escape** lo scarta.
- **Rimuovi ultimo punto** o **Backspace** rimuove l'ultimo punto di ancoraggio, e lo fa anche **Annulla**.

![La barra della tela mentre viene disegnato un percorso, con Rimuovi ultimo punto, Annulla tracciato e Termina tracciato.](shot:vector/path-bar)

Il tracciato usa la modalità, lo **Spessore linea** e i colori correnti, con angoli vivi ed estremità piatte. Su un livello vettoriale viene selezionato quando termini, e un tracciato che inizia all'estremità aperta di un tracciato selezionato lo continua.

## Spessore linea e Opacità

**Spessore linea** e **Opacità** si trovano nel pannello **Strumento** e nella
barra Opzioni strumento. Condividono i loro valori con **Dimensioni pennello** e
**Opacità** del pennello corrente
([Dimensioni, intensità e opacità](/it/docs/brushes/basics/)), e **[** e **]**
cambiano Spessore linea.

### Spessore linea

Imposta lo spessore del contorno, da 0,5 a 2048 px. Non compare in modalità
**Riempimento**. Su un livello vettoriale, **Spessore del contorno** in [Proprietà](/it/docs/layers/paths/) lo cambia in seguito.

### Opacità

Imposta l'intensità sia del contorno sia del riempimento.
