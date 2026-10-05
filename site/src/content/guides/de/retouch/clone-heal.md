---
title: "Klonen und Reparieren"
description: "Der Klonstempel, die Reparaturpinsel und die Quelle, aus der sie kopieren."
related: ["retouch/dodge-burn", "layers/settings", "brushes/basics", "photo/retouch"]
---

Sie können Fehler mit Pixeln übermalen, die von einer anderen Stelle im Bild
kopiert werden.

| Werkzeug | Wirkung |
| --- | --- |
| **Klonstempel** | Malt mit Pixeln, die von der Quellscheibe kopiert werden. |
| **Reparaturpinsel** | Malt wie der **Klonstempel**. Wenn Sie den Stift absetzen, übernimmt die Kopie Farbe und Helligkeit rund um den Pinselstrich und behält ihre Textur. |
| **Bereichsreparaturpinsel** | Ersetzt nach dem Absetzen des Stifts die übermalte Stelle durch Textur aus dem ähnlichsten Bereich in der Nähe und gleicht sie an die Umgebung an. |

## Retuschierwerkzeug wählen

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **S**. Drücken Sie die Taste erneut, um zu **Reparaturpinsel** und dann zu **Bereichsreparaturpinsel** zu wechseln.
- Wählen Sie im Arbeitsbereich Foto in der Werkzeugleiste Werkzeuge **Klonstempel** oder **Bereichsreparaturpinsel / Reparaturpinsel** aus.
- Wählen Sie im Arbeitsbereich Malen in der Werkzeugleiste Werkzeuge **Mischen / Klonstempel** aus. Klicken Sie mit der rechten Maustaste auf die Schaltfläche oder halten Sie sie gedrückt, um **Klonstempel** zu wählen.
- Wählen Sie im Arbeitsbereich Skizze in der Titelleiste **Formen** aus, wählen Sie es erneut aus, um die Schublade zu öffnen, und wählen Sie **Klonen**, **Reparieren** oder **Bereichsreparatur** aus.
- Geben Sie den Namen des Werkzeugs in die [Befehlssuche](/de/docs/start/command-search/) ein.

**Reparaturpinsel** und **Bereichsreparaturpinsel** haben im Arbeitsbereich
Malen keine Schaltfläche.

Jedes Werkzeug ist ein Pinsel, mit **Pinselgröße**, **Deckkraft**, **Fluss** und
den Einstellungen unter **Spitze** im Bedienfeld Werkzeug (siehe
[Größe, Deckkraft und Fluss](/de/docs/brushes/basics/)).

![Das Bedienfeld Werkzeug für den Klonstempel mit den Pinseleinstellungen und den Quelleinstellungen.](shot:retouch/clone-tool-panel)

## Quelle

**Quelle** im Bedienfeld Werkzeug legt fest, was die Werkzeuge kopieren:

- **Referenzebenen** (die Standardeinstellung) kopiert die Ebene, auf der Sie malen, zusammen mit den Ebenen darunter, die als Referenz markiert sind.
- **Bearbeitete Ebene** kopiert nur die Ebene, auf der Sie malen.

Mit **Referenzebenen** können Sie auf einer leeren Ebene über dem Foto
retuschieren. Markieren Sie das Foto mit
[Als Referenz verwenden](/de/docs/layers/settings/), oder wählen Sie
**Ebene > Ebeneneinstellungen > Ebene darunter als Referenz verwenden**. Wenn
Sie auf einer leeren Ebene malen und darunter keine Referenz markiert ist,
bietet die Meldung ***Name* als Referenz verwenden** an.

Eine skalierte oder gedrehte Ebene können Sie nicht direkt retuschieren.
Retuschieren Sie auf einer neuen Ebene über der skalierten oder gedrehten Ebene.

## Quelle festlegen

**Klonstempel** und **Reparaturpinsel** kopieren von der Quellscheibe, einem
kleinen Ring mit einem Kreuz.

Führen Sie eine der folgenden Aktionen aus:

- Halten Sie **Alt** gedrückt und klicken Sie auf die Stelle, von der Sie kopieren möchten.
- Wählen Sie **Quelle festlegen** aus und klicken Sie dann.

Solange Sie die Quelle nicht festgelegt haben, liegt sie in der Mitte der
Ansicht. Ziehen Sie die Scheibe, um die Quelle zu verschieben. Ein Finger kann
die Scheibe ziehen, legt aber nie die Quelle fest. Während Sie malen, folgt die
Scheibe der Stelle, die gerade kopiert wird.

Der **Bereichsreparaturpinsel** findet seine Quelle selbst und hat keine
Scheibe.

## Quelleinstellungen

Diese Einstellungen gelten für **Klonstempel** und **Reparaturpinsel**.

### Ausgerichtete Quelle

Behält über alle Pinselstriche hinweg denselben Versatz zwischen Quelle und
Pinsel bei. Ist die Einstellung deaktiviert, beginnt jeder Pinselstrich an der
Quellscheibe zu kopieren. Standardmäßig aktiviert.

### Quelle horizontal spiegeln und Quelle vertikal spiegeln

Spiegeln die kopierten Pixel an der Quellscheibe.

### Quellversatz zurücksetzen

Lässt den nächsten Pinselstrich wieder an der Quellscheibe zu kopieren beginnen.
Verfügbar nach einem ausgerichteten Pinselstrich.

### Quelle festlegen

Der nächste Klick legt die Quelle fest.

## Leinwandaktionsleiste für die Quellscheibe

Klicken Sie auf die Quellscheibe, ohne zu ziehen, um daneben die
[Leinwandaktionsleiste](/de/docs/selections/working/) anzuzeigen, mit
**Ausgerichtet**, **Quelle**, den beiden Schaltflächen zum Spiegeln,
**Versatz zurücksetzen** und **Quelle festlegen**. Klicken Sie erneut auf die
Scheibe oder wählen Sie ein anderes Werkzeug, um die Leiste auszublenden.

![Die Quellscheibe mit ihrer Leinwandaktionsleiste.](shot:retouch/clone-source-bar)
