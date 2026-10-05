---
title: "Farbfilter"
description: "Einstellungen der Filter in der Kategorie Farbe."
related: ["filters/adding", "filters/tone", "filters/how-filters-apply"]
---

Die Farbfilter stehen unter **Filter > Farbe** und in der Kategorie **Farbe**
des Bedienfelds **Filter**. Ihre Einstellungen ändern Sie im Bedienfeld
**Eigenschaften**.

![Das Bedienfeld Filter mit der Kategorie Farbe und einer Vorschau jedes Filters.](shot:filters/color-list)

## Farbton / Sättigung

Verschiebt Farbton, Sättigung und Helligkeit des ganzen Bildes auf der Seite
**Gesamt** oder eines Farbbereichs auf den Seiten **Rottöne** bis
**Magentatöne**. **Einfärben** gibt jedem Pixel denselben Farbton und dieselbe
Sättigung und behält seine Helligkeit bei.

![Das Bedienfeld Eigenschaften für Farbton / Sättigung auf der Seite Rottöne.](shot:filters/hue-saturation-properties)

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Farbton** | −180° bis 180°, mit **Einfärben** 0–360° | 0° |
| **Sättigung** | −100% bis 100%, mit **Einfärben** 0–100% | 0%, mit **Einfärben** 25% |
| **Helligkeit** | −100% bis 100% | 0% |
| **Mitte** | 0–360° Oklab-Farbton. Nur auf Farbseiten. | Rottöne 30°, Gelbtöne 110°, Grüntöne 145°, Cyantöne 195°, Blautöne 265°, Magentatöne 330° |
| **Breite** | 0–180°. Nur auf Farbseiten. | 30° |
| **Weiche Kante** | 0–90°. Nur auf Farbseiten. | 30° |
| **Einfärben** | Ein oder aus. Solange aktiviert, bleibt nur die Seite **Gesamt**. | Aus |

## Umkehren

Kehrt jeden Farbkanal um. Der Filter hat keine Einstellungen.

## Sättigung entfernen

Ersetzt jede Farbe durch ein Grau mit derselben HSL-Helligkeit und hat keine
Einstellungen.

## Fotofilter

Tönt das Bild um **Dichte** in Richtung **Farbe**.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Farbe** | Jede Farbe | #FFB873 |
| **Dichte** | 0–100% | 25% |
| **Helligkeit erhalten** | Ein oder aus | Ein |

## Selektive Farbkorrektur

Ändert Cyan, Magenta, Gelb und Schwarz in einem Farbbereich pro Seite.
**Rottöne** bis **Magentatöne** wirken auf gesättigte Farben, **Weißtöne**,
**Neutraltöne** und **Schwarztöne** auf nahezu graue Tonwerte.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Cyan** | −100% bis 100% | 0% |
| **Magenta** | −100% bis 100% | 0% |
| **Gelb** | −100% bis 100% | 0% |
| **Schwarz** | −100% bis 100% | 0% |
| **Methode** | **Relativ** skaliert jede Änderung nach dem Farbanteil, der schon in der Farbe steckt. **Absolut** fügt sie unverändert hinzu. Gilt für jede Seite. | **Relativ** |

## Kanalmixer

Setzt jeden Ausgabekanal auf den Seiten **Rot**, **Grün** und **Blau** aus einer
Mischung der Eingabekanäle Rot, Grün und Blau zusammen, plus **Konstante**. Bei
aktiviertem **Monochrom** bleibt nur die Seite **Grau**, und ihre Mischung
ergibt ein Graustufenbild.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Rot** | −200% bis 200% | 100% auf der Seite **Rot**, 21.26% auf **Grau**, sonst 0% |
| **Grün** | −200% bis 200% | 100% auf der Seite **Grün**, 71.52% auf **Grau**, sonst 0% |
| **Blau** | −200% bis 200% | 100% auf der Seite **Blau**, 7.22% auf **Grau**, sonst 0% |
| **Konstante** | −100% bis 100% | 0% |
| **Monochrom** | Ein oder aus | Aus |

## Color Lookup (LUT)

Wendet eine Lookup-Tabelle aus dem Look-Menü (es zeigt den aktuellen Look, etwa
**Warm**) auf die Farben an und mischt sie über **Intensität** mit dem Original.
Um eine eigene LUT zu verwenden, wählen Sie neben dem Look-Menü
**LUT importieren…** aus und öffnen Sie eine 3D-Datei `.cube` mit bis zu 16 MB.

![Das Bedienfeld Eigenschaften für Color Lookup (LUT) mit dem Look-Menü und LUT importieren….](shot:filters/color-lookup)

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| Look-Menü | **Original** (keine Änderung), **Warm**, **Kühl**, **Monochrom** oder eine importierte LUT unter ihrem Titel. Importierte LUTs werden in der Zeichnung gespeichert. | **Original** |
| **LUT-Farbraum** | **sRGB**, **Display P3**, **Adobe RGB (1998)**, **ProPhoto RGB**: der Farbraum, den eine importierte LUT erwartet. Bei **Original** und den eingebauten Looks ausgeblendet. | **sRGB** |
| **Intensität** | 0–100% | 100% |

## Farbbalance

Verschiebt die Farben getrennt auf den Seiten **Schatten**, **Mitteltöne** und
**Lichter**. Positive Werte verschieben in Richtung der zweiten Farbe in der
Beschriftung des Reglers.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Cyan — Rot** | −100 bis 100 | 0 |
| **Magenta — Grün** | −100 bis 100 | 0 |
| **Gelb — Blau** | −100 bis 100 | 0 |
| **Helligkeit erhalten** | Ein oder aus, für jede Seite | Ein |

## Dynamik

**Dynamik** erhöht die Sättigung gedämpfter Farben stärker als die gesättigter
Farben. **Sättigung** ändert alle Farben gleichmäßig.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Dynamik** | −100% bis 100% | 0% |
| **Sättigung** | −100% bis 100% | 0% |
| **Hauttöne schützen** | Ein oder aus. Begrenzt eine positive **Dynamik** bei Orange- und Hauttönen. | Ein |

## Schwarzweiß

Wandelt das Bild in Grau um, mit einem Regler dafür, wie hell jeder Farbton
wird. **Tönung** färbt das Ergebnis mit **Tönungsfarbe**.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Rottöne** | −100% bis 200% | 40% |
| **Gelbtöne** | −100% bis 200% | 60% |
| **Grüntöne** | −100% bis 200% | 40% |
| **Cyantöne** | −100% bis 200% | 60% |
| **Blautöne** | −100% bis 200% | 20% |
| **Magentatöne** | −100% bis 200% | 80% |
| **Tönung** | Ein oder aus | Aus |
| **Tönungsfarbe** | Jede Farbe | #BF874C |

## Verlaufsumsetzung

Bildet die Tonwerte des Bildes auf **Farbverlauf** ab, vom linken
Farbstopp für die dunkelsten Tonwerte bis zum rechten für die hellsten.
**Stärke** mischt das Ergebnis mit dem Original.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Farbverlauf** | Jeder Verlauf, bearbeitet wie beim Werkzeug [Farbverlauf](/de/docs/drawing/gradient/) | Schwarz nach Weiß, Interpolation **Oklab** |
| **Stärke** | 0–100% | 100% |

## Weißabgleich

Macht das Bild mit **Temperatur** wärmer oder kühler und verschiebt es mit
**Tönung** in Richtung Magenta oder Grün. **Neutralen Punkt auswählen** oben im
Bedienfeld **Eigenschaften** setzt beide Werte so, dass ein Punkt, auf den Sie
auf der Leinwand klicken, neutral wird.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Temperatur** | −100 bis 100, eingegeben bis ±1000. Positive Werte sind wärmer. | 0 |
| **Tönung** | −100 bis 100, eingegeben bis ±800. Positive Werte gehen stärker ins Magenta. | 0 |
| **Helligkeit erhalten** | Ein oder aus | Ein |

## Teiltonung

Tönt die Schatten in Richtung der Farbe **Schatten** und die Lichter in Richtung
der Farbe **Lichter** und behält ihre Helligkeit bei.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Schatten** | Jede Farbe | #295494 |
| **Lichter** | Jede Farbe | #F5AD57 |
| **Balance** | −100 bis 100. Verschiebt den Punkt, an dem die beiden Tönungen aufeinandertreffen. Positive Werte geben einem größeren Teil des Bildes die Farbe **Schatten**. | 0 |
| **Stärke** | 0–100% | 30% |

## Solarisation

Kehrt jeden Farbkanal dort um, wo er heller als **Schwellenwert** ist.
**Stärke** mischt das Ergebnis mit dem Original.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Schwellenwert** | 0–100% | 50% |
| **Stärke** | 0–100% | 100% |

## Irisieren

Fügt Regenbogenfarben wie auf einem dünnen Film hinzu, die der Helligkeit des
Bildes folgen und sich mit der Zeit verschieben. Ein exportiertes Bild zeigt die
Farben im Moment des Exports.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Stärke** | 0–100% | 55% |
| **Filmgröße** | 8–240 px | 64 px |
| **Geschwindigkeit** | 0–4 | 0.3 |
| **Animieren** | Ein oder aus. Solange aktiviert, verschieben sich die Farben fortlaufend mit **Geschwindigkeit**. | Ein |
| **Angehaltene Zeit** | 0–3600 s: der Moment, der angezeigt wird, solange **Animieren** deaktiviert ist | 0 s |
