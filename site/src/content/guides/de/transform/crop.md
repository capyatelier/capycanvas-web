---
title: "Zuschneiden"
description: "Die Leinwand mit dem Werkzeug Zuschneiden zuschneiden und begradigen."
related: ["transform/image", "selections/working", "drawing/ruler", "photo/crop"]
---

Mit dem Werkzeug **Zuschneiden** können Sie die Leinwand auf einen Rahmen
zuschneiden. Abgeschnittene Pixel bleiben verborgen auf ihren Ebenen, außer Sie
aktivieren **Abgeschnittene Bereiche löschen**.

## Zuschneiden

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bearbeiten > Bild > Zuschneiden**.
- Drücken Sie **C**.
- Wählen Sie im Arbeitsbereich Foto in der Werkzeugleiste Werkzeuge **Zuschneiden** aus.

Ein Rahmen mit Griffen erscheint um die ganze Leinwand oder als größtmöglicher
Rahmen im gewählten Verhältnis. Die Leinwand außerhalb des Rahmens wird
abgedunkelt, und am unteren Rand der Leinwand erscheint die
[Leinwandaktionsleiste](/de/docs/selections/working/) für den Zuschnitt.

- Ziehen Sie innerhalb des Rahmens, um ihn zu verschieben.
- Ziehen Sie einen Eck- oder Kantengriff, um die Größe des Rahmens zu ändern. Halten Sie **Umschalt** gedrückt, um seine Proportionen zu erhalten, oder **Alt**, um die Größe von der Mitte aus zu ändern.
- Ziehen Sie den Rahmen über den Leinwandrand hinaus, um transparente Leinwand hinzuzufügen.

Auf einem Touchscreen reagieren nur die Griffe auf einen Finger. Ein Finger
innerhalb des Rahmens bewegt die Ansicht.

Zum Abschließen wählen Sie **Anwenden** aus oder drücken Sie **Eingabe**.
**Abbrechen**, **Escape** und **Rückgängig** verwerfen den Zuschnitt. In beiden
Fällen kehrt das zuvor verwendete Werkzeug zurück.

**Anwenden** schneidet auch gesperrte Ebenen zu. Solange eine Transformation
geöffnet ist, können Sie keinen Zuschnitt beginnen.

![Der Zuschnittrahmen auf dem Terrarium-Foto mit der Leinwandaktionsleiste am unteren Rand.](shot:transform/crop-bar)

## Verhältnis

Wählen Sie in der Leinwandaktionsleiste unter **Verhältnis** **Frei**,
**Original**, **1:1**, **4:5**, **2:3**, **5:7** oder **16:9**. Der Rahmen wird
zum größtmöglichen Rahmen in diesem Verhältnis. Standard ist **Frei**.

**Zuschnittausrichtung wechseln**, die Symbolschaltfläche neben **Verhältnis**,
wechselt den Rahmen zwischen Quer- und Hochformat.

Verhältnis, Überlagerung und **Abgeschnittene Bereiche löschen** werden für den
nächsten Zuschnitt übernommen.

![Das Menü Verhältnis in der Zuschnittleiste.](shot:transform/crop-ratio-menu)

## An Inhalt anpassen

**An Inhalt anpassen** setzt den Rahmen aufrecht auf die Grenzen der sichtbaren
Pixel, einschließlich der Pixel außerhalb der Leinwand. **Verhältnis** wechselt
zu **Frei**.

## Überlagerung

Wählen Sie unter **Überlagerung** **Drittel**, **Raster**, **Diagonal** oder
**Goldener Schnitt**. Standard ist **Drittel**. Drücken Sie beim Zuschneiden
**O**, um die nächste Überlagerung anzuzeigen.

## Begradigen

Wählen Sie in der Leinwandaktionsleiste **Begradigen** aus und ziehen Sie dann
eine Linie entlang eines Bildelements, das waagerecht oder senkrecht sein soll. Der
Rahmen dreht sich passend zur Linie. Halten Sie **Umschalt** gedrückt, damit die
Linie in 15°-Schritten einrastet. Auf einem Touchscreen zeichnet ein Finger die
Linie, solange **Begradigen** ausgewählt ist.

Sie können den Winkel auch unter **Begradigen** im Bedienfeld Werkzeug
einstellen. Der Rahmen dreht sich um höchstens 45° in jede Richtung.

Wenn Sie einen gedrehten Zuschnitt anwenden, werden Malebenen und Masken neu
berechnet. Platzierte Fotos behalten ihre Originalpixel.

Um an einer Hilfslinie zu begradigen, wählen Sie die Hilfslinie aus und wählen
Sie in ihrer Leinwandaktionsleiste **Begradigen** aus (siehe
[Lineale und Hilfslinien](/de/docs/drawing/ruler/)). Ein Zuschnitt öffnet sich,
an der Hilfslinie ausgerichtet.

## Abgeschnittene Bereiche löschen

Aktivieren Sie **Abgeschnittene Bereiche löschen**, um beim Anwenden des
Zuschnitts die Pixel außerhalb des Rahmens zu verwerfen. Platzierte Fotos
behalten ihre Originalpixel. Standardmäßig deaktiviert.

Ein Zuschnitt, der mit den verborgen behaltenen Pixeln zu groß wäre, funktioniert
nur mit aktiviertem **Abgeschnittene Bereiche löschen**.

## Zurücksetzen

**Zurücksetzen** setzt den Rahmen aufrecht auf die ganze Leinwand zurück und
deaktiviert **Begradigen**. Ist ein Verhältnis gewählt, wird der Rahmen zum
größtmöglichen Rahmen in diesem Verhältnis.

## Zuschnitteinstellungen im Bedienfeld Werkzeug

Beim Zuschneiden zeigt das Bedienfeld Werkzeug (und im Arbeitsbereich Foto die
Leiste Werkzeugoptionen):

- **Größe**: **Breite** und **Höhe** des Rahmens in Pixeln. Ist ein Verhältnis gewählt, folgt die andere Seite.
- **Begradigen**: den Winkel des Rahmens, von −45° bis 45°.
- Die Schaltflächen der Leinwandaktionsleiste.

![Das Bedienfeld Werkzeug beim Zuschneiden mit Breite, Höhe und Begradigen.](shot:transform/crop-tool-panel)

## Leinwand auf Auswahl zuschneiden

Sie können die Leinwand auf die Grenzen einer Auswahl zuschneiden.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Bearbeiten > Bild > Leinwand auf Auswahl zuschneiden**.
- Wählen Sie in der [Auswahlleiste](/de/docs/selections/working/) **Zuschneiden** aus.

Pixel außerhalb der Auswahlgrenzen bleiben verborgen auf ihren Ebenen. Auf eine
umgekehrte Auswahl können Sie nicht zuschneiden.

## Abgeschnittene Pixel zurückholen

Wählen Sie **Bearbeiten > Bild > Alles sichtbar machen**, um die Leinwand zu
vergrößern, bis sie die Pixel aller Ebenen zeigt, oder vergrößern Sie die
Leinwand mit **Bearbeiten > Bild > Leinwandgröße…** (siehe
[Bildgröße und Drehung](/de/docs/transform/image/)).
