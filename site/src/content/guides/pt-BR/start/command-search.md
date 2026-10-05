---
title: "Busca de comandos"
description: "Como encontrar e executar comandos, ferramentas, pincéis e configurações digitando o nome."
related: ["input/keyboard", "start/undo", "customize/toolbars"]
---

Você pode encontrar e executar comandos, ferramentas, pincéis, propriedades de
camadas, áreas de trabalho e cores digitando o nome.

## Abrir a busca de comandos

Faça uma das seguintes ações:

- Escolha **Editar > Buscar comandos…**.
- Pressione **Ctrl+K** ou **Ctrl+Shift+P**. No editor web, só **Ctrl+K** funciona.
- Se você adicionou a busca de comandos a uma barra de ferramentas, selecione o botão dela (consulte [Barras de ferramentas e barra de título](/pt-BR/docs/customize/toolbars/)).

Outros mapas de atalhos usam outras teclas (consulte [Atalhos de teclado](/pt-BR/docs/input/keyboard/)).
As teclas também funcionam enquanto você digita em um campo de texto.

A caixa de busca abre perto do topo da janela, com o campo vazio.

A busca de comandos não está disponível durante um traço, com **Preferências**
aberto ou enquanto você personaliza a barra de título.

## Sugestões

![A busca de comandos com o campo vazio, listando Desfazer, Ajustar tela, Salvar, Preferências e Atalhos de teclado.](shot:start/command-search-suggestions)

Com o campo vazio, a lista mostra até cinco entradas: as últimas que você
executou pela busca e, depois, **Desfazer**, **Ajustar tela**, **Salvar**,
**Preferências** e **Atalhos de teclado**. As entradas que não podem ser
executadas no momento ficam de fora.

Só as entradas executadas pela busca contam como recentes. A lista de recentes é
apagada quando você fecha o Capy Canvas.

## Buscar

Digite parte de um nome. A lista mostra até oito resultados, com os nomes exatos primeiro.

- Maiúsculas e minúsculas são equivalentes. Os acentos precisam coincidir.
- Letras na ordem certa também servem: "ajst tla" encontra **Ajustar tela**.
- Os nomes em inglês funcionam em qualquer idioma do aplicativo.
- Algumas entradas respondem a outras palavras: "settings" encontra **Preferências**, "color picker" encontra **Conta-gotas** e "resize" encontra **Transformar**.
- Digitar "brush" ou "brushes" deixa de fora os pincéis individuais.

Se nada corresponder, a lista mostra "Nenhum comando correspondente".

## O que dá para encontrar

- Todos os itens dos menus.
- Todas as ferramentas e cada variante de ferramenta, como **Régua › Radial**.
- Todos os pincéis e cada conjunto de pincéis como "Pincéis *conjunto*".
- As configurações da ferramenta atual, como **Tamanho do pincel…**.
- As propriedades da camada selecionada, como **Opacidade da camada…**.
- Todas as áreas de trabalho.
- **Cor de primeiro plano**, **Cor de fundo**, **Pintura transparente**, **Cor temporária**, **Trocar primeiro plano e fundo**, **Preto** e **Branco**.
- Todos os painéis e barras de ferramentas do menu **Janela**.

## Resultados

![A busca de comandos com a consulta "undo", a linha Desfazer esmaecida e "Nada para desfazer" na parte de baixo.](shot:start/command-search-unavailable)

Cada linha mostra o nome e, à direita, a tecla. Uma marca de seleção indica uma
configuração ativada e a área de trabalho atual.

A linha na parte de baixo da caixa descreve a entrada destacada com o texto de
ajuda, a localização no menu ou o intervalo de valores. Uma entrada que não pode
ser executada no momento fica esmaecida, e a linha de baixo dá o motivo, como
"Nada para desfazer".

## Executar um resultado

Faça uma das seguintes ações:

- Pressione **↑** ou **↓** para destacar uma linha e pressione **Enter**.
- Selecione uma linha.

A busca fecha e a entrada é executada. Se a entrada não puder ser executada, a
busca continua aberta e mostra o motivo.

## Digitar um valor

![A busca de comandos pedindo um valor para Tamanho do pincel…, com a unidade px e, na parte de baixo, o valor atual e o intervalo.](shot:start/command-search-typed-value)

As entradas de configurações numéricas, como **Tamanho do pincel…** e
**Opacidade da camada…**, pedem um valor. A linha de baixo mostra o valor atual e
o intervalo.

Para definir um valor:

1. Selecione a entrada, ou destaque-a e pressione **Enter**.
2. Digite o valor e pressione **Enter**.

Você pode digitar contas, como "12 * 2" ou "sqrt(9)", e porcentagens, como "50%".
Um valor fora do intervalo é ajustado ao limite mais próximo. Pressione **Esc**
para voltar aos resultados.

## Desfazer a partir de um campo de texto ou de uma paleta

Se você abrir a busca de comandos a partir de um campo de texto, **Desfazer** e
**Refazer** viram **Desfazer edição de texto** e **Refazer edição de texto**.
Eles não podem ser executados pela busca. Para desfazer o que digitou no campo,
feche a busca primeiro.

Aberta a partir do painel **Paletas**, a busca lista em vez disso **Desfazer
reordenação de cores** e **Refazer reordenação de cores**. Eles desfazem mudanças na ordem das
cores da paleta, não no desenho.

## Fechar a busca de comandos

Faça uma das seguintes ações:

- Pressione **Esc**.
- Selecione **×** à direita do campo.
- Clique ou toque fora da caixa.

Um clique fora da caixa não pinta na tela.
