---
title: "Trabalhar com camadas"
description: "Como adicionar, organizar e excluir camadas no painel Camadas."
related: ["layers/panel", "layers/types", "layers/merging", "files/open-save"]
---

## Criar camadas

Faça uma das seguintes ações:

- Escolha **Camada > Novo** e **Nova camada**, **Nova camada de recorte** ou **Novo grupo**.
- Selecione **Nova camada** ou **Novo grupo** na parte inferior do painel Camadas.

A nova camada entra logo acima da camada ativa e das camadas recortadas por ela
ou anexadas a ela. Se um grupo estiver ativo, a nova camada vai para o topo do
grupo. Não é possível adicionar uma camada a um grupo bloqueado.

**Nova camada de recorte** precisa de uma camada de pintura ativa ou de um grupo
ativo que não esteja com Atravessar.

## Selecionar camadas

Você pode selecionar várias linhas para agrupar, duplicar, excluir ou mover
todas de uma vez.

- Selecione uma linha para selecionar só essa camada e torná-la a camada ativa.
- **Shift**+clique em uma linha para selecionar as linhas entre ela e a linha que você selecionou antes.
- **Ctrl**+clique em uma linha para adicioná-la à seleção ou removê-la.
- Selecione o botão da linha, à esquerda da miniatura, para adicionar ou remover a linha sem mudar a camada ativa.
- Escolha **Camada > Seleção de linhas de camada > Selecionar todas as linhas de camada** ou **Limpar seleção de linhas de camada**.

Selecionar uma linha que já está selecionada mantém as outras linhas
selecionadas. Mudanças na seleção de linhas não são passos de desfazer.

## Ocultar camadas

Faça uma das seguintes ações:

- Escolha **Camada > Visibilidade > Mostrar camada**.
- Selecione o olho na linha.

**Camada > Visibilidade** também tem **Mostrar camada e grupos superiores**,
**Isolar camadas selecionadas** e **Mostrar todas as camadas**.

## Renomear camadas

Faça uma das seguintes ações:

- Escolha **Camada > Organizar > Renomear camada…** (**Renomear grupo…** em um grupo).
- Clique duas vezes no nome.

![Uma linha de camada com o nome em um campo de texto.](shot:layers/working-rename)

Pressione **Enter** para manter o nome ou **Escape** para cancelar. Não é
possível renomear uma camada bloqueada.

## Reordenar camadas

Arraste uma linha para cima ou para baixo na lista. Com uma caneta ou um dedo,
mantenha pressionada a linha antes ou arraste a alça na extremidade direita da
linha.

![Uma linha sendo arrastada, com uma linha divisória entre duas linhas no ponto onde ela vai ficar.](shot:layers/working-drag)

Uma linha divisória acima ou abaixo de uma linha marca onde a camada vai ficar.
Para mover a camada para dentro de um grupo, solte-a no meio da linha do grupo
(aparece um quadro ao redor da linha). Pressione **Escape** para cancelar o
arrasto.

Todas as linhas selecionadas se movem juntas, e as camadas recortadas e os
filtros anexados acompanham a camada deles. **Subir camada** e **Descer camada**
na [busca de comandos](/pt-BR/docs/start/command-search/) movem as linhas
selecionadas uma posição.

## Agrupar e desagrupar

Para agrupar camadas, selecione as linhas delas e escolha
**Camada > Organizar > Agrupar camadas selecionadas** ou selecione **Novo grupo**
na parte inferior do painel Camadas.
As linhas precisam estar no mesmo grupo, e uma base de recorte precisa ser
agrupada com as camadas recortadas por ela.

Para desagrupar, escolha **Camada > Organizar > Desagrupar**. Um grupo oculto
deixa as camadas dele ocultas. **Desagrupar** fica indisponível enquanto o grupo
tem uma máscara, opacidade abaixo de 100%, um modo de mesclagem diferente de
Normal ou Atravessar, recorte ou filtros anexados, ou quando as camadas dele
ficariam diferentes sem o grupo.

## Duplicar camadas

Escolha **Camada > Organizar > Duplicar** ou, com várias linhas selecionadas,
**Duplicar camadas selecionadas**.

As cópias entram logo acima dos originais, com as camadas recortadas e os
filtros anexados, e recebem o nome "Cópia de *nome*". Não é possível duplicar
uma camada em um grupo bloqueado.

## Excluir camadas

Faça uma das seguintes ações:

- Escolha **Camada > Excluir camada** ou, com várias linhas selecionadas, **Excluir camadas selecionadas**.
- Selecione **Excluir camadas selecionadas** na parte inferior do painel Camadas.
- Com uma caneta ou um dedo, deslize a linha para a esquerda e selecione **Excluir**.

Em um grupo recolhido, o item do menu mostra **Excluir grupo e conteúdo**.
Excluir um grupo expandido mantém as camadas dele, como faz **Desagrupar**.

As camadas recortadas e os filtros anexados continuam quando você exclui a
camada deles. Não é possível excluir uma camada bloqueada. A tecla **Excluir**
limpa os pixels selecionados, não as camadas.

## Copiar seleção para nova camada

Você pode copiar ou mover os pixels selecionados de uma camada de pintura para
uma nova camada, na mesma posição.

Faça uma das seguintes ações:

- Escolha **Camada > Novo > Copiar seleção para nova camada** (**Ctrl+J**) ou **Recortar seleção para nova camada** (**Ctrl+Shift+J**).
- Escolha os mesmos comandos no menu **Selecionar**.
- Escolha esses comandos em **Copiar para camada** na [barra de seleção](/pt-BR/docs/selections/working/) sobre a tela.

A nova camada entra acima da camada de origem, com o nome "Cópia de *nome*" e
a mesma opacidade e o mesmo modo de mesclagem. A seleção é desfeita, e
**Selecionar > Selecionar novamente** a traz de volta.

Sem uma seleção, **Copiar seleção para nova camada** duplica as camadas
selecionadas. **Recortar seleção para nova camada** precisa de uma seleção e
fica indisponível enquanto o **Bloqueio alfa** está ativado.

## Importar imagens

Faça uma das seguintes ações:

- Escolha **Arquivo > Importar imagem como camada…** ou pressione **Ctrl+Shift+O**.
- Selecione **Importar imagem como camada…** na parte inferior do painel Camadas.
- Arraste arquivos de imagem para a tela ou para uma linha do painel Camadas.

Cada arquivo vira uma [camada de foto](/pt-BR/docs/layers/types/) acima da
camada ativa, ou acima, abaixo ou dentro da linha em que você o solta. A imagem
fica centralizada e reduzida para caber na tela, com
[alças de posicionamento](/pt-BR/docs/transform/move-transform/).
