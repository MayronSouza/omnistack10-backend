const axios = require('axios') // Módulo do Axios

const Dev = require('../models/Dev') // Buscando o modelo Dev em src/models

// Métodos
    //index = listar recursos;
    //show = buscar especificamente um recurso;
    //store = criar um recurso;
    //update = alterar um recurso;
    //destroy = remover especofocamente um recurso;

// Exportando
module.exports = {
    async index(req, res) { // Função que lista dos Devs
        const devs = await Dev.find()

        return res.json(devs)
    },

    async store(req,res) { // Função que salva um Dev 
        const { github_username, techs, latitude, longitude } = req.body // Desestruturação no req.body

        // Atribue a let dev um github_username para ser comparado no if
        let dev = await Dev.findOne({ github_username })

        // Condicionam para criação de um Dev
        if (!dev) {
            // Axios fazendo um GET na API do GitHub
            const response = await axios.get(`https://api.github.com/users/${github_username}`)
        
            const { name = login, avatar_url, bio } = response.data // Desestruturação na response
        
            // Tratando as techs, que vieram no req.body
            // O split() retorna um array
            // O map() retorna um novo array e o trim() retira os espaços
            const techsArray = techs.split(',').map(tech => tech.trim())
        
            const location = { // Localização para compor o Dev no BD
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            // Criando um Dev no BD
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
            return res.status(201).json(dev)
        }    
        return res.json(dev)
    }
}