---
title: "Modifier la couleur"
description: "Définir une couleur par ses valeurs, son code hexadécimal ou un texte de couleur dans la boîte de dialogue Modifier la couleur."
related: ["color/color-panel", "color/palettes", "color/eyedropper"]
---

Vous pouvez définir une couleur par ses valeurs dans la boîte de dialogue
**Modifier la couleur**. Rien ne change tant que vous n’avez pas sélectionné
**Utiliser la couleur**.

![La boîte de dialogue Modifier la couleur avec la roue à gauche, Actuelle et Nouvelle avec le code hexadécimal en haut à droite, trois rangées de valeurs et les couleurs récentes en bas.](shot:color/edit-color "1 Roue et formes · 2 Actuelle et Nouvelle · 3 Prélever sur la toile · 4 Hex · 5 Rangées de valeurs · 6 Couleurs récentes")

## Ouvrir la boîte de dialogue Modifier la couleur

Effectuez l’une des opérations suivantes :

- Sélectionnez **Modifier la couleur…** (le crayon) en haut à droite du [panneau Couleur](/fr/docs/color/color-panel/).
- Double-cliquez sur la pastille de premier plan ou d’arrière-plan du panneau Couleur.
- Sélectionnez un bouton de couleur dans Propriétés, comme **Couleur** d’un calque de remplissage Couleur unie ou **Couleur de teinte** de Noir et blanc.
- Sélectionnez la miniature d’un calque de remplissage Couleur unie dans le panneau Calques.
- Sélectionnez la **Couleur** d’un point dans l’éditeur de dégradé.
- Sélectionnez **Couleur du pinceau** dans un panneau qui l’affiche. Vous pouvez l’ajouter aux panneaux Pinceaux et Taille du pinceau ([Panneaux et colonnes](/fr/docs/customize/panels/)).
- Sous Windows, Linux et Android, cliquez avec le bouton droit sur la pastille de premier plan ou d’arrière-plan, ou appuyez longuement dessus, et choisissez **Modifier la couleur…**.

## Roue et formes

La roue fonctionne comme dans le panneau Couleur. Sélectionnez **OKLCH**, **HSB**
ou **HLS** sous la roue pour donner au champ la forme d’un cercle, d’un carré ou
d’un triangle.

## Actuelle et Nouvelle

**Nouvelle** montre la couleur que vous composez. Sélectionnez **Actuelle** pour
ramener **Nouvelle** à la couleur de départ.

## Hex

Le champ hexadécimal affiche Nouvelle sous la forme `#RRGGBB` en sRGB.
Sélectionnez-le pour saisir un code hexadécimal ou un autre
[texte de couleur](#coller-des-couleurs).

Un badge à gauche du code hexadécimal signale ces cas :

- « ≈ » : la couleur est hors sRGB, et le code hexadécimal affiche la couleur sRGB la plus proche.
- « Base » : dans un dessin HDR, le code hexadécimal affiche la couleur avant l’intensité.
- « sRGB » : l’espace colorimétrique du dessin n’est pas sRGB.

## Rangées de valeurs

Chaque rangée affiche Nouvelle dans un format. Sélectionnez le nom du format au
début d’une rangée pour choisir un autre format. La boîte de dialogue mémorise
les formats choisis.

| Rangée | Formats |
| --- | --- |
| 1 | **RGB** (0–255, par défaut), **RGB 0–1**, **RVB linéaire** (0–1). Les valeurs sont dans l’espace colorimétrique du dessin, indiqué par un badge sur la rangée. |
| 2 | **HSB** (par défaut), **HSL** |
| 3 | **OKLCH** (par défaut), **OKLab** |

![Les rangées de valeurs avec le menu des formats de la première rangée ouvert.](shot:color/edit-color-formats)

## Modifier les valeurs

- Sélectionnez une valeur pour saisir un nombre. Appuyez sur **Entrée** pour valider ou sur **Échap** pour annuler.
- Faites glisser une valeur vers le haut ou vers le bas pour la modifier. Maintenez **Maj** pour des pas plus grands, ou **Alt** ou **Ctrl** pour des pas plus petits.
- Appuyez sur **↑** ou **↓** sur une valeur pour la modifier d’un pas.

Une valeur hors de la plage d’un champ est ramenée à la limite la plus proche. La
teinte repart de 0 au-delà de 360°. Si vous tapez un texte qui n’est ni un nombre ni une
couleur, le champ reste ouvert avec une erreur. **Utiliser la couleur** reste
indisponible jusqu’à ce que vous corrigiez la valeur ou appuyiez sur **Échap**.

## Copier des couleurs

Sélectionnez le bouton de copie au bout du champ hexadécimal ou d’une rangée pour
copier cette valeur sous forme de texte. Une coche sur le bouton confirme la
copie. Appuyez sur **Ctrl+C** dans la boîte de dialogue, hors d’un champ de
texte, pour copier le code hexadécimal.

| Format | Texte copié dans les dessins sRGB | Dans les autres espaces colorimétriques |
| --- | --- | --- |
| Hex | `#RRGGBB` | `#RRGGBB` |
| RGB | `rgb(R G B)` | `color(display-p3 r g b)`, `color(a98-rgb r g b)` ou `color(prophoto-rgb r g b)`, de 0 à 1 |
| RGB 0–1 | `color(srgb r g b)` | comme pour RGB |
| RVB linéaire | `color(srgb-linear r g b)` | `r g b` |
| HSB, HSL | `hsb(h s% b%)`, `hsl(h s% l%)` | `h° s% b%`, `h° s% l%` |
| OKLCH, OKLab | `oklch(L% C h)`, `oklab(L% a b)` | identique |

## Coller des couleurs

Appuyez sur **Ctrl+V** dans la boîte de dialogue, hors d’un champ de texte, pour
définir Nouvelle à partir d’un texte de couleur. Le champ hexadécimal et les
champs de valeur acceptent le même texte :

- les codes hexadécimaux à 3, 4, 6 ou 8 chiffres, avec `#`, `0x` ou sans préfixe (les chiffres alpha sont ignorés) ;
- les noms de couleurs CSS, comme `teal` ;
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsb()`, `hsv()`, `oklch()` et `oklab()` ;
- `color()` avec `srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb` ou `srgb-linear` ;
- trois nombres. Une rangée de valeurs les lit dans son propre format. Ailleurs, ce sont des valeurs RVB de 0 à 255, ou de 0 à 1 quand les trois valent 1 ou moins et que l’une d’elles a une décimale.

Un texte de couleur ne modifie jamais l’alpha de la couleur.

## Prélever sur la toile

Sélectionnez **Prélever sur la toile** (la pipette à côté d’Actuelle et
Nouvelle) pour prélever Nouvelle dans le dessin. La boîte de dialogue se
masque, et une bande dans un coin de la toile affiche Actuelle, la couleur
prélevée et ses valeurs.

Cliquez, ou levez le stylet ou le doigt, pour prélever. La boîte de dialogue
revient avec la couleur prélevée comme Nouvelle. Appuyez sur **Échap** ou
sélectionnez la bande pour revenir sans changement.

Avec un doigt, le point d’échantillonnage se trouve au-dessus du bout du doigt.
**Prélever sur la toile** est masqué quand Modifier la couleur s’ouvre depuis une
autre boîte de dialogue.

## Couleurs récentes et palettes

Le bas de la boîte de dialogue affiche vos couleurs récentes. Sélectionnez-en une
pour en faire la couleur Nouvelle.

Sélectionnez **Couleurs récentes et toutes les palettes** (la flèche après les
couleurs récentes) pour ouvrir un volet avec vos couleurs récentes et toutes les
[palettes](/fr/docs/color/palettes/). Tapez dans le champ de recherche pour
trouver des noms de palettes, des noms de couleurs ou des codes hexadécimaux. Le
**+** au bout d’une palette enregistre Nouvelle dans cette palette. Pour fermer le
volet, sélectionnez **Fermer les nuanciers** ou appuyez sur **Échap**.

![Le volet des nuanciers avec le champ de recherche, Couleurs récentes et les palettes.](shot:color/edit-color-swatches)

## Intensité HDR

Dans un [dessin HDR](/fr/docs/color-management/hdr/), la rangée
**Intensité (EV)** et l’arc sous la roue définissent la luminosité en
diaphragmes par rapport au blanc SDR. Sur l’arc, et quand vous faites glisser
la valeur, la plage va de −2 à +6 EV. Une valeur saisie peut aller au-delà, dans la limite de la
profondeur de couleur du dessin.

## Utiliser la couleur et Annuler

Sélectionnez **Utiliser la couleur** pour appliquer Nouvelle. Sélectionnez
**Annuler** ou appuyez sur **Échap** pour fermer sans changement. Si un menu de
formats ou le volet des nuanciers est ouvert, **Échap** le ferme d’abord.
