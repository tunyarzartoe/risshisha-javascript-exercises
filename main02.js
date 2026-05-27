'use strict';
// [課題02] 
// 下図のようなPrompt ダイアログを表示し，「yes」と入力して[OK]ボタンが押された場合は「yes が入力されま
// した」，「no」と入力して[OK]ボタンが押された場合は「no が入力されました」，それ以外の場合は「yes かno を
// 入力して[OK]ボタンを押してください」と記載された Alert ダイアログを表示するよう，main02.js のソース
// コードを完成させなさい。 
// 【キーワード】prompt 
 
// [Prompt ダイアログ] 

let input = prompt("yes か no を入力してください");

if (input === "yes") {
    alert("yes が入力されました");  
} else if (input === "no") {
    alert("no が入力されました");
} else {
    alert("yes か no を入力して[OK]ボタンを押してください");
}   