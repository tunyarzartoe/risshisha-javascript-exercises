'use strict';

// ブラウザに下図のような出力をするよう，main12.js のソースコードを完成させなさい。 
// 【キーワード】for...in 

const person = { name: '佐藤', age: 25, address: '東京都' };
for (const key in person) {
  document.getElementById(key).textContent = person[key];
}