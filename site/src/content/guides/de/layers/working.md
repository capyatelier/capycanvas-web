---
title: "Mit Ebenen arbeiten"
description: "Ebenen im Bedienfeld Ebenen hinzufügen, anordnen und löschen."
related: ["layers/panel", "layers/types", "layers/merging", "files/open-save"]
---

## Ebenen erstellen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Neu** und dann **Neue Ebene**, **Neue beschnittene Ebene** oder **Neue Gruppe**.
- Wählen Sie unten im Bedienfeld Ebenen **Neue Ebene** oder **Neue Gruppe** aus.

Die neue Ebene wird direkt über der aktiven Ebene und den darauf beschnittenen
oder daran angehängten Ebenen eingefügt. Ist eine Gruppe aktiv, kommt die neue
Ebene ganz oben in die Gruppe. Einer gesperrten Gruppe können Sie keine Ebene
hinzufügen.

**Neue beschnittene Ebene** setzt eine aktive Malebene voraus oder eine aktive
Gruppe, die nicht auf Durchreichen gestellt ist.

## Ebenen auswählen

Sie können mehrere Zeilen auswählen, um sie gemeinsam zu gruppieren, zu
duplizieren, zu löschen oder zu verschieben.

- Wählen Sie eine Zeile aus, um nur diese Ebene auszuwählen und sie zur aktiven Ebene zu machen.
- Klicken Sie bei gedrückter Taste **Umschalt** auf eine Zeile, um die Zeilen zwischen ihr und der zuvor ausgewählten Zeile auszuwählen.
- Klicken Sie bei gedrückter Taste **Strg** auf eine Zeile, um sie der Auswahl hinzuzufügen oder daraus zu entfernen.
- Wählen Sie die Zeilenschaltfläche links neben der Miniatur aus, um die Zeile hinzuzufügen oder zu entfernen, ohne die aktive Ebene zu wechseln.
- Wählen Sie **Ebene > Ebenenzeilenauswahl > Alle Ebenenzeilen auswählen** oder **Ebenenzeilenauswahl aufheben**.

Wenn Sie eine bereits ausgewählte Zeile auswählen, bleiben die anderen Zeilen
ausgewählt. Änderungen an der Zeilenauswahl sind keine Rückgängig-Schritte.

## Ebenen ausblenden

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Sichtbarkeit > Ebene einblenden**.
- Wählen Sie das Auge in der Zeile aus.

**Ebene > Sichtbarkeit** enthält außerdem
**Ebene und übergeordnete Gruppen einblenden**,
**Ausgewählte Ebenen isolieren** und **Alle Ebenen einblenden**.

## Ebenen umbenennen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Anordnen > Ebene umbenennen…** (bei einer Gruppe **Gruppe umbenennen…**).
- Doppelklicken Sie auf den Namen.

![Eine Ebenenzeile, deren Name in einem Textfeld steht.](shot:layers/working-rename)

Drücken Sie **Eingabe**, um den Namen zu übernehmen, oder **Escape**, um
abzubrechen. Eine gesperrte Ebene können Sie nicht umbenennen.

## Ebenen neu anordnen

Ziehen Sie eine Zeile in der Liste nach oben oder unten. Mit einem Stift oder
Finger halten Sie die Zeile zuerst gedrückt oder ziehen am Griff am rechten Ende
der Zeile.

![Eine Zeile wird gezogen, eine Linie zwischen zwei Zeilen zeigt, wo sie landet.](shot:layers/working-drag)

Eine Linie über oder unter einer Zeile zeigt, wo die Ebene landet. Um die Ebene
in eine Gruppe zu verschieben, legen Sie sie auf der Mitte der Gruppenzeile ab
(um die Zeile erscheint ein Rahmen). Drücken Sie **Escape**, um das Ziehen
abzubrechen.

Alle ausgewählten Zeilen bewegen sich gemeinsam, und beschnittene Ebenen und
angehängte Filter bewegen sich mit ihrer Ebene. **Ebene anheben** und
**Ebene absenken** in der [Befehlssuche](/de/docs/start/command-search/)
verschieben die ausgewählten Zeilen um eine Position.

## Gruppieren und Gruppierung aufheben

Um Ebenen zu gruppieren, wählen Sie ihre Zeilen aus und wählen Sie
**Ebene > Anordnen > Ausgewählte Ebenen gruppieren**, oder wählen Sie unten im
Bedienfeld Ebenen **Neue Gruppe** aus.
Die Zeilen müssen in derselben Gruppe liegen, und eine Beschneidungsbasis muss
zusammen mit ihren beschnittenen Ebenen gruppiert werden.

Um eine Gruppierung aufzuheben, wählen Sie
**Ebene > Anordnen > Gruppierung aufheben**. Eine ausgeblendete Gruppe lässt
ihre Ebenen ausgeblendet. **Gruppierung aufheben** ist nicht verfügbar, solange
die Gruppe eine Maske, eine Deckkraft unter 100%, einen anderen
Verrechnungsmodus als Normal oder Durchreichen, eine Beschneidung oder
angehängte Filter hat, oder wenn ihre Ebenen ohne die Gruppe anders aussähen.

## Ebenen duplizieren

Wählen Sie **Ebene > Anordnen > Duplizieren** oder, wenn mehrere Zeilen
ausgewählt sind, **Ausgewählte Ebenen duplizieren**.

Die Kopien werden direkt über den Originalen eingefügt, mit ihren beschnittenen
Ebenen und angehängten Filtern, und heißen „*Name* Kopie“. Eine Ebene in einer
gesperrten Gruppe können Sie nicht duplizieren.

## Ebenen löschen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Ebene löschen** oder, wenn mehrere Zeilen ausgewählt sind, **Ausgewählte Ebenen löschen**.
- Wählen Sie unten im Bedienfeld Ebenen **Ausgewählte Ebenen löschen** aus.
- Wischen Sie mit einem Stift oder Finger die Zeile nach links und wählen Sie **Löschen** aus.

Bei einer zugeklappten Gruppe lautet der Menüeintrag
**Gruppe und Inhalt löschen**. Wenn Sie eine aufgeklappte Gruppe löschen,
bleiben ihre Ebenen erhalten, wie bei **Gruppierung aufheben**.

Beschnittene Ebenen und angehängte Filter bleiben erhalten, wenn Sie ihre Ebene
löschen. Eine gesperrte Ebene können Sie nicht löschen. Die Taste **Löschen**
leert ausgewählte Pixel, keine Ebenen.

## Auswahl auf neue Ebene kopieren

Sie können die ausgewählten Pixel einer Malebene an Ort und Stelle auf eine neue
Ebene kopieren oder verschieben.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Neu > Auswahl auf neue Ebene kopieren** (**Strg+J**) oder **Auswahl auf neue Ebene ausschneiden** (**Strg+Umschalt+J**).
- Wählen Sie dieselben Befehle im Menü **Auswahl**.
- Wählen Sie sie unter **Auf Ebene kopieren** in der [Auswahlleiste](/de/docs/selections/working/) auf der Leinwand.

Die neue Ebene wird über der Quellebene eingefügt, heißt „*Name* Kopie“ und hat
dieselbe Deckkraft und denselben Verrechnungsmodus. Die Auswahl wird aufgehoben,
und **Auswahl > Erneut auswählen** stellt sie wieder her.

Ohne Auswahl dupliziert **Auswahl auf neue Ebene kopieren** die ausgewählten
Ebenen. **Auswahl auf neue Ebene ausschneiden** setzt eine Auswahl voraus und
ist nicht verfügbar, solange **Alphaschutz** aktiviert ist.

## Bilder importieren

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Bild als Ebene importieren…** oder drücken Sie **Strg+Umschalt+O**.
- Wählen Sie unten im Bedienfeld Ebenen **Bild als Ebene importieren…** aus.
- Ziehen Sie Bilddateien auf die Leinwand oder auf eine Zeile im Bedienfeld Ebenen.

Jede Datei wird zu einer [Fotoebene](/de/docs/layers/types/) über der aktiven
Ebene oder über, unter oder in der Zeile, auf der Sie sie ablegen. Das Bild wird
zentriert und so verkleinert, dass es auf die Leinwand passt, mit
[Platzierungsgriffen](/de/docs/transform/move-transform/).
