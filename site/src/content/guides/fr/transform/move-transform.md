---
title: "Déplacer et transformer"
description: "Déplacer et transformer des calques, des pixels sélectionnés et des tracés avec l’outil Opération et Transformer."
related: ["selections/working", "layers/paths", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Vous pouvez déplacer des calques et des pixels sélectionnés avec l’outil
**Opération**, et les mettre à l’échelle, les faire pivoter, les incliner, les
distordre ou les déformer avec **Transformer**.

## Outil Opération

Effectuez l’une des opérations suivantes :

- Ouvrez le menu d’un calque dans le panneau Calques et choisissez **Déplacer le calque / masque**.
- Appuyez sur **O**.
- Dans Peinture et Photo, sélectionnez **Opération / Transformer / Modifier les points** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton, ou appuyez longuement dessus, pour choisir **Opération**.
- Tapez « Opération » dans la [recherche de commandes](/fr/docs/start/command-search/).

Croquis n’a pas de bouton **Opération**.

## Déplacer des calques

Sans sélection, faites glisser sur la toile pour déplacer les calques sélectionnés.
Les touches fléchées les décalent de 1 px, et de 10 px avec **Maj**.

Vous ne pouvez pas déplacer un calque verrouillé.

## Déplacer des pixels sélectionnés

Avec une sélection, faites glisser pour déplacer les pixels sélectionnés du calque
de peinture actif, par pas d’un pixel entier. Pendant la modification d’un masque,
**Opération** déplace le masque.

Quand les repères sont affichés, **Opération** sélectionne et fait aussi glisser
les repères (voir [Règles et repères](/fr/docs/drawing/ruler/)).

## Déplacer des tracés

Sur un calque vectoriel, **Opération** sélectionne, déplace, redimensionne et fait pivoter des tracés au lieu de déplacer le calque. Appuyez sur **Ctrl+A** pour sélectionner tous les tracés. **Édition > Transformer** avec des tracés sélectionnés passe à **Opération** et à son cadre. Voir [Modifier des tracés](/fr/docs/layers/paths/).

## Laisser une copie

Vous pouvez déplacer une copie des pixels sélectionnés et laisser les originaux en
place.

Activez **Laisser une copie** dans le panneau **Outil**, ou choisissez **Plus > Laisser une copie** dans la [barre de sélection](/fr/docs/selections/working/). Maintenez **Alt** au début du déplacement pour inverser ce choix pendant ce seul déplacement.

## Transformer

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Transformer**.
- Appuyez sur **Ctrl+T**.
- Sélectionnez **Transformer** dans la barre d’outils Commandes de Peinture et de Photo, ou dans la barre de titre de Croquis.
- Sélectionnez **Transformer** dans la barre de sélection.
- Dans Peinture et Photo, cliquez avec le bouton droit sur **Opération / Transformer / Modifier les points** dans la barre d’outils Outils, ou appuyez longuement dessus, et choisissez **Transformer**.

Avec une sélection, **Transformer** modifie les pixels sélectionnés du calque ou du
masque actif. Sans sélection, il modifie les calques sélectionnés. Un cadre muni de
poignées et la barre d’actions de la toile apparaissent.

Pour terminer, sélectionnez **Appliquer la transformation** ou appuyez sur **Entrée**. **Annuler la transformation** dans
la barre ou **Escape** abandonne la transformation, tout comme la commande
**Annuler** pendant la transformation de calques.

Pour transformer plusieurs calques, supprimez d’abord la sélection.

## Poignées

Lors de la mise à l'échelle :

- Faites glisser à l’intérieur du cadre pour le déplacer. Maintenez **Maj** pour ne le déplacer qu’horizontalement ou verticalement.
- Faites glisser une poignée d’angle ou de côté pour mettre à l’échelle depuis le côté opposé. Maintenez **Maj** pour conserver les proportions, ou **Alt** pour mettre à l’échelle autour du pivot.
- Maintenez **Ctrl** et faites glisser une poignée de côté pour incliner, jusqu’à 85°.
- Faites glisser la poignée située au-dessus du bord supérieur pour faire pivoter autour du pivot. Maintenez **Maj** pour procéder par pas de 15°.
- Faites glisser le pivot pour le déplacer.

En **Distordre** :

- Faites glisser un angle pour le déplacer seul, ou une poignée de côté pour déplacer ce côté.
- Maintenez **Maj** sur un angle pour reproduire le déplacement en miroir sur l’angle voisin, pour une perspective symétrique.

En **Déformer** :

- Faites glisser les points du maillage, et les poignées de tangente du point sélectionné.
- Faites **Maj**+clic sur des points pour en déplacer plusieurs ensemble.

Dans tous les modes :

- Les touches fléchées décalent le cadre de 1 px, et de 10 px avec **Maj**.
- Sur un écran tactile, un doigt posé sur une poignée ou à l’intérieur du cadre le fait glisser. Un doigt posé ailleurs déplace la vue.

## Barre de transformation

![La barre de transformation avec les boutons de mode, les commandes de retournement et d'accrochage, Annuler la transformation et Appliquer la transformation.](shot:transform/transform-bar)

### Mode

Sélectionnez **Redimensionner**, **Distordre** ou **Déformer** dans la barre. **Conserver les proportions** conserve les proportions pendant la mise à l’échelle. En mode **Distordre**, **Perspective** reporte le déplacement d’un coin sur le coin voisin. Le choix par défaut est **Redimensionner**.

### Taille d’origine

Ramène une photo placée à 100 %. Uniquement pour les photos sans **Distordre** ni
**Déformer**.

### Magnétisme

Aimante les bords et le centre du cadre à la toile, aux autres calques visibles et
aux repères. La rotation n’est pas aimantée. Désactivé par défaut.

### Perspective

Avec **Distordre**, reproduit en miroir chaque déplacement d’angle sur l’angle voisin.

### Grille de déformation

Avec **Déformer** :

- **Grille** ouvre **3 × 3** (par défaut), **4 × 4** et **5 × 5**, ainsi que les commandes de fractionnement de grille. La taille de la grille est disponible jusqu'à ce que vous changiez la forme.
- Choisissez **Diviser verticalement**, **Diviser horizontalement** ou **Diviser en croix**, puis sélectionnez un point sur le maillage pour ajouter une ligne de quadrillage sans modifier la forme. **Escape** annule le fractionnement. Une grille peut contenir jusqu'à 32 cellules dans chaque direction.
- **Sélectionner les points** sélectionne les points à déplacer ensemble.
- **Réinitialiser la grille** restaure un maillage droit.

![La barre de transformation en mode Déformer avec Grille et Sélectionner les points.](shot:transform/warp-bar)

### Boutons de retournement et de rotation

**Retourner horizontalement** se trouve dans la barre. **Plus** contient **Retourner verticalement**, **Pivoter de 90° à gauche** et **Pivoter de 90° à droite**. Ces commandes retournent ou font pivoter le contenu autour du pivot.

### Réinitialiser la transformation

Choisissez **Réinitialiser la transformation** dans **Plus** pour annuler chaque modification de la transformation actuelle. La transformation reste ouverte et revient à **Redimensionner**.

### Interpolation

Choisissez **Interpolation** dans **Plus** pour définir la manière dont les pixels sont rééchantillonnés : **Au plus proche**, **Bilinéaire**, **Bicubique** ou **Lanczos**. **Bilinéaire** est la valeur par défaut lors de la mise à l'échelle et **Bicubique** dans **Distordre** et **Déformer**.

## Valeurs de transformation dans le panneau Outil

Le panneau Outil, et la barre Options de l’outil dans Photo, affichent les valeurs
d’une transformation en cours, sauf en **Déformer**.

- **Point d’ancrage de position** : **X** et **Y**, en pixels, avec au-dessus la grille d’ancrage qui choisit le point du cadre auquel ils correspondent.
- **Redimensionner** : **Largeur** et **Hauteur**, en pourcentage. **Conserver les proportions** les garde liées.
- **Rotation** : **Angle**, de −180° à 180°.
- **Inclinaison** : **Inclinaison**, de −85° à 85°.

![Le panneau Outil pendant une transformation, avec Point d’ancrage de position, Échelle, Rotation et Inclinaison.](shot:transform/transform-numbers)

## Transformations de calques

La transformation de calques entiers de peinture ou Objet est enregistrée avec chaque calque, et les pixels ne sont pas rééchantillonnés. **Transformer** rouvre la transformation enregistrée.

Tant que vous n’avez pas appliqué la transformation aux pixels, vous ne pouvez pas
retoucher un calque mis à l’échelle ou pivoté, ni peindre sur un calque distordu ou
déformé.

## Appliquer la transformation

Vous pouvez intégrer aux pixels d’un calque la transformation enregistrée.

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Appliquer la transformation**.
- Choisissez **Calque > Réglages du calque > Appliquer la transformation**.

Pendant l’opération, une barre en bas de la toile indique « Application de la
transformation… », avec **Annuler la transformation**.

## Répéter la transformation

Sans sélection, choisissez **Édition > Répéter la transformation** pour appliquer
la dernière transformation de calque aux calques sélectionnés. Les collages, les
importations et les transformations de pixels sélectionnés ne sont pas répétés.

## Images placées

Quand vous collez une image provenant d’une autre application ou choisissez
**Fichier > Import Image as
Layer…**, l’image s’ouvre dans le cadre de
transformation. **Appliquer la transformation** place l’image et **Annuler la transformation** la supprime. Tant que
vous n’avez choisi ni l’un ni l’autre, les autres commandes sont indisponibles.
