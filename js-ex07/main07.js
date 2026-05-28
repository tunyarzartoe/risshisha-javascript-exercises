'use strict';

let answer = Math.floor(Math.random() * 100) + 1;
let count = 0;

alert('数当てゲームを始めます。1 以上100 以下の数値を当ててください。');
while (true) {
    let input = prompt('数値を入力してください。');
    if (input === null) {
        alert('ゲームを中断します。');
        break;
    } else if (isNaN(input) || input < 1 || input > 100 || input.trim() === '') {
        alert('1～100 の数字を入力してください。');
    } else {
        count++;
        let guess = Number(input);
        if (guess > answer) {
            alert('正解はもっと小さい数です。');
        } else if (guess < answer) {
            alert('正解はもっと大きい数です。');
        } else {
            alert(count + '回目で正解しました！');
            break;
        }

    }
}