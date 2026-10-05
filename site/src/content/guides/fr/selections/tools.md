---
title: "Outils de sélection"
description: "Les outils de sélection et leurs réglages dans le panneau Outil."
related: ["selections/working", "selections/tonal-range", "selections/quick-mask", "customize/toolbars"]
---

Vous pouvez sélectionner une partie d’un dessin avec les outils de sélection. Les
réglages d’un outil se trouvent dans le panneau Outil et, dans Photo, aussi dans la
barre Options de l’outil, en haut de la fenêtre.

| Outil | Sélectionne | Touche |
| --- | --- | --- |
| **Sélection rectangulaire** | Un rectangle que vous tracez en faisant glisser | |
| **Sélection elliptique** | Une ellipse que vous tracez en faisant glisser | |
| **Sélection au lasso** | Une forme dessinée à main levée | **M** |
| **Lasso polygonal** | Une forme cliquée sommet par sommet | |
| **Sélection automatique** | Une zone contiguë de couleur proche | **W** |
| **Sélection par couleur** | Tous les pixels de couleur proche, contigus ou non | |
| **Peindre la sélection** | La zone que vous peignez | |
| **Plage tonale** | Les pixels compris dans une bande de luminosité (voir [Sélectionner par luminosité](/fr/docs/selections/tonal-range/)) | |

## Choisir un outil de sélection

Effectuez l’une des opérations suivantes :

- Tapez le nom de l’outil dans la [recherche de commandes](/fr/docs/start/command-search/).
- Appuyez sur **M** pour **Sélection au lasso** ou sur **W** pour **Sélection automatique**.
- Dans Peinture, sélectionnez **Sélection** ou **Sélection automatique / Sélection par couleur** dans la barre d’outils Outils.
- Dans Photo, sélectionnez **Sélection rectangulaire / Sélection elliptique**, **Sélection au lasso / Lasso polygonal**, **Sélection automatique / Sélection par couleur** ou **Peindre la sélection** dans la barre d’outils Outils.
- Dans Croquis, sélectionnez **Sélection** dans la barre de titre. Sélectionnez-le une seconde fois pour ouvrir, à côté du panneau Outil, un tiroir qui contient tous les outils de sélection.

Un bouton de barre d’outils qui regroupe plusieurs outils affiche le dernier
utilisé. Pour en choisir un autre, cliquez avec le bouton droit sur le bouton ou
appuyez longuement dessus, ou sélectionnez l’outil dans le panneau
**Ensemble d’outils**. **Sélection**, dans la barre de titre de Croquis, revient au
dernier outil de sélection utilisé.

**Plage tonale** n’a pas de bouton dans les barres d’outils de Peinture et de Photo.

Choisir un outil de sélection en Masque rapide, ou pendant la modification d’un
calque de sélection, laisse ce mode actif.

![Le tiroir Sélection dans Croquis, avec les outils de sélection à côté du panneau Outil réglé sur Sélection rectangulaire.](shot:selections/tools-sketch-select-drawer)

## Mode

Vous pouvez combiner la prochaine zone sélectionnée avec la sélection actuelle.

Sélectionnez **Nouvelle sélection**, **Ajouter à la sélection**, **Soustraire de la
sélection** ou **Intersection avec la sélection** dans la ligne **Mode** du panneau
Outil. **Nouvelle sélection** est le mode par défaut.

Pour changer de mode le temps d’une sélection, maintenez une touche enfoncée au
moment de la commencer :

- **Maj** : **Ajouter à la sélection**
- **Alt** : **Soustraire de la sélection**
- **Maj+Alt** : **Intersection avec la sélection**
- **Ctrl** : **Nouvelle sélection**

Tant que vous maintenez la touche, la ligne **Mode** indique le mode choisi.
**Peindre la sélection** ne propose qu’**Ajouter à la sélection** et
**Soustraire de la sélection**.

## Anticrénelage et Rayon du contour progressif

**Anticrénelage** est activé par défaut. **Rayon du contour progressif** adoucit le
bord de chaque nouvelle sélection, jusqu’à 100 px, et vaut 0 au départ.

**Peindre la sélection** n’a aucun de ces deux réglages. **Plage tonale** a
**Contour progressif**, mais pas d’**Anticrénelage**.

## Sélection rectangulaire et Sélection elliptique

Faites glisser d’un coin au coin opposé. Une fois le glissement commencé,
maintenez **Maj** pour obtenir un carré ou un cercle, ou **Alt** pour tracer
depuis le centre.

- **Rapport largeur/hauteur fixe** conserve le rapport défini dans **Largeur du rapport** et **Hauteur du rapport**, 1 : 1 par défaut.
- **Taille fixe** trace une sélection de la **Largeur** et de la **Hauteur** indiquées, en pixels. La valeur par défaut est 256 × 256.
- **Dessiner depuis le centre** place le centre de la sélection là où commence le glissement.

Activer **Rapport largeur/hauteur fixe** désactive **Taille fixe**, et
inversement. Un clic sans glissement laisse la sélection inchangée.

## Sélection au lasso

Tracez le contour de la zone. Quand vous levez le stylet ou relâchez le bouton de
la souris, la forme fermée devient la sélection.

## Lasso polygonal

Cliquez sur chaque sommet de la forme. Pour terminer, effectuez l’une des
opérations suivantes :

- Cliquez de nouveau sur le premier sommet.
- Appuyez sur **Entrée**.
- Sélectionnez **Terminer** dans la barre d’actions de la toile, ou **Terminer la sélection** dans le panneau Outil.

Un polygone a besoin d’au moins trois sommets.

- Pour retirer le dernier sommet, appuyez sur **Retour arrière** ou **Supprimer**, ou sélectionnez **Supprimer le point** dans la barre d’actions de la toile ou **Retirer le dernier point** dans le panneau Outil.
- Pour abandonner le polygone, appuyez sur **Échap**, ou sélectionnez **Annuler** dans la barre d’actions de la toile ou **Annuler la sélection** dans le panneau Outil.
- Pour aligner le côté suivant par pas de 45°, maintenez **Maj**. Pour aligner tous les côtés, activez **Contraindre les bords à 45°** dans le panneau Outil.

Pendant que vous placez les sommets, la [barre d’actions de la toile](/fr/docs/selections/working/),
en bas de la toile, affiche **Supprimer le point**, **Annuler** et **Terminer**.

![La barre d’actions de la toile pour un polygone, avec Supprimer le point, Annuler et Terminer.](shot:selections/tools-polygon-bar)

## Sélection automatique et Sélection par couleur

Cliquez sur une couleur de la toile. **Sélection automatique** prend la zone
contiguë autour de ce point, et **Sélection par couleur** prend les pixels
correspondants dans toute l’image.

![Le panneau Outil pour Sélection automatique, avec Mode, Anticrénelage, Source, Tolérance, les réglages Bords et Rayon du contour progressif.](shot:selections/tools-auto-select-settings)

### Source

Définit où les outils cherchent les couleurs : **Dessin visible** (par défaut),
**Calque en cours de modification** ou **Calques de référence**, c’est-à-dire les
calques marqués avec [Utiliser comme référence](/fr/docs/layers/settings/).

### Tolérance

Définit l’écart maximal entre une couleur et celle sur laquelle vous cliquez pour
qu’elle soit encore sélectionnée. La valeur par défaut est 10 %.

### Fermer les espaces

Ferme les interstices jusqu’à cette largeur dans les bords qui entourent la zone,
de 0 à 32 px. **Sélection automatique** uniquement.

### Expansion

Agrandit la sélection jusqu’à 32 px, ou la réduit avec une valeur négative.

### Lissage des bords

Adoucit les bords en escalier de la sélection. À 0 %, les bords suivent les pixels
entiers. Masqué quand **Anticrénelage** est désactivé.

**Sélection automatique** et **Sélection par couleur** partagent un même réglage
**Source**, et partagent **Tolérance** et les réglages **Bords** avec les
[outils de remplissage](/fr/docs/drawing/fill/).

## Peindre la sélection

Peignez sur la zone avec un pinceau rond. Une boucle fermée que vous peignez se
remplit.

- **Ajouter à la sélection** ou **Soustraire de la sélection** définit l’action du pinceau.
- **La pression contrôle la taille** est désactivé par défaut.
- **Taille**, **Dureté** et **Opacité** règlent le pinceau rond.

Maintenez **Maj** en peignant pour ajouter, ou **Alt** pour faire l’inverse du
réglage actuel. Le bout gomme d’un stylet soustrait. Un trait qui soustrait n’a
aucun effet tant qu’il n’y a pas de sélection.

## Le bouton Sélection

**Sélection**, sous les réglages d’un outil de sélection dans le panneau Outil,
ouvre le [menu Sélection](/fr/docs/selections/working/). Les réglages de
**Plage tonale** n’ont pas de bouton **Sélection**.
