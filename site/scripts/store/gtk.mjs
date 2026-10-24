import { relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { artwork, reference, scenes } from '../capture/showcase-scenes.mjs';

export const window = { width: 1200, height: 800, scale: 2 };
export const themes = ['light', 'dark'];
export const origin = 'https://capycanvas.art';
export const directory = 'store/gtk';
export const recipeFiles = ['capture/showcase-scenes.mjs', 'store/gtk.mjs'];

export const imagePath = ({ scene, language, theme }) => `${directory}/${language.toLowerCase()}/${scene}-${theme}.png`;

const toWindow = ([x, y]) => [x * window.width / reference.width, y * window.height / reference.height];
const adaptAction = (action, storePosition) => action.type === 'bubble' && action.action.type === 'drag'
  ? { ...action, action: { ...action.action, position: storePosition ?? toWindow(action.action.position), viewport: [window.width, window.height] } }
  : action;
const adapt = ({ storePosition, ...step }) => step.type === 'frame' ? { ...step, zoom: step.zoom * window.width / reference.width }
  : step.type === 'action' ? { ...step, action: adaptAction(step.action, storePosition) } : step;

export function recipe(base) {
  return {
    scenes: scenes.map(({ id, workspace, source, steps }) => ({
      id, workspace,
      source: relative(base, fileURLToPath(new URL(source, artwork))),
      steps: [{ type: 'action', action: { type: 'invoke', command: 'fit_canvas' } }, ...steps.map(adapt)],
    })),
  };
}
