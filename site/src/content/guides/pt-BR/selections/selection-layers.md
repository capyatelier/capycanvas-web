---
title: "Camadas de seleção"
description: "Como guardar seleções como camadas de seleção no painel Camadas e carregá-las de novo."
related: ["selections/working", "selections/quick-mask", "layers/types", "layers/panel"]
---

Você pode guardar uma seleção como uma camada no painel Camadas e carregá-la de
novo mais tarde.

## Salvar uma seleção

Faça uma das seguintes ações:

- Escolha **Selecionar > Salvar como camada de seleção**.
- Selecione **Salvar** na barra de seleção ou na barra da Máscara rápida.
- Na Máscara rápida, escolha **Camada > Salvar como camada de seleção**.

A nova camada vai para o topo da lista de camadas, com o nome *Seleção* e um
número. Ela se abre para edição com o nome pronto para ser digitado.
Salvar a partir da Máscara rápida também mantém a cor e a opacidade da
sobreposição da Máscara rápida.

Para salvar dentro de um grupo, abra o menu do grupo e escolha
**Salvar seleção atual no grupo…**.

## Nova camada de seleção

Você pode começar uma camada de seleção vazia e pintar a seleção.

Faça uma das seguintes ações:

- Escolha **Selecionar > Nova camada de seleção**.
- Selecione **Nova camada de seleção** na parte inferior do painel Camadas.
- Abra o menu de um grupo e escolha **Nova camada de seleção no grupo…**.

## Linhas de camadas de seleção

A linha de uma camada de seleção tem uma miniatura da seleção, um botão de olho
que mostra ou oculta a sobreposição dela e um botão de carregar ao lado da
miniatura.

Selecionar a linha abre a camada para edição. As camadas de seleção não têm
opacidade, modo de mesclagem nem máscara, e não é possível mesclá-las nem pintar
nelas fora da edição.

![Uma linha de camada de seleção no painel Camadas, com o botão de carregar ao lado da miniatura.](shot:selections/selection-layer-row)

## Editar uma camada de seleção

Enquanto você edita uma camada de seleção, os pincéis, **Preencher** e
**Degradê** alteram a seleção armazenada, como na
[Máscara rápida](/pt-BR/docs/selections/quick-mask/). O painel Propriedades
mostra a **Cor da sobreposição** e a **Opacidade da sobreposição** da camada, e
o **Modo** compartilhado.

A [barra de ações da tela](/pt-BR/docs/selections/working/) na parte inferior da tela tem
a legenda "Editando" seguida do nome da camada. Com a barra de ações da tela oculta, essa
barra não aparece.

- **Carregar** torna a camada a seleção atual e volta para a arte.
- **Inverter** inverte a seleção armazenada e mantém a camada aberta para edição.
- **Voltar à arte** encerra a edição. **Escape** faz o mesmo.

Depois da edição, a camada que você editava antes volta a ficar ativa, ou a
camada de pintura do topo, se não havia nenhuma.

Para refinar a seleção armazenada, abra o menu da camada de seleção e escolha
em **Modificar**. **Selecionar > Expandir seleção…** e os outros comandos de
refinamento do menu **Selecionar** primeiro voltam para a arte e depois alteram
a seleção atual.

![A barra de ações da tela de uma camada de seleção em edição, com Carregar, Inverter e Voltar à arte.](shot:selections/selection-layer-bar)

## Carregar uma camada de seleção

Faça uma das seguintes ações:

- Escolha **Selecionar > Carregar seleção**, escolha a camada e escolha **Carregar seleção**, **Adicionar à seleção**, **Subtrair da seleção**, **Interseção com seleção** ou **Carregar seleção invertida**.
- Selecione o botão de carregar na linha da camada.
- Mantenha **Ctrl** pressionada e clique na miniatura da camada. Acrescente **Shift** para adicionar, **Alt** para subtrair ou **Shift+Alt** para fazer a interseção.
- Enquanto você edita a camada, selecione **Carregar** na barra de ações da tela.

Carregar primeiro volta para a arte. A camada de seleção continua como estava.
As camadas dentro de grupos aparecem em **Carregar seleção** pelo caminho do
grupo, como *Grupo 1 / Seleção 1*.

## Substituir uma camada de seleção

Para armazenar a seleção atual em uma camada de seleção existente, escolha
**Selecionar > Substituir camada de seleção pela seleção atual** e escolha a
camada. Não é possível substituir uma camada de seleção bloqueada.

## Menu da camada de seleção

Clique com o botão direito ou mantenha pressionada a linha de uma camada de
seleção para abrir o menu dela.

- **Carregar seleção**: os mesmos cinco itens do menu Selecionar.
- **Modificar**: **Substituir pela seleção atual**, **Inverter**, **Selecionar tudo**, **Limpar**, **Preencher**, **Expandir…**, **Contrair…**, **Difusão…**, **Borda…** e **Suavizar…**.
- **Organizar**: **Agrupar camadas selecionadas**, **Mover para raiz**, **Mover para cima**, **Mover para baixo** e **Mover para grupo**.
- **Renomear…**, **Duplicar**, **Excluir** e **Bloquear edição**. Em uma camada bloqueada, **Bloquear edição** passa a mostrar **Desbloquear edição**.

**Modificar** fica indisponível em uma camada de seleção bloqueada. Com várias
camadas selecionadas, o menu mostra **Duplicar camadas selecionadas** e
**Excluir camadas selecionadas**.
