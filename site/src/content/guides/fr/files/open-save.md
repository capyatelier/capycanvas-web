---
title: "Ouvrir et enregistrer"
description: "Ouvrir des dessins et des photos, enregistrer des fichiers .capy et travailler avec plusieurs dessins ouverts."
related: ["files/new", "files/export", "transform/move-transform", "start/undo"]
---

Les commandes de cette page se trouvent dans le menu **Fichier**. Dans Croquis,
ouvrez-le depuis **Menu principal** dans la barre de titre.

![Le menu Fichier.](shot:files/file-menu)

## Ouvrir un dessin ou une photo

Vous pouvez ouvrir des dessins `.capy` et des photos aux formats OpenEXR, TIFF,
PNG, WebP, BMP, JPEG, GIF, HEIF et AVIF. Chaque fichier s’ouvre dans son propre
onglet.

Effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Ouvrir…**. Vous pouvez choisir plusieurs fichiers, sauf sous Linux.
- Appuyez sur **Ctrl+O**.
- Dans Peinture et Photo, sélectionnez **Ouvrir…** dans la barre d’outils Commandes.
- Dans l’éditeur web ou sous Linux, faites glisser des fichiers sur le nom du dessin ou sur les onglets de la barre de titre.
- Si vous avez installé l’éditeur web comme application, ouvrez un fichier `.capy`, `.png`, `.jpg`, `.tif`, `.avif` ou `.exr` avec {appName} depuis votre système.

## Photos

Une photo s’ouvre comme un nouveau dessin, avec un calque photo qui porte le nom
du fichier, au-dessus d’un calque **Papier**. La photo conserve son profil
colorimétrique et, par défaut, sa profondeur de couleur. L’enregistrement du dessin crée
un fichier `.capy` et n’écrase jamais la photo.

- Un GIF ou un WebP animé ouvre sa première image.
- Une photo peut mesurer jusqu’à 32 768 pixels de côté.
- Une photo CMJN ne s’ouvre qu’avec un profil colorimétrique incorporé.
- Les photos HEIF et AVIF en HDR ne peuvent pas être ouvertes.

Quand **RVB et niveaux de gris sans profil** est réglé sur **Demander** dans les
[Préférences](/fr/docs/preferences/), une photo sans profil colorimétrique ouvre la
boîte de dialogue **Choisir l’interprétation de l’image**.

## Importer des images comme calques

Vous pouvez ajouter des images au dessin en cours sous forme de nouveaux calques.

Effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Importer une image comme calque…**.
- Appuyez sur **Ctrl+Maj+O**.
- Faites glisser des images sur la toile, ou sur une ligne du panneau **Calques**.

Chaque image devient un calque qui porte le nom du fichier, au-dessus du calque
sélectionné, avec des [poignées de transformation](/fr/docs/transform/move-transform/)
pour la placer. Une image plus grande que la toile est réduite pour y tenir.

Vous ne pouvez pas importer un fichier `.capy`. Dans l’éditeur web, une image peut
peser jusqu’à 512 Mio.

## Enregistrer

Vous pouvez enregistrer le dessin avec tous ses calques dans un fichier `.capy`.

Effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Enregistrer**.
- Appuyez sur **Ctrl+S**.
- Dans Peinture et Photo, sélectionnez **Enregistrer** dans la barre d’outils Commandes.

Le premier enregistrement demande un emplacement, et les suivants écrivent dans le
même fichier. Après l’enregistrement, l’onglet affiche le nom du fichier sans le
signe ●.

Dans Firefox et Safari, le dessin n’est considéré comme enregistré qu’une fois que vous avez
sélectionné **Télécharger**, puis **Fichier enregistré** dans la boîte de dialogue
**Télécharger le fichier**.

![La boîte de dialogue Télécharger le fichier avec Annuler, Télécharger et Fichier enregistré.](shot:files/download-file)

**Fichier > Enregistrer sous…** (**Ctrl+Maj+S**) demande toujours un
emplacement, et les enregistrements suivants vont dans le nouveau fichier.
**Enregistrer** en demande un aussi si le fichier a changé sur le disque depuis
que vous l’avez ouvert ou enregistré.

**Enregistrer** n’est pas disponible pendant un recadrage ou une transformation.

## Ce que conserve un fichier .capy

Un fichier `.capy` conserve chaque calque avec son masque et ses réglages, les
filtres, les sélections et les repères enregistrés, l’espace colorimétrique, la
profondeur de couleur et la fusion, ainsi que les données EXIF, XMP et IPTC d’une
photo. Il ne conserve pas l’historique d’annulation, la vue ni la sélection
active.

## Dessins en lecture seule

Un fichier `.capy` que {appName} ne peut pas modifier, comme un fichier
endommagé, s’ouvre dans une boîte de dialogue au lieu d’un onglet.
**Copy Original File…** enregistre une copie du fichier, et **Export Preview Image…**
enregistre l’aperçu du dessin au format PNG.

## Onglets des dessins

![Trois onglets de dessins dans la barre de titre, dont un marqué comme non enregistré.](shot:files/drawing-tabs)

La barre de titre affiche un onglet par dessin ouvert. Quand un seul dessin est
ouvert, elle affiche à la place le nom et la taille du dessin.

Sélectionnez un onglet pour passer à son dessin, ou utilisez ces touches :

| Pour | Éditeur web | Linux |
| --- | --- | --- |
| Afficher le dessin précédent | **Alt+Page précédente** | **Ctrl+Page précédente** ou **Ctrl+Maj+Tabulation** |
| Afficher le dessin suivant | **Alt+Page suivante** | **Ctrl+Page suivante** ou **Ctrl+Tabulation** |
| Ouvrir la liste Dessins | **Ctrl+Alt+D** | **Ctrl+Maj+A** |

Dans l’éditeur web, faites glisser un onglet latéralement pour réorganiser les
onglets.

Un ● devant un nom signale des modifications non enregistrées. Quand la barre de
titre est étroite, les onglets deviennent un seul bouton qui ouvre la liste
Dessins.

Chaque onglet conserve son propre historique d’annulation, sa vue et sa
sélection. Les onglets ne font pas partie d’un espace de travail.

## Dessins…

![La liste Dessins avec trois dessins.](shot:files/drawings-list)

Vous pouvez voir tous les dessins ouverts dans une seule liste.

Effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Dessins…** ou **Fenêtre > Dessins…**.
- Dans l’éditeur web, cliquez avec le bouton droit sur un onglet.

Sélectionnez une ligne pour passer à son dessin, faites glisser la poignée à sa
gauche pour réorganiser, ou sélectionnez **×** pour fermer le dessin. L’ordre des
onglets a ses propres commandes **Annuler la réorganisation des onglets** et
**Rétablir la réorganisation des onglets** en bas de la liste.

## Fermer un dessin

Effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Fermer**.
- Appuyez sur **Ctrl+W**. Dans l’éditeur web, appuyez sur **Ctrl+Alt+W**.
- Sélectionnez **×** sur l’onglet du dessin.

Si le dessin contient des modifications non enregistrées, une boîte de dialogue
demande « Enregistrer les modifications de « *nom* » ? », avec **Annuler**,
**Abandonner les modifications** et **Enregistrer**.

Quand vous fermez le dernier dessin, l’éditeur web ouvre un nouveau dessin vierge.
Sous Linux, la fenêtre se ferme.

## Réouverture après un redémarrage

Tous les dessins ouverts, enregistrés ou non, se rouvrent au prochain démarrage de
{appName}, chacun avec son historique d’annulation, sa vue, sa sélection et sa
dernière exportation. {appName} ne demande pas d’enregistrer quand vous le quittez.

Dans l’éditeur web, effacer les données du site supprime les dessins non
enregistrés.

Après une fermeture inattendue de {appName}, les dessins rouverts affichent
« (récupéré) » après leur nom jusqu’à ce que vous les enregistriez.

## Nouvelle fenêtre

Sous Windows, macOS et Linux, et sur iPad, **Fichier > Nouvelle fenêtre**
(**Ctrl+Maj+N**) ouvre une autre fenêtre avec ses propres dessins.
