---
title: "Papel"
description: "Cor e textura do Papel, papéis importados, escala, iluminação e restrições de camada."
related: ["layers/types", "layers/panel", "brushes/dry-media", "files/new"]
---

Papel fornece a cor de fundo do desenho e a textura à qual os pincéis com **Intensidade da textura** reagem.

## Linha de Papel

![Uma linha de Papel com suas miniaturas de cor e textura.](shot:layers/paper-row)

Papel permanece abaixo das camadas comuns. Sua primeira miniatura abre **Editar cor** e a miniatura de textura abre **Escolher textura**. Selecione a linha para editar seus ajustes em **Propriedades**.

Você pode ocultar ou excluir Papel. Se o desenho não tiver Papel, selecione **Adicionar papel** na parte inferior do painel Camadas para restaurá-lo.

![Adicionar papel abaixo da lista de camadas.](shot:layers/add-paper)

Só pode haver um Papel em um desenho. Papel não pode ter uma máscara, se tornar uma camada de recorte, ser movido acima de outra camada nem ser usado como camada de seleção.

## Escolher uma textura

Selecione a miniatura de textura na linha de Papel ou **Escolher textura** em **Propriedades**. Escolha um papel e selecione **Usar textura**.

![Papéis incluídos em Escolher textura.](shot:layers/paper-choose-texture)

A biblioteca é uma grade com rolagem, ordenada dos papéis de aquarela e de desenho até texturas de superfície como concreto, madeira e areia. Os papéis com direção de grão vêm em pares **horizontal** e **vertical**.

**Importar…** adiciona uma imagem, RGB ou em tons de cinza, ao fim da grade como textura de papel reutilizável. Os papéis importados são incorporados ao desenho.

Abra o menu de um papel importado para **Renomear…** ou **Excluir**. Um papel incorporado em um desenho que não está na biblioteca mostra **Adicionar à biblioteca** em seu lugar.

![O menu de um papel importado.](shot:layers/paper-imported-menu)

## Propriedades

![Controles de Papel em Propriedades.](shot:layers/paper-properties)

### Cor

Define a cor do Papel.

### Textura

Abre **Escolher textura**.

### Escala

Define a escala física da textura, de 25% a 400%. A tela mostra brevemente o relevo da textura enquanto você altera a escala.

### Visibilidade da textura

Define quanto a iluminação da textura aparece na imagem final, de 0% a 300%. Em 0%, a iluminação da textura está desativada.

### Luz

Define a direção da luz sobre a textura do papel.

### Visível através da tinta

Define quanto da iluminação do papel permanece visível sobre a pintura acima dele. Em 0%, a pintura opaca em modo Normal cobre a iluminação; em 100%, a iluminação afeta a imagem inteira.

![Traços na tela ao lado do painel Propriedades de Papel, definido como Linho com Visibilidade da textura 55%, Luz 130° e Visível através da tinta 100%.](shot:layers/paper-lighting)

As exportações do aplicativo nativo incluem a iluminação visível do papel. O editor web atualmente exporta sem iluminação do papel. A breve prévia da textura exibida após alterar **Textura** ou **Escala** não é exportada.

## Traços e geometria

Novos traços de pincéis com **Intensidade da textura** usam o Papel mais próximo na sua camada ou abaixo dela. Ocultar Papel não impede que sua textura afete novos traços. Alterar a textura ou sua escala não altera as marcas já desenhadas.

Papel usa a resolução de impressão do desenho para manter sua escala física. **Imagem > Tamanho da imagem…** pode alterar essa resolução. Redimensionar ou girar a imagem reamostra Papel com o desenho; recortar não altera sua escala.
