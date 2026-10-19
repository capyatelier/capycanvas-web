---
title: "Kopieren und Einfügen"
description: "Pixel kopieren und als Ebene, Maske oder neue Zeichnung einfügen."
related: ["selections/working", "transform/move-transform", "layers/types", "files/open-save"]
---

Die Zwischenablagebefehle befinden sich im Menü **Bearbeiten** und in der Befehlssuche.

![Inhalte einfügen im Menü Bearbeiten.](shot:transform/clipboard-edit-menu)

## Kopieren und Ausschneiden

**Kopieren** (**Strg+C**) kopiert die Pixel der ausgewählten Ebene innerhalb der Auswahl ohne Deckkraft, Maske oder angehängte Filter. Ohne Auswahl wird die Ebene innerhalb der Leinwand kopiert.

**Ausschneiden** (**Strg+X**) kopiert dieselben Pixel und löscht sie. Der Befehl ist auf einer gesperrten Ebene oder einer Ebene mit **Alphaschutz** nicht verfügbar.

**Sichtbares kopieren** (**Strg+Umschalt+C**) kopiert das sichtbare Ergebnis innerhalb der Auswahl einschließlich Papierbeleuchtung. Gruppen, Filterebenen und Auswahlebenen haben keine eigenen Pixel.

## Einfügen

**Einfügen** (**Strg+V**) fügt den Inhalt der Zwischenablage als neue Ebene hinzu und öffnet bei Bedarf Transformationsgriffe zur Platzierung. Ein Bild aus einer anderen App wird zu einer [Objektebene](/de/docs/layers/types/), die ihre Quelle bis zum Rastern behält.

Eine innerhalb von {appName} erstellte Kopie kehrt an ihre kopierte Position zurück, wenn diese sichtbar ist. Andernfalls landet sie in der Mitte der Ansicht.

## Inhalte einfügen

Öffnen Sie **Bearbeiten > Inhalte einfügen**, um ein Ziel zu wählen.

- **An gleicher Stelle einfügen** fügt eine Ebene an der kopierten Position hinzu, ohne Transformationsgriffe zu öffnen.
- **In Auswahl einfügen** fügt eine Ebene mit der aktiven Auswahl als Maske hinzu und hebt dann die Auswahl auf.
- **Maske einfügen** ersetzt oder ergänzt die Maske der ausgewählten Ebene durch das Bild aus der Zwischenablage.
- **Als neues Bild einfügen** erstellt eine neue Zeichnung aus der Zwischenablage.

Befehle, die eine Auswahl, eine bearbeitbare Ebene oder ein kompatibles Zwischenablagebild erfordern, sind abgeblendet.

![Die Optionen von Inhalte einfügen für Ebenen, Masken und neue Zeichnungen.](shot:transform/paste-special)

## Zwischen Apps

Andere Apps erhalten eine Kopie aus {appName} als 8-Bit-sRGB-PNG. Solange die interne Kopie in der Zwischenablage bleibt, erhält eine andere {appName}-Zeichnung ihre ursprüngliche Präzision.

Im Webeditor kann ein eingefügtes Bild bis zu 512 MiB groß sein. Kann der Browser keine Bilder einfügen, verwenden Sie **Datei > Bild als Ebene importieren…**.
