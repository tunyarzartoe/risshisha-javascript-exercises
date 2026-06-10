// 'use strict';

'use strict';
document.querySelectorAll('#food,#drink').forEach(sec=>{
  const ul = Array.from(sec.children).find(c=>c.tagName==='UL');
  if(!ul) return;
  ul.classList.add('hidden');
  sec.querySelectorAll('img').forEach(img=>
    img.addEventListener('click',()=>ul.classList[img.name==='open'?'remove':'add']('hidden'))
  );
});



