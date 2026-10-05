---
title: "Ajouter et modifier des filtres"
description: "Ajouter des filtres et modifier leurs réglages dans le panneau Propriétés."
related: ["filters/how-filters-apply", "filters/tone", "filters/color", "start/command-search"]
---

Vous pouvez ajouter un filtre [sur son propre calque ou rattaché à un calque](/fr/docs/filters/how-filters-apply/),
puis modifier ses réglages dans le panneau **Propriétés**.

## Panneau Filtres

Vous pouvez ajouter un filtre sur son propre calque en le sélectionnant dans le
panneau **Filtres**.

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Filtres**.
- Dans Peinture et Photo, sélectionnez l’onglet **Filtres** à côté de **Propriétés** dans la colonne de droite.
- Dans Croquis, sélectionnez **Filtres** dans la barre de titre.

![Le panneau Filtres avec le menu des catégories, le bouton de recherche et les lignes de filtres avec leurs aperçus.](shot:filters/filters-panel)

Lorsqu’un calque est sélectionné, chaque ligne montre un aperçu du filtre sur ce
calque et sur les calques situés en dessous. Les filtres animés portent une
marque devant leur icône.

Le menu en haut affiche une catégorie ou **Tous les filtres**. **Rechercher des
filtres** trouve un filtre par son nom dans la catégorie choisie.

Après l’ajout d’un filtre, le panneau **Propriétés** passe au premier plan, à
côté de **Filtres**.

## Menu Filtre

Vous pouvez ajouter un filtre sur son propre calque depuis le menu **Filtre**.

Effectuez l’une des opérations suivantes :

- Choisissez une catégorie et un filtre dans le menu **Filtre**.
- Dans Croquis, choisissez **Menu principal > Filtre**, puis une catégorie et un filtre.
- Tapez le nom du filtre dans la [recherche de commandes](/fr/docs/start/command-search/).

Le menu contient aussi [**Séparation de fréquences…**](/fr/docs/retouch/dodge-burn/),
et son sous-menu **Remplissage** ajoute des [calques de remplissage](/fr/docs/layers/types/).
Vous ne pouvez pas ajouter de filtre en Masque rapide ni pendant la modification
d’un calque de sélection.

## Ajuster

Vous pouvez ajouter un filtre masqué par la sélection en cours. Sélectionnez
**Ajuster** dans la barre de sélection sur la toile, puis choisissez une
catégorie et un filtre.

![La barre de sélection avec le menu Ajuster ouvert sur la catégorie Tons.](shot:filters/selection-adjust)

## Ajouter un filtre

Vous pouvez rattacher un filtre au calque sélectionné.

Effectuez l’une des opérations suivantes :

- Sélectionnez **Ajouter un filtre** en bas du panneau Calques ou du panneau **Propriétés**.
- Ouvrez le menu du calque et choisissez **Ajouter un filtre**.

![Le menu Ajouter un filtre ouvert depuis le bas du panneau Calques.](shot:filters/add-filter-menu)

**Ajouter un filtre** fonctionne sur les calques de peinture et les calques photo
déverrouillés, ainsi que sur les groupes qui ne sont pas réglés sur Transfert.
Son menu contient toutes les catégories sauf **Remplissage**.

## Tiroir Filtres de Croquis

Dans Croquis, vous pouvez choisir des filtres et modifier leurs réglages dans le
tiroir **Filtres**. Sélectionnez **Filtres** dans la barre de titre, puis une
catégorie dans **Type de filtre** et un filtre dans **Filtres**.

![Le tiroir Filtres de Croquis avec les colonnes Type de filtre, Filtres et Propriétés.](shot:filters/sketch-drawer)

| Calque sélectionné | Effet de la sélection d’un filtre dans le tiroir |
| --- | --- |
| Un filtre | Le remplace, en conservant son nom, son masque, son opacité, son mode de fusion et sa place |
| Un calque écrêté | Rattache le filtre à ce calque |
| Tout autre calque | Ajoute le filtre sur son propre calque au-dessus de ce calque |

**Annuler**, en bas de **Type de filtre**, supprime le filtre sélectionné et
ferme le tiroir. Pour conserver le filtre, sélectionnez de nouveau **Filtres**
dans la barre de titre.

## Panneau Propriétés

Vous pouvez modifier les réglages du filtre sélectionné dans le panneau
**Propriétés**.

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Propriétés**.
- Dans Peinture et Photo, sélectionnez l’onglet **Propriétés** dans la colonne de droite.
- Dans Croquis, utilisez la colonne de droite du tiroir **Filtres**.

![Le panneau Propriétés de Courbes avec le menu des pages, Échantillonner un point, Réglage ciblé et le graphique de la courbe.](shot:filters/properties-curves)

| Commande | Utilisation |
| --- | --- |
| Menu des pages | Affiche une page des réglages d’un filtre, comme la courbe **Rouge** de **Courbes**. |
| Curseur | Faites glisser, ou sélectionnez **−** ou **+**. Sélectionnez la valeur pour saisir un nombre, une unité ou une expression comme `85/2`. Effacez la valeur pour rétablir la valeur par défaut. |
| Couleur | Ouvre [Modifier la couleur](/fr/docs/color/edit-color/). **Utiliser la couleur sélectionnée** applique la couleur actuelle. |
| Dégradé | Modifie les points de couleur comme avec l’outil [Dégradé](/fr/docs/drawing/gradient/). |

Chaque glissement est une étape d’annulation, et **Échap** pendant un
glissement rétablit la valeur. Certains réglages acceptent des valeurs saisies
au-delà des extrémités du curseur.

Les tailles en px sont des pixels de la toile. Après
[**Taille de l’image…**](/fr/docs/transform/image/), l’effet suit l’échelle de
l’image et le nombre reste le même.

Pendant la mise à jour de **Tons foncés/Tons clairs**, **Clarté** ou
**Correction du voile**, le titre du panneau se termine par « Mise à jour… ».
Les réglages d’un filtre verrouillé ne peuvent pas être modifiés.

## Définir les tons à partir de l’image

**Niveaux**, **Courbes** et **Balance des blancs** ont, en haut du panneau
**Propriétés**, des boutons qui lisent l’image telle qu’elle arrive au filtre.

| Bouton | Filtre | Effet |
| --- | --- | --- |
| **Échantillonner un point > Choisir le point noir**, **Choisir un point neutre** ou **Choisir le point blanc** | **Niveaux**, **Courbes** | Cliquez sur la toile pour définir ce point. |
| **Choisir un point neutre** | **Balance des blancs** | Cliquez sur la toile pour régler **Température** et **Teinte** de façon à rendre ce point neutre. |
| **Auto** | **Niveaux** | Définit **Noir**, **Blanc** et **Tons moyens** en entrée pour la page en cours, à partir de l’image. Devient **Annuler** pendant le calcul. |
| **Réglage ciblé** | **Courbes** | Faites glisser vers le haut ou vers le bas sur la toile pour relever ou abaisser la courbe au ton situé sous le pointeur. |

Sur la page **RVB**, les boutons modifient tous les canaux ; sur la page d’un
canal, uniquement ce canal.

Lorsqu’une pipette ou **Réglage ciblé** est actif, une barre en bas de la toile
affiche une consigne et **Annuler** ou **Terminé**. Si un point ne peut pas être
utilisé, un message apparaît et la pipette reste active.

## Panneau Histogramme

Vous pouvez contrôler les tons de l’image dans le panneau **Histogramme**.

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Histogramme**.
- Dans Photo, sélectionnez l’onglet **Histogramme** en haut de la colonne de droite.

![Le panneau Histogramme avec les menus de source et de canal, le graphique et les boutons d’écrêtage.](shot:filters/histogram)

| Commande | Choix |
| --- | --- |
| Menu de source (**Visible** au départ) | **Visible**, **Calque sélectionné**, **Référence** (les calques réglés sur **Utiliser comme référence**), **Sélection** (l’image visible à l’intérieur de la sélection) |
| Menu de canal (**RVB** au départ) | **RVB**, **Rouge**, **Vert**, **Bleu**, **Luminance** |
| **Comptages logarithmiques** | Affiche le nombre de pixels sur une échelle logarithmique. |
| **Ombres**, **Hautes lumières** | Signalent les zones écrêtées sur la toile. Dans un dessin HDR, ils deviennent **Ombres (SDR)** et **Hautes lumières (SDR)**. |

L’état sous le graphique indique « Exact » une fois le comptage terminé.

## Panneau Forme d’onde

Vous pouvez voir la luminosité et la couleur de gauche à droite sur toute
l’image dans le panneau **Forme d’onde**.

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Forme d’onde**.
- Dans Photo, sélectionnez l’onglet **Forme d’onde** à côté de **Histogramme**.

Le panneau a son propre menu de canal et sa propre option **Comptages logarithmiques**.
Le menu de source et les boutons d’écrêtage sont partagés avec le panneau
**Histogramme**.
