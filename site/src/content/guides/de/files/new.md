---
title: "Neue Zeichnungen"
description: "Blattgröße, Auflösung, Papier, Farbeinstellungen und Vorgaben im Dialog Neue Zeichnung."
related: ["layers/paper", "color-management/color-spaces", "layers/types", "files/open-save"]
---

Wählen Sie **Datei > Neu…**, drücken Sie **Strg+N**, wo verfügbar, oder wählen Sie **Neu…** in der Befehlsleiste. Die neue Zeichnung öffnet sich in einem eigenen Reiter.

![Der Dialog Neue Zeichnung mit A4-Abmessungen, 300 ppi Auflösung, Farb- und Papiereinstellungen sowie Erstellen.](shot:files/new-dialog)

## Vorgaben

Wählen Sie eine Vorgabe nach Kategorie, suchen Sie nach Namen oder wählen Sie eine zuletzt verwendete Vorgabe. Eine Vorgabe füllt Abmessungen, Auflösung, Farbeinstellungen und Papiereinstellungen aus.

![Die Vorgabenauswahl in Neue Zeichnung.](shot:files/new-presets)

Bevor Sie eine andere Einrichtung verwendet oder gespeichert haben, wählt Vorgaben **Skizzenbuch A4**: A4 im Hochformat (210 × 297 mm), Zeichenpapier in Naturweiß und 2480 × 3508 px bei 300 ppi.

Speichern Sie die aktuellen Einstellungen als benannte Vorgabe zur Wiederverwendung. Öffnen Sie das Menü einer gespeicherten Vorgabe, um sie umzubenennen oder zu löschen. Integrierte Vorgaben lassen sich nicht umbenennen oder löschen.

## Blatt

Die Vorschau zeigt Proportionen und Ausrichtung des Blatts. Geben Sie einen Zeichnungsnamen ein und legen Sie **Breite** und **Höhe** in Pixeln, Zoll, Zentimetern oder Millimetern fest. Mit dem Verknüpfungsregler behalten Sie die aktuellen Proportionen bei, mit dem Ausrichtungsregler tauschen Sie Breite und Höhe.

**Auflösung** legt die Pixel pro Zoll für physische Abmessungen und die Skalierung der [Papiertextur](/de/docs/layers/paper/) fest. Eine Änderung nur der Auflösung ändert die Druckgrößen-Metadaten, ohne die Zeichnung neu zu berechnen.

Ein neues Fenster beginnt mit einer separaten leeren A4-Zeichnung im Querformat bei 300 ppi (3508 × 2480 px).

Der Dialog zeigt die resultierenden Pixelmaße und die geschätzte Kapazität. Einstellungen jenseits der aktuellen Zeichnungsgrenze des Geräts können nicht erstellt werden; die Grenze hängt von Abmessungen, Farbtiefe und verfügbaren Grafikressourcen ab.

## Papier

![Die Papiertexturen in Neue Zeichnung.](shot:files/new-paper)

Wählen Sie eine integrierte oder importierte Papiertextur für die neue Zeichnung. **Importieren…** fügt der Papierbibliothek ein Bild hinzu und wählt es aus. Wählen Sie **Kein Papier**, um die Zeichnung ohne Papierebene zu erstellen.

![Die Optionen Farbe und Transparent für Papier in Neue Zeichnung.](shot:files/new-paper-color)

**Farbe** legt die Papierfarbe fest. **Transparent** behält die Papierebene bei, blendet sie anfangs aber aus. Dies unterscheidet sich von **Kein Papier**, das keine Papierebene erstellt.

## Farbeinstellungen

Wählen Sie **Farbraum**, **Farbtiefe** und **Überblendung** der Zeichnung. Fließkomma-Farbtiefen verwenden **Lineares Licht** als Verrechnung. Siehe [Farbraum, Farbtiefe und Verrechnung](/de/docs/color-management/color-spaces/).

## Zeichnung erstellen

Wählen Sie **Erstellen**. Die Zeichnung beginnt mit einer leeren Malebene, **Aktuelle Tinte**, über dem gewählten Papier, wenn eines eingeschlossen wurde.

Der Dialog behält die zuletzt zum Erstellen einer Zeichnung verwendeten Optionen bei. Eine Vorgabe ersetzt sie durch die Werte dieser Vorgabe.
