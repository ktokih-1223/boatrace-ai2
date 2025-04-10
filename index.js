// express モジュールをインポート
const express = require('express');

// express アプリケーションを作成
const app = express();

// ポート番号の指定
const port = process.env.PORT || 3000; // Render ではポートを自動的に設定

// "/" パスにアクセスがあった場合の処理
app.get('/', (req, res) => {
  res.send('Hello, BoatRace AI!'); // レスポンスを送信
});

// サーバーを開始して、指定したポートで待機
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
