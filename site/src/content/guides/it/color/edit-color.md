---
title: "Modifica colore"
description: "Impostare un colore in base ai suoi valori, al codice esadecimale o a un testo di colore nella finestra di dialogo Modifica colore."
related: ["color/color-panel", "color/palettes", "color/eyedropper"]
---

Puoi impostare un colore in base ai suoi valori nella finestra di dialogo
**Modifica colore**. Nulla cambia finché non selezioni **Usa colore**.

![La finestra di dialogo Modifica colore con la ruota a sinistra, Attuale e Nuovo con il codice esadecimale in alto a destra, tre righe di valori e i colori recenti in basso.](shot:color/edit-color "1 Ruota e forme · 2 Attuale e Nuovo · 3 Preleva dalla tela · 4 Hex · 5 Righe di valori · 6 Colori recenti")

## Aprire Modifica colore

Esegui una delle seguenti operazioni:

- Seleziona **Modifica colore…** (la matita) in alto a destra del [pannello Colore](/it/docs/color/color-panel/).
- Fai doppio clic sul campione di primo piano o di sfondo nel pannello Colore.
- Seleziona un pulsante colore in Proprietà, come **Colore** di un livello di riempimento Tinta unita o **Colore del viraggio** di Bianco e nero.
- Seleziona la miniatura di un livello di riempimento Tinta unita nel pannello Livelli.
- Seleziona il **Colore** di un punto nell'editor della sfumatura.
- Seleziona **Colore pennello** in un pannello che lo mostra. Puoi aggiungerlo ai pannelli Pennelli e Dimensioni pennello ([Pannelli e colonne](/it/docs/customize/panels/)).
- Su Windows, Linux e Android, fai clic con il pulsante destro sul campione di primo piano o di sfondo, o tienilo premuto, e scegli **Modifica colore…**.

## Ruota e forme

La ruota funziona come nel pannello Colore. Seleziona **OKLCH**, **HSB** o
**HLS** sotto la ruota per passare a un campo circolare, quadrato o triangolare.

## Attuale e Nuovo

**Nuovo** mostra il colore che stai creando. Seleziona **Attuale** per riportare
**Nuovo** al colore di partenza.

## Hex

Il campo esadecimale mostra Nuovo come `#RRGGBB` in sRGB. Selezionalo per
digitare un codice esadecimale o un altro [testo di colore](#incollare-i-colori).

Un'etichetta a sinistra del codice esadecimale segnala questi casi:

- «≈»: il colore è fuori da sRGB, e il codice mostra il colore sRGB più vicino.
- «Base»: in un disegno HDR, il codice mostra il colore prima dell'intensità.
- «sRGB»: lo spazio colore del disegno non è sRGB.

## Righe di valori

Ogni riga mostra Nuovo in un formato. Seleziona il nome del formato all'inizio di
una riga per sceglierne un altro. La finestra di dialogo conserva i formati che
scegli.

| Riga | Formati |
| --- | --- |
| 1 | **RGB** (0–255, predefinito), **RGB 0–1**, **RGB lineare** (0–1). I valori sono nello spazio colore del disegno, indicato in un'etichetta sulla riga. |
| 2 | **HSB** (predefinito), **HSL** |
| 3 | **OKLCH** (predefinito), **OKLab** |

![Le righe di valori con il menu dei formati della prima riga aperto.](shot:color/edit-color-formats)

## Modificare i valori

- Seleziona un valore per digitare un numero. Premi **Invio** per confermare o **Esc** per annullare.
- Trascina un valore in su o in giù per cambiarlo. Tieni premuto **Maiusc** per passi più grandi, oppure **Alt** o **Ctrl** per passi più piccoli.
- Premi **Freccia su** o **Freccia giù** su un valore per cambiarlo di un passo.

Un valore oltre l'intervallo di un campo viene portato al limite più vicino. La
tinta riparte da capo a 360°. Se digiti un testo che non è né un numero né un
colore, il campo resta aperto con un errore. **Usa colore** resta non
disponibile finché non correggi il valore o premi **Esc**.

## Copiare i colori

Seleziona il pulsante di copia alla fine del campo esadecimale o di una riga per
copiare quel valore come testo. Un segno di spunta sul pulsante conferma la
copia. Premi **Ctrl+C** nella finestra di dialogo, fuori da un campo di testo,
per copiare il codice esadecimale.

| Formato | Testo copiato nei disegni sRGB | In altri spazi colore |
| --- | --- | --- |
| Hex | `#RRGGBB` | `#RRGGBB` |
| RGB | `rgb(R G B)` | `color(display-p3 r g b)`, `color(a98-rgb r g b)` o `color(prophoto-rgb r g b)`, da 0 a 1 |
| RGB 0–1 | `color(srgb r g b)` | come per RGB |
| RGB lineare | `color(srgb-linear r g b)` | `r g b` |
| HSB, HSL | `hsb(h s% b%)`, `hsl(h s% l%)` | `h° s% b%`, `h° s% l%` |
| OKLCH, OKLab | `oklch(L% C h)`, `oklab(L% a b)` | uguale |

## Incollare i colori

Premi **Ctrl+V** nella finestra di dialogo, fuori da un campo di testo, per
impostare Nuovo da un testo di colore. Il campo esadecimale e i campi dei valori
accettano lo stesso testo:

- codici esadecimali di 3, 4, 6 o 8 cifre, con `#`, `0x` o senza prefisso (le cifre dell'alfa vengono ignorate);
- nomi di colore CSS, come `teal`;
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsb()`, `hsv()`, `oklch()` e `oklab()`;
- `color()` con `srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb` o `srgb-linear`;
- tre numeri. Una riga di valori li legge nel proprio formato. Altrove sono RGB da 0 a 255, oppure RGB da 0 a 1 quando tutti e tre sono pari o inferiori a 1 e uno ha un separatore decimale.

Il testo di colore non cambia mai l'alfa del colore.

## Preleva dalla tela

Seleziona **Preleva dalla tela** (il contagocce accanto ad Attuale e Nuovo) per
campionare Nuovo dal disegno. La finestra di dialogo si nasconde, e una striscia
in un angolo della tela mostra Attuale, il colore campionato e i suoi valori.

Fai clic, oppure solleva la penna o il dito, per prelevare. La finestra di
dialogo ricompare con il colore prelevato come Nuovo. Premi **Esc** o seleziona la
striscia per tornare indietro senza modifiche.

Con un dito, il punto di campionamento si trova sopra il polpastrello. **Preleva
dalla tela** è nascosto quando Modifica colore si apre da un'altra finestra di
dialogo.

## Colori recenti e tavolozze

La parte inferiore mostra i tuoi colori recenti. Selezionane uno per renderlo
Nuovo.

Seleziona **Colori recenti e tutte le tavolozze** (la freccia dopo i colori
recenti) per aprire un foglio con i tuoi colori recenti e tutte le
[tavolozze](/it/docs/color/palettes/). Digita nel campo di ricerca per trovare
nomi di tavolozze, nomi di colori o codici esadecimali. Il **+** alla fine di una
tavolozza salva Nuovo in quella tavolozza. Per chiudere il foglio, seleziona
**Chiudi i campioni** o premi **Esc**.

![Il foglio dei campioni con il campo di ricerca, Colori recenti e le tavolozze.](shot:color/edit-color-swatches)

## Intensità HDR

In un [disegno HDR](/it/docs/color-management/hdr/), la riga **Intensità (EV)** e
l'arco sotto la ruota impostano la luminosità in stop rispetto al bianco SDR.
Sull'arco, e quando trascini il valore, l'intervallo va da −2 a +6 EV. Un valore
digitato può andare oltre, entro l'intervallo della profondità in bit del
disegno.

## Usa colore e Annulla

Seleziona **Usa colore** per applicare Nuovo. Seleziona **Annulla** o premi
**Esc** per chiudere senza modifiche. Se è aperto un menu dei formati o il
foglio dei campioni, **Esc** chiude prima quello.
