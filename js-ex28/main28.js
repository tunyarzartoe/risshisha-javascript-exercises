'use strict';

document.getElementById('search').addEventListener('click', e => {
  const zipcode = document.getElementById('zip').value;
  const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;
  console.log(url);
  fetch(url)  // urlにAjaxでリクエストを送信

    // Ajax通信に成功した場合
    .then(response => {
      // レスポンスをJSONとして解釈し，オブジェクトに変換
      const obj = response.json();
      console.log(obj);
      // thenメソッドの引数の関数内でreturnされた値（ここではobj）は，
      // 次のthenメソッドの引数内の関数の引数（ここではdata）にセットされる
      return obj;
    })
    .then(data => {
      const address = data.results ? data.results[0].address1 + data.results[0].address2 + data.results[0].address3 : 'Ajax によるデータ取得に失敗しました';
      document.getElementById('address').value = address;
    })

    // Ajax通信に失敗した場合
    .catch(error => {
      document.getElementById('address').value = 'Ajax によるデータ取得に失敗しました';
    });
});