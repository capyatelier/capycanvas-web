---
title: "Outils de remplissage"
description: "Remplir des zones, des formes à main levée et des régions fermées d’un calque avec la couleur active."
related: ["drawing/gradient", "layers/settings", "selections/working", "drawing/brush-tools"]
---

Vous pouvez remplir des parties du calque sélectionné avec la couleur active à
l’aide de **Remplissage**, **Remplissage au lasso** et **Entourer et remplir**.
Chaque remplissage est une étape d’annulation, et le **Verrouillage alpha** est
respecté.

Les remplissages ne peignent que le dessin d’un calque, jamais un masque de
calque ni le masque d’un filtre. Sur un calque qu’un pinceau ne peut pas peindre,
un remplissage ne peint rien et un avis en donne la raison
([Outils de pinceau](/fr/docs/drawing/brush-tools/)).

## Sélectionner un outil de remplissage

Effectuez l’une des opérations suivantes :

- Appuyez sur **F** pour sélectionner Remplissage. Les deux autres outils n’ont pas de touche par défaut.
- Dans Peinture, sélectionnez **Remplissage** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton, ou appuyez longuement dessus, pour choisir un autre outil de remplissage.
- Dans Photo, cliquez avec le bouton droit ou appuyez longuement sur le bouton de dégradé et de remplissage situé après **Fluidité** dans la barre d’outils Outils, puis choisissez un outil.
- Quand un outil de remplissage est actif, sélectionnez **Remplissage** ou **Remplissage au lasso** dans le panneau **Ensemble d’outils**. **Entourer et remplir** figure sous **Remplissage au lasso**.
- Cherchez le nom de l’outil dans la recherche de commandes.

Croquis n’a pas de bouton de remplissage.

## Remplissage

Vous pouvez remplir une zone continue de couleur proche en cliquant dessus.
**Source** définit les pixels dans lesquels Remplissage cherche la zone.

- Une sélection active limite le remplissage à la sélection.
- En Masque rapide ou sur un calque de sélection, Remplissage remplit le masque de sélection ([Masque rapide](/fr/docs/selections/quick-mask/)).

## Remplissage au lasso

Vous pouvez dessiner une forme à main levée et la remplir avec la couleur active.
Faites glisser le contour sur la toile : la forme se remplit quand vous relâchez.

Remplissage au lasso n’a que le réglage **Opacité**. Il n’est pas disponible en
Masque rapide ni sur un calque de sélection.

## Entourer et remplir

Vous pouvez remplir chaque région transparente fermée à l’intérieur d’une boucle
que vous dessinez. Entourer et remplir trouve les régions dans les pixels de
**Source**.

- Appuyez sur **Échap** pendant le tracé pour annuler la boucle.
- Une seule annulation retire tout ce qu’une boucle a rempli.
- Une sélection active limite le remplissage à la sélection.
- Entourer et remplir n’est pas disponible pendant la modification d’un masque de sélection ou d’un masque de calque.

## Source

Vous pouvez choisir les pixels dans lesquels Remplissage et Entourer et remplir
cherchent la zone. La peinture va toujours sur le calque sélectionné.

- **Dessin visible** : tout ce qui est visible dans le dessin.
- **Calque en cours de modification** : uniquement le calque sélectionné.
- **Calques de référence** : les calques marqués avec **Utiliser comme référence** ([Réglages du calque](/fr/docs/layers/settings/)).

Choisissez la source dans la liste sous les outils du panneau
**Ensemble d’outils** pour Remplissage, ou dans le panneau **Outil** pour Entourer et
remplir. La barre Options de l’outil a un menu **Source** pour les deux.

![Le panneau Ensemble d’outils avec Remplissage sélectionné et, en dessous, les choix Dessin visible, Calque en cours de modification et Calques de référence.](shot:drawing/fill-tool-set)

Chaque outil conserve sa propre source. Remplissage commence sur
**Dessin visible**, et Entourer et remplir revient à **Calques de référence** à chaque
ouverture de {appName}.

Si Remplissage utilise **Calques de référence** et qu’aucun calque n’est marqué,
Remplissage ne peint rien et un avis propose de marquer le calque inférieur.

## Réglages de remplissage

![Le panneau Outil pour Remplissage avec Tolérance, le groupe Bords et Opacité.](shot:drawing/fill-settings)

Remplissage et Entourer et remplir partagent les réglages ci-dessous.
**Sélection automatique** et **Sélection par couleur** utilisent les mêmes valeurs, sauf
**Opacité**. Pour réinitialiser un réglage, double-cliquez sur son libellé dans
la barre Options de l’outil ([Taille, opacité et débit](/fr/docs/brushes/basics/)).

### Tolérance

Définit l’écart de couleur admis pour qu’un pixel fasse encore partie de la même
zone. La valeur par défaut est 10 %.

### Fermer les espaces

Ferme les ouvertures des traits jusqu’à cette largeur, de 0 à 32 px, avant la
recherche de la zone. La largeur est en pixels du dessin, pas de l’écran.

### Expansion

Agrandit la zone remplie de ce nombre de pixels, ou la réduit avec une valeur
négative, de −32 à 32 px.

### Lissage des bords

Adoucit les bords crénelés de la zone remplie. À 0 %, le remplissage garde des
bords nets au pixel près.

### Opacité

Définit la force du remplissage. La modifier change l’**Opacité** du pinceau
actif, et inversement. Dans Croquis, utilisez le curseur d’opacité de la barre du
bord gauche.

## Remplir une sélection

Pour remplir une sélection avec la couleur active, choisissez
**Édition > Remplir la sélection** ou appuyez sur **Maj+Retour arrière**
([Travailler avec les sélections](/fr/docs/selections/working/)).
