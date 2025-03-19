const express = require("express");
const app = express();

// Definir uma rota
app.get("/", (req, res) => {
  res.send("Hello, World! 🚀");
});

// Definir a porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
