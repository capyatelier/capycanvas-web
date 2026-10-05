---
title: "Cores base"
description: "Etapa 3 do tutorial de ilustração: uma camada de pintura para cada forma, mascarada pela forma e preenchida com a cor base dela."
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

Esta etapa produz uma camada de pintura para cada forma, preenchida com a cor
base dela e mascarada pela forma. As cores base ficam em camadas de pintura
porque uma camada de preenchimento não pode ser base de recorte para o
sombreamento da etapa 4.

## 1. Adicionar a camada Block

Oculte *Sketch*, selecione a linha dela e adicione uma camada chamada *Block*
com **Nova camada**. A nova camada aparece logo acima de *Sketch*, abaixo de
*Line art*.

## 2. Mascarar a camada pelo bloco

Pressione **M**, ou selecione **Seleção por laço** no grupo **Selecionar** da
barra de ferramentas Ferramentas, e trace o contorno do bloco em *Line art*.
Depois selecione **Máscara** na barra de seleção
([Trabalhar com seleções](/pt-BR/docs/selections/working/)).

![A barra de seleção com Máscara, ao lado de uma seleção ao redor do bloco.](shot:illustration/mask-selection-bar)

A seleção vira a máscara de *Block* ([Máscaras](/pt-BR/docs/layers/masks/)).
Uma miniatura de máscara aparece na linha, e uma barra na parte inferior da tela
mostra "Editando a máscara de Block".

## 3. Preencher a camada

**Preencher seleção** não fica disponível enquanto você edita uma máscara. Para
preencher a camada:

1. Selecione a miniatura da camada na linha *Block* ou selecione **Editar conteúdo** na barra na parte inferior da tela.
2. Escolha terracota no painel **Cor**.
3. Escolha **Selecionar > Selecionar todos os pixels** ou pressione **Ctrl+A**.
4. Escolha **Editar > Preencher seleção** ou pressione **Shift+Backspace**.
5. Escolha **Selecionar > Desmarcar pixels** ou pressione **Ctrl+D**.

A cor cobre a camada inteira, e a máscara só a mostra dentro do bloco.

## 4. Adicionar Disc e Ribbon

Crie *Disc* em ocre e depois *Ribbon* em verde-azulado, do mesmo jeito.

![O painel Camadas com Ribbon, Disc e Block, cada uma com uma miniatura de máscara, abaixo de Line art.](shot:illustration/mask-layers)

A lista de camadas mostra *Line art*, *Ribbon*, *Disc*, *Block*, *Sketch*,
*Color rough* e **Papel**.

## 5. Ajustar uma borda

Selecione a miniatura da máscara na linha *Ribbon*. A barra na parte inferior
da tela mostra "Editando a máscara de Ribbon".

![A barra na parte inferior da tela mostrando Editando a máscara de Ribbon, com Inverter, Desativar, Aplicar máscara e Editar conteúdo.](shot:illustration/mask-bar)

Pinte ao longo de uma borda com o pincel **Caneta G** para mostrar mais do
verde-azulado, ou use a **Borracha** para aparar a borda. Na máscara, os pincéis
ignoram a cor de pintura.

Próxima etapa: [Renderização](/pt-BR/docs/illustration/render/).
