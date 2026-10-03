---
title: "Grupos e mistura"
description: "Mantenha as camadas relacionadas juntas e altere a forma como suas cores se combinam."
purpose: "À medida que um desenho cresce, os grupos mantêm as camadas relacionadas juntas para que a lista fique fácil de ler. Os modos de mesclagem alteram a forma como as cores de uma camada se misturam com as camadas abaixo, o que é útil para sombras, realces e tonalidades de cores."
techniques: ["Coloque camadas relacionadas em um grupo.", "Experimente um modo de mesclagem em uma camada de sombreamento.", "Mantenha uma longa lista de camadas organizada."]
figure: "1: Pilha de camadas. 2: Modo de mesclagem. 3: Botão Novo grupo."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: Pilha de camadas. 2: Modo de mesclagem. 3: Botão Novo grupo."}
---

## Camadas relacionadas ao grupo

Selecione **New group** na parte inferior do painel Camadas e arraste as camadas para ele. Por exemplo, você pode manter as cores, o sombreamento e a arte de linha de um personagem em um grupo e o plano de fundo em outro. Selecione a seta ao lado de um grupo para dobrá-lo quando não precisar ver seu conteúdo.

Ocultar um grupo esconde tudo dentro dele. Se uma camada parece ter desaparecido mesmo estando de olho, verifique se o grupo em que ela está está oculto. Mantenha as camadas cortadas diretamente acima da camada base ao movê-las para um grupo, para que permaneçam anexadas a ele.

## Experimente um modo de mesclagem

Selecione uma camada de sombreamento e abra o menu do modo de mesclagem acima da lista. **Multiply** escurece as cores abaixo, o que o torna bom para sombras. **Screen** os ilumina, o que combina com brilhos e realces. **Normal** simplesmente pinta sobre o que está abaixo, e os outros modos misturam cores à sua maneira.

Oculte e mostre a camada para comparar o resultado. Se o efeito for muito forte, diminua a opacidade da camada em vez de repintá-la.

## Mantenha a lista organizada

Os grupos mantêm uma longa lista organizada enquanto cada camada permanece editável, e você pode desmontar os grupos nos quais não está trabalhando. Se você precisar de uma única imagem plana para outro aplicativo, [exporte](/pt-BR/docs/output/export/) uma cópia e mantenha o arquivo `.capy` com todas as suas camadas.

Para alterações de cores que você gostaria de continuar ajustando, como brilho ou saturação, use uma camada de filtro de [Filtros e ajustes](/pt-BR/docs/filters/overview/) em vez de pintar a alteração em uma camada.
