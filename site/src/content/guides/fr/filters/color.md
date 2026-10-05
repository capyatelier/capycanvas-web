---
title: "Filtres de couleur"
description: "Réglages des filtres de la catégorie Couleur."
related: ["filters/adding", "filters/tone", "filters/how-filters-apply"]
---

Les filtres de couleur se trouvent dans **Filtre > Couleur** et dans la
catégorie **Couleur** du panneau **Filtres**. Leurs réglages se modifient dans
le panneau **Propriétés**.

![Le panneau Filtres affichant la catégorie Couleur avec un aperçu de chaque filtre.](shot:filters/color-list)

## Teinte / Saturation

Décale la teinte, la saturation et la luminosité de toute l’image sur la page
**Global**, ou d’une plage de couleurs sur les pages **Rouges** à **Magentas**.
**Coloriser** donne à chaque pixel une même teinte et une même saturation, en
conservant sa luminosité.

![Le panneau Propriétés de Teinte / Saturation sur la page Rouges.](shot:filters/hue-saturation-properties)

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Teinte** | −180° à 180°, ou 0–360° avec **Coloriser** | 0° |
| **Saturation** | −100 % à 100 %, ou 0–100 % avec **Coloriser** | 0 %, ou 25 % avec **Coloriser** |
| **Luminosité** | −100 % à 100 % | 0 % |
| **Centre** | Teinte Oklab de 0 à 360°. Pages de couleur uniquement. | Rouges 30°, Jaunes 110°, Verts 145°, Cyans 195°, Bleus 265°, Magentas 330° |
| **Largeur** | 0–180°. Pages de couleur uniquement. | 30° |
| **Contour progressif** | 0–90°. Pages de couleur uniquement. | 30° |
| **Coloriser** | Activé ou désactivé. Lorsqu’il est activé, seule la page **Global** reste. | Désactivé |

## Inverser

Inverse chaque canal de couleur. Ce filtre n’a pas de réglages.

## Désaturer

Remplace chaque couleur par un gris de même luminosité TSL. Ce filtre n’a pas de
réglages.

## Filtre photo

Teinte l’image vers **Couleur** selon **Densité**.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Couleur** | N’importe quelle couleur | #FFB873 |
| **Densité** | 0–100 % | 25 % |
| **Conserver la luminosité** | Activé ou désactivé | Activé |

## Correction sélective

Modifie le cyan, le magenta, le jaune et le noir d’une plage de couleurs par
page. Les pages **Rouges** à **Magentas** agissent sur les couleurs saturées, et
**Blancs**, **Neutres** et **Noirs** agissent sur les tons proches du gris.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Cyan** | −100 % à 100 % | 0 % |
| **Magenta** | −100 % à 100 % | 0 % |
| **Jaune** | −100 % à 100 % | 0 % |
| **Noir** | −100 % à 100 % | 0 % |
| **Méthode** | **Relative** proportionne chaque modification à l’encre déjà présente dans la couleur. **Absolue** l’ajoute telle quelle. S’applique à toutes les pages. | **Relative** |

## Mélangeur de canaux

Construit chaque canal de sortie, sur les pages **Rouge**, **Vert** et **Bleu**,
à partir d’un mélange des canaux d’entrée rouge, vert et bleu, plus
**Constante**. Lorsque **Monochrome** est activé, seule la page **Gris** reste,
et son mélange produit une image en niveaux de gris.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rouge** | −200 % à 200 % | 100 % sur la page **Rouge**, 21,26 % sur **Gris**, sinon 0 % |
| **Vert** | −200 % à 200 % | 100 % sur la page **Vert**, 71,52 % sur **Gris**, sinon 0 % |
| **Bleu** | −200 % à 200 % | 100 % sur la page **Bleu**, 7,22 % sur **Gris**, sinon 0 % |
| **Constante** | −100 % à 100 % | 0 % |
| **Monochrome** | Activé ou désactivé | Désactivé |

## Correspondance de couleur (LUT)

Applique aux couleurs une table de correspondance choisie dans le menu des
styles (il affiche le style actuel, par exemple **Chaud**), mélangée à l’original
selon **Intensité**. Pour utiliser votre propre LUT, sélectionnez **Importer une
LUT…** à côté du menu des styles et ouvrez un fichier 3D `.cube` de 16 Mo au
maximum.

![Le panneau Propriétés de Correspondance de couleur (LUT) avec le menu des styles et Importer une LUT….](shot:filters/color-lookup)

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| Menu des styles | **Original** (aucune modification), **Chaud**, **Froid**, **Monochrome**, ou une LUT importée, sous son titre. Les LUT importées sont enregistrées dans le dessin. | **Original** |
| **Espace colorimétrique de la LUT** | **sRGB**, **Display P3**, **Adobe RGB (1998)**, **ProPhoto RGB** : l’espace colorimétrique attendu par une LUT importée. Masqué pour **Original** et les styles intégrés. | **sRGB** |
| **Intensité** | 0–100 % | 100 % |

## Équilibre des couleurs

Décale les couleurs séparément sur les pages **Ombres**, **Tons moyens** et
**Hautes lumières**. Les valeurs positives vont vers la seconde couleur du
libellé de chaque curseur.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Cyan — Rouge** | −100 à 100 | 0 |
| **Magenta — Vert** | −100 à 100 | 0 |
| **Jaune — Bleu** | −100 à 100 | 0 |
| **Conserver la luminosité** | Activé ou désactivé, pour toutes les pages | Activé |

## Vibrance

**Vibrance** augmente davantage la saturation des couleurs ternes que celle des
couleurs saturées. **Saturation** modifie toutes les couleurs de la même façon.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Vibrance** | −100 % à 100 % | 0 % |
| **Saturation** | −100 % à 100 % | 0 % |
| **Protéger les tons de peau** | Activé ou désactivé. Limite une **Vibrance** positive sur les teintes orangées et les tons chair. | Activé |

## Noir et blanc

Convertit l’image en niveaux de gris, avec un curseur qui règle la clarté
obtenue pour chaque teinte. **Teinte** colore le résultat avec **Couleur de
teinte**.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Rouges** | −100 % à 200 % | 40 % |
| **Jaunes** | −100 % à 200 % | 60 % |
| **Verts** | −100 % à 200 % | 40 % |
| **Cyans** | −100 % à 200 % | 60 % |
| **Bleus** | −100 % à 200 % | 20 % |
| **Magentas** | −100 % à 200 % | 80 % |
| **Teinte** | Activé ou désactivé | Désactivé |
| **Couleur de teinte** | N’importe quelle couleur | #BF874C |

## Courbe de transfert de dégradé

Fait correspondre les tons de l’image à **Dégradé**, du point de couleur de
gauche pour les tons les plus sombres au point de droite pour les plus clairs.
**Quantité** mélange le résultat à l’original.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Dégradé** | N’importe quel dégradé, modifié comme avec l’outil [Dégradé](/fr/docs/drawing/gradient/) | Du noir au blanc, interpolation **Oklab** |
| **Quantité** | 0–100 % | 100 % |

## Balance des blancs

Réchauffe ou refroidit l’image avec **Température** et la décale vers le magenta
ou le vert avec **Teinte**. **Choisir un point neutre**, en haut du panneau
**Propriétés**, règle les deux pour rendre neutre le point sur lequel vous
cliquez dans la toile.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Température** | −100 à 100, ou jusqu’à ±1000 en saisie. Les valeurs positives sont plus chaudes. | 0 |
| **Teinte** | −100 à 100, ou jusqu’à ±800 en saisie. Les valeurs positives tirent vers le magenta. | 0 |
| **Conserver la luminosité** | Activé ou désactivé | Activé |

## Virage partiel

Teinte les ombres vers la couleur **Ombres** et les hautes lumières vers la
couleur **Hautes lumières**, en conservant leur luminosité.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Ombres** | N’importe quelle couleur | #295494 |
| **Hautes lumières** | N’importe quelle couleur | #F5AD57 |
| **Équilibre** | −100 à 100. Déplace le point de rencontre des deux teintes. Les valeurs positives étendent la couleur **Ombres** à une plus grande partie de l’image. | 0 |
| **Intensité** | 0–100 % | 30 % |

## Solarisation

Inverse chaque canal de couleur là où il est plus clair que **Seuil**.
**Intensité** mélange le résultat à l’original.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Seuil** | 0–100 % | 50 % |
| **Intensité** | 0–100 % | 100 % |

## Iridescence

Ajoute un arc-en-ciel de couche mince qui suit la luminosité de l’image et se
déplace avec le temps. Une image exportée montre les couleurs au moment de
l’exportation.

| Réglage | Plage ou choix | Par défaut |
| --- | --- | --- |
| **Intensité** | 0–100 % | 55 % |
| **Taille du film** | 8–240 px | 64 px |
| **Vitesse** | 0–4 | 0,3 |
| **Animer** | Activé ou désactivé. Lorsqu’il est activé, les couleurs se déplacent en continu selon **Vitesse**. | Activé |
| **Temps figé** | 0–3600 s : le moment affiché lorsque **Animer** est désactivé | 0 s |
