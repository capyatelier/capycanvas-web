---
title: "Neue Zeichnungen"
description: "Blattgröße, Auflösung, Papier, Farbeinstellungen und Vorgaben im Dialog Neue Zeichnung."
related: ["layers/paper", "color-management/color-spaces", "layers/types", "files/open-save"]
---

Wählen Sie **Datei > Neu…**, drücken Sie **Strg+N**, wo verfügbar, oder wählen Sie **Neu…** in der Befehlsleiste. Die neue Zeichnung öffnet sich in einem eigenen Reiter.

![Der Dialog Neue Zeichnung mit A4-Abmessungen, 300 ppi Auflösung, Farb- und Papiereinstellungen sowie Erstellen.](shot:files/new-dialog)

## Vorgaben

Wählen Sie eine Vorgabe nach Kategorie, suchen Sie nach Namen oder wählen Sie eine zuletzt verwendete Vorgabe. Eine Vorgabe füllt Abmessungen, Auflösung, Farbeinstellungen und Papiereinstellungen aus.

![Die Vorgabenauswahl in Neue Zeichnung mit den Kategorien Skizze, Aquarell, Pastell, Leinwand, Mischtechnik, Comics, Drucke und Digital.](shot:files/new-presets)

Speichern Sie die aktuellen Einstellungen als benannte Vorgabe zur Wiederverwendung. Öffnen Sie das Menü einer gespeicherten Vorgabe, um sie umzubenennen oder zu löschen. Integrierte Vorgaben lassen sich nicht umbenennen oder löschen.

## Blatt

Die Vorschau zeigt Proportionen und Ausrichtung des Blatts. Geben Sie einen Zeichnungsnamen ein, legen Sie dann **B** und **H** fest und wählen Sie px, in, cm oder mm als Einheit. Mit dem Verknüpfungsregler behalten Sie die aktuellen Proportionen bei, mit dem Ausrichtungsregler tauschen Sie Breite und Höhe.

**Auflösung** legt die Pixel pro Zoll für physische Abmessungen und die Skalierung der [Papiertextur](/de/docs/layers/paper/) fest. Eine Änderung nur der Auflösung ändert die Druckgrößen-Metadaten, ohne die Zeichnung neu zu berechnen.

Der Dialog zeigt die resultierenden Pixelmaße und die geschätzte Kapazität. Einstellungen jenseits der aktuellen Zeichnungsgrenze des Geräts können nicht erstellt werden; die Grenze hängt von Abmessungen, Farbtiefe und verfügbaren Grafikressourcen ab.

## Papier

![Die Papierschublade in Neue Zeichnung mit Kein Papier, den Papierkacheln und Textursichtbarkeit.](shot:files/new-paper)

Wählen Sie die Texturkachel unter **Papier**, um eine integrierte oder importierte Papiertextur für die neue Zeichnung zu wählen. **Textursichtbarkeit** unten in der Schublade legt denselben Wert fest wie in den [Eigenschaften](/de/docs/layers/paper/) der Papierebene, und die Kachel zeigt ihn unter dem Namen der Textur an. **Importieren…** ist die letzte Kachel. Sie fügt der Papierbibliothek ein Bild hinzu und wählt es aus.

Wählen Sie **Kein Papier**, um die Zeichnung ohne Papierebene zu erstellen. **Textursichtbarkeit** ist dann nicht verfügbar.

![Die Optionen Farbe und Transparent für Papier in Neue Zeichnung.](shot:files/new-paper-color)

**Farbe** legt die Papierfarbe fest. **Transparent** behält die Papierebene bei, blendet sie anfangs aber aus. Dies unterscheidet sich von **Kein Papier**, das keine Papierebene erstellt.

## Farbeinstellungen

Wählen Sie **Farbraum**, **Farbtiefe** und **Überblendung** der Zeichnung. Fließkomma-Farbtiefen verwenden **Lineares Licht** als Verrechnung. Siehe [Farbraum, Farbtiefe und Verrechnung](/de/docs/color-management/color-spaces/).

## Zeichnung erstellen

Wählen Sie **Erstellen**. Die Zeichnung beginnt mit einer leeren Malebene, **Aktuelle Tinte**, über dem gewählten Papier, wenn eines eingeschlossen wurde.

Der Dialog behält die zuletzt zum Erstellen einer Zeichnung verwendeten Optionen bei. Eine Vorgabe ersetzt sie durch die Werte dieser Vorgabe.
