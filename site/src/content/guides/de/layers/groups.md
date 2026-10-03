---
title: "Gruppen und Blending"
description: "Halten Sie verwandte Ebenen zusammen und ändern Sie die Kombination ihrer Farben."
purpose: "Wenn eine Zeichnung wächst, halten Gruppen zusammengehörige Ebenen zusammen, sodass die Liste gut lesbar bleibt. Mischmodi ändern die Art und Weise, wie sich die Farben einer Ebene mit den darunter liegenden Ebenen mischen, was für Schatten, Lichter und Farbverläufe nützlich ist."
techniques: ["Zusammengehörige Ebenen in einer Gruppe zusammenfassen.", "Probieren Sie einen Mischmodus auf einer Schattierungsebene aus.", "Halten Sie eine lange Ebenenliste ordentlich."]
figure: "1: Ebenenstapel. 2: Mischmodus. 3: Schaltfläche „Neue Gruppe“."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: Ebenenstapel. 2: Mischmodus. 3: Schaltfläche „Neue Gruppe“."}
---

## Gruppieren Sie verwandte Ebenen

Wählen Sie unten im Ebenenbedienfeld **New group** aus und ziehen Sie dann Ebenen hinein. Beispielsweise können Sie die Farben, Schattierungen und Strichzeichnungen einer Figur in einer Gruppe und den Hintergrund in einer anderen Gruppe behalten. Klicken Sie auf den Pfeil neben einer Gruppe, um sie einzuklappen, wenn Sie ihren Inhalt nicht sehen möchten.

Durch das Ausblenden einer Gruppe wird alles darin ausgeblendet. Wenn eine Ebene verschwunden zu sein scheint, obwohl ihr Auge darauf gerichtet ist, überprüfen Sie, ob die Gruppe, in der sie sich befindet, ausgeblendet ist. Behalten Sie abgeschnittene Ebenen direkt über ihrer Basisebene, wenn Sie sie in eine Gruppe verschieben, damit sie mit dieser verbunden bleiben.

## Versuchen Sie es mit einem Mischmodus

Wählen Sie eine Schattierungsebene aus und öffnen Sie das Mischmodus-Menü über der Liste. **Multiply** verdunkelt die darunter liegenden Farben und eignet sich daher gut für Schatten. **Screen** hellt sie auf, was zu Glanz und Glanzlichtern passt. **Normal** übermalt einfach das, was sich darunter befindet, und die anderen Modi mischen die Farben jeweils auf ihre eigene Weise.

Blenden Sie die Ebene ein und aus, um das Ergebnis zu vergleichen. Wenn der Effekt zu stark ist, verringern Sie die Deckkraft der Ebene, anstatt sie neu zu malen.

## Halten Sie die Liste sauber

Gruppen sorgen für Ordnung in einer langen Liste, während jede Ebene bearbeitbar bleibt, und Sie können die Gruppen, an denen Sie nicht arbeiten, wegklappen. Wenn Sie ein einzelnes flaches Bild für eine andere App benötigen, [export](/de/docs/output/export/) eine Kopie und behalten Sie die `.capy` Datei mit all ihren Ebenen.

Für Farbänderungen, die Sie weiterhin anpassen möchten, wie etwa Helligkeit oder Sättigung, verwenden Sie eine Filterebene aus [Filter und Anpassungen](/de/docs/filters/overview/), anstatt die Änderung in eine Ebene zu malen.
