---
title: "Farbpipette"
description: "Mit der Farbpipette eine Malfarbe von der Leinwand aufnehmen, und ihre Optionen Stil, Quelle und Abtastgröße."
related: ["color/color-panel", "color/edit-color", "input/touch", "input/keyboard"]
---

Sie können eine Farbe von der Leinwand aufnehmen, um mit ihr zu malen. Nach dem
Aufnehmen kehrt das zuvor verwendete Werkzeug zurück.

## Farbpipette starten

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **I** (**O** in der Tastenkürzelbelegung GIMP-Stil).
- Wählen Sie **Farbpipette** in der Befehlssuche.
- Wählen Sie in den Arbeitsbereichen Malen und Foto **Farbpipette** in der Werkzeugleiste Werkzeuge aus.
- Wählen Sie im Arbeitsbereich Skizze **Farbpipette** auf der Leiste am linken Rand aus, zwischen den Schiebereglern für Größe und Deckkraft.

Um ohne Aufnehmen abzubrechen, drücken Sie **I** oder wählen dieselbe Schaltfläche
erneut aus, drücken **Escape** oder wählen ein anderes Werkzeug oder einen anderen
Pinsel. Auch ein Tippen mit dem Finger ohne Halten beendet die Farbpipette.

## Aufnehmen

Bewegen Sie den Zeiger über die Leinwand, um die Farbe im Bedienfeld Farbe als
Vorschau zu sehen. Die Malfarbe ändert sich erst beim Aufnehmen.

| Eingabe | Vorschau | Aufnehmen |
| --- | --- | --- |
| Maus | Darüberfahren | Klicken |
| Stift | Darüberfahren oder Stift aufsetzen | Stift abheben |
| Finger | Berühren | Finger abheben |

Mit dem Finger liegt der Aufnahmepunkt über der Fingerspitze.

Transparente Pixel liefern keine Farbe, und aufgenommene Farben sind immer deckend.
Farben werden im Farbraum der Zeichnung aufgenommen. In einer HDR-Zeichnung kann eine
aufgenommene Farbe heller als SDR-Weiß sein. Während Sie eine Maske bearbeiten, legt
das Aufnehmen die Maskenfarbe fest.

## Beim Malen aufnehmen

Halten Sie **Alt** gedrückt, während ein Pinsel, Mischen, Verflüssigen, Füllung oder
Farbverlauf ausgewählt ist. Jeder Klick nimmt eine Farbe auf. Lassen Sie **Alt** los,
um zum Werkzeug zurückzukehren.

Die Tastenkürzelbelegungen Krita-Stil und GIMP-Stil verwenden stattdessen **Strg**. Auf
der Seite [Tastenkürzel](/de/docs/input/keyboard/) heißt dieses Tastenkürzel **Farbe
aufnehmen bei gedrückter Taste**. Auf der Seite **Stift und Eingabe** können Sie der
Farbpipette außerdem eine Stifttaste zuweisen ([Stift](/de/docs/input/pen/)).

## Einen Finger halten

Halten Sie einen Finger still auf der Leinwand, um mit jedem Werkzeug das Aufnehmen zu
starten. Heben Sie den Finger ab, um die Farbe aufzunehmen und zum Werkzeug
zurückzukehren.

- Im Web und auf dem iPad dauert das Halten eine halbe Sekunde. Android, Windows und Linux verwenden die im System eingestellte Dauer für langes Drücken.
- Bewegen Sie den Finger, bevor die Farbpipette startet, wird das Halten abgebrochen.
- Das Halten funktioniert nur mit einem einzigen Finger auf der Leinwand, und wenn nichts anderes läuft.
- Tippen Sie während des Haltens mit einem zweiten Finger, um **Quelle** zwischen **Sichtbare Farbe** und **Ausgewählte Ebene** umzuschalten.

## Stil

Wählen Sie während des Aufnehmens **Stil** in der Leiste Werkzeugoptionen (im Arbeitsbereich Foto
oben im Fenster). Beide Optionen heißen in der deutschen Oberfläche **Farbpipette**:

- Die erste zeigt eine runde Lupe. Die obere Hälfte ihres Rings zeigt die aufgenommene Farbe, die untere Hälfte die aktuelle Farbe.
- Die zweite zeigt einen Pipettenzeiger, dessen Spitze auf dem Aufnahmepunkt liegt.

![Die Lupe der Farbpipette über einem roten Strich, mit aufgenommener und aktueller Farbe im Ring.](shot:color/eyedropper-loupe)

Touch verwendet immer die Lupe. Wenn Sie im Arbeitsbereich Skizze **Farbpipette** auswählen, wird
**Stil** auf die Lupe gesetzt. Ein kleines Ebenensymbol erscheint, wenn **Quelle** auf
**Ausgewählte Ebene** steht.

## Quelle und Abtastgröße

Legen Sie diese Optionen während des Aufnehmens im Bedienfeld Werkzeug oder in der
Leiste Werkzeugoptionen fest. Im Arbeitsbereich Skizze doppelklicken oder doppeltippen Sie auf
**Farbpipette**, um sie zu öffnen.

![Das Bedienfeld Werkzeug während des Aufnehmens mit Quelle und Abtastgröße.](shot:color/eyedropper-settings)

### Quelle

**Sichtbare Farbe** (Standard) nimmt die Zeichnung so auf, wie Sie sie sehen,
**Ausgewählte Ebene** die eigene Farbe der ausgewählten Ebene, vor Deckkraft, Masken
und Beschneidung. **Ausgewählte Ebene** steht nur bei einer nicht gesperrten Malebene
zur Wahl.

### Abtastgröße

**Einzelnes Pixel** (Standard), **Kreis mit 5 px**, **Kreis mit 15 px**, **Kreis mit
51 px** oder **Kreis mit 101 px**. Ein Kreis mittelt die Pixel darin.
