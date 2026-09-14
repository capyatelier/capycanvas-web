---
title: "Save and reset brush settings"
description: "Keep brush changes in a workspace and restore defaults when needed."
purpose: "Brush adjustments are saved with the workspace. Create another workspace when you want to preserve one set of tool settings while experimenting with another."
techniques: ["Keep per-preset changes in a workspace.", "Create a separate workspace for another brush setup.", "Distinguish Reset All Brushes from Restore Starting Layout."]
figure: "1: Active workspace. 2: Tool settings saved with it. 3: Reset All Brushes confirmation."
related: ["advanced/brush-engine", "workspace/management"]
image: {"light": "/assets/guides/advanced-custom-brushes-light.webp", "dark": "/assets/guides/advanced-custom-brushes-dark.webp", "alt": "1: Active workspace. 2: Tool settings saved with it. 3: Reset All Brushes confirmation."}
---

## Keep your adjustments

Select a preset and change its controls in **Tool**. Switch to another preset, then return to compare the saved values. The workspace remembers per-preset overrides along with the selected tools and arrangement.

These are workspace settings, separate from the `.capy` document. Saving artwork does not create a portable brush library, and opening artwork does not replace the current workspace.

## Preserve another setup

Use **New Workspace** to copy the current settings and arrangement, then give the copy a useful name. Make experimental brush changes in that copy. Switching back restores the other workspace’s values.

This is the available way to retain separate setups; the editor does not currently expose a standalone custom-preset duplicate/import/export workflow. See [Manage workspaces](/docs/workspace/management/) for switching, pinning and restoration.

## Reset the right settings

Use **Reset All Brushes** to restore the built-in brush values in the current workspace, including presets that are not currently selected. It preserves your document and arrangement, but removes that workspace’s brush overrides.

**Restore Starting Layout** restores panel placement instead. It keeps working tool settings. Make a workspace copy before resetting if you want to retain the values for later comparison.
