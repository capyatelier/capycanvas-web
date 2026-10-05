---
title: "Farbe bearbeiten"
description: "Eine Farbe im Dialog Farbe bearbeiten über ihre Zahlenwerte, ihren Hex-Code oder Farbtext festlegen."
related: ["color/color-panel", "color/palettes", "color/eyedropper"]
---

Im Dialog **Farbe bearbeiten** können Sie eine Farbe über ihre Zahlenwerte festlegen.
Erst wenn Sie **Farbe verwenden** auswählen, ändert sich etwas.

![Der Dialog Farbe bearbeiten mit dem Farbrad links, Aktuell und Neu mit dem Hex-Code oben rechts, drei Wertezeilen und den zuletzt verwendeten Farben in der Fußzeile.](shot:color/edit-color "1 Farbrad und Formen · 2 Aktuell und Neu · 3 Von der Leinwand aufnehmen · 4 Hex · 5 Wertezeilen · 6 Zuletzt verwendete Farben")

## Farbe bearbeiten öffnen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Farbe bearbeiten…** (den Stift) oben rechts im [Bedienfeld Farbe](/de/docs/color/color-panel/) aus.
- Doppelklicken Sie im Bedienfeld Farbe auf das Vorder- oder Hintergrundfarbfeld.
- Wählen Sie in Eigenschaften eine Farbschaltfläche aus, etwa **Farbe** einer Füllebene Einfarbig oder **Tönungsfarbe** von Schwarzweiß.
- Wählen Sie im Bedienfeld Ebenen die Miniatur einer Füllebene Einfarbig aus.
- Wählen Sie im Verlaufseditor die **Farbe** eines Farbstopps aus.
- Wählen Sie **Pinselfarbe** in einem Bedienfeld aus, das diese Schaltfläche zeigt. Sie können sie den Bedienfeldern Pinsel und Pinselgröße hinzufügen ([Bedienfelder und Spalten](/de/docs/customize/panels/)).
- Unter Windows, Linux und Android klicken Sie mit der rechten Maustaste auf das Vorder- oder Hintergrundfarbfeld oder halten es gedrückt und wählen **Farbe bearbeiten…**.

## Farbrad und Formen

Das Farbrad funktioniert wie im Bedienfeld Farbe. Wählen Sie **OKLCH**, **HSB** oder
**HLS** unter dem Farbrad aus, um das Feld auf einen Kreis, ein Quadrat oder ein
Dreieck umzuschalten.

## Aktuell und Neu

**Neu** zeigt die Farbe, die Sie gerade einstellen. Wählen Sie **Aktuell** aus, um
**Neu** auf die Ausgangsfarbe zurückzusetzen.

## Hex

Das Hex-Feld zeigt Neu als `#RRGGBB` in sRGB. Wählen Sie es aus, um einen Hex-Code
oder anderen [Farbtext](#farben-einfügen) einzugeben.

Ein Kennzeichen links vom Hex-Code markiert diese Fälle:

- „≈“: Die Farbe liegt außerhalb von sRGB, und der Hex-Code zeigt die nächstgelegene sRGB-Farbe.
- „Basis“: In einer HDR-Zeichnung zeigt der Hex-Code die Farbe vor der Intensität.
- „sRGB“: Der Farbraum der Zeichnung ist nicht sRGB.

## Wertezeilen

Jede Zeile zeigt Neu in einem Format. Wählen Sie den Formatnamen am Anfang einer Zeile
aus, um ein anderes Format zu wählen. Der Dialog merkt sich die gewählten Formate.

| Zeile | Formate |
| --- | --- |
| 1 | **RGB** (0–255, Standard), **RGB 0–1**, **Lineares RGB** (0–1). Die Werte gelten im Farbraum der Zeichnung, den ein Kennzeichen in der Zeile angibt. |
| 2 | **HSB** (Standard), **HSL** |
| 3 | **OKLCH** (Standard), **OKLab** |

![Die Wertezeilen mit geöffnetem Formatmenü der ersten Zeile.](shot:color/edit-color-formats)

## Werte bearbeiten

- Wählen Sie einen Wert aus, um eine Zahl einzugeben. Drücken Sie **Eingabe** zum Bestätigen oder **Escape** zum Abbrechen.
- Ziehen Sie einen Wert nach oben oder unten, um ihn zu ändern. Halten Sie **Umschalt** für größere Schritte gedrückt, **Alt** oder **Strg** für kleinere.
- Drücken Sie auf einem Wert **↑** oder **↓**, um ihn um einen Schritt zu ändern.

Ein Wert außerhalb des Bereichs eines Felds wird auf die nächste Grenze gesetzt. Der
Farbton beginnt nach 360° wieder von vorn. Geben Sie Text ein, der weder eine Zahl
noch eine Farbe ist, bleibt das Feld mit einer Fehlermeldung geöffnet. **Farbe
verwenden** bleibt nicht verfügbar, bis Sie den Wert korrigieren oder **Escape**
drücken.

## Farben kopieren

Wählen Sie die Kopierschaltfläche am Ende des Hex-Felds oder einer Zeile aus, um
diesen Wert als Text zu kopieren. Ein Häkchen auf der Schaltfläche bestätigt das
Kopieren. Drücken Sie im Dialog außerhalb eines Textfelds **Strg+C**, um den Hex-Code
zu kopieren.

| Format | Kopierter Text in sRGB-Zeichnungen | In anderen Farbräumen |
| --- | --- | --- |
| Hex | `#RRGGBB` | `#RRGGBB` |
| RGB | `rgb(R G B)` | `color(display-p3 r g b)`, `color(a98-rgb r g b)` oder `color(prophoto-rgb r g b)`, von 0 bis 1 |
| RGB 0–1 | `color(srgb r g b)` | wie bei RGB |
| Lineares RGB | `color(srgb-linear r g b)` | `r g b` |
| HSB, HSL | `hsb(h s% b%)`, `hsl(h s% l%)` | `h° s% b%`, `h° s% l%` |
| OKLCH, OKLab | `oklch(L% C h)`, `oklab(L% a b)` | dasselbe |

## Farben einfügen

Drücken Sie im Dialog außerhalb eines Textfelds **Strg+V**, um Neu aus Farbtext
festzulegen. Das Hex-Feld und die Wertefelder akzeptieren denselben Text:

- Hex-Codes mit 3, 4, 6 oder 8 Stellen, mit `#`, `0x` oder ohne Präfix (Alpha-Stellen werden ignoriert);
- CSS-Farbnamen wie `teal`;
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsb()`, `hsv()`, `oklch()` und `oklab()`;
- `color()` mit `srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb` oder `srgb-linear`;
- drei Zahlen. Eine Wertezeile liest sie in ihrem eigenen Format. An anderer Stelle gelten sie als RGB von 0 bis 255 oder als RGB von 0 bis 1, wenn alle drei höchstens 1 sind und eine davon einen Dezimalpunkt hat.

Farbtext ändert nie den Alphawert der Farbe.

## Von der Leinwand aufnehmen

Wählen Sie **Von der Leinwand aufnehmen** (die Pipette neben Aktuell und Neu) aus, um
Neu aus der Zeichnung aufzunehmen. Der Dialog wird ausgeblendet, und ein Streifen in
einer Ecke der Leinwand zeigt Aktuell, die aufgenommene Farbe und ihre Werte.

Klicken Sie, oder heben Sie Stift oder Finger ab, um die Farbe aufzunehmen. Der Dialog
erscheint wieder mit der aufgenommenen Farbe als Neu. Drücken Sie **Escape** oder
wählen Sie den Streifen aus, um ohne Änderung zurückzukehren.

Mit dem Finger liegt der Aufnahmepunkt über der Fingerspitze. Wenn Farbe bearbeiten
aus einem anderen Dialog geöffnet wird, ist **Von der Leinwand aufnehmen**
ausgeblendet.

## Zuletzt verwendete Farben und Paletten

Die Fußzeile zeigt Ihre zuletzt verwendeten Farben. Wählen Sie eine davon aus, um sie
zu Neu zu machen.

Wählen Sie **Zuletzt verwendete Farben und alle Paletten** (den Pfeil nach den
zuletzt verwendeten Farben) aus, um eine Ansicht mit Ihren zuletzt verwendeten Farben
und allen [Paletten](/de/docs/color/palettes/) zu öffnen. Geben Sie in das Suchfeld
ein, um Palettennamen, Farbnamen oder Hex-Codes zu finden. Das **+** am Ende einer
Palette speichert Neu in dieser Palette. Um die Ansicht zu schließen, wählen Sie
**Farbfelder schließen** aus oder drücken **Escape**.

![Die Farbfeldansicht mit dem Suchfeld, Zuletzt verwendete Farben und den Paletten.](shot:color/edit-color-swatches)

## HDR-Intensität

In einer [HDR-Zeichnung](/de/docs/color-management/hdr/) legen die Zeile
**Intensität (EV)** und der Bogen unter dem Farbrad die Helligkeit in Blendenstufen
relativ zu SDR-Weiß fest. Auf dem Bogen und beim Ziehen des Werts reicht der Bereich
von −2 bis +6 EV. Ein eingegebener Wert kann darüber hinausgehen, innerhalb des
Bereichs der Farbtiefe der Zeichnung.

## Farbe verwenden und Abbrechen

Wählen Sie **Farbe verwenden** aus, um Neu anzuwenden. Wählen Sie **Abbrechen** aus
oder drücken Sie **Escape**, um ohne Änderung zu schließen. Ist ein Formatmenü oder
die Farbfeldansicht geöffnet, schließt **Escape** zuerst diese.
