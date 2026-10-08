---
title: "Rückgängig und Wiederholen"
description: "Änderungen an einer Zeichnung rückgängig machen und wiederholen sowie der separate Verlauf für Layoutänderungen."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

Sie können Änderungen an einer Zeichnung Schritt für Schritt rückgängig machen und
die rückgängig gemachten Schritte wiederholen. Jede geöffnete Zeichnung hat ihren
eigenen Verlauf.

![Die Schaltflächen Rückgängig und Wiederholen in der Werkzeugleiste Befehle.](shot:start/undo-commands)

## Rückgängig

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bearbeiten > Rückgängig**.
- Drücken Sie **Strg+Z**.
- Wählen Sie **Rückgängig** in der Werkzeugleiste Befehle aus. Im Arbeitsbereich Skizze liegt **Rückgängig** auf der Leiste am linken Bildschirmrand.
- Tippen Sie mit zwei Fingern auf die Leinwand.

## Wiederholen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bearbeiten > Wiederholen**.
- Drücken Sie **Strg+Umschalt+Z** oder **Strg+Y**.
- Wählen Sie **Wiederholen** in der Werkzeugleiste Befehle aus, im Arbeitsbereich Skizze auf der Leiste am linken Rand.
- Tippen Sie mit drei Fingern auf die Leinwand.

Eine neue Änderung nach Rückgängig verwirft die Schritte, die Sie wiederholen könnten.

## Was als Schritt zählt

Jeder Strich, jede Füllung, jede Filteränderung, jede Transformation, jedes
Zuschneiden, jede Änderung der Leinwandgröße und jede Änderung der Auswahl ist ein
Schritt, ebenso jede Änderung an einer Ebene. Änderungen an Ansicht, Werkzeug, Pinsel,
Farbe und Layout sind keine Schritte.

Während Sie ein Bild platzieren, eine Ebene transformieren oder das Werkzeug
Zuschneiden verwenden, bricht Rückgängig diesen Vorgang ab, statt einen Schritt
zurückzugehen.

## Länge des Verlaufs

Jede Zeichnung speichert bis zu 256 Schritte. Die ältesten Schritte fallen zuerst weg.

## Speichern und erneut öffnen

Speichern leert den Verlauf nicht. Eine Zeichnung, die Sie aus einer `.capy`-Datei
öffnen, beginnt mit einem leeren Verlauf. Zeichnungen, die sich beim Neustart von
{appName} wieder öffnen, behalten dagegen ihre Rückgängig-Schritte.

## Layoutänderungen

Änderungen an Bedienfeldern, Werkzeugleisten, der Titelleiste und Arbeitsbereichen
haben einen eigenen Verlauf. **Bearbeiten > Rückgängig** macht nie eine Layoutänderung
rückgängig.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Layoutänderung rückgängig machen** oder **Fenster > Layoutänderung wiederholen**.
- Drücken Sie **Strg+Alt+Z** oder **Strg+Alt+Umschalt+Z**.

Jeder Arbeitsbereich hat seinen eigenen Layoutverlauf, und der Verlauf bleibt über
einen Neustart hinweg erhalten. **Fenster > Arbeitsbereiche > Layoutverlauf…** listet
frühere Layouts des aktuellen Arbeitsbereichs auf.
