---
title: "Ebeneneinstellungen"
description: "Die Ebeneneinstellungen im Kopfbereich des Bedienfelds Ebenen, im Menü Ebeneneinstellungen und im Bedienfeld Eigenschaften."
related: ["layers/panel", "layers/blend-modes", "layers/types", "filters/how-filters-apply"]
---

Sie können diese Einstellungen im Kopfbereich des Bedienfelds Ebenen oder unter
**Ebeneneinstellungen** im Menü der Ebene ändern. Das Menü **Ebene** enthält
dieselben Einträge.

![Das Untermenü Ebeneneinstellungen von Ribbon shading, mit abgehaktem Auf die Ebene darunter beschneiden und „Auf Ribbon beschnitten“ rechts.](shot:layers/settings-menu)

## Alphaschutz

Sie können die Transparenz einer Malebene schützen. Pinsel ändern dann nur
Pixel, die bereits bemalt sind.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie die Ebene aus und wählen Sie dann im Kopfbereich des Bedienfelds Ebenen **Alphaschutz** aus.
- Öffnen Sie das Menü der Ebene und wählen Sie **Ebeneneinstellungen > Alphaschutz**.
- Wischen Sie die Zeile mit einem Stift oder Finger nach rechts.

Solange der Alphaschutz aktiviert ist, erscheint rechts in der Zeile ein
Alphaschutzsymbol.

**Füllung** und **Farbverlauf** erhalten die Transparenz ebenfalls, und der
**Radierer** hat keine Wirkung.

## Bearbeitung sperren

Sie können eine Ebene sperren, damit sie weder bemalt noch verändert werden
kann.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie die Ebene aus und wählen Sie dann im Kopfbereich des Bedienfelds Ebenen **Bearbeitung sperren** aus.
- Öffnen Sie das Menü der Ebene und wählen Sie **Ebeneneinstellungen > Bearbeitung sperren**.
- Wählen Sie bei einer Auswahlebene in ihrem Menü **Bearbeitung sperren**.

Ist eine Ebene gesperrt, erscheint in ihrer Zeile ein Schlosssymbol.

Auf einer gesperrten Ebene können Sie nicht malen, Sie können sie nicht
umbenennen, löschen oder maskieren, ihre Deckkraft und ihren Verrechnungsmodus
nicht ändern und ihr keinen Filter hinzufügen. Das Sperren einer Gruppe sperrt
jede Ebene darin. Bei einer Ebene in einer gesperrten Gruppe können Sie
**Bearbeitung sperren** nicht deaktivieren.

## Auf die Ebene darunter beschneiden

Sie können eine Ebene beschneiden, um sie auf den bemalten Bereich der Ebene
darunter zu begrenzen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie die Ebene aus und wählen Sie dann im Kopfbereich des Bedienfelds Ebenen **Auf die Ebene darunter beschneiden** aus.
- Öffnen Sie das Menü der Ebene und wählen Sie **Ebeneneinstellungen > Auf die Ebene darunter beschneiden**.
- Um eine neue beschnittene Ebene hinzuzufügen, wählen Sie im Menü der Ebene **Neu > Neue beschnittene Ebene**.

Eine Schiene links neben den Miniaturen verbindet beschnittene Ebenen mit ihrer
Basis. Im Menü der Ebene nennt der Eintrag die Basis, zum Beispiel „Auf Ribbon
beschnitten“. Wenn Sie die Basisebene verschieben, bewegen sich ihre
beschnittenen Ebenen mit.

Auf eine Gruppe mit Durchreichen können Sie nicht beschneiden. Deaktivieren Sie
zuerst Durchreichen für die Gruppe.

Die Basis ist die nächste nicht beschnittene Ebene darunter in derselben Gruppe,
wobei Auswahlebenen übersprungen werden. Ist diese Ebene eine Füllebene oder ein
Filter, lautet der Eintrag **Keine Ebene darunter zum Zuordnen**. Bei einem
Filter hängt der Eintrag den Filter stattdessen an (siehe
[Wie Filter wirken](/de/docs/filters/how-filters-apply/)).

## Als Referenz verwenden

Sie können Malebenen und Gruppen als Referenzen für Werkzeuge markieren, die
**Referenzebenen** abtasten, etwa **Automatisch auswählen**, **Füllung** und die
[Retuschierwerkzeuge](/de/docs/retouch/clone-heal/).

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie die Ebenen aus und wählen Sie dann im Kopfbereich des Bedienfelds Ebenen **Ausgewählte Ebenen als Referenzen verwenden** aus.
- Öffnen Sie das Menü der Ebene und wählen Sie **Ebeneneinstellungen > Als Referenz verwenden** oder, wenn mehrere Zeilen ausgewählt sind, **Ausgewählte Ebenen als Referenzen verwenden**.

Um eine Ebene nicht mehr als Referenz zu verwenden, wählen Sie nur diese Ebene
aus und wählen Sie dann im Kopfbereich
**Diese Ebene nicht mehr als Referenz verwenden** aus, oder deaktivieren Sie
**Als Referenz verwenden** im Menü der Ebene.

Auf der Zeilenschaltfläche einer Referenzebene erscheint ein Leuchtturmsymbol.
Nachdem Sie Ebenen mit der Schaltfläche im Kopfbereich markiert haben, bleibt
nur die aktive Ebene ausgewählt.

## Ebene darunter als Referenz verwenden

Sie können die nächste sichtbare Malebene unter der aktiven Ebene als Referenz
markieren.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Ebeneneinstellungen > Ebene darunter als Referenz verwenden**.
- Wenn ein Werkzeug Referenzebenen abtastet und keine markiert ist, wählen Sie im Hinweis über der Leinwand ***Ebene* als Referenz verwenden** aus.

## Durchreichen

Sie können eine Gruppe auf Durchreichen stellen. Ihre Ebenen werden dann direkt
mit den Ebenen unter der Gruppe verrechnet, und Deckkraft und Maske der Gruppe
blenden zwischen diesem Ergebnis und den Ebenen darunter über.

Führen Sie eine der folgenden Aktionen aus:

- Öffnen Sie das Menü der Gruppe und wählen Sie **Ebeneneinstellungen > Durchreichen**.
- Wählen Sie **Durchreichen** unter **Ebenenverrechnungsmodus** im Kopfbereich des Bedienfelds Ebenen oder unter **Verrechnungsmodus** im Bedienfeld **Eigenschaften**.
- Wischen Sie die Zeile der Gruppe mit einem Stift oder Finger nach rechts.

Auf dem Ordner der Gruppe erscheint ein Abzeichen, und der Untertitel lautet
„Durchreichen“.

Wenn Sie Durchreichen deaktivieren, wird die Gruppe auf Normal gestellt. Eine
Gruppe mit Durchreichen kann nicht beschnitten werden, keine Beschneidungsbasis
sein und keine angehängten Filter haben. Bei einer gesperrten Gruppe können Sie
Durchreichen nicht ändern.

Neue Gruppen verwenden Normal, außer
**Durchreichen für neue Gruppen verwenden** ist auf der Seite **Leinwand** der
[Einstellungen](/de/docs/preferences/) aktiviert. Wenn Sie Ebenen gruppieren, die
einen anderen Verrechnungsmodus als Normal verwenden, oder einen Filter auf
einer eigenen Ebene, wird die neue Gruppe auf Durchreichen gestellt.

## Farbmodus

Sie können eine Malebene in **Vollfarbe**, **Graustufen** oder
**Zwei Tonwerte (Schwarz und Weiß)** speichern. Malen auf der Ebene folgt dem
Modus.

![Das Bedienfeld Eigenschaften einer Malebene mit Deckkraft, Verrechnungsmodus und Farbmodus.](shot:layers/settings-color-mode)

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie die Ebene aus und wählen Sie dann im Bedienfeld **Eigenschaften** unter **Farbmodus** einen Modus.
- Geben Sie „Farbmodus“ in die [Befehlssuche](/de/docs/start/command-search/) ein und wählen Sie einen Modus.

**Farbmodus** steht nicht im Menü der Ebene. Der Untertitel der Zeile zeigt den
Modus, wenn er nicht Vollfarbe ist.

Beim Wechsel des Modus werden die vorhandenen Pixel umgewandelt, und die
Rückkehr zu Vollfarbe stellt die ursprünglichen Farben nicht wieder her. Zwei
Tonwerte macht jedes Pixel schwarz oder weiß und vollständig deckend oder
vollständig transparent. **Farbmodus** ist ausgeblendet, solange Sie auf der
Maske der Ebene malen.

## Weitere Einträge unter Ebeneneinstellungen

**Ebeneneinstellungen** enthält außerdem **Transformation auf Pixel anwenden**
(siehe [Verschieben und Transformieren](/de/docs/transform/move-transform/)). Bei
einer Fotoebene enthält es **Quellprofil reparieren…**, **Quelle rastern…** und
**Zum Originalfoto zurückkehren** (siehe [Ebenentypen](/de/docs/layers/types/)).
