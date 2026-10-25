// Apple's classic circle pointer: WWDC20 session 10640, Pointer Appearance.
// 19-point filled shape; adaptive contrast; smaller and darker on click.
// This is a capture annotation, independent of the editor's controls and styles.
export const pointerEvents = `
  addEventListener('pointermove',event=>{
    const p=window.__demoPointer;if(!p)return;
    p.style.left=(event.clientX-9.5)+'px';p.style.top=(event.clientY-9.5)+'px';p.style.visibility='visible';
  },true);
  addEventListener('pointerdown',()=>{
    const p=window.__demoPointer;if(!p)return;p.dataset.pressed='true';p.style.scale='.82';p.style.backgroundColor='rgba(72,72,72,.72)';
  },true);
  addEventListener('pointerup',()=>{
    const p=window.__demoPointer;if(!p)return;p.dataset.pressed='false';p.style.scale='1';p.style.backgroundColor='rgba(128,128,128,.65)';
  },true);
`;

export const installPointer = `(()=>{
  const p=document.createElement('div');p.id='demo-pointer';p.setAttribute('aria-hidden','true');p.dataset.pressed='false';
  Object.assign(p.style,{position:'fixed',left:'-100px',top:'-100px',width:'19px',height:'19px',borderRadius:'50%',cornerShape:'round',clipPath:'circle(50%)',border:'0',outline:'0',boxShadow:'none',backgroundColor:'rgba(128,128,128,.65)',backdropFilter:'grayscale(1) invert(1)',zIndex:'2147483647',pointerEvents:'none',transform:'none',scale:'1',transformOrigin:'center',visibility:'hidden',opacity:'1',transition:'scale 90ms ease-out, background-color 100ms ease-out'});
  document.body.append(p);window.__demoPointer=p;
})()`;

export const readPointer = `(()=>{
  const p=window.__demoPointer,s=getComputedStyle(p),r=p.getBoundingClientRect();
  return {x:r.x+r.width/2,y:r.y+r.height/2,width:r.width,height:r.height,visible:s.visibility==='visible'&&s.display!=='none'&&Number(s.opacity)>0,pressed:p.dataset.pressed==='true',opacity:Number(s.opacity),border:s.borderTopWidth,outline:s.outlineWidth,shadow:s.boxShadow,background:s.backgroundColor,backdrop:s.backdropFilter,corner:s.cornerShape,clip:s.clipPath,children:p.children.length};
})()`;
