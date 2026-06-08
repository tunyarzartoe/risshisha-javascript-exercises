'use strict';

const number = document.getElementById('num');
const button = document.getElementById('round-off');
// 四捨五入
button.addEventListener('click', () => {
    const num = parseFloat(number.value);
    const rounded = Math.round(num);
    document.getElementById('round').textContent = `四捨五入: ${rounded}`;
    // alert(`四捨五入: ${rounded}`);
});