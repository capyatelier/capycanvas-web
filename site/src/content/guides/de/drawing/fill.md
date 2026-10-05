---
title: "Füllwerkzeuge"
description: "Bereiche, freihändige Formen und umschlossene Flächen einer Ebene mit der aktuellen Farbe füllen."
related: ["drawing/gradient", "layers/settings", "selections/working", "drawing/brush-tools"]
---

Mit **Füllung**, **Lassofüllung** und **Umranden und füllen** können Sie Teile der
ausgewählten Ebene mit der aktuellen Farbe füllen. Jede Füllung ist ein
Rückgängig-Schritt, und **Alphaschutz** wird berücksichtigt.

Füllungen malen nur auf den Bildinhalt einer Ebene, nie auf eine Ebenenmaske oder die
Maske eines Filters. Auf einer Ebene, auf die ein Pinsel nicht malen kann, malt auch
eine Füllung nichts, und ein Hinweis nennt den Grund
([Pinselwerkzeuge](/de/docs/drawing/brush-tools/)).

## Ein Füllwerkzeug auswählen

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **F**, um Füllung auszuwählen. Die beiden anderen Werkzeuge haben standardmäßig keine Taste.
- Wählen Sie im Arbeitsbereich Malen **Füllung** in der Werkzeugleiste Werkzeuge aus. Klicken Sie mit der rechten Maustaste auf die Schaltfläche oder halten Sie sie gedrückt, um ein anderes Füllwerkzeug zu wählen.
- Klicken Sie im Arbeitsbereich Foto mit der rechten Maustaste auf die Schaltfläche für Verlauf und Füllung nach **Verflüssigen** in der Werkzeugleiste Werkzeuge oder halten Sie sie gedrückt, und wählen Sie ein Werkzeug.
- Wählen Sie bei aktivem Füllwerkzeug **Füllung** oder **Lassofüllung** im Bedienfeld **Werkzeugsatz** aus. **Umranden und füllen** steht unter **Lassofüllung**.
- Suchen Sie in der Befehlssuche nach dem Namen des Werkzeugs.

Der Arbeitsbereich Skizze hat keine Füllschaltfläche.

## Füllung

Sie können einen zusammenhängenden Bereich ähnlicher Farbe füllen, indem Sie darauf
klicken. **Quelle** legt fest, welche Pixel Füllung zur Bestimmung des Bereichs
auswertet.

- Eine aktive Auswahl beschränkt die Füllung auf die Auswahl.
- In der Schnellmaske oder auf einer Auswahlebene füllt Füllung die Auswahlmaske ([Schnellmaske](/de/docs/selections/quick-mask/)).

## Lassofüllung

Sie können eine Form freihändig zeichnen und mit der aktuellen Farbe füllen. Ziehen
Sie den Umriss auf der Leinwand. Beim Loslassen wird die Form gefüllt.

Lassofüllung hat nur die Einstellung **Deckkraft**. In der Schnellmaske und auf einer
Auswahlebene ist sie nicht verfügbar.

## Umranden und füllen

Sie können jede geschlossene transparente Fläche innerhalb einer gezeichneten
Schleife füllen. Umranden und füllen sucht die Flächen in den Pixeln der **Quelle**.

- Drücken Sie während des Zeichnens **Escape**, um die Schleife abzubrechen.
- Ein Rückgängig-Schritt entfernt alles, was eine Schleife gefüllt hat.
- Eine aktive Auswahl beschränkt die Füllung auf die Auswahl.
- Während Sie eine Auswahlmaske oder eine Ebenenmaske bearbeiten, ist Umranden und füllen nicht verfügbar.

## Quelle

Sie können festlegen, welche Pixel Füllung und Umranden und füllen zur Bestimmung des
Bereichs auswerten. Die Farbe landet immer auf der ausgewählten Ebene.

- **Sichtbares Bild**: alles, was in der Zeichnung sichtbar ist.
- **Bearbeitete Ebene**: nur die ausgewählte Ebene.
- **Referenzebenen**: die mit **Als Referenz verwenden** markierten Ebenen ([Ebeneneinstellungen](/de/docs/layers/settings/)).

Für Füllung wählen Sie die Quelle in der Liste unter den Werkzeugen in
**Werkzeugsatz**, für Umranden und füllen im Bedienfeld **Werkzeug**. Die Leiste
Werkzeugoptionen hat für beide ein Menü **Quelle**.

![Das Bedienfeld Werkzeugsatz mit ausgewählter Füllung und den Optionen Sichtbares Bild, Bearbeitete Ebene und Referenzebenen darunter.](shot:drawing/fill-tool-set)

Jedes Werkzeug merkt sich seine eigene Quelle. Füllung beginnt mit **Sichtbares
Bild**, und Umranden und füllen kehrt bei jedem Start von Capy Canvas zu
**Referenzebenen** zurück.

Verwendet Füllung **Referenzebenen** und ist keine Ebene markiert, malt Füllung nichts,
und ein Hinweis bietet an, die Ebene darunter zu markieren.

## Einstellungen für Füllung

![Das Bedienfeld Werkzeug für Füllung mit Toleranz, der Gruppe Kanten und Deckkraft.](shot:drawing/fill-settings)

Füllung und Umranden und füllen teilen sich die folgenden Einstellungen. **Automatisch
auswählen** und **Nach Farbe auswählen** verwenden außer bei **Deckkraft** dieselben
Werte. Um eine Einstellung zurückzusetzen, doppelklicken Sie auf ihre Beschriftung in
der Leiste Werkzeugoptionen ([Größe, Deckkraft und Fluss](/de/docs/brushes/basics/)).

### Toleranz

Legt fest, wie stark eine Farbe abweichen darf, um noch zum selben Bereich zu zählen.
Der Standardwert ist 10%.

### Lücken schließen

Schließt Öffnungen in den Linien bis zu dieser Breite, von 0 bis 32 px, bevor der
Bereich bestimmt wird. Die Breite gilt in Pixeln der Zeichnung, nicht des Bildschirms.

### Erweiterung

Vergrößert die gefüllte Fläche um diese Anzahl Pixel oder verkleinert sie mit einem
negativen Wert, von −32 bis 32 px.

### Kantenglättung

Glättet die treppenartigen Kanten der gefüllten Fläche. Bei 0% behält die Füllung
harte Pixelkanten.

### Deckkraft

Legt die Stärke der Füllung fest. Eine Änderung ändert auch die **Deckkraft** des
aktuellen Pinsels und umgekehrt. Im Arbeitsbereich Skizze verwenden Sie den Deckkraftregler auf der
Leiste am linken Rand.

## Eine Auswahl füllen

Um eine Auswahl mit der aktuellen Farbe zu füllen, wählen Sie **Bearbeiten > Auswahl
füllen** oder drücken **Umschalt+Rücktaste**
([Mit Auswahlen arbeiten](/de/docs/selections/working/)).
