---
title: "Camadas vetoriais"
description: "Camadas que contêm caminhos em vez de pixels, e as canetas, formas e a borracha que funcionam nelas."
related: ["layers/paths", "layers/types", "drawing/figure", "layers/merging"]
---

Uma camada vetorial contém caminhos em vez de pixels. Você pode remodelar os caminhos depois de desenhá-los ([Editar caminhos](/pt-BR/docs/layers/paths/)).

## Criar uma camada vetorial

Faça uma das seguintes ações:

- Selecione **Nova camada vetorial** na parte inferior do painel Camadas.
- Escolha **Camada > Novo > Nova camada vetorial**.
- Pressione **Ctrl+Alt+Shift+N**.
- Digite "arte-final" na [busca de comandos](/pt-BR/docs/start/command-search/).

Um selo de caminho marca a miniatura de uma camada vetorial.

![O painel Camadas com a camada vetorial Line art acima de Current ink e Paper, com um selo de caminho na miniatura.](shot:vector/layers-panel)

## Desenhar caminhos

Você pode desenhar caminhos com **Caneta G**, cuja largura acompanha a pressão da caneta, e com **Monolinha**, que mantém uma largura só. Cada traço vira um caminho. Um traço que começa na ponta aberta de um caminho selecionado continua esse caminho.

Ao selecionar uma camada vetorial, a ferramenta passa para a última caneta que desenhou caminhos, no início a Caneta G. Ao selecionar uma camada de pintura de novo, o pincel que você tinha volta.

Em uma camada vetorial, **Conjunto de ferramentas** esmaece os pincéis que não podem desenhar caminhos. Uma caneta deixa de desenhar caminhos quando você diminui a **Dureza** ou a **Intensidade** dela.

![O aviso sobre a tela para um pincel que não pode desenhar caminhos, com Usar Caneta G, Nova camada de pintura e Rasterizar camada.](shot:vector/refusal-notice)

Um traço com outro pincel não pinta nada, e um aviso informa o nome da camada. As ações dele são **Usar Caneta G**, **Nova camada de pintura** (adiciona uma camada de pintura acima) e **Rasterizar camada**. Quando uma configuração impede a caneta de desenhar, **Redefinir** com o nome da configuração, como **Redefinir Dureza**, substitui **Usar Caneta G**.

## Formas

Com **Forma**, cada **Linha**, **Retângulo**, **Elipse**, **Polígono**, **Estrela** e **Caminho** vira um caminho, selecionado e na frente dos outros. Veja [Forma](/pt-BR/docs/drawing/figure/).

## Apagar caminhos

Você pode apagar caminhos com a **Borracha**, com **Pintura transparente** ou com a ponta de borracha de uma caneta. Enquanto a Borracha está ativa em uma camada vetorial, três modos aparecem acima dos pincéis de borracha em **Conjunto de ferramentas**. Em Esboço, eles encabeçam a coluna **Ferramentas** da gaveta **Borracha**.

![O painel Conjunto de ferramentas da Borracha em uma camada vetorial, com Apagar a parte tocada, Apagar caminhos inteiros e Apagar até a interseção acima do pincel Borracha.](shot:vector/eraser-modes)

- **Apagar a parte tocada** corta um caminho onde a borracha encosta e deixa o resto do caminho como está. É o padrão.
- **Apagar caminhos inteiros** remove todos os caminhos que a borracha encosta.
- **Apagar até a interseção** remove a parte tocada de um caminho até os cruzamentos mais próximos com outros caminhos ou com ele mesmo. Um caminho que não cruza nada é removido por inteiro.

Apagar não remove a área preenchida.

## Preenchimento

**Preencher** colore o caminho fechado em que você clica, e **Preencher com laço** adiciona um caminho preenchido. Veja [Ferramentas de preenchimento](/pt-BR/docs/drawing/fill/).

## Rasterizar camada

Escolha **Camada > Rasterizar camada** para transformar uma camada vetorial em uma camada de pintura que contém o que os caminhos dela mostram.

## Mesclagem

**Mesclar abaixo** mantém os caminhos quando uma camada vetorial é mesclada em outra camada vetorial. Qualquer outra mesclagem transforma os caminhos em pixels depois de um aviso. Veja [Mesclar camadas](/pt-BR/docs/layers/merging/).
