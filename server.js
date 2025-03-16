const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve arquivos estáticos
app.use(express.static('./'));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
