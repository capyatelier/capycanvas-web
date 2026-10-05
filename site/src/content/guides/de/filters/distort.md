---
title: "Verzerrungsfilter"
description: "Einstellungen der Filter in der Kategorie Verzerren."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Die Verzerrungsfilter stehen unter **Filter > Verzerren** und in der Kategorie
**Verzerren** des Bedienfelds **Filter**. Ihre Einstellungen ändern Sie im
Bedienfeld **Eigenschaften**. Jeder dieser Filter kann Farbe in transparente
Bereiche einer Ebene verschieben.

![Das Bedienfeld Filter mit der Kategorie Verzerren und einer Vorschau jedes Filters.](shot:filters/distort-list)

## Chromatische Aberration

Fügt an Kanten Farbsäume hinzu, indem der Rotkanal in die eine und der Blaukanal
in die andere Richtung verschoben wird, um **Trennung** entlang **Winkel**.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Trennung** | 0–32 px | 3 px |
| **Winkel** | −180° bis 180° | 0° |

## Kaleidoskop

Spiegelt einen Keil des Bildes in **Segmente** Keile rund um die Mitte.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Segmente** | 2–24 | 6 |
| **Winkel** | −180° bis 180° | 0° |
| **Mitte X**, **Mitte Y** (unter **Position**) | 0–100% der Leinwandbreite und -höhe | 50% |

## Wirbel

Verdreht das Bild um die Mitte um **Verdrehung**, auslaufend bis zu keiner
Verdrehung bei **Radius**.

![Das Bedienfeld Eigenschaften für Wirbel mit Verdrehung, Radius und den Einstellungen unter Position.](shot:filters/swirl-properties)

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Verdrehung** | −720° bis 720° | 120° |
| **Radius** | 1–150% der halben kürzeren Leinwandseite | 70% |
| **Mitte X**, **Mitte Y** (unter **Position**) | 0–100% der Leinwandbreite und -höhe | 50% |

## Wellen

Verschiebt das Bild in Ringen um die Mitte, um bis zu **Amplitude**, mit dem
Ringabstand **Wellenlänge**. Die Ringe wandern mit der Zeit nach außen.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Amplitude** | 0–48 px | 12 px |
| **Wellenlänge** | 8–256 px | 64 px |
| **Geschwindigkeit** | 0–4 | 0.5 |
| **Mitte X**, **Mitte Y** (unter **Position**) | 0–100% der Leinwandbreite und -höhe | 50% |
| **Animieren** | Ein oder aus | Ein |
| **Angehaltene Zeit** | 0–3600 s | 0 s |

## Glas

Verzerrt das Bild mit einem Milchglasmuster der Größe **Texturgröße**, um bis zu
**Verzerrung**. **Rauheit** fügt ein feineres Muster hinzu.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Verzerrung** | 0–48 px | 12 px |
| **Texturgröße** | 4–160 px | 24 px |
| **Rauheit** | 0–100% | 35% |

## Regenglas

Fügt Regentropfen hinzu, die mit der Zeit mit Spuren herabgleiten und das Bild
um bis zu **Lichtbrechung** brechen. **Regen** legt die Anzahl der Tropfen fest.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Lichtbrechung** | 0–32 px | 8 px |
| **Tropfengröße** | 12–120 px | 48 px |
| **Regen** | 0–100% | 65% |
| **Geschwindigkeit** | 0–4 | 0.5 |
| **Animieren** | Ein oder aus | Ein |
| **Angehaltene Zeit** | 0–3600 s | 0 s |

## Hitzeflimmern

Lässt das Bild mit der Zeit flimmern, am unteren Rand der Leinwand um bis zu
**Verzerrung** und am oberen Rand gar nicht. **Details** fügt feinere Wellen
hinzu.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Verzerrung** | 0–48 px | 8 px |
| **Wellengröße** | 10–240 px | 90 px |
| **Geschwindigkeit** | 0–4 | 0.6 |
| **Details** | 0–100% | 50% |
| **Animieren** | Ein oder aus | Ein |
| **Angehaltene Zeit** | 0–3600 s | 0 s |

## Bereichsverformung

Verformt das Bild mit einem marmorierten Muster der Größe **Mustergröße**, um bis
zu **Verzerrung**. Das Muster treibt mit der Zeit.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Verzerrung** | 0–64 px | 24 px |
| **Mustergröße** | 8–256 px | 96 px |
| **Geschwindigkeit** | 0–4 | 0.25 |
| **Animieren** | Ein oder aus | Ein |
| **Angehaltene Zeit** | 0–3600 s | 0 s |

## Animation

**Wellen**, **Regenglas**, **Hitzeflimmern** und **Bereichsverformung** sind
animiert, und ihre Zeilen im Bedienfeld **Filter** tragen die
Animationsmarkierung. Bei aktiviertem **Animieren** läuft der Filter fortlaufend
mit **Geschwindigkeit**. Deaktivieren Sie **Animieren**, um den Filter in dem
Moment anzuhalten, den **Angehaltene Zeit** festlegt.

Ein exportiertes Bild zeigt die Animation im Moment des Exports.
