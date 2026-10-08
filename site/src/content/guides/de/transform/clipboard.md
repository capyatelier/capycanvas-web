---
title: "Kopieren und Einfügen"
description: "Pixel kopieren und als neue Ebenen einfügen, innerhalb von {appName} und zwischen Apps."
related: ["selections/working", "transform/move-transform", "layers/working", "files/open-save"]
---

Sie können Pixel aus einer Ebene oder aus dem sichtbaren Bild kopieren und als
neue Ebene einfügen. Die Befehle stehen im Menü **Bearbeiten** und in der
Befehlssuche.

![Die Befehle für die Zwischenablage im Menü Bearbeiten.](shot:transform/clipboard-edit-menu)

| Befehl | Taste |
| --- | --- |
| **Ausschneiden** | **Strg+X** |
| **Kopieren** | **Strg+C** |
| **Sichtbares kopieren** | **Strg+Umschalt+C** |
| **Einfügen** | **Strg+V** |
| **An gleicher Stelle einfügen** | **Strg+Umschalt+V** |
| **In Auswahl einfügen** | |

**Kopieren** in der [Auswahlleiste](/de/docs/selections/working/) enthält
**Kopieren**, **Sichtbares kopieren** und **Ausschneiden**.

## Kopieren

Kopiert die eigenen Pixel der aktiven Ebene innerhalb der Auswahl, ohne
Deckkraft, Maske und angehängte Filter der Ebene. Ohne Auswahl kopiert der
Befehl die ganze Ebene innerhalb der Leinwand.

## Ausschneiden

Kopiert wie **Kopieren** und löscht dann die ausgewählten Pixel aus der Ebene.
Aus einer Ebene mit aktiviertem **Alphaschutz** können Sie nicht ausschneiden.

## Sichtbares kopieren

Kopiert das sichtbare Bild innerhalb der Auswahl so, wie es in einem Export
erscheint.

## Was sich nicht kopieren lässt

Gruppen, Filterebenen und Auswahlebenen haben keine eigenen Pixel. Um aus einer
Gruppe zu kopieren, wählen Sie eine Ebene darin aus. In der Schnellmaske können
Sie keinen Bildinhalt kopieren, und **Kopieren** und **Ausschneiden** sind nicht
verfügbar, während Sie eine Maske bearbeiten.

Eine große Kopie zeigt einen Fortschrittshinweis mit **Abbrechen**.

## Einfügen

Fügt den Inhalt der Zwischenablage als neue aktive Ebene hinzu.

- Eine Kopie aus {appName} landet dort, wo sie kopiert wurde, wenn diese Stelle in der Ansicht sichtbar ist, andernfalls in der Mitte der Ansicht.
- Ein Bild aus einer anderen App öffnet sich im Transformationsrahmen. **Anwenden** platziert das Bild, **Abbrechen** verwirft das Einfügen (siehe [Verschieben und Transformieren](/de/docs/transform/move-transform/)).

## An gleicher Stelle einfügen

Fügt den Inhalt der Zwischenablage als neue Ebene dort ein, wo er kopiert wurde,
ohne Transformationsrahmen. Ein Bild aus einer anderen App landet in voller
Größe in der Mitte der Ansicht.

## In Auswahl einfügen

Funktioniert wie **An gleicher Stelle einfügen** und gibt der neuen Ebene eine
[Maske](/de/docs/layers/masks/), die nur die Auswahl zeigt. Die Auswahl wird
danach entfernt. **In Auswahl einfügen** setzt eine Auswahl voraus.

## Einfügen zwischen Apps

Andere Apps erhalten eine Kopie aus {appName} als 8-Bit-sRGB-PNG-Bild. Beim
Einfügen zurück in {appName} wird die Kopie in voller Farbtiefe verwendet,
solange sie noch in der Zwischenablage liegt.

Eine Kopie, die in eine Zeichnung mit anderen Farbeinstellungen eingefügt wird,
wird zu einer [Fotoebene](/de/docs/layers/types/), umgewandelt aus ihrem eigenen
Farbprofil.

Während Sie in ein Textfeld tippen, schneiden die Tasten für die Zwischenablage
Text aus, kopieren und fügen ihn ein.

Im Web-Editor kann ein eingefügtes Bild bis zu 512 MiB groß sein. In einem
Browser, der keine Bilder einfügen kann, wählen Sie stattdessen
**Datei > Bild als Ebene importieren…**.
