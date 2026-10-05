---
title: "Travailler avec les calques"
description: "Ajouter, organiser et supprimer des calques dans le panneau Calques."
related: ["layers/panel", "layers/types", "layers/merging", "files/open-save"]
---

## Créer des calques

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Nouveau**, puis **Nouveau calque**, **Nouveau calque écrêté** ou **Nouveau groupe**.
- Sélectionnez **Nouveau calque** ou **Nouveau groupe** en bas du panneau Calques.

Le nouveau calque se place juste au-dessus du calque actif et des calques
écrêtés sur lui ou rattachés à lui. Si un groupe est actif, le nouveau calque se
place en haut du groupe. Vous ne pouvez pas ajouter de calque à un groupe
verrouillé.

**Nouveau calque écrêté** demande un calque de peinture actif, ou un groupe actif
qui n’est pas réglé sur Transfert.

## Sélectionner des calques

Vous pouvez sélectionner plusieurs lignes pour les regrouper, les dupliquer, les
supprimer ou les déplacer ensemble.

- Sélectionnez une ligne pour ne sélectionner que ce calque et en faire le calque actif.
- Faites **Maj**+clic sur une ligne pour sélectionner les lignes comprises entre celle-ci et la ligne sélectionnée précédemment.
- Faites **Ctrl**+clic sur une ligne pour l’ajouter à la sélection ou l’en retirer.
- Sélectionnez le bouton de ligne, à gauche de la miniature, pour ajouter ou retirer la ligne sans changer de calque actif.
- Choisissez **Calque > Sélection des lignes de calque > Sélectionner toutes les lignes de calque** ou **Effacer la sélection des lignes de calque**.

Sélectionner une ligne déjà sélectionnée garde les autres lignes sélectionnées.
Les changements de sélection de lignes ne créent pas d’étapes d’annulation.

## Masquer des calques

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Visibilité > Afficher le calque**.
- Sélectionnez l’œil sur la ligne.

**Calque > Visibilité** propose aussi **Afficher le calque et ses groupes
parents**, **Isoler les calques sélectionnés** et **Afficher tous les calques**.

## Renommer des calques

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Organiser > Renommer le calque…** (**Renommer le groupe…** pour un groupe).
- Double-cliquez sur le nom.

![Une ligne de calque avec son nom dans un champ de texte.](shot:layers/working-rename)

Appuyez sur **Entrée** pour garder le nom, ou sur **Échap** pour annuler. Vous ne
pouvez pas renommer un calque verrouillé.

## Réorganiser les calques

Faites glisser une ligne vers le haut ou le bas de la liste. Avec un stylet ou un
doigt, appuyez d’abord longuement sur la ligne, ou faites glisser la poignée à
l’extrémité droite de la ligne.

![Une ligne en cours de déplacement, avec un trait entre deux lignes à l’endroit où elle va se placer.](shot:layers/working-drag)

Un trait au-dessus ou au-dessous d’une ligne indique où le calque va se placer.
Pour placer le calque dans un groupe, déposez-le au milieu de la ligne du groupe
(un cadre apparaît autour de la ligne). Appuyez sur **Échap** pour annuler le
déplacement.

Toutes les lignes sélectionnées se déplacent ensemble, et les calques écrêtés et
filtres rattachés suivent leur calque. **Monter le calque** et **Descendre le
calque**, dans la [recherche de commandes](/fr/docs/start/command-search/),
déplacent les lignes sélectionnées d’un cran.

## Grouper et dissocier

Pour grouper des calques, sélectionnez leurs lignes et choisissez
**Calque > Organiser > Regrouper les calques sélectionnés**, ou sélectionnez
**Nouveau groupe** en bas du panneau Calques.
Les lignes doivent appartenir au même groupe, et un calque de base d’écrêtage
doit être groupé avec ses calques écrêtés.

Pour dissocier un groupe, choisissez **Calque > Organiser > Dissocier le groupe**.
Un groupe masqué laisse ses calques masqués. **Dissocier le groupe** est
indisponible quand le groupe a un masque, une opacité inférieure à 100 %, un mode
de fusion autre que Normal ou Transfert, un écrêtage ou des filtres rattachés, ou
quand ses calques auraient un autre rendu sans le groupe.

## Dupliquer des calques

Choisissez **Calque > Organiser > Dupliquer**, ou **Dupliquer les calques
sélectionnés** quand plusieurs lignes sont sélectionnées.

Les copies se placent juste au-dessus des originaux, avec leurs calques écrêtés et
leurs filtres rattachés, et s’appellent « Copie de *nom* ». Vous ne pouvez pas
dupliquer un calque d’un groupe verrouillé.

## Supprimer des calques

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Supprimer le calque**, ou **Supprimer les calques sélectionnés** quand plusieurs lignes sont sélectionnées.
- Sélectionnez **Supprimer les calques sélectionnés** en bas du panneau Calques.
- Avec un stylet ou un doigt, balayez la ligne vers la gauche et sélectionnez **Supprimer**.

Sur un groupe réduit, l’élément de menu devient **Supprimer le groupe et son
contenu**. Supprimer un groupe développé garde ses calques, comme
**Dissocier le groupe**.

Les calques écrêtés et les filtres rattachés restent quand vous supprimez leur
calque. Vous ne pouvez pas supprimer un calque verrouillé. La touche **Supprimer**
efface les pixels sélectionnés, pas les calques.

## Copier la sélection vers un nouveau calque

Vous pouvez copier ou déplacer les pixels sélectionnés d’un calque de peinture
vers un nouveau calque, à la même position.

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Nouveau > Copier la sélection vers un nouveau calque** (**Ctrl+J**) ou **Couper la sélection vers un nouveau calque** (**Ctrl+Maj+J**).
- Choisissez les mêmes commandes dans le menu **Sélection**.
- Choisissez-les dans **Copier vers un calque**, dans la [barre de sélection](/fr/docs/selections/working/) sur la toile.

Le nouveau calque se place au-dessus du calque source, sous le nom « Copie de
*nom* », avec la même opacité et le même mode de fusion. La sélection est
effacée, et **Sélection > Resélectionner** la rétablit.

Sans sélection, **Copier la sélection vers un nouveau calque** duplique les
calques sélectionnés. **Couper la sélection vers un nouveau calque** demande une
sélection et est indisponible quand **Verrouillage alpha** est activé.

## Importer des images

Effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Importer une image comme calque…** ou appuyez sur **Ctrl+Maj+O**.
- Sélectionnez **Importer une image comme calque…** en bas du panneau Calques.
- Faites glisser des fichiers image sur la toile ou sur une ligne du panneau Calques.

Chaque fichier devient un [calque photo](/fr/docs/layers/types/) au-dessus du
calque actif, ou au-dessus, au-dessous ou à l’intérieur de la ligne sur laquelle
vous le déposez. L’image est centrée et réduite pour tenir dans la toile, avec des
[poignées de placement](/fr/docs/transform/move-transform/).
