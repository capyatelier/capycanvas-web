---
title: "Bilder exportieren"
description: "Eine auf eine Ebene reduzierte Bildkopie einer Zeichnung mit dem Dialog Bild exportieren und mit Erneut exportieren ausgeben."
related: ["files/open-save", "color-management/hdr", "color-management/color-spaces"]
---

Sie können eine auf eine Ebene reduzierte Bildkopie der Zeichnung exportieren. Das
Exportieren ändert die `.capy`-Zeichnung nicht und zählt nicht als Speichern.

## Ein Bild exportieren

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Exportieren…**.
- Drücken Sie **Strg+Umschalt+E**.

Der Dialog **Bild exportieren** öffnet sich mit dem Ziel **Web / Teilen**. Wählen Sie
**Datei auswählen…** und dann einen Speicherort aus. Vorgeschlagen wird der Name der
Zeichnung mit der Endung des Formats, etwa „Unbenannt.png“. In Firefox und Safari
öffnet sich stattdessen der Dialog **Datei herunterladen** (siehe
[Öffnen und Speichern](/de/docs/files/open-save/)).

Der Dateiname muss auf die Endung des Formats enden. **Exportieren…** ist nicht
verfügbar, während ein Zuschnitt oder eine Transformation geöffnet ist.

## Einstellungen

![Der Dialog Bild exportieren mit Ziel auf Web / Teilen.](shot:files/export-dialog)

Manche Einstellungen erscheinen nur bei bestimmten Formaten.

### Ziel

Legt alle anderen Einstellungen auf einmal fest. Gespeicherte Exportvorgaben stehen
nach diesen integrierten Zielen:

- **Web / Teilen**: ein 8-Bit-sRGB-PNG in Originalgröße.
- **Bild mit erweitertem Farbraum**: dasselbe in Display P3.
- **Weitere Bearbeitung**: ein 16-Bit-TIFF im Farbraum der Zeichnung.
- **Benutzerdefiniert**: beginnt wie **Web / Teilen**.

### Dynamikumfang

**SDR** bei einer SDR-Zeichnung oder eine Auswahl von HDR-Formaten bei einer
HDR-Zeichnung (siehe HDR-Export weiter unten).

### HDR-Farben außerhalb des Bereichs beschneiden

Beschneidet Farben jenseits des Bereichs von HDR-PNG, HDR-JPEG und HDR-AVIF.
Erscheint nur bei diesen Formaten.

### Format

**PNG-Bild**, **TIFF-Bild**, **JPEG-Bild** oder **WebP · verlustfrei** (siehe
Formatgrenzen weiter unten).

### Ausgabeprofil

**sRGB**, **Display P3**, **Adobe RGB (1998)** oder **ProPhoto RGB**, dazu
„Original: *Name*“ für jede Fotoebene mit eigenem eingebettetem Profil.

### Farbtiefe

**8 Bit** oder **16 Bit**.

### Transparenz

**Beibehalten**, **Weißer Hintergrund** oder **Schwarzer Hintergrund**.

### Wiedergabeabsicht

**Relativ farbmetrisch** (Standard), **Wahrnehmungsbasiert**, **Sättigung** oder
**Absolut farbmetrisch**.

### Dithering

**Keine** oder **Stochastisch (8-Bit-Ausgabe)**.

### Qualität

Die Komprimierungsqualität von 1 bis 100, Standard 90. Erscheint bei JPEG, HDR-JPEG
und HDR-AVIF.

### Pixelgröße

**Originalgröße** oder **In Grenzen einpassen**. **In Grenzen einpassen** fügt
**Maximale Breite (px)** und **Maximale Höhe (px)** hinzu und verkleinert das Bild
ohne Änderung der Proportionen, bis es hineinpasst.

### Auflösungsmetadaten

**Original behalten**, **Pixel pro Zoll** oder **Weglassen**. **Pixel pro Zoll** fügt
ein Feld von 1 bis 65535 hinzu, Standard 300.

### Metadaten

**Alle**, **Urheberrecht & Kontakt** oder **Keine**. Bei **Alle** ist **Standort
entfernen** standardmäßig aktiviert. Diese Zeilen erscheinen nur bei Zeichnungen, die
aus einem Foto mit Kamera- oder Urheberrechtsangaben geöffnet wurden.

### ICC-Profil importieren… und Gespeicherte Profile…

**ICC-Profil importieren…** fügt **Ausgabeprofil** eine `.icc`- oder `.icm`-Datei
mit bis zu 16 MiB hinzu. **Gespeicherte Profile…** öffnet die **Farbprofilbibliothek**.

### Vorgabename und Vorgabeschaltflächen

**Vorgabe speichern** speichert die Einstellungen als neues Ziel unter **Vorgabename**.
**Vorgabe aktualisieren** und **Vorgabe löschen** ändern oder entfernen die ausgewählte
gespeicherte Vorgabe. **Ziel zurücksetzen** stellt die Einstellungen eines integrierten
Ziels wieder her.

### Ausgabe ansehen

Zeigt das exportierte Bild neben dem Bildinhalt, beschriftet mit **Bildinhalt** und
**Ausgabe**, mit einer Warnung, wenn Farben außerhalb des Ausgabefarbumfangs liegen.
Jede Änderung einer Einstellung löscht die Vorschau.

### Datei auswählen…

Fragt, wo das Bild gespeichert werden soll.

## Formatgrenzen

- JPEG und WebP gibt es nur mit 8 Bit.
- JPEG kann keine Transparenz erhalten.
- WebP erlaubt bis zu 16.384 Pixel pro Seite.
- Mit einem Graustufen-Ausgabeprofil ist WebP nicht verfügbar.
- Mit einem CMYK-Ausgabeprofil sind nur TIFF und JPEG verfügbar, ohne Transparenz.

Optionen, die nicht zu den übrigen Einstellungen passen, sind abgeblendet.

## Exportvorgaben

Nach einem Export behält ein integriertes Ziel die verwendeten Einstellungen. Wenn
Sie mit einer gespeicherten Vorgabe exportieren, bleiben die Einstellungen unter
**Benutzerdefiniert** erhalten, und die Vorgabe selbst ändert sich nur mit **Vorgabe
aktualisieren**.

Ein Vorgabename hat bis zu 80 Zeichen, und Sie können bis zu 64 Vorgaben behalten.
Vorgaben gelten für alle Zeichnungen.

## HDR-Export

![Der Dialog Bild exportieren für eine HDR-Zeichnung mit HDR-JPEG · Gain Map nach Ausgabe ansehen.](shot:files/export-hdr-preview)

Bei einer Zeichnung mit 16 oder 32 Bit Gleitkomma bietet **Dynamikumfang** diese Optionen:

| Option | Schreibt |
| --- | --- |
| **SDR-Wiedergabe** | Die SDR-Fassung der Zeichnung mit den SDR-Einstellungen |
| **HDR-JPEG · Gain Map** | Eine `.jpg`-Datei mit Gain Map |
| **HDR-AVIF · Gain Map mit Transparenz** | Eine `.avif`-Datei mit Gain Map und Transparenz |
| **HDR-PNG · BT.2020 PQ** | Eine `.png`-Datei, kodiert in BT.2020 PQ, mit Transparenz |
| **OpenEXR · 32-Bit-Gleitkomma** | Eine `.exr`-Datei im Farbraum der Zeichnung, mit Transparenz |

**SDR-Wiedergabe** verwendet die SDR-Fassung, die Sie mit
[SDR-Softproof](/de/docs/color-management/hdr/) festlegen. OpenEXR speichert keine
Kamera- oder Urheberrechtsangaben. Bei einer HDR-Zeichnung heißt **Weitere
Bearbeitung** **Weitere Bearbeitung (SDR)** und verwendet OpenEXR.

Bei HDR-JPEG und HDR-AVIF fügt **Ausgabe ansehen** die **Wiedergabevorschau** hinzu,
mit **HDR-Rekonstruktion · SDR-Vorschau** und **Kodierte SDR-Basis**.

Findet die Vorschau Farben jenseits des Bereichs von HDR-PNG, -JPEG oder -AVIF, ist
**Datei auswählen…** nicht verfügbar, bis Sie **HDR-Farben außerhalb des Bereichs
beschneiden** aktivieren oder OpenEXR wählen.

## Erneut exportieren

**Datei > Erneut exportieren** wiederholt den letzten Export der Zeichnung mit
denselben Einstellungen und derselben Datei, ohne den Dialog. Bis Sie die Zeichnung
einmal exportiert haben, ist der Befehl nicht verfügbar.

Jede Zeichnung behält ihren letzten Export, auch nach einem Neustart. In Firefox und
Safari zeigt **Erneut exportieren** den Dialog **Datei herunterladen**.

## Andere Plattformen

Unter Linux sind die Einstellungen auf die Seiten **Größe**, **Farbe & Transparenz**
und **Vorgabe** verteilt, und manche Beschriftungen weichen ab. Auch die Dialoge auf
dem iPad und unter macOS verwenden eigene Beschriftungen.
