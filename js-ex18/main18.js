 'use strict';

//  ブラウザの[送信]ボタンを押すと，名前・年齢・性別が入力されているか確認し，入力されていない箇所がある
// 場合はブラウザ①のようなエラーメッセージを表示し，全て入力されている場合はブラウザ②のような別画面
// （18-1.html）に遷移するよう，main18.js のソースコードを完成させなさい。ここで，名前・年齢欄は，半角
// スペースあるいは全角スペースのみ入力されている場合も，エラーメッセージを表示するものとする。 
// 【キーワード】submit イベント，preventDefault，trim，push，:checked，length，submit 
 'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) {
        console.warn('フォーム要素が見つかりません。');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameEl = form.querySelector('input[name="name"]');
        const ageEl = form.querySelector('input[name="age"]');
        const nameRaw = nameEl ? nameEl.value : '';
        const ageRaw = ageEl ? ageEl.value : '';
        // 半角・全角スペースのみは空扱いにする
        const nameIsEmpty = nameRaw.replace(/[\u3000\s]/g, '').length === 0;
        const ageIsEmpty = ageRaw.replace(/[\u3000\s]/g, '').length === 0;
        const name = nameRaw.trim();
        const age = ageRaw.trim();
        const gender = form.querySelector('input[name="gender"]:checked');
        const errors = [];

        if (nameIsEmpty) {
            errors.push('名前を入力してください。');
        }
        if (ageIsEmpty) {
            errors.push('年齢を入力してください。');
        }
        if (!gender) {
            errors.push('性別を選択してください。');
        }

        // 課題HTMLにある #error-msg-list に出力する
        const errorList = document.getElementById('error-msg-list');
        let errorContainer = null;
        if (errorList) {
            errorContainer = errorList;
        } else {
            // 互換：フォーム直下にコンテナを作る
            const errorContainerId = 'error-messages';
            errorContainer = document.getElementById(errorContainerId);
            if (!errorContainer) {
                errorContainer = document.createElement('div');
                errorContainer.id = errorContainerId;
                errorContainer.style.color = 'red';
                errorContainer.style.marginTop = '8px';
                if (form.parentNode) form.parentNode.insertBefore(errorContainer, form.nextSibling);
            }
        }

        if (errors.length > 0) {
            if (errorList) {
                errorList.innerHTML = errors.map(e => `<li>${e}</li>`).join('');
            } else {
                errorContainer.innerHTML = `<ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>`;
            }
            // 最初の未入力項目へフォーカス
            if (nameIsEmpty && nameEl) {
                nameEl.focus();
            } else if (ageIsEmpty && ageEl) {
                ageEl.focus();
            } else if (!gender) {
                const firstGender = form.querySelector('input[name="gender"]');
                if (firstGender) firstGender.focus();
            }
        } else {
            // エラー表示をクリアして送信
            if (errorList) errorList.innerHTML = '';
            if (errorContainer && !errorList) errorContainer.innerHTML = '';
            form.submit();
        }
    });
});

