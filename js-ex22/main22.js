'use strict';

const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach((el, idx) => {
	el.addEventListener('focus', () => {
		el.style.backgroundColor = 'pink';
	});
	el.addEventListener('blur', () => {
		el.style.backgroundColor = '#fffee8';
	});
	el.style.transition = 'background-color 0.12s ease-in-out';
});
