---
title: "Lineale und Hilfslinien"
description: "Hilfslinien, die Pinselstriche auf gerade Linien festlegen, und das Ausrichten des Bildes an einer Hilfslinie."
related: ["drawing/figure", "transform/crop", "transform/move-transform", "drawing/brush-tools"]
---

Sie können Hilfslinien auf der Leinwand platzieren, die Pinselstriche auf gerade
Linien festlegen. Hilfslinien werden in der `.capy`-Datei gespeichert und erscheinen
nicht in exportierten Bildern.

## Werkzeug Lineal

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **Umschalt+U**.
- Wählen Sie im Arbeitsbereich Malen **Lineal** in der Werkzeugleiste Werkzeuge aus. Klicken Sie mit der rechten Maustaste auf die Schaltfläche oder halten Sie sie gedrückt, um **Gerade**, **Parallel** oder **Radial** zu wählen.
- Suchen Sie in der Befehlssuche nach **Lineal**.

Die Arbeitsbereiche Skizze und Foto haben keine Schaltfläche Lineal. Sie können eine mit **Werkzeuge
einfügen…** hinzufügen ([Werkzeugleisten und Titelleiste](/de/docs/customize/toolbars/)).

Ziehen Sie über einen leeren Teil der Leinwand, um eine Hilfslinie hinzuzufügen, oder
klicken Sie, um eine radiale Hilfslinie hinzuzufügen. Halten Sie beim Ziehen
**Umschalt** gedrückt, um eine gerade oder parallele Hilfslinie in 45°-Schritten zu
drehen.

Ziehen Sie einen Griff der Hilfslinie, um Winkel und Länge zu ändern, oder ziehen Sie
ihre Linie, um die ganze Hilfslinie zu verschieben.

- Drücken Sie **Escape**, um ein Ziehen abzubrechen.
- Hinzufügen, Verschieben und Löschen einer Hilfslinie sind Rückgängig-Schritte.
- Solange Hilfslinien ausgeblendet sind, fügt ein Ziehen eine neue Hilfslinie hinzu und blendet alle Hilfslinien wieder ein.
- Zuschneiden, Bildgröße, Leinwandgröße, Drehen und Spiegeln verschieben die Hilfslinien mit dem Bild.

## Arten von Hilfslinien

![Gerade, parallele und radiale Hilfslinien auf der Leinwand mit gestrichelten Linien, quadratischen Griffen und dem radialen Fadenkreuz.](shot:drawing/ruler-guides)

Gerade und parallele Hilfslinien sind gestrichelte Linien mit einem Quadrat an jedem
Griff. Eine radiale Hilfslinie ist ein Quadrat mit einem gestrichelten Fadenkreuz.
Eine ausgewählte Hilfslinie hat größere Griffe.

Nur Striche der Pinselwerkzeuge richten sich nach Hilfslinien.

### Gerade

Ein Strich, der innerhalb von 12 Bildschirmpixeln von der Linie der Hilfslinie beginnt,
folgt dieser Linie. Die Linie reicht über die ganze Leinwand.

### Parallel

Jeder Strich verläuft ab dem Punkt, an dem Sie ansetzen, parallel zur Hilfslinie.

### Radial

Striche zeigen auf die Mitte der Hilfslinie. Jeder folgt der Linie von der Mitte durch
den Punkt, an dem Sie ansetzen.

## Welcher Hilfslinie ein Strich folgt

Eine nahe gerade Hilfslinie hat Vorrang vor parallelen und radialen Hilfslinien.
Unter mehreren parallelen und radialen Hilfslinien gewinnt die, deren erster Griff
oder Mitte dem Anfang des Strichs am nächsten liegt.

## Hilfslinien anzeigen und einrasten

Sie können die Hilfslinien ausblenden oder das Einrasten deaktivieren.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ansicht > Lineale anzeigen** oder **Ansicht > An Linealen ausrichten**.
- Wählen Sie bei aktivem Werkzeug Lineal oder einer mit Vorgang ausgewählten Hilfslinie **Lineale anzeigen** oder **An Linealen ausrichten** im Bedienfeld **Werkzeug** aus.
- Wählen Sie **Hilfslinien** oder **Einrasten** in der Hilfslinienleiste aus.

Beides ist standardmäßig aktiviert. Solange Hilfslinien ausgeblendet sind, ist **An
Linealen ausrichten** nicht verfügbar.

## Eine Hilfslinie löschen

Wählen Sie die Hilfslinie aus, und führen Sie dann eine der folgenden Aktionen aus:

- Drücken Sie **Löschen** oder **Rücktaste**.
- Wählen Sie **Lineal löschen** im Bedienfeld **Werkzeug** aus.
- Wählen Sie **Löschen** in der Hilfslinienleiste aus.

**Löschen** und **Rücktaste** löschen eine Hilfslinie nur, wenn Lineal, Form, Vorgang,
Transformieren oder Zuschneiden das aktive Werkzeug ist. Bei anderen Werkzeugen führen
diese Tasten **Ausgewählte Pixel löschen** aus.

## Hilfslinienleiste

Wenn Sie eine Hilfslinie mit dem Werkzeug Lineal oder Vorgang auswählen, erscheint
unter ihren Griffen eine Leiste.

| Schaltfläche | Aktion |
| --- | --- |
| **Löschen** | Löscht die Hilfslinie. |
| **Einrasten** | Aktiviert oder deaktiviert **An Linealen ausrichten**. |
| **Hilfslinien** | Blendet alle Hilfslinien ein oder aus. Beim Ausblenden verschwindet auch die Leiste. |
| **Begradigen** | Startet **Bild an Hilfslinie ausrichten**. Nur bei einer geraden Hilfslinie. |

Wenn Sie **Ansicht > Leinwandaktionsleiste anzeigen** deaktivieren, entfällt die
Hilfslinienleiste.

![Die Hilfslinienleiste unter einer ausgewählten geraden Hilfslinie mit Löschen, Einrasten, Hilfslinien und Begradigen.](shot:drawing/ruler-guide-bar)

## Hilfslinien mit Vorgang verschieben

Ziehen Sie mit dem Werkzeug [Vorgang](/de/docs/transform/move-transform/) einen Griff
oder die Linie einer Hilfslinie, um die Hilfslinie statt der Ebene zu verschieben.
Vorgang fügt nie Hilfslinien hinzu.

## Bild an Hilfslinie ausrichten

Sie können das Bild an einer geraden Hilfslinie gerade ausrichten.

Wählen Sie eine gerade Hilfslinie aus, und führen Sie dann eine der folgenden Aktionen aus:

- Wählen Sie **Begradigen** in der Hilfslinienleiste aus.
- Suchen Sie in der Befehlssuche nach **Bild an Hilfslinie ausrichten**.

Das Werkzeug Zuschneiden öffnet sich mit einem Rahmen, der so gedreht ist, dass die
Hilfslinie waagerecht oder senkrecht steht, je nachdem, was näher liegt. Wenden Sie den
Zuschnitt an, um das Bild zu drehen ([Zuschneiden](/de/docs/transform/crop/)).
