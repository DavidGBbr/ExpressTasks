//Importando o express
const express = require("express");
const app = express();

//Setando as rotas
app.get("/", (req, res) => {
  res.send("<h1>Minha lista de tarefas</h1>");
});

//Dando start para ouvir na porta 3000
app.listen(3000, () => {
  console.log("Servidor foi inicializado!");
});
