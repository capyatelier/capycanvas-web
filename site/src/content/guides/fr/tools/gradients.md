---
title: "Remplissages et dégradés"
description: "Remplissez une zone en un clic ou avec un mélange fluide d'une couleur à l'autre."
purpose: "L'outil Remplissage verse de la couleur dans une zone en un seul clic, ce qui constitue le moyen le plus rapide de colorer un dessin au trait. Un dégradé se mélange doucement d’une couleur à l’autre, ce qui est utile pour les ciels, les arrière-plans et l’éclairage tamisé."
techniques: ["Remplissez une zone à l’intérieur de votre dessin au trait en un seul clic.", "Dessinez un dégradé linéaire ou radial.", "Conservez un remplissage ou un dégradé à l’intérieur d’une sélection."]
figure: "1 : Types de dégradés dans le jeu d'outils. 2 : Couleurs de premier plan et d’arrière-plan. 3 : Le calque qui reçoit le dégradé."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1 : Types de dégradés dans le jeu d'outils. 2 : Couleurs de premier plan et d’arrière-plan. 3 : Le calque qui reçoit le dégradé."}
---

## Remplissez une zone en un clic

Choisissez l'outil **Fill** ou appuyez sur **F** et cliquez à l'intérieur d'une zone pour la remplir avec la couleur de premier plan. Pour colorer un dessin au trait se trouvant sur un autre calque, marquez d'abord le calque de dessin au trait comme référence avec **Layer Settings → Use as reference** et choisissez **Reference layers** dans Jeu d'outils. Sélectionnez ensuite le calque vide sur lequel vous souhaitez peindre et cliquez à l'intérieur de la zone. Le remplissage s'arrête au niveau des lignes, même si elles se trouvent sur un calque différent.

Si le remplissage s'échappe par un petit espace dans vos lignes, augmentez **Close gaps** dans le panneau Outils. **Expansion** pousse légèrement le remplissage sous les lignes, de sorte qu'il ne reste aucun bord blanc entre la couleur et l'encre.

## Choisissez les couleurs et le calque

Il est plus facile de modifier un dégradé plus tard s'il possède son propre calque, alors ajoutez d'abord un nouveau calque. Choisissez ensuite les deux couleurs dans le panneau **Color** : le dégradé commence par la couleur de premier plan et se termine par la couleur de fond.

Choisissez l'outil **Gradient**, puis choisissez un type dans **Tool Set**. Les dégradés **Linear** se mélangent en une ligne droite et les dégradés **Radial** s'étalent en cercle à partir d'un point central. Les versions *couleur à effacer* font fondre la couleur de premier plan vers la transparence au lieu de se fondre dans la couleur d'arrière-plan.

## Faites glisser pour le dessiner

Pour un dégradé linéaire, faites glisser depuis l'endroit où doit se trouver la première couleur jusqu'à l'endroit où doit se trouver la deuxième couleur. Pour un dégradé radial, commencez par le centre et faites glisser vers l'extérieur. Un glissement court permet un changement rapide entre les couleurs, et un glissement long répartit le mélange sur une plus grande partie du dessin.

Si le résultat n'est pas tout à fait correct, annulez et faites glisser à nouveau. Il faut souvent plusieurs essais pour trouver le bon angle et la bonne longueur.

## Gardez-le où vous le souhaitez

Si une [selection](/fr/docs/tools/selections/) est active, le dégradé remplit uniquement la zone sélectionnée. Désélectionnez-la ensuite pour que vos prochains coups puissent aller n'importe où. Pour une limite que vous souhaiterez peut-être ajuster ultérieurement, utilisez un [mask](/fr/docs/layers/masks/) au lieu d'une sélection. Étant donné que le dégradé se trouve sur son propre calque, vous pouvez également l'adoucir ultérieurement en réduisant l'opacité du calque.
