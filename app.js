//Importando o express
const express = require("express");
const app = express();

app.use(express.json());

const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now()}`);
  next();
};

app.use(log);

//Setando as rotas
app.get("/", (req, res) => {
  res.send("<h1>Minha lista de tarefas</h1>");
});

app.get("/json", (req, res) => {
  res.json({
    tasks: [
      { title: "Tarefa 1", done: true },
      { title: "Tarefa 2", done: false },
      { title: "Tarefa 3", done: false },
    ],
  });
});

//Dando start para ouvir na porta 3000
app.listen(3000, () => {
  console.log("Servidor foi inicializado!");
});
