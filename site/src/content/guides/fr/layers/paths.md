---
title: "Modifier des tracés"
description: "Sélectionner, déplacer, remodeler et restyler les tracés d’un calque vectoriel."
related: ["layers/vector", "drawing/figure", "transform/move-transform", "layers/types"]
---

Vous pouvez modifier les tracés d’un [calque vectoriel](/fr/docs/layers/vector/) après les avoir dessinés.

## Sélectionner et déplacer des tracés

Sélectionnez un tracé avec l’outil **Opération** ([Déplacer et transformer](/fr/docs/transform/move-transform/)). Maintenez **Maj** enfoncée pour ajouter ou retirer des tracés. Faites glisser sur la toile vide pour sélectionner les tracés que le cadre de sélection entoure entièrement, ou appuyez sur **Ctrl+A** pour sélectionner tous les tracés.

![Le panneau Outil d’Opération avec un tracé sélectionné, qui liste les boutons de disposition, les boutons de retournement et de rotation, et Mettre à l’échelle l’épaisseur du contour.](shot:vector/operation-settings)

Un cadre en pointillés avec des poignées entoure la sélection.

- Faites glisser un tracé sélectionné pour le déplacer. Maintenez **Alt** enfoncée pour déplacer une copie.
- Faites glisser une poignée pour redimensionner, ou la poignée au-dessus du cadre pour faire pivoter. **Maj** conserve les proportions ou fait pivoter par pas de 15°.
- Les touches fléchées décalent de 1 px, et de 10 px avec **Maj**.
- Les boutons de retournement et de rotation du panneau **Outil** agissent sur la sélection autour de son centre.
- **Supprimer** supprime les tracés sélectionnés.

**Mettre à l’échelle l’épaisseur du contour** dans le panneau **Outil** est activé par défaut. Désactivez-le pour redimensionner les tracés en gardant l’épaisseur de leurs contours.

## Modifier les points

Vous pouvez déplacer, ajouter et supprimer les points d’ancrage des tracés sélectionnés.

Effectuez l’une des opérations suivantes :

- Appuyez sur **A**.
- Avec **Opération**, appuyez sur **Entrée** ou double-cliquez sur un tracé.
- Dans Peinture et Photo, cliquez avec le bouton droit sur **Opération / Transformer / Modifier les points** dans la barre d’outils Outils, ou appuyez longuement dessus, et choisissez **Modifier les points**.

Des carrés marquent les points d’ancrage, et les points sélectionnés affichent leurs poignées. Appuyez sur **Échap** pour revenir à **Opération**.

![Modifier les points sur un tracé, avec ses points d’ancrage et ses poignées sélectionnés.](shot:vector/edit-points)

- Cliquez sur un point d’ancrage pour le sélectionner, cliquez avec **Maj** pour en ajouter ou en retirer un, ou faites glisser sur la toile vide pour sélectionner les points d’ancrage à l’intérieur.
- Faites glisser des points d’ancrage pour les déplacer. Faites glisser une poignée pour faire tourner la courbe, ou maintenez **Alt** enfoncée pour la déplacer indépendamment de sa jumelle.
- Faites glisser un segment pour le courber. Cliquez sur un segment pour ajouter un point d’ancrage.
- Double-cliquez sur un point d’ancrage pour le faire passer d’angle à lisse.
- **Supprimer** supprime les points d’ancrage sélectionnés.

Modifier un point d’ancrage transforme un rectangle ou une ellipse en tracé ordinaire.

## Commandes de tracé

Vous pouvez joindre, fermer, scinder, inverser et combiner les tracés sélectionnés avec **Édition > Tracé**. Le panneau **Outil** de **Modifier les points** liste les quatre premières.

- **Joindre les tracés** relie les extrémités les plus proches de deux tracés ouverts, ou ferme un tracé ouvert.
- **Fermer le tracé** relie les extrémités de chaque tracé ouvert sélectionné.
- **Scinder au point** coupe les tracés sélectionnés aux points d’ancrage sélectionnés.
- **Inverser le sens** fait parcourir chaque tracé dans l’autre sens.
- **Créer un tracé transparent** combine les tracés sélectionnés en un seul, avec des trous là où ils se chevauchent. **Annuler le tracé transparent** les sépare de nouveau.

Une commande qui ne peut pas agir indique quoi sélectionner, par exemple « Sélectionner un ou deux tracés ouverts à joindre ».

## Disposition

Vous pouvez changer l’ordre d’empilement des tracés sélectionnés au sein de leur calque avec **Édition > Disposition** : **Mettre au premier plan**, **Avancer**, **Reculer** et **Mettre à l’arrière-plan**. Le panneau **Outil** d’**Opération** a les mêmes boutons.

## Réglages du tracé

Avec des tracés sélectionnés, **Propriétés** affiche le tracé sélectionné le plus en avant. Un libellé se termine par « (mixte) » quand les tracés sélectionnés diffèrent, et une modification s’applique à chaque tracé sélectionné.

![Le panneau Propriétés d’un tracé avec un remplissage et un contour.](shot:vector/path-properties)

### Remplissage

Active ou désactive le remplissage. Un nouveau remplissage utilise la couleur d’arrière-plan.

### Couleur de remplissage

Définit la couleur du remplissage.

### Chevauchements

Définit comment les parties qui se chevauchent sont remplies. **Remplis** les remplit et **Trous** les laisse vides. Affiché quand **Remplissage** est activé.

### Contour

Active ou désactive le contour. Un nouveau contour utilise la couleur de premier plan.

### Couleur du contour

Définit la couleur du contour.

### Épaisseur du contour

Définit l’épaisseur du contour, de 0,1 à 4096 px.

### Extrémités

Définit la forme des extrémités ouvertes : **Plates**, **Arrondies** ou **Carrées**.

### Angles

Définit la forme du contour aux angles : **Pointus**, **Arrondis** ou **Biseautés**.

### Limite des angles vifs

Définit jusqu’où un angle vif peut s’allonger, de 1 à 20. Au-delà de la limite, l’angle est biseauté. Affiché quand **Angles** est réglé sur **Pointus**.
