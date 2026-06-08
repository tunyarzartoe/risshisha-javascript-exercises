'use strict';
// ブラウザの[検索]ボタンをクリックすると，下図のような出力をするよう，main14.js のソースコードを完成さ
// せなさい。 
// 【キーワード】addEventListener，click イベント 

document.getElementById('search').addEventListener('click', () => {
    document.getElementById('msg').textContent = '検索ボタンがクリックされました。';
});
