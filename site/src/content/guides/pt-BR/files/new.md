---
title: "Novos desenhos"
description: "Tamanho da folha, resolução, ajustes de papel e cor e predefinições do diálogo Novo desenho."
related: ["layers/paper", "color-management/color-spaces", "layers/types", "files/open-save"]
---

Escolha **Arquivo > Novo…**, pressione **Ctrl+N** quando disponível ou selecione **Novo…** na barra Comandos. O novo desenho abre em sua própria aba.

![O diálogo Novo desenho com dimensões A4, resolução de 300 ppi, configurações de cor e Papel e Criar.](shot:files/new-dialog)

## Predefinições

Escolha uma predefinição por categoria, pesquise pelo nome ou selecione uma usada recentemente. Uma predefinição preenche as dimensões, a resolução e os ajustes de cor e Papel.

![O navegador de predefinições de Novo desenho com as categorias Esboço, Aquarela, Pastel, Tela, Técnica mista, Quadrinhos, Impressos e Digital.](shot:files/new-presets)

Salve os ajustes atuais como uma predefinição nomeada para reutilizá-los. Abra o menu de uma predefinição salva para renomeá-la ou excluí-la. As predefinições incluídas não podem ser renomeadas nem excluídas.

## Folha

A prévia mostra as proporções e a orientação da folha. Digite um nome para o desenho, defina **L** e **A** e escolha px, pol, cm ou mm como unidade. Use o controle de vínculo para manter as proporções atuais e o controle de orientação para trocar a largura e a altura.

**Resolução** define os pixels por polegada usados nas dimensões físicas e na escala da [textura do Papel](/pt-BR/docs/layers/paper/). Alterar apenas a resolução altera os metadados do tamanho de impressão sem reamostrar o desenho.

O diálogo mostra as dimensões em pixels resultantes e a capacidade estimada. Não é possível criar desenhos cujos ajustes ultrapassem o limite atual do dispositivo; o limite depende das dimensões, da profundidade de bits e dos recursos gráficos disponíveis.

## Papel

![A gaveta Papel de Novo desenho com Sem papel, as miniaturas de papel e Visibilidade da textura.](shot:files/new-paper)

Selecione a miniatura de textura em **Papel** para escolher uma textura de Papel incluída ou importada para o novo desenho. **Visibilidade da textura**, na parte de baixo da gaveta, define o mesmo valor que nas [Propriedades](/pt-BR/docs/layers/paper/) da camada de Papel, e a miniatura o mostra abaixo do nome da textura. **Importar…** é a última miniatura. Ela adiciona uma imagem à biblioteca de papéis e a seleciona.

Escolha **Sem papel** para criar o desenho sem uma camada de Papel. **Visibilidade da textura** fica então indisponível.

![Opções Cor do papel e Transparente em Novo desenho.](shot:files/new-paper-color)

**Cor** define a cor do Papel. **Transparente** mantém a camada de Papel, mas a inicia oculta. Isso difere de **Sem papel**, que não cria uma camada de Papel.

## Ajustes de cor

Escolha **Espaço de cores**, **Profundidade de bits** e **Mesclagem** do desenho. Profundidades de bits de ponto flutuante usam a mistura **Luz linear**. Consulte [Espaço de cor, profundidade de bits e mistura](/pt-BR/docs/color-management/color-spaces/).

## Criar o desenho

Selecione **Criar**. O desenho começa com uma camada de pintura vazia, **Tinta atual**, acima do Papel escolhido quando um foi incluído.

O diálogo mantém as últimas opções usadas para criar um desenho. Selecionar uma predefinição as substitui pelos valores daquela predefinição.
