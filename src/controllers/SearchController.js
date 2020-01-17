const Dev = require('../models/Dev')
const parseStringAsarray = require('../utils/parseStringAsArray')

module.exports = {
    // Buscar todos os Devs num raio de 10Km
    // Filtrar por tecnologias
    async index(req,res) {
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringAsarray(techs)
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000000,
                },
            },
        })

        return res.json(devs)
    }
}