---
title: "Wie Filter wirken"
description: "Wie ein Filter auf einer eigenen Ebene und ein an eine Ebene angehängter Filter das Bild verändern."
related: ["filters/adding", "layers/masks", "layers/merging", "layers/settings"]
---

Ein Filter ist eine Ebene ohne eigene Farbe. Seine Einstellungen bleiben im
Bedienfeld **Eigenschaften** bearbeitbar.

![Das Bedienfeld Ebenen mit Kurven und Klarheit, angehängt an das Terrarium-Foto, und einem Filter Vignette auf einer eigenen Ebene darüber.](shot:filters/layers-chain)

| | Filter auf eigener Ebene | Angehängter Filter |
| --- | --- | --- |
| Hinzugefügt mit | Bedienfeld **Filter**, Menü **Filter**, **Anpassen** in der Auswahlleiste | **Filter hinzufügen** |
| Verändert | Jede Ebene darunter in seiner Gruppe | Nur die Ebene, an die er angehängt ist |
| Im Bedienfeld Ebenen | Eine eigene Zeile | Eine Zeile, die durch ein Kettenglied mit der Zeile darunter verbunden ist |

## Filter auf eigener Ebene

Ein neuer Filter wird über der ausgewählten Ebene und den darauf beschnittenen
oder daran angehängten Ebenen eingefügt. Innerhalb einer Gruppe verändert der
Filter nur die Ebenen unter ihm in dieser Gruppe, außer die Gruppe ist auf
[Durchreichen](/de/docs/layers/settings/) gestellt.

## Angehängter Filter

Sie können Filter an eine Malebene, eine Fotoebene oder eine Gruppe anhängen,
die nicht auf Durchreichen gestellt ist. Wählen Sie die Ebene aus und wählen Sie
dann **Filter hinzufügen** unten im Bedienfeld Ebenen, im Bedienfeld
**Eigenschaften** oder im Menü der Ebene aus.

Angehängte Filter wirken von unten nach oben durch die Kette, nach der Maske der
Ebene und vor ihrer Deckkraft und ihrem Verrechnungsmodus. Bei einer
Beschneidungsbasis verändern sie auch, wo die beschnittenen Ebenen sichtbar
sind. Weichzeichner und Verzerrungen wie **Gaußscher Weichzeichner** und
**Wirbel** können die Farbe der Ebene über ihre Ränder hinaus verteilen.

Wenn Sie die Ebene verschieben, duplizieren oder ausblenden, geschieht dasselbe
mit ihren angehängten Filtern. Löschen Sie die Ebene, bleiben ihre angehängten
Filter als Filter auf eigenen Ebenen erhalten.

## Auf *Ebene* anwenden und Auf die Ebenen darunter anwenden

Sie können einen ausgewählten Filter zwischen den beiden Arten umstellen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Ebeneneinstellungen > Auf *Ebene* anwenden** oder **Auf die Ebenen darunter anwenden**.
- Wählen Sie im Kopfbereich des Bedienfelds Ebenen die Schaltfläche mit dem Kettenglied aus, die an der Stelle von **Auf die Ebene darunter beschneiden** steht.
- Ziehen Sie den Filter auf die Miniatur einer Ebene, um ihn an diese Ebene anzuhängen.

![Der Kopfbereich des Bedienfelds Ebenen mit der Schaltfläche mit dem Kettenglied für einen ausgewählten Filter.](shot:filters/attachment-button)

**Auf *Ebene* anwenden** hängt den Filter an die nächste Ebene darunter an.
**Auf die Ebenen darunter anwenden** setzt den Filter auf eine eigene Ebene, über
die Ebene, an die er angehängt war, und deren beschnittene Ebenen.

Die Schaltfläche ist nicht verfügbar, solange der Filter oder die Ebene darunter
gesperrt ist. Ist die Ebene darunter keine Malebene, Fotoebene oder Gruppe,
lautet ihr Tooltip „Keine Ebene darunter zum Zuordnen“.

## Auswahlen als Filtermasken

Ist beim Hinzufügen eines Filters eine Auswahl aktiv, wird die Auswahl zur
[Maske](/de/docs/layers/masks/) des Filters. Ein einziges **Rückgängig** entfernt
den Filter und stellt die Auswahl wieder her.

## Effekt auf Ebene darunter anwenden

Sie können einen Filter als Farbe in die Ebene darunter übernehmen.

Wählen Sie den Filter aus und führen Sie dann eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Effekt auf Ebene darunter anwenden** oder wählen Sie den Befehl im Ebenenmenü des Filters.
- Drücken Sie **Strg+E**.

![Das Ebenenmenü eines Filters mit Effekt auf Ebene darunter anwenden.](shot:filters/apply-effect-menu)

Ein Filter auf eigener Ebene wird nur auf die Ebene direkt darunter angewandt.
Bei einem angehängten Filter werden die Ebene und ihre gesamte Filterkette zu
Farbe. Ist diese Ebene beschnitten oder sind Ebenen auf sie beschnitten, lautet
der Befehl **Beschnittene Ebenen vereinen** (siehe
[Ebenen vereinen](/de/docs/layers/merging/)).

Der Filter und die Ebene darunter müssen sichtbar, nicht gesperrt und auf
Normal gestellt sein. Der Befehl ist nicht verfügbar, wenn die Ebene direkt
darunter ein Filter ist, der an eine andere Ebene angehängt ist.
