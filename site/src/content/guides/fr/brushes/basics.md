---
title: "Taille, opacité et débit"
description: "Taille du pinceau, Opacité et Débit, et les panneaux, barres et touches où vous modifiez les réglages du pinceau."
related: ["brushes/tip-texture", "brushes/reset", "drawing/brush-tools", "input/keyboard"]
---

Chaque modification d’un réglage de pinceau est enregistrée avec le préréglage du
pinceau ([Enregistrer et réinitialiser les pinceaux](/fr/docs/brushes/reset/)).

## Panneau Outil

Vous pouvez modifier tous les réglages du pinceau actif dans le panneau **Outil**.

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Outil**.
- Dans Peinture, sélectionnez l’onglet **Outil** dans la colonne de gauche.
- Dans Photo, sélectionnez **Outil** dans la bande d’icônes à droite.
- Sélectionnez de nouveau le bouton de l’outil actif. **Outil** est la dernière colonne du tiroir.

Chaque réglage a une valeur, des boutons **−** et **+** et un curseur.
Sélectionnez la valeur pour saisir un nombre. Seuls les réglages utilisés par le
pinceau apparaissent, regroupés sous des intitulés comme **Pointe** et
**Texture** ([Pointe et texture](/fr/docs/brushes/tip-texture/)).

![Le panneau Outil pour Crayon avec Taille du pinceau, Opacité et Débit au-dessus des groupes Pointe et Texture.](shot:brushes/tool-panel)

### Taille du pinceau

Définit le diamètre du pinceau, de 0,5 à 2048 px.

### Opacité

Définit la force de chaque empreinte du trait. Aucun pinceau intégré ne fait
varier l’Opacité avec la pression du stylet.

### Débit

Définit la quantité de peinture déposée par chaque empreinte, mesurée à pleine
pression pour les pinceaux dont le débit varie avec la pression. Les pinceaux
humides et de mélange utilisent aussi le Débit pour la force avec laquelle chaque
empreinte se mélange à la peinture du calque.

Les pinceaux Fluidité n’ont pas de Débit.

## Accumulation dans un trait

Là où un trait se croise lui-même, ces pinceaux restent à la force de leur
empreinte la plus forte : les préréglages du groupe **Plume**, **Feutre**,
**Crayon d’ombrage**, **Pinceau**, **Pinceau à soies**, **Plat texturé**,
**Brossage à sec**, **Bloc de pastel**, **Glacis transparent**,
**Lavis d’aquarelle** et **Aquarelle humide**. Les autres pinceaux s’accumulent là où
leurs empreintes se chevauchent.

Le réglage **Fusion** du dessin détermine la façon dont les empreintes
s’accumulent
([Espace colorimétrique, profondeur de couleur et fusion](/fr/docs/color-management/color-spaces/)).

## Panneau Taille du pinceau

Vous pouvez choisir une taille dans une grille du panneau **Taille du pinceau**.

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Taille du pinceau**.
- Dans Peinture, sélectionnez l’onglet **Taille du pinceau** à côté d’**Outil** dans la colonne de gauche.
- Dans Photo, sélectionnez **Taille du pinceau** dans la bande d’icônes à droite.

Chaque bouton affiche un point et une taille en pixels. Le bouton de la taille
active est enfoncé.

Quand **Peindre la sélection** est actif, le panneau règle la taille du pinceau
de sélection. Vous pouvez attribuer une touche à chaque taille sous
**Tailles de pinceau** sur la page Raccourcis clavier.

![Le panneau Taille du pinceau avec sa grille de boutons de taille.](shot:brushes/brush-size-panel)

## Barre Options de l’outil

Vous pouvez modifier les réglages de l’outil actif sur une seule rangée avec la
barre **Options de l’outil**. Dans Photo, elle se trouve au bout de la barre
d’outils du haut. Dans les autres espaces de travail, ajoutez-la à une barre
d’outils avec **Insérer des outils…**
([Barres d’outils et barre de titre](/fr/docs/customize/toolbars/)).

Les menus **Outil** et **Variante** viennent en premier quand l’outil propose des
choix, puis **Mélange de couleurs** pour les pinceaux qui mélangent la peinture,
puis les réglages numériques. Les réglages qui ne tiennent pas sont regroupés
sous **Autres options de l’outil**.

- Double-cliquez (ou touchez deux fois) le libellé ou l’icône d’un réglage pour lui rendre la valeur intégrée du pinceau.
- Faites défiler au-dessus d’une valeur pour la modifier pas à pas. Avec un doigt, faites glisser la valeur vers le haut ou vers le bas.
- Cliquez avec le bouton droit sur la barre, ou appuyez longuement dessus, pour choisir **Horizontal : texte**, **Horizontal : icônes** ou **Afficher les curseurs**.

![La barre Options de l’outil dans Photo pour le Pinceau de peinture, avec Variante et les réglages numériques.](shot:brushes/tool-options-bar)

## Curseurs dans Croquis

Dans Croquis, vous pouvez régler la taille et l’opacité du pinceau avec les deux
curseurs de la barre du bord gauche.

- Touchez ou cliquez sur la piste pour définir une valeur. Un aperçu montre la pointe à sa taille réelle en pixels, ou à l’opacité choisie.
- Faites glisser le long de la piste pour modifier la valeur. L’aperçu se ferme quand vous levez le doigt ou le stylet.
- Touchez l’embout au bout du curseur pour voir l’aperçu sans changer la valeur.

Sélectionnez **+** (**Marquer cette valeur comme favorite**) dans l’aperçu pour
marquer la valeur sur la piste, ou **−** (**Retirer le favori**) pour retirer la
marque. Toucher près d’une marque définit exactement cette valeur. Chaque
préréglage de pinceau conserve ses propres favoris.

Un curseur est grisé quand l’outil actif n’a ni taille ni opacité. Vous pouvez
ajouter le **Curseur de taille du pinceau** et le
**Curseur d’opacité du pinceau** à n’importe quelle barre d’outils avec **Insérer des outils…**.

![La barre du bord gauche dans Croquis, avec l’aperçu de taille ouvert à côté du Curseur de taille du pinceau.](shot:brushes/sketch-size-slider)

## Touches

| Touche | Action |
| --- | --- |
| **[** | **Réduire la taille du pinceau** de 1 px. Maintenez la touche pour répéter. |
| **]** | **Augmenter la taille du pinceau** de 1 px. Maintenez la touche pour répéter. |
| Aucune | **Réduire l’opacité du pinceau** et **Augmenter l’opacité du pinceau** de 1 %. |

Vous pouvez attribuer des touches à ces actions sous **Peinture** sur la page
[Raccourcis clavier](/fr/docs/input/keyboard/).

## Saisir une valeur

Cherchez le nom d’un réglage dans la recherche de commandes, comme **Débit…**, et
tapez la nouvelle valeur ([Recherche de commandes](/fr/docs/start/command-search/)).
