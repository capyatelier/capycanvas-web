---
title: "Panneaux et colonnes"
description: "Afficher, organiser et configurer les panneaux autour de la toile."
related: ["customize/toolbars", "customize/workspaces", "start/workspaces", "customize/zen"]
---

Chaque espace de travail conserve sa propre disposition des panneaux.
**Fenêtre > Annuler le changement de disposition** (**Ctrl+Alt+Z**) annule le
dernier changement de disposition.

## Afficher et masquer des panneaux

Effectuez l’une des opérations suivantes :

- Choisissez le nom du panneau dans le menu **Fenêtre**. Les panneaux présents dans l’espace de travail sont cochés.
- Choisissez **Masquer Panneau *nom*** dans le menu du panneau.
- Tapez le nom du panneau dans la [recherche de commandes](/fr/docs/start/command-search/).

Un panneau que vous réaffichez s’ouvre dans une nouvelle colonne sur le côté de
la fenêtre, ou flotte si le côté n’a plus de place. Un panneau masqué conserve
ses réglages.

**Outils** dans le menu Fenêtre est un panneau ; la barre d’outils **Outils** se
trouve sous **Fenêtre > Barres d’outils d’accès rapide**.

![Le menu Fenêtre avec sa liste de panneaux.](shot:panels/window-menu)

## Menus des panneaux

Cliquez avec le bouton droit sur l’onglet d’un panneau, ou appuyez longuement
dessus avec un doigt ou un stylet, pour ouvrir le menu du panneau. Faites de même
sur la partie vide d’une barre d’onglets pour ouvrir le menu
**Groupe de panneaux**.

![Le menu du panneau Taille du pinceau.](shot:panels/panel-menu)

## Déplacer et ancrer des panneaux

Faites glisser l’onglet d’un panneau pour déplacer le panneau, ou la partie vide
de la barre d’onglets pour déplacer tout le groupe. Une ligne ou un cadre ombré
indique où le panneau va se placer. Déposez-le sur une barre d’onglets, à côté
d’un autre panneau ou près d’un bord de la fenêtre.

Les bords supérieur et inférieur n’acceptent que des barres d’outils. Appuyez sur
**Échap** pour annuler un glissement.

## Panneaux flottants

Pour faire flotter un panneau, éloignez-le de sa colonne et relâchez-le au-dessus
de la toile. Un panneau flottant se redimensionne par ses bords et ses coins. Pour
l’ancrer de nouveau, faites-le glisser sur une barre d’onglets ou près d’un bord
de la fenêtre.

![Le panneau Couleur flottant au-dessus de la toile.](shot:panels/floating)

## Groupes d’onglets

Vous pouvez choisir l’étiquetage des onglets dans le menu
**Groupe de panneaux** : **Automatique** (par défaut), **Icônes et nom de l’onglet actif**,
**Icônes et noms**, **Noms uniquement** ou **Icônes uniquement**.
**Automatique** ajoute les noms tant que la barre d’onglets a de la place.

**Ajouter un panneau intégré** et **Ajouter une barre d’outils**, dans le même
menu, déplacent un autre panneau dans le groupe.

Un panneau intégré seul dans son groupe peut masquer sa barre d’onglets.
Désactivez **Afficher la barre d’onglets** dans le menu du panneau : une poignée
en bas du panneau remplace alors la barre d’onglets.

![Le menu Groupe de panneaux avec les styles d’onglets.](shot:panels/group-menu)

## Configurer un panneau

Vous pouvez choisir les commandes qu’affiche un panneau.

Effectuez l’une des opérations suivantes :

- Choisissez **Configurer Panneau *nom*…** dans le menu du panneau.
- Sélectionnez de nouveau l’onglet actif.

Une colonne avec une case à cocher pour chaque commande s’ouvre à côté du
panneau. Appuyez sur **Échap**, sélectionnez de nouveau l’onglet ou
sélectionnez en dehors de la colonne pour la fermer.

| Panneau | Commandes | Affichées par défaut |
| --- | --- | --- |
| **Ensemble d’outils** | **Ensemble d’outils**, **Taille du pinceau**, **Opacité du pinceau**, **Couleur du pinceau** | **Ensemble d’outils** |
| **Taille du pinceau** | **Taille du pinceau**, **Préréglages de taille**, **Opacité du pinceau**, **Couleur du pinceau** | **Préréglages de taille** |
| **Calques** | **Actions du calque**, **Calques**, **Opacité du calque** | Toutes |

![Le panneau Taille du pinceau avec sa colonne de configuration.](shot:panels/configure)

## Redimensionner les colonnes

Faites glisser un séparateur pour redimensionner les colonnes ou les panneaux de
part et d’autre. Double-cliquer sur le séparateur entre une colonne et la toile
réinitialise la largeur de la colonne.

## Colonnes réduites

Vous pouvez réduire une colonne latérale à une bande d’icônes de panneaux.

Effectuez l’une des opérations suivantes :

- Choisissez **Réduire la colonne** dans le menu d’un panneau.
- Double-cliquez sur la partie vide d’une barre d’onglets de la colonne.
- Faites glisser le séparateur de la colonne vers le bord de la fenêtre jusqu’à ce que la colonne se réduise.

Sélectionnez une icône pour ouvrir la colonne à côté de la bande. La colonne se
ferme quand vous sélectionnez de nouveau l’icône ou appuyez sur **Échap**.

Pour rétablir la colonne entière, choisissez **Développer la colonne** dans le
menu d’un panneau ou double-cliquez sur le fond de la bande. Appuyer longuement
sur une icône, puis la faire glisser, sort ce panneau de la bande.

![La colonne de droite de Peinture ouverte à côté de sa bande d’icônes.](shot:panels/collapsed-column-open)

## Piles de colonnes

Faites glisser la poignée en bas d’une colonne réduite sur une autre colonne
réduite pour les empiler dans une seule bande. Une seule colonne d’une pile
s’ouvre à la fois.

## Menu Colonne

Cliquez avec le bouton droit sur le fond d’une colonne réduite, ou appuyez
longuement dessus, pour ouvrir le menu **Colonne**.

- **Ouvrir les panneaux individuellement** n’ouvre que le groupe d’onglets de l’icône sélectionnée, pas toute la colonne.
- **Masquage automatique** ferme la colonne ouverte quand vous sélectionnez n’importe où en dehors. Le toucher qui la ferme ne peint pas.
- **Appliquer à toutes les colonnes** copie les deux réglages sur toutes les colonnes latérales.

![Le menu Colonne d’une colonne réduite.](shot:panels/column-menu)

## Transparence des panneaux

Vous pouvez laisser apparaître une vue floutée du dessin à travers les panneaux
et les barres. Choisissez **Édition > Préférences**, sélectionnez **Apparence**,
puis choisissez **Désactivé**, **Faible** (par défaut), **Moyen** ou **Élevé**
sous **Transparence des panneaux**.

Les menus, les info-bulles et les commandes à l’intérieur des panneaux restent
opaques.
