---
title: "Pfade bearbeiten"
description: "Die Pfade einer Vektorebene auswählen, verschieben, umformen und neu gestalten."
related: ["layers/vector", "drawing/figure", "transform/move-transform", "layers/types"]
---

Sie können die Pfade einer [Vektorebene](/de/docs/layers/vector/) nach dem Zeichnen bearbeiten.

## Pfade auswählen und verschieben

Wählen Sie einen Pfad mit dem Werkzeug **Vorgang** aus ([Verschieben und Transformieren](/de/docs/transform/move-transform/)). Halten Sie **Umschalt** gedrückt, um Pfade hinzuzufügen oder zu entfernen. Ziehen Sie über die leere Leinwand, um die Pfade auszuwählen, die der Auswahlrahmen vollständig umschließt, oder drücken Sie **Strg+A**, um jeden Pfad auszuwählen.

![Das Bedienfeld Werkzeug für Vorgang mit einem ausgewählten Pfad, mit den Schaltflächen zum Anordnen, den Schaltflächen zum Spiegeln und Drehen und Konturstärke mitskalieren.](shot:vector/operation-settings)

Ein gestrichelter Rahmen mit Griffen umgibt die Auswahl.

- Ziehen Sie einen ausgewählten Pfad, um ihn zu verschieben. Halten Sie **Alt** gedrückt, um eine Kopie zu verschieben.
- Ziehen Sie einen Griff, um zu skalieren, oder den Griff über dem Rahmen, um zu drehen. **Umschalt** behält die Proportionen bei oder dreht in 15°-Schritten.
- Die Pfeiltasten verschieben um 1 px, mit **Umschalt** um 10 px.
- Die Schaltflächen zum Spiegeln und Drehen im Bedienfeld **Werkzeug** wirken auf die Auswahl um ihre Mitte.
- **Löschen** entfernt die ausgewählten Pfade.

**Konturstärke mitskalieren** im Bedienfeld **Werkzeug** ist standardmäßig aktiviert. Deaktivieren Sie es, um Pfade zu skalieren und ihre Konturstärken beizubehalten.

## Punkte bearbeiten

Sie können die Ankerpunkte der ausgewählten Pfade verschieben, hinzufügen und löschen.

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **A**.
- Drücken Sie mit dem Werkzeug **Vorgang** die Taste **Eingabe** oder doppelklicken Sie auf einen Pfad.
- Klicken Sie in den Arbeitsbereichen Malen und Foto in der Werkzeugleiste Werkzeuge mit der rechten Maustaste auf **Vorgang / Transformieren / Punkte bearbeiten** oder halten Sie es gedrückt, und wählen Sie **Punkte bearbeiten**.

Quadrate markieren die Ankerpunkte, und ausgewählte Ankerpunkte zeigen ihre Griffe. Drücken Sie **Escape**, um zu **Vorgang** zurückzukehren.

![Punkte bearbeiten auf einem Pfad, mit ausgewählten Ankerpunkten und Griffen.](shot:vector/edit-points)

- Klicken Sie auf einen Ankerpunkt, um ihn auszuwählen, mit **Umschalt** klicken Sie, um einen hinzuzufügen oder zu entfernen, oder ziehen Sie über die leere Leinwand, um die Ankerpunkte darin auszuwählen.
- Ziehen Sie Ankerpunkte, um sie zu verschieben. Ziehen Sie einen Griff, um die Kurve zu drehen, oder halten Sie **Alt** gedrückt, um ihn unabhängig von seinem Gegenstück zu bewegen.
- Ziehen Sie ein Segment, um es zu biegen. Klicken Sie auf ein Segment, um einen Ankerpunkt hinzuzufügen.
- Doppelklicken Sie auf einen Ankerpunkt, um ihn zwischen Eckpunkt und glattem Punkt umzuschalten.
- **Löschen** entfernt die ausgewählten Ankerpunkte.

Wenn Sie einen Ankerpunkt bearbeiten, wird aus einem Rechteck oder einer Ellipse ein gewöhnlicher Pfad.

## Pfadbefehle

Mit **Bearbeiten > Pfad** können Sie die ausgewählten Pfade verbinden, schließen, teilen, umkehren und kombinieren. Das Bedienfeld **Werkzeug** für **Punkte bearbeiten** listet die ersten vier auf.

- **Pfade verbinden** verbindet die nächstgelegenen Enden zweier offener Pfade oder schließt einen offenen Pfad.
- **Pfad schließen** verbindet die Enden jedes ausgewählten offenen Pfads.
- **Am Punkt teilen** schneidet die ausgewählten Pfade an den ausgewählten Ankerpunkten.
- **Richtung umkehren** lässt jeden Pfad in die andere Richtung verlaufen.
- **Zusammengesetzten Pfad erstellen** kombiniert die ausgewählten Pfade zu einem Pfad mit Löchern dort, wo sie sich überlappen. **Zusammengesetzten Pfad lösen** trennt sie wieder.

Ein Befehl, der nicht ausgeführt werden kann, nennt, was auszuwählen ist, zum Beispiel „Einen oder zwei offene Pfade zum Verbinden auswählen“.

## Anordnen

Mit **Bearbeiten > Anordnen** können Sie die Stapelreihenfolge der ausgewählten Pfade innerhalb ihrer Ebene ändern: **In den Vordergrund**, **Schrittweise nach vorne**, **Schrittweise nach hinten** und **In den Hintergrund**. Das Bedienfeld **Werkzeug** für **Vorgang** hat dieselben Schaltflächen.

## Pfadeinstellungen

Bei ausgewählten Pfaden zeigt **Eigenschaften** den vordersten ausgewählten Pfad. Eine Bezeichnung endet auf „(gemischt)“, wenn sich die ausgewählten Pfade unterscheiden, und eine Änderung gilt für jeden ausgewählten Pfad.

![Das Bedienfeld Eigenschaften für einen Pfad mit Füllung und Kontur.](shot:vector/path-properties)

### Füllung

Schaltet die Füllung ein oder aus. Eine neue Füllung verwendet die Hintergrundfarbe.

### Füllfarbe

Legt die Farbe der Füllung fest.

### Überlappungen

Legt fest, wie sich überlappende Teile gefüllt werden. **Gefüllt** füllt sie, und **Löcher** lässt sie leer. Erscheint nur, wenn **Füllung** aktiviert ist.

### Kontur

Schaltet die Kontur ein oder aus. Eine neue Kontur verwendet die Vordergrundfarbe.

### Konturfarbe

Legt die Farbe der Kontur fest.

### Konturbreite

Legt die Breite der Kontur fest, von 0.1 bis 4096 px.

### Linienenden

Legt die Form offener Enden fest: **Flach**, **Rund** oder **Eckig**.

### Ecken

Legt die Form der Kontur an Ecken fest: **Spitz**, **Rund** oder **Abgeschrägt**.

### Grenze für spitze Ecken

Legt fest, wie lang eine spitze Ecke werden kann, von 1 bis 20. Über der Grenze wird die Ecke abgeschrägt. Erscheint nur, wenn **Ecken** auf **Spitz** steht.
