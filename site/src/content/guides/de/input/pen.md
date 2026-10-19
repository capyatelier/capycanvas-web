---
title: "Stift"
description: "Die Stifteinstellungen in den Voreinstellungen sowie Doppeltippen und Drücken mit dem Apple Pencil."
related: ["input/pen-pressure", "input/touch", "input/keyboard", "preferences", "brushes/basics"]
---

Die Stifteinstellungen befinden sich auf der Seite **Stift und Eingabe** unter **Bearbeiten > Einstellungen**.

![Die Seite Stift und Eingabe der Einstellungen.](shot:pen/pen-and-input)

## Stiftdruck

Wählen Sie **Anpassen…** neben **Stiftdruck**, um die Druckkurve zu formen und auf der aktuellen Leinwand zu testen. Die Kurve gilt für alle druckempfindlichen Pinsel und Werkzeuge; bereits gezeichnete Striche ändern sich nicht. Siehe [Stiftdruck](/de/docs/input/pen-pressure/).

## Strichvorhersage

Die Strichvorhersage zeichnet ein kurzes Stück des Strichs vor der Stiftspitze, und
der echte Strich ersetzt es beim Zeichnen. Die Einstellungen stehen unter
**Stiftreaktion**:

- **Strichvorhersage aktivieren** schaltet beide Arten der Vorhersage ein oder aus.
- **Strichvorhersage von *System* verwenden**, zum Beispiel **Strichvorhersage von Windows verwenden**, nutzt die Vorhersage des Systems oder des Browsers.
- **Vorhersagestärke** legt fest, wie weit {appName} selbst vorausberechnet, von 0 bis 64 ms.

Beide Schalter sind standardmäßig aktiviert, und **Vorhersagestärke** beträgt 16 ms.
Solange **Strichvorhersage aktivieren** deaktiviert ist, sind die beiden anderen
Einstellungen nicht verfügbar.

| System | Vorhersage des Systems |
| --- | --- |
| iPad | Verfügbar |
| Windows | Verfügbar, wenn Windows sie anbietet |
| Android | Android 14 und neuer, mit einem vom System unterstützten Eingabestift |
| Web | In Browsern, die sie anbieten |
| macOS, Linux | Nie verfügbar |

Wo die Vorhersage des Systems nicht verfügbar ist, ist ihr Schalter nicht verfügbar,
und **Vorhersagestärke** legt die Vorhersage fest. Solange die Vorhersage des Systems
verwendet wird, ist **Vorhersagestärke** nicht verfügbar (auf dem iPad ausgeblendet).

Der Cursor folgt dem Stift, nicht dem vorhergesagten Strich.

![Die Einstellungen unter Stiftreaktion.](shot:pen/prediction)

## Cursorform

Mit **Cursorform** unter **Zeiger** können Sie den Zeiger wählen, der über der
Leinwand erscheint.

| Option | Zeigt |
| --- | --- |
| **Pinselgröße** | Den Umriss der Pinselspitze in ihrer Größe, Form und Drehung (Standard) |
| **Kreuz**, **Dreieck** | Ein Kreuz oder ein kleines Dreieck |
| **Punkt** | Ein winziges Kreuz |
| **Ein-Pixel-Punkt** | Ein Pixel des Bildschirms |
| **Fadenkreuz** | Ein Kreuz mit einem Punkt in der Mitte |
| **Werkzeug** | Das Symbol des Werkzeugs, mit seinem Arbeitspunkt am Zeiger |
| **Werkzeug und Pinselgröße**, **Pinselgröße und Kreuz**, **Pinselgröße und Punkt**, **Pinselgröße und Ein-Pixel-Punkt** | Den Pinselumriss zusammen mit der anderen Markierung |
| **Keine** | Nichts bei einem Stift auf einem Display. Eine Maus, ein Trackpad oder ein Tablett ohne Bildschirm zeigt **Fadenkreuz**. |

Die Form gilt für Malwerkzeuge und **Auswahl malen**. Andere Werkzeuge zeigen ihr
Symbol, wenn die Form **Werkzeug** enthält, und sonst ein Kreuz.

![Die Liste Cursorform.](shot:pen/cursor-shapes)

## Cursor beim Malen ausblenden

Ist **Cursor beim Malen ausblenden** aktiviert (Standard), verschwindet der Cursor,
solange der Stift die Leinwand berührt oder die Maustaste mit einem Malwerkzeug
gedrückt ist. Beim Radieren bleibt der Pinselumriss sichtbar.

## Radiererende

Sie können festlegen, was das Radiererende Ihres Stifts tut. Die Gruppe
**Radiererende** wird auf dem iPad nicht angezeigt.

- **Werkzeug**: **Aktuelles Werkzeug** (Standard) behält das verwendete Werkzeug bei. **Radierer**, **Feder**, **Bleistift**, **Malpinsel**, **Airbrush** und **Mischen** wechseln zu diesem Werkzeug, solange Sie das Radiererende verwenden, und danach kehrt das vorherige Werkzeug zurück.
- **Mit Transparenz malen**: Wenn aktiviert (Standard), radiert das Radiererende mit dem Pinsel des Werkzeugs. Wenn deaktiviert, malt das Radiererende. Dieser Schalter ist ausgeblendet, solange **Werkzeug** auf **Radierer** steht.

## Stifttasten

Sie können jeder Seitentaste Ihres Stifts eine Aktion zuweisen, und zwar für jede Art
von Werkzeug eine andere.

So belegen Sie eine Stifttaste:

1. Wählen Sie die Taste unter **Stifttasten** aus.
2. Wählen Sie **Aktion** aus, oder deaktivieren Sie **Für alle Werkzeuge gleich** und wählen Sie eine Art von Werkzeug aus, etwa **Werkzeuge Zeichnen**.
3. Wählen Sie eine Aktion. **Nichts** hebt die Belegung auf.

Werkzeuge, Pinsel und Modi wie **Ansicht verschieben** oder **Farbe aufnehmen** gelten,
solange Sie die Taste gedrückt halten. Andere Aktionen werden einmal ausgeführt. Ein
Druck während eines Strichs wirkt nach dem Strich.

Alle Tasten beginnen mit **Nichts**. Eine Taste mit **Nichts** behält die Aktion, die
Ihr Tablett-Treiber oder System ihr zuweist.

| System | Aufgeführte Tasten |
| --- | --- |
| Linux | **Untere Seitentaste**, **Obere Seitentaste**, **Dritte Seitentaste** |
| Windows | **Untere Seitentaste** |
| macOS, Android, Web | **Untere Seitentaste**, **Obere Seitentaste** |
| iPad | Keine |

Unter Linux und Android werden die Tasten am Pad eines Tabletts auf der Seite
[Tastenkürzel](/de/docs/input/keyboard/) als Tasten belegt.

![Die Seite der Unteren Seitentaste mit einer Aktion für jede Art von Werkzeug.](shot:pen/pen-button-page)

## Doppeltippen und Drücken beim Apple Pencil

Auf dem iPad folgen Doppeltippen auf den Apple Pencil und Drücken eines Apple Pencil
Pro der eigenen Einstellung des iPad unter **Einstellungen > Apple Pencil**.

- „Switch between current tool and eraser“ wechselt zum **Radierer** und zurück.
- „Switch between current tool and last used“ wechselt zu dem Werkzeug, das Sie davor gewählt haben.

Die anderen Optionen bewirken in {appName} nichts. Drücken wirkt beim Loslassen.
Wenn der Apple Pencil über dem Bildschirm schwebt, erscheint der Cursor.
