---
title: "Filtres de distorsion"
description: "Réglages des filtres de la catégorie Distordre."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Les filtres de distorsion se trouvent dans **Filtre > Distordre** et dans la
catégorie **Distordre** du panneau **Filtres**. Leurs réglages se modifient dans
le panneau **Propriétés**. Chacun d’eux peut déplacer de la peinture dans les
zones transparentes d’un calque.

![Le panneau Filtres affichant la catégorie Distordre avec un aperçu de chaque filtre.](shot:filters/distort-list)

## Aberration chromatique

Ajoute des franges colorées sur les contours en décalant le canal rouge dans un
sens et le canal bleu dans l’autre, de **Séparation** selon **Angle**.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Séparation** | 0–32 px | 3 px |
| **Angle** | −180° à 180° | 0° |

## Kaléidoscope

Reproduit en miroir une portion de l’image en **Segments** portions autour du
centre.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Segments** | 2–24 | 6 |
| **Angle** | −180° à 180° | 0° |
| **Centre X**, **Centre Y** (sous **Position**) | 0–100 % de la largeur et de la hauteur de la toile | 50 % |

## Tourbillon

Fait tourner l’image autour du centre selon **Torsion**, avec un effet qui
s’annule à la distance **Rayon**.

![Le panneau Propriétés de Tourbillon avec Torsion, Rayon et les réglages de Position.](shot:filters/swirl-properties)

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Torsion** | −720° à 720° | 120° |
| **Rayon** | 1–150 % de la moitié du plus petit côté de la toile | 70 % |
| **Centre X**, **Centre Y** (sous **Position**) | 0–100 % de la largeur et de la hauteur de la toile | 50 % |

## Ondulation

Déplace l’image en anneaux autour du centre, d’**Amplitude** au maximum, avec
un écart de **Longueur d’onde** entre les anneaux. Les anneaux s’éloignent vers
l’extérieur avec le temps.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Amplitude** | 0–48 px | 12 px |
| **Longueur d’onde** | 8–256 px | 64 px |
| **Vitesse** | 0–4 | 0,5 |
| **Centre X**, **Centre Y** (sous **Position**) | 0–100 % de la largeur et de la hauteur de la toile | 50 % |
| **Animer** | Activé ou désactivé | Activé |
| **Temps figé** | 0–3600 s | 0 s |

## Verre

Déforme l’image avec un motif de verre dépoli de **Taille de texture**, de
**Distorsion** au maximum. **Rugosité** ajoute un motif plus fin.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Distorsion** | 0–48 px | 12 px |
| **Taille de texture** | 4–160 px | 24 px |
| **Rugosité** | 0–100 % | 35 % |

## Verre pluvieux

Ajoute des gouttes de pluie qui glissent vers le bas en laissant des traînées et
qui courbent l’image de **Réfraction** au maximum. **Pluie** définit le nombre
de gouttes.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Réfraction** | 0–32 px | 8 px |
| **Taille des gouttes** | 12–120 px | 48 px |
| **Pluie** | 0–100 % | 65 % |
| **Vitesse** | 0–4 | 0,5 |
| **Animer** | Activé ou désactivé | Activé |
| **Temps figé** | 0–3600 s | 0 s |

## Brume de chaleur

Fait miroiter l’image avec le temps, de **Distorsion** au maximum en bas de la
toile et pas du tout en haut. **Détail** ajoute des ondulations plus fines.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Distorsion** | 0–48 px | 8 px |
| **Taille des vagues** | 10–240 px | 90 px |
| **Vitesse** | 0–4 | 0,6 |
| **Détail** | 0–100 % | 50 % |
| **Animer** | Activé ou désactivé | Activé |
| **Temps figé** | 0–3600 s | 0 s |

## Déformation de domaine

Déforme l’image avec un motif marbré de **Taille du motif**, de **Distorsion**
au maximum. Le motif dérive avec le temps.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Distorsion** | 0–64 px | 24 px |
| **Taille du motif** | 8–256 px | 96 px |
| **Vitesse** | 0–4 | 0,25 |
| **Animer** | Activé ou désactivé | Activé |
| **Temps figé** | 0–3600 s | 0 s |

## Animation

**Ondulation**, **Verre pluvieux**, **Brume de chaleur** et **Déformation de
domaine** sont animés, et leurs lignes dans le panneau **Filtres** portent la
marque d’animation. Lorsque **Animer** est activé, le filtre joue en continu
selon **Vitesse**. Désactivez **Animer** pour figer le filtre au moment défini
par **Temps figé**.

Une image exportée montre l’animation au moment de l’exportation.
