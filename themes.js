/* Browser-local site-wide visual preference. */
(()=>{
const root=document.documentElement,buttons=[...document.querySelectorAll('[data-look-option]')];
document.querySelectorAll('.chapter-heading').forEach((el,i)=>el.dataset.match=String(i+1));
const labels={original:'原版空间',debate:'辩论撞色',mystery:'悬疑档案',arena:'竞技现场',heritage:'青绿剧场'};
function sync(value){buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lookOption===value)));document.querySelector('#look-status').textContent='当前全站风格：'+labels[value]}
function change(value){if(!Object.hasOwn(labels,value))return;const position=current;root.dataset.look=value;try{localStorage.setItem('yiben-visual-style',value)}catch(e){}sync(value);measure();current=position;scrollTo(0,Math.min(1,position/travel())*(document.documentElement.scrollHeight-innerHeight));frame.done=false}
buttons.forEach(b=>b.addEventListener('click',()=>change(b.dataset.lookOption)));
sync(root.dataset.look||'original');
addEventListener('storage',e=>{if(e.key==='yiben-visual-style')change(e.newValue||'original')});
})();
