---
title: "Ferramentas de seleção"
description: "Selecione parte do seu desenho para que as alterações afetem apenas essa área."
purpose: "Uma seleção marca a parte do desenho na qual você deseja trabalhar. Enquanto estiver ativo, pintar, preencher e transformar afetam apenas a área selecionada, para que o restante do desenho permaneça seguro. Capy Canvas possui ferramentas de seleção para formas simples, contornos à mão livre e áreas de cores semelhantes."
techniques: ["Escolha a ferramenta de seleção correta.", "Adicionar ou subtrair de uma seleção.", "Preencha uma seleção e limpe-a quando terminar."]
figure: "1: Ferramentas de seleção no Conjunto de Ferramentas. 2: Modo de seleção, opções de difusão e forma. 3: Uma seleção de elipse ao redor do disco."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Ferramentas de seleção no Conjunto de Ferramentas. 2: Modo de seleção, opções de difusão e forma. 3: Uma seleção de elipse ao redor do disco."}
---

## Escolha uma ferramenta de seleção

Em Paint, escolha **Lasso selection** ou **Auto select** na barra de ferramentas e o Conjunto de ferramentas listará todas as ferramentas de seleção. No Sketch, eles estão sob o botão **Select** e o Photo mantém a maioria deles em sua barra de ferramentas.

**Rectangle select** e **Ellipse select** desenham formas simples; segure **Shift** para criar um quadrado ou círculo e **Alt** para desenhar a partir do centro. **Lasso selection** segue sua caneta à mão livre e **Polygonal lasso** une linhas retas entre os pontos em que você clica; clique no primeiro ponto novamente ou pressione **Enter** para fechá-lo. **Auto select** seleciona uma área de cor semelhante com um clique e **Select by color** seleciona todas as áreas dessa cor de uma só vez. Mais duas ferramentas, **Paint selection** e **Tonal range**, possuem páginas próprias: [Máscara rápida e camadas de seleção](/pt-BR/docs/selections/quick-mask/) e [Selecionar por brilho](/pt-BR/docs/selections/tonal-range/).

## Combine e suavize seleções

Os quatro botões na parte superior do painel **Tool** escolhem o que acontece quando você faz outra seleção. Ele pode substituir o atual, adicionar, subtrair ou manter apenas a área onde os dois se sobrepõem. Você também pode segurar **Shift** para adicionar ou **Alt** para subtrair, sem alterar os botões.

**Feather radius** suaviza a borda da seleção, para que a pintura e os ajustes desapareçam gradualmente em vez de parar em uma linha rígida. Para seleção automática, **Tolerance** controla o quão diferente uma cor pode ser e ainda assim ser incluída, e **Close gaps** impede que a seleção vaze através de pequenas quebras em sua arte de linha.

## Use a seleção

Para selecionar tudo pintado em uma camada, segure **Ctrl** e clique na miniatura da camada. Com uma seleção ativa, pinte livremente: os traços só pousam dentro dela. Escolha **Edit → Fill selection** para preenchê-lo com a cor atual ou transformá-lo em uma [máscara de camada](/pt-BR/docs/layers/masks/). O menu **Select** também pode inverter a seleção, aumentá-la ou reduzi-la alguns pixels ou trazer de volta a última seleção com **Reselect**.

Quando terminar, escolha **Select → Deselect pixels** para que seus próximos golpes possam ir a qualquer lugar novamente.
