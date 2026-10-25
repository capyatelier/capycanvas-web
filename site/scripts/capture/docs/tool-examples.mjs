import {setPaper} from '../dry-media.mjs';

// Real strokes on the left remain untouched; the tool acts on the right.
export default async function toolExamples({e, shoot}) {
  await e.workspace('painter');
  if (!await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  const setting = (id, value) => e.send({type:'set_tool_setting', id, value});
  const fresh = async (width, height, relief = 0) => {
    await e.newDocument(width, height, {paper:'drawing_paper', relief});
    await setPaper(e, 'drawing_paper', {color:'#e6e2da', relief, scale:.45});
    await e.frame(Math.min(1400/width, 650/height), [width/2, height/2]);
  };
  const bands = async (width, height, colors) => {
    for (const [index,color] of colors.entries()) {
      const y=height*(.30+index*.20);
      await e.brush(44, height*.20, color);
      await setting('smoothing_strength', 0);
      await e.draw(`M${width*.08} ${y} C${width*.32} ${y-height*.07} ${width*.58} ${y+height*.07} ${width*.92} ${y}`, {pressure:1});
    }
  };
  const sample = async (name,width,height) => {
    await e.invoke('hand');
    await shoot(`examples/${name}`, {target:{documentRect:[0,0,width,height]},pad:0,maxWidth:1800});
  };
  for (const [name,preset] of [['bristle-blender',47],['dither-blender',55],['marbling',52]]) {
    const width=name==='dither-blender'?600:1200, height=width*.3;
    await fresh(width,height,name==='bristle-blender'?14:0);
    const colors=name==='bristle-blender'?['#b8846c','#e6c59c','#86675c']:name==='dither-blender'?['#69879e','#c4d5db','#3f5b76']:['#7ba7a2','#d58b76','#d9bf83'];
    await bands(width,height,colors);
    await e.brush(preset,height*.67,'#77848b');
    await setting('smoothing_strength',0);
    const points=Array.from({length:161},(_,i)=>{const t=i/160;return[width*(.49+.4*t),height*(.5+.13*Math.sin(t*Math.PI*5))]});
    await e.stroke(points,{pressure:.85,settleEvery:12});
    await sample(name,width,height);
  }
  const width=1200,height=360;
  await fresh(width,height);
  await bands(width,height,['#679c9c','#d9907a','#d9bd79']);
  await e.brush(63,210,'#77848b');
  await setting('smoothing_strength',0);
  for(let n=0;n<3;n++) await e.draw('M650 180 L1100 180',{pressure:.85});
  await sample('liquify-edge',width,height);

  await fresh(width,height);
  await bands(width,height,['#679c9c','#d9907a','#d9bd79']);
  await e.brush(12,150,'#77848b');
  await setting('smoothing_strength',0);
  for(const x of [260,440,720,900]) await e.draw(`M${x} 95 C${x-90} 150 ${x+100} 210 ${x} 285`,{pressure:.8});
  await e.brush(64,270,'#77848b');
  await setting('smoothing_strength',0);
  for(let n=0;n<4;n++) await e.draw(`M${660+n*85} 65 L${660+n*85} 305`,{pressure:1});
  await sample('liquify-reconstruct',width,height);
}
