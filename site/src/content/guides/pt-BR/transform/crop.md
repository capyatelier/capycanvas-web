---
title: "Recortar"
description: "Como recortar e endireitar a tela com a ferramenta Recortar."
related: ["transform/image", "selections/working", "drawing/ruler", "photo/crop"]
---

Você pode recortar a tela em um quadro com a ferramenta **Recortar**. Os pixels
recortados continuam nas camadas deles, ocultos, a menos que você ative
**Excluir área recortada**.

## Recortar a tela

Faça uma das seguintes ações:

- Escolha **Editar > Imagem > Recortar**.
- Pressione **C**.
- Em Foto, selecione **Recortar** na barra de ferramentas Ferramentas.

Um quadro com alças aparece ao redor da tela inteira, ou como o maior quadro da
proporção escolhida. A tela fora do quadro fica esmaecida, e a
[barra de ações da tela](/pt-BR/docs/selections/working/) do recorte aparece na borda
inferior da tela.

- Arraste dentro do quadro para movê-lo.
- Arraste uma alça de canto ou de lado para redimensionar o quadro. Mantenha **Shift** pressionada para manter as proporções, ou **Alt** para redimensionar a partir do centro.
- Arraste o quadro além da borda da tela para acrescentar tela transparente.

Em uma tela sensível ao toque, só as alças respondem ao dedo. Um dedo dentro do
quadro move a visualização.

Para terminar, selecione **Aplicar** ou pressione **Enter**. **Cancelar**,
**Escape** e **Desfazer** descartam o recorte. Nos dois casos, a ferramenta que
você usava antes volta.

**Aplicar** também recorta as camadas bloqueadas. Não é possível começar um
recorte enquanto uma transformação está aberta.

![O quadro de recorte na foto do terrário, com a barra de ações da tela na borda inferior.](shot:transform/crop-bar)

## Proporção

Escolha **Livre**, **Original**, **1:1**, **4:5**, **2:3**, **5:7** ou **16:9**
em **Proporção** na barra de ações da tela. O quadro vira o maior quadro dessa
proporção. **Livre** é o padrão.

**Trocar orientação do recorte**, o botão de ícone ao lado de **Proporção**,
alterna o quadro entre paisagem e retrato.

A proporção, a sobreposição e **Excluir área recortada** se mantêm no próximo
recorte.

![O menu Proporção na barra de recorte.](shot:transform/crop-ratio-menu)

## Ajustar ao conteúdo

**Ajustar ao conteúdo** ajusta o quadro, sem rotação, aos limites dos pixels
visíveis, incluindo os pixels além da tela. **Proporção** muda para **Livre**.

## Sobreposição

Escolha **Terços**, **Grade**, **Diagonal** ou **Proporção áurea** em
**Sobreposição**. **Terços** é o padrão. Pressione **O** durante o recorte para
mostrar a próxima sobreposição.

## Endireitar

Selecione **Endireitar** na barra de ações da tela e trace uma linha ao longo de algo que
deveria estar na horizontal ou na vertical. O quadro gira para acompanhar a linha. Mantenha
**Shift** pressionada para encaixar a linha em passos de 15°. Em uma tela
sensível ao toque, um dedo traça a linha enquanto **Endireitar** está
selecionado.

Você também pode definir o ângulo em **Endireitar** no painel Ferramenta. O
quadro gira no máximo 45° para cada lado.

Quando você aplica um recorte girado, as camadas de pintura e as máscaras são
reamostradas. As fotos posicionadas mantêm os pixels originais.

Para endireitar por uma guia, selecione a guia e selecione **Endireitar** na
barra de ações da tela dela (consulte [Réguas e guias](/pt-BR/docs/drawing/ruler/)). Um
recorte se abre, girado para se alinhar à guia.

## Excluir área recortada

Ative **Excluir área recortada** para descartar os pixels fora do quadro ao
aplicar o recorte. As fotos posicionadas mantêm os pixels originais. Vem
desativado por padrão.

Um recorte que ficaria grande demais mantendo os pixels ocultos só funciona com
**Excluir área recortada** ativado.

## Redefinir

**Redefinir** volta o quadro para a tela inteira, sem rotação, e desativa
**Endireitar**. Com uma proporção escolhida, o quadro vira o maior quadro dessa
proporção.

## Configurações de recorte no painel Ferramenta

Durante o recorte, o painel Ferramenta (e a barra Opções da ferramenta em Foto)
mostra:

- **Tamanho**: **Largura** e **Altura** do quadro, em pixels. Com uma proporção escolhida, o outro lado acompanha.
- **Endireitar**: o ângulo do quadro, de −45° a 45°.
- Os botões da barra de ações da tela.

![O painel Ferramenta durante o recorte, com Largura, Altura e Endireitar.](shot:transform/crop-tool-panel)

## Recortar tela à seleção

Você pode recortar a tela nos limites de uma seleção.

Faça uma das seguintes ações:

- Escolha **Editar > Imagem > Recortar tela à seleção**.
- Selecione **Recortar** na [barra de seleção](/pt-BR/docs/selections/working/).

Os pixels fora dos limites da seleção continuam nas camadas deles, ocultos. Não
é possível recortar por uma seleção invertida.

## Recuperar pixels recortados

Escolha **Editar > Imagem > Revelar tudo** para aumentar a tela até ela mostrar
os pixels de todas as camadas, ou aumente a tela com
**Editar > Imagem > Tamanho da tela…** (consulte
[Tamanho e rotação da imagem](/pt-BR/docs/transform/image/)).
