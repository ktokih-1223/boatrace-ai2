const express = require('express');
const app = express();
const port = 3000;

// 競艇予想を返すエンドポイント（仮）
app.get('/predict', (req, res) => {
  const raceData = {
    race: '住之江1R',
    time: '15:00',
    predictions: {
      main: '1-23-234',
      targets: ['1-4-23', '1-5-234', '1-6-流']
    }
  };
  res.json(raceData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
