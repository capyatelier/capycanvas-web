---
title: "Calques vectoriels"
description: "Les calques qui contiennent des tracés au lieu de pixels, et les stylos, figures et la gomme qui agissent sur eux."
related: ["layers/paths", "layers/types", "drawing/figure", "layers/merging"]
---

Un calque vectoriel contient des tracés au lieu de pixels. Vous pouvez remodeler ses tracés après les avoir dessinés ([Modifier des tracés](/fr/docs/layers/paths/)).

## Créer un calque vectoriel

Effectuez l’une des opérations suivantes :

- Sélectionnez **Nouveau calque vectoriel** au bas du panneau Calques.
- Choisissez **Calque > Nouveau > Nouveau calque vectoriel**.
- Appuyez sur **Ctrl+Alt+Maj+N**.
- Tapez « line art » dans la [recherche de commandes](/fr/docs/start/command-search/).

Un badge de tracé signale la vignette d’un calque vectoriel.

![Le panneau Calques avec le calque vectoriel Line art au-dessus de Encre actuelle et de Papier, et un badge de tracé sur sa vignette.](shot:vector/layers-panel)

## Dessiner des tracés

Vous pouvez dessiner des tracés avec **Plume G**, dont l’épaisseur suit la pression du stylet, et avec **Monoligne**, qui garde une seule épaisseur. Chaque trait devient un tracé. Un trait qui commence à l’extrémité ouverte d’un tracé sélectionné prolonge ce tracé.

Sélectionner un calque vectoriel passe au dernier stylo qui a dessiné des tracés, d’abord **Plume G**. Sélectionner de nouveau un calque de peinture rétablit le pinceau que vous aviez.

Sur un calque vectoriel, **Ensemble d’outils** estompe les pinceaux qui ne peuvent pas dessiner de tracés. Un stylo cesse de dessiner des tracés quand vous baissez sa **Dureté** ou son **Intensité**.

![L’avis affiché sur la toile pour un pinceau qui ne peut pas dessiner de tracés, avec Utiliser Plume G, Nouveau calque de peinture et Pixelliser le calque.](shot:vector/refusal-notice)

Un trait fait avec un autre pinceau ne peint rien, et un avis nomme le calque. Ses actions sont **Utiliser Plume G**, **Nouveau calque de peinture** (ajoute un calque de peinture au-dessus) et **Pixelliser le calque**. Quand un réglage empêche le stylo de dessiner, une action portant le nom du réglage, comme **Réinitialiser Dureté**, remplace **Utiliser Plume G**.

## Figures

Avec **Figure**, chaque **Ligne**, **Rectangle**, **Ellipse**, **Polygone**, **Étoile** et **Tracé** devient un tracé, sélectionné et placé devant les autres. Voir [Figure](/fr/docs/drawing/figure/).

## Effacer des tracés

Vous pouvez effacer des tracés avec la **Gomme**, avec **Peinture transparente**, ou avec l’extrémité gomme d’un stylet. Tant que la Gomme est active sur un calque vectoriel, trois modes apparaissent au-dessus des pinceaux gomme dans **Ensemble d’outils**. Dans Croquis, ils figurent en tête de la colonne **Outils** du tiroir **Gomme**.

![Le panneau Ensemble d’outils de la Gomme sur un calque vectoriel, avec Effacer la partie touchée, Effacer les tracés entiers et Effacer jusqu’à l’intersection au-dessus du pinceau Gomme.](shot:vector/eraser-modes)

- **Effacer la partie touchée** coupe un tracé là où la gomme le touche et laisse le reste du tracé intact. C’est le mode par défaut.
- **Effacer les tracés entiers** supprime chaque tracé que la gomme touche.
- **Effacer jusqu’à l’intersection** supprime la partie touchée d’un tracé jusqu’aux croisements les plus proches avec d’autres tracés ou avec lui-même. Un tracé qui ne croise rien est supprimé entièrement.

Effacer ne supprime pas une zone remplie.

## Remplissage

**Remplissage** colore le tracé fermé sur lequel vous cliquez, et **Remplissage au lasso** ajoute un tracé rempli. Voir [Outils de remplissage](/fr/docs/drawing/fill/).

## Pixelliser le calque

Choisissez **Calque > Pixelliser le calque** pour transformer un calque vectoriel en calque de peinture qui contient ce que montrent ses tracés.

## Fusion

**Fusionner avec le calque inférieur** conserve les tracés quand un calque vectoriel fusionne avec un autre calque vectoriel. Toute autre fusion transforme les tracés en pixels, après un avis. Voir [Fusionner des calques](/fr/docs/layers/merging/).
