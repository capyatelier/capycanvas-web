---
title: "Nouveaux dessins"
description: "La boîte de dialogue Nouveau dessin et les calques avec lesquels commence un nouveau dessin."
related: ["color-management/color-spaces", "layers/types", "files/open-save"]
---

Vous pouvez commencer un dessin dans la boîte de dialogue **Nouveau dessin**. Le
nouveau dessin s’ouvre dans son propre onglet, et le dessin en cours reste
ouvert.

## Ouvrir la boîte de dialogue Nouveau dessin

Effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Nouveau…**.
- Appuyez sur **Ctrl+N** (sauf dans l’éditeur web).
- Dans Peinture et Photo, sélectionnez **Nouveau…** dans la barre d’outils Commandes.

Choisissez les réglages ci-dessous, puis sélectionnez **Créer**.

**Nouveau…** n’est pas disponible pendant un recadrage ou une transformation. Si
trop de données de dessin sont déjà ouvertes, le nouveau dessin ne s’ouvre pas
tant que vous n’avez pas fermé certains dessins.

## Réglages

![La boîte de dialogue Nouveau dessin avec le préréglage Dessin standard.](shot:files/new-dialog)

### Préréglage

Remplit tous les champs à partir d’un préréglage intégré ou d’un préréglage que
vous avez enregistré. Modifier ensuite un champ fait passer **Préréglage** sur
**Personnalisé**.

Tous les préréglages intégrés font 2048 × 1536 pixels sur fond blanc.

| Préréglage | Espace colorimétrique | Profondeur de couleur | Fusion |
| --- | --- | --- | --- |
| **Dessin standard** | sRGB | SDR 8 bits | Perceptuelle |
| **Couleurs étendues** | Display P3 | SDR 8 bits | Perceptuelle |
| **Retouche photo** | ProPhoto RGB | SDR 16 bits | Perceptuelle |
| **Dessin HDR** | sRGB | HDR flottant 16 bits | Lumière linéaire |

### Supprimer le préréglage enregistré

Supprime le préréglage enregistré sélectionné. Les préréglages intégrés ne
peuvent pas être supprimés.

### Largeur (px) et Hauteur (px)

De 1 à 8192 pixels. Les champs acceptent des calculs comme « 160*2 ».

### Espace colorimétrique

**sRGB**, **Display P3**, **Adobe RGB (1998)** ou **ProPhoto RGB** (voir
[Espace colorimétrique, profondeur de couleur et fusion](/fr/docs/color-management/color-spaces/)).
Avec **ProPhoto RGB** et **SDR 8 bits**, la boîte de dialogue recommande le
SDR 16 bits.

### Profondeur de couleur

**SDR 8 bits**, **SDR 16 bits**, **HDR flottant 16 bits** ou
**HDR flottant 32 bits**. Une profondeur de couleur en virgule flottante crée un dessin HDR.

### Fusion

**Perceptuelle** ou **Lumière linéaire**. Avec une profondeur de couleur en
virgule flottante, **Fusion** est fixé sur **Lumière linéaire**.

### Arrière-plan

**Blanc** ou **Transparent**. **Transparent** masque le calque **Papier**.

### Nom du préréglage

Enregistre les réglages comme préréglage sous ce nom quand vous sélectionnez
**Créer**. Un nom compte jusqu’à 64 caractères, et vous pouvez conserver jusqu’à
64 préréglages.

### Utiliser ces réglages pour les nouveaux dessins

Quand cette option est activée, la boîte de dialogue s’ouvre avec ces réglages la
fois suivante. L’espace colorimétrique, la profondeur de couleur et l’arrière-plan
deviennent aussi les réglages **Nouveaux dessins** des
[Préférences](/fr/docs/preferences/).

## Les premiers calques

![Le panneau Calques d’un nouveau dessin, avec Encre actuelle au-dessus de Papier.](shot:files/new-layers)

Un nouveau dessin a deux calques. **Encre actuelle**, un calque de peinture vide,
est sélectionné au-dessus de **Papier**, un calque de remplissage blanc (voir
[Types de calques](/fr/docs/layers/types/)). Les calques ajoutés ensuite
s’appellent « Calque » suivi d’un numéro.

## Autres plateformes

Sur iPad, macOS et Android, un champ **Enregistrer le préréglage…** et une option
**Utiliser les valeurs par défaut** remplacent **Nom du préréglage** et
**Utiliser ces réglages pour les nouveaux dessins**. Sur iPad et macOS, il n’y a pas de
bouton **Supprimer le préréglage enregistré**.

Sous Linux, **Enregistrer le préréglage…** ouvre une boîte de dialogue distincte
pour le nom, et **Espace colorimétrique**, **Profondeur de couleur** et
**Fusion** sont regroupés sous **Couleur**.
