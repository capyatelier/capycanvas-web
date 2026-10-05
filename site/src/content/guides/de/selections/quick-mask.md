---
title: "Schnellmaske"
description: "Eine Auswahl in der Schnellmaske als gemalte Maske bearbeiten."
related: ["selections/working", "selections/selection-layers", "selections/tonal-range", "layers/masks"]
---

In der Schnellmaske können Sie eine Auswahl als gemalte Maske bearbeiten.

## Schnellmaske aktivieren

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Schnellmaske**.
- Drücken Sie **Q**.
- Wählen Sie in der [Auswahlleiste](/de/docs/selections/working/) **Schnellmaske** aus.

Die aktuelle Auswahl wird zur Maske. Ohne Auswahl ist die Maske zu Beginn leer.
Das Werkzeug wechselt zum aktuellen Pinsel, außer wenn **Tonwertbereich** aktiv
ist.

Solange eine Transformation geöffnet ist, können Sie die Schnellmaske nicht
aktivieren.

## Anzeige der Schnellmaske

Eine Überlagerung, standardmäßig rot mit 50%, kennzeichnet die Maske auf der
Leinwand. Im Modus **Auswahl malen** bedeckt sie den ausgewählten Bereich, im
Modus **Graustufenmaske** den Bereich außerhalb der Auswahl.

Oben im Bedienfeld Ebenen erscheint eine ausgewählte Zeile mit dem Namen
**Schnellmaske**. Ihre Augenschaltfläche blendet die Überlagerung ein oder aus,
ebenso **Maskenüberlagerung anzeigen** in der Befehlssuche. Das Bedienfeld Farbe
zeigt statt der Zeichenfarben die Maskenfarben.

![Das Terrarium-Foto in der Schnellmaske, mit der Überlagerung über den Lichtern.](shot:selections/quick-mask-overlay)

## Die Maske malen

Malen Sie mit Feder, Bleistift, Airbrush oder Radierer, um die Maske zu ändern.
Andere Pinsel malen in der Schnellmaske nicht. **Füllung**, **Farbverlauf** und
**Auswahl malen** ändern die Maske ebenfalls.

- Im Modus **Auswahl malen** wählt jede Farbe aus. Der Radierer und die transparente Farbe heben die Auswahl auf.
- Im Modus **Graustufenmaske** bestimmt der Grauwert der Farbe die Maske: Weiß wählt aus, Schwarz hebt die Auswahl auf, und Grautöne wählen teilweise aus.

Die Maske hat eigene Vorder- und Hintergrundfarben, die beim Start der
Schnellmaske von den Zeichenfarben übernommen werden. Drücken Sie **D**
(**Auf Schwarz / Weiß zurücksetzen**) für eine schwarze Vordergrund- und eine
weiße Hintergrundfarbe. Um die Maskenfarben zu tauschen, führen Sie
**Maskenfarben tauschen** in der Befehlssuche aus.

Befehle, die den Bildinhalt ändern, etwa **Ausgewählte Pixel löschen** und
**Transformieren**, sind in der Schnellmaske nicht verfügbar.

## Leiste der Schnellmaske

Die [Leinwandaktionsleiste](/de/docs/selections/working/) am unteren Rand der
Leinwand trägt die Beschriftung „Schnellmaske“:

- **Umkehren**: **Auswahl umkehren**.
- **Füllen** und **Leeren**: **Maske füllen** füllt die ganze Maske, **Auswahlabdeckung löschen** leert die Maske.
- **Verfeinern**: **Erweitern…**, **Verkleinern…**, **Weiche Kante…**, **Rand…** und **Glätten…**. **Umriss transformieren** ist hier nicht verfügbar.
- **Speichern**: **Als Auswahlebene speichern** (siehe [Auswahlebenen](/de/docs/selections/selection-layers/)).
- **Verlassen**: **Zur Zeichnung zurückkehren**.

Ist die Leinwandaktionsleiste ausgeblendet, erscheint die Leiste der
Schnellmaske nicht.

![Die Leiste der Schnellmaske am unteren Rand der Leinwand.](shot:selections/quick-mask-bar)

## Menü Schnellmaske

Solange die Schnellmaske aktiv ist, wird das Menü **Ebene** zum Menü
**Schnellmaske**. Klicken Sie mit der rechten Maustaste auf die Zeile
**Schnellmaske** oder halten Sie sie gedrückt, um dasselbe Menü zu öffnen.

- **Zur Zeichnung zurückkehren**
- **Als Auswahlebene speichern**
- **Ändern**: **Auswahl umkehren**, **Alle Pixel auswählen**, **Auswahlabdeckung löschen**, **Maske füllen**, **Erweitern…**, **Verkleinern…**, **Weiche Kante…**, **Rand…** und **Glätten…**

## Einstellungen der Überlagerung

Solange die Schnellmaske aktiv ist, zeigt das Bedienfeld Eigenschaften die
Einstellungen der Maske.

![Das Bedienfeld Eigenschaften für die Schnellmaske mit Modus, Überlagerungsfarbe und Überlagerungsdeckkraft.](shot:selections/quick-mask-properties)

### Modus

**Auswahl malen** (Standard) oder **Graustufenmaske**. Der Modus ist eine
gemeinsame Einstellung für die Schnellmaske und jede Auswahlebene, in jeder
Zeichnung. Der Befehl **Graustufenmaske** in der Befehlssuche schaltet ihn
ebenfalls um.

### Überlagerungsfarbe

Legt die Farbe der Überlagerung fest. Standardmäßig rot.

### Überlagerungsdeckkraft

Von 0 bis 100%. Standard ist 50%.

## Schnellmaske verlassen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Schnellmaske** oder drücken Sie **Q**.
- Wählen Sie **Ebene > Zur Zeichnung zurückkehren**.
- Wählen Sie in der Leiste der Schnellmaske **Verlassen** aus.
- Drücken Sie **Escape**.
- Wählen Sie in der Zeile **Schnellmaske** die Ladeschaltfläche neben der Miniatur aus.

Die Maske wird zur aktuellen Auswahl. **Pixelauswahl aufheben** (**Strg+D**)
beendet die Schnellmaske ebenfalls und entfernt die Auswahl.
