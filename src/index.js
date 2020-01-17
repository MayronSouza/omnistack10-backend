const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://mayronsouza:joaovivi13@omnistackms-oylq5.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
    // Query Params: req.query (Filtros, ordenação, paginação, ...)
    // Route Params: req.params (Identificar um recurso na alteração e remoção)
    // Body: req.body (Dados para criação e alteração de um registro)

// MongoDB (Náo-relacional)

app.listen(3333, () => console.log('Server on line...'))