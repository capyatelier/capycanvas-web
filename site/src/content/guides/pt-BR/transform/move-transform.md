---
title: "Mover e Transformar"
description: "Como mover e transformar camadas, pixels selecionados e caminhos com a ferramenta Operação e com Transformar."
related: ["selections/working", "layers/paths", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Você pode mover camadas e pixels selecionados com a ferramenta **Operação**, e
dimensioná-los, girá-los, incliná-los, distorcê-los ou deformá-los com
**Transformar**.

## Ferramenta Operação

Faça uma das seguintes ações:

- Abra o menu de uma camada no painel Camadas e escolha **Mover camada / máscara**.
- Pressione **O**.
- Em Pintura e Foto, selecione **Operação / Transformar / Editar pontos** na barra de ferramentas Ferramentas. Clique com o botão direito no botão ou mantenha-o pressionado para escolher **Operação**.
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

## Mover caminhos

Em uma camada vetorial, **Operação** seleciona, move, dimensiona e gira caminhos em vez de mover a camada. Pressione **Ctrl+A** para selecionar todos os caminhos. **Editar > Transformar** com caminhos selecionados passa para **Operação** e a caixa dela. Veja [Editar caminhos](/pt-BR/docs/layers/paths/).

## Deixar cópia

Você pode mover uma cópia dos pixels selecionados e manter os originais no
lugar.

Ative **Deixar cópia** no painel **Ferramenta** ou escolha **Mais > Deixar cópia** na [barra de seleção](/pt-BR/docs/selections/working/). Segure **Alt** ao começar a arrastar para inverter a escolha somente nesse arrasto.

## Transformar

Faça uma das seguintes ações:

- Escolha **Editar > Transformar**.
- Pressione **Ctrl+T**.
- Selecione **Transformar** na barra de ferramentas Comandos, em Pintura e Foto, ou na barra de título, em Esboço.
- Selecione **Transformar** na barra de seleção.
- Em Pintura e Foto, clique com o botão direito ou mantenha pressionado **Operação / Transformar / Editar pontos** na barra de ferramentas Ferramentas e escolha **Transformar**.

Com uma seleção, **Transformar** altera os pixels selecionados da camada ou da
máscara ativa. Sem seleção, altera as camadas selecionadas. Aparecem uma caixa
com alças e a barra de ações da tela.

Para terminar, selecione **Aplicar transformação** ou pressione **Enter**. **Cancelar transformação** ou
**Escape** descarta a transformação, assim como **Desfazer** enquanto você
transforma camadas.

Para transformar várias camadas, desfaça a seleção antes.

## Alças

Durante o dimensionamento:

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

![A barra de transformação com os botões de modo, controles de virar e encaixar, Cancelar transformação e Aplicar transformação.](shot:transform/transform-bar)

### Modo

Selecione **Redimensionar**, **Distorcer** ou **Deformar** na barra. **Manter proporções** mantém a proporção durante o dimensionamento e **Perspectiva** espelha os arrastos de canto em **Distorcer**. **Redimensionar** é o padrão.

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

- **Grade** abre **3 × 3** (o padrão), **4 × 4** e **5 × 5** e os comandos de divisão de grade. O tamanho da grade fica disponível até você alterar a forma.
- Escolha **Dividir verticalmente**, **Dividir horizontalmente** ou **Dividir em cruz** e selecione um ponto na malha para adicionar uma linha de grade sem alterar a forma. **Escape** cancela a divisão. Uma grade contém até 32 células em cada direção.
- **Selecionar pontos** seleciona pontos para se moverem juntos.
- **Redefinir grade** restaura uma malha reta.

![A barra de transformação no modo Deformar com Grade e Selecionar pontos.](shot:transform/warp-bar)

### Botões de inverter e girar

**Inverter horizontalmente** está na barra. **Mais** contém **Inverter verticalmente**, **Girar 90° à esquerda** e **Girar 90° à direita**. Eles espelham ou transformam o conteúdo em torno do pivô.

### Redefinir transformação

Escolha **Redefinir transformação** em **Mais** para desfazer todas as alterações na transformação atual. A transformação permanece aberta e retorna para **Redimensionar**.

### Interpolação

Escolha **Interpolation** em **Mais** para definir como os pixels são reamostrados: **Vizinho mais próximo**, **Bilinear**, **Bicúbica** ou **Lanczos**. **Bilinear** é o padrão durante o dimensionamento e **Bicúbica** em **Distorcer** e **Deformar**.

## Valores da transformação no painel Ferramenta

O painel Ferramenta, e a barra Opções da ferramenta em Foto, mostram os valores
de uma transformação aberta, exceto em **Deformar**.

- **Âncora de posição**: **X** e **Y**, em pixels, com a grade de âncora acima deles, que escolhe a qual ponto da caixa os valores se referem.
- **Redimensionar**: **Largura** e **Altura**, em porcentagem. **Manter proporções** mantém os dois vinculados.
- **Rotação**: **Ângulo**, de −180° a 180°.
- **Inclinação**: **Inclinação**, de −85° a 85°.

![O painel Ferramenta durante uma transformação, com Âncora de posição, Escala, Rotação e Inclinação.](shot:transform/transform-numbers)

## Transformações de camada

Uma transformação de camadas inteiras de pintura ou objeto é salva com cada camada e os pixels não são reamostrados. **Transformar** reabre a partir da transformação salva.

Até você aplicar a transformação aos pixels, não é possível retocar uma camada
dimensionada ou girada, nem pintar em uma camada distorcida ou deformada.

## Aplicar transformação

Você pode incorporar aos pixels a transformação armazenada de uma camada.

Faça uma das seguintes ações:

- Escolha **Editar > Aplicar transformação**.
- Escolha **Camada > Configurações da camada > Aplicar transformação**.

Durante o processo, uma barra na parte inferior da tela mostra "Aplicando
transformação…" com **Cancelar transformação**.

## Transformar novamente

Sem seleção, escolha **Editar > Transformar novamente** para aplicar a última
transformação de camada às camadas selecionadas. Colagens, importações e
transformações de pixels selecionados não se repetem.

## Imagens posicionadas

Quando você cola uma imagem de outro aplicativo ou escolhe
**Arquivo > Import Image as
Layer…**, a imagem se abre na caixa de
transformação. **Aplicar transformação** posiciona a imagem e **Cancelar transformação** remove a imagem.
Até você escolher um dos dois, os outros comandos ficam indisponíveis.
