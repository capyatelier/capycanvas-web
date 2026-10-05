---
title: "Mover e Transformar"
description: "Como mover e transformar camadas e pixels selecionados com a ferramenta Operação e com Transformar."
related: ["selections/working", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Você pode mover camadas e pixels selecionados com a ferramenta **Operação**, e
dimensioná-los, girá-los, incliná-los, distorcê-los ou deformá-los com
**Transformar**.

## Ferramenta Operação

Faça uma das seguintes ações:

- Abra o menu de uma camada no painel Camadas e escolha **Mover camada / máscara**.
- Pressione **O**.
- Em Pintura e Foto, selecione **Operação / Transformar** na barra de ferramentas Ferramentas. Clique com o botão direito no botão ou mantenha-o pressionado para escolher **Operação**.
- Digite "Operação" na [busca de comandos](/pt-BR/docs/start/command-search/).

Esboço não tem o botão **Operação**.

## Mover camadas

Sem seleção, arraste na tela para mover as camadas selecionadas. As teclas de
seta deslocam as camadas 1 px, ou 10 px com **Shift**.

Não é possível mover uma camada bloqueada.

## Mover pixels selecionados

Com uma seleção, arraste para mover os pixels selecionados da camada de pintura
ativa, em passos de pixels inteiros. Enquanto você edita uma máscara,
**Operação** move a máscara.

Com as guias visíveis, **Operação** também seleciona e arrasta as guias
(consulte [Réguas e guias](/pt-BR/docs/drawing/ruler/)).

## Deixar cópia

Você pode mover uma cópia dos pixels selecionados e manter os originais no
lugar.

Ative **Deixar cópia** no painel Ferramenta ou na
[barra de seleção](/pt-BR/docs/selections/working/). Mantenha **Alt**
pressionada ao começar a arrastar para fazer o contrário em um único arrasto.

## Transformar

Faça uma das seguintes ações:

- Escolha **Editar > Transformar**.
- Pressione **Ctrl+T**.
- Selecione **Transformar** na barra de ferramentas Comandos, em Pintura e Foto, ou na barra de título, em Esboço.
- Selecione **Transformar** na barra de seleção.
- Em Pintura e Foto, clique com o botão direito ou mantenha pressionado **Operação / Transformar** na barra de ferramentas Ferramentas e escolha **Transformar**.

Com uma seleção, **Transformar** altera os pixels selecionados da camada ou da
máscara ativa. Sem seleção, altera as camadas selecionadas. Aparecem uma caixa
com alças e a barra de ações da tela.

Para terminar, selecione **Aplicar** ou pressione **Enter**. **Cancelar** ou
**Escape** descarta a transformação, assim como **Desfazer** enquanto você
transforma camadas.

Para transformar várias camadas, desfaça a seleção antes.

## Alças

Em **Livre** e **Uniforme**:

- Arraste dentro da caixa para movê-la. Mantenha **Shift** pressionada para mover só na horizontal ou na vertical.
- Arraste uma alça de canto ou de lado para dimensionar a partir do lado oposto. Mantenha **Shift** pressionada para manter as proporções, ou **Alt** para dimensionar em torno do pivô.
- Mantenha **Ctrl** pressionada e arraste uma alça de lado para inclinar, até 85°.
- Arraste a alça acima da borda superior para girar em torno do pivô. Mantenha **Shift** pressionada para girar em passos de 15°.
- Arraste o pivô para movê-lo.

Em **Distorcer**:

- Arraste um canto para movê-lo sozinho, ou uma alça de lado para mover esse lado.
- Mantenha **Shift** pressionada em um canto para espelhar o movimento no canto vizinho, para uma perspectiva simétrica.

Em **Deformar**:

- Arraste os pontos da malha e as alças de tangente do ponto selecionado.
- **Shift**+clique em pontos para movê-los juntos.

Em todos os modos:

- As teclas de seta deslocam a caixa 1 px, ou 10 px com **Shift**.
- Em uma tela sensível ao toque, um dedo sobre uma alça ou dentro da caixa a arrasta. Um dedo em outro lugar move a visualização.

## Barra de transformação

![A barra de ações da tela de uma transformação, com Modo, Encaixar, os botões de inverter e girar, Redefinir, Interpolação, Cancelar e Aplicar.](shot:transform/transform-bar)

### Modo

**Livre**, **Uniforme**, **Distorcer** ou **Deformar**. **Uniforme** mantém as
proporções. As transformações de camada abrem em **Uniforme**.

### Tamanho original

Volta uma foto posicionada para 100%. Só em fotos sem **Distorcer** ou
**Deformar**.

### Encaixar

Encaixa as bordas e o centro da caixa na tela, nas outras camadas visíveis e
nas guias. A rotação não encaixa. Vem desativado por padrão.

### Perspectiva

Com **Distorcer**, espelha cada arrasto de canto no canto vizinho.

### Grade de deformação

Com **Deformar**:

- **Dividir grade**: escolha **Dividir verticalmente**, **Dividir horizontalmente** ou **Dividir em cruz** e toque na deformação para adicionar ali uma linha de grade sem mudar a forma. **Escape** cancela a divisão. Uma grade tem no máximo 32 células em cada direção.
- **Selecionar pontos**: toque em pontos para selecioná-los e movê-los juntos.
- **Redefinir grade**: substitui a deformação por uma grade reta.
- **Grade**: **3 × 3** (o padrão), **4 × 4** ou **5 × 5**. Fica disponível até você mudar a forma.

![A barra de ações da tela no modo Deformar, com Dividir grade, Selecionar pontos, Redefinir grade e Grade.](shot:transform/warp-bar)

### Botões de inverter e girar

Os botões de ícone **Inverter horizontalmente**, **Inverter verticalmente**,
**Girar 90° à esquerda** e **Girar 90° à direita** espelham ou giram o conteúdo
em torno do pivô.

### Redefinir

Desfaz todas as mudanças feitas nesta transformação e a mantém aberta. **Modo**
volta para **Livre**.

### Interpolação

Define como os pixels são reamostrados: **Vizinho mais próximo**,
**Bilinear**, **Bicúbica** ou **Lanczos**. **Bilinear** é o padrão em
**Livre** e **Uniforme**, e **Bicúbica** em **Distorcer** e **Deformar**.

## Valores da transformação no painel Ferramenta

O painel Ferramenta, e a barra Opções da ferramenta em Foto, mostram os valores
de uma transformação aberta, exceto em **Deformar**.

- **Âncora de posição**: **X** e **Y**, em pixels, com a grade de âncora acima deles, que escolhe a qual ponto da caixa os valores se referem.
- **Escala**: **Largura** e **Altura**, em porcentagem. **Uniforme** mantém os dois vinculados.
- **Rotação**: **Ângulo**, de −180° a 180°.
- **Inclinação**: **Inclinação**, de −85° a 85°.

![O painel Ferramenta durante uma transformação, com Âncora de posição, Escala, Rotação e Inclinação.](shot:transform/transform-numbers)

## Transformações de camada

Uma transformação de camadas de pintura ou de foto inteiras fica armazenada em
cada camada, e os pixels não são reamostrados. **Transformar** abre de novo a
partir da transformação armazenada.

Até você aplicar a transformação aos pixels, não é possível retocar uma camada
dimensionada ou girada, nem pintar em uma camada distorcida ou deformada.

## Aplicar transformação aos pixels

Você pode incorporar aos pixels a transformação armazenada de uma camada.

Faça uma das seguintes ações:

- Escolha **Editar > Aplicar transformação aos pixels**.
- Escolha **Camada > Configurações da camada > Aplicar transformação aos pixels**.

Durante o processo, uma barra na parte inferior da tela mostra "Aplicando
transformação…" com **Cancelar**.

## Transformar novamente

Sem seleção, escolha **Editar > Transformar novamente** para aplicar a última
transformação de camada às camadas selecionadas. Colagens, importações e
transformações de pixels selecionados não se repetem.

## Imagens posicionadas

Quando você cola uma imagem de outro aplicativo ou escolhe
**Arquivo > Importar imagem como camada…**, a imagem se abre na caixa de
transformação. **Aplicar** posiciona a imagem e **Cancelar** remove a imagem.
Até você escolher um dos dois, os outros comandos ficam indisponíveis.
