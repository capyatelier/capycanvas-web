---
title: "Recadrer"
description: "Recadrer et redresser la toile avec l’outil Recadrer."
related: ["transform/image", "selections/working", "drawing/ruler", "photo/crop"]
---

Vous pouvez recadrer la toile selon un cadre avec l’outil **Recadrer**. Les pixels
recadrés restent masqués sur leurs calques, sauf si vous activez **Supprimer les
zones recadrées**.

## Recadrer la toile

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Image > Recadrer**.
- Appuyez sur **C**.
- Dans Photo, sélectionnez **Recadrer** dans la barre d’outils Outils.

Un cadre muni de poignées apparaît autour de toute la toile, ou sous la forme du
plus grand cadre au rapport choisi. La toile hors du cadre est assombrie, et la
[barre d’actions de la toile](/fr/docs/selections/working/) du recadrage apparaît
en bas de la toile.

- Faites glisser à l’intérieur du cadre pour le déplacer.
- Faites glisser une poignée d’angle ou de côté pour redimensionner le cadre. Maintenez **Maj** pour conserver ses proportions, ou **Alt** pour redimensionner depuis le centre.
- Faites glisser le cadre au-delà du bord de la toile pour ajouter de la toile transparente.

Sur un écran tactile, seules les poignées réagissent au doigt. Un doigt posé à
l’intérieur du cadre déplace la vue.

Pour terminer, sélectionnez **Appliquer** ou appuyez sur **Entrée**. **Annuler** dans
la barre, **Échap** et la commande **Annuler** abandonnent le recadrage. Dans tous
les cas, l’outil utilisé auparavant revient.

**Appliquer** recadre aussi les calques verrouillés. Vous ne pouvez pas commencer un
recadrage pendant une transformation.

![Le cadre de recadrage sur la photo du terrarium, avec la barre d’actions de la toile en bas.](shot:transform/crop-bar)

## Rapport

Choisissez **Libre**, **Original**, **1:1**, **4:5**, **2:3**, **5:7** ou **16:9**
dans **Rapport**, sur la barre d’actions de la toile. Le cadre devient le plus grand
cadre de ce rapport. **Libre** est la valeur par défaut.

**Inverser l’orientation du recadrage**, le bouton à icône à côté de **Rapport**,
fait passer le cadre du format paysage au format portrait, et inversement.

Le rapport, la superposition et **Supprimer les zones recadrées** sont conservés
pour le recadrage suivant.

![Le menu Rapport dans la barre de recadrage.](shot:transform/crop-ratio-menu)

## Ajuster au contenu

**Ajuster au contenu** cale le cadre, droit, sur les limites des pixels visibles, y
compris les pixels situés au-delà de la toile. **Rapport** passe à **Libre**.

## Superposition

Choisissez **Tiers**, **Grille**, **Diagonale** ou **Nombre d’or** dans
**Superposition**. **Tiers** est la valeur par défaut. Appuyez sur **O** pendant le
recadrage pour afficher la superposition suivante.

## Redresser

Sélectionnez **Redresser** dans la barre d’actions de la toile, puis tracez une
ligne le long d’un élément qui devrait être horizontal ou vertical. Le cadre pivote
pour s’aligner sur la ligne. Maintenez **Maj** pour aligner la ligne par pas de
15°. Sur un écran tactile, un doigt trace la ligne tant que **Redresser** est
sélectionné.

Vous pouvez aussi régler l’angle dans **Redresser**, dans le panneau Outil. Le cadre
pivote de 45° au plus dans un sens ou dans l’autre.

Quand vous appliquez un recadrage pivoté, les calques de peinture et les masques sont
rééchantillonnés. Les photos placées conservent leurs pixels d’origine.

Pour redresser selon un repère, sélectionnez le repère, puis **Redresser** dans sa
barre d’actions de la toile (voir [Règles et repères](/fr/docs/drawing/ruler/)). Un
recadrage s’ouvre, pivoté pour s’aligner sur le repère.

## Supprimer les zones recadrées

Activez **Supprimer les zones recadrées** pour supprimer les pixels situés hors du
cadre lors de l’application du recadrage. Les photos placées conservent leurs pixels
d’origine. Désactivé par défaut.

Un recadrage qui serait trop grand si les pixels masqués étaient conservés ne
fonctionne qu’avec **Supprimer les zones recadrées** activé.

## Réinitialiser

**Réinitialiser** ramène le cadre à toute la toile, droit, et désactive
**Redresser**. Si un rapport est choisi, le cadre devient le plus grand cadre de ce
rapport.

## Réglages de recadrage dans le panneau Outil

Pendant le recadrage, le panneau Outil (et la barre Options de l’outil dans Photo)
affiche :

- **Taille** : **Largeur** et **Hauteur** du cadre, en pixels. Si un rapport est choisi, l’autre côté suit.
- **Redresser** : l’angle du cadre, de −45° à 45°.
- Les boutons de la barre d’actions de la toile.

![Le panneau Outil pendant le recadrage, avec Largeur, Hauteur et Redresser.](shot:transform/crop-tool-panel)

## Recadrer la toile sur la sélection

Vous pouvez recadrer la toile sur les limites d’une sélection.

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Image > Recadrer la toile sur la sélection**.
- Sélectionnez **Recadrer** dans la [barre de sélection](/fr/docs/selections/working/).

Les pixels situés hors des limites de la sélection restent masqués sur leurs
calques. Vous ne pouvez pas recadrer sur une sélection inversée.

## Récupérer les pixels recadrés

Choisissez **Édition > Image > Tout révéler** pour agrandir la toile jusqu’à ce
qu’elle affiche les pixels de tous les calques, ou agrandissez la toile avec
**Édition > Image > Taille de la toile…** (voir
[Taille et rotation de l’image](/fr/docs/transform/image/)).
