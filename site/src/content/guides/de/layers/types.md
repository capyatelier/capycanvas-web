---
title: "Ebenentypen"
description: "Mal-, Objekt-, Papier-, Gruppen-, Füll-, Filter- und Auswahlebenen und die Regeln für jeden Typ."
related: ["layers/panel", "layers/paper", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Die aktuellen Ebenentypen im Ebenen-Bedienfeld.](shot:layers/types-rows)

## Malebene

Eine Malebene enthält Pixel im Farbraum der Zeichnung. Pinsel, **Füllung**, **Farbverlauf** und **Form** malen auf diesem Ebenentyp.

Wählen Sie **Ebene > Neu > Neue Ebene** oder **Neue Ebene** unten im Ebenen-Bedienfeld. Eine neue Zeichnung beginnt mit **Aktuelle Tinte** über Papier.

## Objektebene

Eine Objektebene behält ein importiertes Bild in seiner eigenen Größe, Farbtiefe und seinem Farbprofil. Beim Öffnen oder Importieren eines Bilds, Ablegen eines Bilds auf der Leinwand und Einfügen eines Bilds aus einer anderen App entstehen Objektebenen.

Sie können eine Objektebene verschieben, skalieren und drehen, ohne ihre Quelle wiederholt neu zu berechnen. Wählen Sie **Ebene > Ebene rastern**, wenn Sie auf ihren Pixeln malen oder einen Befehl verwenden möchten, der eine Malebene erfordert. Das Rastern wandelt sie in Farbraum, Farbtiefe und Pixelraster der Zeichnung um.

## Papier

Papier liefert die Hintergrundfarbe und die Textur für Trockenmedium-Striche. Es bleibt unten im Ebenenstapel und hat Farb- und Texturminiaturen.

Eine Zeichnung kann ein Papier enthalten. Papier kann keine Maske haben, keine Schnittmaskenebene werden, nicht über gewöhnliche Ebenen verschoben und nicht mit einer gewöhnlichen Ebene zusammengeführt werden. Siehe [Papier](/de/docs/layers/paper/) für Textur, Beleuchtung und weitere Einstellungen.

## Gruppe

Eine Gruppe enthält Ebenen in einem einklappbaren Ordner. Wählen Sie **Ebene > Neu > Neue Gruppe**, **Neue Gruppe** unter der Ebenenliste oder **Ebene > Anordnen > Ausgewählte Ebenen gruppieren**.

Eine Gruppe kombiniert ihre Inhalte vor dem Verrechnen mit den darunterliegenden Ebenen, sofern [Durchreichen](/de/docs/layers/settings/) nicht eingeschaltet ist.

## Füllebenen

**Einfarbig** und **Verlaufsfüllung** bedecken die Leinwand mit erzeugtem Inhalt. Fügen Sie eine über **Ebene > Neu**, das Menü **Filter > Füllung** oder das Bedienfeld **Filter** hinzu.

Wählen Sie die Miniatur von Einfarbig, um **Farbe bearbeiten** zu öffnen. Fügen Sie eine Maske hinzu, um den sichtbaren Bereich einer Füllung zu malen. Sie können eine Füllebene beschneiden, aber keine anderen Ebenen an ihr beschneiden.

## Filterebenen

Eine Filterebene verändert darunterliegende Ebenen, statt Pixel zu enthalten. Ihre Zeile zeigt Symbol und Namen des Filters. Siehe [Wie Filter wirken](/de/docs/filters/how-filters-apply/).

## Auswahlebenen

Eine Auswahlebene speichert eine Auswahl. Wählen Sie **Neue Auswahlebene** unter der Ebenenliste, um eine hinzuzufügen. Sie hat weder Deckkraft, Mischmodus, Maske, Beschneidung noch Referenzeinstellung und kann nicht zusammengeführt werden.
