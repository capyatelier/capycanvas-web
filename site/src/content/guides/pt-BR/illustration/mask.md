---
title: "Mascaramento"
description: "Dê à fita, ao disco e ao bloco suas próprias camadas de cores com bordas editáveis."
purpose: "Nesta etapa, cada forma ganha sua própria camada de cor. A cor preenche toda a camada e uma máscara decide qual parte dela você vê. Como nada é apagado, você pode ajustar a borda de qualquer forma posteriormente apenas pintando sua máscara."
techniques: ["Selecione uma forma com um laço ou seleção automática.", "Transforme a seleção em uma máscara e preencha a camada com cor.", "Paint na máscara para ajustar a borda."]
figure: "1: miniatura da máscara selecionada da faixa de opções. 2: Fita, disco e bloco abaixo da arte da linha. 3: Borracha, que esconde partes da máscara."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: miniatura da máscara selecionada da faixa de opções. 2: Fita, disco e bloco abaixo da arte da linha. 3: Borracha, que esconde partes da máscara."}
---

## 1. Selecione uma forma

Oculte **Sketch** e **Color rough**. Escolha **Lasso selection** e trace cuidadosamente ao redor da fita, como no exemplo.

Se o seu desenho de linha estiver fechado em torno de uma forma, o **Auto select** pode fazer isso com um clique. Marque **Line art** como camada de referência escolhendo **Layer Settings → Use as reference** em seu menu. Em seguida, escolha **Auto select**, escolha **Sample reference layers** no painel Ferramentas e clique dentro da forma. [Ferramentas de seleção](/pt-BR/docs/tools/selections/) explica as configurações que controlam até que ponto a seleção se espalha.

## 2. Faça a camada de cor mascarada

Adicione uma nova camada chamada **Ribbon** abaixo da arte de linha. Com a seleção ainda ativa, abra o menu do Ribbon e escolha **Mask → Mask: reveal selection**. A camada agora possui uma máscara que mostra apenas o formato da fita.

Clique na miniatura de pintura da faixa de opções e escolha a cor da faixa de opções. Escolha **Select → Select all pixels** e depois **Edit → Fill selection** para preencher toda a camada com cor e finalize com **Select → Deselect pixels**. Só aparece a fita, mas a cor continua por baixo da máscara, pronta para quando você quiser ampliar o formato.

## 3. Ajuste a borda

Clique na miniatura da máscara da faixa de opções para editar a máscara. Agora, qualquer pincel revela mais da cor onde você pinta, e o **Eraser** a oculta novamente. Clique na miniatura da pintura novamente quando quiser alterar a cor em si.

Faça **Disc** e **Block** da mesma maneira. Mantenha o disco abaixo da faixa de opções e o bloco abaixo do disco, com a arte de linha acima dos três. Salve seu desenho e prossiga para [Rendering](/pt-BR/docs/illustration/render/).
