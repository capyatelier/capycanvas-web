---
title: "HDR"
description: "HDR-Zeichnungen, ihre Darstellung auf dem Bildschirm und ihre SDR-Fassung."
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

In einer HDR-Zeichnung können Sie Farben malen, die heller als SDR-Weiß sind. Eine
Zeichnung mit **16-Bit-Gleitkomma-HDR** oder **32-Bit-Gleitkomma-HDR** ist eine
HDR-Zeichnung.

## HDR-Zeichnungen

Um eine HDR-Zeichnung zu erhalten, führen Sie eine der folgenden Aktionen aus:

- Wählen Sie unter **Datei > Neu…** die Vorgabe **HDR-Zeichnung** oder eine Gleitkomma-**Farbtiefe**.
- Wählen Sie **Bearbeiten > Farbtiefe ändern…** und eine Gleitkomma-Farbtiefe.
- Öffnen Sie eine HDR-PNG-Datei (BT.2020 PQ) oder HDR-AVIF-Datei (16-Bit-Gleitkomma-HDR) oder eine OpenEXR-Datei (32-Bit-Gleitkomma-HDR).
- Setzen Sie **Farbtiefe** auf der Seite **Farbe** der [Einstellungen](/de/docs/preferences/) auf eine Gleitkomma-Farbtiefe, damit neue Zeichnungen HDR sind.

In einer HDR-Zeichnung gilt:

- Das [Bedienfeld Farbe](/de/docs/color/color-panel/) und [Farbe bearbeiten](/de/docs/color/edit-color/) legen die Intensität der Farbe in EV fest.
- Die [Verrechnung](/de/docs/color-management/color-spaces/) ist immer Lineares Licht.
- Überlagerung, Weiches Licht, Hartes Licht, Farbig nachbelichten, Farbig abwedeln, Strahlendes Licht, Hart mischen und Ausschluss stehen als [Verrechnungsmodi](/de/docs/layers/blend-modes/) nicht zur Wahl.
- Kurven bietet die Darstellung **Logarithmisches HDR** und einen **HDR-Bereich**.
- Das Werkzeug [Tonwertbereich](/de/docs/selections/tonal-range/) bietet **Helles HDR · über +1 Blendenstufe**.
- Das Histogramm markiert SDR-Weiß.
- Der [Export](/de/docs/files/export/) bietet HDR-Formate.

Im Web-Editor lässt sich eine HDR-Zeichnung mit mehr als 12 Megapixeln nicht öffnen.

## HDR auf dem Bildschirm

Auf einem Bildschirm, der HDR darstellen kann, zeigen Leinwand und Navigator eine
HDR-Zeichnung in HDR, solange im Bedienfeld [Softproof](/de/docs/color-management/proof/)
**Aus** ausgewählt und die Farbumfangswarnung ausgeschaltet ist. Andernfalls zeigen sie
die SDR-Fassung der Zeichnung, ebenso die Farbsteuerelemente. Im Web-Editor braucht
HDR einen Browser, der einen HDR-Bildschirm meldet.

Ein Kennzeichen links in der Fußleiste zeigt, welche Fassung Sie sehen. Wählen Sie es
aus, um Details zu sehen.

| Kennzeichen | Erscheint, wenn |
| --- | --- |
| „HDR“ | Die Zeichnung in HDR dargestellt wird. |
| „SDR-Vorschau“ | Die Zeichnung auf einem HDR-fähigen Bildschirm im SDR-Modus ist. |
| „SDR wird angezeigt“ | Der Bildschirm kein HDR darstellt. |

## SDR-Fassung

Jede HDR-Zeichnung hat eine gespeicherte SDR-Fassung. Sie wird verwendet:

- auf Bildschirmen ohne HDR und im SDR-Modus;
- für Ebenenminiaturen;
- für den Druck-Softproof;
- für SDR-Exporte und die SDR-Basis von HDR-JPEG- und HDR-AVIF-Exporten.

Sie können die SDR-Fassung anpassen, ohne die HDR-Pixel zu ändern. Führen Sie eine der
folgenden Aktionen aus:

- Wählen Sie **Ansicht > SDR-Softproof** (nicht unter Windows).
- Wählen Sie **SDR-Softproof** in der Befehlssuche.
- Wählen Sie **SDR** oben im Bedienfeld Softproof aus.

![Die Seite SDR des Bedienfelds Softproof mit dem Regler für Balance, Kontrast, Helligkeit und Farbintensität.](shot:color-management/proof-panel-sdr)

Der Regler im Bedienfeld legt vier Werte fest. Seine Mitte zeigt eine feste
Illustration, nicht die Zeichnung. Doppelklicken oder doppeltippen Sie auf einen Teil
des Reglers, um seine Werte zurückzusetzen, oder wählen Sie oben rechts
**SDR-Darstellung zurücksetzen** aus, um alle vier zurückzusetzen. Bei fokussiertem
Regler ändern die Pfeiltasten einen Wert schrittweise, und mit **Umschalt** werden die
Schritte größer. **Escape** bricht ein Ziehen ab. Jedes Ziehen ist ein
Rückgängig-Schritt und wird mit der Zeichnung gespeichert.

### Balance

Ziehen Sie die Mitte des Reglers nach links oder rechts, von −100% bis +100%. Links
betont grobe Formen, rechts feine Texturen.

### Kontrast

Ziehen Sie die Mitte des Reglers nach unten oder oben, von 50% bis 200%.

### Helligkeit

Ziehen Sie den oberen Bogen, von −50% bis +50%.

### Farbintensität

Ziehen Sie den unteren Bogen, von Weiß bei 0% bis zur vollen Farbe bei 100%. Der
Standardwert ist 30%.

## SDR-Vorschau

Sie können zwischen HDR und der SDR-Fassung wechseln, ohne das Bedienfeld Softproof zu
öffnen. Wählen Sie **SDR-Vorschau** in der Befehlssuche, oder weisen Sie dem Befehl auf
der Seite [Tastenkürzel](/de/docs/input/keyboard/) eine Taste zu.

**SDR-Vorschau** funktioniert nur für eine HDR-Zeichnung auf einem HDR-fähigen
Bildschirm, bei ausgeschaltetem Druck-Softproof und ausgeschalteter
Farbumfangswarnung.
