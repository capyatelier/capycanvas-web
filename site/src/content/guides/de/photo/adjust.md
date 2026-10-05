---
title: "Anpassen und Exportieren"
description: "Phase 3 des Tutorials zur Fotobearbeitung: Tonwert- und Farbanpassungen auf Filterebenen und ein JPEG-Export."
related: ["filters/how-filters-apply", "filters/tone", "selections/working", "files/export"]
---

In dieser Phase entstehen über dem Foto Filterebenen für Tonwerte und Farbe
sowie ein JPEG für das Web.

## 1. Kurven hinzufügen

Wählen Sie *Retouch* aus. Filter, die Sie über das Menü **Filter** hinzufügen,
kommen dann direkt über *Retouch* und verändern sowohl *Retouch* als auch das
Foto ([Wie Filter wirken](/de/docs/filters/how-filters-apply/)).

Wählen Sie **Filter > Tonwert > Kurven**. Über *Retouch* erscheint eine Ebene
**Kurven**, und ihre Einstellungen öffnen sich im Bedienfeld **Eigenschaften**.
Setzen Sie auf der Kurve **RGB** einen Punkt in den Tiefen und ziehen Sie ihn
nach unten, setzen Sie dann einen Punkt in den Lichtern und ziehen Sie ihn nach
oben ([Tonwertfilter](/de/docs/filters/tone/)).

![Das Bedienfeld Eigenschaften mit einer S-förmigen RGB-Kurve in Kurven.](shot:photo/adjust-curves)

## 2. Dynamik hinzufügen

Wählen Sie **Filter > Farbe > Dynamik** und stellen Sie im Bedienfeld
**Eigenschaften** **Dynamik** auf 25 ([Farbfilter](/de/docs/filters/color/)).
Die Ebene **Dynamik** erscheint über **Kurven**.

## 3. Stein auswählen

1. Drücken Sie **M**, oder wählen Sie in der Werkzeugleiste Werkzeuge **Lassoauswahl** aus, und ziehen Sie eine Linie um den Stein.
2. Wählen Sie **Auswahl > Auswahlkante weichzeichnen…**, oder wählen Sie in der Auswahlleiste **Verfeinern** aus und wählen Sie **Weiche Kante…** ([Mit Auswahlen arbeiten](/de/docs/selections/working/)).
3. Stellen Sie **Feather radius** auf 20 px und wählen Sie **Anwenden** aus.

## 4. Tiefen im Stein aufhellen

Würden Sie die Tiefen des ganzen Fotos aufhellen, würde der schwarze
Hintergrund grau. Das Beispiel hellt sie nur im Stein auf.

Wählen Sie in der Auswahlleiste **Anpassen** aus und wählen Sie
**Tonwert > Tiefen/Lichter**. Stellen Sie im Bedienfeld **Eigenschaften**
**Tiefen** auf 35%.

![Die Auswahlleiste mit dem Menü Anpassen, geöffnet bei der Kategorie Tonwert, neben der Auswahl um den Stein.](shot:photo/adjust-bar)

Die Auswahl wird zur Maske der neuen Ebene **Tiefen/Lichter**. Nur der Stein
verändert sich.

## 5. Zeichnung speichern

Wählen Sie **Datei > Speichern** oder drücken Sie **Strg+S**. Beim ersten
Speichern eines geöffneten Fotos werden Sie wie bei **Speichern unter…** nach
einem Ordner und einem Namen gefragt. Die `.capy`-Datei behält das
Originalfoto, die Ebenen, die Masken und die Filterebenen
([Öffnen und Speichern](/de/docs/files/open-save/)).

## 6. JPEG exportieren

1. Wählen Sie **Datei > Exportieren…** oder drücken Sie **Strg+Umschalt+E**.
2. Lassen Sie **Ziel** auf **Web / Teilen** und stellen Sie **Format** auf **JPEG-Bild**.
3. Stellen Sie **Pixelgröße** auf **In Grenzen einpassen** und lassen Sie **Maximale Breite (px)** und **Maximale Höhe (px)** auf 2048.
4. Wählen Sie **Datei auswählen…** aus und wählen Sie einen Ordner und einen Namen.

![Der Dialog Bild exportieren mit Web / Teilen, JPEG-Bild, Qualität 90 und In Grenzen einpassen.](shot:photo/export-jpeg)

Das Exportieren verändert die Zeichnung nicht
([Bilder exportieren](/de/docs/files/export/)).
