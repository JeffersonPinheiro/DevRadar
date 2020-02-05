const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Jefferson:Ventilador10@cluster0-aiflm.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,  
});

app.use(express.json());
app.use(routes);
//Métodos HTTP: get, put, post, delete.

//Tipos de parametros:
//Query Params: request.query (Filtros, ordenação, paginacão, ...)
//Route Params: request.params (Identificar um  recurso na alteração ou remoção) 
//Body: request.body (São dados para criação ou para alteração de um registro)

//MongoDB (Não-relacional)

app.listen(3333);
