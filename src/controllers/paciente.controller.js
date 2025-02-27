
const model = require('../database/models/index')

module.exports = {


    listar: async (req, res) => {

        const pacientes = await model.paciente.findAll()

        res.json({
            success: true,
            data:{
                pacientes: pacientes
            }
        })
    },

    crear: async (req, res) => {

        try{

            const paciente = await model.paciente.create(req.body)

            res.json({
                success: true,
                data:{
                    paciente: paciente
                }
            })
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        }
    },

    listarInfo: async (req, res) => {

        const paciente = await model.paciente.findOne({
            where: {
                id: req.params.idPaciente
            }
        })

        if(paciente){
            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })
        }else{
            res.json({
                success:false,
                message: 'No se encontró el paciente.'
            })
        }
    },

    modificar: async (req, res) => {
        
        const paciente = await model.paciente.update({
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