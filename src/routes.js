const { Router } = require('express') // Faz Desestruturação no Express trazendo o Router

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router() // Chamado a função de roteamento

// ROTAS
    // Dev
    routes.get('/devs', DevController.index) // GET para buscar todos os Devs
    routes.post('/devs', DevController.store) // POST para criar um Dev.
    routes.put('/devs/:username', DevController.update) // PUT para alterar um Dev pelo ID.
    routes.delete('/devs/:id', DevController.destroy) // DELETE para remover um Dev pelo ID.

    // Search
    routes.get('/search', SearchController.index) //Get para buscar a localização dos Devs

module.exports = routes