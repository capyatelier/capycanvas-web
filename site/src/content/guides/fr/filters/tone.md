---
title: "Filtres de tons"
description: "Réglages des filtres de la catégorie Tons."
related: ["filters/adding", "filters/color", "filters/how-filters-apply"]
---

Les filtres de tons se trouvent dans **Filtre > Tons** et dans la catégorie
**Tons** du panneau **Filtres**. Leurs réglages se modifient dans le panneau
**Propriétés**.

![Le panneau Filtres affichant la catégorie Tons avec un aperçu de chaque filtre.](shot:filters/tone-list)

## Tons foncés/Tons clairs

Éclaircit les zones sombres avec **Tons foncés** et assombrit les zones claires
avec **Tons clairs**, en fonction de la luminosité de la zone environnante. À
100 %, chaque réglage modifie l’exposition de 2 diaphragmes au maximum.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Tons foncés** | 0–100 % | 0 % |
| **Tons clairs** | 0–100 % | 0 % |

## Courbes

Modifie les tons avec une courbe pour tous les canaux sur la page **RVB** et une
courbe par canal sur les pages **Rouge**, **Vert** et **Bleu**. Les courbes des
canaux s’appliquent avant la courbe **RVB**.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| Pages **RVB**, **Rouge**, **Vert**, **Bleu** | Une courbe chacune | Ligne droite |
| **Échantillonner un point**, **Réglage ciblé** | Définissent la courbe à partir de l’image (voir [Ajouter et modifier des filtres](/fr/docs/filters/adding/)) | |
| **Espace de courbe** | **RVB encodé**, **HDR logarithmique**. Affiché uniquement dans un [dessin HDR](/fr/docs/color-management/hdr/) ou s’il est réglé sur **HDR logarithmique**. | **RVB encodé**, ou **HDR logarithmique** dans un dessin HDR |
| **Plage HDR** | 0–15 EV, ou jusqu’à 127 EV en saisie. Affiché uniquement avec **HDR logarithmique** : le nombre de diaphragmes au-dessus du blanc SDR atteint par la courbe. | 4 EV |

| Sur le graphique | Comment |
| --- | --- |
| Ajouter un point | Appuyez sur un emplacement vide. Une courbe compte au maximum 32 points. |
| Déplacer un point | Faites-le glisser, ou sélectionnez-le et appuyez sur les touches fléchées. **Maj** le déplace plus loin. Les points d’extrémité se déplacent uniquement vers le haut et vers le bas. |
| Saisir des valeurs exactes | Sélectionnez un point et saisissez **Entrée** et **Sortie** sous le graphique. |
| Supprimer un point | Double-cliquez dessus, faites-le glisser hors du graphique, ou sélectionnez-le et appuyez sur **Supprimer** ou **Retour arrière**. |
| Recommencer | Sélectionnez **Réinitialiser la courbe**. |

## Niveaux

Définit le point noir, le point blanc et les tons moyens en entrée, puis les
fait correspondre à la plage de **Sortie**. Les pages **Rouge**, **Vert** et
**Bleu** s’appliquent avant la page **RVB**.

![Le panneau Propriétés de Niveaux avec l’histogramme, Auto, Échantillonner un point et les réglages Entrée, Sortie et Écrêtage.](shot:filters/levels-properties)

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Auto**, **Échantillonner un point** | Définissent l’entrée à partir de l’image (voir [Ajouter et modifier des filtres](/fr/docs/filters/adding/)) | |
| **Ombres**, **Hautes lumières** (sous l’histogramme) | Signalent les zones écrêtées sur la toile | |
| **Noir** (**Entrée**) | 0–1, toute valeur en saisie. Reste inférieur au **Blanc** d’entrée. | 0 |
| **Blanc** (**Entrée**) | 0–1, toute valeur en saisie | 1 |
| **Tons moyens** | 0,1–10. Au-dessus de 1, éclaircit. | 1 |
| **Noir** (**Sortie**) | 0–1, toute valeur en saisie | 0 |
| **Blanc** (**Sortie**) | 0–1, toute valeur en saisie | 1 |
| **Limiter l’entrée** | Écrête les tons situés hors du **Noir** et du **Blanc** d’entrée, sur toutes les pages | Désactivé |
| **Limiter la sortie** | Écrête le résultat à la plage de sortie, sur toutes les pages | Désactivé |

## Luminosité / Contraste

**Contraste** étire ou resserre les tons autour du gris moyen, puis
**Luminosité** éclaircit ou assombrit tous les tons de la même quantité.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Luminosité** | −100 à 100 | 0 |
| **Contraste** | −100 à 100. 50 double le contraste et −50 le divise par deux. | 0 |

## Seuil

Rend noirs les pixels plus sombres que **Seuil** et blancs tous les autres.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Seuil** | 0–1, toute valeur en saisie | 0,5 |

## Exposition

Modifie l’exposition en diaphragmes. **Décalage** relève ou abaisse les noirs.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Exposition** | −10 à 10 EV, ou jusqu’à ±126 EV en saisie | 0 EV |
| **Décalage** | −0,5 à 0,5 | 0 |
| **Gamma** | 0,1–10. Au-dessus de 1, éclaircit les tons moyens. | 1 |

## Vignettage

Assombrit l’image à l’extérieur d’une ellipse aux proportions de la toile, ou
l’éclaircit lorsque **Intensité** est négative. À ±100 %, les bords changent de
2 diaphragmes au maximum.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Intensité** | −100 % à 100 % | 40 % |
| **Rayon** | 10–150 % de la demi-taille de la toile | 95 % |
| **Douceur** | 0–100 % du rayon, utilisé pour le fondu | 55 % |
| **Centre X**, **Centre Y** (sous **Position**) | 0–100 % de la largeur et de la hauteur de la toile | 50 % |
