'use strict';

const processes = ['要件定義', '外部設計', '内部設計', 'プログラミング', 'テスト', '運用・保守'];
const title = document.getElementById('title');
title.textContent = 'システム開発の流れ';
const list = document.getElementById('process');
for (const process of processes) {
  const item = document.createElement('li');
  item.textContent = process;
  list.appendChild(item);
}
