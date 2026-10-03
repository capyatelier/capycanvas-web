---
title: "Filtros e ajustes"
description: "Adicione um filtro editável e altere suas configurações sempre que desejar."
purpose: "Os filtros alteram a aparência das camadas abaixo deles, desde simples ajustes de brilho e cor até desfoques e efeitos artísticos. Cada filtro tem sua própria camada, então você pode ajustá-lo, ocultá-lo ou removê-lo posteriormente sem tocar na tinta por baixo."
techniques: ["Encontre e adicione um filtro.", "Altere suas configurações em Propriedades.", "Limite um filtro a parte do desenho."]
figure: "1: Painel Filtros. 2: A camada de ajuste em Camadas. 3: Guia Propriedades para editá-lo."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1: Painel Filtros. 2: A camada de ajuste em Camadas. 3: Guia Propriedades para editá-lo."}
---

## Adicionar um filtro

Selecione a camada acima da qual o filtro deve ficar e abra o painel **Filters**. Os filtros são classificados em grupos como Tom, Cor, Desfoque e Artístico, e você pode digitar na caixa de pesquisa para encontrar um por nome, como **Curves** ou **Gaussian Blur**. Escolha um filtro para adicioná-lo como uma nova camada. O menu **Filter** na parte superior da janela lista os mesmos filtros.

Em Sketch, o botão **Filters** na barra de título abre uma gaveta. Escolha um grupo à esquerda, depois um filtro e suas configurações aparecerão à direita.

## Alterar as configurações

Selecione a camada do filtro e abra **Properties** para ver suas configurações. Alguns filtros usam controles deslizantes, enquanto outros usam uma curva ou uma cor. Altere uma configuração de cada vez e observe o desenho conforme você avança. Se quiser ver como os tons da imagem se espalham enquanto você trabalha, abra **View → Histogram…**.

Oculte e mostre a camada de filtro para comparar o resultado com o original ou diminua sua opacidade para tornar todo o efeito mais suave. Você pode voltar às Propriedades a qualquer momento para alterar as configurações novamente.

## Limite onde se aplica

Um filtro afeta tudo abaixo dele na lista de camadas. Para mantê-lo afastado de parte do desenho, adicione uma [mask](/pt-BR/docs/layers/masks/) à camada de filtro ou coloque o filtro dentro de um grupo para que afete apenas as camadas desse grupo. Mantenha a arte de linha e outros detalhes que você não deseja alterar acima do filtro.

Quando você usa vários filtros, a ordem deles é importante, então tente movê-los para cima ou para baixo se o resultado não for o esperado. Para obter um exemplo completo com uma foto, consulte [Editar uma foto](/pt-BR/docs/filters/image-editing/).
