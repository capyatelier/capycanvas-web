---
title: "Salvar e redefinir as configurações do pincel"
description: "Mantenha os ajustes do pincel, experimente novos e retorne aos padrões."
purpose: "Quando você altera as configurações de um pincel, o Capy Canvas as lembra como parte do seu espaço de trabalho. Você não precisa salvar nada manualmente. Se você quiser experimentar sem perder a configuração desejada, primeiro faça uma cópia do espaço de trabalho."
techniques: ["Mantenha suas alterações no espaço de trabalho atual.", "Experimente uma configuração diferente em uma cópia do espaço de trabalho.", "Redefina pincéis sem alterar seu layout."]
figure: "1: Espaço de trabalho ativo. 2: Configurações de pincel salvas com ele. 3: Confirmação de redefinição de todos os pincéis."
related: ["advanced/brush-engine", "workspace/management"]
image: {"light": "/assets/guides/advanced-custom-brushes-light.webp", "dark": "/assets/guides/advanced-custom-brushes-dark.webp", "alt": "1: Espaço de trabalho ativo. 2: Configurações de pincel salvas com ele. 3: Confirmação de redefinição de todos os pincéis."}
---

## Suas alterações são mantidas para você

Escolha um pincel e altere suas configurações no painel **Tool**. Quando você muda para outro pincel e volta mais tarde, suas alterações ainda estão lá. Cada área de trabalho lembra as configurações de cada pincel separadamente, junto com as ferramentas usadas pela última vez e a forma como os painéis são organizados.

As configurações de pincel pertencem à área de trabalho, não aos seus desenhos. Abrir um desenho não altera seus pincéis e salvar um desenho não os salva.

## Tente outra configuração

Para experimentar livremente, escolha **Window → Workspaces → New Workspace…**. Isso faz uma cópia da área de trabalho atual, com seus pincéis e layout, com um novo nome. Faça suas alterações na cópia. Voltar para o espaço de trabalho original traz de volta as configurações exatamente como você as deixou.

[Gerenciar espaços de trabalho](/pt-BR/docs/workspace/management/) explica como alternar entre espaços de trabalho e escolher quais aparecem na barra de título.

## Comece do zero

**Window → Workspaces → Reset All Brushes…** retorna todos os pincéis na área de trabalho atual às suas configurações originais, incluindo os pincéis que você não está usando no momento. Seus desenhos e o layout do painel não são afetados.

Se você quiser que os painéis voltem ao ponto inicial, use **Restore Starting Layout…**. Isso recoloca os painéis, mas mantém as configurações do pincel, para que as duas redefinições nunca desfaçam o trabalho uma da outra.
