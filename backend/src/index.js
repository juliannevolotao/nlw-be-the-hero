const express = require('express');
// segurança, define quem vai ter acesso
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json()); // para converter algo em json entendível para a aplicação
app.use(routes)
app.listen(3333);