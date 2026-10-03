---
title: "Espaces colorimétriques, HDR et vérification"
description: "Choisissez la manière dont un dessin stocke les couleurs, travaillez dans HDR et prévisualisez la manière dont une image sera imprimée."
purpose: "La plupart des dessins sont superbes avec les paramètres par défaut. Lorsque vous modifiez des photos, préparez un travail à imprimer ou souhaitez bénéficier des couleurs vives d'un écran moderne, vous pouvez choisir la quantité de couleurs que le dessin peut contenir et prévisualiser son apparence ailleurs."
techniques: ["Choisissez un espace colorimétrique et une profondeur de bits pour un nouveau dessin.", "Paint et modifiez dans HDR.", "Prévisualisez les couleurs imprimées avec Proof."]
figure: "1 : Préréglages de dessin. 2 : Espace colorimétrique et profondeur de bits. 3 : Créer, qui ouvre le nouveau dessin."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1 : Préréglages de dessin. 2 : Espace colorimétrique et profondeur de bits. 3 : Créer, qui ouvre le nouveau dessin."}
---

## Choisissez la couleur d'un nouveau dessin

Lorsque vous choisissez **File → New…**, le menu **Preset** propose quelques points de départ. **Standard drawing** convient à la plupart des œuvres d'art et à tout ce que vous partagerez en ligne. Le **Wide color** peut conserver les couleurs les plus vives que de nombreux écrans modernes affichent, et le **Photo editing** conserve une précision supplémentaire afin que des ajustements importants ne provoquent pas de bandes dans des dégradés lisses.

**Color space** définit la gamme de couleurs que le dessin peut contenir, et **Bit depth** définit la précision avec laquelle chaque couleur est stockée. Si vous changez d'avis plus tard, utilisez **Edit → Convert Color Space…** ou **Edit → Change Bit Depth…**. Les photos conservent les couleurs avec lesquelles elles ont été prises, il n'y a donc rien à configurer lorsque vous en ouvrez une.

## Travailler en HDR

Choisissez **16-bit float HDR** ou **32-bit float HDR** comme profondeur de bits pour créer un dessin HDR. Les dessins HDR peuvent contenir des couleurs plus brillantes que le blanc, comme la lumière du soleil et les lumières rougeoyantes. Lorsque vous modifiez un dessin HDR, un arc d'intensité apparaît sous la roue chromatique, vous pouvez donc également peindre avec des couleurs plus vives que le blanc.

HDR s'affiche en pleine luminosité lorsque votre navigateur et votre écran le prennent en charge. Sur d'autres écrans, vous verrez à la place une version standard de l'image. Lorsque vous exportez un dessin HDR, vous pouvez enregistrer un dessin HDR JPEG ou AVIF qui s'affiche également correctement sur les écrans ordinaires, comme décrit dans [Exporter une image](/fr/docs/output/export/).

## Aperçu avec preuve

Avant d'envoyer votre travail à une imprimante, **View → Proof** indique l'apparence probable des couleurs sur le papier. Dans le panneau **Proof**, choisissez **Print**, puis choisissez ou ajoutez le profil de couleur de l'imprimante ou du service d'impression. **Gamut warning** marque les couleurs que l'imprimante ne peut pas reproduire, afin que vous puissiez les ajuster avant l'impression.

Pour les dessins HDR, l'option **SDR** dans le même panneau montre à quoi ressemblera l'image sur un écran ordinaire et vous permet d'affiner la luminosité et le contraste de cette version.
