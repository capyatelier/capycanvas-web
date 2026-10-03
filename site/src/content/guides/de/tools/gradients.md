---
title: "Füllungen und Farbverläufe"
description: "Füllen Sie einen Bereich mit einem Klick oder mit einer sanften Überblendung von einer Farbe zur anderen."
purpose: "Das Füllwerkzeug gießt mit einem einzigen Klick Farbe in einen Bereich. Dies ist die schnellste Möglichkeit, Strichzeichnungen einzufärben. Stattdessen geht ein Farbverlauf sanft von einer Farbe zur anderen über, was für Himmel, Hintergründe und sanftes Licht nützlich ist."
techniques: ["Füllen Sie mit einem Klick einen Bereich innerhalb Ihrer Strichzeichnungen.", "Zeichnen Sie einen linearen oder radialen Farbverlauf.", "Behalten Sie eine Füllung oder einen Farbverlauf innerhalb einer Auswahl bei."]
figure: "1: Verlaufstypen im Werkzeugsatz. 2: Vordergrund- und Hintergrundfarben. 3: Die Ebene, die den Farbverlauf erhält."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: Verlaufstypen im Werkzeugsatz. 2: Vordergrund- und Hintergrundfarben. 3: Die Ebene, die den Farbverlauf erhält."}
---

## Füllen Sie einen Bereich mit einem Klick

Wählen Sie das Werkzeug **Fill** oder drücken Sie **F** und klicken Sie in einen Bereich, um ihn mit der Vordergrundfarbe zu füllen. Um Strichzeichnungen einzufärben, die sich auf einer anderen Ebene befinden, markieren Sie zunächst die Strichzeichnungsebene als Referenz mit **Layer Settings → Use as reference** und wählen Sie im Werkzeugsatz **Reference layers** aus. Wählen Sie dann die leere Ebene aus, auf der Sie malen möchten, und klicken Sie in den Bereich. Die Füllung stoppt an den Linien, auch wenn sie sich auf einer anderen Ebene befinden.

Wenn die Füllung durch eine kleine Lücke in Ihren Leitungen austritt, erhöhen Sie **Close gaps** im Werkzeugbedienfeld. **Expansion** schiebt die Füllung leicht unter die Linien, sodass kein dünner weißer Rand zwischen der Farbe und der Tinte verbleibt.

## Wählen Sie die Farben und die Ebene

Ein Farbverlauf lässt sich später am einfachsten ändern, wenn er über eine eigene Ebene verfügt. Fügen Sie daher zuerst eine neue Ebene hinzu. Wählen Sie dann die beiden Farben im Bedienfeld **Color** aus: Der Farbverlauf beginnt mit der Vordergrundfarbe und endet mit der Hintergrundfarbe.

Wählen Sie das Tool **Gradient** und dann einen Typ in **Tool Set** aus. **Linear**-Verläufe verschmelzen in einer geraden Linie, und **Radial**-Verläufe breiten sich kreisförmig von einem Mittelpunkt aus aus. Bei den *Color to Clear*-Versionen wird die Vordergrundfarbe transparent ausgeblendet, anstatt mit der Hintergrundfarbe zu verschmelzen.

## Ziehen Sie, um es zu zeichnen

Für einen linearen Farbverlauf ziehen Sie von der Stelle, an der die erste Farbe sein sollte, zur Stelle, an der die zweite Farbe sein sollte. Für einen radialen Farbverlauf beginnen Sie in der Mitte und ziehen Sie nach außen. Durch kurzes Ziehen erfolgt ein schneller Wechsel zwischen den Farben, durch langes Ziehen wird die Mischung über einen größeren Teil der Zeichnung verteilt.

Wenn das Ergebnis nicht ganz stimmt, machen Sie den Vorgang rückgängig und ziehen Sie erneut. Oft sind mehrere Versuche erforderlich, um den richtigen Winkel und die richtige Länge zu finden.

## Bewahren Sie es dort auf, wo Sie es haben möchten

Wenn ein [selection](/de/docs/tools/selections/) aktiv ist, füllt der Farbverlauf nur den ausgewählten Bereich. Deaktivieren Sie anschließend die Auswahl, damit Ihre nächsten Striche überall hingehen können. Für eine Grenze, die Sie möglicherweise später anpassen möchten, verwenden Sie eine [mask](/de/docs/layers/masks/) anstelle einer Auswahl. Da sich der Farbverlauf auf einer eigenen Ebene befindet, können Sie ihn später auch weicher machen, indem Sie die Deckkraft der Ebene verringern.
