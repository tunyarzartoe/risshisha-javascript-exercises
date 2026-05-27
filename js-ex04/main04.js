'use strict';
// 以下のような Confirm ダイアログ表示し，[OK]ボタンが押される度に次の Confirm ダイアログを表示し続け，
// [キャンセル]ボタンが押されると Confirm ダイアログの表示を終了するよう，main04.js のソースコードを完
// 成させなさい。 
// 【キーワード】break 
let count = 0;
while (true) {
  const result = confirm(`${count + 1} 回目のダイアログ表示。次のダイアログを表示しますか？（[キャンセル]で終了）`);
    if (!result) {  
        break;  
    }
    count++;
}
