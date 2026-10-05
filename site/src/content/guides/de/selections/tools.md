---
title: "Auswahlwerkzeuge"
description: "Die Auswahlwerkzeuge und ihre Einstellungen im Bedienfeld Werkzeug."
related: ["selections/working", "selections/tonal-range", "selections/quick-mask", "customize/toolbars"]
---

Mit den Auswahlwerkzeugen können Sie einen Teil einer Zeichnung auswählen. Die
Einstellungen eines Werkzeugs stehen im Bedienfeld Werkzeug, im Arbeitsbereich
Foto außerdem in der Leiste Werkzeugoptionen oben im Fenster.

| Werkzeug | Wählt aus | Taste |
| --- | --- | --- |
| **Rechteckauswahl** | Ein Rechteck, das Sie aufziehen | |
| **Ellipsenauswahl** | Eine Ellipse, die Sie aufziehen | |
| **Lassoauswahl** | Eine Form, die Sie freihändig zeichnen | **M** |
| **Polygonlasso** | Eine Form, die Sie Ecke für Ecke klicken | |
| **Automatisch auswählen** | Einen zusammenhängenden Bereich ähnlicher Farbe | **W** |
| **Nach Farbe auswählen** | Alle Pixel ähnlicher Farbe, zusammenhängend oder nicht | |
| **Auswahl malen** | Den Bereich, den Sie malen | |
| **Tonwertbereich** | Pixel in einem Helligkeitsband (siehe [Nach Helligkeit auswählen](/de/docs/selections/tonal-range/)) | |

## Auswahlwerkzeug wählen

Führen Sie eine der folgenden Aktionen aus:

- Geben Sie den Namen des Werkzeugs in die [Befehlssuche](/de/docs/start/command-search/) ein.
- Drücken Sie **M** für **Lassoauswahl** oder **W** für **Automatisch auswählen**.
- Wählen Sie im Arbeitsbereich Malen in der Werkzeugleiste Werkzeuge **Auswahl** oder **Automatisch auswählen / Nach Farbe auswählen** aus.
- Wählen Sie im Arbeitsbereich Foto in der Werkzeugleiste Werkzeuge **Rechteckauswahl / Ellipsenauswahl**, **Lassoauswahl / Polygonlasso**, **Automatisch auswählen / Nach Farbe auswählen** oder **Auswahl malen** aus.
- Wählen Sie im Arbeitsbereich Skizze in der Titelleiste **Auswahl** aus. Wählen Sie die Schaltfläche erneut aus, um neben dem Bedienfeld Werkzeug eine Schublade mit allen Auswahlwerkzeugen zu öffnen.

Eine Schaltfläche der Werkzeugleiste, die mehrere Werkzeuge enthält, zeigt das
zuletzt verwendete. Um ein anderes zu wählen, klicken Sie mit der rechten
Maustaste auf die Schaltfläche oder halten Sie sie gedrückt, oder wählen Sie das
Werkzeug im Bedienfeld **Werkzeugsatz** aus. **Auswahl** in der Titelleiste des
Arbeitsbereichs Skizze kehrt zum zuletzt verwendeten Auswahlwerkzeug zurück.

**Tonwertbereich** hat in den Werkzeugleisten der Arbeitsbereiche Malen und
Foto keine Schaltfläche.

Wenn Sie in der Schnellmaske oder beim Bearbeiten einer Auswahlebene ein
Auswahlwerkzeug wählen, bleibt dieser Modus aktiv.

![Die Schublade Auswahl im Arbeitsbereich Skizze, mit den Auswahlwerkzeugen neben dem Bedienfeld Werkzeug für Rechteckauswahl.](shot:selections/tools-sketch-select-drawer)

## Modus

Sie können den nächsten ausgewählten Bereich mit der aktuellen Auswahl
kombinieren.

Wählen Sie in der Zeile **Modus** des Bedienfelds Werkzeug **Neue Auswahl**,
**Zur Auswahl hinzufügen**, **Von Auswahl abziehen** oder
**Mit Auswahl schneiden** aus. Standard ist **Neue Auswahl**.

Um den Modus für eine einzelne Auswahl zu ändern, halten Sie zu Beginn eine
Taste gedrückt:

- **Umschalt**: **Zur Auswahl hinzufügen**
- **Alt**: **Von Auswahl abziehen**
- **Umschalt+Alt**: **Mit Auswahl schneiden**
- **Strg**: **Neue Auswahl**

Solange Sie die Taste halten, zeigt die Zeile **Modus** den gewählten Modus.
**Auswahl malen** hat nur **Zur Auswahl hinzufügen** und
**Von Auswahl abziehen**.

## Kantenglättung und Radius der weichen Kante

**Kantenglättung** ist standardmäßig aktiviert. **Radius der weichen Kante**
macht den Rand jeder neuen Auswahl um bis zu 100 px weicher und beginnt bei 0.

**Auswahl malen** hat keine der beiden Einstellungen. **Tonwertbereich** hat
**Weiche Kante** und keine **Kantenglättung**.

## Rechteckauswahl und Ellipsenauswahl

Ziehen Sie von einer Ecke zur gegenüberliegenden Ecke. Halten Sie nach Beginn
des Ziehens **Umschalt** gedrückt für ein Quadrat oder einen Kreis oder **Alt**,
um von der Mitte aus zu zeichnen.

- **Festes Seitenverhältnis** hält die Auswahl im Verhältnis aus **Verhältnisbreite** und **Verhältnishöhe**, standardmäßig 1 : 1.
- **Feste Größe** zeichnet eine Auswahl mit der eingestellten **Breite** und **Höhe** in Pixeln. Standard ist 256 × 256.
- **Von der Mitte aus zeichnen** legt die Mitte der Auswahl dorthin, wo Sie das Ziehen beginnen.

Wenn Sie **Festes Seitenverhältnis** aktivieren, wird **Feste Größe**
deaktiviert und umgekehrt. Ein Klick ohne Ziehen lässt die Auswahl unverändert.

## Lassoauswahl

Zeichnen Sie um den Bereich herum. Wenn Sie den Stift abheben oder die Maustaste
loslassen, wird die geschlossene Form zur Auswahl.

## Polygonlasso

Klicken Sie auf jede Ecke der Form. Zum Abschließen führen Sie eine der
folgenden Aktionen aus:

- Klicken Sie erneut auf die erste Ecke.
- Drücken Sie **Eingabe**.
- Wählen Sie in der Leinwandaktionsleiste **Abschließen** oder im Bedienfeld Werkzeug **Auswahl abschließen** aus.

Ein Polygon braucht mindestens drei Ecken.

- Um die letzte Ecke zu entfernen, drücken Sie **Rücktaste** oder **Löschen**, oder wählen Sie in der Leinwandaktionsleiste **Punkt entfernen** oder im Bedienfeld Werkzeug **Letzten Punkt entfernen** aus.
- Um das Polygon abzubrechen, drücken Sie **Escape**, oder wählen Sie in der Leinwandaktionsleiste **Abbrechen** oder im Bedienfeld Werkzeug **Auswahl abbrechen** aus.
- Um die nächste Kante in 45°-Schritten einrasten zu lassen, halten Sie **Umschalt** gedrückt. Um jede Kante einrasten zu lassen, aktivieren Sie im Bedienfeld Werkzeug **Kanten auf 45° beschränken**.

Während Sie Ecken setzen, zeigt die
[Leinwandaktionsleiste](/de/docs/selections/working/) am unteren Rand der
Leinwand **Punkt entfernen**, **Abbrechen** und **Abschließen**.

![Die Leinwandaktionsleiste für ein Polygon mit Punkt entfernen, Abbrechen und Abschließen.](shot:selections/tools-polygon-bar)

## Automatisch auswählen und Nach Farbe auswählen

Klicken Sie auf eine Farbe auf der Leinwand. **Automatisch auswählen** nimmt den
zusammenhängenden Bereich um diesen Punkt, **Nach Farbe auswählen** nimmt
passende Pixel an beliebiger Stelle im Bild.

![Das Bedienfeld Werkzeug für Automatisch auswählen mit Modus, Kantenglättung, Quelle, Toleranz, den Einstellungen unter Kanten und Radius der weichen Kante.](shot:selections/tools-auto-select-settings)

### Quelle

Legt fest, wo die Werkzeuge nach Farben suchen: **Sichtbares Bild** (Standard),
**Bearbeitete Ebene** oder **Referenzebenen**, die mit
[Als Referenz verwenden](/de/docs/layers/settings/) markierten Ebenen.

### Toleranz

Legt fest, wie weit eine Farbe von der angeklickten Farbe abweichen darf und
trotzdem ausgewählt wird. Standard ist 10%.

### Lücken schließen

Schließt Lücken bis zu dieser Breite in den Kanten um den Bereich, von 0 bis
32 px. Nur **Automatisch auswählen**.

### Erweiterung

Vergrößert die Auswahl um bis zu 32 px oder verkleinert sie mit einem negativen
Wert.

### Kantenglättung

Glättet die treppenförmigen Kanten der Auswahl. Bei 0% folgen die Kanten ganzen
Pixeln. Ausgeblendet, solange der Schalter **Kantenglättung** deaktiviert ist.

**Automatisch auswählen** und **Nach Farbe auswählen** teilen sich eine
Einstellung **Quelle**. **Toleranz** und die Einstellungen unter **Kanten**
gelten auch für die [Füllwerkzeuge](/de/docs/drawing/fill/).

## Auswahl malen

Malen Sie mit einem runden Pinsel über den Bereich. Eine geschlossene Schleife,
die Sie malen, wird gefüllt.

- **Zur Auswahl hinzufügen** oder **Von Auswahl abziehen** legt fest, was der Pinsel tut.
- **Druck steuert Größe** ist standardmäßig deaktiviert.
- **Größe**, **Härte** und **Deckkraft** stellen den runden Pinsel ein.

Halten Sie beim Malen **Umschalt** gedrückt, um hinzuzufügen, oder **Alt**, um
das Gegenteil der aktuellen Einstellung zu tun. Das Radiererende eines Stifts
zieht ab. Ein abziehender Strich bewirkt nichts, solange keine Auswahl besteht.

## Die Schaltfläche Auswahl

**Auswahl** unter den Einstellungen eines Auswahlwerkzeugs im Bedienfeld
Werkzeug öffnet das [Menü Auswahl](/de/docs/selections/working/). Die
Einstellungen von **Tonwertbereich** haben keine Schaltfläche **Auswahl**.
