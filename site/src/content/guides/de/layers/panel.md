---
title: "Bedienfeld Ebenen"
description: "Was jeder Teil des Bedienfelds Ebenen zeigt und bewirkt, einschließlich des Ebenenmenüs."
related: ["layers/working", "layers/settings", "layers/types", "layers/masks"]
---

Das Bedienfeld **Ebenen** listet die Ebenen der Zeichnung auf, die vorderste
Ebene steht oben. Der Kopfbereich zeigt die Einstellungen der aktiven Ebene.

![Das Bedienfeld Ebenen mit den Ebenen der fertigen Illustration.](shot:layers/panel "1 Kopfbereich · 2 Ebenenzeilen · 3 Schaltflächen am unteren Rand")

## Bedienfeld Ebenen öffnen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Ebenen**.
- Wählen Sie im Arbeitsbereich Malen in der rechten Spalte **Ebenen** aus.
- Wählen Sie im Arbeitsbereich Skizze in der Titelleiste **Bedienfeld Ebenen** aus.
- Geben Sie „Bedienfeld Ebenen“ in die [Befehlssuche](/de/docs/start/command-search/) ein.

Im Arbeitsbereich Foto ist das Bedienfeld in der rechten Spalte geöffnet.

## Kopfbereich

![Der Kopfbereich des Bedienfelds Ebenen für Ribbon shading, mit aktiviertem Auf die Ebene darunter beschneiden.](shot:layers/panel-header "1 Ebenenverrechnungsmodus · 2 Ebenendeckkraft · 3 Alphaschutz · 4 Bearbeitung sperren · 5 Auf die Ebene darunter beschneiden · 6 Ausgewählte Ebenen als Referenzen verwenden")

1. **Ebenenverrechnungsmodus** zeigt den aktuellen Modus und öffnet das [Menü der Verrechnungsmodi](/de/docs/layers/blend-modes/).
2. **Ebenendeckkraft**, von 0 bis 100. Ziehen Sie den Regler oder geben Sie einen Wert ein.
3. **Alphaschutz**.
4. **Bearbeitung sperren**.
5. **Auf die Ebene darunter beschneiden**. Bei einem Filter lautet die Schaltfläche **Auf *Ebene* anwenden** oder **Auf die Ebenen darunter anwenden** (siehe [Wie Filter wirken](/de/docs/filters/how-filters-apply/)).
6. **Ausgewählte Ebenen als Referenzen verwenden**. Die Schaltfläche lautet **Diese Ebene nicht mehr als Referenz verwenden**, wenn die aktive Ebene die einzige ausgewählte Zeile und bereits eine Referenz ist.

Ein hervorgehobener Schalter ist aktiviert (siehe [Ebeneneinstellungen](/de/docs/layers/settings/)).
**Ebenenverrechnungsmodus** und **Ebenendeckkraft** sind bei Auswahlebenen und
gesperrten Ebenen nicht verfügbar.

## Ebenenzeilen

![Die Zeile Ribbon mit ihrer Maske, aktiviertem Alphaschutz und einer Deckkraft von 80%.](shot:layers/panel-row "1 Auge · 2 Zeilenschaltfläche · 3 Miniatur · 4 Maskenverknüpfung · 5 Maskenminiatur · 6 Name und Untertitel · 7 Schloss · 8 Griff")

Ebenen in einer Gruppe stehen eingerückt unter der Gruppe.

1. Das Auge blendet die Ebene aus oder ein.
2. Die Zeilenschaltfläche nimmt die Zeile in die Auswahl auf oder entfernt sie daraus, ohne die aktive Ebene zu wechseln. Sie zeigt einen Pinsel auf der Ebene, die die Farbe erhält, einen Leuchtturm auf einer Referenzebene und ein Häkchen auf anderen ausgewählten Zeilen.
3. Wählen Sie die Miniatur aus, um auf den Pixeln der Ebene zu malen. Bei einer Gruppe klappt sie die Gruppe auf oder zu.
4. Bei einer Ebene mit Maske legt die Verknüpfungsschaltfläche fest, ob sich die Maske mit der Ebene bewegt (**Maske von Ebene lösen**, **Maske mit Ebene verknüpfen**).
5. Wählen Sie die Maskenminiatur aus, um auf der [Maske](/de/docs/layers/masks/) zu malen.
6. Der Untertitel unter dem Namen zeigt Farbmodus, Verrechnungsmodus und Deckkraft, wenn diese nicht Vollfarbe, Normal und 100% sind, zum Beispiel „Multiplizieren · 60%“.
7. Ein Schlosssymbol kennzeichnet eine gesperrte Ebene, ein Alphaschutzsymbol eine Ebene mit aktiviertem **Alphaschutz**.
8. Ziehen Sie am Griff, um [die Ebene zu verschieben](/de/docs/layers/working/).

Wählen Sie eine Zeile aus, um sie zur aktiven Ebene und zur einzigen
ausgewählten Zeile zu machen. [Ebenentypen](/de/docs/layers/types/) zeigt die
Miniatur jedes Typs.

Klicken Sie bei gedrückter Taste **Strg** auf die Miniatur einer Malebene, um
ihre Deckkraft als Auswahl zu laden, oder auf die Maskenminiatur, um die Maske
zu laden. Halten Sie zusätzlich **Umschalt** gedrückt, um zur Auswahl
hinzuzufügen, **Alt**, um von ihr abzuziehen, oder **Umschalt+Alt**, um die
Schnittmenge mit ihr zu bilden.

## Kennzeichen in den Zeilen

- Ein Rahmen um die Miniatur oder die Maskenminiatur zeigt, worauf Pinsel malen.
- Eine Schiene links neben den Miniaturen verbindet [beschnittene Ebenen](/de/docs/layers/settings/) mit ihrer Basis.
- Ein Kettenglied zwischen zwei Miniaturen verbindet einen [angehängten Filter](/de/docs/filters/how-filters-apply/) mit der Zeile darunter.
- Ein blasses, durchgestrichenes Auge kennzeichnet eine Ebene, die eingeblendet ist, aber von ihrer Gruppe verborgen wird, oder einen angehängten Filter, dessen Ebene ausgeblendet ist.
- Eine blasse Maskenminiatur kennzeichnet eine deaktivierte Maske.
- Solange die [Schnellmaske](/de/docs/selections/quick-mask/) aktiv ist, erscheint oben eine Zeile **Schnellmaske**.

## Schaltflächen am unteren Rand

![Die Schaltflächen am unteren Rand des Bedienfelds Ebenen.](shot:layers/panel-footer "1 Neue Ebene · 2 Neue Gruppe · 3 Neue Auswahlebene · 4 Maske hinzufügen · 5 Filter hinzufügen · 6 Bild als Ebene importieren… · 7 Ausgewählte Ebenen löschen · 8 Ebenenaktionen")

1. **Neue Ebene** fügt eine Malebene hinzu.
2. **Neue Gruppe**. Sind mehrere Zeilen ausgewählt, werden sie gruppiert.
3. **Neue Auswahlebene** (siehe [Auswahlebenen](/de/docs/selections/selection-layers/)).
4. **Maske hinzufügen**.
5. **Filter hinzufügen** hängt einen Filter an die aktive Ebene an.
6. **Bild als Ebene importieren…**
7. **Ausgewählte Ebenen löschen**.
8. **Ebenenaktionen** öffnet das Ebenenmenü der aktiven Ebene.

Eine Schaltfläche ist nicht verfügbar, wenn ihre Aktion nicht auf die aktive
Ebene anwendbar ist, zum Beispiel **Maske hinzufügen** bei einer gesperrten
Ebene (siehe [Mit Ebenen arbeiten](/de/docs/layers/working/)).

## Wischen und Gedrückthalten

Mit einem Stift oder einem Finger:

- Wischen Sie eine Zeile nach links, um an ihrem rechten Ende **Löschen** anzuzeigen. Wählen Sie **Löschen** aus, um die Ebene zu löschen, oder wischen Sie nach rechts, um die Schaltfläche wieder auszublenden.
- Wischen Sie eine Malebene nach rechts, um **Alphaschutz** zu aktivieren oder zu deaktivieren.
- Wischen Sie eine Gruppe nach rechts, um **Durchreichen** zu aktivieren oder zu deaktivieren.
- Halten Sie eine Zeile gedrückt, um ihr Ebenenmenü zu öffnen. Bewegen Sie den Stift oder Finger, ohne abzusetzen, um die Zeile stattdessen zu ziehen.

![Eine nach links gewischte Zeile mit Löschen an ihrem rechten Ende.](shot:layers/panel-swipe-delete)

Ein kurzes Wischen ändert nichts. Wischen funktioniert nicht mit der Maus, nicht
auf dem Griff und nicht bei gesperrten Ebenen.

## Ebenenmenü

Sie können für jede Ebene ein Menü mit Befehlen öffnen.

Führen Sie eine der folgenden Aktionen aus:

- Öffnen Sie das Menü **Ebene**. Es enthält das Menü der aktiven Ebene, ohne **Filter hinzufügen**.
- Klicken Sie mit der rechten Maustaste auf eine Zeile, oder halten Sie sie mit einem Stift oder Finger gedrückt.
- Wählen Sie unten im Bedienfeld **Ebenenaktionen** aus.
- Drücken Sie bei fokussierter Zeile **Umschalt+F10** oder die Menütaste.

![Das Ebenenmenü von Ribbon.](shot:layers/panel-menu)

| Eintrag | Inhalt |
| --- | --- |
| **Neu** | **Neue Ebene**, **Neue beschnittene Ebene**, **Neue Gruppe**, **Einfarbige Füllung**, **Verlaufsfüllung**, **Neue Abwedel- und Nachbelichtungsebene**, **Auswahl auf neue Ebene kopieren**, **Auswahl auf neue Ebene ausschneiden** |
| **Filter hinzufügen** | Filter zum Anhängen an die Ebene, nach Kategorie |
| **Anordnen** | **Ebene umbenennen…**, **Duplizieren**, **Ausgewählte Ebenen gruppieren** und bei einer Gruppe **Gruppierung aufheben** |
| **Verrechnungsmodus** | Alle [Verrechnungsmodi](/de/docs/layers/blend-modes/) |
| **Ebeneneinstellungen** | Die [Ebeneneinstellungen](/de/docs/layers/settings/) |
| **Maske** | Die Befehle für [Masken](/de/docs/layers/masks/) |
| **Pixelauswahl** | **Ebenendeckkraft auswählen**, **Deckkraft zur Auswahl hinzufügen**, **Deckkraft von Auswahl abziehen**, **Mit Ebenendeckkraft schneiden**, **Auswahl füllen**, **Auswahl umkehren**, **Pixelauswahl aufheben** |
| **Ebenenzeilenauswahl** | **Alle Ebenenzeilen auswählen**, **Ebenenzeilenauswahl aufheben** |
| **Sichtbarkeit** | **Ebene einblenden**, **Ebene und übergeordnete Gruppen einblenden**, **Ausgewählte Ebenen isolieren**, **Alle Ebenen einblenden** |
| **Ebene / Maske verschieben** | Wählt das Werkzeug [Vorgang](/de/docs/transform/move-transform/) aus |
| **Mit darunterliegender Ebene vereinen**, **Sichtbare Ebenen vereinen**, **Sichtbares auf neue Ebene kopieren**, **Bild reduzieren** | Siehe [Ebenen vereinen](/de/docs/layers/merging/) |
| **Gesamte Ebene leeren**, **Ebene löschen** | **Gesamte Ebene leeren** erscheint nur bei Malebenen |

Wenn Sie das Menü einer Zeile öffnen, wird diese Ebene aktiv. Das Menü einer
Gruppe beginnt mit **Neue Auswahlebene in Gruppe…** und
**Aktuelle Auswahl in Gruppe speichern…**. Auswahlebenen haben ein eigenes Menü (siehe
[Ebenentypen](/de/docs/layers/types/)). Klicken Sie mit der rechten Maustaste auf
die Maskenminiatur oder halten Sie sie gedrückt, um das
[Maskenmenü](/de/docs/layers/masks/) zu öffnen.
