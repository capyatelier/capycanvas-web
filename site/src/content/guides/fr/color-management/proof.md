---
title: "Épreuvage"
description: "L’épreuvage à l’écran d’une impression dans le panneau Épreuvage, l’avertissement de gamut et la puce d’écran du pied de page."
related: ["color-management/hdr", "color-management/color-spaces", "files/export", "start/canvas"]
---

Vous pouvez voir comment un dessin sera imprimé dans le panneau **Épreuvage**,
sans modifier le dessin.

## Panneau Épreuvage

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Épreuvage**.
- Choisissez **Panneau Épreuvage** dans la recherche de commandes.
- Dans Peinture et Photo, sélectionnez l’onglet **Épreuvage** à côté de **Navigateur**.

Sélectionnez un mode en haut du panneau :

- **Désactivé** affiche le dessin normalement.
- **SDR** affiche la version SDR d’un [dessin HDR](/fr/docs/color-management/hdr/). Seuls les dessins HDR ont ce mode.
- **Impression** simule une impression avec un profil ICC.

L’épreuvage s’affiche sur la toile et dans le Navigateur, jamais dans les
exportations ni dans l’Histogramme. Choisir un mode ne marque pas le dessin comme
modifié. Un dessin rouvert démarre avec l’épreuvage désactivé, mais conserve son
profil d’impression.

## Activer et désactiver l’épreuvage

Effectuez l’une des opérations suivantes :

- Choisissez **Affichage > Épreuvage**.
- Appuyez sur **Ctrl+Alt+P**. Les raccourcis Style Photoshop et Style Krita utilisent aussi **Ctrl+Y**.

L’épreuvage s’active dans le dernier mode utilisé (au départ, SDR pour les dessins
HDR et Impression pour les dessins SDR). Le panneau Épreuvage s’ouvre, et
**Affichage > Épreuvage** est coché.

Sur la page [Raccourcis clavier](/fr/docs/input/keyboard/), la commande s’appelle
**Couleurs d’épreuvage**. Vous pouvez lui attribuer une touche qui n’active
l’épreuvage que tant que vous la maintenez.

## Épreuvage d’impression

Vous pouvez simuler une impression avec un profil ICC RVB, CMJN ou en niveaux de
gris. Sélectionnez **Impression** et choisissez un **Profil**. La toile n’est pas
épreuvée tant que vous n’avez pas choisi de profil.

Quand l’épreuvage d’impression est actif, le pied de page indique « Épreuvage :
*profil* ». Si l’épreuvage échoue, il indique « Épreuvage indisponible », avec la
raison dans son info-bulle.

Le profil et les options sont enregistrés dans le dessin. Choisir un profil
marque le dessin comme modifié et est une étape d’annulation. Annuler
retire le profil et désactive l’épreuvage. Seul le profil d’impression actif est
enregistré dans le fichier `.capy`. Quand vous remplacez le profil enregistré dans
le dessin, l’ancien est d’abord ajouté aux **Profils enregistrés**. Les dessins
HDR sont épreuvés à partir de leur version SDR.

![Le panneau Épreuvage sur sa page Impression, avec Adobe RGB (1998) choisi comme profil.](shot:color-management/proof-panel-print)

### Profil

La liste contient le **Profil du document** enregistré dans le dessin, les
**Profils enregistrés** de la bibliothèque et les
**Espaces colorimétriques standard**. **Ajouter un profil…** ajoute un fichier
`.icc` ou `.icm` à la bibliothèque et le sélectionne, et **Gérer les profils…** ouvre la Bibliothèque
de profils colorimétriques.

### Simuler

**Couleurs**, **Encre noire** (par défaut) ou **Papier et encre**.
**Papier et encre** simule aussi l’encre noire.

### Intention

**Relative** (par défaut), **Perceptuelle**, **Saturation** ou **Absolue**.

### Compensation du point noir

Activée par défaut. Indisponible avec **Absolue**.

### Avertissement de gamut

Le même interrupteur que la commande **Avertissement de gamut**, décrite plus bas.

## Bibliothèque de profils colorimétriques

Sélectionnez **Gérer les profils…** dans la liste **Profil**, ou sur la page
**Couleur** des [Préférences](/fr/docs/preferences/), pour ouvrir la
**Bibliothèque de profils colorimétriques**.

- **Importer un profil ICC…** ajoute un fichier `.icc` ou `.icm` de 16 Mio au maximum.
- **Afficher dans les menus de profils** et **Masquer dans les menus de profils** déterminent les profils proposés par la liste **Profil**.
- **Retirer** supprime un profil de la bibliothèque.

La bibliothèque contient jusqu’à 128 profils et 64 Mio au total.

## Avertissement de gamut

Vous pouvez afficher en gris moyen sur la toile les couleurs que le profil
d’impression ne peut pas reproduire. Effectuez l’une des opérations suivantes :

- Activez **Avertissement de gamut** sur la page Impression du panneau Épreuvage.
- Appuyez sur **Ctrl+Maj+Y**.
- Choisissez **Avertissement de gamut** dans la recherche de commandes.

Le pied de page indique « Épreuvage : *profil* · Avertissement de gamut ». Quand
la simulation d’impression est désactivée, il indique « Gamut : *profil* ».

L’avertissement de gamut n’est disponible qu’après le choix d’un profil
d’impression. Choisir **Désactivé** ou **SDR**, ou désactiver
**Affichage > Épreuvage**, le désactive. Tant qu’il est actif, les dessins HDR
affichent leur version SDR.

## Puce d’écran

Une puce à gauche du pied de page avertit quand l’écran ne peut pas afficher
fidèlement le dessin ou l’épreuve. Sélectionnez la puce pour ouvrir ses détails,
puis sélectionnez-la de nouveau ou appuyez sur **Échap** pour fermer les
détails.

| Puce | Affichée quand |
| --- | --- |
| « Couleurs écrêtées » | L’écran ne peut pas afficher certaines couleurs visibles du dessin ou de l’épreuve. |
| « Peut différer du tirage » | L’épreuvage d’impression ou l’avertissement de gamut est actif, et Capy Canvas ne peut pas déterminer comment l’écran affiche les couleurs. |

Pour un dessin HDR, la puce indique aussi si l’écran affiche le HDR (voir
[HDR](/fr/docs/color-management/hdr/)).

![La puce Couleurs écrêtées dans le pied de page, avec ses détails et Mettre ces couleurs en évidence.](shot:color-management/screen-chip)

Activez **Mettre ces couleurs en évidence** dans les détails pour peindre en bleu
sur la toile les couleurs écrêtées. La mise en évidence n’est jamais enregistrée.

Croquis masque le pied de page par défaut. Pour l’afficher, choisissez
**Fenêtre > Personnaliser la barre de titre…** et activez
**Afficher le pied de page**.
