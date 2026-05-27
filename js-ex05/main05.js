'use strict';

// while文を使用すること
// コンソールに下図のような出力をするよう，main05.js のソースコードを完成させなさい。 
// 【キーワード】continue 
// 5 回目」が表示されていない
let count = 0;
while (count < 10) {
    count++;
    if (count === 5) {
        continue;
    }
    console.log(`${count} 回目`);
}