
const models = require('../database/models/index')

module.exports = {

    listar: async (req, res) => {

        const medicos = await models.medico.findAll({
            include: [{
                model: models.paciente_medico,
                include: [{
                    model: models.paciente
                }]
            }]
        })


        res.json({
            success: true,
            data:{
                medicos: medicos
            }
        })
    },

    crear: async(req, res) =>{
        
        try{
            const medico = await models.medico.create(req.body)

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

        const medico = await models.medico.findOne({
            where:{
                id: req.params.idMedico
            },
            include:[{
                model: models.paciente_medico,
                include: [{
                    model: models.paciente
                }]
            }]
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