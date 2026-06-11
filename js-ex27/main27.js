'use strict';
  
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = 'content-' + tab.id;
        contents.forEach(content => {
            if (content.id === targetId) {  
                content.classList.remove('hidden');
                tab.classList.add('active');
            } else {
                content.classList.add('hidden');
                const relatedTabId = content.id.replace('content-', '');
                const relatedTab = document.getElementById(relatedTabId);
                if (relatedTab) relatedTab.classList.remove('active');
            }
        });
    });
}); 
    
 
 
