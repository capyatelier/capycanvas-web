---
title: "Exporter des images"
description: "Exporter une copie aplatie d’un dessin avec la boîte de dialogue Exporter l’image et avec Exporter à nouveau."
related: ["files/open-save", "color-management/hdr", "color-management/color-spaces"]
---

Vous pouvez exporter une copie aplatie du dessin sous forme d’image.
L’exportation ne modifie pas le dessin `.capy` et ne compte pas comme un
enregistrement.

## Exporter une image

Effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Exporter…**.
- Appuyez sur **Ctrl+Maj+E**.

La boîte de dialogue **Exporter l’image** s’ouvre sur la destination
**Web / Partage**. Sélectionnez **Choisir un fichier…** et choisissez un emplacement. Le
nom proposé est le nom du dessin suivi de l’extension du format, par exemple
« Sans titre.png ». Dans Firefox et Safari, c’est la boîte de dialogue
**Télécharger le fichier** qui s’ouvre (voir [Ouvrir et enregistrer](/fr/docs/files/open-save/)).

Le nom du fichier doit se terminer par l’extension du format. **Exporter…** n’est
pas disponible pendant un recadrage ou une transformation.

## Réglages

![La boîte de dialogue Exporter l’image avec Destination réglée sur Web / Partage.](shot:files/export-dialog)

Certains réglages n’apparaissent que pour certains formats.

### Destination

Définit tous les autres réglages d’un coup. Les préréglages d’exportation
enregistrés apparaissent après ces destinations intégrées :

- **Web / Partage** : un PNG sRGB 8 bits à la taille d’origine.
- **Image à couleurs étendues** : la même chose en Display P3.
- **Retouches ultérieures** : un TIFF 16 bits dans l’espace colorimétrique du dessin.
- **Personnalisé** : commence comme **Web / Partage**.

### Plage dynamique

**SDR** pour un dessin SDR, ou un choix de formats HDR pour un dessin HDR (voir
Exportation HDR plus bas).

### Écrêter les couleurs HDR hors plage

Écrête les couleurs qui dépassent la plage du PNG HDR, du JPEG HDR et de l’AVIF
HDR. Ce réglage n’apparaît que pour ces formats.

### Format

**Image PNG**, **Image TIFF**, **Image JPEG** ou **WebP · sans perte** (voir
Limites des formats plus bas).

### Profil de sortie

**sRGB**, **Display P3**, **Adobe RGB (1998)** ou **ProPhoto RGB**, ainsi que
« Original : *nom* » pour chaque calque photo doté de son propre profil
incorporé.

### Profondeur de couleur

**8 bits** ou **16 bits**.

### Transparence

**Conserver**, **Arrière-plan blanc** ou **Arrière-plan noir**.

### Intention de rendu

**Colorimétrie relative** (par défaut), **Perceptuelle**, **Saturation** ou
**Colorimétrie absolue**.

### Tramage

**Aucun** ou **Stochastique (sortie 8 bits)**.

### Qualité

La qualité de compression, de 1 à 100, 90 par défaut. Ce réglage apparaît pour
le JPEG, le JPEG HDR et l’AVIF HDR.

### Dimensions en pixels

**Taille d’origine** ou **Ajuster aux limites**. **Ajuster aux limites** ajoute
**Largeur maximale (px)** et **Hauteur maximale (px)**, et réduit l’image pour
qu’elle tienne dans ces limites sans changer ses proportions.

### Métadonnées de résolution

**Conserver l’original**, **Pixels par pouce** ou **Omettre**.
**Pixels par pouce** ajoute un champ de 1 à 65 535, 300 par défaut.

### Métadonnées

**Tout**, **Droits d’auteur et contact** ou **Aucun**. Avec **Tout**,
**Retirer la localisation** est activé par défaut. Ces lignes n’apparaissent que
pour les dessins ouverts depuis une photo qui contient des informations sur
l’appareil ou sur les droits d’auteur.

### Importer un profil ICC… et Profils enregistrés…

**Importer un profil ICC…** ajoute un fichier `.icc` ou `.icm` de 16 Mio au
maximum à **Profil de sortie**. **Profils enregistrés…** ouvre la
**Bibliothèque de profils colorimétriques**.

### Nom du préréglage et boutons de préréglage

**Enregistrer le préréglage** enregistre les réglages comme nouvelle destination
sous **Nom du préréglage**. **Mettre à jour le préréglage** et
**Supprimer le préréglage** modifient ou suppriment le préréglage enregistré sélectionné.
**Réinitialiser la destination** rétablit les réglages d’une destination intégrée.

### Prévisualiser la sortie

Affiche l’image exportée à côté du dessin, avec les légendes **Dessin** et
**Sortie**, et un avertissement si des couleurs sortent du gamut de sortie.
Modifier un réglage efface l’aperçu.

### Choisir un fichier…

Demande où enregistrer l’image.

## Limites des formats

- Le JPEG et le WebP sont uniquement en 8 bits.
- Le JPEG ne peut pas conserver la transparence.
- Le WebP accepte jusqu’à 16 384 pixels de côté.
- Avec un profil de sortie en niveaux de gris, le WebP n’est pas disponible.
- Avec un profil de sortie CMJN, seuls le TIFF et le JPEG sont disponibles, sans transparence.

Les choix incompatibles avec les autres réglages sont grisés.

## Préréglages d’exportation

Après une exportation, une destination intégrée conserve les réglages utilisés.
Quand vous exportez avec un préréglage enregistré, les réglages sont conservés
sous **Personnalisé**, et le préréglage lui-même ne change qu’avec
**Mettre à jour le préréglage**.

Un nom de préréglage compte jusqu’à 80 caractères, et vous pouvez conserver
jusqu’à 64 préréglages. Les préréglages s’appliquent à tous les dessins.

## Exportation HDR

![La boîte de dialogue Exporter l’image pour un dessin HDR avec JPEG HDR · carte de gain, après Prévisualiser la sortie.](shot:files/export-hdr-preview)

Pour un dessin en virgule flottante 16 bits ou 32 bits, **Plage dynamique**
propose ces choix :

| Choix | Fichier produit |
| --- | --- |
| **Rendu SDR** | La version SDR du dessin, avec les réglages SDR |
| **JPEG HDR · carte de gain** | Un `.jpg` avec une carte de gain |
| **AVIF HDR · carte de gain avec transparence** | Un `.avif` avec une carte de gain et de la transparence |
| **PNG HDR · BT.2020 PQ** | Un `.png` encodé en BT.2020 PQ, avec transparence |
| **OpenEXR · flottant 32 bits** | Un `.exr` dans l’espace colorimétrique du dessin, avec transparence |

**Rendu SDR** utilise la version SDR définie avec
[Épreuvage SDR](/fr/docs/color-management/hdr/). L’OpenEXR ne conserve aucune
information sur l’appareil ni sur les droits d’auteur. Pour un dessin HDR,
**Retouches ultérieures** s’appelle **Retouches ultérieures (SDR)** et utilise
l’OpenEXR.

Pour le JPEG HDR et l’AVIF HDR, **Prévisualiser la sortie** ajoute
**Prévisualiser le rendu**, avec **Reconstruction HDR · aperçu SDR** et
**Base SDR encodée**.

Si l’aperçu trouve des couleurs qui dépassent la plage du PNG, du JPEG ou de
l’AVIF HDR, **Choisir un fichier…** reste indisponible jusqu’à ce que vous
activiez **Écrêter les couleurs HDR hors plage** ou choisissiez l’OpenEXR.

## Exporter à nouveau

**Fichier > Exporter à nouveau** répète la dernière exportation du dessin avec les
mêmes réglages et le même fichier, sans la boîte de dialogue. La commande reste
indisponible tant que vous n’avez pas exporté le dessin une première fois.

Chaque dessin conserve sa propre dernière exportation, y compris après un
redémarrage. Dans Firefox et Safari, **Exporter à nouveau** affiche la boîte de
dialogue **Télécharger le fichier**.

## Autres plateformes

Sous Linux, les réglages sont répartis sur les pages **Taille**,
**Couleur et transparence** et **Préréglage**, et certains libellés diffèrent. Les boîtes de
dialogue sur iPad et macOS utilisent aussi leurs propres libellés.
