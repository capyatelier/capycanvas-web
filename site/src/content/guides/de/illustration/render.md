---
title: "Rendern"
description: "Fügen Sie den auf jede Form zugeschnittenen Ebenen Schattierungen und Texturen hinzu und exportieren Sie dann das Ergebnis."
purpose: "Beim Rendern erhalten die Formen ihr Licht und ihren Schatten. Wenn Sie die Schattierung auf beschnittene Ebenen malen, bleibt sie automatisch in jeder Form, und da die Schattierung von der Grundfarbe getrennt ist, können Sie sie anpassen oder wiederholen, ohne etwas zu verlieren."
techniques: ["Befestigen Sie eine Schattierungsebene an der Multifunktionsleiste.", "Steuern Sie die Stärke der Schattierung.", "Schattieren Sie die anderen Formen, überprüfen Sie die Ebenen und exportieren Sie."]
figure: "1: Bandtextur und Bandschattierung über dem Band. 2: Auf die darunter liegende Ebene zuschneiden. 3: Deckkraft der Ebene für den gesamten Schattierungsdurchgang."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Bandtextur und Bandschattierung über dem Band. 2: Auf die darunter liegende Ebene zuschneiden. 3: Deckkraft der Ebene für den gesamten Schattierungsdurchgang."}
---

## 1. Fügen Sie abgeschnittene Schattierungen hinzu

Wählen Sie **Ribbon** aus, fügen Sie direkt darüber eine neue Ebene hinzu und nennen Sie sie **Ribbon shading**. Öffnen Sie das Menü und wählen Sie **Layer Settings → Clip to layer below**. Malen Sie nun mit **Watercolor Wash** die Schatten in den Biegungen des Bandes und setzen Sie mit **Paintbrush** ein paar Salbei-Akzente. Ihre Striche können über den Rand des Bandes hinausgehen, da nur der Teil innerhalb des Bandes sichtbar ist.

Belassen Sie den Mischmodus der Schattierungsebene vorerst bei **Normal**. Die Grundfarbe verbleibt sicher auf der Farbbandebene, sodass durch das Löschen der Schattierung niemals die darunter liegende Farbe gelöscht wird.

## 2. Kontrollieren Sie die Stärke

Die Deckkraft des Pinsels ändert die Striche, die Sie malen möchten. Der **opacity of the Ribbon shading layer** verändert alle Schattierungen, die Sie bereits gemalt haben. Wenn jeder Schatten zu stark aussieht, verringern Sie die Deckkraft der Ebene, anstatt neu zu malen.

Für Highlights fügen Sie **Ribbon texture** direkt über der Ribbon-Schattierung hinzu und schneiden Sie es ebenfalls ab. Für ein paar leichte Markierungen verwenden Sie einen kleinen Bleistift oder einen Strukturpinsel. Die Ebenenreihenfolge ist jetzt Bandtextur, Bandschattierung und dann Band. [Pinseleinstellungen](/de/docs/advanced/brush-engine/) erklärt Deckkraft und Fluss ausführlicher.

## 3. Fertig stellen und exportieren

Schattieren Sie **Disc** und **Block** auf die gleiche Weise, jede mit ihren eigenen beschnittenen Ebenen. Das Beispiel verwendet Airbrush für die sanfte Schattierung auf der Scheibe und Bleistift für kleine cremefarbene Schraffuren. Halten Sie **Line art** über allem. Wenn der äußere Rand einer Form repariert werden muss, malen Sie auf der Maske dieser Form. Wenn nur die Schattierung falsch ist, ändern Sie die Schattierungsebene. [Masken und Ausschnitt](/de/docs/layers/masks/) zeigt auch, wie man die Tinte mit Alpha-Lock neu einfärbt.

Wenn Sie damit zufrieden sind, blenden Sie die groben Ebenen aus, speichern Sie Ihre `.capy`-Datei und [exportieren Sie ein Bild](/de/docs/output/export/) zum Teilen. Öffnen Sie die exportierte Datei einmal, um zu überprüfen, ob sie Ihren Erwartungen entspricht.
