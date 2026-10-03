---
title: "Renderização"
description: "Adicione sombreamento e textura nas camadas cortadas em cada forma e exporte o resultado."
purpose: "A renderização é onde as formas obtêm luz e sombra. Pintar o sombreamento em camadas cortadas mantém-no dentro de cada forma automaticamente e, como o sombreamento é separado da cor base, você pode ajustá-lo ou refazê-lo sem perder nada."
techniques: ["Corte uma camada de sombreamento na faixa de opções.", "Controle a força do sombreamento.", "Sombreie as outras formas, verifique as camadas e exporte."]
figure: "1: Textura da fita e sombreamento da fita acima da fita. 2: Clipe para a camada abaixo. 3: Opacidade da camada para toda a passagem de sombreamento."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Textura da fita e sombreamento da fita acima da fita. 2: Clipe para a camada abaixo. 3: Opacidade da camada para toda a passagem de sombreamento."}
---

## 1. Adicione sombreamento recortado

Selecione **Ribbon**, adicione uma nova camada diretamente acima dela e nomeie-a como **Ribbon shading**. Abra seu menu e escolha **Layer Settings → Clip to layer below**. Agora pinte as sombras nas curvas da fita com **Watercolor Wash** e adicione alguns detalhes sábios com **Paintbrush**. Seus traços podem ultrapassar a borda da fita, porque apenas a parte dentro da fita fica visível.

Deixe o modo de mesclagem da camada de sombreamento em **Normal** por enquanto. A cor base permanece segura na camada Ribbon, portanto, apagar o sombreamento nunca apaga a cor abaixo.

## 2. Controle a força

A opacidade do pincel altera os traços que você está prestes a pintar. O **opacity of the Ribbon shading layer** altera todas as sombras que você já pintou. Se cada sombra parecer muito forte, diminua a opacidade da camada em vez de repintar.

Para destaques, adicione **Ribbon texture** diretamente acima do sombreamento da faixa de opções e recorte-o também. Use um lápis pequeno ou um pincel texturizado para fazer algumas marcas claras. A ordem das camadas agora é Textura da faixa de opções, Sombreamento da faixa de opções e, em seguida, Faixa de opções. [Configurações do pincel](/pt-BR/docs/advanced/brush-engine/) explica a opacidade e o fluxo com mais detalhes.

## 3. Finalizar e exportar

Sombreie **Disc** e **Block** da mesma maneira, cada um com suas próprias camadas cortadas. O exemplo usa Airbrush para o sombreamento suave no disco e Pencil para pequenas marcas de hachura creme. Mantenha **Line art** acima de tudo. Se a borda externa de uma forma precisar de conserto, pinte a máscara dessa forma; se apenas o sombreamento estiver errado, altere a camada de sombreamento. [Máscaras e recortes](/pt-BR/docs/layers/masks/) também mostra como recolorir a tinta com bloqueio alfa.

Quando estiver satisfeito com isso, oculte as camadas ásperas, salve seu arquivo `.capy` e [exporte uma imagem](/pt-BR/docs/output/export/) para compartilhar. Abra o arquivo exportado uma vez para verificar se ele tem a aparência esperada.
