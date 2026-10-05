---
title: "Abwedeln und Nachbelichten, Frequenztrennung"
description: "Eine Ebene zum Abwedeln und Nachbelichten hinzufügen und eine Ebene mit Frequenztrennung in die Ebenen Niedrig und Hoch aufteilen."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## Neue Abwedel- und Nachbelichtungsebene

Sie können eine neutralgraue Ebene im Modus **Weiches Licht** zum Abwedeln und
Nachbelichten hinzufügen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Neu > Neue Abwedel- und Nachbelichtungsebene**.
- Öffnen Sie im Bedienfeld Ebenen das Menü einer Ebene und wählen Sie **Neu > Neue Abwedel- und Nachbelichtungsebene**.

Über der aktiven Ebene und den darauf beschnittenen Ebenen erscheint eine
leinwandgroße Ebene namens *Abwedeln & Nachbelichten* und wird zur aktiven
Ebene.

In eine gesperrte Gruppe können Sie die Ebene nicht einfügen, ebenso wenig,
solange ein Zuschnitt oder eine Transformation geöffnet ist.

![Das Bedienfeld Ebenen mit einer Ebene Abwedeln & Nachbelichten über dem Terrarium-Foto.](shot:retouch/dodge-burn-layer)

## Frequenztrennung…

Sie können die aktive Ebene in einem Schritt für die Frequenztrennung
aufteilen.

Wählen Sie **Filter > Frequenztrennung…**. Am unteren Rand der Leinwand öffnet
sich ein Feld mit **Radius**, standardmäßig 4 px, und die Leinwand zeigt eine
Vorschau der Weichzeichnung der Ebene *Niedrig*, während Sie **Radius** ändern.

![Das Feld zur Frequenztrennung mit dem Wert für Radius.](shot:retouch/frequency-separation-panel)

**Anwenden** setzt eine Gruppe namens *Frequenztrennung* an die Stelle der
Ebene:

- *Hoch* enthält die feine Textur und steht auf **Lineares Licht**. Sie ist die oberste Ebene und wird zur aktiven Ebene.
- *Niedrig* enthält Farben und Tonwerte, mit **Gaußscher Weichzeichner** um den Radius weichgezeichnet, und steht auf **Normal**.

Die Gruppe übernimmt Deckkraft und Beschneidung der ursprünglichen Ebene. Die
ursprüngliche Ebene bleibt ausgeblendet direkt unter der Gruppe.

Die Ebene muss sichtbar und auf **Normal** gestellt sein, und die Zeichnung muss
**Bearbeiten > Verrechnung > Wahrnehmungsbasierte Verrechnung** verwenden (siehe
[Farbraum, Farbtiefe und Verrechnung](/de/docs/color-management/color-spaces/)).
Ändert sich die Zeichnung, während das Feld geöffnet ist, schließt es sich.

![Das Bedienfeld Ebenen mit der Gruppe Frequenztrennung, Hoch über Niedrig, und der ausgeblendeten ursprünglichen Ebene.](shot:retouch/frequency-separation-layers)
