---
title: "Outils de sélection"
description: "Sélectionnez une partie de votre dessin afin que les modifications n'affectent que cette zone."
purpose: "Une sélection marque la partie du dessin sur laquelle vous souhaitez travailler. Lorsqu'il est actif, la peinture, le remplissage et la transformation n'affectent que la zone sélectionnée, le reste du dessin reste donc en sécurité. Capy Canvas dispose d'outils de sélection pour les formes simples, les contours à main levée et les zones de couleur similaire."
techniques: ["Choisissez le bon outil de sélection.", "Ajouter ou soustraire d'une sélection.", "Remplissez une sélection et effacez-la lorsque vous avez terminé."]
figure: "1 : Outils de sélection dans le jeu d'outils. 2 : Mode de sélection, options de plume et de forme. 3 : Une sélection d'ellipse autour du disque."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1 : Outils de sélection dans le jeu d'outils. 2 : Mode de sélection, options de plume et de forme. 3 : Une sélection d'ellipse autour du disque."}
---

## Choisissez un outil de sélection

Dans Paint, choisissez **Lasso selection** ou **Auto select** dans la barre d'outils, et Tool Set répertoriera tous les outils de sélection. Dans Sketch, ils se trouvent sous le bouton **Select** et Photo conserve la plupart d'entre eux dans sa barre d'outils.

**Rectangle select** et **Ellipse select** dessinent des formes simples ; maintenez **Shift** pour un carré ou un cercle et **Alt** pour dessiner à partir du centre. **Lasso selection** suit votre stylet à main levée et **Polygonal lasso** joint les lignes droites entre les points sur lesquels vous cliquez ; cliquez à nouveau sur le premier point ou appuyez sur **Enter** pour le fermer. **Auto select** sélectionne une zone de couleur similaire en un seul clic, et **Select by color** sélectionne chaque zone de cette couleur à la fois. Deux autres outils, **Paint selection** et **Tonal range**, ont leurs propres pages : [Masque rapide et calques de sélection](/fr/docs/selections/quick-mask/) et [Sélection par luminosité](/fr/docs/selections/tonal-range/).

## Combiner et adoucir les sélections

Les quatre boutons en haut du panneau **Tool** choisissent ce qui se passe lorsque vous effectuez une autre sélection. Il peut remplacer l'actuel, y ajouter, en soustraire ou conserver uniquement la zone où les deux se chevauchent. Vous pouvez également maintenir **Shift** pour ajouter, ou **Alt** pour soustraire, sans changer les boutons.

**Feather radius** adoucit le bord de la sélection, de sorte que la peinture et les ajustements disparaissent progressivement au lieu de s'arrêter sur une ligne dure. Pour la sélection automatique, **Tolerance** contrôle la différence entre une couleur et son inclusion, et **Close gaps** empêche la sélection de s'échapper à travers de petites coupures dans votre dessin au trait.

## Utilisez la sélection

Pour sélectionner tout ce qui est peint sur un calque, maintenez **Ctrl** et cliquez sur la vignette du calque. Avec une sélection active, peignez librement : les traits atterrissent uniquement à l’intérieur de celle-ci. Choisissez **Edit → Fill selection** pour le remplir avec la couleur actuelle ou transformez-le en [masque de calque](/fr/docs/layers/masks/). Le menu **Select** peut également inverser la sélection, l'agrandir ou la réduire de quelques pixels, ou encore ramener la dernière sélection avec **Reselect**.

Lorsque vous avez terminé, choisissez **Select → Deselect pixels** pour que vos prochains coups puissent à nouveau aller n'importe où.
