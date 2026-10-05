---
title: "Farbverlauf"
description: "Mit dem Werkzeug Farbverlauf einen Verlauf malen, seine Farben bearbeiten und Ebenen mit Verlaufsfüllung hinzufügen."
related: ["drawing/fill", "layers/types", "filters/color", "color/edit-color"]
---

Sie können mit dem Werkzeug **Farbverlauf** einen Verlauf auf eine Ebene malen oder
eine Ebene **Verlaufsfüllung** hinzufügen, die bearbeitbar bleibt.

## Werkzeug Farbverlauf

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **G**.
- Wählen Sie im Arbeitsbereich Malen **Farbverlauf** in der Werkzeugleiste Werkzeuge aus.
- Wählen Sie im Arbeitsbereich Foto die Schaltfläche für Verlauf und Füllung nach **Verflüssigen** in der Werkzeugleiste Werkzeuge aus.
- Suchen Sie in der Befehlssuche nach **Farbverlauf**.

Ziehen Sie vom Startpunkt zum Endpunkt. Eine Linie folgt dem Zeiger, und beim
Loslassen wird der Verlauf gemalt.

- Der Verlauf bedeckt die ganze Ebene, mit der ersten Farbe vor dem Startpunkt und der letzten Farbe hinter dem Endpunkt.
- Drücken Sie während des Ziehens **Escape**, um abzubrechen.
- Ziehen mit einem Finger verschiebt stattdessen die Leinwand.
- Eine aktive Auswahl begrenzt den Verlauf, und **Alphaschutz** wird berücksichtigt.
- In der Schnellmaske oder auf einer Auswahlebene geht der Verlauf in die Auswahlmaske.
- Jeder Verlauf ist ein Rückgängig-Schritt.

Das Werkzeug malt nur auf den Bildinhalt einer Ebene und nur auf Ebenen, auf die ein
Pinsel malen kann ([Pinselwerkzeuge](/de/docs/drawing/brush-tools/)).

## Form

- **Linear**: Die Farbe ändert sich entlang der Ziehrichtung.
- **Radial**: Der Startpunkt ist die Mitte, und das Ziehen legt den Radius fest.
- **Reflected**: wie Linear, gespiegelt auf beiden Seiten des Startpunkts.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie die Form unter **Form** oben im Bedienfeld **Werkzeug** oder im Bedienfeld **Werkzeugsatz** aus.
- Klicken Sie mit der rechten Maustaste auf die Schaltfläche Farbverlauf in der Werkzeugleiste Werkzeuge oder halten Sie sie gedrückt, und wählen Sie eine Form.
- Wählen Sie in der Leiste Werkzeugoptionen die Form unter **Variante**, im Arbeitsbereich Foto unter **Werkzeug**.

## Farbstopp-Editor

![Das Bedienfeld Werkzeug für das Werkzeug Farbverlauf mit der Zeile Form, dem Farbstopp-Editor und Deckkraft.](shot:drawing/gradient-tool-panel)

Die Farben des Verlaufs bearbeiten Sie im Farbstopp-Editor unter **Form** im
Bedienfeld **Werkzeug**. Die Verlaufsschaltfläche in der Leiste Werkzeugoptionen
öffnet den Editor in einem Popup. Ebenen mit Verlaufsfüllung und der Filter
**Verlaufsumsetzung** verwenden denselben Editor ([Farbfilter](/de/docs/filters/color/)).

Bis Sie ihn bearbeiten, läuft der Verlauf des Werkzeugs von der Vordergrund- zur
Hintergrundfarbe und folgt Änderungen an beiden Farben. Nach einer Bearbeitung behält
er seine Farbstopps, bis Sie **Farbverlauf zurücksetzen** auswählen. Änderungen am
Verlauf des Werkzeugs sind keine Rückgängig-Schritte.

### Interpolation

Legt fest, wie sich die Farben zwischen den Farbstopps mischen. **Oklab** (Standard)
mischt gleichmäßig so, wie das Auge Farbe wahrnimmt, **Lineares Licht** mischt wie
Licht, und **Klassisch** mischt die gespeicherten Farbwerte.

### Umkehren

Kehrt die Reihenfolge der Farbstopps um.

### Farbverlauf zurücksetzen

Setzt den Verlauf des Werkzeugs auf Vorder- und Hintergrundfarbe zurück, den Verlauf
einer Ebene mit Verlaufsfüllung oder einer Verlaufsumsetzung auf Schwarz und Weiß.

### Farbstopp hinzufügen

Wählen Sie den Streifen abseits der Markierungen aus, um einen Farbstopp mit der Farbe
an dieser Stelle hinzuzufügen. Ein Verlauf hat bis zu 32 Farbstopps.

### Farbstopp-Markierungen

Wählen Sie eine Markierung aus, um ihren Farbstopp auszuwählen, oder ziehen Sie sie,
um den Farbstopp zu verschieben.

### Position

Legt die Position des ausgewählten Farbstopps in Prozent fest. Die äußeren Farbstopps
bleiben bei 0% und 100%, und ein Farbstopp kann seine Nachbarn nicht überholen.

### Farbstopp entfernen

Entfernt den ausgewählten Farbstopp. Die äußeren Farbstopps lassen sich nicht entfernen.

### Farbe

Öffnet [Farbe bearbeiten](/de/docs/color/edit-color/) für den ausgewählten Farbstopp.

### Ausgewählte Farbe verwenden

Setzt den ausgewählten Farbstopp auf die aktuelle Farbe.

## Deckkraft

**Deckkraft** legt die Stärke des Verlaufs fest und ist derselbe Wert wie die
**Deckkraft** des aktuellen Pinsels. Im Arbeitsbereich Skizze verwenden Sie den Deckkraftregler am
linken Rand.

## Ebenen mit Verlaufsfüllung

Sie können eine Füllebene hinzufügen, deren Verlauf bearbeitbar bleibt.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Neu > Verlaufsfüllung**.
- Wählen Sie **Filter > Füllung > Verlaufsfüllung**.
- Wählen Sie im Bedienfeld Filter **Verlaufsfüllung** unter **Füllung** aus.

Die Einstellungen der Ebene stehen im Bedienfeld Eigenschaften, und jede Änderung ist
ein Rückgängig-Schritt.

Eine aktive Auswahl wird zur Maske der neuen Ebene. Um auf die Ebene zu malen, fügen
Sie zuerst eine Maske hinzu ([Ebenentypen](/de/docs/layers/types/)).

![Das Bedienfeld Eigenschaften für eine Ebene mit Verlaufsfüllung mit Form, dem Farbstopp-Editor, Winkel, Skalierung und Position.](shot:drawing/gradient-fill-properties)

### Form

**Linear**, **Radial** oder **Reflected**, wie beim Werkzeug Farbverlauf.

### Farbverlauf

Der Farbstopp-Editor. Eine neue Ebene beginnt mit einem Verlauf von Schwarz nach Weiß.

### Winkel

Legt die Richtung des Verlaufs fest, von −180° bis 180°.

### Skalierung

Legt die Länge des Verlaufs fest, von 10% bis 400%.

### Mitte X und Mitte Y

Legen unter **Position** die Mitte des Verlaufs in Prozent der Leinwandbreite und
-höhe fest.
