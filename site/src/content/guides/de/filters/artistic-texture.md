---
title: "Künstlerische und Texturfilter"
description: "Einstellungen der Filter in den Kategorien Künstlerisch und Textur."
related: ["filters/adding", "filters/distort", "filters/how-filters-apply"]
---

Diese Filter stehen unter **Filter > Künstlerisch** und **Filter > Textur** sowie
in den Kategorien **Künstlerisch** und **Textur** des Bedienfelds **Filter**.
Ihre Einstellungen ändern Sie im Bedienfeld **Eigenschaften**.

![Das Bedienfeld Filter mit der Kategorie Künstlerisch und einer Vorschau jedes Filters.](shot:filters/artistic-list)

## Tontrennung

Reduziert jeden Farbkanal auf **Stufen** gleichmäßig verteilte Werte.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Stufen** | 2–256 | 6 |

## Rasterung

Zeichnet das Bild als runde Punkte in **Tinte** auf **Papier** neu, deren Größe
sich nach der Dunkelheit darunter richtet. **Kontrast** vergrößert den
Unterschied zwischen kleinen und großen Punkten.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Punktabstand** | 3–48 px | 9 px |
| **Winkel** | −180° bis 180° | 15° |
| **Kontrast** | 0–100% | 30% |
| **Tinte** | Jede Farbe | #0D1217 |
| **Papier** | Jede Farbe | #F5F0DE |

## Kreuzschraffur

Verwandelt das Bild in eine Schraffur in **Tinte** auf **Papier**. Dunklere
Bereiche erhalten mehr Linienrichtungen, bis zu vier.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Abstand** | 3–32 px | 8 px |
| **Linienbreite** | 0.25–4 px | 1 px |
| **Winkel** | −180° bis 180° | 0° |
| **Tinte** | Jede Farbe | #121417 |
| **Papier** | Jede Farbe | #F7F2E8 |

## Pixelmosaik

Teilt das Bild in Quadrate der Größe **Zellengröße**, die jeweils mit der Farbe
in ihrer Mitte gefüllt werden.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Zellengröße** | 1–96 px | 12 px |

## Malerisch

Gibt dem Bild die Anmutung eines Ölgemäldes, indem Details innerhalb von
**Radius** zu gleichmäßig gefärbten Flächen zusammengefasst werden, während die
Kanten erhalten bleiben. **Stärke** mischt das Ergebnis mit dem Original.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Radius** | 1–16 px | 5 px |
| **Stärke** | 0–100% | 100% |

## Bleistift

Zeichnet die Kanten des Bildes als Linien in **Tinte** auf **Papier**.
**Kontrast** dunkelt die Linien ab.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Radius** | 0–21 px, eingegeben bis 85 px | 2 px |
| **Kontrast** | 0–100% | 40% |
| **Tinte** | Jede Farbe | #120F0D |
| **Papier** | Jede Farbe | #F7F2E6 |

## Filmkorn

Fügt Korn hinzu, das sich mit der Zeit ändert und in den Mitteltönen am
stärksten ist. **Farbkorn** gibt jedem Farbkanal ein eigenes Korn.

![Das Bedienfeld Filter mit der Kategorie Textur und einer Vorschau jedes Filters.](shot:filters/texture-list)

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Stärke** | 0–100% | 18% |
| **Größe** | 0.5–8 px | 1 px |
| **Farbkorn** | Ein oder aus | Aus |
| **Geschwindigkeit** | 0–4 | 1 |
| **Animieren** | Ein oder aus | Ein |
| **Angehaltene Zeit** | 0–3600 s | 0 s |

## VHS

Gibt dem Bild die Anmutung eines Videobands, mit Zeilen, die seitlich um bis zu
**Spurregelung** zittern, roten und blauen Farbsäumen, Bildzeilen und Rauschen.
Zittern und Rauschen ändern sich mit der Zeit.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Spurregelung** | 0–32 px | 5 px |
| **Rauschen** | 0–100% | 12% |
| **Bildzeilen** | 0–100% | 20% |
| **Geschwindigkeit** | 0–4 | 1 |
| **Animieren** | Ein oder aus | Ein |
| **Angehaltene Zeit** | 0–3600 s | 0 s |

## CRT

Lässt das Bild wie einen alten Fernsehbildschirm aussehen: gewölbt, mit roten
und blauen Farbsäumen, einer gestreiften RGB-Pixelmaske, Bildzeilen und einem
Helligkeitsband, das mit der Zeit durchläuft. Teile des Bildes, die über den
gewölbten Bildschirm hinausgeschoben werden, werden transparent.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Krümmung** | 0–30% | 8% |
| **Bildzeilen** | 0–100% | 35% |
| **Pixelmaske** | 0–100% | 25% |
| **Trennung** | 0–5 px | 1 px |
| **Animieren** | Ein oder aus | Ein |
| **Angehaltene Zeit** | 0–3600 s | 0 s |

## Animation

**Filmkorn**, **VHS** und **CRT** sind animiert, und ihre Zeilen im Bedienfeld
**Filter** tragen die Animationsmarkierung. Bei aktiviertem **Animieren** läuft
der Filter fortlaufend mit **Geschwindigkeit** (CRT hat keine Einstellung
**Geschwindigkeit**). Deaktivieren Sie **Animieren**, um den Filter in dem Moment
anzuhalten, den **Angehaltene Zeit** festlegt.

Ein exportiertes Bild zeigt die Animation im Moment des Exports.
