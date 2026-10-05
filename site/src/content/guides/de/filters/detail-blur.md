---
title: "Detail- und Weichzeichnungsfilter"
description: "Einstellungen der Filter in den Kategorien Details und Weichzeichnen."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Diese Filter stehen unter **Filter > Details** und **Filter > Weichzeichnen**
sowie in den Kategorien **Details** und **Weichzeichnen** des Bedienfelds
**Filter**. Ihre Einstellungen ändern Sie im Bedienfeld **Eigenschaften**.

![Das Bedienfeld Filter mit den Kategorien Details und Weichzeichnen und einer Vorschau jedes Filters.](shot:filters/detail-blur-list)

## Klarheit

Erhöht den lokalen Kontrast mit einer positiven **Stärke** oder senkt ihn mit
einer negativen, um bis zu 2 Blendenstufen.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Stärke** | −100% bis 100% | 0% |

## Dunst entfernen

Eine positive **Stärke** entfernt Dunst, eine negative fügt Dunst hinzu. Beim
Entfernen von Dunst bleiben nahezu weiße und nahezu graue Bereiche geschützt.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Stärke** | −100% bis 100% | 0% |

## Unscharf maskieren

Schärft Kanten um **Stärke**. Unterschiede unter **Schwellenwert** bleiben
unverändert.

![Das Bedienfeld Eigenschaften für Unscharf maskieren mit Radius, Stärke und Schwellenwert.](shot:filters/unsharp-mask-properties)

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Radius** | 0–21 px, eingegeben bis 85 px | 1.5 px |
| **Stärke** | 0–300% | 100% |
| **Schwellenwert** | 0–100% | 2% |

## Hochpass

Behält nur die Details, die feiner als **Radius** sind, auf einer Basis aus 50%
Grau.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Radius** | 0–21 px, eingegeben bis 85 px | 4 px |
| **Stärke** | 0–300% | 100% |

## Kantenerhaltendes Glätten

Glättet Rauschen und hält Kanten scharf. Eine höhere **Stärke** glättet auch über
größere Farbunterschiede hinweg.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Stärke** | 0–100% | 25% |

## Kantenerkennung

Zeigt die Kanten des Bildes als weiße Linien auf Schwarz oder, bei aktiviertem
**Umkehren**, als dunkle Linien auf Weiß.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Breite** | 0.5–8 px | 1 px |
| **Stärke** | 0–400% | 100% |
| **Umkehren** | Ein oder aus | Aus |

## Relief

Verwandelt das Bild in ein graues Relief. **Winkel** legt die Richtung des
Reliefs fest.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Breite** | 0.5–8 px | 1.5 px |
| **Winkel** | −180° bis 180° | 135° |
| **Tiefe** | 0–400% | 100% |

## Gaußscher Weichzeichner

Zeichnet das Bild gleichmäßig weich. Kanten neben transparenten Bereichen
verschwimmen nach außen.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Radius** | 0–21 px, eingegeben bis 85 px | 3 px |

## Bewegungsunschärfe

Zeichnet entlang einer geraden Linie der Länge **Abstand** in Richtung **Winkel**
weich.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Abstand** | 0–64 px | 12 px |
| **Winkel** | −180° bis 180° | 0° |

## Überstrahlung

Fügt ein Leuchten um Tonwerte hinzu, die heller als **Schwellenwert** sind. Das
Leuchten kann sich in transparente Bereiche ausbreiten.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Radius** | 0–21 px, eingegeben bis 85 px | 6 px |
| **Stärke** | 0–200% | 60% |
| **Schwellenwert** | 0–100% | 60% |

## Weichfokus

Macht das Bild weicher, indem eine Weichzeichnung mit **Radius** im
Verrechnungsmodus Aufhellen mit der Deckkraft **Stärke** darübergelegt wird.

| Einstellung | Bereich oder Auswahl | Standard |
| --- | --- | --- |
| **Radius** | 0–21 px, eingegeben bis 85 px | 5 px |
| **Stärke** | 0–100% | 40% |
