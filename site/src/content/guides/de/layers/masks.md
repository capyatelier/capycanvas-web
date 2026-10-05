---
title: "Masken"
description: "Teile einer Ebene mit einer Maske verbergen, und alle Befehle, die eine Maske ändern."
related: ["layers/panel", "selections/working", "filters/how-filters-apply", "layers/merging"]
---

Sie können Teile einer Ebene mit einer Maske verbergen. Bemalte Bereiche der
Maske zeigen die Ebene, leere Bereiche verbergen sie. Malebenen, Fotoebenen,
Gruppen, Füllebenen und Filter können Masken haben.

## Maske hinzufügen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Maske > Maske hinzufügen**.
- Wählen Sie unten im Bedienfeld Ebenen **Maske hinzufügen** aus.

![Die Zeile Ribbon mit einem Rahmen um ihre Maskenminiatur.](shot:layers/masks-row)

Die Maskenminiatur erscheint rechts neben der Ebenenminiatur, mit einem Rahmen,
der sie als Ziel für Pinsel kennzeichnet. Eine neue Maske zeigt die ganze Ebene.
Ist eine Auswahl aktiv, zeigt die Maske nur den ausgewählten Bereich, und die
Auswahl wird aufgehoben.

Hat die Ebene bereits eine Maske, wählt **Maske hinzufügen** diese zum Malen aus.
Einer Auswahlebene oder einer gesperrten Ebene können Sie keine Maske
hinzufügen.

## Auf einer Maske malen

Wählen Sie die Maskenminiatur aus, um auf der Maske zu malen. Um wieder auf der
Ebene zu malen, wählen Sie die Ebenenminiatur aus oder drücken Sie **Escape**.

> **Hinweis:** Pinsel ignorieren auf einer Maske die Malfarbe. Sie machen die Ebene sichtbar, der **Radierer** verbirgt sie.

Auf einer umgekehrten Maske tauschen Pinsel und **Radierer** ihre Rollen.
Maskenstriche sind trocken, ohne Mischen, Farbausbreitung oder Textur.

## Leiste zur Maskenbearbeitung

Während Sie auf einer Maske malen, erscheint am unteren Rand der Leinwand eine
Leiste mit der Aufschrift „Maske von *Ebene* wird bearbeitet“.

![Die Leiste zur Maskenbearbeitung mit Umkehren, Deaktivieren, Maske anwenden, Mehr und Inhalt bearbeiten.](shot:layers/masks-bar)

- **Umkehren**
- **Deaktivieren** schaltet die Maske aus, die Schaltfläche lautet dann **Aktivieren**.
- **Maske anwenden** löscht die Pixel, die die Maske verbirgt, und entfernt dann die Maske.
- **Mehr** enthält das Menü **Ebene** und **Leinwandaktionsleiste anzeigen**. Deaktivieren Sie **Leinwandaktionsleiste anzeigen**, um die Leiste auszublenden.
- **Inhalt bearbeiten** kehrt zum Malen auf der Ebene zurück.

## Masken aus Auswahlen

Sie können aus der aktuellen Auswahl eine Maske erstellen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Maske > Maske: Auswahl zeigen** oder **Maske: Auswahl verbergen**. Bei einer Ebene mit Maske lauten die Einträge **Maske ersetzen: Auswahl zeigen** und **Maske ersetzen: Auswahl verbergen**.
- Wählen Sie **Maske** in der [Auswahlleiste](/de/docs/selections/working/) auf der Leinwand aus. Die neue Maske zeigt den ausgewählten Bereich und ersetzt eine vorhandene Maske der Ebene.

Ein Filter oder eine Füllebene, die bei aktiver Auswahl hinzugefügt wird,
erhält eine Maske aus der Auswahl. **In Auswahl einfügen** erstellt eine neue
Ebene, die auf die Auswahl maskiert ist (siehe
[Kopieren und Einfügen](/de/docs/transform/clipboard/)).

## Auswahlen aus Masken

Sie können eine Maske als Auswahl laden.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Auswahl > Aus Ebenenmaske** und **Maske als Auswahl laden**, **Maske zur Auswahl hinzufügen**, **Maske von Auswahl abziehen** oder **Mit Maske schneiden**.
- Wählen Sie dieselben Einträge im Maskenmenü unter **Pixelauswahl**.
- Klicken Sie bei gedrückter Taste **Strg** auf die Maskenminiatur. Halten Sie zusätzlich **Umschalt** gedrückt, um zur Auswahl hinzuzufügen, **Alt**, um von ihr abzuziehen, oder **Umschalt+Alt**, um die Schnittmenge mit ihr zu bilden.

## Maskenmenü

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Maske** (der erste Eintrag lautet **Maske bearbeiten**).
- Klicken Sie mit der rechten Maustaste auf die Maskenminiatur oder halten Sie sie gedrückt.
- Öffnen Sie, während Sie auf der Maske malen, das Menü **Ebene** oder wählen Sie unten im Bedienfeld Ebenen **Ebenenaktionen** aus.

Bei einer Ebene ohne Maske enthält **Ebene > Maske** nur **Maske hinzufügen**,
**Maske: Auswahl zeigen**, **Maske: Auswahl verbergen** und **Maske einfügen**.

![Das Maskenmenü von Ribbon.](shot:layers/masks-menu)

| Eintrag | Wirkung |
| --- | --- |
| **Ebeneninhalt bearbeiten** | Kehrt zum Malen auf der Ebene zurück. |
| **Maskenbereich anzeigen** | Zeigt die Maske auf der Leinwand und wählt sie zum Malen aus. |
| **Maske aktivieren** | Schaltet die Maske ein oder aus, ohne sie zu ändern. Eine deaktivierte Maske hat eine blasse Miniatur. |
| **Maske mit Ebene verknüpfen** | Wenn aktiviert, bewegt sich die Maske mit der Ebene. Wenn deaktiviert, verschiebt **Ebene / Maske verschieben** die Ebene oder die Maske, je nachdem, worauf Sie malen. Die Verknüpfungsschaltfläche zwischen den Miniaturen bewirkt dasselbe. |
| **Maske ersetzen: Auswahl zeigen**, **Maske ersetzen: Auswahl verbergen** | Ersetzt die Maske durch die Auswahl. |
| **Maske kopieren** | Kopiert die Maske für **Durch kopierte Maske ersetzen** auf einer anderen Ebene oder für **Maske einfügen** auf einer Ebene ohne Maske. |
| **Maske umkehren** | Vertauscht sichtbare und verborgene Bereiche. |
| **Alles sichtbar machen**, **Alle ausblenden** | Lässt die Maske die ganze Ebene zeigen oder verbergen und schaltet die Umkehrung aus. |
| **Maske auf Ebene anwenden** | Löscht die Pixel, die die Maske verbirgt, und entfernt dann die Maske. |
| **Maske löschen** | Entfernt die Maske. Die Pixel der Ebene bleiben unverändert. |
| **Pixelauswahl** | Lädt die Maske als Auswahl. |

Alle Einträge außer **Ebeneninhalt bearbeiten**, **Maskenbereich anzeigen** und
**Maske kopieren** setzen eine nicht gesperrte Ebene voraus.

## Maske anwenden

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Maske > Maske auf Ebene anwenden**.
- Wählen Sie in der Leiste zur Maskenbearbeitung **Maske anwenden** aus.

**Maske auf Ebene anwenden** funktioniert nur bei Malebenen, und die Maske muss
aktiviert sein. Wählen Sie bei einer verzerrten oder verformten Ebene zuerst
**Transformation auf Pixel anwenden**. Um die Maske einer Gruppe anzuwenden,
verwenden Sie **Gruppe vereinen** (siehe [Ebenen vereinen](/de/docs/layers/merging/)).

Bei einer Fotoebene stellt **Zum Originalfoto zurückkehren** wieder her, was
eine angewandte Maske gelöscht hat.

## Masken auf Filter- und Füllebenen

Die Maske eines Filters legt fest, wo der Filter wirkt. Ist eine Filter- oder
Füllebene ausgewählt, malen Pinsel immer auf ihrer Maske. **Füllung**,
**Farbverlauf** und andere Werkzeuge, die Bildinhalt zeichnen, funktionieren
nicht auf der Maske eines Filters. Um auf einer Füllebene zu malen, ist eine
Maske nötig.
