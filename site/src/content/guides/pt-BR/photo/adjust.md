---
title: "Ajustar e exportar"
description: "Etapa 3 do tutorial de edição de fotos: ajustes de tom e de cor em camadas de filtro, e uma exportação em JPEG."
related: ["filters/how-filters-apply", "filters/tone", "selections/working", "files/export"]
---

Esta etapa produz camadas de filtro de tom e de cor acima da foto, e um JPEG
para a web.

## 1. Adicionar Curvas

Selecione *Retouch*. Os filtros que você adicionar pelo menu **Filtro** entram
logo acima de *Retouch* e alteram tanto *Retouch* quanto a foto
([Como os filtros se aplicam](/pt-BR/docs/filters/how-filters-apply/)).

Escolha **Filtro > Tom > Curvas**. Uma camada **Curvas** aparece acima de
*Retouch*, e as configurações dela se abrem no painel **Propriedades**. Na curva
**RGB**, adicione um ponto nas sombras e arraste-o para baixo, depois adicione
um ponto nos realces e arraste-o para cima ([Filtros de tom](/pt-BR/docs/filters/tone/)).

![O painel Propriedades com uma curva RGB em forma de S em Curvas.](shot:photo/adjust-curves)

## 2. Adicionar Vibração

Escolha **Filtro > Cor > Vibração** e defina **Vibração** como 25 no painel
**Propriedades** ([Filtros de cor](/pt-BR/docs/filters/color/)). A camada
**Vibração** aparece acima de **Curvas**.

## 3. Selecionar a pedra

1. Pressione **M**, ou selecione **Seleção por laço** na barra de ferramentas Ferramentas, e desenhe ao redor da pedra.
2. Escolha **Selecionar > Difusão da seleção…**, ou selecione **Refinar** na barra de seleção e escolha **Difusão…** ([Trabalhar com seleções](/pt-BR/docs/selections/working/)).
3. Defina **Feather radius** como 20 px e selecione **Aplicar**.

## 4. Clarear as sombras da pedra

Clarear as sombras da foto inteira deixaria cinza o fundo preto. O exemplo
clareia as sombras só na pedra.

Selecione **Ajustar** na barra de seleção e escolha
**Tom > Sombras/Realces**. Defina **Sombras** como 35% no painel
**Propriedades**.

![A barra de seleção com o menu Ajustar aberto na categoria Tom, ao lado da seleção ao redor da pedra.](shot:photo/adjust-bar)

A seleção vira a máscara da nova camada **Sombras/Realces**. Só a pedra muda.

## 5. Salvar o desenho

Escolha **Arquivo > Salvar** ou pressione **Ctrl+S**. O primeiro salvamento de
uma foto aberta pede uma pasta e um nome, como faz **Salvar como…**. O arquivo
`.capy` mantém a foto original, as camadas, as máscaras e as camadas de filtro
([Abrir e salvar](/pt-BR/docs/files/open-save/)).

## 6. Exportar um JPEG

1. Escolha **Arquivo > Exportar…** ou pressione **Ctrl+Shift+E**.
2. Deixe **Destino** em **Web / Compartilhar** e defina **Formato** como **Imagem JPEG**.
3. Defina **Tamanho em pixels** como **Ajustar aos limites** e deixe **Largura máxima (px)** e **Altura máxima (px)** em 2048.
4. Selecione **Escolher arquivo…** e escolha uma pasta e um nome.

![A caixa de diálogo Exportar imagem com Web / Compartilhar, Imagem JPEG, Qualidade 90 e Ajustar aos limites.](shot:photo/export-jpeg)

Exportar não altera o desenho
([Exportar imagens](/pt-BR/docs/files/export/)).
