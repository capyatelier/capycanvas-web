---
title: "Pinsel speichern und zurücksetzen"
description: "Wie Änderungen an Pinseln erhalten bleiben und wie Sie Pinsel auf ihre integrierten Einstellungen zurücksetzen."
related: ["brushes/basics", "drawing/brush-tools", "customize/workspaces"]
---

Sie können jede Einstellung eines integrierten Pinsels ändern und später auf ihren
ursprünglichen Wert zurücksetzen.

## Änderungen an Pinseln

Jede Änderung an einer Pinseleinstellung wird sofort mit ihrer Vorgabe gespeichert.

- Änderungen gelten in allen Arbeitsbereichen, auch in selbst erstellten.
- Änderungen bleiben nach einem Neustart von {appName} erhalten.
- Pinseleinstellungen werden nicht in `.capy`-Dateien gespeichert.
- Eine Änderung an einer Pinseleinstellung ist kein Rückgängig-Schritt, und der Layoutverlauf listet keine Pinseländerungen.
- Ein Pinsel speichert keine Farbe. Er malt mit der aktuellen Farbe im [Bedienfeld Farbe](/de/docs/color/color-panel/).

## Eine Einstellung zurücksetzen

Sie können eine einzelne Einstellung auf den integrierten Wert des Pinsels
zurücksetzen. Doppelklicken (oder doppeltippen) Sie dazu in der Leiste
Werkzeugoptionen auf die Beschriftung oder das Symbol der Einstellung
([Größe, Deckkraft und Fluss](/de/docs/brushes/basics/)).

Das Bedienfeld **Werkzeug** hat keine Funktion zum Zurücksetzen. Um **Farbmischung**
zurückzusetzen, wählen Sie **Oklab-Mischung** aus, die integrierte Option aller
Mischpinsel.

## Alle Pinsel zurücksetzen…

Sie können alle Pinsel auf ihre integrierten Einstellungen zurücksetzen. Wählen Sie
**Fenster > Arbeitsbereiche > Alle Pinsel zurücksetzen…** und im Dialog dann
**Pinsel zurücksetzen** aus.

![Der Dialog Alle Pinsel zurücksetzen? mit der Schaltfläche Pinsel zurücksetzen.](shot:brushes/reset-all-dialog)

Alle Vorgaben werden zurückgesetzt, auch solche, die Sie nie verwendet haben. Farben,
das ausgewählte Werkzeug, das Layout und die Zeichnung bleiben unverändert, und
Markierungen auf den Schiebereglern im Arbeitsbereich Skizze bleiben erhalten. Das Zurücksetzen
aller Pinsel lässt sich nicht rückgängig machen.

## Pinsel erstellen und importieren

Sie können Pinsel weder erstellen, duplizieren, umbenennen, löschen, importieren noch
exportieren. Die integrierten Vorgaben sind die einzigen Pinsel, und es gibt kein
Dateiformat für Pinsel.
