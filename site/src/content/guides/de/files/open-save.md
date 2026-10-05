---
title: "Öffnen und Speichern"
description: "Zeichnungen und Fotos öffnen, .capy-Dateien speichern und mit mehreren geöffneten Zeichnungen arbeiten."
related: ["files/new", "files/export", "transform/move-transform", "start/undo"]
---

Die Befehle auf dieser Seite stehen im Menü **Datei**. Im Arbeitsbereich Skizze öffnen Sie es über
**Hauptmenü** in der Titelleiste.

![Das Menü Datei.](shot:files/file-menu)

## Eine Zeichnung oder ein Foto öffnen

Sie können `.capy`-Zeichnungen und Fotos in den Formaten OpenEXR, TIFF, PNG, WebP,
BMP, JPEG, GIF, HEIF und AVIF öffnen. Jede Datei öffnet sich in einer eigenen Registerkarte.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Öffnen…**. Außer unter Linux können Sie mehrere Dateien auswählen.
- Drücken Sie **Strg+O**.
- Wählen Sie in den Arbeitsbereichen Malen und Foto **Öffnen…** in der Werkzeugleiste Befehle aus.
- Ziehen Sie im Web-Editor oder unter Linux Dateien auf den Zeichnungsnamen oder die Registerkarten in der Titelleiste.
- Wenn Sie den Web-Editor als App installiert haben, öffnen Sie eine `.capy`-, `.png`-, `.jpg`-, `.tif`-, `.avif`- oder `.exr`-Datei aus Ihrem System mit Capy Canvas.

## Fotos

Ein Foto öffnet sich als neue Zeichnung mit einer Fotoebene, benannt nach der Datei,
über einer Ebene **Papier**. Das Foto behält sein Farbprofil und standardmäßig seine
Farbtiefe. Beim Speichern entsteht eine `.capy`-Datei. Das Foto wird nie überschrieben.

- Bei einem animierten GIF oder WebP öffnet sich das erste Einzelbild.
- Ein Foto kann pro Seite bis zu 32768 Pixel groß sein.
- Ein CMYK-Foto öffnet sich nur mit eingebettetem Farbprofil.
- HDR-Fotos im HEIF- und AVIF-Format lassen sich nicht öffnen.

Ist **RGB und Graustufen ohne Profil** in den [Einstellungen](/de/docs/preferences/)
auf **Nachfragen** gesetzt, öffnet ein Foto ohne Farbprofil den Dialog
**Bildinterpretation wählen**.

## Bilder als Ebenen importieren

Sie können der aktuellen Zeichnung Bilder als neue Ebenen hinzufügen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Bild als Ebene importieren…**.
- Drücken Sie **Strg+Umschalt+O**.
- Ziehen Sie Bilder auf die Leinwand oder auf eine Zeile im Bedienfeld **Ebenen**.

Jedes Bild wird zu einer Ebene, benannt nach der Datei, über der ausgewählten Ebene,
mit [Transformationsgriffen](/de/docs/transform/move-transform/) zum Platzieren. Ein
Bild, das größer als die Leinwand ist, wird passend verkleinert.

Eine `.capy`-Datei lässt sich nicht importieren. Im Web-Editor kann ein Bild bis zu
512 MiB groß sein.

## Speichern

Sie können die Zeichnung mit allen Ebenen als `.capy`-Datei speichern.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Speichern**.
- Drücken Sie **Strg+S**.
- Wählen Sie in den Arbeitsbereichen Malen und Foto **Speichern** in der Werkzeugleiste Befehle aus.

Beim ersten Speichern werden Sie nach einem Speicherort gefragt. Spätere Speichervorgänge
schreiben in dieselbe Datei. Nach dem Speichern zeigt die Registerkarte den Dateinamen ohne
die Markierung ●.

In Firefox und Safari gilt die Zeichnung erst als gespeichert, wenn Sie im Dialog
**Datei herunterladen** zuerst **Herunterladen** und dann **Datei gespeichert** auswählen.

![Der Dialog Datei herunterladen mit Abbrechen, Herunterladen und Datei gespeichert.](shot:files/download-file)

**Datei > Speichern unter…** (**Strg+Umschalt+S**) fragt immer nach einem Speicherort,
und spätere Speichervorgänge gehen in die neue Datei. **Speichern** fragt ebenfalls
nach einem Speicherort, wenn sich die Datei auf dem Datenträger geändert hat, seit Sie
sie geöffnet oder gespeichert haben.

**Speichern** ist nicht verfügbar, während ein Zuschnitt oder eine Transformation
geöffnet ist.

## Was eine .capy-Datei speichert

Eine `.capy`-Datei speichert jede Ebene mit ihrer Maske und ihren Einstellungen, die
Filter, gespeicherte Auswahlen und Hilfslinien, Farbraum, Farbtiefe und Verrechnung
sowie die EXIF-, XMP- und IPTC-Daten eines Fotos. Nicht gespeichert werden der
Rückgängig-Verlauf, die Ansicht und die aktive Auswahl.

## Nur lesbare Zeichnungen

Eine `.capy`-Datei, die Capy Canvas nicht bearbeiten kann, etwa eine beschädigte
Datei, öffnet sich in einem Dialog statt in einer Registerkarte. **Copy Original File…**
speichert eine Kopie der Datei, und **Export Preview Image…** speichert die Vorschau
der Zeichnung als PNG.

## Zeichnungsregisterkarten

![Drei Zeichnungsregisterkarten in der Titelleiste, eine als ungespeichert markiert.](shot:files/drawing-tabs)

Die Titelleiste zeigt für jede geöffnete Zeichnung eine Registerkarte. Ist nur eine Zeichnung
geöffnet, zeigt sie stattdessen Name und Größe der Zeichnung.

Wählen Sie eine Registerkarte aus, um zu ihrer Zeichnung zu wechseln, oder verwenden Sie diese Tasten:

| Aktion | Web-Editor | Linux |
| --- | --- | --- |
| Vorherige Zeichnung anzeigen | **Alt+Bild auf** | **Strg+Bild auf** oder **Strg+Umschalt+Tab** |
| Nächste Zeichnung anzeigen | **Alt+Bild ab** | **Strg+Bild ab** oder **Strg+Tab** |
| Liste Zeichnungen öffnen | **Strg+Alt+D** | **Strg+Umschalt+A** |

Im Web-Editor ziehen Sie eine Registerkarte seitwärts, um die Registerkarten neu anzuordnen.

Ein ● vor einem Namen kennzeichnet ungespeicherte Änderungen. In einer schmalen
Titelleiste werden die Registerkarten zu einer Schaltfläche, die die Liste Zeichnungen öffnet.

Jede Registerkarte hat ihren eigenen Rückgängig-Verlauf, ihre Ansicht und ihre Auswahl.
Registerkarten gehören nicht zu einem Arbeitsbereich.

## Zeichnungen…

![Die Liste Zeichnungen mit drei Zeichnungen.](shot:files/drawings-list)

Sie können alle geöffneten Zeichnungen in einer Liste sehen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Zeichnungen…** oder **Fenster > Zeichnungen…**.
- Klicken Sie im Web-Editor mit der rechten Maustaste auf eine Registerkarte.

Wählen Sie eine Zeile aus, um zu ihrer Zeichnung zu wechseln, ziehen Sie den Griff
links in der Zeile, um die Reihenfolge zu ändern, oder wählen Sie **×** aus, um die
Zeichnung zu schließen. Für die Reihenfolge der Registerkarten gibt es unten in der Liste eigene
Befehle **Registerkartenreihenfolge rückgängig machen** und
**Registerkartenreihenfolge wiederholen**.

## Eine Zeichnung schließen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Schließen**.
- Drücken Sie **Strg+W**. Im Web-Editor drücken Sie **Strg+Alt+W**.
- Wählen Sie **×** auf der Registerkarte der Zeichnung aus.

Hat die Zeichnung ungespeicherte Änderungen, fragt ein Dialog „Änderungen an
‚*Name*‘ speichern?“ mit **Abbrechen**, **Änderungen verwerfen** und **Speichern**.

Wenn Sie die letzte Zeichnung schließen, öffnet der Web-Editor eine neue leere
Zeichnung. Unter Linux schließt sich das Fenster.

## Erneut öffnen nach einem Neustart

Alle geöffneten Zeichnungen, ob gespeichert oder nicht, öffnen sich beim nächsten
Start von Capy Canvas wieder, jeweils mit Rückgängig-Verlauf, Ansicht, Auswahl und
letztem Export. Beim Beenden fragt Capy Canvas nicht nach dem Speichern.

Im Web-Editor löscht das Entfernen der Websitedaten ungespeicherte Zeichnungen.

Nachdem Capy Canvas unerwartet beendet wurde, zeigen die wieder geöffneten Zeichnungen
„(wiederhergestellt)“ hinter ihrem Namen, bis Sie sie speichern.

## Neues Fenster

Unter Windows, macOS und Linux sowie auf dem iPad öffnet **Datei > Neues Fenster**
(**Strg+Umschalt+N**) ein weiteres Fenster mit eigenen Zeichnungen.
