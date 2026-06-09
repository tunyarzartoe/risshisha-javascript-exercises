'use strict';
    


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');    
    if (!form) {
        console.warn('フォーム要素が見つかりません。');
        return;
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const passwordEl = form.querySelector('input[name="password"]');
        const passwordRaw = passwordEl ? passwordEl.value : '';
        const passwordIsEmpty = passwordRaw.replace(/[\u3000\s]/g, '').length === 0;
        const password = passwordRaw.trim();
        const errors = [];
        if (passwordIsEmpty) {
            errors.push('パスワードを入力してください。');
        } else {
            // 半角英数字のみかチェック
            const alnumRe = /^[A-Za-z0-9]+$/;
            if (!password.match(alnumRe)) {
                errors.push('パスワードは半角英数字のみで入力してください。');
            }
            // 数字のみや英字のみを禁止する（英字と数字の両方を必須にする）
            if (!password.match(/[A-Za-z]/)) {
                errors.push('パスワードは英字を1文字以上含めてください。');
            }
            if (!password.match(/[0-9]/)) {
                errors.push('パスワードは数字を1文字以上含めてください。');
            }
            // 文字数チェック（8〜12文字）
            if (password.length < 8 || password.length > 12) {
                errors.push('パスワードは8文字以上12文字以内で入力してください。');
            }
        }
        const errorList = document.getElementById('error-msg-list');
        let errorContainer = null;  
        if (errorList) {
            errorContainer = errorList;
            // 表示と色を明示的に設定（見えない場合に備える）
            errorList.style.color = 'red';
            errorList.style.display = 'block';
            errorList.style.marginTop = '8px';
        } else {
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
                errorList.innerHTML = '';
                errors.forEach(e => {
                    const li = document.createElement('li');
                    li.textContent = e;
                    errorList.appendChild(li);
                });
                // エラー表示を確実に見せる
                errorList.style.display = 'block';
            } else {
                errorContainer.innerHTML = `<ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>`;
            }   
            if (passwordIsEmpty && passwordEl) {
                passwordEl.focus();
            }
            
        } else {
            if (errorList) {
                errorList.innerHTML = '';
            } else {
                errorContainer.innerHTML = '';
            }
            // 条件を満たしたら次画面へ遷移（GET クエリでリダイレクト）
            const action = form.getAttribute('action') || '19-1.html';
            const params = new URLSearchParams({ password });
            location.href = action + '?' + params.toString();
        }
    });

}); 
