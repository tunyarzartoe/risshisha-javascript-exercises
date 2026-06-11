'use strict';

const nav = document.getElementById('auto-close-nav');
if (nav) nav.classList.remove('open');
document.addEventListener('mousemove', e => {
  if (e.clientY < 50) nav.classList.add('open');
  else nav.classList.remove('open');
});

