---
title: "Auswahlwerkzeuge"
description: "Wählen Sie einen Teil Ihrer Zeichnung aus, sodass sich Änderungen nur auf diesen Bereich auswirken."
purpose: "Eine Auswahl markiert den Teil der Zeichnung, an dem Sie arbeiten möchten. Während es aktiv ist, wirken sich Malen, Füllen und Transformieren nur auf den ausgewählten Bereich aus, sodass der Rest der Zeichnung geschützt bleibt. Capy Canvas verfügt über Auswahlwerkzeuge für einfache Formen, Freihandkonturen und Bereiche mit ähnlicher Farbe."
techniques: ["Wählen Sie das richtige Auswahlwerkzeug.", "Zu einer Auswahl hinzufügen oder davon subtrahieren.", "Füllen Sie eine Auswahl aus und löschen Sie sie, wenn Sie fertig sind."]
figure: "1: Auswahlwerkzeuge im Werkzeugsatz. 2: Auswahlmodus, Feder- und Formoptionen. 3: Eine Ellipsenauswahl um die Scheibe."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Auswahlwerkzeuge im Werkzeugsatz. 2: Auswahlmodus, Feder- und Formoptionen. 3: Eine Ellipsenauswahl um die Scheibe."}
---

## Wählen Sie ein Auswahlwerkzeug

Wählen Sie in Paint in der Symbolleiste **Lasso selection** oder **Auto select** aus, und im Werkzeugsatz werden alle Auswahlwerkzeuge aufgelistet. In Sketch befinden sie sich unter der Schaltfläche **Select**, und Photo behält die meisten davon in seiner Symbolleiste.

**Rectangle select** und **Ellipse select** zeichnen einfache Formen; Halten Sie **Shift** gedrückt, um ein Quadrat oder einen Kreis zu zeichnen, und **Alt**, um von der Mitte aus zu zeichnen. **Lasso selection** folgt Ihrem Stift freihändig und **Polygonal lasso** verbindet gerade Linien zwischen den Punkten, auf die Sie klicken. Klicken Sie erneut auf den ersten Punkt oder drücken Sie **Enter**, um ihn zu schließen. **Auto select** wählt mit einem Klick einen Bereich ähnlicher Farbe aus, und **Select by color** wählt jeden Bereich dieser Farbe auf einmal aus. Zwei weitere Werkzeuge, **Paint selection** und **Tonal range**, haben ihre eigenen Seiten: [Schnellmaske und Auswahlebenen](/de/docs/selections/quick-mask/) und [Nach Helligkeit auswählen](/de/docs/selections/tonal-range/).

## Kombinieren und mildern Sie die Auswahl

Die vier Schaltflächen oben im **Tool**-Bedienfeld legen fest, was passiert, wenn Sie eine andere Auswahl treffen. Es kann den aktuellen ersetzen, ihn ergänzen, davon subtrahieren oder nur den Bereich beibehalten, in dem sich die beiden überlappen. Sie können auch **Shift** zum Addieren oder **Alt** zum Subtrahieren gedrückt halten, ohne die Schaltflächen zu ändern.

**Feather radius** macht den Rand der Auswahl weicher, sodass Farbe und Anpassungen allmählich ausgeblendet werden, anstatt an einer harten Linie anzuhalten. Bei der automatischen Auswahl steuert **Tolerance**, wie unterschiedlich eine Farbe sein und dennoch enthalten sein kann, und **Close gaps** verhindert, dass die Auswahl durch kleine Unterbrechungen in Ihrer Strichzeichnung durchsickert.

## Nutzen Sie die Auswahl

Um alles auszuwählen, was auf einer Ebene gemalt ist, halten Sie **Ctrl** gedrückt und klicken Sie auf die Miniaturansicht der Ebene. Wenn eine Auswahl aktiv ist, können Sie frei malen: Striche landen nur darin. Wählen Sie **Edit → Fill selection**, um es mit der aktuellen Farbe zu füllen, oder verwandeln Sie es in eine [Ebenenmaske](/de/docs/layers/masks/). Das Menü **Select** kann die Auswahl auch umkehren, um einige Pixel vergrößern oder verkleinern oder mit **Reselect** die letzte Auswahl wiederherstellen.

Wenn Sie fertig sind, wählen Sie **Select → Deselect pixels**, damit Ihre nächsten Schläge wieder überall hingehen können.
