'use strict';

document.getElementById('search').addEventListener('click', e => {
  const zipcode = document.getElementById('zip').value;
  const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;
  
  fetch(url)  // urlにAjaxでリクエストを送信

  // Ajax通信に成功した場合
  .then(response => {
    // レスポンスをJSONとして解釈し，オブジェクトに変換
    const obj = response.json();
    // thenメソッドの引数の関数内でreturnされた値（ここではobj）は，
    // 次のthenメソッドの引数内の関数の引数（ここではdata）にセットされる
    return obj;
  })
  .then(data => {
    
    





    
  })

  // Ajax通信に失敗した場合
  .catch(error => {
    
  });
});