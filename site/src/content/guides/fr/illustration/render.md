---
title: "Rendu"
description: "Étape 4 du tutoriel d’illustration : ombrage et texture sur des calques écrêtés sur chaque couleur de base, et une exportation PNG."
related: ["layers/settings", "drawing/brush-tools", "files/open-save", "files/export"]
---

Cette étape produit l’ombrage de chaque forme, sur des calques écrêtés sur sa
couleur de base, et une exportation PNG de l’étude.

## 1. Ajouter un calque écrêté

Sélectionnez *Ribbon*, puis choisissez **Calque > Nouveau > Nouveau calque écrêté**,
ou choisissez **Nouveau > Nouveau calque écrêté** dans le menu de la ligne
([Réglages du calque](/fr/docs/layers/settings/)). Renommez le nouveau calque
*Ribbon shading*.

![Le menu du calque avec Nouveau ouvert et Nouveau calque écrêté à l’intérieur.](shot:illustration/render-new-menu)

*Ribbon shading* apparaît juste au-dessus de *Ribbon*, et un rail à gauche des
miniatures signale l’écrêtage. L’écrêtage suit le masque de *Ribbon*, et non le
bleu canard qui remplit tout le calque.

## 2. Ombrer le ruban

Sélectionnez **Pinceau de peinture** dans la barre d’outils Outils et
**Lavis d’aquarelle** dans Ensemble d’outils ([Outils de pinceau](/fr/docs/drawing/brush-tools/)).
Réglez **Opacité** sur 65 % dans le panneau **Outil**, et peignez les ombres dans
les courbes du ruban en bleu foncé. Ajoutez ensuite des touches vert sauge avec le
pinceau **Pinceau**.

## 3. Ajouter un calque de texture

Avec *Ribbon shading* sélectionné, choisissez de nouveau
**Calque > Nouveau > Nouveau calque écrêté** et renommez le calque *Ribbon texture*.
Il se place au-dessus de *Ribbon shading*, dans le même écrêtage. Sélectionnez
**Crayon** et le pinceau **Crayon**, puis dessinez des hachures et des rehauts crème.

## 4. Ombrer le disque et le bloc

Sélectionnez *Disc*, ajoutez un calque écrêté nommé *Disc shading* et ombrez la
moitié inférieure du disque à l’**Aérographe**, en terre cuite. Ajoutez un rehaut
crème en haut à gauche.

*Block shading* se place de la même façon sur *Block* : du bleu foncé le long des
bords droit et inférieur avec le pinceau **Pinceau**, puis des hachures crème avec
le pinceau **Crayon**.

![Le panneau Calques avec Ribbon texture et Ribbon shading écrêtés sur Ribbon, et Disc shading et Block shading écrêtés sur leurs bases.](shot:illustration/render-layers)

La liste des calques correspond aux calques terminés présentés dans
l’[introduction](/fr/docs/illustration/).

## 5. Enregistrer et exporter

Choisissez **Fichier > Enregistrer**, ou appuyez sur **Ctrl+S**, et enregistrez le
dessin en fichier `.capy` ([Ouvrir et enregistrer](/fr/docs/files/open-save/)).
Pour exporter un PNG :

1. Choisissez **Fichier > Exporter…**, ou appuyez sur **Ctrl+Maj+E**.
2. Laissez **Destination** sur **Web / Partage**, et réglez **Format** sur **Image PNG**.
3. Sélectionnez **Choisir un fichier…**, puis choisissez un dossier et un nom.

Après la première exportation, **Fichier > Exporter à nouveau** écrit le même
fichier avec les mêmes réglages, sans la boîte de dialogue
([Exporter des images](/fr/docs/files/export/)).
