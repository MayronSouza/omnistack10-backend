const { Router } = require('express') // Faz Desestruturação no Express trazendo o Router

const DevController = require('./controllers/DevController')

const routes = Router() // Chamado a função de roteamento

// Rota GET para buscar todos os Devs
routes.get('/devs', DevController.index)

// Rota POST para criar um Dev.
routes.post('/devs', DevController.store)

module.exports = routes