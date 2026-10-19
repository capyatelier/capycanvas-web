---
title: "Bildgröße und Drehung"
description: "Die Befehle im Menü Bild zum Ändern von Größe und Ausrichtung des gesamten Bilds."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Sie können das gesamte Bild über **Bild** skalieren, drehen und spiegeln. Das Bild bleibt auf dem Bildschirm an seiner Position.

Die Befehle sind nicht verfügbar, solange ein Zuschnitt oder eine
Transformation geöffnet ist und während Sie eine Maske, die Schnellmaske oder
eine Auswahlebene bearbeiten. Zu **Zuschneiden** und
**Leinwand auf Auswahl zuschneiden** siehe [Zuschneiden](/de/docs/transform/crop/).

![Das Menü Bild.](shot:transform/image-menu)

## Bildgröße…

Sie können das ganze Bild skalieren oder nur seine Auflösung ändern.

Wählen Sie **Bild > Bildgröße…**. Malebenen und Masken werden neu berechnet, Objektebenen behalten ihre Quellpixel. Auswahlen, Hilfslinien und in Pixeln gemessene Filtereinstellungen werden mit dem Bild skaliert.

Papier wird mit dem Bild neu berechnet. Eine Änderung nur der Auflösung aktualisiert seine physische Skalierung, ohne die Pixel neu zu berechnen.

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

Wählen Sie **Bild > Leinwandgröße…**. Pixel außerhalb einer kleineren Leinwand bleiben auf ihren Ebenen ausgeblendet erhalten; eine größere Leinwand zeigt sie wieder.

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

Wählen Sie einen dieser Befehle unter **Bild**:

- **Bild 90° nach links drehen**
- **Bild 90° nach rechts drehen**
- **Bild 180° drehen**
- **Bild horizontal spiegeln**
- **Bild vertikal spiegeln**

Das ganze Bild wird mit seiner Auswahl und seinen Hilfslinien gedreht oder
gespiegelt. Die Pixel werden nicht neu berechnet. Um nur die Ansicht zu drehen
oder zu spiegeln, siehe [Leinwandansicht](/de/docs/start/canvas/).

## Ränder abschneiden

Wählen Sie **Bild > Ränder abschneiden**, um die Leinwand auf die sichtbaren Pixel zu verkleinern. Pixel außerhalb der neuen Leinwand bleiben auf ihren Ebenen ausgeblendet erhalten.

## Alles sichtbar machen

Wählen Sie **Bild > Alles sichtbar machen**, um die Leinwand bis zu den Pixeln aller Ebenen zu vergrößern, einschließlich ausgeblendeter Ebenen und Pixel außerhalb der Leinwand.
