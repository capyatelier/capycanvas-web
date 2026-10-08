---
title: "Einstellungen"
description: "Der Dialog Einstellungen und die Einstellungen auf seinen Seiten Darstellung, Leinwand, Farbe und Info."
related: ["input/pen", "input/keyboard", "customize/zen", "color-management/color-spaces"]
---

Im Dialog **Einstellungen** können Sie Einstellungen für die ganze App ändern. Jede
Änderung wird sofort angewendet und gespeichert.

![Der Dialog Einstellungen auf der Seite Darstellung.](shot:preferences/appearance)

## Einstellungen öffnen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bearbeiten > Einstellungen**. Unter macOS wählen Sie **Settings…** im App-Menü.
- Drücken Sie **Strg+,**.
- Wählen Sie in den Arbeitsbereichen Malen und Foto die Zahnradschaltfläche am rechten Ende der Titelleiste aus.
- Geben Sie „Einstellungen“ in die [Befehlssuche](/de/docs/start/command-search/) ein.

Die Einstellungen öffnen sich auf der Seite **Darstellung**. **Hilfe > Tastenkürzel**
öffnet sie auf der Seite **Tastenkürzel**, **Hilfe > Über {appName}** auf der Seite
**Info**.

Solange die Einstellungen geöffnet sind, bewirken Leinwand-Tastenkürzel, Stifttasten
und Fingertipps nichts.

## Einstellungen durchsuchen

Wählen Sie **Einstellungen durchsuchen** oben in der Seitenleiste aus, oder beginnen
Sie irgendwo außerhalb eines Textfelds zu tippen.

Die Suche findet auch Tastenkürzel, Stifttasten und Fingertipps. Wenn Sie ein
Tastenkürzel auswählen, öffnet sich sein Editor. In anderen Sprachen als Englisch
findet die Suche auch die englischen Namen.

![Suchergebnisse für „cursor“ in der Seitenleiste der Einstellungen.](shot:preferences/search)

## Eine Einstellung zurücksetzen

Im Web und in der Linux-App klicken Sie mit der rechten Maustaste auf eine Einstellung
oder halten sie mit Finger oder Stift gedrückt und wählen **Auf Standard
zurücksetzen**. Der Menüeintrag zeigt den Standardwert. Hat die Einstellung bereits
ihren Standardwert, ist er nicht verfügbar.

Auch das Leeren eines Zahlenfelds oder eines Hex-Farbfelds stellt den Standardwert
wieder her.

![Das Menü Auf Standard zurücksetzen der Einstellung Grundfarbe des dunklen Farbschemas.](shot:preferences/reset-menu)

## Darstellung

Grundfarben und Akzentfarbe ändern nur die Oberfläche, nie die Zeichnung.

### Sprache

Legt die Sprache der Oberfläche fest. **Systemsprache verwenden** ist der Standard,
und jede Sprache ist in ihrer eigenen Sprache aufgeführt.

### Farbschema

Wählen Sie **System** (Standard), **Hell** oder **Dunkel**. Der Befehl **Dunkler
Modus** in der Befehlssuche wechselt zwischen **Hell** und **Dunkel**.

### Bedienfeldtransparenz

Legt fest, wie viel vom weichgezeichneten Bildinhalt durch Bedienfelder und Leisten
scheint: **Aus**, **Niedrig** (Standard), **Mittel** oder **Hoch**. Siehe
[Bedienfelder und Spalten](/de/docs/customize/panels/).

### Grundfarbe des dunklen Farbschemas

Legt das Grau der Oberfläche im dunklen Farbschema fest. Wählen Sie ein Farbfeld oder
**Benutzerdefiniert**, um eine sechsstellige Hex-Farbe einzugeben.

### Grundfarbe des hellen Farbschemas

Legt das Grau der Oberfläche im hellen Farbschema fest, mit denselben Optionen.

### Akzentfarbe

**System** verwendet die Akzentfarbe des Betriebssystems. Diese Option ist unter
Linux, Windows, macOS und Android der Standard und wird im Web und auf dem iPad nicht
angeboten. Die anderen Optionen sind
**Blau** (Standard im Web und auf dem iPad), **Blaugrün**, **Grün**, **Gelb**,
**Orange**, **Rot**, **Rosa**, **Purpur**, **Schiefer** und **Benutzerdefiniert**.

### Capy im Zen-Modus anzeigen

Behält die Capy-Schaltfläche im [Zen-Modus](/de/docs/customize/zen/) auf dem
Bildschirm. Standardmäßig aktiviert.

### Bedienfelder an den Bildschirmrändern einblenden

Zeigt im Zen-Modus die ausgeblendeten Bedienelemente, solange der Zeiger nahe an einem
Bildschirmrand mit ausgeblendeten Bedienelementen ist. Standardmäßig deaktiviert.

### Schaltflächensymbol

Legt das Bild der Capy-Schaltfläche fest: **Blick nach oben** (Standard), **Blick nach
vorn**, **Badend** oder **Schlafend**.

## Leinwand

### Verschiebegeschwindigkeit beim Scrollen

Skaliert, wie weit Mausrad, Trackpad und der linke Stick eines Gamecontrollers die
Leinwand verschieben, von 0.25 × bis 4.00 × (Standard 1.00 ×).

### Zoomgeschwindigkeit beim Scrollen

Skaliert das Zoomen mit **Strg** und dem Mausrad oder mit dem rechten Stick eines
Gamecontrollers, von 0.25 × bis 4.00 × (Standard 1.00 ×).

### Durchreichen für neue Gruppen verwenden

Setzt neue Gruppen auf [Durchreichen](/de/docs/layers/blend-modes/). Standardmäßig
deaktiviert. Vorhandene Gruppen ändern sich nicht.

## Farbe

Die Einstellungen unter **Neue Zeichnungen** gelten für
[Zeichnungen, die Sie danach erstellen](/de/docs/files/new/). Die Einstellungen unter
**Fotos öffnen** gelten für Fotos, die Sie öffnen.

![Die Seite Farbe der Einstellungen.](shot:preferences/color)

### Farbraum

Wählen Sie **sRGB** (Standard), **Display P3**, **Adobe RGB (1998)** oder **ProPhoto
RGB**.

### Farbtiefe

Wählen Sie **8-Bit-SDR** (Standard), **16-Bit-SDR**, **16-Bit-Gleitkomma-HDR** oder
**32-Bit-Gleitkomma-HDR**.

### Hintergrund

Wählen Sie **Weiß** (Standard) oder **Transparent**.

### Bearbeitungsgenauigkeit

**Quellfarbtiefe** (Standard) behält die eigene Farbtiefe eines Fotos. **16 Bit**
öffnet 8-Bit-Fotos als 16 Bit, und Gleitkomma-Fotos bleiben Gleitkomma.

### RGB und Graustufen ohne Profil

Legt fest, wie Fotos ohne Farbprofil geöffnet werden: **sRGB annehmen** (Standard)
oder **Nachfragen**. Fotos mit Profil behalten es.

### Profile verwalten…

Öffnet die Farbprofilbibliothek. Siehe [Farbraum, Farbtiefe und
Verrechnung](/de/docs/color-management/color-spaces/).

## Stift und Eingabe

Die Einstellungen auf dieser Seite sind unter [Stift](/de/docs/input/pen/) und
[Touchgesten](/de/docs/input/touch/) beschrieben.

## Tastenkürzel

Tastenkürzelbelegung, Zusatztasten und Tastenkürzel auf dieser Seite sind unter
[Tastenkürzel](/de/docs/input/keyboard/) beschrieben.

## Info

Die Seite **Info** zeigt die Zeilen **Version**, **Anwendungslizenz**,
**Leinwanddarstellung**, **Website**, **Quellcode** und **Gewidmet**.

## Wo Einstellungen gespeichert werden

Jedes Gerät hat seine eigenen Einstellungen. In der Web-App gehören die Einstellungen
zum Browser und gelten für alle seine Tabs. Um Tasten, Zusatztasten, Stifttasten und
Fingertipps auf ein anderes Gerät zu übertragen, exportieren Sie eine
Tastenkürzelbelegung auf der Seite [Tastenkürzel](/de/docs/input/keyboard/).
