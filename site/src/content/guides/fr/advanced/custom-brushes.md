---
title: "Enregistrer et réinitialiser les paramètres du pinceau"
description: "Conservez les réglages de votre pinceau, essayez-en de nouveaux et revenez aux valeurs par défaut."
purpose: "Lorsque vous modifiez les paramètres d'un pinceau, Capy Canvas les mémorise dans le cadre de votre espace de travail. Vous n'avez pas besoin de sauvegarder quoi que ce soit à la main. Si vous souhaitez expérimenter sans perdre une configuration que vous aimez, faites d'abord une copie de l'espace de travail."
techniques: ["Conservez vos modifications dans l'espace de travail actuel.", "Essayez une configuration différente dans une copie de l'espace de travail.", "Réinitialisez les pinceaux sans modifier votre mise en page."]
figure: "1 : Espace de travail actif. 2 : Paramètres du pinceau enregistrés avec. 3 : Confirmation de réinitialisation de tous les pinceaux."
related: ["advanced/brush-engine", "workspace/management"]
image: {"light": "/assets/guides/advanced-custom-brushes-light.webp", "dark": "/assets/guides/advanced-custom-brushes-dark.webp", "alt": "1 : Espace de travail actif. 2 : Paramètres du pinceau enregistrés avec. 3 : Confirmation de réinitialisation de tous les pinceaux."}
---

## Vos modifications sont conservées pour vous

Choisissez un pinceau et modifiez ses paramètres dans le panneau **Tool**. Lorsque vous passez à un autre pinceau et revenez plus tard, vos modifications sont toujours là. Chaque espace de travail mémorise les paramètres de chaque pinceau séparément, ainsi que les outils que vous avez utilisés en dernier et la façon dont les panneaux sont disposés.

Les paramètres du pinceau appartiennent à l’espace de travail et non à vos dessins. L'ouverture d'un dessin ne modifie pas vos pinceaux et l'enregistrement d'un dessin ne les enregistre pas.

## Essayez une autre configuration

Pour expérimenter librement, choisissez **Window → Workspaces → New Workspace…**. Cela crée une copie de l'espace de travail actuel, avec ses pinceaux et sa mise en page, sous un nouveau nom. Apportez vos modifications dans la copie. Le retour à l'espace de travail d'origine ramène ses paramètres exactement tels que vous les avez laissés.

[Gérer les espaces de travail](/fr/docs/workspace/management/) explique comment basculer entre les espaces de travail et choisir ceux qui apparaissent dans la barre de titre.

## Repartir à zéro

**Window → Workspaces → Reset All Brushes…** rétablit chaque pinceau de l'espace de travail actuel à ses paramètres d'origine, y compris les pinceaux que vous n'utilisez pas actuellement. Vos dessins et la disposition de vos panneaux ne sont pas affectés.

Si vous souhaitez que les panneaux reviennent là où ils ont commencé, utilisez **Restore Starting Layout…**. Cela remet les panneaux en place mais conserve les paramètres de votre pinceau, de sorte que les deux réinitialisations n'annulent jamais le travail de l'autre.
