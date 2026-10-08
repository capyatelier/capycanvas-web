---
title: "Raccourcis clavier"
description: "La page Raccourcis clavier des Préférences et les touches par défaut."
related: ["input/pen", "input/touch", "start/command-search", "preferences"]
---

Vous pouvez modifier les touches des commandes, des outils et des pinceaux sur la
page **Raccourcis clavier** des Préférences.

Sur macOS et iPad, Commande remplace Ctrl, et Option correspond à la touche Alt.
L’application web affiche Ctrl sur tous les ordinateurs, et sur Mac, Commande
fonctionne comme Ctrl.

![La page Raccourcis clavier avec le groupe Raccourcis et les catégories.](shot:keyboard/page)

## Ouvrir la page Raccourcis clavier

Effectuez l’une des opérations suivantes :

- Choisissez **Aide > Raccourcis clavier**.
- Appuyez sur **Ctrl+Maj+?**.
- Choisissez **Édition > Préférences** et sélectionnez **Raccourcis clavier**.

## Préréglages de raccourcis

Vous pouvez utiliser des touches inspirées d’une autre application. Choisissez un
**Préréglage** sous **Raccourcis** : **{appName}** (par défaut),
**Style Photoshop**, **Style Krita**, **Style Clip Studio Paint**,
**Style Procreate**, **Style GIMP** ou **Style Affinity**.

Un préréglage ne modifie que certaines touches et conserve celles que vous avez
modifiées vous-même. **Différences…**, dans le menu **Options des raccourcis**
(**⋯**), liste ce que le préréglage ne peut pas reproduire de son application
d’origine.

![Le menu Options des raccourcis.](shot:keyboard/keymap-menu)

## Trouver un raccourci

Tapez le nom d’une commande ou une touche dans
**Rechercher ou appuyer sur un raccourci**, ou appuyez sur la touche elle-même dans le champ. Une seule lettre
trouve des touches, pas des noms.

Pour voir ce que font les touches avec un type d’outil, choisissez-le dans la
liste **Tous les outils**, par exemple **Outils sélection**. La liste
**Toutes les actions**, à côté, limite les lignes à **Avec raccourcis** ou **Personnalisés**.

## Modifier un raccourci

Pour ajouter une touche à une commande :

1. Sélectionnez la commande dans une catégorie ou dans les résultats de recherche.
2. Sélectionnez **Ajouter un raccourci**.
3. Appuyez sur la touche ou la combinaison.
4. Sélectionnez **Ajouter**.

Si une autre commande utilise la touche, l’éditeur nomme cette commande et le
bouton devient **Réattribuer**. **Réattribuer** déplace la touche vers la commande
que vous modifiez.

Une commande peut avoir jusqu’à quatre touches. Le bouton de suppression à côté
d’une touche retire cette touche, et **Rétablir les valeurs par défaut** rétablit
les touches par défaut.

Deux commandes ne peuvent partager une touche que si l’une d’elles fonctionne dans
un contexte plus restreint, par exemple avec certains outils. Cette commande
prend la touche quand elle peut s’exécuter.

![L’éditeur de raccourci qui propose de réattribuer une touche utilisée par une autre commande.](shot:keyboard/editor-reassign)

## Touches modificatrices

Vous pouvez faire en sorte qu’une touche n’agisse que tant que vous la maintenez.
Par défaut, **Espace** déplace la vue. **Alt** prélève une couleur avec les outils
de dessin, de mélange, de remplissage et de dégradé, et définit la source avec
les outils de retouche.

Pour ajouter une touche modificatrice :

1. Ouvrez **Touches modificatrices** et sélectionnez **Ajouter une touche modificatrice**.
2. Appuyez sur la touche et sélectionnez **Ajouter**. La page de la touche s’ouvre.
3. Sélectionnez **Action** et choisissez une action, ou désactivez **Identique pour tous les outils** et choisissez-en une pour chaque type d’outil.

Pour modifier une touche modificatrice ensuite, sélectionnez-la dans
**Touches modificatrices**. Sa page contient aussi **Retirer la touche modificatrice**.

Toute touche sauf **Échap** peut être une touche modificatrice, y compris une
combinaison comme **Maj+Espace**. Une touche ne peut pas être à la fois une
touche modificatrice et un raccourci.

![La catégorie Touches modificatrices avec Espace et Alt.](shot:keyboard/modifier-keys)

## Appuyer brièvement sur une touche d’outil ou la maintenir

Appuyez brièvement sur une touche d’outil pour changer d’outil. Maintenez la
touche pendant que vous dessinez : l’outil précédent revient quand vous la
relâchez. Les touches de pinceau et les touches de mode comme **Mode Zen**
fonctionnent de la même façon.

**Annuler**, **Rétablir** et les touches de taille du pinceau se répètent tant
qu’elles sont maintenues.

## Importer et exporter des jeux de raccourcis

Choisissez **Exporter…** dans le menu **Options des raccourcis** pour enregistrer
vos touches, touches modificatrices, touchers à plusieurs doigts et boutons du
stylet dans un fichier `.capykeys`. **Importer…** charge un tel fichier après avoir montré ce
qu’il ajoute, modifie et retire. Rien ne change tant que vous n’avez pas
sélectionné **Importer**.

## Réinitialiser tous les raccourcis

**Réinitialiser tous les raccourcis**, dans le menu **Options des raccourcis**,
efface vos modifications des touches, des touches modificatrices, des touchers
à plusieurs doigts et des boutons du stylet. Le préréglage est conservé.

> **Remarque :** **Réinitialiser tous les raccourcis** ne demande pas de confirmation et ne peut pas être annulé.

## Touches dans l’application web

Le navigateur se réserve certaines touches, comme **F11** et **Ctrl+W**, qui ne
peuvent pas être attribuées dans l’application web. **Transformer**,
**Nouveau…**, **Fermer** et **Plein écran** n’y ont pas de touche, et
**Rechercher des commandes…** n’y utilise que **Ctrl+K**.

## Autres boutons

Vous pouvez attribuer ces boutons comme des touches :

- les boutons de manette de jeu, sous Windows, macOS, iPad, Android et sur le web
- les boutons de tablette, sous Linux et Android
- les touches multimédia et de volume, sous Windows, Linux, Android et sur le web

Le stick gauche d’une manette de jeu déplace la toile, et son stick droit zoome.

## Touches par défaut

**P**, **B**, **J** et **S** sélectionnent chacune une famille d’outils.
Appuyez de nouveau sur la touche pour passer à l’outil suivant de la famille.

| Outil | Touche |
| --- | --- |
| **Plume / Crayon** | **P** |
| **Outils de peinture** (**Pinceau de peinture**, **Aérographe**, **Décoration**) | **B** |
| **Mélange / Fluidité** | **J** |
| **Outils de retouche** (**Tampon de duplication**, **Pinceau correcteur**, **Correcteur localisé**) | **S** |
| **Gomme** | **E** |
| **Sélection au lasso** | **M** |
| **Sélection automatique** | **W** |
| **Remplissage** | **F** |
| **Dégradé** | **G** |
| **Figure** | **U** |
| **Règle** | **Maj+U** |
| **Opération** | **O** |
| **Transformer** | **Ctrl+T** |
| **Recadrer** | **C** |
| **Main** | **H** |
| **Pipette** | **I** |
| **Déplacer la vue** pendant le maintien | **Espace** |
| **Prélever la couleur** ou **Définir la source** pendant le maintien | **Alt** |
| **Réduire la taille du pinceau**, **Augmenter la taille du pinceau** | **[**, **]** |
| **Masque rapide** | **Q** |

| Commande | Touche |
| --- | --- |
| **Annuler** | **Ctrl+Z** |
| **Rétablir** | **Ctrl+Maj+Z**, **Ctrl+Y** |
| **Annuler le changement de disposition** | **Ctrl+Alt+Z** |
| **Rétablir le changement de disposition** | **Ctrl+Alt+Maj+Z** |
| **Couper**, **Copier**, **Coller** | **Ctrl+X**, **Ctrl+C**, **Ctrl+V** |
| **Copier avec fusion** | **Ctrl+Maj+C** |
| **Coller sur place** | **Ctrl+Maj+V** |
| **Sélectionner tous les pixels** | **Ctrl+A** |
| **Désélectionner les pixels** | **Ctrl+D** |
| **Resélectionner** | **Ctrl+Maj+D** |
| **Inverser la sélection** | **Ctrl+Maj+I** |
| **Réinitialiser en noir / blanc** | **D** |
| **Remplir la sélection** | **Maj+Retour arrière** |
| **Effacer les pixels sélectionnés** | **Supprimer**, **Retour arrière** |
| **Copier la sélection vers un nouveau calque** | **Ctrl+J** |
| **Couper la sélection vers un nouveau calque** | **Ctrl+Maj+J** |
| **Fusionner avec le calque inférieur** | **Ctrl+E** |
| **Ajuster à la toile** | **Ctrl+0** |
| **Pixels réels** | **Ctrl+1**, **Ctrl+Alt+0** |
| **Zoom avant**, **Zoom arrière** | **Ctrl+=**, **Ctrl+-** |
| **Couleurs d’épreuvage** | **Ctrl+Alt+P** |
| **Avertissement de gamut** | **Ctrl+Maj+Y** |
| **Mode Zen** | **Tabulation** |
| **Plein écran** | **F11** |
| **Nouveau…** | **Ctrl+N** |
| **Nouvelle fenêtre** | **Ctrl+Maj+N** |
| **Ouvrir…** | **Ctrl+O** |
| **Importer une image comme calque…** | **Ctrl+Maj+O** |
| **Enregistrer** | **Ctrl+S** |
| **Enregistrer sous…** | **Ctrl+Maj+S** |
| **Exporter…** | **Ctrl+Maj+E** |
| **Fermer** | **Ctrl+W** |
| **Rechercher des commandes…** | **Ctrl+K**, **Ctrl+Maj+P** |
| **Préférences** | **Ctrl+,** |
| **Raccourcis clavier** | **Ctrl+Maj+?** |

**Nouveau calque**, **Échanger les couleurs** et les autres outils de sélection
n’ont pas de touche par défaut.
