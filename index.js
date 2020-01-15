const express = require('express')

const app = express()

app.use(express.json())

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
    // Query Params: req.query (Filtros, ordenação, paginação, ...)
    // Route Params: req.params (Identificar um recurso na alteração e remoção)
    // Body: req.body (Dados para criação e alteração de um registro)

// MongoDB (Náo-relacional)

app.post('/users', (req,res) => {
    return res.json(req.body)
})

app.listen(3333, () => console.log('Server on line...'))