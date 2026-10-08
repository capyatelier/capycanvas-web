---
title: "Desfazer e refazer"
description: "Como desfazer e refazer alterações em um desenho, e o histórico separado das alterações de layout."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

Você pode desfazer as alterações em um desenho um passo de cada vez e refazer os
passos desfeitos. Cada desenho aberto tem seu próprio histórico.

![Os botões Desfazer e Refazer na barra de ferramentas Comandos.](shot:start/undo-commands)

## Desfazer

Faça uma das seguintes ações:

- Escolha **Editar > Desfazer**.
- Pressione **Ctrl+Z**.
- Selecione **Desfazer** na barra de ferramentas Comandos. Em Esboço, **Desfazer** fica na barra da borda esquerda da tela.
- Toque na tela com dois dedos.

## Refazer

Faça uma das seguintes ações:

- Escolha **Editar > Refazer**.
- Pressione **Ctrl+Shift+Z** ou **Ctrl+Y**.
- Selecione **Refazer** na barra de ferramentas Comandos ou, em Esboço, na barra da borda esquerda.
- Toque na tela com três dedos.

Uma nova alteração depois de Desfazer apaga os passos que podiam ser refeitos.

## O que conta como passo

Cada traço, preenchimento, alteração de filtro, transformação, recorte, alteração
do tamanho da tela e alteração da seleção é um passo, assim como cada alteração em
uma camada. Alterações na visualização, na ferramenta, no pincel, na cor e no
layout não são passos.

Enquanto você insere uma imagem, transforma uma camada ou usa a ferramenta
Recortar, Desfazer cancela essa operação em vez de voltar um passo.

## Tamanho do histórico

Cada desenho guarda até 256 passos. Os passos mais antigos são descartados primeiro.

## Salvar e reabrir

Salvar não apaga o histórico. Um desenho aberto a partir de um arquivo `.capy`
começa com o histórico vazio, mas os desenhos que reabrem quando você reinicia o
{appName} mantêm os passos de desfazer.

## Alterações de layout

As alterações em painéis, barras de ferramentas, barra de título e áreas de
trabalho têm um histórico próprio. **Editar > Desfazer** nunca desfaz uma
alteração de layout.

Faça uma das seguintes ações:

- Escolha **Janela > Desfazer alteração de layout** ou **Janela > Refazer alteração de layout**.
- Pressione **Ctrl+Alt+Z** ou **Ctrl+Alt+Shift+Z**.

Cada área de trabalho guarda seu próprio histórico de layout, e o histórico se
mantém depois de reiniciar. **Janela > Áreas de trabalho > Histórico de layout…**
lista os layouts anteriores da área de trabalho atual.
