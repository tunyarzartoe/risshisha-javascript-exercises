"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('studentList');
  if (!table) return;
  const tbody = table.querySelector('tbody');

  // 1) getElementsByTagName を使ったパターン（リクエストに合わせた実装）
  const rows = table.getElementsByTagName('tr');
  for (let i = 1; i < rows.length; i++) { // 0 はヘッダ行なのでスキップ
    const cells = rows[i].getElementsByTagName('td');
    if (cells[1] && cells[1].textContent.includes('P')) {
      rows[i].classList.add('yellow');
    } else {
      rows[i].classList.remove('yellow');
    }
  }

  // 2) :nth-child のデモ — CSSセレクタで 3 番目の行を取得して装飾
  const third = tbody.querySelector('tr:nth-child(3)');
  if (third) {
    // 既に黄色になっている場合もあるので別クラスではなく一時強調を追加
    third.style.outline = '2px solid #f06';
    setTimeout(() => { third.style.outline = ''; }, 800);
    console.log('querySelector(:nth-child(3)) ->', third);
  }

  // 3) parentNode のデモ — セルをクリックするとその親行をトグル
  tbody.addEventListener('click', (e) => {
    const td = e.target.closest('td');
    if (!td) return;
    const row = td.parentNode; // tr ノード（parentNode を使用）
    row.classList.toggle('yellow');

    // 親ノードチェーンを出力
    console.log('クリックしたセル:', td.textContent.trim());
    console.log('その親行 (parentNode):', row);
    console.log('親の親 (row.parentNode -> tbody):', row.parentNode);
    console.log('さらに上の親 (tbody.parentNode -> table):', row.parentNode && row.parentNode.parentNode);
  });
});


// }   



