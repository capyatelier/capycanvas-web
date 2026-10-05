---
title: "Grundfarben"
description: "Phase 3 des Illustrations-Tutorials: eine Malebene für jede Form, auf die Form maskiert und mit ihrer Grundfarbe gefüllt."
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

In dieser Phase entsteht für jede Form eine Malebene, die mit ihrer Grundfarbe
gefüllt und auf die Form maskiert ist. Die Grundfarben kommen auf Malebenen,
weil eine Füllebene keine Beschneidungsbasis für die Schattierung in Phase 4
sein kann.

## 1. Ebene Block hinzufügen

Blenden Sie *Sketch* aus, wählen Sie die Zeile aus und fügen Sie mit
**Neue Ebene** eine Ebene namens *Block* hinzu. Die neue Ebene erscheint direkt
über *Sketch* und unter *Line art*.

## 2. Ebene auf den Block maskieren

Drücken Sie **M**, oder wählen Sie in der Werkzeugleiste Werkzeuge in der Gruppe
**Auswahl** die **Lassoauswahl** aus, und ziehen Sie den Umriss des Blocks in
*Line art* nach. Wählen Sie dann in der Auswahlleiste **Maske** aus
([Mit Auswahlen arbeiten](/de/docs/selections/working/)).

![Die Auswahlleiste mit Maske neben einer Auswahl um den Block.](shot:illustration/mask-selection-bar)

Die Auswahl wird zur Maske von *Block* ([Masken](/de/docs/layers/masks/)). In
der Zeile erscheint eine Maskenminiatur, und eine Leiste am unteren Rand der
Leinwand zeigt „Maske von Block wird bearbeitet“.

## 3. Ebene füllen

**Auswahl füllen** ist nicht verfügbar, während Sie eine Maske bearbeiten. So
füllen Sie die Ebene:

1. Wählen Sie in der Zeile *Block* die Ebenenminiatur aus oder wählen Sie in der Leiste am unteren Rand der Leinwand **Inhalt bearbeiten** aus.
2. Wählen Sie im Bedienfeld **Farbe** Terrakotta.
3. Wählen Sie **Auswahl > Alle Pixel auswählen** oder drücken Sie **Strg+A**.
4. Wählen Sie **Bearbeiten > Auswahl füllen** oder drücken Sie **Umschalt+Rücktaste**.
5. Wählen Sie **Auswahl > Pixelauswahl aufheben** oder drücken Sie **Strg+D**.

Die Farbe bedeckt die ganze Ebene, und die Maske zeigt sie nur innerhalb des
Blocks.

## 4. Disc und Ribbon hinzufügen

Legen Sie auf dieselbe Weise *Disc* in Ocker und danach *Ribbon* in Blaugrün an.

![Das Bedienfeld Ebenen mit Ribbon, Disc und Block, jeweils mit Maskenminiatur, unter Line art.](shot:illustration/mask-layers)

Die Ebenenliste zeigt *Line art*, *Ribbon*, *Disc*, *Block*, *Sketch*,
*Color rough* und **Papier**.

## 5. Kante anpassen

Wählen Sie in der Zeile *Ribbon* die Maskenminiatur aus. Die Leiste am unteren
Rand der Leinwand zeigt „Maske von Ribbon wird bearbeitet“.

![Die Leiste am unteren Rand der Leinwand mit „Maske von Ribbon wird bearbeitet“, Umkehren, Deaktivieren, Maske anwenden und Inhalt bearbeiten.](shot:illustration/mask-bar)

Malen Sie mit dem Pinsel **G-Feder** an einer Kante entlang, um mehr vom
Blaugrün zu zeigen, oder schneiden Sie die Kante mit dem **Radierer** zurück.
Auf einer Maske ignorieren Pinsel die Malfarbe.

Nächste Phase: [Rendering](/de/docs/illustration/render/).
