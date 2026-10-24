---
title: "Papier"
description: "Papierfarbe und -textur, importierte Papiere, Skalierung, Beleuchtung und Ebenenbeschränkungen."
related: ["layers/types", "layers/panel", "brushes/dry-media", "files/new"]
---

Papier liefert die Hintergrundfarbe der Zeichnung und die Textur, auf die Pinsel mit **Texturstärke** reagieren.

## Papierzeile

![Eine Papierzeile mit Farb- und Texturminiaturen.](shot:layers/paper-row)

Papier bleibt unter gewöhnlichen Ebenen. Seine erste Miniatur öffnet **Farbe bearbeiten**, die Texturminiatur öffnet **Textur wählen**. Wählen Sie die Zeile, um ihre Einstellungen in **Eigenschaften** zu bearbeiten.

Sie können Papier ausblenden oder löschen. Hat die Zeichnung kein Papier, wählen Sie **Papier hinzufügen** unten im Ebenen-Bedienfeld, um eines wiederherzustellen.

![Papier hinzufügen unter der Ebenenliste.](shot:layers/add-paper)

Eine Zeichnung kann nur ein Papier enthalten. Papier kann keine Maske haben, keine Schnittmaskenebene werden, nicht über eine andere Ebene verschoben und nicht als Auswahlebene verwendet werden.

## Textur wählen

Wählen Sie die Texturminiatur in der Papierzeile oder **Textur wählen** in **Eigenschaften**. Wählen Sie ein Papier und dann **Textur verwenden**.

![Integrierte Papiere in Textur wählen.](shot:layers/paper-choose-texture)

Die Bibliothek ist ein einziges scrollbares Raster, geordnet von Aquarell- und Zeichenpapieren bis zu Oberflächentexturen wie Beton, Holz und Sand. Papiere mit Faserrichtung gibt es als Paare **quer** und **längs**.

**Importieren…** fügt ein Bild, RGB oder Graustufen, am Ende des Rasters als wiederverwendbare Papiertextur hinzu. Importierte Papiere werden in die Zeichnung eingebettet.

Öffnen Sie das Menü eines importierten Papiers für **Umbenennen…** oder **Löschen**. Ein in eine Zeichnung eingebettetes Papier, das in Ihrer Bibliothek fehlt, bietet stattdessen **Zur Bibliothek hinzufügen**.

![Das Menü eines importierten Papiers.](shot:layers/paper-imported-menu)

## Eigenschaften

![Die Papierregler in Eigenschaften.](shot:layers/paper-properties)

### Farbe

Legt die Papierfarbe fest.

### Textur

Öffnet **Textur wählen**.

### Skalierung

Legt die physische Skalierung der Textur von 25 % bis 400 % fest. Die Leinwand zeigt kurz das Texturrelief, während Sie die Skalierung ändern.

### Textursichtbarkeit

Legt fest, wie stark die Texturbeleuchtung im fertigen Bild erscheint, von 0 % bis 300 %. Bei 0 % ist die Texturbeleuchtung ausgeschaltet.

### Licht

Legt die Lichtrichtung über der Papiertextur fest.

### Durch Farbe sichtbar

Legt fest, wie viel Papierbeleuchtung über der darüberliegenden Farbe sichtbar bleibt. Bei 0 % verdeckt deckende Farbe im Modus Normal die Beleuchtung; bei 100 % wirkt sie auf das ganze Bild.

![Striche auf der Leinwand neben dem Bedienfeld Eigenschaften für Papier, eingestellt auf Leinen mit Textursichtbarkeit 55 %, Licht 130° und Durch Farbe sichtbar 100 %.](shot:layers/paper-lighting)

Exporte der nativen App enthalten sichtbare Papierbeleuchtung. Der Webeditor exportiert derzeit ohne Papierbeleuchtung. Die kurze Texturvorschau nach Änderungen an **Textur** oder **Skalierung** wird nicht exportiert.

## Striche und Geometrie

Neue Striche von Pinseln mit **Texturstärke** verwenden das nächste Papier auf oder unter ihrer Ebene. Ausblenden von Papier verhindert nicht, dass seine Textur neue Striche beeinflusst. Änderungen an Textur oder Skalierung ändern bereits gezeichnete Markierungen nicht.

Papier verwendet die Druckauflösung der Zeichnung, um seine physische Skalierung beizubehalten. **Bild > Bildgröße…** kann diese Auflösung ändern. Beim Skalieren oder Drehen des Bilds wird Papier mit der Zeichnung neu berechnet; Zuschneiden ändert seine Skalierung nicht.
