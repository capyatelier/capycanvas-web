---
title: "Befehlssuche"
description: "Befehle, Werkzeuge, Pinsel und Einstellungen über ihren Namen finden und ausführen."
related: ["input/keyboard", "start/undo", "customize/toolbars"]
---

Sie können Befehle, Werkzeuge, Pinsel, Ebeneneigenschaften, Arbeitsbereiche und
Farben finden und ausführen, indem Sie ihren Namen eingeben.

## Befehlssuche öffnen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bearbeiten > Befehle suchen…**.
- Drücken Sie **Strg+K** oder **Strg+Umschalt+P**. Im Web-Editor funktioniert nur **Strg+K**.
- Wenn Sie die Befehlssuche zu einer Werkzeugleiste hinzugefügt haben, wählen Sie ihre Schaltfläche aus (siehe [Werkzeugleisten und Titelleiste](/de/docs/customize/toolbars/)).

Andere Tastenkürzelvorgaben verwenden andere Tasten (siehe [Tastenkürzel](/de/docs/input/keyboard/)).
Die Tasten funktionieren auch während der Eingabe in einem Textfeld.

Das Suchfeld öffnet sich oben im Fenster und ist leer.

Während eines Strichs, bei geöffneten **Einstellungen** und während Sie die
Titelleiste anpassen, ist die Befehlssuche nicht verfügbar.

## Vorschläge

![Die Befehlssuche mit leerem Feld und den Einträgen Rückgängig, Leinwand einpassen, Speichern, Einstellungen und Tastenkürzel.](shot:start/command-search-suggestions)

Bei leerem Feld zeigt die Liste bis zu fünf Einträge: zuerst die zuletzt aus der
Suche ausgeführten, dann **Rückgängig**, **Leinwand einpassen**, **Speichern**,
**Einstellungen** und **Tastenkürzel**. Einträge, die gerade nicht ausführbar sind,
fehlen.

Als zuletzt verwendet zählen nur Einträge, die Sie aus der Suche ausführen. Die
Liste wird geleert, wenn Sie {appName} beenden.

## Suchen

Geben Sie einen Teil eines Namens ein. Die Liste zeigt bis zu acht Treffer, exakte
Namen zuerst.

- Groß- und Kleinschreibung spielen keine Rolle. Akzente und Umlaute müssen übereinstimmen.
- Auch Buchstaben in der richtigen Reihenfolge passen: „lw einp“ findet **Leinwand einpassen**.
- Englische Namen werden in jeder App-Sprache gefunden.
- Manche Einträge passen auch zu anderen Wörtern: „settings“ findet **Einstellungen**, „color picker“ findet **Farbpipette** und „resize“ findet **Transformieren**.
- Bei der Eingabe von „brush“ oder „brushes“ fehlen die einzelnen Pinsel.

Wenn nichts passt, zeigt die Liste „Keine passenden Befehle“.

## Was Sie finden können

- Jeden Eintrag in den Menüs.
- Jedes Werkzeug und jede Werkzeugvariante, etwa **Lineal › Radial**.
- Jeden Pinsel und jeden Pinselsatz als „Pinsel *Name*“.
- Die Einstellungen des aktuellen Werkzeugs, etwa **Pinselgröße…**.
- Die Eigenschaften der ausgewählten Ebene, etwa **Ebenendeckkraft…**.
- Jeden Arbeitsbereich.
- **Vordergrundfarbe**, **Hintergrundfarbe**, **Transparente Farbe**, **Vorübergehende Farbe**, **Vorder- und Hintergrundfarbe tauschen**, **Schwarz** und **Weiß**.
- Jedes Bedienfeld und jede Werkzeugleiste im Menü **Fenster**.

## Ergebnisse

![Die Befehlssuche mit der Eingabe „undo“, der abgeblendeten Zeile Rückgängig und „Nichts zum Rückgängigmachen“ unten.](shot:start/command-search-unavailable)

Jede Zeile zeigt den Namen und rechts das Tastenkürzel. Ein Häkchen kennzeichnet
eine aktivierte Einstellung und den aktuellen Arbeitsbereich.

Die Zeile unten im Suchfeld beschreibt den hervorgehobenen Eintrag mit seinem
Hilfetext, seiner Position im Menü oder seinem Wertebereich. Ein Eintrag, der gerade
nicht ausführbar ist, erscheint abgeblendet, und die untere Zeile nennt den Grund,
etwa „Nichts zum Rückgängigmachen“.

## Ein Ergebnis ausführen

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **↑** oder **↓**, um eine Zeile hervorzuheben, und dann **Eingabe**.
- Wählen Sie eine Zeile aus.

Die Suche schließt sich, und der Eintrag wird ausgeführt. Ist der Eintrag nicht
ausführbar, bleibt die Suche geöffnet und zeigt den Grund.

## Einen Wert eingeben

![Die Befehlssuche fragt einen Wert für Pinselgröße… ab, mit der Einheit px sowie dem aktuellen Wert und dem Bereich unten.](shot:start/command-search-typed-value)

Einträge für Einstellungen mit einer Zahl, etwa **Pinselgröße…** und
**Ebenendeckkraft…**, fragen einen Wert ab. Die untere Zeile zeigt den aktuellen
Wert und den Bereich.

So legen Sie einen Wert fest:

1. Wählen Sie den Eintrag aus, oder heben Sie ihn hervor und drücken Sie **Eingabe**.
2. Geben Sie den Wert ein und drücken Sie **Eingabe**.

Sie können Rechenausdrücke wie „12 * 2“ oder „sqrt(9)“ eingeben, außerdem
Prozentwerte wie „50%“. Ein Wert außerhalb des Bereichs wird auf die nächste Grenze
gesetzt. Mit **Esc** kehren Sie zu den Ergebnissen zurück.

## Rückgängig aus einem Textfeld oder einer Palette

Wenn Sie die Befehlssuche aus einem Textfeld öffnen, werden **Rückgängig** und
**Wiederholen** zu **Textbearbeitung rückgängig machen** und **Textbearbeitung
wiederholen**. Diese lassen sich nicht aus der Suche ausführen. Um die Eingabe im
Feld rückgängig zu machen, schließen Sie zuerst die Suche.

Aus dem Bedienfeld **Paletten** geöffnet, listet die Suche stattdessen **Farbanordnung
rückgängig machen** und **Farbanordnung wiederholen**. Diese machen Änderungen an der
Farbreihenfolge der Palette rückgängig, nicht an der Zeichnung.

## Befehlssuche schließen

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **Esc**.
- Wählen Sie **×** rechts im Feld aus.
- Klicken oder tippen Sie außerhalb des Suchfelds.

Ein Klick außerhalb des Suchfelds malt nicht auf die Leinwand.
