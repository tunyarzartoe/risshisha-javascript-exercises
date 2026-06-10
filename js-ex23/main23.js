'use strict';

//substring(), target

const fullTextArea = document.getElementById('full-text');
const omitTextArea = document.getElementById('omit-text');

// 全体エリアを隠す
fullTextArea.classList.add('hidden');

// 全体エリアの文章の先頭から20文字分を，省略文章として取得
// 文章の前後にあるスペースは削除
const fullText = fullTextArea.textContent.trim();
const omittedText = fullText.substring(0, 20).trim();
console.log(omittedText);
// 省略エリアに省略文章を設定
omitTextArea.textContent = omittedText;

// [続きを読む]リンクにclickイベントを設定
document.querySelector('a[rel="all"]').addEventListener('click', e => {
  // [続きを読む]リンクを隠す
  e.target.classList.add('hidden');

  // 省略エリアを隠す
  omitTextArea.classList.add('hidden');

  // 全体エリアを表示
  fullTextArea.classList.remove('hidden');

});