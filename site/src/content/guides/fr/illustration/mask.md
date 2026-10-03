---
title: "Masquage"
description: "Donnez au ruban, au disque et au bloc leurs propres couches de couleurs avec des bords modifiables."
purpose: "À cette étape, chaque forme reçoit sa propre couche de couleur. La couleur remplit tout le calque et un masque décide quelle partie vous voyez. Comme rien n'est effacé, vous pouvez ajuster le bord de n'importe quelle forme plus tard simplement en peignant sur son masque."
techniques: ["Sélectionnez une forme avec un lasso ou une sélection automatique.", "Transformez la sélection en masque et remplissez le calque de couleur.", "Paint sur le masque pour ajuster le bord."]
figure: "1 : vignette du masque sélectionné du ruban. 2 : Ruban, disque et bloc sous le dessin au trait. 3 : Gomme, qui cache des parties du masque."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1 : vignette du masque sélectionné du ruban. 2 : Ruban, disque et bloc sous le dessin au trait. 3 : Gomme, qui cache des parties du masque."}
---

## 1. Sélectionnez une forme

Masquer **Sketch** et **Color rough**. Choisissez **Lasso selection** et tracez soigneusement le contour du ruban, comme dans l'exemple.

Si votre dessin au trait est fermé autour d'une forme, **Auto select** peut le faire en un seul clic. Marquez **Line art** comme couche de référence en choisissant **Layer Settings → Use as reference** dans son menu. Choisissez ensuite **Auto select**, choisissez **Sample reference layers** dans le panneau Outils et cliquez à l'intérieur de la forme. [Outils de sélection](/fr/docs/tools/selections/) explique les paramètres qui contrôlent l'étendue de la sélection.

## 2. Créez le calque de couleur masqué

Ajoutez un nouveau calque nommé **Ribbon** sous le dessin au trait. La sélection étant toujours active, ouvrez le menu du ruban et choisissez **Mask → Mask: reveal selection**. Le calque comporte désormais un masque qui affiche uniquement la forme du ruban.

Cliquez sur la vignette de peinture du ruban et choisissez la couleur du ruban. Choisissez **Select → Select all pixels** puis **Edit → Fill selection** pour remplir tout le calque de couleur et terminez avec **Select → Deselect pixels**. Seul le ruban apparaît, mais la couleur continue sous le masque, prête lorsque vous souhaitez élargir la forme.

## 3. Ajustez le bord

Cliquez sur la vignette du masque du ruban pour modifier le masque. Désormais, n'importe quel pinceau révèle davantage la couleur de l'endroit où vous peignez, et le **Eraser** la cache à nouveau. Cliquez à nouveau sur la vignette de peinture lorsque vous souhaitez modifier la couleur elle-même.

Créez **Disc** et **Block** de la même manière. Gardez le disque sous le ruban et le bloc sous le disque, avec le dessin au trait au-dessus des trois. Enregistrez votre dessin, puis passez à [Rendering](/fr/docs/illustration/render/).
