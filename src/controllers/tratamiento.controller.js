
const model = require('../database/models/index')

module.exports = {


    listar: async (req, res) =>{

        res.json({
            success:true,
            data:{
                message:"Este endpoint retorna el listado de tratamientos"
            }
        })
    }, 

    infoTratamiento: async (req, res) => {

        res.json({
            success: true,
            data: {
                message: 'Este endpoint retorna la info del tratamiento que viene por parámetro'
            }
        })
    }, 

    crear: async (req, res) => {
        res.json({
            success:true,
            data:{
                message: 'Este endopoint crea un tratamiento'
            }
        })
    }
}