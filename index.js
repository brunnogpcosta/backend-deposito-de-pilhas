const express = require('express');
const app = express();

const porta = 3000


app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(porta, () => {
  console.log("Servidor iniciado!")

})