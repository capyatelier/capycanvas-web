---
title: "Tonwertfilter"
description: "Einstellungen der Filter in der Kategorie Tonwert."
related: ["filters/adding", "filters/color", "filters/how-filters-apply"]
---

Die Tonwertfilter stehen unter **Filter > Tonwert** und in der Kategorie
**Tonwert** des Bedienfelds **Filter**. Ihre Einstellungen ändern Sie im
Bedienfeld **Eigenschaften**.

![Das Bedienfeld Filter mit der Kategorie Tonwert und einer Vorschau jedes Filters.](shot:filters/tone-list)

## Tiefen/Lichter

Hellt dunkle Bereiche mit **Tiefen** auf und dunkelt helle Bereiche mit
**Lichter** ab, gemessen an der Helligkeit der Umgebung. Bei 100% ändert jede
Einstellung die Belichtung um bis zu 2 Blendenstufen.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Tiefen** | 0–100% | 0% |
| **Lichter** | 0–100% | 0% |

## Kurven

Ändert die Tonwerte mit einer Kurve für alle Kanäle auf der Seite **RGB** und je
einer Kurve pro Kanal auf den Seiten **Rot**, **Grün** und **Blau**. Die
Kanalkurven wirken vor der Kurve **RGB**.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| Seiten **RGB**, **Rot**, **Grün**, **Blau** | Je eine Kurve | Gerade Linie |
| **Punkt aufnehmen**, **Gezielte Anpassung** | Setzen die Kurve anhand des Bildes (siehe [Filter hinzufügen und bearbeiten](/de/docs/filters/adding/)) | |
| **Kurvenfarbraum** | **Kodiertes RGB**, **Logarithmisches HDR**. Nur in einer [HDR-Zeichnung](/de/docs/color-management/hdr/) sichtbar oder solange **Logarithmisches HDR** eingestellt ist. | **Kodiertes RGB**, in einer HDR-Zeichnung **Logarithmisches HDR** |
| **HDR-Bereich** | 0–15 EV, eingegeben bis 127 EV. Nur bei **Logarithmisches HDR** sichtbar: die Anzahl der Blendenstufen über SDR-Weiß, die die Kurve erreicht. | 4 EV |

| Im Diagramm | Vorgehen |
| --- | --- |
| Punkt hinzufügen | Klicken oder tippen Sie auf eine leere Stelle. Eine Kurve fasst bis zu 32 Punkte. |
| Punkt verschieben | Ziehen Sie ihn, oder wählen Sie ihn aus und drücken Sie die Pfeiltasten. Mit **Umschalt** bewegt er sich weiter. Die Endpunkte bewegen sich nur nach oben und unten. |
| Genaue Werte setzen | Wählen Sie einen Punkt aus und geben Sie unter dem Diagramm Werte in **Eingabe** und **Ausgabe** ein. |
| Punkt entfernen | Doppelklicken Sie darauf, ziehen Sie ihn aus dem Diagramm, oder wählen Sie ihn aus und drücken Sie **Löschen** oder **Rücktaste**. |
| Neu beginnen | Wählen Sie **Kurve zurücksetzen** aus. |

## Tonwertkorrektur

Setzt Schwarzpunkt, Weißpunkt und Mitteltöne der Eingabe und bildet sie dann auf
den Bereich **Ausgabe** ab. Die Seiten **Rot**, **Grün** und **Blau** wirken vor
der Seite **RGB**.

![Das Bedienfeld Eigenschaften für Tonwertkorrektur mit dem Histogramm, Auto, Punkt aufnehmen und den Einstellungen Eingabe, Ausgabe und Beschneidung.](shot:filters/levels-properties)

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Auto**, **Punkt aufnehmen** | Setzen die Eingabe anhand des Bildes (siehe [Filter hinzufügen und bearbeiten](/de/docs/filters/adding/)) | |
| **Schatten**, **Lichter** (unter dem Histogramm) | Markieren beschnittene Bereiche auf der Leinwand | |
| **Schwarz** (**Eingabe**) | 0–1, jeder Wert eingebbar. Bleibt unter **Weiß** der Eingabe. | 0 |
| **Weiß** (**Eingabe**) | 0–1, jeder Wert eingebbar | 1 |
| **Mitteltöne** | 0.1–10. Über 1 hellt auf. | 1 |
| **Schwarz** (**Ausgabe**) | 0–1, jeder Wert eingebbar | 0 |
| **Weiß** (**Ausgabe**) | 0–1, jeder Wert eingebbar | 1 |
| **Eingabe begrenzen** | Beschneidet Tonwerte außerhalb von **Schwarz** und **Weiß** der Eingabe, auf jeder Seite | Aus |
| **Ausgabe begrenzen** | Beschneidet das Ergebnis auf den Ausgabebereich, auf jeder Seite | Aus |

## Helligkeit / Kontrast

**Kontrast** spreizt oder staucht die Tonwerte um das mittlere Grau, und
**Helligkeit** hellt danach alle Tonwerte um denselben Betrag auf oder dunkelt
sie ab.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Helligkeit** | −100 bis 100 | 0 |
| **Kontrast** | −100 bis 100. 50 verdoppelt den Kontrast, −50 halbiert ihn. | 0 |

## Schwellenwert

Macht Pixel, die dunkler als **Schwellenwert** sind, schwarz und alle übrigen
weiß.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Schwellenwert** | 0–1, jeder Wert eingebbar | 0.5 |

## Belichtung

Ändert die Belichtung in Blendenstufen. **Versatz** hebt oder senkt das
Schwarz.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Belichtung** | −10 bis 10 EV, eingegeben bis ±126 EV | 0 EV |
| **Versatz** | −0.5 bis 0.5 | 0 |
| **Gamma** | 0.1–10. Über 1 hellt die Mitteltöne auf. | 1 |

## Vignette

Dunkelt das Bild außerhalb einer Ellipse mit den Proportionen der Leinwand ab
oder hellt es auf, wenn **Stärke** negativ ist. Bei ±100% ändern sich die Ränder
um bis zu 2 Blendenstufen.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Stärke** | −100% bis 100% | 40% |
| **Radius** | 10–150% der halben Leinwandgröße | 95% |
| **Weichheit** | 0–100% des Radius, der für den Übergang genutzt wird | 55% |
| **Mitte X**, **Mitte Y** (unter **Position**) | 0–100% der Leinwandbreite und -höhe | 50% |
