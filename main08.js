'use strict';

// ここに，うるう年判定を行う関数leapYearを定義
// 引数year：西暦を表す整数
// 返却値：引数yearが，うるう年なら'うるう年'，うるう年でなければ'平年'




let i = 1900;
console.log(`${i}年は${leapYear(i)}です`);
i = 1994;
while(i < 2005) {
  console.log(`${i}年は${leapYear(i)}です`);
  i += 1;
}