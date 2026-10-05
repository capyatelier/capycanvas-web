---
title: "Réglages du calque"
description: "Les réglages du calque dans l’en-tête du panneau Calques, le menu Réglages du calque et le panneau Propriétés."
related: ["layers/panel", "layers/blend-modes", "layers/types", "filters/how-filters-apply"]
---

Vous pouvez modifier ces réglages dans l’en-tête du panneau Calques ou sous
**Réglages du calque** dans le menu du calque. Le menu **Calque** contient les
mêmes éléments.

![Le sous-menu Réglages du calque de Ribbon shading, avec Écrêter sur le calque inférieur coché et « Écrêté sur Ribbon » à droite.](shot:layers/settings-menu)

## Verrouillage alpha

Vous pouvez verrouiller la transparence d’un calque de peinture. Les pinceaux ne
modifient alors que les pixels déjà peints.

Effectuez l’une des opérations suivantes :

- Sélectionnez le calque, puis sélectionnez **Verrouillage alpha** dans l’en-tête du panneau Calques.
- Ouvrez le menu du calque et choisissez **Réglages du calque > Verrouillage alpha**.
- Balayez la ligne vers la droite avec un stylet ou un doigt.

Quand le verrouillage alpha est activé, une icône de verrouillage alpha apparaît à
droite de la ligne.

**Remplissage** et **Dégradé** conservent aussi la transparence, et la **Gomme**
reste sans effet.

## Verrouiller la modification

Vous pouvez verrouiller un calque pour qu’on ne puisse ni peindre dessus ni le
modifier.

Effectuez l’une des opérations suivantes :

- Sélectionnez le calque, puis sélectionnez **Verrouiller la modification** dans l’en-tête du panneau Calques.
- Ouvrez le menu du calque et choisissez **Réglages du calque > Verrouiller la modification**.
- Pour un calque de sélection, choisissez **Verrouiller la modification** dans son menu.

Quand un calque est verrouillé, une icône de cadenas apparaît sur sa ligne.

Sur un calque verrouillé, vous ne pouvez pas peindre, renommer, supprimer,
ajouter de masque ou de filtre, ni changer l’opacité ou le mode de fusion.
Verrouiller un groupe verrouille tous ses calques. Vous ne pouvez pas désactiver
**Verrouiller la modification** sur un calque situé dans un groupe verrouillé.

## Écrêter sur le calque inférieur

Vous pouvez écrêter un calque pour le limiter à la zone peinte du calque du
dessous.

Effectuez l’une des opérations suivantes :

- Sélectionnez le calque, puis sélectionnez **Écrêter sur le calque inférieur** dans l’en-tête du panneau Calques.
- Ouvrez le menu du calque et choisissez **Réglages du calque > Écrêter sur le calque inférieur**.
- Pour ajouter un nouveau calque écrêté, choisissez **Nouveau > Nouveau calque écrêté** dans le menu du calque.

Un rail à gauche des miniatures relie les calques écrêtés à leur calque de base.
Dans le menu du calque, l’élément nomme le calque de base, par exemple « Écrêté
sur Ribbon ». Déplacer le calque de base déplace aussi ses calques écrêtés.

Vous ne pouvez pas écrêter sur un groupe réglé sur Transfert. Désactivez d’abord
Transfert sur le groupe.

Le calque de base est le calque non écrêté le plus proche en dessous, dans le
même groupe, sans compter les calques de sélection. Si ce calque est un calque de
remplissage ou un filtre, l’élément indique **Aucun calque inférieur auquel
rattacher**. Sur un filtre, l’élément rattache plutôt le filtre (voir
[Application des filtres](/fr/docs/filters/how-filters-apply/)).

## Utiliser comme référence

Vous pouvez marquer des calques de peinture et des groupes comme références pour
les outils qui échantillonnent les **Calques de référence**, comme **Sélection
automatique**, **Remplissage** et les
[outils de retouche](/fr/docs/retouch/clone-heal/).

Effectuez l’une des opérations suivantes :

- Sélectionnez les calques, puis sélectionnez **Utiliser les calques sélectionnés comme références** dans l’en-tête du panneau Calques.
- Ouvrez le menu du calque et choisissez **Réglages du calque > Utiliser comme référence**, ou **Utiliser les calques sélectionnés comme références** quand plusieurs lignes sont sélectionnées.

Pour ne plus utiliser un calque comme référence, sélectionnez uniquement ce
calque, puis sélectionnez **Ne plus utiliser ce calque comme référence** dans
l’en-tête, ou désactivez **Utiliser comme référence** dans le menu du calque.

Une icône de phare apparaît sur le bouton de ligne d’un calque de référence.
Après avoir marqué des calques avec le bouton de l’en-tête, seul le calque actif
reste sélectionné.

## Utiliser le calque inférieur comme référence

Vous pouvez marquer comme référence le calque de peinture visible le plus proche
sous le calque actif.

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Réglages du calque > Utiliser le calque inférieur comme référence**.
- Quand un outil échantillonne les calques de référence et qu’aucun n’est marqué, sélectionnez **Utiliser *calque* comme référence** dans l’avis affiché sur la toile.

## Transfert

Vous pouvez régler un groupe sur Transfert. Ses calques fusionnent alors
directement avec les calques situés sous le groupe, et l’opacité et le masque du
groupe dosent la transition entre ce résultat et les calques du dessous.

Effectuez l’une des opérations suivantes :

- Ouvrez le menu du groupe et choisissez **Réglages du calque > Transfert**.
- Choisissez **Transfert** dans **Mode de fusion du calque**, dans l’en-tête du panneau Calques, ou dans **Mode de fusion**, dans le panneau **Propriétés**.
- Balayez la ligne du groupe vers la droite avec un stylet ou un doigt.

Un badge apparaît sur le dossier du groupe, et le sous-titre indique « Transfert ».

Désactiver Transfert règle le groupe sur Normal. Un groupe en Transfert ne peut
pas être écrêté, servir de calque de base d’écrêtage ni recevoir de filtres
rattachés. Vous ne pouvez pas modifier Transfert sur un groupe verrouillé.

Les nouveaux groupes utilisent Normal, sauf si **Utiliser Transfert pour les
nouveaux groupes** est activé dans la page **Toile** des
[Préférences](/fr/docs/preferences/). Grouper des calques qui utilisent un mode de
fusion autre que Normal, ou un filtre sur son propre calque, règle le nouveau
groupe sur Transfert.

## Mode de couleur

Vous pouvez enregistrer un calque de peinture en **Couleur**, **Niveaux de gris**
ou **Deux tons (noir et blanc)**. La peinture appliquée sur le calque suit ce
mode.

![Le panneau Propriétés d’un calque de peinture avec Opacité, Mode de fusion et Mode de couleur.](shot:layers/settings-color-mode)

Effectuez l’une des opérations suivantes :

- Sélectionnez le calque, puis choisissez un mode dans **Mode de couleur**, dans le panneau **Propriétés**.
- Tapez « Mode de couleur » dans la [recherche de commandes](/fr/docs/start/command-search/) et choisissez un mode.

**Mode de couleur** ne figure pas dans le menu du calque. Le sous-titre de la
ligne indique le mode quand il est différent de Couleur.

Changer de mode convertit les pixels existants, et revenir à Couleur ne rétablit
pas les couleurs d’origine. Deux tons rend chaque pixel noir ou blanc, et
entièrement opaque ou entièrement transparent. **Mode de couleur** est masqué
pendant que vous peignez sur le masque du calque.

## Autres éléments de Réglages du calque

**Réglages du calque** propose aussi **Appliquer la transformation aux pixels**
(voir [Déplacer et transformer](/fr/docs/transform/move-transform/)). Sur un calque
photo, il propose **Réparer le profil source…**, **Pixelliser la source…** et
**Revenir à la photo d’origine** (voir [Types de calques](/fr/docs/layers/types/)).
