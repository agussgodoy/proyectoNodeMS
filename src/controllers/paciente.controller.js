
const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {


    listar: async (req, res) => {

        const pacientes = await models.paciente.findAll({
            include: [{
                model: models.paciente_medico,
                include:[{
                    model: models.medico
                }]
            }]
        })

        res.json({
            success: true,
            data:{
                pacientes: pacientes
            }
        })
    },

    crear: async (req, res, next) => {

        try{

            const paciente = await models.paciente.create(req.body)

            const relacion = await models.paciente_medico.create({
                pacienteId: paciente.id,
                medicoId: req.body.medicoId
            })


            res.json({
                success: true,
                data:{
                    paciente: paciente
                }
            })
        }catch(err){
            res.json({
                success: false,
                message: next(err)
            })
        }
    },

    listarInfo: async (req, res, next) => {

        const paciente = await models.paciente.findOne({
            where: {
                id: req.params.idPaciente
            },
            include:[{
                model: models.paciente_medico,
                include:[{
                    model: models.medico
                }]
            }]
        })

        if(paciente){
            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })
        }else{
            return next(errors.PacienteInexistente)
        }
    },

    modificar: async (req, res) => {
        
        const paciente = await models.paciente.update({
            nombre: req.body.nombre
        },{
            where:{
                id: req.body.idPaciente
            }
        })

        if(paciente){
            res.json({
                success: true,
                messege: 'Paciente actualizado correctamente'
            })
        }else{
            res.json({
                success: false,
                message: 'No se encontró el paciente'
            })
        }
    }
}