const express = require('express');
// segurança, define quem vai ter acesso
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json()); // para converter algo em json entendível para a aplicação
app.use(routes)
app.use(errors())

app.listen(3333);