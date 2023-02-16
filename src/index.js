const express = require('express');
const server = express();

server.get('/hello', (req, res) => {
  res.send('Hej på dig!')
});

server.listen(3000, () => console.log('Connected'));