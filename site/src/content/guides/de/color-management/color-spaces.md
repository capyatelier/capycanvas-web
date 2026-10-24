---
title: "Farbraum, Farbtiefe und Verrechnung"
description: "Farbraum, Farbtiefe und Verrechnung einer Zeichnung wählen und später über das Menü Bild ändern."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Sie können Farbraum, Farbtiefe und Verrechnung einer Zeichnung beim Erstellen wählen
und später über das Menü **Bild** ändern.

## Farbräume

Der Arbeitsfarbraum einer Zeichnung ist **sRGB**, **Display P3**, **Adobe RGB
(1998)** oder **ProPhoto RGB**. ProPhoto RGB verwendet einen D50-Weißpunkt, die
anderen drei D65.

ICC-Profile können keine Arbeitsfarbräume sein. Sie können sie für den
[Druck-Softproof](/de/docs/color-management/proof/) und den
[Export](/de/docs/files/export/) verwenden.

## Farbtiefen

Die Farbtiefe einer Zeichnung ist **8-Bit-SDR**, **16-Bit-SDR**,
**16-Bit-Gleitkomma-HDR** oder **32-Bit-Gleitkomma-HDR**. Eine Gleitkomma-Farbtiefe
macht sie zu einer [HDR-Zeichnung](/de/docs/color-management/hdr/), gespeichert als
lineares RGB, in dem 1.0 SDR-Weiß bei 203 cd/m² entspricht.

## Für eine neue Zeichnung wählen

Wählen Sie **Datei > Neu…** (**Strg+N**) und legen Sie unter **Farbe** **Farbraum**,
**Farbtiefe** und **Verrechnung** fest. Eine Vorgabe aus **Vorgaben** legt sie
zusammen mit Blatt und Papier fest. Der Dialog behält die Auswahl der zuletzt
erstellten Zeichnung.

Bei einer Gleitkomma-Farbtiefe ist **Verrechnung** fest auf Lineares Licht
eingestellt.

![Der Dialog Neue Zeichnung mit Farbraum auf Display P3, Farbtiefe und Verrechnung unter Farbe.](shot:color-management/new-dialog-color)

## Standardwerte in den Einstellungen

Wählen Sie **Bearbeiten > Einstellungen** und öffnen Sie die Seite **Farbe**:

- Unter **Fotos öffnen** legen Sie **Bearbeitungsgenauigkeit** (**Quellfarbtiefe** oder **16 Bit**) und **RGB und Graustufen ohne Profil** (**sRGB annehmen** oder **Nachfragen**) fest. Bei **Nachfragen** zeigt das Öffnen eines Fotos ohne Profil **Bildinterpretation wählen**. Fotos mit Profil behalten ihre eingebetteten Profile.
- Wählen Sie **Profile verwalten…** aus, um die [Farbprofilbibliothek](/de/docs/color-management/proof/) zu öffnen.

## Profil zuweisen

Wählen Sie **Bild > Farbverwaltung > Profil zuweisen…**, um die RGB-Werte der Zeichnung beizubehalten und in einem anderen Arbeitsfarbraum zu lesen. Wählen Sie den Farbraum unter **Farbraum**, wo Adobe RGB (1998) als **Adobe RGB** aufgeführt ist. Objektebenen behalten das Quellprofil ihres [Originalfotos](/de/docs/layers/types/).

## Farbraum konvertieren

Wählen Sie **Bild > Farbverwaltung > Farbraum konvertieren…**, um die RGB-Werte so zu ändern,
dass die Farben in einem anderen Arbeitsfarbraum ihr Aussehen behalten, innerhalb
seines Farbumfangs.

Mit **Reduzierte Kopie speichern** wird **Anwenden** zu **Kopie speichern…**. Die
Kopie hat eine Ebene mit derselben Größe und Farbtiefe. Ihr Dateiname muss auf
`.capy` enden und darf nicht die Datei der geöffneten Zeichnung sein.

![Der Dialog Farbraum konvertieren mit dem Vergleich Vorher und Nachher und der Meldung zum Farbumfang.](shot:color-management/convert-dialog)

### Farbraum

Der Arbeitsfarbraum, in den konvertiert wird. Anfangs ist der aktuelle Farbraum
ausgewählt.

### Ergebnis

**Bearbeitbare Ebenen** (Standard) konvertiert jede Ebene direkt. **Reduzierte Kopie
speichern** speichert eine konvertierte, auf eine Ebene reduzierte Kopie als neue
`.capy`-Datei und lässt die geöffnete Zeichnung unverändert.

### Wiedergabeabsicht

**Relativ farbmetrisch** (Standard), **Wahrnehmungsbasiert**, **Sättigung** oder
**Absolut farbmetrisch**. Die Schwarzpunktkompensation ist immer deaktiviert.

## Farbtiefe ändern

Wählen Sie **Bild > Farbverwaltung > Farbtiefe ändern…**, um die gespeicherte Genauigkeit zu
ändern. Der Farbraum ändert sich nicht.

Ein Wechsel zu einer Gleitkomma-Farbtiefe macht die Zeichnung zu HDR und setzt die
Verrechnung im selben Schritt auf Lineares Licht. Ein Wechsel zurück zu einer
Ganzzahl-Farbtiefe behält Lineares Licht bei, bis Sie die
[Verrechnung](#verrechnung) ändern. Eine geringere Farbtiefe kann Farben beschneiden.

### Farbtiefe

Die neue Farbtiefe. Anfangs ist die aktuelle Farbtiefe ausgewählt.

### Dithering

**Keine** (Standard) oder **Stochastisch (8 Bit)**. Dithering wirkt nur, wenn das
Ziel 8-Bit-SDR ist.

## Vorschau und Anwenden

So wenden Sie Profil zuweisen, Farbraum konvertieren oder Farbtiefe ändern an:

1. Legen Sie die Felder im Dialog fest.
2. Wählen Sie **Vollständiges Ergebnis ansehen** aus.
3. Vergleichen Sie **Vorher** und **Nachher**.
4. Wählen Sie **Anwenden** (oder **Kopie speichern…**) aus.

**Anwenden** bleibt nicht verfügbar, bis die Vorschau bereit ist, und eine Änderung
an einem Feld verwirft die Vorschau. Wird eine Farbe beschnitten, lautet die
Statuszeile „Einige Farben überschreiten den Zielfarbumfang. Das Ergebnis vor dem
Anwenden vergleichen.“

Anwenden ist ein Rückgängig-Schritt. Rückgängig und Wiederholen öffnen
**Farbänderung rückgängig machen** und **Farbänderung wiederholen**. Diese Dialoge
wenden die Änderung ohne weitere Eingabe an und bieten nur **Abbrechen**.

## Verrechnung

Sie können Ebenen auf den kodierten Werten der Zeichnung oder in linearem Licht
verrechnen. Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bild > Verrechnung > Wahrnehmungsbasierte Verrechnung** oder **Bild > Verrechnung > Verrechnung in linearem Licht**.
- Setzen Sie **Verrechnung** im Dialog Neue Zeichnung auf **Wahrnehmungsbasiert** oder **Lineares Licht**.

![Das Untermenü Verrechnung mit abgehakter Wahrnehmungsbasierter Verrechnung.](shot:color-management/edit-blending-menu)

Gemalte Pixel behalten ihre Werte. Die Verrechnung ändert:

- wie Ebenen kombiniert werden;
- wie trockene Pinsel Farbe über vorhandene Farbe legen;
- Gaußscher Weichzeichner, Unscharf maskieren, Hochpass, Kantenerhaltendes Glätten und Weichfokus (Bewegungsunschärfe, Vignette und Überstrahlung arbeiten immer in linearem Licht);
- das neutrale Grau von **Neue Abwedel- und Nachbelichtungsebene**;
- [Frequenztrennung…](/de/docs/retouch/dodge-burn/), die Wahrnehmungsbasiert benötigt.

Eine Änderung der Verrechnung ist ein Rückgängig-Schritt. HDR-Zeichnungen verwenden
immer Lineares Licht, und beide Menüeinträge sind nicht verfügbar. Neue Zeichnungen
und aus Bilddateien geöffnete Fotos beginnen mit Wahrnehmungsbasiert. Fotos, die mit
einer Gleitkomma-Farbtiefe geöffnet werden, und `.capy`-Dateien, die vor Einführung der
Verrechnung gespeichert wurden, verwenden Lineares Licht.

## Dokumenteigenschaften

Wählen Sie **Datei > Dokumenteigenschaften…**, um **Leinwandgröße**,
**Arbeitsfarbraum**, **Farbtiefe**, **Verrechnung** und **Auflösungsmetadaten** der
Zeichnung zu sehen. HDR-Zeichnungen zeigen zusätzlich **HDR-Referenzweiß**. Jedes
Originalfoto in der Zeichnung fügt eine Zeile mit seinem Quellprofil hinzu. In diesem
Dialog lässt sich nichts ändern.
