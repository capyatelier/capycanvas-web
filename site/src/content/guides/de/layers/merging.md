---
title: "Ebenen vereinen"
description: "Ebenen mit den Befehlen zum Vereinen zu einer Malebene zusammenfassen."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types"]
---

Sie können Ebenen zu einer Malebene vereinen. Die Befehle zum Vereinen stehen
gegen Ende des Menüs **Ebene** und des Menüs jeder Ebene.

![Das Menü Ebene bei aktiver Ebene Ribbon, mit Beschnittene Ebenen vereinen, Sichtbare Ebenen vereinen, Sichtbares auf neue Ebene kopieren und Bild reduzieren.](shot:layers/merging-menu)

Jedes Vereinen ist ein Rückgängig-Schritt. Eine
[Fotoebene](/de/docs/layers/types/) verliert beim Vereinen ihr Originalfoto.
Während Sie eine Auswahlebene oder die Schnellmaske bearbeiten oder während
einer Transformation können Sie nicht vereinen.

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

Wählen Sie **Ebene > Sichtbare Ebenen vereinen**, um alle sichtbaren Ebenen
einschließlich **Papier** zu einer Ebene zu vereinen. Ausgeblendete Ebenen
bleiben unverändert.

Die vereinte Ebene übernimmt Namen und Position der untersten sichtbaren Ebene
(**Papier**, wenn es sichtbar ist). Ausgeblendete Ebenen, die auf eine vereinte
Ebene beschnitten waren, werden freigegeben. Die sichtbaren Ebenen dürfen nicht
gesperrt sein, und Gruppen darunter dürfen keine Auswahlebenen enthalten.

## Sichtbares auf neue Ebene kopieren

Wählen Sie **Ebene > Sichtbares auf neue Ebene kopieren**, um ganz oben in der
Liste eine neue Ebene hinzuzufügen, in der alles Sichtbare vereint ist. Alle
anderen Ebenen bleiben erhalten.

Die neue Ebene heißt „Visible“, bedeckt die Leinwand und wird zur aktiven Ebene.
Gesperrte Ebenen verhindern **Sichtbares auf neue Ebene kopieren** nicht.

## Bild reduzieren

Wählen Sie **Ebene > Bild reduzieren**, um alle sichtbaren Ebenen zu einer Ebene
zu vereinen. Ausgeblendete Ebenen und Pixel außerhalb der Leinwand werden
verworfen, Auswahlebenen außerhalb von Gruppen bleiben jedoch erhalten. Die
sichtbaren Ebenen dürfen nicht gesperrt sein.

![Der Hinweis über der Leinwand mit dem Text „Beim Reduzieren werden 2 ausgeblendete Ebenen verworfen“ und einer Schaltfläche Bild reduzieren.](shot:layers/merging-flatten-notice)

Hat die Zeichnung ausgeblendete Ebenen, nennt ein Hinweis über der Leinwand ihre
Anzahl, zum Beispiel „Beim Reduzieren werden 2 ausgeblendete Ebenen verworfen“. Es ändert sich
nichts, bis Sie im Hinweis **Bild reduzieren** auswählen.
