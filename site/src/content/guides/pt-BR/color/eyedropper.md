---
title: "Conta-gotas"
description: "Como capturar uma cor de tinta da tela com o Conta-gotas, e as opções Estilo, Origem e Tamanho da amostra."
related: ["color/color-panel", "color/edit-color", "input/touch", "input/keyboard"]
---

Você pode capturar uma cor da tela para pintar com ela. Depois da captura, a
ferramenta que você estava usando volta.

## Iniciar o Conta-gotas

Faça uma das seguintes ações:

- Pressione **I** (**O** no mapa de atalhos Estilo GIMP).
- Escolha **Conta-gotas** na busca de comandos.
- Em Pintura e Foto, selecione **Conta-gotas** na barra de ferramentas Ferramentas.
- Em Esboço, selecione **Conta-gotas** na barra da borda esquerda, entre os controles deslizantes de tamanho e de opacidade.

Para parar sem capturar, pressione **I** ou selecione de novo o mesmo botão,
pressione **Escape** ou escolha outra ferramenta ou outro pincel. Um toque com o
dedo, sem manter pressionado, também encerra o Conta-gotas.

## Capturar

Mova sobre a tela para ver a prévia da cor no painel Cor. A cor de tinta só muda
quando você captura.

| Entrada | Prévia | Captura |
| --- | --- | --- |
| Mouse | Passe o ponteiro | Clique |
| Caneta | Passe a caneta sobre a tela ou encoste-a | Levante a caneta |
| Dedo | Toque | Levante o dedo |

Com o dedo, o ponto de amostra fica acima da ponta do dedo.

Pixels transparentes não capturam nada, e as cores capturadas são sempre opacas.
As capturas são feitas no espaço de cores do desenho. Em um desenho HDR, uma
captura pode ser mais clara que o branco SDR. Enquanto você edita uma máscara, a
captura define a cor da máscara.

## Capturar enquanto pinta

Mantenha **Alt** pressionada com um pincel, Misturar, Liquefazer, Preencher ou
Degradê selecionado. Cada clique captura uma cor. Solte **Alt** para voltar à
ferramenta.

Os mapas de atalhos Estilo Krita e Estilo GIMP usam **Ctrl**. Na página
[Atalhos de teclado](/pt-BR/docs/input/keyboard/), esse atalho se chama **Amostrar
cor enquanto pressionado**. Você também pode atribuir o Conta-gotas a um botão da
caneta na página **Caneta e entrada** ([Caneta](/pt-BR/docs/input/pen/)).

## Manter um dedo pressionado

Mantenha um dedo parado na tela para começar a capturar com qualquer ferramenta.
Levante o dedo para capturar e voltar à ferramenta.

- No editor web e no iPad, é preciso manter o dedo por meio segundo. O Android, o Windows e o Linux usam o tempo de toque longo do sistema.
- Mover o dedo antes de o Conta-gotas abrir cancela o toque longo.
- O toque longo só funciona com um dedo na tela e nenhuma outra ação em andamento.
- Enquanto mantém o dedo, toque com um segundo dedo para alternar **Origem** entre **Cor visível** e **Camada selecionada**.

## Estilo

Escolha **Estilo** na barra Opções da ferramenta durante a captura (no alto da
janela, em Foto):

- **Conta-gotas** com lupa mostra uma lupa redonda. A metade de cima do anel mostra a cor amostrada, e a metade de baixo, a cor atual.
- **Conta-gotas** com pipeta mostra um cursor em forma de pipeta, com a ponta no ponto amostrado.

![A lupa do Conta-gotas sobre um traço vermelho, com as cores amostrada e atual no anel.](shot:color/eyedropper-loupe)

O toque sempre usa a lupa. Selecionar **Conta-gotas** em Esboço define **Estilo**
como a lupa (**Conta-gotas**). Uma pequena marca de camadas aparece quando
**Origem** é **Camada selecionada**.

## Origem e Tamanho da amostra

Defina essas opções no painel Ferramenta ou na barra Opções da ferramenta durante
a captura. Em Esboço, clique ou toque duas vezes em **Conta-gotas** para abri-las.

![O painel Ferramenta durante a captura, com Origem e Tamanho da amostra.](shot:color/eyedropper-settings)

### Origem

**Cor visível** (padrão) amostra o desenho como você o vê, e **Camada
selecionada**, a tinta da própria camada selecionada, antes da opacidade, das
máscaras e do recorte. **Camada selecionada** só é oferecida para uma camada de
pintura desbloqueada.

### Tamanho da amostra

**Um pixel** (padrão), **Círculo de 5 px**, **Círculo de 15 px**, **Círculo de 51
px** ou **Círculo de 101 px**. Um círculo calcula a média dos pixels dentro dele.
