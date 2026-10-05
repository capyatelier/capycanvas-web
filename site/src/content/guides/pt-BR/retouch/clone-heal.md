---
title: "Clonar e corrigir"
description: "O Carimbo de clonagem, os pincéis de correção e a origem de onde eles copiam."
related: ["retouch/dodge-burn", "layers/settings", "brushes/basics", "photo/retouch"]
---

Você pode pintar sobre defeitos com pixels copiados de outra parte da imagem.

| Ferramenta | Função |
| --- | --- |
| **Carimbo de clonagem** | Pinta com pixels copiados do disco de origem. |
| **Pincel de correção** | Pinta como o **Carimbo de clonagem**. Quando você levanta a caneta, a cópia assume a cor e o brilho ao redor do traço e mantém a textura dela. |
| **Pincel de correção pontual** | Quando você levanta a caneta, substitui o ponto pintado por textura da área próxima mais parecida, mesclada com o entorno. |

## Escolher uma ferramenta de retoque

Faça uma das seguintes ações:

- Pressione **S**. Pressione de novo para passar para **Pincel de correção** e depois para **Pincel de correção pontual**.
- Em Foto, selecione **Carimbo de clonagem** ou **Pincel de correção pontual / Pincel de correção** na barra de ferramentas Ferramentas.
- Em Pintura, selecione **Misturar / Carimbo de clonagem** na barra de ferramentas Ferramentas. Clique com o botão direito no botão ou mantenha-o pressionado para escolher **Carimbo de clonagem**.
- Em Esboço, selecione **Esculpir** na barra de título, selecione de novo para abrir a gaveta e selecione **Clonar**, **Corrigir** ou **Correção pontual**.
- Digite o nome da ferramenta na [busca de comandos](/pt-BR/docs/start/command-search/).

**Pincel de correção** e **Pincel de correção pontual** não têm botão em
Pintura.

Cada ferramenta é um pincel, com **Tamanho do pincel**, **Opacidade**,
**Fluxo** e as configurações de **Ponta** no painel Ferramenta (consulte
[Tamanho, opacidade e fluxo](/pt-BR/docs/brushes/basics/)).

![O painel Ferramenta do Carimbo de clonagem, com as configurações do pincel e as configurações de origem.](shot:retouch/clone-tool-panel)

## Origem

**Origem**, no painel Ferramenta, define o que as ferramentas copiam:

- **Camadas de referência** (o padrão) copia a camada em que você pinta junto com as camadas abaixo dela marcadas como referência.
- **Camada em edição** copia só a camada em que você pinta.

Com **Camadas de referência**, você pode retocar em uma camada vazia acima da
foto. Marque a foto com [Usar como referência](/pt-BR/docs/layers/settings/) ou
escolha **Camada > Configurações da camada > Usar camada abaixo como referência**.
Se você pintar em uma camada vazia e nenhuma referência abaixo dela estiver
marcada, a mensagem oferece **Usar *nome* como referência**.

Não é possível retocar diretamente uma camada dimensionada ou girada. Retoque em
uma nova camada acima dela.

## Definir a origem

**Carimbo de clonagem** e **Pincel de correção** copiam a partir do disco de
origem, um pequeno anel com uma cruz.

Faça uma das seguintes ações:

- Mantenha **Alt** pressionada e clique no ponto de onde quer copiar.
- Selecione **Definir origem** e depois clique.

Até você defini-la, a origem fica no centro da visualização. Arraste o disco
para mover a origem. Um dedo pode arrastar o disco, mas nunca define a origem.
Enquanto você pinta, o disco acompanha o ponto que está sendo copiado.

**Pincel de correção pontual** encontra a própria origem e não tem disco.

## Configurações de origem

Estas configurações valem para **Carimbo de clonagem** e **Pincel de correção**.

### Origem alinhada

Mantém o mesmo deslocamento entre a origem e o pincel de um traço para outro.
Quando está desativada, cada traço começa a copiar no disco de origem. Vem
ativada por padrão.

### Inverter origem horizontalmente e Inverter origem verticalmente

Espelham os pixels copiados em torno do disco de origem.

### Redefinir deslocamento da origem

Faz o próximo traço voltar a copiar a partir do disco de origem. Fica disponível
depois de um traço alinhado.

### Definir origem

O próximo clique define a origem.

## Barra de ações da tela do disco de origem

Clique no disco de origem sem arrastar para mostrar a
[barra de ações da tela](/pt-BR/docs/selections/working/) ao lado dele, com
**Alinhado**, **Origem**, os dois botões de inverter, **Redefinir deslocamento**
e **Definir origem**. Clique no disco de novo, ou escolha outra ferramenta, para
ocultar a barra.

![O disco de origem com a barra de ações da tela.](shot:retouch/clone-source-bar)
