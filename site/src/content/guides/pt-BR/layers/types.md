---
title: "Tipos de camada"
description: "Os tipos de camada de um desenho e as regras de cada um."
related: ["layers/panel", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![O painel Camadas com uma camada de seleção, um grupo com Atravessar, um filtro Curvas, uma camada de Preenchimento de degradê, uma camada de Cor sólida, a camada de pintura Tinta atual e Papel.](shot:layers/types-rows)

## Camada de pintura

Uma camada de pintura contém pixels pintados. Os pincéis, **Preencher**,
**Degradê** e **Forma** adicionam pixels apenas a camadas de pintura.

Para adicionar uma camada de pintura, escolha **Camada > Novo > Nova camada**
ou selecione **Nova camada** na parte inferior do painel Camadas.

Um desenho novo começa com uma camada de pintura vazia, **Tinta atual**, acima
de **Papel**. Só as camadas de pintura têm **Bloqueio alfa**, **Modo de cor**,
**Limpar camada inteira** e **Aplicar máscara à camada**.

## Grupo

Um grupo reúne camadas em uma pasta que pode ser recolhida em uma só linha.

Faça uma das seguintes ações:

- Escolha **Camada > Novo > Novo grupo**.
- Selecione **Novo grupo** na parte inferior do painel Camadas.
- Selecione várias linhas e escolha **Camada > Organizar > Agrupar camadas selecionadas**.

Selecione a miniatura da pasta para expandir ou recolher o grupo. Um selo na
pasta marca um grupo com [Atravessar](/pt-BR/docs/layers/settings/).

Um grupo primeiro combina as camadas dele e depois mescla o resultado com as
camadas abaixo, a menos que esteja com Atravessar. Um grupo não tem pixels
próprios.

## Camadas de preenchimento

Uma camada de preenchimento cobre a tela com uma cor (**Cor sólida**) ou um
degradê (**Preenchimento de degradê**).

Faça uma das seguintes ações:

- Escolha **Camada > Novo > Preenchimento de cor sólida** ou **Preenchimento de degradê**.
- Escolha **Filtro > Preencher > Cor sólida** ou **Preenchimento de degradê**.
- Selecione **Cor sólida** ou **Preenchimento de degradê** na categoria **Preencher** do painel **Filtros**.

A camada de preenchimento fica acima da camada ativa e das camadas recortadas
por ela. Uma nova Cor sólida usa a cor de pintura atual, e um novo
Preenchimento de degradê vai do preto ao branco. Se houver uma seleção ativa,
ela vira a máscara da camada de preenchimento.

Para mudar a cor de uma Cor sólida, selecione a miniatura dela para abrir
[Editar cor](/pt-BR/docs/color/edit-color/) ou mude **Cor** no painel
**Propriedades**. [Degradê](/pt-BR/docs/drawing/gradient/) descreve as
configurações de um Preenchimento de degradê.

Para pintar em uma camada de preenchimento, adicione uma máscara. Os pincéis
pintam a máscara, não o preenchimento. Você pode recortar uma camada de
preenchimento, mas não pode recortar outras camadas por ela nem anexar filtros
a ela.

## Camadas de filtro

Uma camada de filtro contém um filtro em vez de pixels. A linha dela mostra o
ícone e o nome do filtro. Consulte [Adicionar e editar filtros](/pt-BR/docs/filters/adding/)
e [Como os filtros se aplicam](/pt-BR/docs/filters/how-filters-apply/).

Com uma camada de filtro selecionada, os pincéis pintam na camada abaixo dela
ou na camada à qual ela está anexada. Se o filtro tiver uma máscara, os pincéis
pintam a máscara.

## Camadas de seleção

Uma camada de seleção armazena uma seleção. Para adicionar uma, selecione
**Nova camada de seleção** na parte inferior do painel Camadas.

O botão à direita da miniatura carrega a seleção armazenada. O olho oculta ou
mostra a sobreposição da seleção na tela. Uma camada de seleção não tem
opacidade, modo de mesclagem, máscara, recorte nem configuração de referência,
e não pode ser mesclada. [Camadas de seleção](/pt-BR/docs/selections/selection-layers/)
explica como editar a seleção armazenada.

## Papel

**Papel** é uma camada de preenchimento de **Cor sólida** branca na base de um
desenho novo. Você pode mudar a cor de **Papel**, ocultar ou excluir essa camada
como qualquer outra camada de preenchimento.

A camada **Papel** começa oculta quando **Fundo** está definido como **Transparente** na
caixa de diálogo [Novo desenho](/pt-BR/docs/files/new/) e em uma foto que você abre.

## Camadas de foto

Uma camada de foto é uma camada de pintura que mantém a foto original no
tamanho, na profundidade de bits e no perfil de cor dela. O que você pinta e
apaga fica armazenado por cima da foto.

Para adicionar uma camada de foto, faça uma das seguintes ações:

- Escolha **Arquivo > Abrir…** e selecione uma foto.
- Escolha **Arquivo > Importar imagem como camada…**.
- Solte um arquivo de imagem na tela.

Enquanto o original é mantido, **Camada > Configurações da camada** lista estes comandos:

- **Reverter para foto original** descarta a pintura, o que foi apagado e as máscaras aplicadas. A posição, a máscara, a opacidade e o modo de mesclagem continuam, e **Modo de cor** volta para **Todas as cores**.
- **Rasterizar origem…** converte o original para o espaço de cores e a profundidade de bits do desenho, em tamanho real. Depois disso, **Reverter para foto original** fica indisponível.
- **Reparar perfil de origem…** muda o perfil com que o original é lido: **sRGB**, **Display P3**, **Adobe RGB (1998)** ou **ProPhoto RGB**. Se a camada tiver pintura, **Adicionar origem corrigida** adiciona a foto corrigida como uma nova camada.

**Reverter para foto original** e **Rasterizar origem…** também ficam no menu
**Editar**. **Limpar camada inteira** também descarta a foto original.
