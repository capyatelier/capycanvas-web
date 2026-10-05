---
title: "Modos de mesclagem"
description: "Como definir o modo de mesclagem e a opacidade de uma camada, e os modos do menu de mesclagem."
related: ["layers/settings", "layers/panel", "color-management/color-spaces", "color-management/hdr"]
---

Você pode definir como uma camada se combina com as camadas abaixo dela.

![O menu de mesclagem aberto sobre o painel Camadas, com Normal marcado.](shot:layers/blend-menu)

## Escolher um modo de mesclagem

Faça uma das seguintes ações:

- Escolha **Camada > Modo de mesclagem** e um modo.
- Selecione **Modo de mesclagem da camada** no canto superior esquerdo do cabeçalho do painel Camadas e escolha um modo.
- Escolha um modo em **Modo de mesclagem** no painel **Propriedades**.
- Digite o nome do modo na [busca de comandos](/pt-BR/docs/start/command-search/).

O modo atual tem uma marca de verificação no menu, e o nome dele aparece no
botão do cabeçalho. O subtítulo da linha mostra o modo quando ele não é Normal.
As camadas novas usam Normal.

Não é possível mudar o modo de mesclagem de uma camada de seleção ou de uma
camada bloqueada. [Mesclar abaixo](/pt-BR/docs/layers/merging/) exige as duas
camadas em Normal. Os modos de mesclagem misturam as cores no espaço de
mesclagem do desenho, definido em **Editar > Mesclagem** (consulte
[Espaço de cores, profundidade de bits e mesclagem](/pt-BR/docs/color-management/color-spaces/)).

## Modos do menu de mesclagem

O menu de mesclagem lista os modos nestas seções:

- **Atravessar** (só em grupos, consulte [Atravessar](/pt-BR/docs/layers/settings/)), **Normal**
- **Escurecer**, **Multiplicar**, **Superexposição de cor**, **Superexposição linear**
- **Clarear**, **Divisão**, **Subexposição de cor**, **Adicionar**
- **Sobreposição**, **Luz suave**, **Luz intensa**, **Luz vívida**, **Luz linear**, **Luz pontual**, **Mistura sólida**
- **Diferença**, **Exclusão**, **Subtrair**, **Dividir**
- **Matiz**, **Saturação**, **Cor**, **Luminosidade**

## Modos em desenhos HDR

Em um [desenho HDR](/pt-BR/docs/color-management/hdr/), o menu de mesclagem
deixa de fora **Sobreposição**, **Luz suave**, **Luz intensa**,
**Superexposição de cor**, **Subexposição de cor**, **Luz vívida**,
**Mistura sólida** e **Exclusão**. Esses modos só são definidos para cores entre
o preto e o branco. Uma camada que já usa um deles continua com ele, e o menu
ainda lista esse modo para a camada.

## Opacidade

Faça uma das seguintes ações:

- Arraste **Opacidade da camada** no cabeçalho do painel Camadas ou digite um valor de 0 a 100.
- Mude **Opacidade** no painel **Propriedades**.
- Digite "Opacidade da camada" e um valor na busca de comandos.

O subtítulo da linha mostra a opacidade quando ela está abaixo de 100%. Não é
possível mudar a opacidade de uma camada de seleção ou de uma camada bloqueada,
nem enquanto a Máscara rápida está ativada.
