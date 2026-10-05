---
title: "Taille et rotation de l’image"
description: "Les commandes Édition > Image qui modifient la taille et l’orientation de toute l’image."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Vous pouvez redimensionner, faire pivoter et retourner toute l’image depuis
**Édition > Image**. L’image reste en place à l’écran.

Ces commandes sont indisponibles pendant un recadrage ou une transformation, et
pendant la modification d’un masque, du Masque rapide ou d’un calque de sélection.
Pour **Recadrer** et **Recadrer la toile sur la sélection**, voir
[Recadrer](/fr/docs/transform/crop/).

![Le sous-menu Image du menu Édition.](shot:transform/image-menu)

## Taille de l’image…

Vous pouvez mettre à l’échelle toute l’image, ou ne modifier que sa résolution.

Choisissez **Édition > Image > Taille de l’image…**. Les calques de peinture et les
masques sont rééchantillonnés, et les photos placées conservent leurs pixels
d’origine. Les sélections, les repères et les réglages de filtre exprimés en pixels
sont mis à l’échelle avec l’image.

![La boîte de dialogue Taille de l’image.](shot:transform/image-size-dialog)

### Largeur et Hauteur

Indiquez la nouvelle taille en **Pixels** ou en **Pourcentage**. Changer d’unité
convertit les valeurs.

### Conserver les proportions

Lie **Largeur** et **Hauteur**. Activé par défaut.

### Résolution

Définit la résolution en pixels par pouce. Si vous ne modifiez que la résolution,
les pixels restent inchangés. Le champ indique au départ la résolution du dessin, ou
72 ppi si le dessin n’en a pas.

### Rééchantillonner

**Automatique** (par défaut) utilise Lanczos quand l’image rétrécit et Bicubique
quand elle s’agrandit. Vous pouvez aussi choisir **Bicubique**, **Lanczos**,
**Bilinéaire** ou **Au plus proche**.

## Taille de la toile…

Vous pouvez ajouter ou retirer de la toile autour de l’image sans
rééchantillonnage.

Choisissez **Édition > Image > Taille de la toile…**. Les pixels situés hors d’une
toile plus petite restent masqués sur leurs calques, et une toile plus grande les
affiche de nouveau.

![La boîte de dialogue Taille de la toile.](shot:transform/canvas-size-dialog)

### Largeur et Hauteur

Indiquez la nouvelle taille en **Pixels** ou en **Pourcentage**. Changer d’unité
convertit les valeurs.

### Relative

Ajoute les valeurs saisies à la taille actuelle. Désactivé par défaut.

### Point d’ancrage

Choisit, dans une grille de 3 × 3, le côté ou l’angle de l’image qui reste en place.
**Au centre** est la valeur par défaut.

## Faire pivoter et retourner l’image

Choisissez l’une de ces commandes dans **Édition > Image** :

- **Pivoter l’image de 90° à gauche**
- **Pivoter l’image de 90° à droite**
- **Pivoter l’image de 180°**
- **Retourner l’image horizontalement**
- **Retourner l’image verticalement**

Toute l’image pivote ou se retourne avec sa sélection et ses repères. Les pixels ne
sont pas rééchantillonnés. Pour faire pivoter ou retourner seulement la vue, voir
[Afficher la toile](/fr/docs/start/canvas/).

## Rogner

Choisissez **Édition > Image > Rogner** pour réduire la toile aux pixels visibles.
Les pixels situés hors de la nouvelle toile restent masqués sur leurs calques.

## Tout révéler

Choisissez **Édition > Image > Tout révéler** pour agrandir la toile jusqu’à ce
qu’elle affiche les pixels de tous les calques, y compris les calques masqués et les
pixels situés hors de la toile.
