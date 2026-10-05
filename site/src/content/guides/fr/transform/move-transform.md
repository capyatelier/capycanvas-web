---
title: "Déplacer et transformer"
description: "Déplacer et transformer des calques et des pixels sélectionnés avec l’outil Opération et Transformer."
related: ["selections/working", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Vous pouvez déplacer des calques et des pixels sélectionnés avec l’outil
**Opération**, et les mettre à l’échelle, les faire pivoter, les incliner, les
distordre ou les déformer avec **Transformer**.

## Outil Opération

Effectuez l’une des opérations suivantes :

- Ouvrez le menu d’un calque dans le panneau Calques et choisissez **Déplacer le calque / masque**.
- Appuyez sur **O**.
- Dans Peinture et Photo, sélectionnez **Opération / Transformer** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton, ou appuyez longuement dessus, pour choisir **Opération**.
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

## Laisser une copie

Vous pouvez déplacer une copie des pixels sélectionnés et laisser les originaux en
place.

Activez **Laisser une copie** dans le panneau Outil ou dans la
[barre de sélection](/fr/docs/selections/working/). Maintenez **Alt** au début du
glissement pour obtenir l’effet inverse le temps de ce glissement.

## Transformer

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Transformer**.
- Appuyez sur **Ctrl+T**.
- Sélectionnez **Transformer** dans la barre d’outils Commandes de Peinture et de Photo, ou dans la barre de titre de Croquis.
- Sélectionnez **Transformer** dans la barre de sélection.
- Dans Peinture et Photo, cliquez avec le bouton droit sur **Opération / Transformer** dans la barre d’outils Outils, ou appuyez longuement dessus, et choisissez **Transformer**.

Avec une sélection, **Transformer** modifie les pixels sélectionnés du calque ou du
masque actif. Sans sélection, il modifie les calques sélectionnés. Un cadre muni de
poignées et la barre d’actions de la toile apparaissent.

Pour terminer, sélectionnez **Appliquer** ou appuyez sur **Entrée**. **Annuler** dans
la barre ou **Échap** abandonne la transformation, tout comme la commande
**Annuler** pendant la transformation de calques.

Pour transformer plusieurs calques, supprimez d’abord la sélection.

## Poignées

En **Libre** et **Uniforme** :

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

![La barre d’actions de la toile pour une transformation, avec Mode, Magnétisme, les boutons de retournement et de rotation, Réinitialiser, Interpolation, Annuler et Appliquer.](shot:transform/transform-bar)

### Mode

**Libre**, **Uniforme**, **Distordre** ou **Déformer**. **Uniforme** conserve les
proportions. Les transformations de calques s’ouvrent en **Uniforme**.

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

- **Diviser la grille** : choisissez **Diviser verticalement**, **Diviser horizontalement** ou **Diviser en croix**, puis touchez la déformation pour y ajouter une ligne de grille sans changer la forme. **Échap** annule la division. Une grille compte au plus 32 cellules dans chaque direction.
- **Sélectionner les points** : touchez des points pour les sélectionner et les déplacer ensemble.
- **Réinitialiser la grille** : remplace la déformation par une grille droite.
- **Grille** : **3 × 3** (par défaut), **4 × 4** ou **5 × 5**. Disponible tant que vous n’avez pas modifié la forme.

![La barre d’actions de la toile en mode Déformer, avec Diviser la grille, Sélectionner les points, Réinitialiser la grille et Grille.](shot:transform/warp-bar)

### Boutons de retournement et de rotation

Les boutons à icône **Retourner horizontalement**, **Retourner verticalement**,
**Pivoter de 90° à gauche** et **Pivoter de 90° à droite** retournent ou font
pivoter le contenu autour du pivot.

### Réinitialiser

Annule toutes les modifications faites dans cette transformation et la laisse
ouverte. **Mode** revient à **Libre**.

### Interpolation

Définit le rééchantillonnage des pixels : **Au plus proche**, **Bilinéaire**,
**Bicubique** ou **Lanczos**. **Bilinéaire** est la valeur par défaut en **Libre**
et **Uniforme**, et **Bicubique** en **Distordre** et **Déformer**.

## Valeurs de transformation dans le panneau Outil

Le panneau Outil, et la barre Options de l’outil dans Photo, affichent les valeurs
d’une transformation en cours, sauf en **Déformer**.

- **Point d’ancrage de position** : **X** et **Y**, en pixels, avec au-dessus la grille d’ancrage qui choisit le point du cadre auquel ils correspondent.
- **Échelle** : **Largeur** et **Hauteur**, en pourcentage. **Uniforme** les garde liées.
- **Rotation** : **Angle**, de −180° à 180°.
- **Inclinaison** : **Inclinaison**, de −85° à 85°.

![Le panneau Outil pendant une transformation, avec Point d’ancrage de position, Échelle, Rotation et Inclinaison.](shot:transform/transform-numbers)

## Transformations de calques

La transformation de calques de peinture ou de calques photo entiers est
enregistrée avec chaque calque, et les pixels ne sont pas rééchantillonnés.
**Transformer** se rouvre à partir de la transformation enregistrée.

Tant que vous n’avez pas appliqué la transformation aux pixels, vous ne pouvez pas
retoucher un calque mis à l’échelle ou pivoté, ni peindre sur un calque distordu ou
déformé.

## Appliquer la transformation aux pixels

Vous pouvez intégrer aux pixels d’un calque la transformation enregistrée.

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Appliquer la transformation aux pixels**.
- Choisissez **Calque > Réglages du calque > Appliquer la transformation aux pixels**.

Pendant l’opération, une barre en bas de la toile indique « Application de la
transformation… », avec **Annuler**.

## Répéter la transformation

Sans sélection, choisissez **Édition > Répéter la transformation** pour appliquer
la dernière transformation de calque aux calques sélectionnés. Les collages, les
importations et les transformations de pixels sélectionnés ne sont pas répétés.

## Images placées

Quand vous collez une image provenant d’une autre application ou choisissez
**Fichier > Importer une image comme calque…**, l’image s’ouvre dans le cadre de
transformation. **Appliquer** place l’image et **Annuler** la supprime. Tant que
vous n’avez choisi ni l’un ni l’autre, les autres commandes sont indisponibles.
