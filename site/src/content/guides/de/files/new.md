---
title: "Neue Zeichnungen"
description: "Der Dialog Neue Zeichnung und die Ebenen, mit denen eine neue Zeichnung beginnt."
related: ["color-management/color-spaces", "layers/types", "files/open-save"]
---

Im Dialog **Neue Zeichnung** können Sie eine Zeichnung beginnen. Die neue Zeichnung
öffnet sich in einer eigenen Registerkarte, und die aktuelle Zeichnung bleibt geöffnet.

## Dialog Neue Zeichnung öffnen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Datei > Neu…**.
- Drücken Sie **Strg+N** (nicht im Web-Editor).
- Wählen Sie in den Arbeitsbereichen Malen und Foto **Neu…** in der Werkzeugleiste Befehle aus.

Wählen Sie die unten beschriebenen Einstellungen und dann **Erstellen** aus.

**Neu…** ist nicht verfügbar, während ein Zuschnitt oder eine Transformation geöffnet
ist. Sind bereits zu viele Zeichnungsdaten geöffnet, öffnet sich die neue Zeichnung
erst, wenn Sie einige Zeichnungen schließen.

## Einstellungen

![Der Dialog Neue Zeichnung mit der Vorgabe Standardzeichnung.](shot:files/new-dialog)

### Vorgabe

Füllt alle Felder aus einer integrierten oder einer von Ihnen gespeicherten Vorgabe.
Wenn Sie danach ein Feld ändern, wechselt **Vorgabe** zu **Benutzerdefiniert**.

Alle integrierten Vorgaben haben 2048 × 1536 Pixel und einen weißen Hintergrund.

| Vorgabe | Farbraum | Farbtiefe | Verrechnung |
| --- | --- | --- | --- |
| **Standardzeichnung** | sRGB | 8-Bit-SDR | Wahrnehmungsbasiert |
| **Erweiterter Farbraum** | Display P3 | 8-Bit-SDR | Wahrnehmungsbasiert |
| **Fotobearbeitung** | ProPhoto RGB | 16-Bit-SDR | Wahrnehmungsbasiert |
| **HDR-Zeichnung** | sRGB | 16-Bit-Gleitkomma-HDR | Lineares Licht |

### Gespeicherte Vorgabe entfernen

Löscht die ausgewählte gespeicherte Vorgabe. Integrierte Vorgaben lassen sich nicht entfernen.

### Breite (px) und Höhe (px)

Von 1 bis 8192 Pixel. Die Felder akzeptieren Rechenausdrücke wie „160*2“.

### Farbraum

**sRGB**, **Display P3**, **Adobe RGB (1998)** oder **ProPhoto RGB** (siehe
[Farbraum, Farbtiefe und Verrechnung](/de/docs/color-management/color-spaces/)).
Bei **ProPhoto RGB** und **8-Bit-SDR** empfiehlt der Dialog 16-Bit-SDR.

### Farbtiefe

**8-Bit-SDR**, **16-Bit-SDR**, **16-Bit-Gleitkomma-HDR** oder **32-Bit-Gleitkomma-HDR**.
Eine Gleitkomma-Farbtiefe ergibt eine HDR-Zeichnung.

### Verrechnung

**Wahrnehmungsbasiert** oder **Lineares Licht**. Bei einer Gleitkomma-Farbtiefe ist
**Verrechnung** fest auf **Lineares Licht** eingestellt.

### Hintergrund

**Weiß** oder **Transparent**. **Transparent** blendet die Ebene **Papier** aus.

### Vorgabename

Speichert die Einstellungen unter diesem Namen als Vorgabe, wenn Sie **Erstellen**
auswählen. Ein Name hat bis zu 64 Zeichen, und Sie können bis zu 64 Vorgaben behalten.

### Diese Einstellungen für neue Zeichnungen verwenden

Wenn aktiviert, öffnet sich der Dialog beim nächsten Mal mit diesen Einstellungen.
Farbraum, Farbtiefe und Hintergrund werden außerdem zu den Einstellungen unter
**Neue Zeichnungen** in den [Einstellungen](/de/docs/preferences/).

## Die ersten Ebenen

![Das Bedienfeld Ebenen einer neuen Zeichnung mit Aktuelle Tinte über Papier.](shot:files/new-layers)

Eine neue Zeichnung hat zwei Ebenen. Ausgewählt ist **Aktuelle Tinte**, eine leere
Malebene über **Papier**, einer weißen Füllebene (siehe
[Ebenentypen](/de/docs/layers/types/)). Ebenen, die Sie später hinzufügen, heißen
„Ebene“ mit einer Nummer.

## Andere Plattformen

Auf dem iPad, unter macOS und unter Android ersetzen ein Feld **Vorgabe speichern…**
und eine Option **Standardwerte verwenden** die Elemente **Vorgabename** und **Diese
Einstellungen für neue Zeichnungen verwenden**. Auf dem iPad und unter macOS gibt es
keine Schaltfläche **Gespeicherte Vorgabe entfernen**.

Unter Linux öffnet **Vorgabe speichern…** einen eigenen Dialog für den Namen, und
**Farbraum**, **Farbtiefe** und **Verrechnung** sind unter **Farbe** zusammengefasst.
