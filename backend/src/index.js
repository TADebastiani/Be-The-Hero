const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// Configuração pra reconhecer o BODY como JSON
app.use(express.json());
app.use(routes);

app.listen(3333);


