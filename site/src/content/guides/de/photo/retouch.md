---
title: "Retuschieren"
description: "Phase 2 des Tutorials zur Fotobearbeitung: Staub und einen Fleck mit den Reparaturpinseln auf einer Ebene über dem Foto entfernen."
related: ["retouch/clone-heal", "layers/settings", "layers/working"]
---

In dieser Phase entsteht eine Ebene *Retouch*, die Staub und einen Fleck im Foto
überdeckt. Die Fotoebene bleibt unverändert.

## 1. Retuscheebene hinzufügen

1. Wählen Sie unten im Bedienfeld Ebenen **Neue Ebene** aus und benennen Sie die neue Ebene in *Retouch* um.
2. Wählen Sie **Ebene > Ebeneneinstellungen > Ebene darunter als Referenz verwenden** ([Ebeneneinstellungen](/de/docs/layers/settings/)).

Die Fotoebene wird zur Referenzebene, und in ihrer Zeile erscheint neben dem
Auge ein Leuchtturmsymbol. Die Reparaturwerkzeuge kopieren standardmäßig aus
den Referenzebenen und malen auf *Retouch*.

![Das Bedienfeld Ebenen mit Retouch über der Ebene terrarium, die das Referenzsymbol zeigt.](shot:photo/retouch-layers)

## 2. Staub entfernen

Der **Bereichsreparaturpinsel** ersetzt beim Absetzen des Stifts das Übermalte
durch Textur aus dem ähnlichsten Bereich in der Nähe
([Klonen und Reparieren](/de/docs/retouch/clone-heal/)). Das Beispiel entfernt
Staub vom Glas am Fuß des Terrariums.

1. Wählen Sie **Ansicht > Tatsächliche Pixel** oder drücken Sie **Strg+1**, um das Foto in 100% zu sehen.
2. Wählen Sie in der Werkzeugleiste Werkzeuge **Bereichsreparaturpinsel** aus, oder drücken Sie **S**, bis er ausgewählt ist.
3. Drücken Sie **]**, bis der Pinsel größer als die Staubkörner ist.
4. Malen Sie über jedes Staubkorn.

## 3. Fleck entfernen

Der **Reparaturpinsel** malt mit Pixeln, die von einer Quelle kopiert werden,
und gleicht sie dann an Farbe und Helligkeit rund um den Pinselstrich an.

1. Klicken Sie in der Werkzeugleiste Werkzeuge mit der rechten Maustaste auf **Bereichsreparaturpinsel** oder halten Sie ihn gedrückt, und wählen Sie **Reparaturpinsel**.
2. Halten Sie **Alt** gedrückt und klicken Sie auf eine saubere Stelle neben dem Fleck, oder wählen Sie in **Werkzeugoptionen** **Quelle festlegen** aus und klicken Sie auf die saubere Stelle.
3. Malen Sie über den Fleck.

![Die Quellscheibe des Reparaturpinsels auf dem Glas, mit ihrer Leiste der Quelloptionen.](shot:photo/retouch-disc-bar)

Eine Scheibe auf der Leinwand markiert die Quelle. Ziehen Sie die Scheibe, um
die Quelle zu verschieben, oder wählen Sie die Scheibe aus, um ihre Leiste
anzuzeigen.

Um mit dem Originalfoto zu vergleichen, blenden Sie *Retouch* aus.

Nächste Phase: [Anpassen und Exportieren](/de/docs/photo/adjust/).
