'use strict';

 const human = document.getElementById('human');
 document.querySelectorAll('#clothes img').forEach(img=>
   img.addEventListener('mouseover',()=>{  
        const clone = img.cloneNode();  
        clone.style.zIndex = 1;
        human.parentNode.appendChild(clone);
        clone.addEventListener('mouseout',()=>clone.remove());
   })
    );
    

  
