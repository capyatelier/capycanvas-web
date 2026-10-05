---
title: "Como os filtros se aplicam"
description: "Como um filtro em uma camada própria e um filtro anexado a uma camada alteram a imagem."
related: ["filters/adding", "layers/masks", "layers/merging", "layers/settings"]
---

Um filtro é uma camada sem pintura própria. As configurações dele continuam
editáveis no painel **Propriedades**.

![O painel Camadas com Curvas e Claridade anexados à foto do terrário, e um filtro Vinheta em uma camada própria acima deles.](shot:filters/layers-chain)

| | Filtro em camada própria | Filtro anexado |
| --- | --- | --- |
| Adicionado com | O painel **Filtros**, o menu **Filtro**, **Ajustar** na barra de seleção | **Adicionar filtro** |
| Altera | Todas as camadas abaixo dele no grupo | Só a camada à qual está anexado |
| No painel Camadas | Uma linha própria | Uma linha unida à linha de baixo por um elo de corrente |

## Filtro em camada própria

Um filtro novo entra acima da camada selecionada e das camadas recortadas por
ela ou anexadas a ela. Dentro de um grupo, o filtro altera só as camadas abaixo
dele nesse grupo, a menos que o grupo esteja com
[Atravessar](/pt-BR/docs/layers/settings/).

## Filtro anexado

Você pode anexar filtros a uma camada de pintura, a uma camada de foto ou a um
grupo que não esteja com Atravessar. Selecione a camada e depois selecione
**Adicionar filtro** na parte inferior do painel Camadas, no painel
**Propriedades** ou no menu da camada.

Os filtros anexados se aplicam de baixo para cima na cadeia, depois da máscara
da camada e antes da opacidade e do modo de mesclagem dela. Em uma base de
recorte, eles também mudam onde as camadas recortadas aparecem. Desfoques e
distorções como **Desfoque gaussiano** e **Redemoinho** podem espalhar a
pintura da camada para além das bordas dela.

Mover, duplicar ou ocultar a camada faz o mesmo com os filtros anexados a ela.
Se você excluir a camada, os filtros anexados continuam como filtros em camadas
próprias.

## Aplicar a *camada* e Aplicar às camadas abaixo

Você pode alternar um filtro selecionado entre os dois tipos.

Faça uma das seguintes ações:

- Escolha **Camada > Configurações da camada > Aplicar a *camada*** ou **Aplicar às camadas abaixo**.
- Selecione o botão de elo de corrente no cabeçalho do painel Camadas, no lugar de **Recortar pela camada abaixo**.
- Arraste o filtro para a miniatura de uma camada para anexá-lo a essa camada.

![O cabeçalho do painel Camadas com o botão de elo de corrente para um filtro selecionado.](shot:filters/attachment-button)

**Aplicar a *camada*** anexa o filtro à camada mais próxima abaixo.
**Aplicar às camadas abaixo** coloca o filtro em uma camada própria, acima da
camada à qual ele estava anexado e das camadas recortadas por ela.

O botão fica indisponível enquanto o filtro ou a camada abaixo está bloqueado.
Quando a camada abaixo não é uma camada de pintura, uma camada de foto nem um
grupo, a dica do botão mostra "Não há camada abaixo à qual vincular".

## Seleções como máscaras de filtro

Se houver uma seleção ativa quando você adiciona um filtro, a seleção vira a
[máscara](/pt-BR/docs/layers/masks/) do filtro. Um único **Desfazer** remove o
filtro e restaura a seleção.

## Aplicar efeito à camada abaixo

Você pode mesclar um filtro na camada abaixo dele como pintura.

Selecione o filtro e faça uma das seguintes ações:

- Escolha **Camada > Aplicar efeito à camada abaixo** ou escolha o comando no menu da camada do filtro.
- Pressione **Ctrl+E**.

![O menu da camada de um filtro com Aplicar efeito à camada abaixo.](shot:filters/apply-effect-menu)

Um filtro em camada própria é aplicado só à camada logo abaixo dele. Em um
filtro anexado, a camada e toda a cadeia de filtros dela viram pintura. Se essa
camada estiver recortada ou tiver camadas recortadas por ela, o comando mostra
**Mesclar camadas recortadas** (consulte [Mesclar camadas](/pt-BR/docs/layers/merging/)).

O filtro e a camada abaixo precisam estar visíveis, desbloqueados e em Normal. O comando fica indisponível quando a camada logo abaixo é um filtro anexado a outra camada.
