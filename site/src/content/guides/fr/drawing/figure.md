---
title: "Figure"
description: "Tracer des lignes droites, des rectangles et des ellipses avec l’outil Figure."
related: ["drawing/ruler", "drawing/brush-tools", "brushes/basics", "customize/toolbars"]
---

Vous pouvez tracer des lignes droites, des rectangles et des ellipses sur le
calque sélectionné avec l’outil **Figure**.

## Outil Figure

Effectuez l’une des opérations suivantes :

- Appuyez sur **U**.
- Dans Peinture, sélectionnez **Figure** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton, ou appuyez longuement dessus, pour choisir **Ligne**, **Rectangle** ou **Ellipse**.
- Cherchez **Figure** dans la recherche de commandes, ou une forme comme **Figure › Rectangle**.

Croquis et Photo n’ont pas de bouton Figure. Vous pouvez en ajouter un avec
**Insérer des outils…** ([Barres d’outils et barre de titre](/fr/docs/customize/toolbars/)).

![Le menu du bouton Figure dans la barre d’outils Outils de Peinture, avec Ligne, Rectangle et Ellipse.](shot:drawing/figure-menu)

Faites glisser sur la toile pour tracer la figure. Un contour en pointillés
montre la forme pendant le glissement, et la peinture apparaît quand vous
relâchez. Maintenez **Maj** enfoncée pendant le glissement pour tracer une
ligne par pas de 45°, un carré ou un cercle.

- Les figures ne peignent que le dessin d’un calque, et seulement sur les calques qu’un pinceau peut peindre ([Outils de pinceau](/fr/docs/drawing/brush-tools/)).
- Une sélection active découpe la figure, et le **Verrouillage alpha** est respecté.
- Quand **Peinture transparente** est sélectionnée dans le panneau Couleur, la figure efface.
- La pression du stylet ne change pas l’épaisseur d’une figure.
- Les figures ne suivent pas les repères.
- Figure n’est pas disponible en Masque rapide ni sur un calque de sélection.
- Chaque figure est une étape d’annulation.

## Forme

- **Ligne** va du point où vous appuyez au point où vous relâchez, avec des extrémités arrondies.
- **Rectangle** a ses coins aux points d’appui et de relâchement, avec des côtés parallèles aux bords de la toile.
- **Ellipse** s’inscrit dans le cadre compris entre les points d’appui et de relâchement.

Choisissez la forme en haut du panneau **Ensemble d’outils**, dans le menu du
bouton Figure, ou dans **Outil** dans la barre Options de l’outil.

## Contour et remplissage

- **Contour** trace le bord de la forme avec la couleur active, centré sur le bord.
- **Remplissage** couvre la forme avec la couleur active.
- **Contour + remplissage** trace le contour avec la couleur de premier plan et remplit l’intérieur avec la couleur d’arrière-plan.

Choisissez le mode sous les formes dans le panneau **Ensemble d’outils**, ou dans
**Variante** dans la barre Options de l’outil. Une ligne ne peut être tracée
qu’avec **Contour**.

![Le panneau Ensemble d’outils avec Ligne, Rectangle et Ellipse au-dessus de Contour, Remplissage et Contour + remplissage.](shot:drawing/figure-tool-set)

## Épaisseur de ligne et Opacité

**Épaisseur de ligne** et **Opacité** se trouvent dans le panneau **Outil** et
dans la barre Options de l’outil. Ces réglages partagent leurs valeurs avec la
**Taille du pinceau** et l’**Opacité** du pinceau actif
([Taille, opacité et débit](/fr/docs/brushes/basics/)), et **[** et **]**
modifient Épaisseur de ligne.

### Épaisseur de ligne

Définit l’épaisseur du contour, de 0,5 à 2048 px. Ce réglage n’apparaît pas en
mode **Remplissage**.

### Opacité

Définit la force du contour comme celle du remplissage.
