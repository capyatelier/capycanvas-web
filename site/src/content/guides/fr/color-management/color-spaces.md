---
title: "Espace colorimétrique, profondeur de couleur et fusion"
description: "Choisir l’espace colorimétrique, la profondeur de couleur et la Fusion d’un dessin, et les modifier ensuite depuis le menu Édition."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Vous pouvez choisir l’espace colorimétrique, la profondeur de couleur et la Fusion
d’un dessin à sa création, et les modifier ensuite depuis le menu **Édition**.

## Espaces colorimétriques

L’espace colorimétrique de travail d’un dessin est **sRGB**, **Display P3**,
**Adobe RGB (1998)** ou **ProPhoto RGB**. ProPhoto RGB utilise un point blanc
D50, et les trois autres D65.

Les profils ICC ne peuvent pas servir d’espaces de travail. Vous pouvez les
utiliser pour l’[épreuvage d’impression](/fr/docs/color-management/proof/) et
l’[exportation](/fr/docs/files/export/).

## Profondeurs de couleur

La profondeur de couleur d’un dessin est **SDR 8 bits**, **SDR 16 bits**,
**HDR flottant 16 bits** ou **HDR flottant 32 bits**. Une profondeur en virgule
flottante en fait un [dessin HDR](/fr/docs/color-management/hdr/), enregistré en
RVB linéaire où 1,0 correspond au blanc SDR à 203 cd/m².

## Les choisir pour un nouveau dessin

Choisissez **Fichier > Nouveau…** (**Ctrl+N**) et réglez
**Espace colorimétrique**, **Profondeur de couleur** et **Fusion**, ou choisissez un
**Préréglage** :

| Préréglage | Espace colorimétrique | Profondeur de couleur | Fusion |
| --- | --- | --- | --- |
| **Dessin standard** | sRGB | SDR 8 bits | Perceptuelle |
| **Couleurs étendues** | Display P3 | SDR 8 bits | Perceptuelle |
| **Retouche photo** | ProPhoto RGB | SDR 16 bits | Perceptuelle |
| **Dessin HDR** | sRGB | HDR flottant 16 bits | Lumière linéaire |

Avec une profondeur en virgule flottante, **Fusion** est fixé sur Lumière
linéaire. Activez **Utiliser ces réglages pour les nouveaux dessins** pour faire
de ces choix, Fusion comprise, les valeurs par défaut des nouveaux dessins.

![La boîte de dialogue Nouveau dessin avec Espace colorimétrique réglé sur Display P3, Profondeur de couleur, Fusion et la ligne de résumé.](shot:color-management/new-dialog-color)

## Valeurs par défaut dans les Préférences

Choisissez **Édition > Préférences** et ouvrez la page **Couleur** :

- Sous **Nouveaux dessins**, réglez l’**Espace colorimétrique**, la **Profondeur de couleur** et l’**Arrière-plan** des futurs dessins. Les dessins ouverts ne changent pas.
- Sous **Ouverture des photos**, réglez **Précision de retouche** (**Profondeur d’origine** ou **16 bits**) et **RVB et niveaux de gris sans profil** (**Supposer sRGB** ou **Demander**). Avec **Demander**, l’ouverture d’une photo sans profil affiche **Choisir l’interprétation de l’image**. Les photos avec profil conservent leur profil incorporé.
- Sélectionnez **Gérer les profils…** pour ouvrir la [Bibliothèque de profils colorimétriques](/fr/docs/color-management/proof/).

Les Préférences n’ont pas de réglage de Fusion.

## Attribuer un profil

Choisissez **Édition > Attribuer un profil…** pour conserver les valeurs RVB du
dessin et les lire dans un autre espace de travail. Choisissez l’espace sous
**Espace colorimétrique**, où Adobe RGB (1998) apparaît sous le nom
**Adobe RGB**. Les calques photo conservent le profil source de leur
[photo d’origine](/fr/docs/layers/types/).

## Convertir l’espace colorimétrique

Choisissez **Édition > Convertir l’espace colorimétrique…** pour modifier les
valeurs RVB afin que les couleurs gardent leur apparence dans un autre espace de
travail, dans les limites de son gamut.

Avec **Enregistrer une copie aplatie**, **Appliquer** devient
**Enregistrer une copie…**. La copie a un seul calque, de même taille et de même
profondeur de couleur. Son nom de fichier doit se terminer par `.capy` et ne peut pas être
celui du fichier du dessin ouvert.

![La boîte de dialogue Convertir l’espace colorimétrique avec la comparaison Avant et Après et le message sur le gamut.](shot:color-management/convert-dialog)

### Espace colorimétrique

L’espace de travail cible de la conversion. L’espace actuel est sélectionné au
départ.

### Résultat

**Calques modifiables** (par défaut) convertit chaque calque sur place.
**Enregistrer une copie aplatie** enregistre une copie convertie et aplatie dans
un nouveau fichier `.capy` et laisse le dessin ouvert inchangé.

### Intention de rendu

**Colorimétrie relative** (par défaut), **Perceptuelle**, **Saturation** ou
**Colorimétrie absolue**. La compensation du point noir est toujours désactivée.

## Changer la profondeur de couleur

Choisissez **Édition > Changer la profondeur de couleur…** pour modifier la
précision enregistrée. L’espace colorimétrique ne change pas.

Passer à une profondeur en virgule flottante rend le dessin HDR et règle Fusion
sur Lumière linéaire dans la même étape. Revenir à une profondeur entière
conserve Lumière linéaire jusqu’à ce que vous changiez la [Fusion](#fusion).
Réduire la profondeur peut écrêter des couleurs.

### Profondeur de couleur

La nouvelle profondeur de couleur. La profondeur actuelle est sélectionnée au
départ.

### Tramage

**Aucun** (par défaut) ou **Stochastique (8 bits)**. Le tramage ne s’applique
que si la cible est le SDR 8 bits.

## Prévisualiser et appliquer

Pour appliquer Attribuer un profil, Convertir l’espace colorimétrique ou Changer
la profondeur de couleur :

1. Réglez les champs de la boîte de dialogue.
2. Sélectionnez **Prévisualiser le résultat complet**.
3. Comparez **Avant** et **Après**.
4. Sélectionnez **Appliquer** (ou **Enregistrer une copie…**).

**Appliquer** reste indisponible tant que l’aperçu n’est pas prêt, et modifier un
champ supprime l’aperçu. Si des couleurs sont écrêtées, la ligne d’état indique
« Certaines couleurs dépassent le gamut de destination. Comparer le résultat
avant d’appliquer. »

L’application est une étape d’annulation. Annuler et Rétablir
ouvrent **Annuler le changement de couleur** et
**Rétablir le changement de couleur**. Ces boîtes de dialogue appliquent le changement sans autre saisie et ne proposent
qu’**Annuler**.

## Fusion

Vous pouvez combiner les calques sur les valeurs encodées du dessin ou en lumière
linéaire. Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Fusion > Fusion perceptuelle** ou **Édition > Fusion > Fusion en lumière linéaire**.
- Réglez **Fusion** sur **Perceptuelle** ou **Lumière linéaire** dans la boîte de dialogue Nouveau dessin.

![Le menu Édition avec le sous-menu Fusion ouvert et Fusion perceptuelle cochée.](shot:color-management/edit-blending-menu)

Les pixels peints conservent leurs valeurs. La Fusion modifie :

- la façon dont les calques se combinent ;
- la façon dont les pinceaux secs posent la couleur sur la peinture existante ;
- Flou gaussien, Accentuation, Passe-haut, Lissage préservant les bords et Flou artistique (Flou de mouvement, Vignettage et Lueur travaillent toujours en lumière linéaire) ;
- le gris neutre de **Nouveau calque d’éclaircissement et d’assombrissement** ;
- [Séparation de fréquences…](/fr/docs/retouch/dodge-burn/), qui nécessite Perceptuelle.

Un changement de Fusion est une étape d’annulation. Les dessins
HDR utilisent toujours Lumière linéaire, et les deux éléments de menu sont indisponibles. Les
nouveaux dessins et les photos ouvertes depuis des fichiers image commencent en
Perceptuelle. Les photos qui s’ouvrent avec une profondeur en virgule flottante et
les fichiers `.capy` enregistrés avant l’apparition de la Fusion utilisent Lumière
linéaire.

## Propriétés du document

Choisissez **Fichier > Propriétés du document…** pour voir la
**Taille de la toile**, l’**Espace colorimétrique de travail**, la **Profondeur de couleur**, la
**Fusion** et les **Métadonnées de résolution** du dessin. Les dessins HDR
ajoutent **Blanc de référence HDR**. Chaque photo d’origine du dessin ajoute une
ligne avec son profil source. Vous ne pouvez rien modifier dans cette boîte de
dialogue.
