---
title: "Máscaras e recorte"
description: "Oculte partes de uma camada sem apagá-las e mantenha o sombreamento dentro de uma forma."
purpose: "Uma máscara oculta parte de uma camada sem excluir nenhuma tinta, então você sempre pode mudar de ideia sobre onde a borda deveria estar. O recorte mantém uma camada dentro do formato da camada abaixo dela, que é a maneira mais fácil de adicionar sombreamento que nunca sai das linhas."
techniques: ["Faça uma máscara a partir de uma seleção.", "Paint em uma máscara para mostrar ou ocultar pintura.", "Corte o sombreamento na camada abaixo."]
figure: "1: Miniatura da máscara da fita. 2: Sombreamento cortado acima da fita. 3: Clipe para a camada abaixo e controles de bloqueio alfa."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: Miniatura da máscara da fita. 2: Sombreamento cortado acima da fita. 3: Clipe para a camada abaixo e controles de bloqueio alfa."}
---

## Faça uma máscara a partir de uma seleção

Primeiro [selecione](/pt-BR/docs/tools/selections/) a área que você deseja manter visível. Em seguida, abra o menu da camada e escolha **Mask → Mask: reveal selection**. Tudo fora da seleção fica oculto, mas nada é apagado. Você também pode escolher **Mask: hide selection** para ocultar a área selecionada. Lembre-se de desmarcar depois, para que seus próximos traços não se limitem à seleção.

Uma máscara só pode mostrar a tinta que está realmente na camada. Se você acha que pode querer ampliar a forma posteriormente, preencha toda a camada com cor antes de mascará-la, como faz o [masking stage](/pt-BR/docs/illustration/mask/) do tutorial.

## Paint na máscara

Clique na miniatura da máscara ao lado da camada para editar a máscara em vez da pintura. Agora, qualquer pincel revela mais da camada onde quer que você pinte, e o **Eraser** a oculta novamente. A cor com a qual você pinta não importa na máscara. Quando terminar, clique na miniatura da pintura para voltar a pintar normalmente.

O menu da máscara pode desligá-la por um momento, invertê-la ou excluí-la. Desligá-lo é uma maneira prática de comparar o resultado com a tinta por baixo.

## Recorte o sombreamento em uma forma

Adicione uma nova camada diretamente acima de uma camada base, abra seu menu e escolha **Layer Settings → Clip to layer below**. O que quer que você pinte na camada recortada agora mostra apenas onde a camada base contém tinta, para que você possa sombrear livremente sem ultrapassar as bordas. Você pode empilhar várias camadas cortadas acima da mesma base, uma para sombras e outra para realces.

**Alpha lock** é uma alternativa mais simples quando você deseja recolorir traços que já existem, como arte de linha. Mantém a nova tinta dentro dos traços existentes na mesma camada. O [rendering stage](/pt-BR/docs/illustration/render/) do tutorial usa ambos.
