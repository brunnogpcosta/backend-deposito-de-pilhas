const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const porta = 3000


app.get('/', function (req, res) {
  res.status(200)
  res.send({ mensagem: 'Bem vindo a API do Deposito de Pilhas' });
});

app.listen(porta, () => {
  console.log("Servidor iniciado!")

})

module.exports = app