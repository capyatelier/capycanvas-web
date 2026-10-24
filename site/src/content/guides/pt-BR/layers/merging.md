---
title: "Mesclar camadas"
description: "Como combinar camadas em uma única camada com os comandos de mesclagem, e o que acontece com as camadas vetoriais."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types", "layers/vector"]
---

Você pode mesclar camadas em uma única camada de pintura, ou duas camadas vetoriais
em uma única camada vetorial. Os comandos de mesclagem ficam perto do fim do menu
**Camada** e do menu de cada camada.

![O menu Camada com Ribbon ativa, mostrando Mesclar camadas recortadas, Mesclar visíveis, Carimbar visíveis e Achatar imagem.](shot:layers/merging-menu)

Cada mesclagem é uma etapa de desfazer. Uma [camada de objeto](/pt-BR/docs/layers/types/) é rasterizada ao ser mesclada. Você não pode mesclar enquanto edita uma camada de seleção ou Máscara rápida, nem durante uma transformação.

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

## Mesclar camadas vetoriais

**Mesclar abaixo** mantém os caminhos quando uma
[camada vetorial](/pt-BR/docs/layers/vector/) é mesclada na camada vetorial abaixo
dela, e os coloca na frente. As duas camadas precisam ter opacidade de 100%,
nenhuma máscara, nenhum recorte e nenhum filtro anexado.

Qualquer outra mesclagem que inclua uma camada vetorial transforma os caminhos em
pixels. Um aviso informa os nomes das camadas, por exemplo "Ao mesclar, os caminhos
em “Line art” viram pixels.", e a mesclagem é executada quando você seleciona o
botão do aviso. **Achatar imagem** acrescenta os nomes ao aviso de camadas ocultas.

![O aviso que diz "Ao mesclar, os caminhos em “Line art” viram pixels.", com um botão Mesclar abaixo.](shot:vector/merge-notice)

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

Escolha **Camada > Mesclar visíveis** para mesclar as camadas comuns visíveis. Papel permanece como a camada de Papel inferior. As camadas ocultas permanecem como estão.

A camada mesclada recebe o nome e a posição da camada mesclada mais baixa. Camadas ocultas recortadas a uma camada mesclada são liberadas. As camadas visíveis devem estar desbloqueadas e os grupos entre elas não podem conter camadas de seleção.

## Carimbar visíveis

Escolha **Camada > Carimbar visíveis** para adicionar uma nova camada no topo da
lista com tudo o que está visível mesclado nela. Todas as outras camadas
continuam.

A nova camada recebe o nome "Visible", cobre a tela e vira a camada ativa.
Camadas bloqueadas não impedem **Carimbar visíveis**.

## Achatar imagem

Escolha **Camada > Achatar imagem** para mesclar as camadas comuns visíveis. Papel permanece como Papel na parte inferior. Camadas ocultas e pixels fora da tela são descartados, mas camadas de seleção fora dos grupos permanecem. As camadas visíveis devem estar desbloqueadas.

![O aviso sobre a tela que diz "Achatar descarta 2 camadas ocultas", com um botão Achatar imagem.](shot:layers/merging-flatten-notice)

Se o desenho tiver camadas ocultas, um aviso sobre a tela informa quantas são,
por exemplo "Achatar descarta 2 camadas ocultas". Nada muda até você
selecionar **Achatar imagem** no aviso.
