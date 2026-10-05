---
title: "Salvar e redefinir pincéis"
description: "Como as alterações nos pincéis são guardadas e como voltar os pincéis às configurações integradas."
related: ["brushes/basics", "drawing/brush-tools", "customize/workspaces"]
---

Você pode alterar qualquer configuração de um pincel integrado e voltá-la ao valor
original depois.

## Alterações nos pincéis

Toda alteração em uma configuração de pincel é salva na hora com a predefinição.

- As alterações valem para todas as áreas de trabalho, inclusive as que você cria.
- As alterações continuam depois que você reinicia o Capy Canvas.
- As configurações de pincel não são salvas nos arquivos `.capy`.
- Uma alteração em uma configuração de pincel não é um passo de desfazer, e o Histórico de layout não lista alterações de pincel.
- Um pincel não guarda cor. Ele pinta com a cor atual do [painel Cor](/pt-BR/docs/color/color-panel/).

## Redefinir uma configuração

Você pode voltar uma configuração ao valor integrado do pincel. Clique duas vezes
(ou toque duas vezes) no rótulo ou no ícone da configuração na barra Opções da
ferramenta ([Tamanho, opacidade e fluxo](/pt-BR/docs/brushes/basics/)).

O painel **Ferramenta** não tem opção de redefinir. Para redefinir **Mistura de
cores**, selecione **Mistura Oklab**, a opção integrada de todos os pincéis de
mistura.

## Redefinir todos os pincéis…

Você pode voltar todos os pincéis às configurações integradas. Escolha **Janela >
Áreas de trabalho > Redefinir todos os pincéis…** e selecione **Redefinir pincéis**
na caixa de diálogo.

![A caixa de diálogo Redefinir todos os pincéis? com o botão Redefinir pincéis.](shot:brushes/reset-all-dialog)

Todas as predefinições são redefinidas, inclusive as que você não usou. As cores,
a ferramenta selecionada, o layout e o desenho não mudam, e os marcadores dos
controles deslizantes de Esboço continuam. Não é possível desfazer a redefinição
de todos os pincéis.

## Criar e importar pincéis

Não é possível criar, duplicar, renomear, excluir, importar nem exportar pincéis.
As predefinições integradas são os únicos pincéis, e não existe formato de arquivo
de pincel.
