---
title: "Filtres et ajustements"
description: "Ajoutez un filtre modifiable et modifiez ses paramètres quand vous le souhaitez."
purpose: "Les filtres modifient l'apparence des calques situés en dessous d'eux, depuis de simples ajustements de luminosité et de couleur jusqu'aux flous et aux effets artistiques. Chaque filtre est son propre calque, vous pouvez donc l'ajuster, le masquer ou le supprimer plus tard sans toucher la peinture en dessous."
techniques: ["Recherchez et ajoutez un filtre.", "Modifiez ses paramètres dans Propriétés.", "Limitez un filtre à une partie du dessin."]
figure: "1 : Panneau Filtres. 2 : Le calque de réglage dans Calques. 3 : Onglet Propriétés pour le modifier."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1 : Panneau Filtres. 2 : Le calque de réglage dans Calques. 3 : Onglet Propriétés pour le modifier."}
---

## Ajouter un filtre

Sélectionnez le calque au-dessus duquel le filtre doit se trouver, puis ouvrez le panneau **Filters**. Les filtres sont triés en groupes tels que Ton, Couleur, Flou et Artistique, et vous pouvez taper dans la zone de recherche pour en trouver un par nom, tel que **Curves** ou **Gaussian Blur**. Choisissez un filtre pour l'ajouter en tant que nouveau calque. Le menu **Filter** en haut de la fenêtre répertorie les mêmes filtres.

Dans Sketch, le bouton **Filters** dans la barre de titre ouvre un tiroir. Choisissez un groupe à gauche, puis un filtre et ses paramètres apparaissent à droite.

## Modifier les paramètres

Sélectionnez le calque du filtre et ouvrez **Properties** pour voir ses paramètres. Certains filtres utilisent des curseurs, tandis que d'autres utilisent une courbe ou une couleur. Modifiez un paramètre à la fois et regardez le dessin au fur et à mesure. Si vous souhaitez voir comment les tons de l'image sont répartis pendant que vous travaillez, ouvrez **View → Histogram…**.

Masquez et affichez le calque de filtre pour comparer le résultat avec l'original, ou réduisez son opacité pour rendre l'ensemble de l'effet plus doux. Vous pouvez revenir aux Propriétés à tout moment pour modifier à nouveau les paramètres.

## Limiter où cela s'applique

Un filtre affecte tout ce qui se trouve en dessous dans la liste des calques. Pour l'éloigner d'une partie du dessin, ajoutez un [mask](/fr/docs/layers/masks/) au calque de filtre ou placez le filtre dans un groupe afin qu'il n'affecte que les calques de ce groupe. Conservez les dessins au trait et les autres détails que vous ne souhaitez pas modifier au-dessus du filtre.

Lorsque vous utilisez plusieurs filtres, leur ordre est important, alors essayez de les déplacer vers le haut ou vers le bas si le résultat n'est pas celui que vous attendiez. Pour un exemple complet avec une photo, voir [Modifier une photo](/fr/docs/filters/image-editing/).
