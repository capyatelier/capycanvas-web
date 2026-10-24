---
title: "Mixing, bleed and bristles"
description: "The settings that control how wet, watercolor, blending and bristle brushes handle paint."
related: ["brushes/tip-texture", "brushes/basics", "drawing/blend-liquify", "drawing/brush-tools"]
---

You can set how wet and blending brushes handle paint in the **Tool** panel.
Each group appears only on the brushes named in its section.

![The lower part of the Tool panel for Wet Watercolor, with the Mixing, Watercolor, Bleed and Blending groups.](shot:brushes/wet-media-settings)

## Mixing

**Mixing** appears on the oil paint brushes, **Opaque Gouache**, the watercolor
brushes and every blender. **Average pickup**, **Persistence** and
**Pressure refill** appear only on the oil paint brushes, **Opaque Gouache**,
**Wet Blender** and **Color Mixer**.

### Paint load

Sets how much of its own color the brush carries, and on the watercolor
brushes, the pigment strength. Lower values let the color picked up from the
layer take over.

### Color pickup

Sets how far the brush drags the color it picks up from the layer along the
stroke.

### Dilution

Thins the paint the brush carries. Higher values weaken the brush's own color
in the mix.

### Average pickup

Sets how far the colors picked up across the tip blend into one. At 0%, each
part of the tip keeps its own.

### Persistence

Sets how far the averaged color carries along the stroke. It appears only while
**Average pickup** is above 0%.

### Pressure refill

Sets how much firm pressure reloads the selected color into the brush.
**Mixing Brush** lays its color under firm pressure and only blends under a
light touch.

## Blender

Each blender adds settings to the **Blender** group. **Spread** sits at the top
of the **Tool** panel.

| Setting | Blenders | Sets |
| --- | --- | --- |
| **Spread** | All except **Blending Knife** and **Marbling** | How far around each point of the stroke the blender gathers color. |
| **Streaks** | **Smudge**, **Soft Blender**, **Blending Stump**, **Tissue**, **Natural Blender**, **Bristle Blender**, **Blending Knife** | How much the stroke breaks into streaks along its direction. |
| **Sharpness** | **Sharpen** | How much contrast the stroke adds. |
| **Texture kept** | **Texture-Keeping Blender** | How much of the fine texture under the stroke stays over the blended color. |
| **Detail size** | **Texture-Keeping Blender** | The size of the texture that is kept. |
| **Blend lightness** | **Hue Blender** | How much lightness blends along with hue and saturation. |
| **Grit** | **Scatter Blender** | How fully each scattered pixel replaces the one beneath. |
| **Stretch** | **Painterly Blender**, **Crystal Blender** | How far patches or cells stretch along the stroke. |
| **Cell size** | **Crystal Blender** | The size of the cells. |
| **Swirl** | **Marbling** | How strongly the paint curls. |
| **Swirl size** | **Marbling** | The size of the swirls. |
| **Edge keeping** | **Comb Blender** | How readily the blend stops at an edge between colors. |

## Watercolor

**Watercolor Wash** and **Wet Watercolor** have a **Watercolor** group for the
darker rim where the paint pools. Watercolor reacts only to paint on the same
layer. **Edge strength** sits at the top of the **Tool** panel, above the groups.

### Edge strength

Sets how dark the rim is.

### Edge width

Sets the width of the rim, from 0 to 32 px.

## Bleed

The **Bleed** group of the two watercolor brushes sets how water and pigment
spread into the paper around the stroke. Paint spreads only during the stroke,
not after you lift the pen.

### Wet bleed

Sets how fast paint spreads into paper that is already wet.

### Dry bleed

Sets how fast paint spreads into dry paper.

### Bleed distance

Sets how far paint can spread from each dab, from 0 to 96 px.

### Water load

Sets how much water each dab puts on the paper. It sits at the top of the **Tool** panel, above the groups.

## Color mixing

You can choose how a mixing brush combines the colors it picks up.

Do one of the following:

- Choose **Oklab mixing**, **Linear light mixing** or **Classic mixing** from **Color mixing** in the **Tool** panel.
- Open **More tool options** in the Tool Options bar, then choose **Color mixing** in the Tool drawer ([Size, strength and opacity](/docs/brushes/basics/)).
- Search commands for the choice's name.

| Choice | Mixing |
| --- | --- |
| **Oklab mixing** | Mixes picked-up colors evenly, as the eye sees them. |
| **Linear light mixing** | Mixes picked-up colors as light mixes. |
| **Classic mixing** | Mixes the color values as they are stored in the drawing. |

Every built-in mixing brush starts on **Oklab mixing**. The choice is saved
with the brush, and the drawing's **Blending** setting doesn't change it. For a
brush that doesn't mix, the choices are unavailable.

![The Color mixing setting showing Oklab mixing.](shot:brushes/color-mixing-menu)

## Bristles

The **Bristles** group appears only on **Bristle Paintbrush**. This brush
streaks the other color of the foreground and background pair into thick
ridges of paint.

### Bristle scale

Sets the size of the bristle marks relative to the brush size. The slider goes
from 25% to 200%, and you can type values up to 400%.

### Paint load

Sets how much paint the brush carries at the start of each stroke.
