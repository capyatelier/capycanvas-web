---
title: "Mesclar camadas"
description: "Como combinar camadas em uma única camada de pintura com os comandos de mesclagem."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types"]
---

Você pode mesclar camadas em uma única camada de pintura. Os comandos de
mesclagem ficam perto do fim do menu **Camada** e do menu de cada camada.

![O menu Camada com Ribbon ativa, mostrando Mesclar camadas recortadas, Mesclar visíveis, Carimbar visíveis e Achatar imagem.](shot:layers/merging-menu)

Cada mesclagem é um passo de desfazer. Uma [camada de foto](/pt-BR/docs/layers/types/)
perde a foto original quando você a mescla. Não é possível mesclar enquanto você
edita uma camada de seleção ou a Máscara rápida, nem durante uma transformação.

## Mesclar abaixo

Você pode mesclar a camada ativa com a camada abaixo dela.

Faça uma das seguintes ações:

- Escolha **Camada > Mesclar abaixo**.
- Pressione **Ctrl+E** (não funciona no mapa de atalhos Estilo GIMP).

A camada mesclada fica com o nome, a posição, o recorte e o **Bloqueio alfa** da
camada de baixo, com opacidade de 100%, modo de mesclagem Normal e sem máscara.
Ela é uma referência se qualquer uma das duas camadas era.

As duas camadas precisam estar visíveis, desbloqueadas e em Normal. A camada de
baixo não pode ser um filtro e não pode estar recortada, a menos que a camada
ativa também esteja.

## Mesclar camadas recortadas

Com uma base de recorte ativa, **Mesclar abaixo** passa a mostrar
**Mesclar camadas recortadas**. O comando mescla a base e as camadas recortadas
visíveis em uma só camada, com o nome da base. As camadas recortadas ocultas
continuam recortadas pela camada mesclada.

O comando também mostra **Mesclar camadas recortadas** em um filtro recortado ou
em um filtro anexado a uma camada que está recortada ou que é base de recorte. A
base precisa estar visível e em Normal, e pelo menos uma camada recortada
precisa estar visível.

## Aplicar efeito à camada abaixo

Com um filtro ativo, **Mesclar abaixo** passa a mostrar
**Aplicar efeito à camada abaixo**, a menos que o filtro faça parte de uma pilha
de recorte. O comando aplica o filtro à camada abaixo dele ou à camada à qual
ele está anexado (consulte
[Como os filtros se aplicam](/pt-BR/docs/filters/how-filters-apply/)).

## Mesclar grupo

Com um grupo ativo, **Camada > Mesclar grupo** aparece no lugar de
**Mesclar abaixo**.

O grupo vira uma só camada, com o modo de mesclagem e a opacidade do grupo.
Atravessar vira Normal. A máscara do grupo é aplicada, e as camadas ocultas
dentro do grupo são descartadas.

O grupo precisa estar visível e desbloqueado, e não pode conter camadas de
seleção.

## Mesclar visíveis

Escolha **Camada > Mesclar visíveis** para mesclar todas as camadas visíveis,
incluindo **Papel**, em uma só camada. As camadas ocultas continuam como estão.

A camada mesclada fica com o nome e a posição da camada visível mais baixa
(**Papel**, se estiver visível). As camadas ocultas que estavam recortadas por
uma camada mesclada são liberadas. As camadas visíveis precisam estar
desbloqueadas, e os grupos entre elas não podem conter camadas de seleção.

## Carimbar visíveis

Escolha **Camada > Carimbar visíveis** para adicionar uma nova camada no topo da
lista com tudo o que está visível mesclado nela. Todas as outras camadas
continuam.

A nova camada recebe o nome "Visible", cobre a tela e vira a camada ativa.
Camadas bloqueadas não impedem **Carimbar visíveis**.

## Achatar imagem

Escolha **Camada > Achatar imagem** para mesclar todas as camadas visíveis em uma
só camada. As camadas ocultas e os pixels fora da tela são descartados, mas as
camadas de seleção fora de grupos continuam. As camadas visíveis precisam estar
desbloqueadas.

![O aviso sobre a tela que diz "Flattening discards 2 hidden layers", com um botão Flatten.](shot:layers/merging-flatten-notice)

Se o desenho tiver camadas ocultas, um aviso sobre a tela informa quantas são,
por exemplo "Flattening discards 2 hidden layers". Nada muda até você
selecionar **Flatten** no aviso.
