---
title: "Réglages et exportation"
description: "Étape 3 du tutoriel de retouche photo : réglages de tons et de couleur sur des calques de filtre, et une exportation JPEG."
related: ["filters/how-filters-apply", "filters/tone", "selections/working", "files/export"]
---

Cette étape produit des calques de filtre de tons et de couleur au-dessus de la
photo, et un JPEG pour le web.

## 1. Ajouter Courbes

Sélectionnez *Retouch*. Les filtres que vous ajoutez depuis le menu **Filtre** se
placent alors juste au-dessus de *Retouch* et modifient à la fois *Retouch* et la
photo ([Application des filtres](/fr/docs/filters/how-filters-apply/)).

Choisissez **Filtre > Tons > Courbes**. Un calque **Courbes** apparaît au-dessus de
*Retouch*, et ses réglages s’ouvrent dans le panneau **Propriétés**. Sur la courbe
**RVB**, ajoutez un point dans les ombres et faites-le glisser vers le bas, puis
ajoutez un point dans les hautes lumières et faites-le glisser vers le haut
([Filtres de tons](/fr/docs/filters/tone/)).

![Le panneau Propriétés avec une courbe RVB en S dans Courbes.](shot:photo/adjust-curves)

## 2. Ajouter Vibrance

Choisissez **Filtre > Couleur > Vibrance**, et réglez **Vibrance** sur 25 dans le
panneau **Propriétés** ([Filtres de couleur](/fr/docs/filters/color/)). Le calque
**Vibrance** apparaît au-dessus de **Courbes**.

## 3. Sélectionner la roche

1. Appuyez sur **M**, ou sélectionnez **Sélection au lasso** dans la barre d’outils Outils, et tracez le tour de la roche.
2. Choisissez **Sélection > Contour progressif de sélection…**, ou sélectionnez **Affiner** dans la barre de sélection et choisissez **Contour progressif…** ([Travailler avec les sélections](/fr/docs/selections/working/)).
3. Réglez **Feather radius** sur 20 px et sélectionnez **Appliquer**.

## 4. Éclaircir les ombres de la roche

Éclaircir les ombres de toute la photo rendrait le fond noir gris. L’exemple ne
les éclaircit que dans la roche.

Sélectionnez **Ajuster** dans la barre de sélection et choisissez
**Tons > Tons foncés/Tons clairs**. Réglez **Tons foncés** sur 35 % dans le panneau
**Propriétés**.

![La barre de sélection avec le menu Ajuster ouvert sur la catégorie Tons, à côté de la sélection autour de la roche.](shot:photo/adjust-bar)

La sélection devient le masque du nouveau calque **Tons foncés/Tons clairs**. Seule
la roche change.

## 5. Enregistrer le dessin

Choisissez **Fichier > Enregistrer**, ou appuyez sur **Ctrl+S**. Le premier
enregistrement d’une photo ouverte demande un dossier et un nom, comme
**Enregistrer sous…**. Le fichier `.capy` conserve la photo d’origine, les calques,
les masques et les calques de filtre ([Ouvrir et enregistrer](/fr/docs/files/open-save/)).

## 6. Exporter un JPEG

1. Choisissez **Fichier > Exporter…**, ou appuyez sur **Ctrl+Maj+E**.
2. Laissez **Destination** sur **Web / Partage**, et réglez **Format** sur **Image JPEG**.
3. Réglez **Dimensions en pixels** sur **Ajuster aux limites**, et laissez **Largeur maximale (px)** et **Hauteur maximale (px)** à 2048.
4. Sélectionnez **Choisir un fichier…**, puis choisissez un dossier et un nom.

![La boîte de dialogue Exporter l’image avec Web / Partage, Image JPEG, Qualité 90 et Ajuster aux limites.](shot:photo/export-jpeg)

L’exportation ne modifie pas le dessin
([Exporter des images](/fr/docs/files/export/)).
