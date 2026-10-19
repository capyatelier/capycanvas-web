---
title: "Tipos de camada"
description: "Camadas de pintura, objeto, Papel, grupo, preenchimento, filtro e seleção e as regras de cada uma."
related: ["layers/panel", "layers/paper", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Os tipos de camada atuais no painel Camadas.](shot:layers/types-rows)

## Camada de pintura

Uma camada de pintura contém pixels no espaço de cor do desenho. Pincéis, **Preencher**, **Degradê** e **Forma** pintam nesse tipo de camada.

Escolha **Camada > Novo > Nova camada** ou selecione **Nova camada** na parte inferior do painel Camadas. Um novo desenho começa com **Tinta atual** acima de Papel.

## Camada de objeto

Uma camada de objeto mantém uma imagem importada com seu próprio tamanho, profundidade de bits e perfil de cor. Abrir ou importar uma imagem, soltar uma imagem na tela e colar uma imagem de outro aplicativo criam camadas de objeto.

Você pode mover, redimensionar e girar uma camada de objeto sem reamostrar sua origem repetidamente. Escolha **Camada > Rasterizar camada** quando precisar pintar nos pixels ou usar um comando que exige uma camada de pintura. A rasterização a converte para o espaço de cor, a profundidade de bits e a grade de pixels do desenho.

## Papel

Papel fornece a cor de fundo e a textura usada pelos traços de mídia seca. Permanece na parte inferior da pilha de camadas e tem miniaturas de cor e textura.

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
