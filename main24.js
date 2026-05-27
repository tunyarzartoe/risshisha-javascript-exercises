'use strict';

const uls = document.querySelectorAll('#food ul, #drink ul');
uls.forEach((ul, index) => {
  ul.classList.add('hidden');
});
