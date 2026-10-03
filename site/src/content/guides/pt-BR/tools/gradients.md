---
title: "Preenchimentos e gradientes"
description: "Preencha uma área com um clique ou com uma mistura suave de uma cor para outra."
purpose: "A ferramenta Preenchimento injeta cor em uma área com um único clique, que é a maneira mais rápida de colorir linhas artísticas. Em vez disso, um gradiente combina suavemente de uma cor para outra, o que é útil para céus, planos de fundo e iluminação suave."
techniques: ["Preencha uma área dentro do seu desenho com um clique.", "Desenhe um gradiente linear ou radial.", "Mantenha um preenchimento ou gradiente dentro de uma seleção."]
figure: "1: Tipos de gradiente no conjunto de ferramentas. 2: Cores de primeiro plano e fundo. 3: A camada que recebe o gradiente."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: Tipos de gradiente no conjunto de ferramentas. 2: Cores de primeiro plano e fundo. 3: A camada que recebe o gradiente."}
---

## Preencha uma área com um clique

Escolha a ferramenta **Fill** ou pressione **F** e clique dentro de uma área para preenchê-la com a cor de primeiro plano. Para colorir a arte de linha que está em outra camada, primeiro marque a camada de arte de linha como referência com **Layer Settings → Use as reference** e escolha **Reference layers** no Conjunto de ferramentas. Em seguida, selecione a camada vazia que deseja pintar e clique dentro da área. O preenchimento para nas linhas, mesmo que elas estejam em uma camada diferente.

Se o preenchimento vazar através de uma pequena lacuna nas linhas, aumente **Close gaps** no painel Ferramentas. **Expansion** empurra o preenchimento ligeiramente abaixo das linhas, de forma que nenhuma borda branca fina fique entre a cor e a tinta.

## Escolha as cores e a camada

É mais fácil alterar um gradiente posteriormente se ele tiver uma camada própria, portanto, adicione uma nova camada primeiro. Em seguida, escolha as duas cores no painel **Color**: o gradiente começa na cor de primeiro plano e termina na cor de fundo.

Escolha a ferramenta **Gradient** e, em seguida, escolha um tipo em **Tool Set**. Os gradientes **Linear** se misturam em uma linha reta e os gradientes **Radial** se espalham em um círculo a partir de um ponto central. As versões *color to clear* desbotam a cor do primeiro plano até a transparência, em vez de se misturar à cor de fundo.

## Arraste para desenhar

Para um gradiente linear, arraste de onde deveria estar a primeira cor até onde deveria estar a segunda cor. Para um gradiente radial, comece no centro e arraste para fora. Um arrasto curto faz uma mudança rápida entre as cores, e um arrasto longo espalha a mistura por mais partes do desenho.

Se o resultado não estiver correto, desfaça e arraste novamente. Muitas vezes são necessárias algumas tentativas para encontrar o ângulo e o comprimento corretos.

## Mantenha-o onde quiser

Se uma [seleção](/pt-BR/docs/tools/selections/) estiver ativa, o gradiente preenche apenas a área selecionada. Desmarque depois para que seus próximos golpes possam ir a qualquer lugar. Para um limite que você pode querer ajustar posteriormente, use uma [mask](/pt-BR/docs/layers/masks/) em vez de uma seleção. Como o gradiente está em sua própria camada, você também pode suavizá-lo posteriormente diminuindo a opacidade da camada.
