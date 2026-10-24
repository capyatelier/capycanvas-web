---
title: "Vektorebenen"
description: "Ebenen, die Pfade statt Pixel enthalten, und die Stifte, Formen und der Radierer, die auf ihnen arbeiten."
related: ["layers/paths", "layers/types", "drawing/figure", "layers/merging"]
---

Eine Vektorebene enthält Pfade statt Pixel. Sie können ihre Pfade nach dem Zeichnen umformen ([Pfade bearbeiten](/de/docs/layers/paths/)).

## Eine Vektorebene erstellen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Neue Vektorebene** unten im Ebenen-Bedienfeld.
- Wählen Sie **Ebene > Neu > Neue Vektorebene**.
- Drücken Sie **Strg+Alt+Umschalt+N**.
- Geben Sie „Lineart“ in die [Befehlssuche](/de/docs/start/command-search/) ein.

Ein Pfadsymbol kennzeichnet die Miniatur einer Vektorebene.

![Das Bedienfeld Ebenen mit der Vektorebene Line art über Aktuelle Tinte und Papier, mit einem Pfadsymbol auf ihrer Miniatur.](shot:vector/layers-panel)

## Pfade zeichnen

Sie können Pfade mit der **G-Feder** zeichnen, deren Breite dem Stiftdruck folgt, und mit dem **Monoline-Stift**, der eine einzige Breite beibehält. Jeder Strich wird zu einem Pfad. Ein Strich, der am offenen Ende eines ausgewählten Pfads beginnt, setzt diesen Pfad fort.

Wenn Sie eine Vektorebene auswählen, wechselt das Werkzeug zu dem Stift, mit dem Sie zuletzt Pfade gezeichnet haben, anfangs die G-Feder. Wenn Sie wieder eine Malebene auswählen, kehrt der Pinsel zurück, den Sie vorher hatten.

Auf einer Vektorebene blendet **Werkzeugsatz** die Pinsel ab, die keine Pfade zeichnen können. Ein Stift zeichnet keine Pfade mehr, wenn Sie ihre **Härte** oder **Stärke** verringern.

![Der Hinweis über der Leinwand für einen Pinsel, der keine Pfade zeichnen kann, mit G-Feder verwenden, Neue Malebene und Ebene rastern.](shot:vector/refusal-notice)

Ein Strich mit einem anderen Pinsel malt nichts, und ein Hinweis nennt die Ebene. Seine Aktionen sind **G-Feder verwenden**, **Neue Malebene** (fügt darüber eine Malebene hinzu) und **Ebene rastern**. Wenn eine Einstellung den Stift stoppt, ersetzt eine Aktion mit dem Namen der Einstellung, wie **Härte zurücksetzen**, die Aktion **G-Feder verwenden**.

## Formen

Mit **Form** wird jede **Linie**, jedes **Rechteck**, jede **Ellipse**, jedes **Vieleck**, jeder **Stern** und jeder **Pfad** zu einem Pfad, ausgewählt und vor den anderen. Siehe [Form](/de/docs/drawing/figure/).

## Pfade radieren

Sie können Pfade mit dem **Radierer**, mit **Transparente Farbe** oder mit dem Radiererende eines Stifts radieren. Solange der Radierer auf einer Vektorebene aktiv ist, erscheinen in **Werkzeugsatz** drei Modi über den Radiererpinseln. In Skizze stehen sie am Kopf der Spalte **Werkzeuge** der Schublade **Radierer**.

![Das Bedienfeld Werkzeugsatz für den Radierer auf einer Vektorebene, mit Berührten Teil radieren, Ganze Pfade radieren und Bis zum Schnittpunkt radieren über dem Radiererpinsel.](shot:vector/eraser-modes)

- **Berührten Teil radieren** schneidet einen Pfad dort, wo der Radierer ihn berührt, und lässt den Rest des Pfads unverändert. Das ist die Standardeinstellung.
- **Ganze Pfade radieren** entfernt jeden Pfad, den der Radierer berührt.
- **Bis zum Schnittpunkt radieren** entfernt den berührten Teil eines Pfads bis zu den nächsten Kreuzungen mit anderen Pfaden oder mit sich selbst. Ein Pfad, der nichts kreuzt, wird vollständig entfernt.

Radieren entfernt keine gefüllte Fläche.

## Füllung

**Füllung** färbt den geschlossenen Pfad, auf den Sie klicken, und **Lassofüllung** fügt einen gefüllten Pfad hinzu. Siehe [Füllwerkzeuge](/de/docs/drawing/fill/).

## Ebene rastern

Wählen Sie **Ebene > Ebene rastern**, um eine Vektorebene in eine Malebene umzuwandeln, die enthält, was ihre Pfade zeigen.

## Vereinen

**Mit darunterliegender Ebene vereinen** behält die Pfade, wenn eine Vektorebene mit einer anderen Vektorebene vereint wird. Jedes andere Vereinen wandelt die Pfade nach einem Hinweis in Pixel um. Siehe [Ebenen vereinen](/de/docs/layers/merging/).
