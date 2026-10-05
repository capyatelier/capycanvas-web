---
title: "Filtres de détail et de flou"
description: "Réglages des filtres des catégories Détail et Flou."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Ces filtres se trouvent dans **Filtre > Détail** et **Filtre > Flou**, ainsi que
dans les catégories **Détail** et **Flou** du panneau **Filtres**. Leurs
réglages se modifient dans le panneau **Propriétés**.

![Le panneau Filtres affichant les catégories Détail et Flou avec un aperçu de chaque filtre.](shot:filters/detail-blur-list)

## Clarté

Augmente le contraste local avec une **Intensité** positive, ou le réduit avec
une valeur négative, de 2 diaphragmes au maximum.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Intensité** | −100 % à 100 % | 0 % |

## Correction du voile

Une **Intensité** positive retire le voile, une valeur négative en ajoute. Les
zones proches du blanc et du gris sont protégées lors du retrait du voile.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Intensité** | −100 % à 100 % | 0 % |

## Accentuation

Renforce la netteté des contours selon **Quantité**. Les écarts inférieurs à
**Seuil** restent inchangés.

![Le panneau Propriétés d’Accentuation avec Rayon, Quantité et Seuil.](shot:filters/unsharp-mask-properties)

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rayon** | 0–21 px, ou jusqu’à 85 px en saisie | 1,5 px |
| **Quantité** | 0–300 % | 100 % |
| **Seuil** | 0–100 % | 2 % |

## Passe-haut

Conserve uniquement les détails plus fins que **Rayon**, sur une base de gris à
50 %.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rayon** | 0–21 px, ou jusqu’à 85 px en saisie | 4 px |
| **Intensité** | 0–300 % | 100 % |

## Lissage préservant les bords

Lisse le bruit en gardant les contours nets. Plus **Intensité** est élevée,
plus le lissage franchit des écarts de couleur importants.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Intensité** | 0–100 % | 25 % |

## Détection des contours

Affiche les contours de l’image en lignes blanches sur fond noir, ou en lignes
sombres sur fond blanc lorsque **Inverser** est activé.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Largeur** | 0,5–8 px | 1 px |
| **Intensité** | 0–400 % | 100 % |
| **Inverser** | Activé ou désactivé | Désactivé |

## Relief

Transforme l’image en relief gris. **Angle** définit la direction du relief.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Largeur** | 0,5–8 px | 1,5 px |
| **Angle** | −180° à 180° | 135° |
| **Profondeur** | 0–400 % | 100 % |

## Flou gaussien

Floute l’image de façon uniforme. Les bords voisins de zones transparentes se
floutent vers l’extérieur.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rayon** | 0–21 px, ou jusqu’à 85 px en saisie | 3 px |

## Flou de mouvement

Floute le long d’une ligne droite de longueur **Distance**, dans la direction
d’**Angle**.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Distance** | 0–64 px | 12 px |
| **Angle** | −180° à 180° | 0° |

## Lueur

Ajoute un halo autour des tons plus clairs que **Seuil**. Le halo peut s’étendre
dans les zones transparentes.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rayon** | 0–21 px, ou jusqu’à 85 px en saisie | 6 px |
| **Intensité** | 0–200 % | 60 % |
| **Seuil** | 0–100 % | 60 % |

## Flou artistique

Adoucit l’image en superposant un flou de rayon **Rayon** en mode de fusion
Éclaircir, avec une opacité égale à **Intensité**.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rayon** | 0–21 px, ou jusqu’à 85 px en saisie | 5 px |
| **Intensité** | 0–100 % | 40 % |
