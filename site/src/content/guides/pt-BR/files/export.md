---
title: "Exportar imagens"
description: "Como exportar uma cópia achatada de um desenho com a caixa de diálogo Exportar imagem e com Exportar novamente."
related: ["files/open-save", "color-management/hdr", "color-management/color-spaces"]
---

Você pode exportar uma cópia achatada do desenho como imagem. Exportar não altera
o desenho `.capy` e não conta como salvar.

## Exportar uma imagem

Faça uma das seguintes ações:

- Escolha **Arquivo > Exportar…**.
- Pressione **Ctrl+Shift+E**.

A caixa de diálogo **Exportar imagem** abre no destino **Web / Compartilhar**.
Selecione **Escolher arquivo…** e escolha um local. O nome sugerido é o nome do
desenho com a extensão do formato, como "Sem título.png". No Firefox e no
Safari, abre em vez disso a caixa de diálogo **Baixar arquivo** (consulte [Abrir e salvar](/pt-BR/docs/files/open-save/)).

O nome do arquivo precisa terminar com a extensão do formato. **Exportar…** não
está disponível enquanto um recorte ou uma transformação está aberto.

## Configurações

![A caixa de diálogo Exportar imagem com Destino definido como Web / Compartilhar.](shot:files/export-dialog)

Algumas configurações aparecem só para determinados formatos.

### Destino

Define todas as outras configurações de uma vez. As predefinições de exportação
salvas aparecem depois destes destinos integrados:

- **Web / Compartilhar**: um PNG sRGB de 8 bits no tamanho original.
- **Imagem de cores amplas**: o mesmo, em Display P3.
- **Edição posterior**: um TIFF de 16 bits no espaço de cores do desenho.
- **Personalizado**: começa igual a **Web / Compartilhar**.

### Alcance dinâmico

**SDR** em um desenho SDR, ou uma escolha de formatos HDR em um desenho HDR
(consulte Exportação HDR, abaixo).

### Limitar cores HDR fora do intervalo

Corta as cores que passam do intervalo de PNG HDR, JPEG HDR e AVIF HDR. Aparece
só para esses formatos.

### Formato

**Imagem PNG**, **Imagem TIFF**, **Imagem JPEG** ou **WebP · sem perdas**
(consulte Limites dos formatos, abaixo).

### Perfil de saída

**sRGB**, **Display P3**, **Adobe RGB (1998)** ou **ProPhoto RGB**, além de
"Original: *nome*" para cada camada de foto com perfil incorporado próprio.

### Profundidade de bits

**8 bits** ou **16 bits**.

### Transparência

**Preservar**, **Fundo branco** ou **Fundo preto**.

### Intenção de renderização

**Colorimétrica relativa** (o padrão), **Perceptual**, **Saturação** ou
**Colorimétrica absoluta**.

### Pontilhamento

**Nenhum** ou **Estocástico (saída de 8 bits)**.

### Qualidade

A qualidade de compressão, de 1 a 100, com padrão 90. Aparece para JPEG, JPEG HDR
e AVIF HDR.

### Tamanho em pixels

**Tamanho original** ou **Ajustar aos limites**. **Ajustar aos limites**
acrescenta **Largura máxima (px)** e **Altura máxima (px)** e reduz a imagem para
caber dentro desses limites sem alterar as proporções.

### Metadados de resolução

**Manter original**, **Pixels por polegada** ou **Omitir**. **Pixels por
polegada** acrescenta um campo de 1 a 65535, com padrão 300.

### Metadados

**Tudo**, **Direitos autorais e contato** ou **Nenhum**. Com **Tudo**, **Remover
localização** vem ativado por padrão. Essas linhas aparecem só em desenhos abertos
a partir de uma foto com dados da câmera ou de direitos autorais.

### Importar perfil ICC… e Perfis salvos…

**Importar perfil ICC…** adiciona um arquivo `.icc` ou `.icm` de até 16 MiB a
**Perfil de saída**. **Perfis salvos…** abre a **Biblioteca de perfis de cor**.

### Nome da predefinição e botões de predefinição

**Salvar predefinição** salva as configurações como um novo destino com o
**Nome da predefinição**. **Atualizar predefinição** e **Excluir predefinição**
alteram ou removem a predefinição salva selecionada. **Redefinir destino**
restaura as configurações de um destino integrado.

### Visualizar saída

Mostra a imagem exportada ao lado da arte, com as legendas **Arte** e **Saída**, e
um aviso se alguma cor ficar fora da gama de saída. Alterar qualquer configuração
apaga a prévia.

### Escolher arquivo…

Pergunta onde salvar a imagem.

## Limites dos formatos

- JPEG e WebP são somente de 8 bits.
- JPEG não preserva transparência.
- WebP aceita até 16.384 pixels de cada lado.
- Com um perfil de saída em escala de cinza, WebP não fica disponível.
- Com um perfil de saída CMYK, só TIFF e JPEG ficam disponíveis, sem transparência.

As opções incompatíveis com as outras configurações ficam esmaecidas.

## Predefinições de exportação

Depois de uma exportação, um destino integrado guarda as configurações usadas.
Quando você exporta com uma predefinição salva, as configurações ficam guardadas
em **Personalizado**, e a predefinição em si só muda com **Atualizar predefinição**.

O nome de uma predefinição tem até 80 caracteres, e você pode guardar até 64
predefinições. As predefinições valem para todos os desenhos.

## Exportação HDR

![A caixa de diálogo Exportar imagem de um desenho HDR com JPEG HDR · mapa de ganho, depois de Visualizar saída.](shot:files/export-hdr-preview)

Em um desenho de 16 ou 32 bits em ponto flutuante, **Alcance dinâmico** oferece
estas opções:

| Opção | Grava |
| --- | --- |
| **Versão SDR** | A versão SDR do desenho, com as configurações SDR |
| **JPEG HDR · mapa de ganho** | Um `.jpg` com mapa de ganho |
| **AVIF HDR · mapa de ganho com transparência** | Um `.avif` com mapa de ganho e transparência |
| **PNG HDR · BT.2020 PQ** | Um `.png` codificado em BT.2020 PQ, com transparência |
| **OpenEXR · 32 bits em ponto flutuante** | Um `.exr` no espaço de cores do desenho, com transparência |

**Versão SDR** usa a versão SDR definida com
[Prova SDR](/pt-BR/docs/color-management/hdr/). OpenEXR não guarda dados da
câmera nem de direitos autorais. Em um desenho HDR, **Edição posterior** passa a
se chamar **Edição posterior (SDR)** e usa OpenEXR.

Para JPEG HDR e AVIF HDR, **Visualizar saída** acrescenta **Visualizar versão**,
com **Reconstrução HDR · prévia SDR** e **Base SDR codificada**.

Se a prévia encontrar cores fora do intervalo de PNG, JPEG ou AVIF HDR,
**Escolher arquivo…** fica indisponível até você ativar **Limitar cores HDR fora
do intervalo** ou escolher OpenEXR.

## Exportar novamente

**Arquivo > Exportar novamente** repete a última exportação do desenho com as
mesmas configurações e o mesmo arquivo, sem a caixa de diálogo. Fica indisponível
até você exportar o desenho uma vez.

Cada desenho guarda sua última exportação, inclusive depois de reiniciar. No
Firefox e no Safari, **Exportar novamente** mostra a caixa de diálogo **Baixar arquivo**.

## Outras plataformas

No Linux, as configurações ficam divididas nas páginas **Tamanho**, **Cor e
transparência** e **Predefinição**, e alguns rótulos são diferentes. As caixas de
diálogo do iPad e do macOS também usam rótulos próprios.
