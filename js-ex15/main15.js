'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const button = document.getElementById('addButton');
const result = document.getElementById('msg');
button.addEventListener('click', () => {
    const sum = parseInt(num1.value) + parseInt(num2.value);
    console.log(sum);
    result.textContent = sum;
});
