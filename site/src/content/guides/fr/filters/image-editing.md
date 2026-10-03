---
title: "Modifier une photo"
description: "Ouvrez une photo, ajustez ses couleurs avec des calques modifiables et exportez le résultat."
purpose: "Photo est l'espace de travail pour ajuster les images. Vous pouvez ouvrir une photo directement depuis votre appareil photo ou votre téléphone, l'éclaircir ou modifier ses couleurs avec des calques de réglage et exporter une copie finale, le tout sans modifier le fichier d'origine."
techniques: ["Ouvrez une photo ou ajoutez-en une à un dessin existant.", "Ajustez-le avec un calque de filtre modifiable.", "Enregistrez vos modifications et exportez une copie."]
figure: "1 : Espace de travail Photo. 2 : La photo et son calque de réglage. 3 : Propriétés pour le réglage."
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1 : Espace de travail Photo. 2 : La photo et son calque de réglage. 3 : Propriétés pour le réglage."}
---

## Ouvrir la photo

Choisissez **Photo** dans le sélecteur d'espace de travail, puis choisissez **File → Open…** et sélectionnez votre image. Capy Canvas ouvre les fichiers JPEG, PNG, TIFF, WebP, HEIC, AVIF et OpenEXR, de sorte que les photos de la plupart des appareils photo et téléphones s'ouvrent directement. La photo s'ouvre dans son propre onglet en taille réelle, avec ses couleurs d'origine.

Pour ajouter une photo à un dessin déjà ouvert, choisissez **File → Import Image as Layer…** ou faites glisser le fichier sur le canevas. La photo apparaît avec des poignées pour que vous puissiez la déplacer et la redimensionner ; sélectionnez **Apply** lorsqu'il est en place, ou **Original Size (100%)** pour l'utiliser à sa taille réelle.

## Effectuer un ajustement

Ouvrez **Filters** et choisissez un réglage tel que **Curves**, **Vibrance** ou **Hue / Saturation**. Il est ajouté en tant que nouveau calque au-dessus de la photo et ses paramètres apparaissent dans **Properties**. Changez-les progressivement et regardez la photo au fur et à mesure. Masquez et affichez le calque de réglage pour comparer le résultat avec l'original.

Étant donné que l'ajustement réside sur son propre calque, vous pouvez revenir le modifier à tout moment ou le supprimer sans laisser de trace. Pour ajuster seulement une partie de la photo, sélectionnez d'abord cette zone, par exemple le ciel avec [Sélectionner par luminosité](/fr/docs/selections/tonal-range/). [Filtres et ajustements](/fr/docs/filters/overview/) explique d'autres façons de limiter un ajustement.

## Enregistrer et exporter

Lorsque vous enregistrez une photo que vous avez modifiée, Capy Canvas enregistre un fichier `.capy` avec tous vos calques de réglage et votre photo originale n'est jamais écrasée. Pour partager le résultat, choisissez **File → Export…** et enregistrez un JPEG ou un PNG. [Exporter une image](/fr/docs/output/export/) explique les paramètres d'exportation.
