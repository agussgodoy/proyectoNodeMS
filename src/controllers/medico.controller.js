
const model = require('../database/models/index')

module.exports = {

    listar: async (req, res) => {

        res.json({
            success: true,
            data:{
                message: 'Esta funcionalidad va a listar todos los médicos'
            }
        })
    },

    crear: async(req, res) =>{
        
        res.json({
            success: true,
            data:{
                message: 'Esta funcionalidad va a crear un médico'
            }
        })
    }, 

    infoMedico: async (req,res) => {

        res.json({
            success: true,
            data: {
                message: 'Este endpoint devuelve la información del médico que se recibe por parámetro, en caso de que exista'
            }
        })
    }
}