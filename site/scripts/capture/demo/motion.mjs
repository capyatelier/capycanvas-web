import assert from 'node:assert/strict';

// Most travel is direct. A few long transfers have a single gentle bow.
// No alternating waypoints, periodic noise, or mandatory lateral deviation.
export const cues={
  'approach-wheel':{seconds:.55,clock:'early',bow:0},
  'carry-wheel':{seconds:1.55,clock:'balanced',bow:-.055},
  'approach-pencil':{seconds:1,clock:'early',bow:.012},
  'carry-pencil':{seconds:1.4,clock:'balanced',bow:-.025},
  'approach-zen':{seconds:.7,clock:'early',bow:0},
  'approach-field':{seconds:.67,clock:'balanced',bow:.018},
  'field-pick':{seconds:.72,clock:'early',bow:0},
  'approach-hue':{seconds:.38,clock:'early',bow:0},
  'hue-sweep':{seconds:1.12,clock:'balanced'},
  'open-chooser':{seconds:.55,clock:'early',bow:0},
  'choose-pen':{seconds:.4,clock:'early',bow:.015},
  'choose-blotty':{seconds:.7,clock:'balanced',bow:-.012},
  'open-halo':{seconds:.55,clock:'early',bow:.012},
  'approach-hardness':{seconds:.36,clock:'early',bow:0},
  'hardness-change':{seconds:2.4,clock:'balanced'},
};

export function clock(t,name){
  return name==='early'?6*t*t-8*t**3+3*t**4:t*t*t*(10-15*t+6*t*t);
}

export function route(from,to,name,custom){
  const cue=cues[name];assert.ok(cue,`Known gesture ${name}`);
  if(custom)return {cue,path:custom};
  assert.ok(to&&Number.isFinite(cue.bow),`A travel destination is required for ${name}`);
  const dx=to[0]-from[0],dy=to[1]-from[1];
  const c1=[from[0]+dx*.32-dy*cue.bow,from[1]+dy*.32+dx*cue.bow];
  const c2=[from[0]+dx*.72-dy*cue.bow,from[1]+dy*.72+dx*cue.bow];
  return {cue,path:t=>from.map((v,i)=>(1-t)**3*v+3*(1-t)**2*t*c1[i]+3*(1-t)*t*t*c2[i]+t**3*to[i])};
}

export function metrics(samples){
  const first=samples[0],last=samples.at(-1),dx=last.x-first.x,dy=last.y-first.y,chord=Math.hypot(dx,dy);
  let length=0,minSide=0,maxSide=0,backtracking=0,lastAlong=0;
  for(let i=0;i<samples.length;i++){
    const p=samples[i],side=chord?((p.x-first.x)*dy-(p.y-first.y)*dx)/chord:0;
    const along=chord?((p.x-first.x)*dx+(p.y-first.y)*dy)/chord:0;
    minSide=Math.min(minSide,side);maxSide=Math.max(maxSide,side);
    if(i){length+=Math.hypot(p.x-samples[i-1].x,p.y-samples[i-1].y);backtracking+=Math.max(0,lastAlong-along);}
    lastAlong=along;
  }
  return {chord,length,pathRatio:chord?length/chord:1,minSide,maxSide,backtracking};
}
