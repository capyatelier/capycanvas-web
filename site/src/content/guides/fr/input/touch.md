---
title: "Gestes tactiles"
description: "Ce que font les doigts sur la toile, et les touchers à plusieurs doigts que vous pouvez attribuer."
related: ["input/pen", "start/canvas", "start/undo", "color/eyedropper", "customize/bubbles"]
---

Sur un écran tactile, vous pouvez déplacer la toile, prélever des couleurs et
exécuter des commandes avec les doigts.

> **Remarque :** les doigts ne dessinent jamais. Utilisez un stylet ou une souris pour dessiner sur la toile.

## Déplacer la toile

Faites glisser la toile avec deux doigts pour la faire défiler. Pincez avec deux
doigts pour zoomer, et faites tourner deux doigts pour faire pivoter la toile.
Avec l’outil **Main**, un seul doigt fait aussi défiler.

**Verrouiller la rotation** et **Verrouiller le zoom**, dans le menu du zoom en
bas de la toile, empêchent le pincement de faire pivoter ou de zoomer la vue.
Voir [Afficher la toile](/fr/docs/start/canvas/).

Tant que le stylet est sur la toile, les doigts ne déplacent pas la toile. Un
doigt posé sur une poignée de transformation ou de recadrage, ou sur la source du
**Tampon de duplication**, fait glisser la poignée ou la source à la place.

## Prélever une couleur

Maintenez un doigt immobile sur la toile pour prélever la couleur qui se trouve
dessous. Un anneau grossissant apparaît au-dessus du doigt. Faites glisser pour
viser, puis levez le doigt pour prendre la couleur. Appuyez sur **Échap** pour
annuler.

Un deuxième doigt posé sur la toile annule le prélèvement.

## Effacer le calque

Frottez la toile avec trois doigts pour exécuter **Effacer tout le calque** sur le
calque actif. Déplacez les trois doigts ensemble, inversez le mouvement, puis
inversez-le de nouveau sans lever les doigts. Un seul **Annuler** restaure le
calque. Un calque verrouillé n’est pas effacé.

## Déplacer une bulle

Faites glisser une [bulle](/fr/docs/customize/bubbles/) avec deux doigts pour la
déplacer depuis n’importe quel endroit de celle-ci.

## Barres d’outils en mode Zen

Dans l’application Linux, en [mode Zen](/fr/docs/customize/zen/), balayez vers
l’intérieur depuis un bord de la fenêtre avec un doigt pour afficher les barres
d’outils et les panneaux ancrés à ce bord.

## Touchers à plusieurs doigts

Vous pouvez exécuter une action en touchant la toile avec deux, trois ou quatre
doigts.

| Toucher | Action par défaut |
| --- | --- |
| **Toucher à deux doigts** | **Annuler** |
| **Toucher à trois doigts** | **Rétablir** |
| **Toucher à quatre doigts** | **Rien**, ou **Mode Zen** avec les raccourcis **Style Procreate** |

Tous les doigts d’un toucher doivent être posés avant que l’un d’eux ne se lève.
Des doigts qui bougent, ou qui restent posés aussi longtemps qu’un appui long, ne
comptent pas comme un toucher. Si un toucher a déplacé la vue, la vue revient à
sa place.

## Attribuer les touchers à plusieurs doigts

Pour modifier un toucher :

1. Choisissez **Édition > Préférences** et sélectionnez **Stylet et saisie**.
2. Sélectionnez le toucher sous **Gestes tactiles**.
3. Choisissez une action, ou **Rien** pour désactiver le toucher.

**Réinitialiser**, dans la liste des actions, rétablit la valeur par défaut. Les
actions qui ne durent que pendant le maintien, comme **Déplacer la vue**, ne sont
pas listées.

Un jeu de raccourcis exporté depuis la page
[Raccourcis clavier](/fr/docs/input/keyboard/) inclut les touchers.
**Réinitialiser tous les raccourcis** sur cette page réinitialise aussi les touchers.

![Les réglages Gestes tactiles avec leurs actions par défaut.](shot:touch/touch-gestures)

## Plateformes

Les gestes tactiles fonctionnent sous Linux, Windows, Android, iPad et sur le web.
Le groupe **Gestes tactiles** n’est pas affiché sur macOS, où un frottement à trois doigts sur le trackpad efface toujours le calque.
