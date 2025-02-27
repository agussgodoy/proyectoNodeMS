
const model = require('../database/models/index')

module.exports = {

    listar: async (req, res) => {

        const medicos = await model.medico.findAll()


        res.json({
            success: true,
            data:{
                medicos: medicos
            }
        })
    },

    crear: async(req, res) =>{
        
        try{
            const medico = await model.medico.create(req.body)

            res.json({
                success: true,
                data:{
                    medico: medico
                }
            })

        }catch(err){

        }
    }, 

    infoMedico: async (req,res) => {

        const medico = await model.medico.findOne({
            where:{
                id: req.params.idMedico
            }
        })

        if(medico){

            res.json({
                success: true,
                data: {
                    medico: medico
                }
            })
        }else{
            res.json({
                success: false,
                messege: 'No se encontró el médico solicitado'
            })
        }
    }
}