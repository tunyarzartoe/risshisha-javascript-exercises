"use strict";

document.addEventListener('DOMContentLoaded', () => {
	const radios = document.querySelectorAll('#radio input[type="radio"][name="size"]');
	const photos = document.querySelectorAll('#photo img');
	// console.debug('[main20] radios found:', radios.length);
	// console.debug('[main20] photos found:', photos.length);

	function changeSize(size) {
		photos.forEach(img => {
			img.classList.remove('small', 'medium', 'large');
			img.classList.add(size);
			// remove inline width if present
			img.removeAttribute('width');
		});
	}

	radios.forEach(r => {
		r.addEventListener('change', () => {
			if (r.checked) changeSize(r.value);
		});
	});
	// 初期適用
	const checked = document.querySelector('#radio input[name="size"]:checked');
	if (checked) changeSize(checked.value);
});
