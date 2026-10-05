---
title: "Paletten"
description: "Farben in Paletten speichern und im Bedienfeld Paletten mit gespeicherten und zuletzt verwendeten Farben malen."
related: ["color/color-panel", "color/edit-color", "color/eyedropper"]
---

Sie können Farben in Paletten speichern und aus dem Bedienfeld **Paletten** mit ihnen
malen. Paletten und zuletzt verwendete Farben sind in allen Arbeitsbereichen gleich.

![Das Bedienfeld Paletten mit den zuletzt verwendeten Farben oben, den Farbfeldern der aktiven Palette sowie Palettenname und Farbname unten.](shot:color/palettes-panel)

## Bedienfeld Paletten öffnen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Paletten**.
- Wählen Sie **Bedienfeld Paletten** in der Befehlssuche.
- Wählen Sie im Arbeitsbereich Malen die Registerkarte **Paletten** neben **Farbe** aus.
- Wählen Sie **Pinselfarbe** am Ende der Werkzeugleiste Werkzeuge aus, im Arbeitsbereich Skizze am rechten Ende der Titelleiste. In der Schublade steht Paletten unter dem Bedienfeld Farbe.
- Unter Windows, Linux und Android klicken Sie im Bedienfeld Farbe mit der rechten Maustaste auf das Vorder- oder Hintergrundfarbfeld oder halten es gedrückt und wählen **Paletten…**.

## Zuletzt verwendete Farben

Die oberste Zeile zeigt bis zu 64 Farben, die Sie im Bildinhalt verwendet haben, die
neueste zuerst. Wählen Sie eine zuletzt verwendete Farbe aus, um mit ihr zu malen.
Wählen Sie **Farbchronik aufklappen** (den Pfeil am Ende der Zeile) aus, um bis zu
vier Zeilen anzuzeigen.

Eine Farbe kommt hinzu, wenn ein Strich, eine Füllung, ein Verlauf oder eine Form sie
verwendet. Das Aufnehmen einer Farbe, Radieren, Malen auf einer Maske und das
Verwenden von Mischen oder Verflüssigen fügen nichts hinzu. Rückgängig entfernt keine
zuletzt verwendete Farbe.

## Mit einer gespeicherten Farbe malen

Wählen Sie ein Farbfeld aus, um mit seiner Farbe zu malen oder, während Sie eine
Maske bearbeiten, die Maskenfarbe festzulegen. Das Farbfeld, das der aktuellen Farbe
entspricht, ist umrandet.

## Eine Farbe hinzufügen

Wählen Sie **+** nach dem letzten Farbfeld aus, um die aktuelle Malfarbe in der
Palette zu speichern. Das Farbfeld behält die exakte Farbe einschließlich Farbraum,
Alpha und HDR-Intensität. Solange **Transparente Farbe** ausgewählt ist, ist **+**
nicht verfügbar.

## Farben benennen

Der Name der aktuellen Farbe steht unten rechts im Bedienfeld, mit ihrem Hex-Code als
sRGB-Vorschau. Eine Farbe mit HDR-Intensität zeigt außerdem die Intensität, zum
Beispiel „+1.0 EV“. Eine nicht gespeicherte Farbe zeigt einen vorgeschlagenen Namen
wie „Blaugrün“ oder „Umbra“.

Wählen Sie den Namen aus, um einen anderen einzugeben, und drücken Sie dann
**Eingabe** zum Bestätigen oder **Escape** zum Abbrechen. Eine nicht gespeicherte
Farbe erhält den Namen, wenn Sie sie mit **+** speichern. Bei einem gespeicherten
Farbfeld ersetzt der neue Name den alten.

Namen haben 1 bis 64 Zeichen und sind innerhalb einer Palette eindeutig.

## Farben anordnen und entfernen

Ziehen Sie ein Farbfeld, um es zu verschieben. Lassen Sie außerhalb des Rasters los
oder drücken Sie **Escape**, um das Verschieben abzubrechen.

Klicken Sie mit der rechten Maustaste auf ein Farbfeld oder halten Sie es gedrückt
(oder drücken Sie **Umschalt+F10**), um diese Befehle aufzurufen:

- **Rename Color…**
- **Remove Color**
- **Farbanordnung rückgängig machen** und **Farbanordnung wiederholen**

Solange das Bedienfeld den Fokus hat, machen **Strg+Z** und **Strg+Umschalt+Z** (oder
**Strg+Y**) Änderungen der Reihenfolge rückgängig und wiederholen sie. Das Hinzufügen
oder Entfernen eines Farbfelds löscht den Verlauf der Reihenfolge dieser Palette.

## Eine Palette wählen

Wählen Sie den Palettennamen unten links im Bedienfeld aus, um die Liste der Paletten
zu öffnen. Geben Sie etwas in **Palette suchen** ein, um die Liste zu filtern, und
wählen Sie eine Palette aus, um sie zu aktivieren.

![Die Palettenliste mit dem Suchfeld, der Schaltfläche + sowie Name und Farben jeder Palette.](shot:color/palettes-chooser)

## Neue Paletten

Wählen Sie in der Palettenliste **+** aus, und wählen Sie **New Palette…**. Eine
Palette ohne Namen heißt „Neue Palette“.

Die Bibliothek fasst bis zu 64 Paletten und insgesamt 4.096 Farben.

## Paletten umbenennen und entfernen

Klicken Sie in der Palettenliste mit der rechten Maustaste auf eine Palette oder
halten Sie sie gedrückt, und wählen Sie **Rename Palette…** oder **Remove Palette…**.
Die letzte Palette lässt sich nicht entfernen.

## Paletten importieren und exportieren

Um eine Palettendatei zu importieren, wählen Sie in der Palettenliste **+** aus und
dann **Import Palette…**. Capy Canvas liest Dateien im Format `.capycolor`, `.aco`,
`.cls`, `.swatches`, `.ase`, `.afpalette`, `.gpl`, `.kpl` und `.json` bis 1 MB. Die
Datei wird zu einer neuen Palette mit dem in der Datei gespeicherten Namen oder dem
Dateinamen.

Um eine Palette zu exportieren, klicken Sie in der Palettenliste mit der rechten
Maustaste darauf oder halten Sie sie gedrückt, und wählen Sie **Export Palette** und
dann ein Format:

- **Capycolor (.capycolor)** behält die exakten Farben einschließlich Farbraum, Alpha und HDR-Intensität.
- **Clip Studio Paint, Photoshop (.aco)**, **Procreate (.swatches)**, **Affinity, Adobe (.ase)** und **Krita, GIMP (.gpl)** speichern deckende sRGB-Farben. Farben außerhalb von sRGB werden beschnitten. Eine Procreate-Datei behält die ersten 30 Farben.

Das Bedienfeld meldet, wie viele Farben beschnitten oder deckend gemacht wurden.

![Das Palettenmenü mit den Formaten von Export Palette.](shot:color/palettes-menu)

## Startpaletten

Capy Canvas enthält Meeresstudie, Pixelspielhalle, Dunkle Fantasie, Pop-Art,
Bonbonpastell, Risodruck, Synthwave, Siebzigerjahredruck, Holzschnitt und Tinte. Sie
können Startpaletten wie jede andere Palette ändern. Eine entfernte Startpalette kommt
nicht zurück.
