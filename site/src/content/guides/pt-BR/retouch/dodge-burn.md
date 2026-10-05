---
title: "Subexposição e superexposição, separação de frequências"
description: "Como adicionar uma camada de subexposição e superexposição e dividir uma camada em camadas Baixo e Alto com Separação de frequências."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## Nova camada de subexposição e superexposição

Você pode adicionar uma camada cinza neutra em **Luz suave** para fazer
subexposição e superexposição.

Faça uma das seguintes ações:

- Escolha **Camada > Novo > Nova camada de subexposição e superexposição**.
- Abra o menu de uma camada no painel Camadas e escolha **Novo > Nova camada de subexposição e superexposição**.

Uma camada do tamanho da tela chamada *Subexposição e superexposição* aparece
acima da camada ativa e das camadas recortadas por ela, e vira a camada ativa.

Não é possível adicionar a camada a um grupo bloqueado, nem enquanto um recorte
ou uma transformação está aberto.

![O painel Camadas com uma camada Subexposição e superexposição acima da foto do terrário.](shot:retouch/dodge-burn-layer)

## Separação de frequências…

Você pode dividir a camada ativa para separação de frequências em uma única
etapa.

Escolha **Filtro > Separação de frequências…**. Um painel se abre na parte
inferior da tela com **Raio**, 4 px por padrão, e a tela mostra uma prévia do
desfoque da camada *Baixo* enquanto você muda o **Raio**.

![O painel Separação de frequências com o valor de Raio.](shot:retouch/frequency-separation-panel)

**Aplicar** coloca um grupo chamado *Separação de frequências* no lugar da
camada:

- *Alto* contém a textura fina, em **Luz linear**. É a camada do topo e vira a camada ativa.
- *Baixo* contém as cores e os tons, desfocados com **Desfoque gaussiano** até o raio, em **Normal**.

O grupo recebe a opacidade e o recorte da camada original. A camada original
fica logo abaixo do grupo, oculta.

A camada precisa estar visível e em **Normal**, e o desenho precisa usar
**Editar > Mesclagem > Mesclagem perceptual** (consulte
[Espaço de cores, profundidade de bits e mesclagem](/pt-BR/docs/color-management/color-spaces/)).
Se o desenho mudar enquanto o painel estiver aberto, o painel se fecha.

![O painel Camadas com o grupo Separação de frequências, Alto acima de Baixo, e a camada original oculta.](shot:retouch/frequency-separation-layers)
