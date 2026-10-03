---
title: "Espaços de cores, HDR e provas"
description: "Escolha como um desenho armazena cores, trabalhe em HDR e visualize como uma imagem será impressa."
purpose: "A maioria dos desenhos fica ótima com as configurações padrão. Ao editar fotos, preparar trabalhos para impressão ou desejar as cores vivas de uma tela moderna, você pode escolher a quantidade de cor que o desenho pode conter e visualizar como ficará em outro lugar."
techniques: ["Escolha um espaço de cores e profundidade de bits para um novo desenho.", "Paint e edite em HDR.", "Visualize as cores impressas com Proof."]
figure: "1: Predefinições de desenho. 2: Espaço de cores e profundidade de bits. 3: Criar, que abre o novo desenho."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: Predefinições de desenho. 2: Espaço de cores e profundidade de bits. 3: Criar, que abre o novo desenho."}
---

## Escolha a cor para um novo desenho

Ao escolher **File → New…**, o menu **Preset** oferece alguns pontos de partida. **Standard drawing** é adequado para a maioria das obras de arte e qualquer coisa que você compartilhe online. O **Wide color** pode conter as cores mais vivas que muitas telas modernas mostram, e o **Photo editing** mantém uma precisão extra para que ajustes fortes não causem faixas em gradientes suaves.

**Color space** define a faixa de cores que o desenho pode conter e **Bit depth** define a precisão com que cada cor é armazenada. Se você mudar de ideia mais tarde, use **Edit → Convert Color Space…** ou **Edit → Change Bit Depth…**. As fotos mantêm as cores com as quais foram tiradas, portanto não há nada para configurar ao abrir uma.

## Trabalhar em HDR

Escolha **16-bit float HDR** ou **32-bit float HDR** como profundidade de bits para fazer um desenho HDR. Os desenhos HDR podem conter cores mais brilhantes que o branco, como luz solar e luzes brilhantes. Quando você edita um desenho HDR, um arco de intensidade aparece abaixo da roda de cores, para que você também possa pintar com cores mais brilhantes que o branco.

HDR é exibido com brilho total quando seu navegador e monitor são compatíveis. Em outras telas, você verá uma versão padrão da imagem. Ao exportar um desenho HDR, você pode salvar um desenho HDR JPEG ou AVIF que também aparece corretamente em telas comuns, conforme descrito em [Exportar uma imagem](/pt-BR/docs/output/export/).

## Pré-visualização com prova

Antes de enviar o trabalho para uma impressora, **View → Proof** mostra como as cores provavelmente ficarão no papel. No painel **Proof**, escolha **Print** e escolha ou adicione o perfil de cores da impressora ou serviço de impressão. **Gamut warning** marca as cores que a impressora não consegue reproduzir, para que você possa ajustá-las antes de imprimir.

Para desenhos HDR, a opção **SDR** no mesmo painel mostra como a imagem ficará em uma tela comum e permite ajustar o brilho e o contraste dessa versão.
