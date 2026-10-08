---
title: "Bedienfeld Farbe"
description: "Die Malfarbe mit dem Farbrad und den Farbfeldern des Bedienfelds Farbe wählen."
related: ["color/edit-color", "color/palettes", "color/eyedropper", "color-management/hdr"]
---

Im Bedienfeld **Farbe** können Sie die Malfarbe wählen. Alle Arbeitsbereiche
verwenden dieselbe Malfarbe.

![Das Bedienfeld Farbe mit dem runden Farbrad, der Farbanzeige oben links und den Farbfeldern unter dem Rad.](shot:color/panel "1 Farbanzeige · 2 Formschaltflächen · 3 Farbe bearbeiten · 4 Vorder- und Hintergrund · 5 Tauschen · 6 Transparente Farbe · 7 Schwarz und Weiß")

## Bedienfeld Farbe öffnen

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Farbe**.
- Wählen Sie **Bedienfeld Farbe** in der Befehlssuche.
- Wählen Sie im Arbeitsbereich Malen die Registerkarte **Farbe** in der linken Spalte aus.
- Wählen Sie **Pinselfarbe** am Ende der Werkzeugleiste Werkzeuge aus, im Arbeitsbereich Skizze am rechten Ende der Titelleiste. Eine Schublade mit den Bedienfeldern Farbe und Paletten öffnet sich.

## Farbrad

Ziehen Sie am äußeren Ring, um den Farbton festzulegen, und im Feld darin, um
Sättigung und Helligkeit festzulegen.

Ziehen Sie im Kreis über den Rand des Felds hinaus, oben links, oben rechts oder
unten, um auf Weiß, die volle Farbe oder Schwarz einzurasten. Ein Grau behält den
Farbton, den Sie zuletzt am Ring eingestellt haben.

## Feldformen

Wählen Sie eine der beiden kleinen Schaltflächen außerhalb des Rings oben rechts aus,
um die Form des Felds zu wechseln. Ihre Tooltips lauten **Okhsv-Kreis verwenden**,
**HSV-Quadrat verwenden** und **HLS-Dreieck verwenden**.

| Form | Feld | Farbanzeige |
| --- | --- | --- |
| Kreis (Standard) | Okhsv. Weiß oben links, die volle Farbe oben rechts, Schwarz unten. | OKLCH |
| Quadrat | HSV. Die Sättigung nimmt nach rechts zu, die Helligkeit nach oben. | HSB |
| Dreieck | HLS. Die Ecken sind Weiß, Schwarz und der reine Farbton. | HLS |

## Farbanzeige

Die Zahlen oben links im Bedienfeld zeigen die Farbe im Modell der Feldform. Wählen
Sie die Farbanzeige aus, um zwischen diesem Modell und RGB von 0 bis 255 zu wechseln.

## Vorder- und Hintergrundfarbe

Wählen Sie **Vordergrundfarbe** (das große Farbfeld unten links) oder
**Hintergrundfarbe** (das Farbfeld dahinter) aus, um mit dieser Farbe zu malen. Die
Befehlssuche verwendet dieselben Namen. Das ausgewählte Farbfeld hat einen
kräftigeren Rand.

Borstenpinsel ziehen in jeden Strich Streifen der Farbe, mit der Sie gerade nicht
malen.

> **Hinweis:** In der [Schnellmaske](/de/docs/selections/quick-mask/) und auf einer [Auswahlebene](/de/docs/selections/selection-layers/) enthalten die Farbfelder ein eigenes Paar, anfangs Schwarz und Weiß, und die Farbe malt mit ihrem Grauwert. Beim Verlassen kehren die Farben für den Bildinhalt zurück. Auf einer Ebenenmaske spielt die Farbe keine Rolle: Pinsel decken auf, und der Radierer verdeckt.

## Transparente Farbe

Mit transparenter Farbe können Sie mit jedem Pinsel und jeder Form radieren. Führen
Sie eine der folgenden Aktionen aus:

- Wählen Sie **Transparente Farbe** (das karierte Farbfeld unten rechts) aus.
- Wählen Sie **Transparente Farbe** in der Befehlssuche.
- Weisen Sie **Mit Transparenz malen** auf der Seite [Tastenkürzel](/de/docs/input/keyboard/) eine Taste zu, und drücken Sie diese, um transparente Farbe ein- oder auszuschalten. **Mit Transparenz malen bei gedrückter Taste** verwendet transparente Farbe nur, solange Sie die Taste gedrückt halten.

Ziehen im Farbrad schaltet zurück auf das Malen mit Farbe.

## Farben tauschen

Sie können Vorder- und Hintergrundfarbe austauschen. Führen Sie eine der folgenden
Aktionen aus:

- Wählen Sie **Vorder- und Hintergrundfarbe tauschen** (die beiden Pfeile rechts neben dem Hintergrundfarbfeld) aus.
- Wählen Sie **Vorder- und Hintergrundfarbe tauschen** in der Befehlssuche.
- Drücken Sie **X** in den Tastenkürzelbelegungen Photoshop-Stil, Krita-Stil, Clip-Studio-Paint-Stil und GIMP-Stil oder **Umschalt+X** im Affinity-Stil.

Dasselbe Farbfeld bleibt ausgewählt. Die Tastenkürzelbelegung {appName} hat keine Taste
für **Farben tauschen**.

## Schwarz und Weiß

Wählen Sie **Mit Schwarz malen** oder **Mit Weiß malen** (die beiden kleinen Kreise
neben dem transparenten Farbfeld) aus, oder wählen Sie **Schwarz** oder **Weiß** in
der Befehlssuche.

Schwarz oder Weiß ersetzt die Farbe des ausgewählten Vorder- oder
Hintergrundfarbfelds. Ist **Transparente Farbe** ausgewählt, wird Schwarz oder Weiß
stattdessen zu einer vorübergehenden Malfarbe. Das Farbrad bearbeitet dann die
vorübergehende Farbe, und Vorder- und Hintergrundfarbe ändern sich nicht.

## Farbe bearbeiten

Wählen Sie **Farbe bearbeiten…** (den Stift oben rechts im Bedienfeld) aus oder
doppelklicken Sie auf das Vorder- oder Hintergrundfarbfeld, um die Farbe über ihre
Zahlenwerte in [Farbe bearbeiten](/de/docs/color/edit-color/) festzulegen. Solange
**Transparente Farbe** ausgewählt ist, ist **Farbe bearbeiten…** nicht verfügbar.

## Menü der Farbfelder

Unter Windows, Linux und Android klicken Sie mit der rechten Maustaste auf das Vorder-
oder Hintergrundfarbfeld oder halten es gedrückt, um **Farbe bearbeiten…**,
**Paletten…** und **Vorder- und Hintergrundfarbe tauschen** aufzurufen.

## HDR-Intensität

In einer [HDR-Zeichnung](/de/docs/color-management/hdr/) legt ein Bogen unter dem
Farbrad die Intensität der Farbe in Blendenstufen (EV) relativ zu SDR-Weiß fest, von
−2 bis +6 EV. Der Wert erscheint unter den Farbfeldern, zum Beispiel „+2.00 EV“.

![Das Bedienfeld Farbe in einer HDR-Zeichnung mit dem Intensitätsbogen unter dem Farbrad.](shot:color/panel-hdr)

- Ziehen Sie entlang des Bogens, um die Intensität festzulegen.
- Doppelklicken Sie auf den Bogen, um zu 0 EV zurückzukehren.
- Drücken Sie bei fokussiertem Bogen die Pfeiltasten, um in Schritten von 0.1 EV zu ändern, oder **Pos1** für 0 EV.

Das Farbrad legt die Grundfarbe fest, und die Intensität multipliziert sie in
linearem Licht. Die Farbfelder und der Bogen zeigen die Farben in der Vorschau über
die SDR-Fassung der Zeichnung. Solange **Transparente Farbe** ausgewählt ist, ist der
Bogen nicht verfügbar.
