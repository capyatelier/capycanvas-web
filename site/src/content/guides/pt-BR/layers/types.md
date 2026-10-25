---
title: "Tipos de camada"
description: "Camadas de pintura, objeto, vetoriais, Papel, grupo, preenchimento, filtro e seleção e as regras de cada uma."
related: ["layers/panel", "layers/vector", "layers/paper", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![O painel Camadas com uma camada de seleção, um grupo, uma camada de pintura, um filtro, camadas de preenchimento, uma camada vetorial e Papel.](shot:layers/types-rows)

## Camada de pintura

Uma camada de pintura contém pixels no espaço de cor do desenho. Pincéis, **Preencher**, **Degradê** e **Forma** pintam nesse tipo de camada.

Escolha **Camada > Novo > Nova camada** ou selecione **Nova camada** na parte inferior do painel Camadas. Um novo desenho começa com **Tinta atual** acima de Papel.

## Camada de objeto

Uma camada de objeto mantém o tamanho, a profundidade de bits e o perfil de cores da imagem importada. Importar uma imagem como camada, soltá-la na tela ou colá-la de outro aplicativo cria uma camada de objeto.

Você pode mover, redimensionar e girar uma camada de objeto sem reamostrar sua origem repetidamente. Escolha **Camada > Rasterizar camada** quando precisar pintar nos pixels ou usar um comando que exige uma camada de pintura. A rasterização a converte para o espaço de cor, a profundidade de bits e a grade de pixels do desenho.

## Camada vetorial

Uma camada vetorial contém caminhos em vez de pixels. Escolha **Camada > Novo > Nova camada vetorial** ou selecione **Nova camada vetorial** na parte inferior do painel Camadas. Um selo de caminho marca a miniatura dela. Veja [Camadas vetoriais](/pt-BR/docs/layers/vector/).

## Papel

Papel fornece a cor de fundo e a textura à qual os pincéis com **Intensidade da textura** reagem. Permanece na parte inferior da pilha de camadas e tem miniaturas de cor e textura.

Um desenho pode conter um Papel. Papel não pode ter uma máscara, se tornar uma camada de recorte, ser movido acima de camadas comuns nem ser mesclado em uma camada comum. Consulte [Papel](/pt-BR/docs/layers/paper/) para a textura, a iluminação e os demais ajustes.

## Grupo

Um grupo contém camadas em uma pasta recolhível. Escolha **Camada > Novo > Novo grupo**, selecione **Novo grupo** abaixo da lista de camadas ou escolha **Camada > Organizar > Agrupar camadas selecionadas**.

Um grupo combina seu conteúdo antes de se misturar com as camadas abaixo, a menos que [Atravessar](/pt-BR/docs/layers/settings/) esteja ativada.

## Camadas de preenchimento

**Cor sólida** e **Preenchimento de degradê** cobrem a tela com conteúdo gerado. Adicione uma em **Camada > Novo**, no menu **Filtro > Preencher** ou no painel **Filtros**.

Selecione a miniatura de Cor sólida para abrir **Editar cor**. Adicione uma máscara para pintar a área visível de um preenchimento. Você pode recortar uma camada de preenchimento, mas não pode recortar outras camadas a ela.

## Camadas de filtro

Uma camada de filtro altera as camadas abaixo em vez de conter pixels. Sua linha mostra o ícone e o nome do filtro. Consulte [Como os filtros se aplicam](/pt-BR/docs/filters/how-filters-apply/).

## Camadas de seleção

Uma camada de seleção armazena uma seleção. Selecione **Nova camada de seleção** abaixo da lista de camadas para adicionar uma. Ela não tem opacidade, modo de mesclagem, máscara, recorte nem ajuste de referência e não pode ser mesclada.
