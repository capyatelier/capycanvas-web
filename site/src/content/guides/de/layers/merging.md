---
title: "Ebenen vereinen"
description: "Ebenen mit den Befehlen zum Vereinen zu einer Ebene zusammenfassen und was mit Vektorebenen geschieht."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types", "layers/vector"]
---

Sie können Ebenen zu einer Malebene vereinen oder zwei Vektorebenen zu einer
Vektorebene. Die Befehle zum Vereinen stehen
gegen Ende des Menüs **Ebene** und des Menüs jeder Ebene.

![Das Menü Ebene bei aktiver Ebene Ribbon, mit Beschnittene Ebenen vereinen, Sichtbare Ebenen vereinen, Sichtbares auf neue Ebene kopieren und Bild reduzieren.](shot:layers/merging-menu)

Jedes Zusammenführen ist ein Rückgängig-Schritt. Eine [Objektebene](/de/docs/layers/types/) wird beim Zusammenführen gerastert. Während Sie eine Auswahlebene oder Schnellmaske bearbeiten oder eine Transformation geöffnet ist, können Sie nicht zusammenführen.

## Mit darunterliegender Ebene vereinen

Sie können die aktive Ebene mit der Ebene darunter vereinen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Mit darunterliegender Ebene vereinen**.
- Drücken Sie **Strg+E** (nicht in der Tastenkürzelbelegung GIMP-Stil).

Die vereinte Ebene übernimmt Namen, Position, Beschneidung und **Alphaschutz**
der unteren Ebene, mit 100% Deckkraft, Verrechnungsmodus Normal und ohne Maske.
Sie ist eine Referenz, wenn eine der beiden Ebenen eine war.

Beide Ebenen müssen sichtbar, nicht gesperrt und auf Normal gestellt sein. Die
Ebene darunter darf kein Filter sein, und sie darf nur beschnitten sein, wenn
auch die aktive Ebene beschnitten ist.

## Vektorebenen vereinen

**Mit darunterliegender Ebene vereinen** behält die Pfade, wenn eine [Vektorebene](/de/docs/layers/vector/) mit der Vektorebene darunter vereint wird, und legt sie davor. Beide Ebenen brauchen 100% Deckkraft, keine Maske, keine Beschneidung und keine angehängten Filter.

Jedes andere Vereinen, das eine Vektorebene einschließt, wandelt ihre Pfade in Pixel um. Ein Hinweis nennt die Ebenen, zum Beispiel „Beim Zusammenfügen werden die Pfade in ‚Line art‘ zu Pixeln.“, und das Vereinen läuft, wenn Sie seine Schaltfläche auswählen. **Bild reduzieren** fügt die Namen seinem Hinweis zu ausgeblendeten Ebenen hinzu.

![Der Hinweis „Beim Zusammenfügen werden die Pfade in ‚Line art‘ zu Pixeln.“ mit einer Schaltfläche Mit darunterliegender Ebene vereinen.](shot:vector/merge-notice)

## Beschnittene Ebenen vereinen

Ist eine Beschneidungsbasis aktiv, lautet **Mit darunterliegender Ebene vereinen**
**Beschnittene Ebenen vereinen**. Der Befehl vereint die Basis und ihre
sichtbaren beschnittenen Ebenen zu einer Ebene, die nach der Basis benannt ist.
Ausgeblendete beschnittene Ebenen bleiben auf die vereinte Ebene beschnitten.

Der Befehl lautet auch bei einem beschnittenen Filter
**Beschnittene Ebenen vereinen** sowie bei einem Filter, der an eine beschnittene Ebene oder an eine
Beschneidungsbasis angehängt ist. Die Basis muss sichtbar und auf Normal
gestellt sein, und mindestens eine beschnittene Ebene muss sichtbar sein.

## Effekt auf Ebene darunter anwenden

Ist ein Filter aktiv, lautet **Mit darunterliegender Ebene vereinen**
**Effekt auf Ebene darunter anwenden**, außer der Filter gehört zu einem
Beschneidungsstapel. Der Befehl wendet den Filter auf die Ebene darunter an oder
auf die Ebene, an die er angehängt ist (siehe
[Wie Filter wirken](/de/docs/filters/how-filters-apply/)).

## Gruppe vereinen

Ist eine Gruppe aktiv, tritt **Ebene > Gruppe vereinen** an die Stelle von
**Mit darunterliegender Ebene vereinen**.

Die Gruppe wird zu einer Ebene mit dem Verrechnungsmodus und der Deckkraft der
Gruppe. Durchreichen wird zu Normal. Die Maske der Gruppe wird angewandt, und
ausgeblendete Ebenen in der Gruppe werden verworfen.

Die Gruppe muss sichtbar und nicht gesperrt sein und darf keine Auswahlebenen
enthalten.

## Sichtbare Ebenen vereinen

Wählen Sie **Ebene > Sichtbare Ebenen vereinen**, um sichtbare gewöhnliche Ebenen zusammenzuführen. Papier bleibt die unterste Papierebene. Ausgeblendete Ebenen bleiben unverändert.

Die zusammengeführte Ebene übernimmt Namen und Position der untersten zusammengeführten Ebene. Ausgeblendete Ebenen, die an eine zusammengeführte Ebene beschnitten waren, werden freigegeben. Die sichtbaren Ebenen müssen entsperrt sein, und darunterliegende Gruppen dürfen keine Auswahlebenen enthalten.

## Sichtbares auf neue Ebene kopieren

Wählen Sie **Ebene > Sichtbares auf neue Ebene kopieren**, um ganz oben in der
Liste eine neue Ebene hinzuzufügen, in der alles Sichtbare vereint ist. Alle
anderen Ebenen bleiben erhalten.

Die neue Ebene heißt „Visible“, bedeckt die Leinwand und wird zur aktiven Ebene.
Gesperrte Ebenen verhindern **Sichtbares auf neue Ebene kopieren** nicht.

## Bild reduzieren

Wählen Sie **Ebene > Bild reduzieren**, um sichtbare gewöhnliche Ebenen zusammenzuführen. Papier bleibt unten als Papier erhalten. Ausgeblendete Ebenen und Pixel außerhalb der Leinwand werden verworfen, aber Auswahlebenen außerhalb von Gruppen bleiben erhalten. Die sichtbaren Ebenen müssen entsperrt sein.

![Der Hinweis über der Leinwand mit dem Text „Beim Reduzieren werden 2 ausgeblendete Ebenen verworfen“ und einer Schaltfläche Bild reduzieren.](shot:layers/merging-flatten-notice)

Hat die Zeichnung ausgeblendete Ebenen, nennt ein Hinweis über der Leinwand ihre
Anzahl, zum Beispiel „Beim Reduzieren werden 2 ausgeblendete Ebenen verworfen“. Es ändert sich
nichts, bis Sie im Hinweis **Bild reduzieren** auswählen.
