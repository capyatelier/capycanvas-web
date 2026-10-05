---
title: "Auswahlebenen"
description: "Auswahlen als Auswahlebenen im Bedienfeld Ebenen aufbewahren und wieder laden."
related: ["selections/working", "selections/quick-mask", "layers/types", "layers/panel"]
---

Sie können eine Auswahl als Ebene im Bedienfeld Ebenen aufbewahren und später
wieder laden.

## Auswahl speichern

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Als Auswahlebene speichern**.
- Wählen Sie in der Auswahlleiste oder in der Leiste der Schnellmaske **Speichern** aus.
- Wählen Sie in der Schnellmaske **Ebene > Als Auswahlebene speichern**.

Die neue Ebene kommt ganz oben in die Ebenenliste und heißt *Auswahl* mit einer
Nummer. Sie öffnet sich zum Bearbeiten, und ihr Name ist zur Eingabe bereit.
Beim Speichern aus der Schnellmaske bleiben auch Farbe und Deckkraft der
Überlagerung der Schnellmaske erhalten.

Um in eine Gruppe zu speichern, öffnen Sie das Menü der Gruppe und wählen Sie
**Aktuelle Auswahl in Gruppe speichern…**.

## Neue Auswahlebene

Sie können eine Auswahlebene leer beginnen und die Auswahl malen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Neue Auswahlebene**.
- Wählen Sie unten im Bedienfeld Ebenen **Neue Auswahlebene** aus.
- Öffnen Sie das Menü einer Gruppe und wählen Sie **Neue Auswahlebene in Gruppe…**.

## Zeilen von Auswahlebenen

Die Zeile einer Auswahlebene hat eine Miniatur der Auswahl, eine
Augenschaltfläche, die ihre Überlagerung ein- oder ausblendet, und neben der
Miniatur eine Ladeschaltfläche.

Wenn Sie die Zeile auswählen, öffnet sich die Ebene zum Bearbeiten.
Auswahlebenen haben keine Deckkraft, keinen Verrechnungsmodus und keine Maske,
und Sie können sie nicht vereinen und außerhalb der Bearbeitung nicht auf ihnen
malen.

![Die Zeile einer Auswahlebene im Bedienfeld Ebenen mit ihrer Ladeschaltfläche neben der Miniatur.](shot:selections/selection-layer-row)

## Auswahlebene bearbeiten

Während Sie eine Auswahlebene bearbeiten, ändern Pinsel, **Füllung** und
**Farbverlauf** die gespeicherte Auswahl, wie in der
[Schnellmaske](/de/docs/selections/quick-mask/). Das Bedienfeld Eigenschaften
zeigt **Überlagerungsfarbe** und **Überlagerungsdeckkraft** der Ebene sowie den
gemeinsamen **Modus**.

Die [Leinwandaktionsleiste](/de/docs/selections/working/) am unteren Rand der
Leinwand trägt als Beschriftung den Namen der Ebene und „wird bearbeitet“.
Ist die Leinwandaktionsleiste ausgeblendet, erscheint diese Leiste nicht.

- **Laden** macht die Ebene zur aktuellen Auswahl und kehrt zur Zeichnung zurück.
- **Umkehren** kehrt die gespeicherte Auswahl um und lässt die Ebene zum Bearbeiten geöffnet.
- **Zur Zeichnung zurückkehren** beendet die Bearbeitung. **Escape** bewirkt dasselbe.

Nach der Bearbeitung wird die zuvor bearbeitete Ebene wieder aktiv oder, falls
es keine gab, die oberste Malebene.

Um die gespeicherte Auswahl zu verfeinern, öffnen Sie das Menü der Auswahlebene
und wählen Sie unter **Ändern**. **Auswahl > Auswahl vergrößern…** und die
anderen Befehle zum Verfeinern im Menü **Auswahl** kehren zuerst zur Zeichnung
zurück und ändern die aktuelle Auswahl.

![Die Leinwandaktionsleiste für eine bearbeitete Auswahlebene mit Laden, Umkehren und Zur Zeichnung zurückkehren.](shot:selections/selection-layer-bar)

## Auswahlebene laden

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Auswahl laden**, wählen Sie die Ebene und dann **Auswahl laden**, **Zur Auswahl hinzufügen**, **Von Auswahl abziehen**, **Mit Auswahl schneiden** oder **Umgekehrte Auswahl laden**.
- Wählen Sie in der Zeile der Ebene die Ladeschaltfläche aus.
- Halten Sie **Strg** gedrückt und klicken Sie auf die Miniatur der Ebene. Halten Sie zusätzlich **Umschalt** gedrückt, um hinzuzufügen, **Alt**, um abzuziehen, oder **Umschalt+Alt**, um die Schnittmenge zu bilden.
- Wählen Sie, während Sie die Ebene bearbeiten, in der Leinwandaktionsleiste **Laden** aus.

Beim Laden kehrt die App zuerst zur Zeichnung zurück. Die Auswahlebene bleibt
unverändert. Ebenen in Gruppen stehen unter **Auswahl laden** mit ihrem
Gruppenpfad, etwa *Gruppe 1 / Auswahl 1*.

## Auswahlebene ersetzen

Um die aktuelle Auswahl in einer vorhandenen Auswahlebene zu speichern, wählen
Sie **Auswahl > Auswahlebene durch aktuelle Auswahl ersetzen** und wählen Sie
die Ebene. Eine gesperrte Auswahlebene können Sie nicht ersetzen.

## Menü der Auswahlebene

Klicken Sie mit der rechten Maustaste auf die Zeile einer Auswahlebene oder
halten Sie sie gedrückt, um ihr Menü zu öffnen.

- **Auswahl laden**: dieselben fünf Einträge wie im Menü Auswahl.
- **Ändern**: **Durch aktuelle Auswahl ersetzen**, **Umkehren**, **Alles auswählen**, **Leeren**, **Füllen**, **Erweitern…**, **Verkleinern…**, **Weiche Kante…**, **Rand…** und **Glätten…**.
- **Anordnen**: **Ausgewählte Ebenen gruppieren**, **Auf oberste Ebene verschieben**, **Nach oben verschieben**, **Nach unten verschieben** und **In Gruppe verschieben**.
- **Umbenennen…**, **Duplizieren**, **Löschen** und **Bearbeitung sperren**. Bei einer gesperrten Ebene lautet **Bearbeitung sperren** **Bearbeitung entsperren**.

**Ändern** ist bei einer gesperrten Auswahlebene nicht verfügbar. Sind mehrere
Ebenen ausgewählt, zeigt das Menü **Ausgewählte Ebenen duplizieren** und
**Ausgewählte Ebenen löschen**.
