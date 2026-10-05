---
title: "Ebenentypen"
description: "Die Arten von Ebenen in einer Zeichnung und die Regeln für jede davon."
related: ["layers/panel", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Das Bedienfeld Ebenen mit einer Auswahlebene, einer Gruppe mit Durchreichen, einem Filter Kurven, einer Verlaufsfüllung, einer einfarbigen Ebene, der Malebene Aktuelle Tinte und Papier.](shot:layers/types-rows)

## Malebene

Eine Malebene enthält gemalte Pixel. Pinsel, **Füllung**, **Farbverlauf** und
**Form** fügen Pixel nur auf Malebenen hinzu.

Um eine Malebene hinzuzufügen, wählen Sie **Ebene > Neu > Neue Ebene** oder
wählen Sie unten im Bedienfeld Ebenen **Neue Ebene** aus.

Eine neue Zeichnung beginnt mit einer leeren Malebene, **Aktuelle Tinte**, über
**Papier**. Nur Malebenen haben **Alphaschutz**, **Farbmodus**,
**Gesamte Ebene leeren** und **Maske auf Ebene anwenden**.

## Gruppe

Eine Gruppe fasst Ebenen in einem Ordner zusammen, den Sie zu einer Zeile
zuklappen können.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Neu > Neue Gruppe**.
- Wählen Sie unten im Bedienfeld Ebenen **Neue Gruppe** aus.
- Wählen Sie mehrere Zeilen aus und wählen Sie **Ebene > Anordnen > Ausgewählte Ebenen gruppieren**.

Wählen Sie die Ordnerminiatur aus, um die Gruppe auf- oder zuzuklappen. Ein
Abzeichen auf dem Ordner kennzeichnet eine Gruppe, die auf
[Durchreichen](/de/docs/layers/settings/) gestellt ist.

Eine Gruppe verrechnet zuerst ihre eigenen Ebenen miteinander und dann das
Ergebnis mit den Ebenen darunter, außer sie ist auf Durchreichen gestellt. Eine
Gruppe hat keine eigenen Pixel.

## Füllebenen

Eine Füllebene bedeckt die Leinwand mit einer Farbe (**Einfarbig**) oder einem
Verlauf (**Verlaufsfüllung**).

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Neu > Einfarbige Füllung** oder **Verlaufsfüllung**.
- Wählen Sie **Filter > Füllung > Einfarbig** oder **Verlaufsfüllung**.
- Wählen Sie im Bedienfeld **Filter** in der Kategorie **Füllung** den Eintrag **Einfarbig** oder **Verlaufsfüllung** aus.

Die Füllebene wird über der aktiven Ebene und den darauf beschnittenen Ebenen
eingefügt. Eine neue einfarbige Füllung verwendet die aktuelle Malfarbe, eine
neue Verlaufsfüllung verläuft von Schwarz nach Weiß. Ist eine Auswahl aktiv,
wird sie zur Maske der Füllebene.

Um die Farbe einer einfarbigen Füllung zu ändern, wählen Sie ihre Miniatur aus,
um [Farbe bearbeiten](/de/docs/color/edit-color/) zu öffnen, oder ändern Sie
**Farbe** im Bedienfeld **Eigenschaften**. [Farbverlauf](/de/docs/drawing/gradient/)
beschreibt die Einstellungen einer Verlaufsfüllung.

Um auf einer Füllebene zu malen, fügen Sie eine Maske hinzu. Pinsel malen dann
auf der Maske, nicht auf der Füllung. Sie können eine Füllebene beschneiden,
aber keine anderen Ebenen auf sie beschneiden und keine Filter an sie anhängen.

## Filterebenen

Eine Filterebene enthält statt Pixeln einen Filter. Ihre Zeile zeigt das Symbol
und den Namen des Filters. Siehe
[Filter hinzufügen und bearbeiten](/de/docs/filters/adding/) und
[Wie Filter wirken](/de/docs/filters/how-filters-apply/).

Ist eine Filterebene ausgewählt, malen Pinsel auf der Ebene darunter oder auf
der Ebene, an die der Filter angehängt ist. Hat der Filter eine Maske, malen
Pinsel auf der Maske.

## Auswahlebenen

Eine Auswahlebene speichert eine Auswahl. Um eine hinzuzufügen, wählen Sie unten
im Bedienfeld Ebenen **Neue Auswahlebene** aus.

Die Schaltfläche rechts neben der Miniatur lädt die gespeicherte Auswahl. Das
Auge blendet die Auswahlüberlagerung auf der Leinwand ein oder aus. Eine
Auswahlebene hat keine Deckkraft, keinen Verrechnungsmodus, keine Maske, keine
Beschneidung und keine Referenzeinstellung, und sie kann nicht vereint werden.
[Auswahlebenen](/de/docs/selections/selection-layers/) beschreibt, wie Sie die
gespeicherte Auswahl bearbeiten.

## Papier

**Papier** ist eine weiße Füllebene **Einfarbig** ganz unten in einer neuen
Zeichnung. Sie können **Papier** wie jede andere Füllebene umfärben, ausblenden
oder löschen.

**Papier** ist zu Beginn ausgeblendet, wenn im Dialog
[Neue Zeichnung](/de/docs/files/new/) **Hintergrund** auf **Transparent**
gestellt ist, und in einem geöffneten Foto.

## Fotoebenen

Eine Fotoebene ist eine Malebene, die das Originalfoto in seiner eigenen Größe,
Farbtiefe und mit seinem eigenen Farbprofil behält. Malen und Radieren werden
über dem Foto gespeichert.

Um eine Fotoebene hinzuzufügen, führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Öffnen…** und wählen Sie ein Foto aus.
- Wählen Sie **Datei > Bild als Ebene importieren…**.
- Legen Sie eine Bilddatei auf der Leinwand ab.

Solange das Original erhalten ist, enthält **Ebene > Ebeneneinstellungen** diese
Befehle:

- **Zum Originalfoto zurückkehren** verwirft Malen, Radieren und angewandte Masken. Position, Maske, Deckkraft und Verrechnungsmodus bleiben erhalten, und **Farbmodus** kehrt zu **Vollfarbe** zurück.
- **Quelle rastern…** wandelt das Original in voller Größe in den Farbraum und die Farbtiefe der Zeichnung um. Danach ist **Zum Originalfoto zurückkehren** nicht mehr verfügbar.
- **Quellprofil reparieren…** ändert das Profil, mit dem das Original gelesen wird: **sRGB**, **Display P3**, **Adobe RGB (1998)** oder **ProPhoto RGB**. Wurde auf der Ebene gemalt, fügt **Korrigierte Quelle hinzufügen** das korrigierte Foto stattdessen als neue Ebene hinzu.

**Zum Originalfoto zurückkehren** und **Quelle rastern…** stehen auch im Menü
**Bearbeiten**. **Gesamte Ebene leeren** verwirft auch das Originalfoto.
