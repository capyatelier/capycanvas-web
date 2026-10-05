---
title: "Configurações da camada"
description: "As configurações da camada no cabeçalho do painel Camadas, no menu Configurações da camada e no painel Propriedades."
related: ["layers/panel", "layers/blend-modes", "layers/types", "filters/how-filters-apply"]
---

Você pode mudar estas configurações no cabeçalho do painel Camadas ou em
**Configurações da camada** no menu da camada. O menu **Camada** tem os mesmos
itens.

![O submenu Configurações da camada de Ribbon shading, com Recortar pela camada abaixo marcado e "Recortado por Ribbon" à direita.](shot:layers/settings-menu)

## Bloqueio alfa

Você pode bloquear a transparência de uma camada de pintura. Assim, os pincéis
mudam apenas os pixels que já estão pintados.

Faça uma das seguintes ações:

- Selecione a camada e depois selecione **Bloqueio alfa** no cabeçalho do painel Camadas.
- Abra o menu da camada e escolha **Configurações da camada > Bloqueio alfa**.
- Deslize a linha para a direita com uma caneta ou um dedo.

Enquanto o Bloqueio alfa está ativado, um ícone de bloqueio alfa aparece à
direita da linha.

**Preencher** e **Degradê** também preservam a transparência, e a **Borracha**
não tem efeito.

## Bloquear edição

Você pode bloquear uma camada para que ela não possa ser pintada nem alterada.

Faça uma das seguintes ações:

- Selecione a camada e depois selecione **Bloquear edição** no cabeçalho do painel Camadas.
- Abra o menu da camada e escolha **Configurações da camada > Bloquear edição**.
- Em uma camada de seleção, escolha **Bloquear edição** no menu dela.

Quando uma camada está bloqueada, um ícone de cadeado aparece na linha dela.

Não é possível pintar, renomear, excluir ou mascarar uma camada bloqueada, mudar
a opacidade ou o modo de mesclagem dela, nem adicionar um filtro a ela. Bloquear
um grupo bloqueia todas as camadas dentro dele. Não é possível desativar
**Bloquear edição** em uma camada dentro de um grupo bloqueado.

## Recortar pela camada abaixo

Você pode recortar uma camada para limitá-la à área pintada da camada abaixo.

Faça uma das seguintes ações:

- Selecione a camada e depois selecione **Recortar pela camada abaixo** no cabeçalho do painel Camadas.
- Abra o menu da camada e escolha **Configurações da camada > Recortar pela camada abaixo**.
- Para adicionar uma nova camada recortada, escolha **Novo > Nova camada de recorte** no menu da camada.

Um trilho à esquerda das miniaturas une as camadas recortadas à base. No menu da
camada, o item mostra o nome da base, por exemplo "Recortado por Ribbon". Mover
a camada base move junto as camadas recortadas por ela.

Não é possível recortar por um grupo com Atravessar. Desative Atravessar no
grupo primeiro.

A base é a camada não recortada mais próxima abaixo, no mesmo grupo, ignorando
as camadas de seleção. Se essa camada for uma camada de preenchimento ou um
filtro, o item mostra **Não há camada abaixo à qual vincular**. Em um filtro, o
item anexa o filtro (consulte
[Como os filtros se aplicam](/pt-BR/docs/filters/how-filters-apply/)).

## Usar como referência

Você pode marcar camadas de pintura e grupos como referências para as
ferramentas que amostram **Camadas de referência**, como **Seleção automática**,
**Preencher** e as [ferramentas de retoque](/pt-BR/docs/retouch/clone-heal/).

Faça uma das seguintes ações:

- Selecione as camadas e depois selecione **Usar camadas selecionadas como referência** no cabeçalho do painel Camadas.
- Abra o menu da camada e escolha **Configurações da camada > Usar como referência** ou, com várias linhas selecionadas, **Usar camadas selecionadas como referência**.

Para parar de usar uma camada como referência, selecione só essa camada e depois
selecione **Parar de usar esta camada como referência** no cabeçalho, ou
desative **Usar como referência** no menu da camada.

Um ícone de farol aparece no botão da linha de uma camada de referência. Depois
que você marca camadas com o botão do cabeçalho, só a camada ativa continua
selecionada.

## Usar camada abaixo como referência

Você pode marcar como referência a camada de pintura visível mais próxima
abaixo da camada ativa.

Faça uma das seguintes ações:

- Escolha **Camada > Configurações da camada > Usar camada abaixo como referência**.
- Quando uma ferramenta amostra camadas de referência e nenhuma está marcada, selecione **Usar *camada* como referência** no aviso sobre a tela.

## Atravessar

Você pode definir um grupo como Atravessar. As camadas dele passam a se mesclar
diretamente com as camadas abaixo do grupo, e a opacidade e a máscara do grupo
fazem a transição entre esse resultado e as camadas abaixo.

Faça uma das seguintes ações:

- Abra o menu do grupo e escolha **Configurações da camada > Atravessar**.
- Escolha **Atravessar** em **Modo de mesclagem da camada** no cabeçalho do painel Camadas ou em **Modo de mesclagem** no painel **Propriedades**.
- Deslize a linha do grupo para a direita com uma caneta ou um dedo.

Um selo aparece na pasta do grupo, e o subtítulo mostra "Atravessar".

Desativar Atravessar define o grupo como Normal. Um grupo com Atravessar não
pode ser recortado, ser base de recorte nem ter filtros anexados. Não é possível
mudar Atravessar em um grupo bloqueado.

Os novos grupos usam Normal, a menos que **Usar Atravessar para novos grupos**
esteja ativado na página **Tela** das [Preferências](/pt-BR/docs/preferences/).
Agrupar camadas que usam um modo de mesclagem diferente de Normal, ou um filtro
em uma camada própria, deixa o novo grupo com Atravessar.

## Modo de cor

Você pode armazenar uma camada de pintura em **Todas as cores**,
**Escala de cinza** ou **Dois tons (preto e branco)**. A pintura na camada segue
o modo.

![O painel Propriedades de uma camada de pintura com Opacidade, Modo de mesclagem e Modo de cor.](shot:layers/settings-color-mode)

Faça uma das seguintes ações:

- Selecione a camada e escolha um modo em **Modo de cor** no painel **Propriedades**.
- Digite "Modo de cor" na [busca de comandos](/pt-BR/docs/start/command-search/) e escolha um modo.

**Modo de cor** não está no menu da camada. O subtítulo da linha mostra o modo
quando ele não é Todas as cores.

Mudar o modo converte os pixels existentes, e voltar para Todas as cores não
restaura as cores originais. Dois tons deixa cada pixel preto ou branco, e
totalmente opaco ou totalmente transparente. **Modo de cor** fica oculto
enquanto você pinta na máscara da camada.

## Outros itens de Configurações da camada

**Configurações da camada** também lista **Aplicar transformação aos pixels**
(consulte [Mover e Transformar](/pt-BR/docs/transform/move-transform/)). Em uma
camada de foto, lista **Reparar perfil de origem…**, **Rasterizar origem…** e
**Reverter para foto original** (consulte [Tipos de camada](/pt-BR/docs/layers/types/)).
