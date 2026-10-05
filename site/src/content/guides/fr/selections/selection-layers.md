---
title: "Calques de sélection"
description: "Conserver des sélections sous forme de calques de sélection dans le panneau Calques et les charger de nouveau."
related: ["selections/working", "selections/quick-mask", "layers/types", "layers/panel"]
---

Vous pouvez conserver une sélection sous forme de calque dans le panneau Calques et
la charger de nouveau plus tard.

## Enregistrer une sélection

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > Enregistrer comme calque de sélection**.
- Sélectionnez **Enregistrer** dans la barre de sélection ou dans la barre Masque rapide.
- En Masque rapide, choisissez **Calque > Enregistrer comme calque de sélection**.

Le nouveau calque se place en haut de la liste des calques, sous le nom *Sélection*
suivi d’un numéro. Il s’ouvre pour modification, avec son nom prêt à être saisi.
Un enregistrement depuis le Masque rapide conserve aussi la couleur et l’opacité de
la superposition du Masque rapide.

Pour enregistrer dans un groupe, ouvrez le menu du groupe et choisissez
**Enregistrer la sélection actuelle dans le groupe…**.

## Nouveau calque de sélection

Vous pouvez créer un calque de sélection vide et y peindre la sélection.

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > Nouveau calque de sélection**.
- Sélectionnez **Nouveau calque de sélection** en bas du panneau Calques.
- Ouvrez le menu d’un groupe et choisissez **Nouveau calque de sélection dans le groupe…**.

## Lignes des calques de sélection

La ligne d’un calque de sélection comporte une miniature de la sélection, un bouton
en forme d’œil qui affiche ou masque sa superposition, et un bouton de chargement à
côté de la miniature.

Sélectionner la ligne ouvre le calque pour modification. Les calques de sélection
n’ont ni opacité, ni mode de fusion, ni masque. Vous ne pouvez pas les fusionner, ni
peindre dessus en dehors de la modification.

![Une ligne de calque de sélection dans le panneau Calques, avec son bouton de chargement à côté de la miniature.](shot:selections/selection-layer-row)

## Modifier un calque de sélection

Pendant la modification d’un calque de sélection, les pinceaux, **Remplissage** et
**Dégradé** modifient la sélection enregistrée, comme en
[Masque rapide](/fr/docs/selections/quick-mask/). Le panneau Propriétés affiche
la **Couleur de superposition** et l’**Opacité de superposition** du calque, ainsi
que le **Mode** commun.

La [barre d’actions de la toile](/fr/docs/selections/working/), en bas de la toile,
porte l’intitulé « Modification de » suivi du nom du calque. Quand la barre
d’actions de la toile est masquée, cette barre n’apparaît pas.

- **Charger** fait du calque la sélection actuelle et revient au dessin.
- **Inverser** inverse la sélection enregistrée et laisse le calque ouvert pour modification.
- **Revenir au dessin** met fin à la modification. **Échap** a le même effet.

Après la modification, le calque modifié auparavant redevient actif ou, à défaut,
le calque de peinture le plus haut.

Pour affiner la sélection enregistrée, ouvrez le menu du calque de sélection et
choisissez une commande dans **Modifier**. **Sélection > Agrandir la sélection…** et
les autres commandes d’affinage du menu **Sélection** reviennent d’abord au dessin,
puis modifient la sélection actuelle.

![La barre d’actions de la toile pour un calque de sélection en cours de modification, avec Charger, Inverser et Revenir au dessin.](shot:selections/selection-layer-bar)

## Charger un calque de sélection

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > Charger la sélection**, choisissez le calque, puis **Charger la sélection**, **Ajouter à la sélection**, **Soustraire de la sélection**, **Intersection avec la sélection** ou **Charger la sélection inversée**.
- Sélectionnez le bouton de chargement sur la ligne du calque.
- Maintenez la touche **Ctrl** enfoncée et cliquez sur la miniature du calque. Ajoutez **Maj** pour ajouter, **Alt** pour soustraire ou **Maj+Alt** pour n’en garder que l’intersection.
- Pendant la modification du calque, sélectionnez **Charger** dans la barre d’actions de la toile.

Le chargement revient d’abord au dessin. Le calque de sélection reste inchangé.
Sous **Charger la sélection**, les calques placés dans des groupes figurent avec le
chemin de leur groupe, par exemple *Groupe 1 / Sélection 1*.

## Remplacer un calque de sélection

Pour enregistrer la sélection actuelle dans un calque de sélection existant,
choisissez **Sélection > Remplacer le calque de sélection par la sélection
actuelle**, puis choisissez le calque. Vous ne pouvez pas remplacer un calque de
sélection verrouillé.

## Menu du calque de sélection

Cliquez avec le bouton droit sur la ligne d’un calque de sélection, ou appuyez
longuement dessus, pour ouvrir son menu.

- **Charger la sélection** : les cinq mêmes éléments que dans le menu Sélection.
- **Modifier** : **Remplacer par la sélection actuelle**, **Inverser**, **Tout sélectionner**, **Effacer**, **Remplissage**, **Agrandir…**, **Réduire…**, **Contour progressif…**, **Bordure…** et **Lisser…**.
- **Organiser** : **Regrouper les calques sélectionnés**, **Déplacer à la racine**, **Monter**, **Descendre** et **Déplacer dans un groupe**.
- **Renommer…**, **Dupliquer**, **Supprimer** et **Verrouiller la modification**. Sur un calque verrouillé, **Verrouiller la modification** devient **Déverrouiller la modification**.

**Modifier** n’est pas disponible sur un calque de sélection verrouillé. Quand
plusieurs calques sont sélectionnés, le menu affiche **Dupliquer les calques
sélectionnés** et **Supprimer les calques sélectionnés**.
