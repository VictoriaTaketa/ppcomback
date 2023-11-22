// Importar o pacote express (servidor)
const express = require('express');
// Importar o cors para lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação


//CONECTAR COM AS TUAS PROPRIAS ROTAS
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const postsRouter = require('./routes/postsRouter');
const comentariosRouter = require('./routes/comentariosRouter')
const reacoesRouter = require('./routes/reacoesRouter')

// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o uso dos cors no servidor
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api', postsRouter); //CONECTAR COM TUAS API
app.use('/api', comentariosRouter);
app.use('/api', reacoesRouter)
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 5000);

module.exports = app;