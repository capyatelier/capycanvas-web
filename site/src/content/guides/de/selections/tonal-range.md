---
title: "Nach Helligkeit auswählen"
description: "Das Werkzeug Tonwertbereich zum Auswählen von Pixeln nach ihrer Helligkeit."
related: ["selections/tools", "selections/quick-mask", "color-management/hdr", "customize/toolbars"]
---

Mit dem Werkzeug **Tonwertbereich** können Sie Pixel nach ihrer Helligkeit
auswählen. Die Helligkeit wird in Blendenstufen relativ zum Referenzweiß (0)
gemessen. Das Werkzeug liest das sichtbare Bild, alle Ebenen zusammen, und
erstellt eine Auswahl mit weicher Kante.

## Tonwertbereich wählen

Führen Sie eine der folgenden Aktionen aus:

- Geben Sie „Tonwertbereich“ in die [Befehlssuche](/de/docs/start/command-search/) ein.
- Wählen Sie im Arbeitsbereich Skizze in der Titelleiste **Auswahl** aus, wählen Sie die Schaltfläche erneut aus, um die Schublade zu öffnen, und wählen Sie **Tonwertbereich** aus.
- Drücken Sie eine Taste, die Sie unter [Tastenkürzel](/de/docs/input/keyboard/) **Tonwertbereich** zugewiesen haben.
- Wählen Sie **Tonwertbereich** in einer Werkzeugleiste aus, der Sie es mit **Werkzeuge einfügen…** hinzugefügt haben (siehe [Werkzeugleisten und Titelleiste](/de/docs/customize/toolbars/)).

**Tonwertbereich** hat keine Standardtaste und in den Werkzeugleisten der
Arbeitsbereiche Malen und Foto keine Schaltfläche. Solange es das aktive
Werkzeug ist, listet das Bedienfeld Werkzeugsatz alle Auswahlwerkzeuge.

![Die Einstellungen von Tonwertbereich in der Schublade Auswahl im Arbeitsbereich Skizze, mit Modus, Tonwerte, Weichheit und Weiche Kante.](shot:selections/tonal-range-settings)

## Tonwerte

Wählen Sie in der Zeile **Tonwerte · Blendenstufen relativ zum Referenzweiß**
eine Schaltfläche aus, um dieses Helligkeitsband auszuwählen. Das Band wird
entsprechend **Modus** mit der aktuellen Auswahl kombiniert (siehe
[Auswahlwerkzeuge](/de/docs/selections/tools/)).

Der Tooltip jeder Schaltfläche nennt ihr Band:

- **Schatten · unter −5 Blendenstufen**
- **Mittlere Schatten · −5 bis −3.5 Blendenstufen**
- **Mitteltöne · −3.5 bis −1.5 Blendenstufen**
- **Mittlere Lichter · −1.5 bis −0.5 Blendenstufen**
- **Lichter · über −0.5 Blendenstufen**
- **Helles HDR · über +1 Blendenstufe**, nur in [HDR-Zeichnungen](/de/docs/color-management/hdr/)
- **Benutzerdefiniert · Bereich in Blendenstufen einstellen oder aufnehmen**

Solange eine Tonwertschaltfläche ausgewählt ist, folgt die Auswahl Änderungen
an **Weichheit**, **Weiche Kante**, **Von** und **Bis**. Wenn Sie ein anderes
Werkzeug oder einen anderen **Modus** wählen, wird die Tonwertschaltfläche
abgewählt.

## Benutzerdefinierter Bereich

Sie können das Band selbst einstellen oder es auf der Leinwand aufnehmen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Benutzerdefiniert · Bereich in Blendenstufen einstellen oder aufnehmen** aus und stellen Sie **Von** und **Bis** in Blendenstufen ein. Standard ist −3.5 und −1.5.
- Ziehen Sie über einen Bereich der Leinwand, um den Helligkeitsumfang dieses Bereichs zu verwenden.
- Klicken Sie auf die Leinwand, um ein Band um die dortige Helligkeit zu zentrieren. Das Band behält die aktuelle benutzerdefinierte Breite oder ist 1 Blendenstufe breit, wenn zuvor ein anderer Tonwert ausgewählt war.

Das Aufnehmen auf der Leinwand stellt den Tonwert auf Benutzerdefiniert um. Im
Web-Editor teilen sich **Von** und **Bis** einen Bereichsregler.

![Die Einstellungen von Tonwertbereich mit ausgewähltem Benutzerdefiniert und dem Bereich in Blendenstufen.](shot:selections/tonal-range-custom)

## Weichheit

Verbreitert den weichen Übergang an beiden Enden des Bands, von 0 bis 200%.
Standard ist 100%.

## Weiche Kante

Macht den Rand der Auswahl um bis zu 100 px weicher.

## Modus und gehaltene Tasten

**Tonwertbereich** hat dieselben Schaltflächen unter **Modus** wie die anderen
Auswahlwerkzeuge und keine **Kantenglättung**. Halten Sie beim Klicken oder
Ziehen **Umschalt**, **Alt** oder **Umschalt+Alt** gedrückt, um hinzuzufügen,
abzuziehen oder die Schnittmenge zu bilden.

## Schnellmaske und Auswahlebenen

**Tonwertbereich** funktioniert in der [Schnellmaske](/de/docs/selections/quick-mask/)
und beim Bearbeiten einer [Auswahlebene](/de/docs/selections/selection-layers/)
und ändert dann diese Maske. Seine Leinwandaktionsleiste ist die
[Auswahlleiste](/de/docs/selections/working/) am unteren Rand der Leinwand.
