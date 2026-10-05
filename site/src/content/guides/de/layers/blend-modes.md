---
title: "Verrechnungsmodi"
description: "Verrechnungsmodus und Deckkraft einer Ebene einstellen und die Modi im Menü der Verrechnungsmodi."
related: ["layers/settings", "layers/panel", "color-management/color-spaces", "color-management/hdr"]
---

Sie können festlegen, wie eine Ebene mit den Ebenen darunter verrechnet wird.

![Das Menü der Verrechnungsmodi über dem Bedienfeld Ebenen geöffnet, Normal ist abgehakt.](shot:layers/blend-menu)

## Verrechnungsmodus wählen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ebene > Verrechnungsmodus** und einen Modus.
- Wählen Sie oben links im Kopfbereich des Bedienfelds Ebenen **Ebenenverrechnungsmodus** aus und wählen Sie dann einen Modus.
- Wählen Sie im Bedienfeld **Eigenschaften** unter **Verrechnungsmodus** einen Modus.
- Geben Sie den Namen des Modus in die [Befehlssuche](/de/docs/start/command-search/) ein.

Der aktuelle Modus ist im Menü abgehakt, und sein Name erscheint auf der
Schaltfläche im Kopfbereich. Der Untertitel der Zeile zeigt den Modus, wenn er
nicht Normal ist. Neue Ebenen verwenden Normal.

Bei einer Auswahlebene oder einer gesperrten Ebene können Sie den
Verrechnungsmodus nicht ändern.
[Mit darunterliegender Ebene vereinen](/de/docs/layers/merging/) setzt voraus,
dass beide Ebenen auf Normal stehen. Verrechnungsmodi mischen Farben im
Verrechnungsraum der Zeichnung, der unter **Bearbeiten > Verrechnung**
eingestellt wird (siehe [Farbraum, Farbtiefe und Verrechnung](/de/docs/color-management/color-spaces/)).

## Modi im Menü der Verrechnungsmodi

Das Menü listet die Modi in diesen Abschnitten auf:

- **Durchreichen** (nur Gruppen, siehe [Durchreichen](/de/docs/layers/settings/)), **Normal**
- **Abdunkeln**, **Multiplizieren**, **Farbig nachbelichten**, **Linear nachbelichten**
- **Aufhellen**, **Negativ multiplizieren**, **Farbig abwedeln**, **Hinzufügen**
- **Überlagerung**, **Weiches Licht**, **Hartes Licht**, **Strahlendes Licht**, **Lineares Licht**, **Lichtpunkte**, **Hart mischen**
- **Differenz**, **Ausschluss**, **Subtrahieren**, **Dividieren**
- **Farbton**, **Sättigung**, **Farbe**, **Luminanz**

## Modi in HDR-Zeichnungen

In einer [HDR-Zeichnung](/de/docs/color-management/hdr/) fehlen im Menü
**Überlagerung**, **Weiches Licht**, **Hartes Licht**, **Farbig nachbelichten**,
**Farbig abwedeln**, **Strahlendes Licht**, **Hart mischen** und **Ausschluss**.
Diese Modi sind nur für Farben zwischen Schwarz und Weiß definiert. Eine Ebene,
die bereits einen davon verwendet, behält ihn, und das Menü zeigt diesen Modus
für die Ebene weiterhin an.

## Deckkraft

Führen Sie eine der folgenden Aktionen aus:

- Ziehen Sie **Ebenendeckkraft** im Kopfbereich des Bedienfelds Ebenen, oder geben Sie einen Wert von 0 bis 100 ein.
- Ändern Sie **Deckkraft** im Bedienfeld **Eigenschaften**.
- Geben Sie „Ebenendeckkraft“ und einen Wert in die Befehlssuche ein.

Der Untertitel der Zeile zeigt die Deckkraft, wenn sie unter 100% liegt. Bei
einer Auswahlebene oder einer gesperrten Ebene können Sie die Deckkraft nicht
ändern, ebenso wenig, solange die Schnellmaske aktiv ist.
