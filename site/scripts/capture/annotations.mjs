// Inject only editorial annotation chrome. Never replace or repaint app controls.
// Numbers are language-neutral; each translated guide explains them in its caption.
export async function annotate(b, targets, first = true) {
  await clearAnnotations(b);
  return b.evaluate(`(()=>{
    const specs=${JSON.stringify(targets)};
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 '+innerWidth+' '+innerHeight);
    Object.assign(svg.style,{position:'fixed',inset:'0',width:'100%',height:'100%',pointerEvents:'none',zIndex:'2147483647'});
    const add=(tag,attrs)=>{const node=document.createElementNS(svg.namespaceURI,tag);for(const [key,value]of Object.entries(attrs))node.setAttribute(key,value);svg.append(node);return node;};
    const result=specs.map((spec,index)=>{
      const visible=n=>n.checkVisibility()&&n.getBoundingClientRect().width>0;
      let nodes;
      if(spec.documentRect)nodes=[document.querySelector(spec.selector||'#canvas')];
      else if(${first}){
        nodes=[...document.querySelectorAll(spec.selector)].filter(n=>visible(n)&&(!spec.labels||spec.labels.includes(n.querySelector('.menu-label')?.textContent))&&(!spec.text||spec.text.includes(n.textContent.trim())));
        if(!nodes.length)throw Error('Annotation target missing: '+spec.selector);
        __capture.pick('callout:'+index,nodes);
      } else {
        nodes=__capture.recall('callout:'+index);
        if(!nodes.every(visible))throw Error('Annotation target hidden in this language: '+spec.selector);
      }
      const node=nodes[spec.index||0];
      if(!node)throw Error('Annotation target index missing: '+spec.selector);
      let r=node.getBoundingClientRect();
      if(spec.union){const boxes=nodes.map(n=>n.getBoundingClientRect());const x=Math.min(...boxes.map(r=>r.left)),y=Math.min(...boxes.map(r=>r.top)),right=Math.max(...boxes.map(r=>r.right)),bottom=Math.max(...boxes.map(r=>r.bottom));r={left:x,top:y,right,bottom};}
      if(spec.documentRect){const camera=layerApp.state().camera;if(camera.rotation!==0||camera.flipped.some(Boolean))throw Error('Document callout requires an unrotated view');const [x,y,w,h]=spec.documentRect;const ratio=camera.viewport[0]/innerWidth;r={left:(camera.translation[0]+x*camera.zoom)/ratio,top:(camera.translation[1]+y*camera.zoom)/ratio,right:(camera.translation[0]+(x+w)*camera.zoom)/ratio,bottom:(camera.translation[1]+(y+h)*camera.zoom)/ratio};}
      let left=r.left,top=r.top,right=r.right,bottom=r.bottom;
      for(let p=node.parentElement;p;p=p.parentElement){const style=getComputedStyle(p),box=p.getBoundingClientRect();
        if(/hidden|clip|auto|scroll/.test(style.overflowX)){left=Math.max(left,box.left);right=Math.min(right,box.right);}
        if(/hidden|clip|auto|scroll/.test(style.overflowY)){top=Math.max(top,box.top);bottom=Math.min(bottom,box.bottom);}
      }
      r={x:left,y:top,width:right-left,height:bottom-top,right,bottom};
      const x=Math.max(4,r.x-4),y=Math.max(4,r.y-4),w=Math.min(innerWidth-x-4,r.width+8),h=Math.min(innerHeight-y-4,r.height+8);
      if(w<4||h<4||r.bottom<=0||r.right<=0)throw Error('Annotation target outside viewport: '+spec.selector);
      add('rect',{x,y,width:w,height:h,rx:8,fill:'none',stroke:'#ffffff','stroke-width':4});
      add('rect',{x,y,width:w,height:h,rx:8,fill:'none',stroke:'#c95812','stroke-width':2.5});
      const side=spec.badge||'corner';
      const positions={inside:[x+13,y+13],corner:[x-9,y-9],above:[x+w/2,y-14],below:[x+w/2,y+h+14],left:[x-14,y+h/2],right:[x+w+14,y+h/2]};
      if(!positions[side])throw Error('Unknown badge side: '+side);
      const cx=Math.min(innerWidth-13,Math.max(13,positions[side][0])),cy=Math.min(innerHeight-13,Math.max(13,positions[side][1]));
      add('circle',{cx,cy,r:11,fill:'#a84008',stroke:'#fff','stroke-width':2});
      add('text',{x:cx,y:cy+4.5,'text-anchor':'middle','font-family':'system-ui,sans-serif','font-size':13,'font-weight':750,fill:'#fff'}).textContent=index+1;
      return {number:index+1,...spec,bounds:{x,y,width:w,height:h}};
    });
    const overlay=document.createElement('div');overlay.id='capture-annotations';overlay.popover='manual';overlay.setAttribute('aria-hidden','true');
    Object.assign(overlay.style,{position:'fixed',inset:'0',margin:'0',padding:'0',border:'0',width:'100vw',height:'100vh',background:'transparent',pointerEvents:'none',overflow:'visible'});
    overlay.append(svg);document.documentElement.append(overlay);overlay.showPopover();return result;
  })()`);
}
export const clearAnnotations = b => b.evaluate("document.getElementById('capture-annotations')?.remove();void 0");
