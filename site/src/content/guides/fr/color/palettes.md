---
title: "Palettes"
description: "Enregistrer des couleurs dans des palettes et peindre avec les couleurs enregistrées et récentes du panneau Palettes."
related: ["color/color-panel", "color/edit-color", "color/eyedropper"]
---

Vous pouvez enregistrer des couleurs dans des palettes et peindre avec elles
depuis le panneau **Palettes**. Les palettes et les couleurs récentes sont les
mêmes dans tous les espaces de travail.

![Le panneau Palettes avec les couleurs récentes en haut, les pastilles de la palette active, et le nom de la palette et de la couleur en bas.](shot:color/palettes-panel)

## Ouvrir le panneau Palettes

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Palettes**.
- Choisissez **Panneau Palettes** dans la recherche de commandes.
- Dans Peinture, sélectionnez l’onglet **Palettes** à côté de **Couleur**.
- Sélectionnez **Couleur du pinceau** au bout de la barre d’outils Outils, ou à l’extrémité droite de la barre de titre dans Croquis. Le panneau Palettes se trouve sous le panneau Couleur, dans le tiroir.
- Sous Windows, Linux et Android, cliquez avec le bouton droit sur la pastille de premier plan ou d’arrière-plan du panneau Couleur, ou appuyez longuement dessus, et choisissez **Palettes…**.

## Couleurs récentes

La rangée du haut affiche jusqu’à 64 couleurs utilisées dans le dessin, de la
plus récente à la plus ancienne. Sélectionnez une couleur récente pour peindre
avec. Sélectionnez **Développer l’historique des couleurs** (la flèche au bout de
la rangée) pour afficher jusqu’à quatre rangées.

Une couleur est ajoutée quand un trait, un remplissage, un dégradé ou une figure
l’utilise. Prélever une couleur, effacer, peindre un masque et utiliser Mélange
ou Fluidité n’ajoutent rien. Annuler ne retire pas une couleur récente.

## Peindre avec une couleur enregistrée

Sélectionnez une pastille pour peindre avec sa couleur, ou pour définir la couleur
du masque pendant que vous modifiez un masque. La pastille qui correspond à la
couleur active est entourée.

## Ajouter une couleur

Sélectionnez **+** après la dernière pastille pour enregistrer la couleur de
peinture active dans la palette. La pastille conserve la couleur exacte, y compris
son espace colorimétrique, son alpha et son intensité HDR. **+** n’est pas
disponible quand **Peinture transparente** est sélectionnée.

## Nommer les couleurs

Le nom de la couleur active se trouve en bas à droite du panneau, avec son code
hexadécimal en aperçu sRGB. Une couleur dotée d’une intensité HDR affiche aussi
l’intensité, par exemple « +1.0 EV ». Une couleur non enregistrée affiche un nom
suggéré, comme « Bleu sarcelle » ou « Terre d’ombre ».

Sélectionnez le nom pour en saisir un autre, puis appuyez sur **Entrée** pour
valider ou sur **Échap** pour annuler. Une couleur non enregistrée reçoit ce nom
quand vous l’enregistrez avec **+**. Pour une pastille enregistrée, le nouveau nom
remplace l’ancien.

Les noms comptent de 1 à 64 caractères et sont uniques dans une palette.

## Organiser et retirer des couleurs

Faites glisser une pastille pour la déplacer. Relâchez hors de la grille ou appuyez
sur **Échap** pour annuler le déplacement.

Cliquez avec le bouton droit sur une pastille, ou appuyez longuement dessus (ou
appuyez sur **Maj+F10**), pour accéder à ces commandes :

- **Rename Color…**
- **Remove Color**
- **Undo Color Reorder** et **Redo Color Reorder**

Quand le panneau a le focus, **Ctrl+Z** et **Ctrl+Maj+Z** (ou **Ctrl+Y**)
annulent et rétablissent les réorganisations. Ajouter ou retirer une pastille
efface l’historique de réorganisation de la palette.

## Choisir une palette

Sélectionnez le nom de la palette en bas à gauche du panneau pour ouvrir la liste
des palettes. Tapez dans **Trouver une palette** pour filtrer la liste, puis
sélectionnez une palette pour la rendre active.

![La liste des palettes avec le champ de recherche, le bouton + et le nom et les couleurs de chaque palette.](shot:color/palettes-chooser)

## Nouvelles palettes

Sélectionnez **+** dans la liste des palettes et choisissez **New Palette…**. Une
palette laissée sans nom s’appelle « Nouvelle palette ».

La bibliothèque contient jusqu’à 64 palettes et 4096 couleurs au total.

## Renommer et retirer des palettes

Cliquez avec le bouton droit sur une palette de la liste des palettes, ou appuyez
longuement dessus, et choisissez **Rename Palette…** ou **Remove Palette…**. Vous
ne pouvez pas retirer la dernière palette.

## Importer et exporter des palettes

Pour importer un fichier de palette, sélectionnez **+** dans la liste des
palettes et choisissez **Import Palette…**. Capy Canvas lit les fichiers
`.capycolor`, `.aco`, `.cls`, `.swatches`, `.ase`, `.afpalette`, `.gpl`, `.kpl`
et `.json` jusqu’à 1 Mo. Le fichier devient une nouvelle palette, avec le nom
enregistré dans le fichier ou le nom du fichier.

Pour exporter une palette, cliquez avec le bouton droit sur la palette dans la
liste des palettes, ou appuyez longuement dessus, et choisissez
**Export Palette**, puis un format :

- **Capycolor (.capycolor)** conserve les couleurs exactes, y compris l’espace colorimétrique, l’alpha et l’intensité HDR.
- **Clip Studio Paint, Photoshop (.aco)**, **Procreate (.swatches)**, **Affinity, Adobe (.ase)** et **Krita, GIMP (.gpl)** enregistrent des couleurs sRGB opaques. Les couleurs hors sRGB sont écrêtées. Un fichier Procreate conserve les 30 premières couleurs.

Le panneau indique combien de couleurs ont été écrêtées ou rendues opaques.

![Le menu de la palette avec les formats d’Export Palette.](shot:color/palettes-menu)

## Palettes de départ

Capy Canvas est fourni avec Étude marine, Arcade pixel, Fantaisie sombre, Pop
art, Pastels sucrés, Impression riso, Synthwave, Impression années 70, Gravure
sur bois et Encre. Vous pouvez modifier les palettes de départ comme n’importe
quelle autre palette. Une palette de départ retirée ne revient pas.
