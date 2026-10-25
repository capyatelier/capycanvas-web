---
title: "Figure"
description: "Tracer des lignes, des rectangles, des ellipses, des polygones, des étoiles et des tracés avec l’outil Figure."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

Vous pouvez tracer des lignes, des rectangles, des ellipses, des polygones, des
étoiles et des tracés sur le calque sélectionné avec l’outil **Figure**. Sur un
[calque vectoriel](/fr/docs/layers/vector/), chaque figure devient un tracé que vous
pouvez modifier. Sur un calque de peinture, elle peint des pixels.

## Outil Figure

Effectuez l’une des opérations suivantes :

- Appuyez sur **U**.
- Dans Peinture, sélectionnez **Figure** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton, ou appuyez longuement dessus, pour choisir **Ligne**, **Rectangle**, **Ellipse**, **Polygone**, **Étoile** ou **Tracé**.
- Cherchez **Figure** dans la recherche de commandes, ou une forme comme **Figure › Rectangle**.

Croquis et Photo n’ont pas de bouton Figure. Vous pouvez en ajouter un avec
**Insérer des outils…** ([Barres d’outils et barre de titre](/fr/docs/customize/toolbars/)).

![Le menu du bouton Figure dans la barre d’outils Outils de Peinture, avec Ligne, Rectangle, Ellipse, Polygone, Étoile et Tracé.](shot:drawing/figure-menu)

Faites glisser sur la toile pour tracer n’importe quelle figure sauf **Tracé**. Un
contour en pointillés montre la forme pendant le glissement, et la figure apparaît
quand vous relâchez. Maintenez **Maj** enfoncée pendant le glissement pour tracer
une ligne par pas de 45°, un carré, un cercle, ou un polygone ou une étoile
réguliers.

- Les figures ne tracent que le dessin d’un calque, sur les calques vectoriels et sur les calques qu’un pinceau peut peindre ([Outils de pinceau](/fr/docs/drawing/brush-tools/)).
- Le **Verrouillage alpha** est respecté.
- Sur un calque de peinture, une sélection active découpe **Ligne**, **Rectangle** et **Ellipse**. Elle ne découpe pas **Polygone**, **Étoile**, **Tracé** ni un rectangle à coins arrondis.
- Quand **Peinture transparente** est sélectionnée dans le panneau Couleur, **Ligne**, **Rectangle** et **Ellipse** effacent sur un calque de peinture. Toute autre figure affiche un avis qui demande une couleur.
- La pression du stylet ne change pas l’épaisseur d’une figure.
- Les figures ne suivent pas les repères.
- Figure n’est pas disponible en Masque rapide ni sur un calque de sélection.
- Chaque figure est une étape d’annulation.

## Forme

- **Ligne** va du point où vous appuyez au point où vous relâchez, avec des extrémités arrondies.
- **Rectangle** a ses coins aux points d’appui et de relâchement, avec des côtés parallèles aux bords de la toile.
- **Ellipse** s’inscrit dans le cadre compris entre les points d’appui et de relâchement.
- **Polygone** et **Étoile** s’inscrivent dans le cadre, avec le premier coin ou la première pointe en haut.
- **Tracé** se dessine point d’ancrage par point d’ancrage.

Choisissez la forme en haut du panneau **Ensemble d’outils**, dans le menu du
bouton Figure, ou dans **Outil** dans la barre Options de l’outil.

## Contour et remplissage

- **Contour** trace le bord de la forme avec la couleur active, centré sur le bord.
- **Remplissage** couvre la forme avec la couleur active.
- **Contour + remplissage** trace le contour avec la couleur de premier plan et remplit l’intérieur avec la couleur d’arrière-plan.

Choisissez le mode sous les formes dans le panneau **Ensemble d’outils**, ou dans
**Variante** dans la barre Options de l’outil. Une ligne ne peut être tracée
qu’avec **Contour**.

![Le panneau Ensemble d’outils avec Ligne, Rectangle, Ellipse, Polygone, Étoile et Tracé au-dessus de Contour, Remplissage et Contour + remplissage.](shot:drawing/figure-tool-set)

## Réglages de forme

![Le panneau Outil pour Étoile, avec Épaisseur de ligne, Opacité, Branches et Rayon intérieur.](shot:vector/figure-settings)

**Rayon des angles**, **Côtés**, **Branches** et **Rayon intérieur** sont dans le panneau **Outil** et la barre Options de l’outil, pour la forme à laquelle ils se rapportent.

### Rayon des angles

Arrondit les angles d’un **Rectangle**, de 0 à 4096 px.

### Côtés

Définit le nombre de côtés d’un **Polygone**, de 3 à 100. La valeur par défaut est 5.

### Branches

Définit le nombre de branches d’une **Étoile**, de 3 à 100. La valeur par défaut est 5.

### Rayon intérieur

Définit la distance entre le centre d’une **Étoile** et ses angles intérieurs, en pourcentage du rayon extérieur, de 5 % à 100 %. La valeur par défaut est 50 %.

## Tracé

Vous pouvez dessiner un tracé point d’ancrage par point d’ancrage.

- Cliquez pour ajouter un point d’ancrage d’angle. Appuyez et faites glisser pour sortir des poignées et créer un point d’ancrage lisse, ou maintenez **Alt** enfoncée pour ne faire glisser que la poignée sortante.
- Maintenez **Maj** enfoncée pour placer le point d’ancrage suivant par pas de 45° à partir du précédent.
- Cliquez sur le premier point d’ancrage pour fermer le tracé.
- Sélectionnez **Terminer le tracé** dans la barre de la toile ou appuyez sur **Entrée** pour ajouter le tracé. **Annuler le tracé** ou **Escape** l’abandonne.
- **Retirer le dernier point** ou **Retour arrière** supprime le dernier point d’ancrage, tout comme **Annuler**.

![La barre de canevas lorsqu'un chemin est tracé, avec Retirer le dernier point, Annuler le tracé et Terminer le tracé.](shot:vector/path-bar)

Le tracé utilise le mode actif, l’**Épaisseur de ligne** et les couleurs, avec des angles pointus et des extrémités plates. Sur un calque vectoriel, il est sélectionné quand vous terminez, et un tracé qui commence à l’extrémité ouverte d’un tracé sélectionné le prolonge.

## Épaisseur de ligne et Opacité

**Épaisseur de ligne** et **Opacité** sont dans le panneau **Outil** et la barre Options de l’outil. Ils partagent leurs valeurs avec **Taille du pinceau** et **Opacité** du pinceau actif ([Taille, intensité et opacité](/fr/docs/brushes/basics/)), et **[** et **]** modifient l’Épaisseur de ligne.

### Épaisseur de ligne

Définit l’épaisseur du contour, de 0,5 à 2048 px. Ce réglage n’apparaît pas en
mode **Remplissage**. Sur un calque vectoriel, **Épaisseur du contour** dans [Propriétés](/fr/docs/layers/paths/) la modifie ensuite.

### Opacité

Définit la force du contour comme celle du remplissage.
