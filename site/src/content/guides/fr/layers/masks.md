---
title: "Masques et détourage"
description: "Masquez des parties d’un calque sans les effacer et conservez l’ombrage à l’intérieur d’une forme."
purpose: "Un masque masque une partie d'un calque sans supprimer aucune peinture, vous pouvez donc toujours changer d'avis sur l'emplacement du bord. Le découpage conserve un calque à l’intérieur de la forme du calque situé en dessous, ce qui constitue le moyen le plus simple d’ajouter un ombrage qui ne déborde jamais des lignes."
techniques: ["Créez un masque à partir d'une sélection.", "Paint sur un masque pour afficher ou masquer la peinture.", "Découpez l’ombrage sur le calque ci-dessous."]
figure: "1 : Vignette du masque du ruban. 2 : Ombrage coupé au-dessus du ruban. 3 : Découper sur le calque ci-dessous et sur les commandes de verrouillage Alpha."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1 : Vignette du masque du ruban. 2 : Ombrage coupé au-dessus du ruban. 3 : Découper sur le calque ci-dessous et sur les commandes de verrouillage Alpha."}
---

## Créer un masque à partir d'une sélection

Commencez par [sélectionner](/fr/docs/tools/selections/) la zone que vous souhaitez garder visible. Ouvrez ensuite le menu du calque et choisissez **Mask → Mask: reveal selection**. Tout ce qui se trouve en dehors de la sélection est masqué, mais rien n’est effacé. Vous pouvez également choisir **Mask: hide selection** pour masquer la zone sélectionnée. N'oubliez pas de désélectionner par la suite, afin que vos prochains traits ne se limitent pas à la sélection.

Un masque ne peut afficher que la peinture qui se trouve réellement sur le calque. Si vous pensez vouloir élargir la forme plus tard, remplissez tout le calque de couleur avant de le masquer, comme le fait l'[étape de masquage](/fr/docs/illustration/mask/) du didacticiel.

## Paint sur le masque

Cliquez sur la vignette du masque à côté du calque pour modifier le masque au lieu de la peinture. Désormais, n'importe quel pinceau révèle une plus grande partie du calque partout où vous peignez, et le **Eraser** le cache à nouveau. La couleur avec laquelle vous peignez n'a pas d'importance sur un masque. Lorsque vous avez terminé, cliquez sur la vignette de peinture pour revenir à la peinture normalement.

Le menu du masque peut éteindre le masque pendant un moment, l'inverser ou le supprimer. Le désactiver est un moyen pratique de comparer le résultat avec la peinture en dessous.

## Découper l'ombrage sur une forme

Ajoutez un nouveau calque directement au-dessus d'un calque de base, ouvrez son menu et choisissez **Layer Settings → Clip to layer below**. Tout ce que vous peignez sur le calque découpé n'affiche désormais que les endroits où le calque de base contient de la peinture, afin que vous puissiez ombrer librement sans dépasser les bords. Vous pouvez empiler plusieurs calques découpés au-dessus de la même base, un pour les ombres et un autre pour les reflets.

**Alpha lock** est une alternative plus simple lorsque vous souhaitez recolorer des traits déjà existants, tels que des dessins au trait. Il conserve la nouvelle peinture à l’intérieur des traits existants sur le même calque. Le [stade de rendu](/fr/docs/illustration/render/) du didacticiel utilise les deux.
