---
title: "Dégradé"
description: "Peindre un dégradé avec l’outil Dégradé, modifier ses couleurs et ajouter des calques Remplissage dégradé."
related: ["drawing/fill", "layers/types", "filters/color", "color/edit-color"]
---

Vous pouvez peindre un dégradé sur un calque avec l’outil **Dégradé**, ou ajouter
un calque **Remplissage dégradé** qui reste modifiable.

## Outil Dégradé

Effectuez l’une des opérations suivantes :

- Appuyez sur **G**.
- Dans Peinture, sélectionnez **Dégradé** dans la barre d’outils Outils.
- Dans Photo, sélectionnez le bouton de dégradé et de remplissage situé après **Fluidité** dans la barre d’outils Outils.
- Cherchez **Dégradé** dans la recherche de commandes.

Faites glisser du point de départ jusqu’au point d’arrivée. Une ligne suit le
pointeur, et le dégradé est peint quand vous relâchez.

- Le dégradé couvre tout le calque, avec la première couleur avant le point de départ et la dernière au-delà du point d’arrivée.
- Appuyez sur **Échap** pendant le glissement pour annuler.
- Un glissement avec un doigt déplace la toile à la place.
- Une sélection active limite le dégradé, et le **Verrouillage alpha** est respecté.
- En Masque rapide ou sur un calque de sélection, le dégradé va dans le masque de sélection.
- Chaque dégradé est une étape d’annulation.

L’outil ne peint que le dessin d’un calque, et seulement sur les calques qu’un
pinceau peut peindre ([Outils de pinceau](/fr/docs/drawing/brush-tools/)).

## Forme

- **Linéaire** : la couleur change le long du glissement.
- **Radial** : le point de départ est le centre, et le glissement définit le rayon.
- **Reflected** : comme Linéaire, en miroir de part et d’autre du point de départ.

Effectuez l’une des opérations suivantes :

- Sélectionnez la forme dans **Forme**, en haut du panneau **Outil**, ou dans le panneau **Ensemble d’outils**.
- Cliquez avec le bouton droit sur le bouton Dégradé de la barre d’outils Outils, ou appuyez longuement dessus, et choisissez une forme.
- Dans la barre Options de l’outil, choisissez la forme dans **Variante**, ou dans **Outil** dans Photo.

## Éditeur de points

![Le panneau Outil de l’outil Dégradé avec la rangée Forme, l’éditeur de points et Opacité.](shot:drawing/gradient-tool-panel)

Vous pouvez modifier les couleurs du dégradé dans l’éditeur de points, sous
**Forme** dans le panneau **Outil**. Le bouton de dégradé de la barre Options de
l’outil ouvre l’éditeur dans une fenêtre contextuelle. Les calques Remplissage
dégradé et le filtre **Courbe de transfert de dégradé** utilisent le même éditeur
([Filtres de couleur](/fr/docs/filters/color/)).

Tant que vous ne l’avez pas modifié, le dégradé de l’outil va de la couleur de
premier plan à la couleur d’arrière-plan et suit les changements de ces deux
couleurs. Après une modification, il conserve ses points jusqu’à ce que vous
sélectionniez **Réinitialiser le dégradé**. Les modifications du dégradé de
l’outil ne sont pas des étapes d’annulation.

### Interpolation

Définit la façon dont les couleurs se mélangent entre les points. **Oklab** (par
défaut) mélange de façon régulière pour l’œil, **Lumière linéaire** mélange comme
la lumière, et **Classique** mélange les valeurs de couleur enregistrées.

### Inverser

Inverse l’ordre des points.

### Réinitialiser le dégradé

Ramène le dégradé de l’outil aux couleurs de premier plan et d’arrière-plan, et
le dégradé d’un calque Remplissage dégradé ou d’une Courbe de transfert de
dégradé au noir et blanc.

### Ajouter un point de dégradé

Sélectionnez la bande en dehors des marqueurs pour ajouter un point avec la
couleur à cet endroit. Un dégradé compte jusqu’à 32 points.

### Marqueurs des points

Sélectionnez un marqueur pour sélectionner son point, ou faites-le glisser pour
déplacer le point.

### Position

Définit la position du point sélectionné, en pourcentage. Les points d’extrémité
restent à 0 % et 100 %, et un point ne peut pas dépasser ses voisins.

### Retirer le point de dégradé

Retire le point sélectionné. Les points d’extrémité ne peuvent pas être retirés.

### Couleur

Ouvre [Modifier la couleur](/fr/docs/color/edit-color/) pour le point sélectionné.

### Utiliser la couleur sélectionnée

Applique la couleur active au point sélectionné.

## Opacité

**Opacité** définit la force du dégradé. C’est la même valeur que l’**Opacité**
du pinceau actif. Dans Croquis, utilisez le curseur d’opacité sur le bord gauche.

## Calques Remplissage dégradé

Vous pouvez ajouter un calque de remplissage dont le dégradé reste modifiable.

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Nouveau > Remplissage dégradé**.
- Choisissez **Filtre > Remplissage > Remplissage dégradé**.
- Dans le panneau Filtres, sélectionnez **Remplissage dégradé** sous **Remplissage**.

Les réglages du calque se trouvent dans le panneau Propriétés, et chaque
modification est une étape d’annulation.

Une sélection active devient le masque du nouveau calque. Pour peindre sur le
calque, ajoutez d’abord un masque ([Types de calques](/fr/docs/layers/types/)).

![Le panneau Propriétés d’un calque Remplissage dégradé avec Forme, l’éditeur de points, Angle, Échelle et Position.](shot:drawing/gradient-fill-properties)

### Forme

**Linéaire**, **Radial** ou **Reflected**, comme pour l’outil Dégradé.

### Dégradé

L’éditeur de points. Un nouveau calque commence avec un dégradé du noir au blanc.

### Angle

Définit la direction du dégradé, de −180° à 180°.

### Échelle

Définit la longueur du dégradé, de 10 % à 400 %.

### Centre X et Centre Y

Sous **Position**, ces réglages définissent le centre du dégradé en pourcentage de la largeur
et de la hauteur de la toile.
