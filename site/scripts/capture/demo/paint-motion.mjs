import assert from 'node:assert/strict';

export const cues={
  'approach-blend':{seconds:.7,clock:'early',bow:.035},
  'choose-effects':{seconds:.45,clock:'early',bow:-.02},
  'choose-painterly':{seconds:.3,clock:'early',bow:0},
  'approach-size':{seconds:.5,clock:'early',bow:.015},
  'size-painterly':{seconds:.45,clock:'balanced',bow:0},
  'approach-sky':{seconds:.62,clock:'balanced',bow:-.03},
  'hover-painterly-2':{seconds:.42,clock:'balanced',bow:.05},
  'hover-painterly-3':{seconds:.4,clock:'balanced',bow:-.04},
  'hover-painterly-4':{seconds:.44,clock:'balanced',bow:.05},
  'approach-tool-set':{seconds:.55,clock:'early',bow:-.02},
  'scroll-tool-set':{seconds:.4,clock:'balanced',bow:0},
  'choose-crystal':{seconds:.34,clock:'early',bow:.02},
  'approach-size-crystal':{seconds:.5,clock:'early',bow:.015},
  'size-crystal':{seconds:.42,clock:'balanced',bow:0},
  'approach-sun':{seconds:.62,clock:'balanced',bow:.03},
  'hover-crystal-2':{seconds:.48,clock:'balanced',bow:-.04},
  'approach-column-edge':{seconds:.6,clock:'early',bow:.02},
  'close-column':{seconds:.36,clock:'early',bow:0},
  'approach-filters':{seconds:.8,clock:'early',bow:-.03},
  'approach-panel-edge':{seconds:.28,clock:'early',bow:0},
  'raise-panel':{seconds:.45,clock:'balanced',bow:0},
  'approach-search':{seconds:.36,clock:'early',bow:.02},
  'choose-posterize':{seconds:.32,clock:'early',bow:-.02},
  'approach-clear-posterize':{seconds:.36,clock:'early',bow:.02},
  'choose-crosshatch':{seconds:.32,clock:'early',bow:-.02},
  'approach-clear-crosshatch':{seconds:.36,clock:'early',bow:.02},
  'choose-glass':{seconds:.32,clock:'early',bow:-.02},
  'approach-distortion':{seconds:.44,clock:'early',bow:.025},
  'approach-layers-tab':{seconds:.4,clock:'early',bow:-.03},
  'approach-posterize-row':{seconds:.42,clock:'early',bow:.03},
  'swipe-posterize':{seconds:.36,clock:'early',bow:0},
  'choose-delete':{seconds:.32,clock:'early',bow:.03},
};

export function route(from,to,name,custom){
  const cue=cues[name];assert.ok(cue,`Known gesture ${name}`);
  if(custom)return {cue,path:custom};
  assert.ok(to&&Number.isFinite(cue.bow),`A travel destination is required for ${name}`);
  const dx=to[0]-from[0],dy=to[1]-from[1];
  const c1=[from[0]+dx*.32-dy*cue.bow,from[1]+dy*.32+dx*cue.bow];
  const c2=[from[0]+dx*.72-dy*cue.bow,from[1]+dy*.72+dx*cue.bow];
  return {cue,path:t=>from.map((v,i)=>(1-t)**3*v+3*(1-t)**2*t*c1[i]+3*(1-t)*t*t*c2[i]+t**3*to[i])};
}
