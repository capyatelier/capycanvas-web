---
title: "Bildgröße und Drehung"
description: "Die Befehle unter Bearbeiten > Bild, die Größe und Ausrichtung des ganzen Bilds ändern."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Unter **Bearbeiten > Bild** können Sie das ganze Bild skalieren, drehen und
spiegeln. Das Bild bleibt dabei an seiner Stelle auf dem Bildschirm.

Die Befehle sind nicht verfügbar, solange ein Zuschnitt oder eine
Transformation geöffnet ist und während Sie eine Maske, die Schnellmaske oder
eine Auswahlebene bearbeiten. Zu **Zuschneiden** und
**Leinwand auf Auswahl zuschneiden** siehe [Zuschneiden](/de/docs/transform/crop/).

![Das Untermenü Bild im Menü Bearbeiten.](shot:transform/image-menu)

## Bildgröße…

Sie können das ganze Bild skalieren oder nur seine Auflösung ändern.

Wählen Sie **Bearbeiten > Bild > Bildgröße…**. Malebenen und Masken werden neu
berechnet, platzierte Fotos behalten ihre Originalpixel. Auswahlen, Hilfslinien
und in Pixeln gemessene Filtereinstellungen werden mit dem Bild skaliert.

![Der Dialog Bildgröße.](shot:transform/image-size-dialog)

### Breite und Höhe

Stellen Sie die neue Größe in **Pixel** oder **Prozent** ein. Beim Wechsel der
Einheit werden die Werte umgerechnet.

### Seitenverhältnis beibehalten

Verknüpft **Breite** und **Höhe**. Standardmäßig aktiviert.

### Auflösung

Legt die Auflösung in Pixeln pro Zoll fest. Wenn Sie nur die Auflösung ändern,
bleiben die Pixel unverändert. Das Feld beginnt mit der Auflösung der Zeichnung
oder mit 72 ppi, wenn die Zeichnung keine hat.

### Neu berechnen

**Automatisch** (Standard) verwendet beim Verkleinern Lanczos und beim
Vergrößern Bikubisch. Sie können auch **Bikubisch**, **Lanczos**, **Bilinear**
oder **Nächster Nachbar** wählen.

## Leinwandgröße…

Sie können ohne Neuberechnung Leinwand um das Bild hinzufügen oder entfernen.

Wählen Sie **Bearbeiten > Bild > Leinwandgröße…**. Pixel außerhalb einer
kleineren Leinwand bleiben verborgen auf ihren Ebenen, eine größere Leinwand
zeigt sie wieder.

![Der Dialog Leinwandgröße.](shot:transform/canvas-size-dialog)

### Breite und Höhe

Stellen Sie die neue Größe in **Pixel** oder **Prozent** ein. Beim Wechsel der
Einheit werden die Werte umgerechnet.

### Relativ

Addiert die eingegebenen Werte zur aktuellen Größe. Standardmäßig deaktiviert.

### Anker

Legt in einem 3 × 3-Raster fest, welche Seite oder Ecke des Bilds an ihrem Platz
bleibt. Standard ist **Mitte**.

## Bild drehen und spiegeln

Wählen Sie einen dieser Befehle unter **Bearbeiten > Bild**:

- **Bild 90° nach links drehen**
- **Bild 90° nach rechts drehen**
- **Bild 180° drehen**
- **Bild horizontal spiegeln**
- **Bild vertikal spiegeln**

Das ganze Bild wird mit seiner Auswahl und seinen Hilfslinien gedreht oder
gespiegelt. Die Pixel werden nicht neu berechnet. Um nur die Ansicht zu drehen
oder zu spiegeln, siehe [Leinwandansicht](/de/docs/start/canvas/).

## Ränder abschneiden

Wählen Sie **Bearbeiten > Bild > Ränder abschneiden**, um die Leinwand auf die
sichtbaren Pixel zu verkleinern. Pixel außerhalb der neuen Leinwand bleiben
verborgen auf ihren Ebenen.

## Alles sichtbar machen

Wählen Sie **Bearbeiten > Bild > Alles sichtbar machen**, um die Leinwand zu
vergrößern, bis sie die Pixel aller Ebenen zeigt, einschließlich ausgeblendeter
Ebenen und Pixel außerhalb der Leinwand.
