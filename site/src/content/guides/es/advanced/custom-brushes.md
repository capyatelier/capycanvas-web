---
title: "Guardar y restablecer la configuración del pincel"
description: "Mantenga los ajustes de su pincel, pruebe otros nuevos y vuelva a los valores predeterminados."
purpose: "Cuando cambia la configuración de un pincel, Capy Canvas los recuerda como parte de su espacio de trabajo. No es necesario guardar nada a mano. Si desea experimentar sin perder una configuración que le guste, primero haga una copia del espacio de trabajo."
techniques: ["Mantenga sus cambios en el espacio de trabajo actual.", "Pruebe una configuración diferente en una copia del espacio de trabajo.", "Restablece los pinceles sin cambiar tu diseño."]
figure: "1: Espacio de trabajo activo. 2: Configuración del pincel guardada con él. 3: Confirmación de Restablecer todos los pinceles."
related: ["advanced/brush-engine", "workspace/management"]
image: {"light": "/assets/guides/advanced-custom-brushes-light.webp", "dark": "/assets/guides/advanced-custom-brushes-dark.webp", "alt": "1: Espacio de trabajo activo. 2: Configuración del pincel guardada con él. 3: Confirmación de Restablecer todos los pinceles."}
---

## Tus cambios se guardan para ti.

Elija un pincel y cambie su configuración en el panel **Tool**. Cuando cambias a otro pincel y vuelves más tarde, los cambios siguen ahí. Cada espacio de trabajo recuerda la configuración de cada pincel por separado, junto con las herramientas que utilizó por última vez y la forma en que están dispuestos los paneles.

La configuración del pincel pertenece al espacio de trabajo, no a tus dibujos. Abrir un dibujo no cambia tus pinceles y guardar un dibujo no los guarda.

## Prueba con otra configuración

Para experimentar libremente, elija **Window → Workspaces → New Workspace…**. Esto hace una copia del espacio de trabajo actual, con sus pinceles y diseño, bajo un nuevo nombre. Realice sus cambios en la copia. Al volver al espacio de trabajo original, se recupera la configuración exactamente como la dejó.

[Administrar espacios de trabajo](/es/docs/workspace/management/) explica cómo cambiar entre espacios de trabajo y elegir cuáles aparecen en la barra de título.

## Empezar de nuevo

**Window → Workspaces → Reset All Brushes…** devuelve todos los pinceles del espacio de trabajo actual a su configuración original, incluidos los pinceles que no estás usando en este momento. Sus dibujos y el diseño de su panel no se ven afectados.

Si desea que los paneles vuelvan a donde comenzaron, use **Restore Starting Layout…**. Esto devuelve los paneles pero mantiene la configuración del pincel, por lo que los dos reinicios nunca deshacen el trabajo del otro.
