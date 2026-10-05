---
title: "Filtres artistiques et de texture"
description: "Réglages des filtres des catégories Artistique et Texture."
related: ["filters/adding", "filters/distort", "filters/how-filters-apply"]
---

Ces filtres se trouvent dans **Filtre > Artistique** et **Filtre > Texture**,
ainsi que dans les catégories **Artistique** et **Texture** du panneau
**Filtres**. Leurs réglages se modifient dans le panneau **Propriétés**.

![Le panneau Filtres affichant la catégorie Artistique avec un aperçu de chaque filtre.](shot:filters/artistic-list)

## Postérisation

Réduit chaque canal de couleur à **Niveaux** valeurs régulièrement espacées.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Niveaux** | 2–256 | 6 |

## Demi-teintes

Redessine l’image en points ronds d’**Encre** sur **Papier**, dont la taille
dépend de la densité du ton situé dessous. **Contraste** accentue l’écart entre
petits et gros points.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Espacement des points** | 3–48 px | 9 px |
| **Angle** | −180° à 180° | 15° |
| **Contraste** | 0–100 % | 30 % |
| **Encre** | N’importe quelle couleur | #0D1217 |
| **Papier** | N’importe quelle couleur | #F5F0DE |

## Hachures croisées

Transforme l’image en hachures d’**Encre** sur **Papier**. Les zones plus
sombres reçoivent davantage de directions de hachures, quatre au maximum.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Espacement** | 3–32 px | 8 px |
| **Épaisseur de ligne** | 0,25–4 px | 1 px |
| **Angle** | −180° à 180° | 0° |
| **Encre** | N’importe quelle couleur | #121417 |
| **Papier** | N’importe quelle couleur | #F7F2E8 |

## Mosaïque de pixels

Divise l’image en carrés de **Taille des cellules**, chacun rempli de la couleur
présente en son centre.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Taille des cellules** | 1–96 px | 12 px |

## Effet pictural

Donne à l’image l’aspect d’une peinture à l’huile en aplatissant les détails
compris dans **Rayon** en taches de couleur uniforme, sans toucher aux contours.
**Intensité** mélange le résultat à l’original.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rayon** | 1–16 px | 5 px |
| **Intensité** | 0–100 % | 100 % |

## Crayon

Dessine les contours de l’image en traits d’**Encre** sur **Papier**.
**Contraste** fonce les traits.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rayon** | 0–21 px, ou jusqu’à 85 px en saisie | 2 px |
| **Contraste** | 0–100 % | 40 % |
| **Encre** | N’importe quelle couleur | #120F0D |
| **Papier** | N’importe quelle couleur | #F7F2E6 |

## Grain de film

Ajoute un grain qui change avec le temps et qui est plus marqué dans les tons
moyens. **Grain coloré** donne à chaque canal de couleur son propre grain.

![Le panneau Filtres affichant la catégorie Texture avec un aperçu de chaque filtre.](shot:filters/texture-list)

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Quantité** | 0–100 % | 18 % |
| **Taille** | 0,5–8 px | 1 px |
| **Grain coloré** | Activé ou désactivé | Désactivé |
| **Vitesse** | 0–4 | 1 |
| **Animer** | Activé ou désactivé | Activé |
| **Temps figé** | 0–3600 s | 0 s |

## VHS

Donne à l’image l’aspect d’une cassette vidéo, avec des lignes qui tremblent
latéralement jusqu’à **Suivi**, des franges rouges et bleues, des lignes de
balayage et du bruit. Le tremblement et le bruit changent avec le temps.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Suivi** | 0–32 px | 5 px |
| **Bruit** | 0–100 % | 12 % |
| **Lignes de balayage** | 0–100 % | 20 % |
| **Vitesse** | 0–4 | 1 |
| **Animer** | Activé ou désactivé | Activé |
| **Temps figé** | 0–3600 s | 0 s |

## Tube cathodique

Donne à l’image l’aspect d’un vieil écran de télévision : bombé, avec des
franges rouges et bleues, un masque de pixels RVB à bandes, des lignes de
balayage et une bande lumineuse qui défile avec le temps. Les parties de l’image
repoussées hors de l’écran bombé deviennent transparentes.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Courbure** | 0–30 % | 8 % |
| **Lignes de balayage** | 0–100 % | 35 % |
| **Masque de pixels** | 0–100 % | 25 % |
| **Séparation** | 0–5 px | 1 px |
| **Animer** | Activé ou désactivé | Activé |
| **Temps figé** | 0–3600 s | 0 s |

## Animation

**Grain de film**, **VHS** et **Tube cathodique** sont animés, et leurs lignes
dans le panneau **Filtres** portent la marque d’animation. Lorsque **Animer**
est activé, le filtre joue en continu selon **Vitesse** (le filtre Tube
cathodique n’a pas de réglage **Vitesse**). Désactivez **Animer** pour figer le
filtre au moment défini par **Temps figé**.

Une image exportée montre l’animation au moment de l’exportation.
