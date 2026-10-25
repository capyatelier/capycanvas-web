---
title: "Mischen und Verflüssigen"
description: "Die Werkzeuge Mischen und Verflüssigen zum Verwischen von Farbe und Verschieben von Pixeln auf einer Ebene."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

Mit **Mischen** können Sie die Farbe auf einer Ebene verwischen und vermischen, mit
**Verflüssigen** ihre Pixel verschieben.

## Mischen

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **J**.
- Wählen Sie im Arbeitsbereich Malen **Mischen** in der Werkzeugleiste Werkzeuge aus. Dieselbe Schaltfläche enthält **Klonstempel**.
- Wählen Sie im Arbeitsbereich Foto **Mischen** in der Werkzeugleiste Werkzeuge aus.
- Wählen Sie im Arbeitsbereich Skizze einen Mischpinsel in der Schublade **Formen**.
- Suchen Sie in der Befehlssuche nach **Mischen**.

Wählen Sie in **Werkzeugsatz** einen Satz und einen Mischpinsel. **Wischfinger** ist
der Standard-Mischpinsel.

| Satz | Mischpinsel |
| --- | --- |
| **Mischen** | **Wischfinger**, **Weicher Mischpinsel**, **Weichzeichner**, **Papierwischer**, **Papiertuch**, **Körniger Mischpinsel**, **Struktur-erhaltender Mischpinsel**, **Farbton-Mischpinsel** |
| **Nasse Farbe** | **Natürlicher Mischpinsel**, **Nasser Mischpinsel**, **Farbmischer**, **Mischmesser**, **Borsten-Mischpinsel** |
| **Effekte** | **Malerischer Mischpinsel**, **Kamm-Mischpinsel**, **Streu-Mischpinsel**, **Scharfzeichner**, **Marmorieren**, **Kristall-Mischpinsel**, **Dither-Mischpinsel** |

Die Einstellungen jedes Mischpinsels stehen unter
[Mischen, Farbausbreitung und Borsten](/de/docs/brushes/wet-media/).

### Borsten-Mischpinsel

**Borsten-Mischpinsel** zieht Farbe in Streifen. Das linke Ende dieser Probe ist ungemischt.

![Borsten-Mischpinsel streift die schattierte Farbe rechts.](shot:examples/bristle-blender)

### Dither-Mischpinsel

**Dither-Mischpinsel** mischt die Bänder zu einem Dither-Muster.

![Dither-Mischpinsel mischt die schattierten Bänder rechts.](shot:examples/dither-blender)

### Marmorieren

**Marmorieren** kräuselt die Farbe zu Wirbeln.

![Marmorieren kräuselt die schattierten Bänder auf der rechten Seite.](shot:examples/marbling)

## Verflüssigen

Führen Sie eine der folgenden Aktionen aus:

- Drücken Sie **J**, während Mischen aktiv ist.
- Wählen Sie in den Arbeitsbereichen Malen oder Foto **Verflüssigen** in der Werkzeugleiste Werkzeuge aus. Klicken Sie mit der rechten Maustaste auf die Schaltfläche oder halten Sie sie gedrückt, um einen Modus zu wählen.
- Wählen Sie im Arbeitsbereich Skizze einen Modus im Satz **Verflüssigen** der Schublade **Formen**.
- Suchen Sie in der Befehlssuche nach **Verflüssigen**.

Jeder Modus ist eine Vorgabe in **Werkzeugsatz**:

| Vorgabe | Wirkung |
| --- | --- |
| **Verflüssigen: Verschieben** | Zieht Pixel entlang des Strichs mit. |
| **Verflüssigen: gegen Uhrzeigersinn drehen** | Dreht Pixel gegen den Uhrzeigersinn um die Pinselmitte. |
| **Verflüssigen: im Uhrzeigersinn drehen** | Dreht Pixel im Uhrzeigersinn um die Pinselmitte. |
| **Verflüssigen: Zusammenziehen** | Zieht Pixel zur Pinselmitte hin. |
| **Verflüssigen: Aufblasen** | Drückt Pixel von der Pinselmitte nach außen. |
| **Verflüssigen: Kristalle** | Zerlegt das Bild unter dem Pinsel in kleine, verstreute Zellen. |
| **Kante** | Zieht Pixel von beiden Seiten zur Strichlinie hin. |
| **Wiederherstellen** | Nimmt die Verformung durch Verflüssigen unter dem Pinsel zurück. |

Verflüssigen hat keine Schaltfläche „Anwenden“. Jeder Strich verändert die Ebene und
ist ein eigener Schritt zum Rückgängigmachen. Striche verformen weiter die Pixel, die
die Ebene vor dem ersten Strich hatte, bis Sie auf der Ebene malen, füllen, filtern,
transformieren oder in sie einfügen.

### Kante

**Kante** zieht Farbe zur Strichlinie. Die Streifen links zeigen die ursprüngliche Farbe.

![Kante Ziehen Sie die farbigen Bänder zu einem horizontalen Strich auf der rechten Seite.](shot:examples/liquify-edge)

### Wiederherstellen

**Wiederherstellen** stellt die ursprüngliche Farbe unter dem Pinsel wieder her. Hier wird die rechte Hälfte der verzerrten Bänder wiederhergestellt.

![Verformte Farbstreifen links und mit Wiederherstellen wiederhergestellte Farbe rechts.](shot:examples/liquify-reconstruct)

## Verflüssigen anpassen und Verflüssigen zurücksetzen

Mit **Verflüssigen anpassen** können Sie alles abschwächen, was Verflüssigen an einer
Ebene bewirkt hat, oder mit **Verflüssigen zurücksetzen** die Ebene auf ihre Pixel
vor dem ersten Strich zurückführen.

Führen Sie eine der folgenden Aktionen aus:

- Aktivieren Sie im Bedienfeld **Werkzeug** **Verflüssigen anpassen** oder wählen Sie **Verflüssigen zurücksetzen**.
- Suchen Sie in der Befehlssuche nach **Verflüssigen anpassen** oder **Verflüssigen zurücksetzen**.

Wenn **Verflüssigen anpassen** aktiviert ist, erscheint im Bedienfeld **Werkzeug** ein
Regler **Stärke**. Bei 100% bleibt die Verformung, wie sie ist, bei 0% ist sie
verschwunden. Das Loslassen des Reglers ist ein Schritt zum Rückgängigmachen, ebenso
**Verflüssigen zurücksetzen**.

Beide Befehle sind nicht verfügbar und zeigen die Meldung „Wende zuerst Verflüssigen
auf diese Ebene an“, bis die Ebene Änderungen durch Verflüssigen hat.

## Einstellungen für Verflüssigen

![Das Bedienfeld Werkzeug für Verflüssigen: Kristalle mit Stärke, der Gruppe Verflüssigen mit Verzerrung und Trägheit sowie Verflüssigen anpassen und Verflüssigen zurücksetzen.](shot:drawing/liquify-settings)

**Verzerrung** und **Trägheit** befinden sich in der Gruppe **Verflüssigen** des Bedienfelds **Werkzeug**.

### Stärke

Legt fest, wie weit jeder Pinselabdruck die Pixel verschiebt. Bei leichtem Stiftdruck
und zum Rand einer weichen Spitze hin ist die Wirkung schwächer.

### Verzerrung

Macht die Bewegung unregelmäßig. Bei **Verflüssigen: Kristalle** legt sie fest, wie
weit die Zellen verstreut werden. **Wiederherstellen** hat keine **Verzerrung**.

### Trägheit

Trägt die Wirkung nach dem Abheben des Stifts entlang der letzten Strichrichtung
weiter. **Wiederherstellen** hat keine **Trägheit**.

## Schublade Formen im Arbeitsbereich Skizze

Wählen Sie im Arbeitsbereich Skizze **Formen** in der Titelleiste, um das zuletzt
verwendete Mischen-, Verflüssigen- oder Retusche-Werkzeug zu nutzen, wählen Sie es
erneut, um die Schublade zu öffnen, und ein weiteres Mal, um sie zu schließen. Die
Schublade listet die Sätze, die Werkzeuge des gewählten Satzes und ihre
Einstellungen. **Formen** und **Pinsel** merken sich jeweils ihre eigene letzte
Vorgabe und Pinselgröße.

![Die Schublade Formen im Arbeitsbereich Skizze mit den Sätzen Mischen, Nasse Farbe, Effekte, Verflüssigen und Retusche links, den Mischpinseln des Satzes Mischen in der Mitte und den Einstellungen von Wischfinger rechts.](shot:drawing/sketch-sculpt-drawer)

## Auf einer Maske malen

Auf einer Maske malen Mischen und Verflüssigen einfache Deckung, ohne zu verwischen
oder Pixel zu verschieben. Beim ersten solchen Strich auf jeder Maske erscheint ein
Hinweis.
