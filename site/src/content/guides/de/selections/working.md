---
title: "Mit Auswahlen arbeiten"
description: "Die Leinwandaktionsleiste und die Befehle, die eine Auswahl oder die Pixel darin ändern."
related: ["selections/tools", "selections/quick-mask", "selections/selection-layers", "layers/masks"]
---

Sie können eine Auswahl und die Pixel darin über das Menü **Auswahl** und über
die Auswahlleiste auf der Leinwand ändern.

## Die Leinwandaktionsleiste

Die Leinwandaktionsleiste ist eine Reihe von Schaltflächen auf der Leinwand mit
den nächsten Schritten für das, was Sie gerade bearbeiten.

| Die Leinwandaktionsleiste erscheint | Beschrieben in |
| --- | --- |
| Neben einer neuen Auswahl | Die Auswahlleiste, unten |
| Während Sie die Ecken einer Auswahl mit **Polygonlasso** setzen | [Auswahlwerkzeuge](/de/docs/selections/tools/) |
| In der Schnellmaske | [Schnellmaske](/de/docs/selections/quick-mask/) |
| Während Sie eine Auswahlebene bearbeiten | [Auswahlebenen](/de/docs/selections/selection-layers/) |
| Während Sie die Maske einer Ebene bearbeiten | [Masken](/de/docs/layers/masks/) |
| Während Sie Ebenen oder Pixel transformieren oder ein Bild platzieren | [Verschieben und Transformieren](/de/docs/transform/move-transform/) |
| Während Sie zuschneiden | [Zuschneiden](/de/docs/transform/crop/) |
| Wenn Sie eine Hilfslinie auswählen | [Lineale und Hilfslinien](/de/docs/drawing/ruler/) |
| Wenn Sie auf die Scheibe der Klonquelle klicken | [Klonen und Reparieren](/de/docs/retouch/clone-heal/) |
| Während Sie einen Messpunkt für Tonwertkorrektur, Kurven oder Weißabgleich wählen | [Filter hinzufügen und bearbeiten](/de/docs/filters/adding/) |

Die Leiste steht neben dem Objekt oder am unteren Rand der Leinwand. Von links
nach rechts enthält sie:

- Eine Beschriftung, etwa „Schnellmaske“ oder „Umriss transformieren“.
- Die Schaltflächen. Eine abgeblendete Schaltfläche ist nicht verfügbar; wählen Sie sie aus, um den Grund zu sehen.
- **Mehr** mit den Schaltflächen, die keinen Platz haben, danach das Menü **Auswahl** für eine Auswahl oder das Menü **Ebene** für eine Maske.
- Die Schaltfläche zum Abschließen, etwa **Anwenden** oder **Verlassen**.

Eine Leiste neben einem Objekt wird ausgeblendet, während Sie die Leinwand
berühren oder die Ansicht bewegen.

Um die Leinwandaktionsleiste auszublenden, führen Sie eine der folgenden
Aktionen aus:

- Wählen Sie **Ansicht > Leinwandaktionsleiste anzeigen**.
- Wählen Sie **Leinwandaktionsleiste anzeigen** ganz unten unter **Mehr**.

Jeder Arbeitsbereich speichert diese Einstellung für sich. Bei ausgeblendeter
Leiste zeigen Zuschnitte, Transformationen, platzierte Bilder und Polygone ihre
Schaltflächen zum Abschließen weiterhin am unteren Rand.

## Die Auswahlleiste

Die Auswahlleiste erscheint neben einer Auswahl, solange ein Auswahlwerkzeug
oder **Vorgang** aktiv ist. Bei anderen Werkzeugen erscheint sie neben einer
neuen Auswahl, aber nicht neben einer, die Rückgängig oder Wiederholen
zurückbringt. Pinsel, die Füllwerkzeuge, **Farbverlauf** und **Form** zeigen die
Leiste nie.

![Die Auswahlleiste unter einer rechteckigen Auswahl.](shot:selections/working-selection-bar)

- **Auswahl aufheben** und **Umkehren**: siehe Menü Auswahl unten.
- **Kopie belassen**: nur mit **Vorgang**, siehe [Verschieben und Transformieren](/de/docs/transform/move-transform/).
- **Auf Ebene kopieren**: **Auswahl auf neue Ebene kopieren** oder **Auswahl auf neue Ebene ausschneiden**.
- **Kopieren**: **Kopieren**, **Sichtbares kopieren** oder **Ausschneiden**, siehe [Kopieren und Einfügen](/de/docs/transform/clipboard/).
- **Transformieren**: transformiert die ausgewählten Pixel.
- **Verfeinern**: die Befehle zum Verfeinern und **Umriss transformieren**.
- **Maske**: maskiert die aktive Ebene auf die Auswahl.
- **Anpassen**: fügt einen Filter hinzu, der die Auswahl als Maske verwendet, siehe [Wie Filter wirken](/de/docs/filters/how-filters-apply/).
- **Füllen**: **Auswahl füllen**.
- **Leeren**: **Ausgewählte Pixel löschen** oder **Außerhalb der Auswahl löschen**.
- **Zuschneiden**: **Leinwand auf Auswahl zuschneiden**, siehe [Zuschneiden](/de/docs/transform/crop/).
- **Schnellmaske**: siehe [Schnellmaske](/de/docs/selections/quick-mask/).
- **Speichern**: **Als Auswahlebene speichern**, siehe [Auswahlebenen](/de/docs/selections/selection-layers/).

## Menü Auswahl

Sie können das Menü **Auswahl** auch über **Mehr** in der Auswahlleiste öffnen
und über **Auswahl** unter den Einstellungen eines Auswahlwerkzeugs im
Bedienfeld Werkzeug.

| Befehl | Wirkung | Taste |
| --- | --- | --- |
| **Alle Pixel auswählen** | Wählt die ganze Leinwand aus | **Strg+A** |
| **Pixelauswahl aufheben** | Entfernt die Auswahl und beendet die Schnellmaske oder die Bearbeitung einer Auswahlebene | **Strg+D** |
| **Erneut auswählen** | Stellt die Auswahl wieder her, die die letzte Änderung entfernt hat | **Strg+Umschalt+D** |
| **Auswahl umkehren** | Wählt alles außerhalb der Auswahl aus | **Strg+Umschalt+I** |
| **Auswahlumriss anzeigen** | Blendet den Auswahlumriss ein oder aus | |

**Erneut auswählen** ist nur verfügbar, solange nichts ausgewählt ist.

Wenn Sie den Auswahlumriss ausblenden, bleibt die Auswahl erhalten.
**Auswahlumriss anzeigen** steht auch im Menü Ansicht.

![Das Menü Auswahl.](shot:selections/working-select-menu)

## Auswahl verfeinern

Sie können eine Auswahl mit Live-Vorschau vergrößern, verkleinern, weichzeichnen,
in einen Rand umwandeln oder glätten.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Auswahl vergrößern…**, **Auswahl verkleinern…**, **Auswahlkante weichzeichnen…**, **Auswahlrand…** oder **Auswahl glätten…**.
- Wählen Sie in der Auswahlleiste **Verfeinern** aus und wählen Sie **Erweitern…**, **Verkleinern…**, **Weiche Kante…**, **Rand…** oder **Glätten…**.

Am unteren Rand der Leinwand öffnet sich ein Feld mit einem Wert. Um das
Ergebnis zu übernehmen, wählen Sie **Anwenden** aus oder drücken Sie
**Eingabe**. **Abbrechen** und **Escape** stellen die vorherige Auswahl wieder
her.

| Befehl | Wert | Bereich | Standard |
| --- | --- | --- | --- |
| **Auswahl vergrößern…** | **Grow by** | 1–128 px | 5 px |
| **Auswahl verkleinern…** | **Shrink by** | 1–128 px | 5 px |
| **Auswahlkante weichzeichnen…** | **Feather radius** | 0.1–100 px | 5 px |
| **Auswahlrand…** | **Border width** | 1–128 px | 5 px |
| **Auswahl glätten…** | **Smooth radius** | 1–64 px | 5 px |

**Auswahlrand…** ersetzt die Auswahl durch ein Band entlang ihrer Kante. Glätten
füllt Kerben und entfernt Spitzen, die schmaler als der doppelte Radius sind,
verschiebt aber keine Kanten, die auf dem Leinwandrand liegen. Vergrößern und
Verkleinern lassen weiche Kanten weich.

In der Schnellmaske ändern diese Befehle die Maske.

![Das Menü Verfeinern in der Auswahlleiste.](shot:selections/working-refine-menu)

## Auswahlumriss transformieren

Sie können den Auswahlumriss verschieben, skalieren, drehen, scheren oder
spiegeln, ohne Pixel zu bewegen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Auswahlumriss transformieren**.
- Wählen Sie in der Auswahlleiste **Verfeinern > Umriss transformieren** aus.

Der Transformationsrahmen erscheint mit einer Leinwandaktionsleiste mit der
Beschriftung „Umriss transformieren“. Er funktioniert wie
[Transformieren](/de/docs/transform/move-transform/), nur sind **Verzerren**,
**Verformen** und **Interpolation** nicht verfügbar.

## Füllen und Löschen

- **Auswahl füllen** füllt die ausgewählten Pixel der aktiven Malebene mit der aktuellen Farbe, mit der Deckkraft des Pinsels.
- **Ausgewählte Pixel löschen** löscht die ausgewählten Pixel der aktiven Ebene. Weiche Kanten werden teilweise gelöscht.
- **Außerhalb der Auswahl löschen** löscht die Pixel außerhalb der Auswahl.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie den Befehl im Menü **Bearbeiten**. Die Befehle zum Löschen stehen auch im Menü **Auswahl**.
- Drücken Sie **Umschalt+Rücktaste** zum Füllen oder **Löschen** bzw. **Rücktaste**, um die ausgewählten Pixel zu löschen.
- Wählen Sie in der Auswahlleiste **Füllen** oder **Leeren** und einen Befehl aus.
- Wählen Sie im Arbeitsbereich Malen in der Werkzeugleiste Befehle **Auswahl füllen** aus.
- Öffnen Sie das Menü der Ebene und wählen Sie **Pixelauswahl > Auswahl füllen**.

In der Schnellmaske, auf einer Maske oder auf einer Ebene mit aktiviertem
**Alphaschutz** können Sie keine Pixel löschen.

## Auf eine neue Ebene kopieren

**Auswahl auf neue Ebene kopieren** kopiert die ausgewählten Pixel der aktiven
Malebene an Ort und Stelle auf eine neue Ebene direkt darüber.
**Auswahl auf neue Ebene ausschneiden** löscht sie außerdem auf der
ursprünglichen Ebene.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Auswahl auf neue Ebene kopieren** oder **Auswahl > Auswahl auf neue Ebene ausschneiden**.
- Drücken Sie **Strg+J** zum Kopieren oder **Strg+Umschalt+J** zum Ausschneiden.
- Wählen Sie in der Auswahlleiste **Auf Ebene kopieren** aus und wählen Sie einen Befehl.

Die neue Ebene wird nach dem Original benannt, zum Beispiel *Ribbon Kopie*, und
behält dessen Deckkraft, Sichtbarkeit und Verrechnungsmodus. Die Auswahl ist
entfernt, bis Sie **Erneut auswählen** wählen.

Ohne Auswahl dupliziert **Auswahl auf neue Ebene kopieren** die ausgewählten
Ebenen.

## Ebene auf die Auswahl maskieren

Sie können der aktiven Ebene eine Maske hinzufügen, die nur die Auswahl zeigt.

Führen Sie eine der folgenden Aktionen aus:

- Öffnen Sie das Menü der Ebene und wählen Sie **Maske > Maske: Auswahl zeigen** oder **Maske > Maske: Auswahl verbergen**, um den ausgewählten Bereich zu verbergen.
- Wählen Sie in der Auswahlleiste **Maske** aus.

Hat die Ebene bereits eine Maske, ersetzt die Auswahl die vorhandene Maske. Die
Auswahl wird entfernt, und die Maske öffnet sich zum Bearbeiten (siehe
[Masken](/de/docs/layers/masks/)).

## Auswahlen aus Ebenen

Sie können die Farbe einer Ebene, ihre Maske oder eine Auswahlebene als Auswahl
laden.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie bei einer Malebene einen Eintrag unter **Auswahl > Aus Ebenendeckkraft**: **Ebenendeckkraft auswählen**, **Deckkraft zur Auswahl hinzufügen**, **Deckkraft von Auswahl abziehen** oder **Mit Ebenendeckkraft schneiden**.
- Wählen Sie bei einer Ebene mit Maske einen Eintrag unter **Auswahl > Aus Ebenenmaske**: **Maske als Auswahl laden**, **Maske zur Auswahl hinzufügen**, **Maske von Auswahl abziehen** oder **Mit Maske schneiden**.
- Öffnen Sie das Menü der Ebene und wählen Sie dieselben Einträge unter **Pixelauswahl**.
- Halten Sie **Strg** gedrückt und klicken Sie im Bedienfeld Ebenen auf die Miniatur der Ebene. Halten Sie zusätzlich **Umschalt** gedrückt, um hinzuzufügen, **Alt**, um abzuziehen, oder **Umschalt+Alt**, um die Schnittmenge zu bilden.

**Auswahl > Auswahl laden** lädt [Auswahlebenen](/de/docs/selections/selection-layers/).
