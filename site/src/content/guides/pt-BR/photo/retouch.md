---
title: "Retoque"
description: "Etapa 2 do tutorial de edição de fotos: poeira e uma mancha removidas com os pincéis de correção em uma camada acima da foto."
related: ["retouch/clone-heal", "layers/settings", "layers/working"]
---

Esta etapa produz uma camada *Retouch* que cobre a poeira e uma mancha da foto.
A camada da foto não muda.

## 1. Adicionar uma camada de retoque

1. Selecione **Nova camada** na parte inferior do painel Camadas e renomeie a nova camada como *Retouch*.
2. Escolha **Camada > Configurações da camada > Usar camada abaixo como referência** ([Configurações da camada](/pt-BR/docs/layers/settings/)).

A camada da foto vira uma camada de referência, e um ícone de farol aparece ao
lado do olho na linha dela. As ferramentas de correção copiam das camadas de
referência por padrão e pintam em *Retouch*.

![O painel Camadas com Retouch acima da camada terrarium, que mostra o ícone de referência.](shot:photo/retouch-layers)

## 2. Remover a poeira

O **Pincel de correção pontual** substitui o que você pinta por textura da área
próxima mais parecida quando você levanta a caneta
([Clonar e corrigir](/pt-BR/docs/retouch/clone-heal/)). O exemplo remove a
poeira do vidro na base do terrário.

1. Escolha **Exibir > Pixels reais** ou pressione **Ctrl+1** para ver a foto em 100%.
2. Selecione **Pincel de correção pontual** na barra de ferramentas Ferramentas ou pressione **S** até ele ficar selecionado.
3. Pressione **]** até o pincel ficar maior que os pontos de poeira.
4. Pinte sobre cada ponto de poeira.

## 3. Remover a mancha

O **Pincel de correção** pinta com pixels copiados de uma origem e depois os
ajusta à cor e ao brilho ao redor do traço.

1. Clique com o botão direito em **Pincel de correção pontual** na barra de ferramentas Ferramentas, ou mantenha-o pressionado, e escolha **Pincel de correção**.
2. Mantenha **Alt** pressionada e clique em uma área limpa ao lado da mancha, ou selecione **Definir origem** em **Opções da ferramenta** e clique na área limpa.
3. Pinte sobre a mancha.

![O disco de origem do Pincel de correção sobre o vidro, com a barra de opções de origem.](shot:photo/retouch-disc-bar)

Um disco na tela marca a origem. Arraste o disco para mover a origem, ou
selecione o disco para mostrar a barra dele.

Para comparar com a foto original, oculte *Retouch*.

Próxima etapa: [Ajustar e exportar](/pt-BR/docs/photo/adjust/).
