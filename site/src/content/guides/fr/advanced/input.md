---
title: "Stylet, toucher et raccourcis"
description: "Vérifiez que votre stylet fonctionne, ajustez sa sensation et configurez des raccourcis clavier."
purpose: "Il vaut la peine de vous assurer que votre stylet fonctionne correctement avant de modifier les paramètres du pinceau. Une fois cela fait, quelques préférences et raccourcis peuvent rendre le dessin plus confortable et garder vos commandes préférées à portée de main."
techniques: ["Vérifiez que la pression du stylet fonctionne.", "Ajustez la prédiction de la pression, du curseur et du trait.", "Configurez les raccourcis clavier."]
figure: "1 : Pages de préférences. 2 : Paramètres du stylet et de la saisie. 3 : Raccourcis clavier."
related: ["painting/brushes", "advanced/brush-engine", "workspace"]
image: {"light": "/assets/guides/advanced-input-light.webp", "dark": "/assets/guides/advanced-input-dark.webp", "alt": "1 : Pages de préférences. 2 : Paramètres du stylet et de la saisie. 3 : Raccourcis clavier."}
---

## Vérifiez votre stylo

Choisissez un crayon et dessinez un trait qui commence légèrement, appuie plus fort, puis s'éclaircit à nouveau. Si la ligne reste la même tout au long, essayez la même chose dans une autre application de dessin. Si la pression ne fonctionne pas non plus, le problème vient probablement du pilote de la tablette ou de ses paramètres. S'il échoue uniquement dans Capy Canvas, vérifiez les paramètres ci-dessous.

Sur une tablette graphique distincte, assurez-vous que la tablette est mappée sur l'écran qui affiche Capy Canvas. Sur un écran interactif, vérifiez que le curseur est aligné avec la pointe du stylet, au milieu et près des bords. Si votre stylo a une extrémité en gomme, retournez-la pour effacer. Les boutons sur le côté du stylet ne font rien sur la toile, sauf si vous leur confiez une tâche dans les paramètres de votre tablette, comme un raccourci clavier.

Sur un écran tactile, les doigts ne peignent jamais : un doigt maintenu choisit toujours une couleur, et deux doigts bougent, zooment et font pivoter la vue. Cela signifie que vous pouvez poser votre main sur l'écran pendant que vous dessinez avec le stylet.

## Ajustez la sensation du stylet

Ouvrez **Preferences** et choisissez **Pen & Input**. **Pressure response** modifie la force avec laquelle vous devez appuyer : des valeurs plus faibles font qu'une légère pression compte davantage. **Cursor shape** choisit l'apparence du pointeur sur le canevas et **Hide cursor when painting** le maintient à l'écart pendant que vous dessinez.

**Enable stroke prediction** aide la ligne à suivre le rythme d'un stylo à déplacement rapide. Si la fin d'une course semble dépasser un virage serré, abaissez le **Prediction amount** ou désactivez la prédiction. Modifiez un paramètre à la fois et tracez la même courbe après chaque modification.

## Configurer des raccourcis

Ouvrez **Help → Keyboard Shortcuts** pour voir chaque commande et ses clés. Sélectionnez une commande pour lui donner un nouveau raccourci et Capy Canvas vous indique si les touches sont déjà utilisées. Quelques valeurs par défaut utiles sont **Ctrl+Z** pour annuler et **Ctrl+Shift+Z** pour refaire, **B** pour les pinceaux, **P** pour les stylos et crayons, **E** pour la gomme, **I** pour choisir une couleur, **F** pour remplir, **Ctrl+0** pour ajuster le dessin à l'écran, **Q** pour le masque rapide et **Tab** pour le mode Zen. Appuyer à nouveau sur **B** ou **P** pour basculer entre les outils qui partagent la clé. Vous pouvez également donner à vos tailles de pinceaux préférées leurs propres clés. Sur un Mac, utilisez Command partout où ces guides indiquent Ctrl.
