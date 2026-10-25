---
title: "Form"
description: "Linien, Rechtecke, Ellipsen, Vielecke, Sterne und Pfade mit dem Werkzeug Form zeichnen."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

Mit dem Werkzeug **Form** können Sie Linien, Rechtecke, Ellipsen, Vielecke, Sterne und
Pfade auf die ausgewählte Ebene zeichnen. Auf einer [Vektorebene](/de/docs/layers/vector/)
wird jede Form zu einem Pfad, den Sie bearbeiten können. Auf einer Malebene malt sie
Pixel.

## Werkzeug Form

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **U**.
- Wählen Sie im Arbeitsbereich Malen **Form** in der Werkzeugleiste Werkzeuge aus. Klicken Sie mit der rechten Maustaste auf die Schaltfläche oder halten Sie sie gedrückt, um **Linie**, **Rechteck**, **Ellipse**, **Vieleck**, **Stern** oder **Pfad** zu wählen.
- Suchen Sie in der Befehlssuche nach **Form** oder nach einer Formart wie **Form › Rechteck**.

Die Arbeitsbereiche Skizze und Foto haben keine Schaltfläche Form. Sie können eine mit **Werkzeuge
einfügen…** hinzufügen ([Werkzeugleisten und Titelleiste](/de/docs/customize/toolbars/)).

![Das Menü der Schaltfläche Form in der Werkzeugleiste Werkzeuge des Arbeitsbereichs Malen mit Linie, Rechteck, Ellipse, Vieleck, Stern und Pfad.](shot:drawing/figure-menu)

Ziehen Sie auf der Leinwand, um jede Form außer **Pfad** zu zeichnen. Während des
Ziehens zeigt ein gestrichelter Umriss die Form, und beim Loslassen erscheint die
Form. Halten Sie beim Ziehen **Umschalt** gedrückt, um eine Linie in 45°-Schritten,
ein Quadrat, einen Kreis oder ein regelmäßiges Vieleck oder einen regelmäßigen Stern
zu zeichnen.

- Formen zeichnen nur den Bildinhalt einer Ebene, auf Vektorebenen und auf Ebenen, auf die ein Pinsel malen kann ([Pinselwerkzeuge](/de/docs/drawing/brush-tools/)).
- **Alphaschutz** wird berücksichtigt.
- Auf einer Malebene beschneidet eine aktive Auswahl **Linie**, **Rechteck** und **Ellipse**. **Vieleck**, **Stern**, **Pfad** und ein Rechteck mit abgerundeten Ecken beschneidet sie nicht.
- Ist im Bedienfeld Farbe **Transparente Farbe** ausgewählt, radieren **Linie**, **Rechteck** und **Ellipse** auf einer Malebene. Jede andere Form zeigt einen Hinweis, der nach einer Farbe fragt.
- Der Stiftdruck ändert die Breite einer Form nicht.
- Formen richten sich nicht nach Hilfslinien.
- In der Schnellmaske und auf einer Auswahlebene ist Form nicht verfügbar.
- Jede Form ist ein Rückgängig-Schritt.

## Formart

- **Linie** verläuft vom Punkt, an dem Sie drücken, bis zum Punkt, an dem Sie loslassen, mit runden Enden.
- **Rechteck** hat seine Ecken am Druck- und am Loslasspunkt, mit Seiten parallel zu den Leinwandrändern.
- **Ellipse** füllt das Rechteck zwischen Druck- und Loslasspunkt aus.
- **Vieleck** und **Stern** füllen das Rechteck aus, mit der ersten Ecke oder Spitze oben.
- **Pfad** wird Ankerpunkt für Ankerpunkt gezeichnet.

Wählen Sie die Formart oben im Bedienfeld **Werkzeugsatz**, im Menü der Schaltfläche
Form oder unter **Werkzeug** in der Leiste Werkzeugoptionen.

## Umriss und Füllung

- **Umriss** zeichnet den Rand der Form in der aktuellen Farbe, mittig auf dem Rand.
- **Füllung** bedeckt die Form mit der aktuellen Farbe.
- **Umriss + Füllung** zeichnet den Umriss in der Vordergrundfarbe und füllt das Innere mit der Hintergrundfarbe.

Wählen Sie den Modus unter den Formarten im Bedienfeld **Werkzeugsatz** oder unter
**Variante** in der Leiste Werkzeugoptionen. Eine Linie lässt sich nur mit **Umriss**
zeichnen.

![Das Bedienfeld Werkzeugsatz mit Linie, Rechteck, Ellipse, Vieleck, Stern und Pfad über Umriss, Füllung und Umriss + Füllung.](shot:drawing/figure-tool-set)

## Formeinstellungen

![Das Bedienfeld Werkzeug für Stern mit Linienbreite, Deckkraft, Zacken und Innenradius.](shot:vector/figure-settings)

**Eckenradius**, **Ecken**, **Zacken** und **Innenradius** befinden sich im Bedienfeld **Werkzeug** und in der Leiste Werkzeugoptionen, jeweils für die Formart, zu der sie gehören.

### Eckenradius

Rundet die Ecken der Form **Rechteck** ab, von 0 bis 4096 px.

### Ecken

Legt die Anzahl der Ecken der Form **Vieleck** fest, von 3 bis 100. Der Standardwert ist 5.

### Zacken

Legt die Anzahl der Zacken der Form **Stern** fest, von 3 bis 100. Der Standardwert ist 5.

### Innenradius

Legt fest, wie weit die inneren Ecken der Form **Stern** von ihrer Mitte entfernt liegen, als Prozentsatz des Außenradius, von 5% bis 100%. Der Standardwert ist 50%.

## Pfad

Sie können einen Pfad Ankerpunkt für Ankerpunkt zeichnen.

- Klicken Sie, um einen Eckpunkt hinzuzufügen. Drücken und ziehen Sie, um Griffe für einen glatten Punkt herauszuziehen, oder halten Sie **Alt** gedrückt, um nur den ausgehenden Griff zu ziehen.
- Halten Sie **Umschalt** gedrückt, um den nächsten Ankerpunkt in 45°-Schritten vom letzten zu setzen.
- Klicken Sie auf den ersten Ankerpunkt, um den Pfad zu schließen.
- Wählen Sie **Pfad abschließen** in der Leinwandleiste oder drücken Sie **Eingabe**, um den Pfad hinzuzufügen. **Pfad verwerfen** oder **Escape** verwirft ihn.
- **Letzten Punkt entfernen** oder **Rücktaste** entfernt den letzten Ankerpunkt, ebenso **Rückgängig**.

![Die Leinwandleiste, während ein Pfad gezeichnet wird, mit Letzten Punkt entfernen, Pfad verwerfen und Pfad abschließen.](shot:vector/path-bar)

Der Pfad verwendet den aktuellen Modus, die **Linienbreite** und die Farben, mit spitzen Ecken und flachen Enden. Auf einer Vektorebene ist er nach dem Abschließen ausgewählt, und ein Pfad, der am offenen Ende eines ausgewählten Pfads beginnt, setzt diesen fort.

## Linienbreite und Deckkraft

**Linienbreite** und **Deckkraft** befinden sich im Bedienfeld **Werkzeug** und in der Werkzeugoptionsleiste. Sie teilen ihre Werte mit **Pinselgröße** und **Deckkraft** des aktuellen Pinsels ([Größe, Stärke und Deckkraft](/de/docs/brushes/basics/)), und **[** und **]** ändern die Linienstärke.

### Linienbreite

Legt die Breite des Umrisses fest, von 0.5 bis 2048 px. Im Modus **Füllung** erscheint
sie nicht. Auf einer Vektorebene ändert **Konturbreite** in [Eigenschaften](/de/docs/layers/paths/) sie nachträglich.

### Deckkraft

Legt die Stärke von Umriss und Füllung gleichermaßen fest.
