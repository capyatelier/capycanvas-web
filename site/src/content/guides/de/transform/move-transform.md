---
title: "Verschieben und Transformieren"
description: "Ebenen und ausgewählte Pixel mit dem Werkzeug Vorgang und mit Transformieren verschieben und transformieren."
related: ["selections/working", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Mit dem Werkzeug **Vorgang** können Sie Ebenen und ausgewählte Pixel
verschieben, mit **Transformieren** können Sie sie skalieren, drehen, scheren,
verzerren oder verformen.

## Werkzeug Vorgang

Führen Sie eine der folgenden Aktionen aus:

- Öffnen Sie im Bedienfeld Ebenen das Menü einer Ebene und wählen Sie **Ebene / Maske verschieben**.
- Drücken Sie **O**.
- Wählen Sie in den Arbeitsbereichen Malen und Foto in der Werkzeugleiste Werkzeuge **Vorgang / Transformieren** aus. Klicken Sie mit der rechten Maustaste auf die Schaltfläche oder halten Sie sie gedrückt, um **Vorgang** zu wählen.
- Geben Sie „Vorgang“ in die [Befehlssuche](/de/docs/start/command-search/) ein.

Der Arbeitsbereich Skizze hat keine Schaltfläche **Vorgang**.

## Ebenen verschieben

Ziehen Sie ohne Auswahl auf der Leinwand, um die ausgewählten Ebenen zu
verschieben. Die Pfeiltasten verschieben sie um 1 px, mit **Umschalt** um
10 px.

Eine gesperrte Ebene können Sie nicht verschieben.

## Ausgewählte Pixel verschieben

Ziehen Sie bei bestehender Auswahl, um die ausgewählten Pixel der aktiven
Malebene in ganzen Pixelschritten zu verschieben. Während Sie eine Maske
bearbeiten, verschiebt **Vorgang** die Maske.

Sind Hilfslinien eingeblendet, wählt und zieht **Vorgang** auch Hilfslinien
(siehe [Lineale und Hilfslinien](/de/docs/drawing/ruler/)).

## Kopie belassen

Sie können eine Kopie der ausgewählten Pixel verschieben und die Originale an
ihrem Platz lassen.

Aktivieren Sie **Kopie belassen** im Bedienfeld Werkzeug oder in der
[Auswahlleiste](/de/docs/selections/working/). Halten Sie zu Beginn des Ziehens
**Alt** gedrückt, um für dieses eine Ziehen das Gegenteil zu bewirken.

## Transformieren

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bearbeiten > Transformieren**.
- Drücken Sie **Strg+T**.
- Wählen Sie **Transformieren** in den Arbeitsbereichen Malen und Foto in der Werkzeugleiste Befehle aus, im Arbeitsbereich Skizze in der Titelleiste.
- Wählen Sie in der Auswahlleiste **Transformieren** aus.
- Klicken Sie in den Arbeitsbereichen Malen und Foto in der Werkzeugleiste Werkzeuge mit der rechten Maustaste auf **Vorgang / Transformieren** oder halten Sie es gedrückt, und wählen Sie **Transformieren**.

Bei bestehender Auswahl ändert **Transformieren** die ausgewählten Pixel der
aktiven Ebene oder Maske. Ohne Auswahl ändert es die ausgewählten Ebenen. Ein
Rahmen mit Griffen und die Leinwandaktionsleiste erscheinen.

Zum Abschließen wählen Sie **Anwenden** aus oder drücken Sie **Eingabe**.
**Abbrechen** oder **Escape** verwirft die Transformation, ebenso
**Rückgängig**, während Sie Ebenen transformieren.

Um mehrere Ebenen zu transformieren, heben Sie zuerst die Auswahl auf.

## Griffe

In **Frei** und **Einheitlich**:

- Ziehen Sie innerhalb des Rahmens, um ihn zu verschieben. Halten Sie **Umschalt** gedrückt, um nur waagerecht oder senkrecht zu verschieben.
- Ziehen Sie einen Eck- oder Kantengriff, um von der gegenüberliegenden Seite aus zu skalieren. Halten Sie **Umschalt** gedrückt, um die Proportionen zu erhalten, oder **Alt**, um um den Drehpunkt zu skalieren.
- Halten Sie **Strg** gedrückt und ziehen Sie einen Kantengriff, um bis zu 85° zu scheren.
- Ziehen Sie den Griff über der oberen Kante, um um den Drehpunkt zu drehen. Halten Sie **Umschalt** gedrückt für 15°-Schritte.
- Ziehen Sie den Drehpunkt, um ihn zu verschieben.

In **Verzerren**:

- Ziehen Sie eine Ecke, um sie allein zu verschieben, oder einen Kantengriff, um diese Kante zu verschieben.
- Halten Sie an einer Ecke **Umschalt** gedrückt, um die Bewegung an der benachbarten Ecke zu spiegeln, für eine symmetrische Perspektive.

In **Verformen**:

- Ziehen Sie die Gitterpunkte und die Tangentengriffe des ausgewählten Punkts.
- Klicken Sie bei gedrückter Taste **Umschalt** auf Punkte, um mehrere gemeinsam zu bewegen.

In jedem Modus:

- Die Pfeiltasten verschieben den Rahmen um 1 px, mit **Umschalt** um 10 px.
- Auf einem Touchscreen zieht ein Finger auf einem Griff oder innerhalb des Rahmens diesen. Ein Finger an anderer Stelle bewegt die Ansicht.

## Transformationsleiste

![Die Leinwandaktionsleiste für eine Transformation mit Modus, Einrasten, den Schaltflächen zum Spiegeln und Drehen, Zurücksetzen, Interpolation, Abbrechen und Anwenden.](shot:transform/transform-bar)

### Modus

**Frei**, **Einheitlich**, **Verzerren** oder **Verformen**. **Einheitlich**
erhält die Proportionen. Ebenentransformationen öffnen sich in **Einheitlich**.

### Originalgröße

Setzt ein platziertes Foto auf 100% zurück. Nur für Fotos ohne **Verzerren**
oder **Verformen**.

### Einrasten

Lässt die Kanten und die Mitte des Rahmens an der Leinwand, an anderen
sichtbaren Ebenen und an Hilfslinien einrasten. Drehungen rasten nicht ein.
Standardmäßig deaktiviert.

### Perspektive

Spiegelt bei **Verzerren** jedes Ziehen einer Ecke auf die benachbarte Ecke.

### Verformungsraster

Bei **Verformen**:

- **Raster teilen**: Wählen Sie **Vertikal teilen**, **Horizontal teilen** oder **Über Kreuz teilen** und tippen Sie dann auf die Verformung, um dort eine Rasterlinie hinzuzufügen, ohne die Form zu ändern. **Escape** bricht das Teilen ab. Ein Raster hat bis zu 32 Zellen in jeder Richtung.
- **Punkte auswählen**: Tippen Sie auf Punkte, um sie auszuwählen und gemeinsam zu bewegen.
- **Raster zurücksetzen**: ersetzt die Verformung durch ein gerades Raster.
- **Raster**: **3 × 3** (Standard), **4 × 4** oder **5 × 5**. Verfügbar, bis Sie die Form ändern.

![Die Leinwandaktionsleiste im Modus Verformen mit Raster teilen, Punkte auswählen, Raster zurücksetzen und Raster.](shot:transform/warp-bar)

### Schaltflächen zum Spiegeln und Drehen

Die Symbolschaltflächen **Horizontal spiegeln**, **Vertikal spiegeln**,
**90° nach links drehen** und **90° nach rechts drehen** spiegeln oder drehen
den Inhalt um den Drehpunkt.

### Zurücksetzen

Macht alle Änderungen dieser Transformation rückgängig und lässt sie geöffnet.
**Modus** kehrt zu **Frei** zurück.

### Interpolation

Legt fest, wie Pixel neu berechnet werden: **Nächster Nachbar**, **Bilinear**,
**Bikubisch** oder **Lanczos**. **Bilinear** ist der Standard in **Frei** und
**Einheitlich**, **Bikubisch** in **Verzerren** und **Verformen**.

## Transformationswerte im Bedienfeld Werkzeug

Das Bedienfeld Werkzeug und im Arbeitsbereich Foto die Leiste Werkzeugoptionen
zeigen die Werte einer geöffneten Transformation, außer in **Verformen**.

- **Positionsanker**: **X** und **Y** in Pixeln, darüber das Ankerraster, das festlegt, welchen Punkt des Rahmens sie angeben.
- **Skalierung**: **Breite** und **Höhe** in Prozent. **Einheitlich** hält sie verknüpft.
- **Drehung**: **Winkel**, von −180° bis 180°.
- **Scherung**: **Scherung**, von −85° bis 85°.

![Das Bedienfeld Werkzeug während einer Transformation mit Positionsanker, Skalierung, Drehung und Scherung.](shot:transform/transform-numbers)

## Ebenentransformationen

Eine Transformation ganzer Mal- oder Fotoebenen wird mit jeder Ebene
gespeichert, und die Pixel werden nicht neu berechnet. **Transformieren** öffnet
sich wieder mit der gespeicherten Transformation.

Bis Sie die Transformation auf die Pixel anwenden, können Sie eine skalierte
oder gedrehte Ebene nicht retuschieren und auf einer verzerrten oder verformten
Ebene nicht malen.

## Transformation auf Pixel anwenden

Sie können die gespeicherte Transformation einer Ebene in ihre Pixel übernehmen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bearbeiten > Transformation auf Pixel anwenden**.
- Wählen Sie **Ebene > Ebeneneinstellungen > Transformation auf Pixel anwenden**.

Während die Transformation angewandt wird, zeigt eine Leiste am unteren Rand der Leinwand
„Transformation wird angewandt…“ mit **Abbrechen**.

## Erneut transformieren

Wählen Sie ohne Auswahl **Bearbeiten > Erneut transformieren**, um die letzte
Ebenentransformation auf die ausgewählten Ebenen anzuwenden. Einfügungen,
Importe und Transformationen ausgewählter Pixel werden nicht wiederholt.

## Platzierte Bilder

Wenn Sie ein Bild aus einer anderen App einfügen oder
**Datei > Bild als Ebene importieren…** wählen, öffnet sich das Bild im
Transformationsrahmen. **Anwenden** platziert das Bild, **Abbrechen** entfernt
es. Bis Sie eins davon wählen, sind andere Befehle nicht verfügbar.
