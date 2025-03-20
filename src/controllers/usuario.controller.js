// controlador que va a tener la funcionalidad de los distintos endpoints de usuarios 

// traigo modelo de base de datos para poder acceder a las tablas
const models = require('../database/models/index')

module.exports = {

    listar: async (req, res) => {

        const users = await models.usuario.findAll({
            attributes: {
                exclude: ['password']
            }
        })

        res.json({
            success: true,
            data:{
                usuarios: users
            }
        })
    },

    listarInfo: async (req, res) => {
        const user = await models.usuario.findOne({
            where: {
                id: req.params.idUsuario
            },
            attributes: {
                exclude: ['password']
            }
        })

        res.json({
            success: true,
            data: {
                usuario: user
            }
        })
    }, 

    crear: async (req, res) => {
        try{

            // como el body va a tener los mismos nombres que los campos de la tabla usuario
            // directamente le paso todo el body. Sino tendría que setear los campos uno a uno
            const user = await models.usuario.create(req.body)
    
            user.password = user.cryptPassword(user.password)
            await user.save()
    
            res.json({
                success: true,
                data:{
                    id: user.id
                }
            })
        }catch(err){
            return next(err)
        }
    },

    prueba: async (req, res) => {

        try{
            console.log('ejecutando prueba');

            res.json({
                message: 'Hola Mundo!'
            })
        }catch(err){
            console.log(err)
        }
    },

    updateNombre: async(req, res) => {

        const  usuarioMod = await models.usuario.update({
            nombre: req.body.nombre
        },{
            where: {
                id: req.body.idUsuario
            }
        })

        res.json({
            success: true,
            data:{
                message:"Usuario modificado"
            }
        })
    },

    delete: async(req, res) => {
        let msj
        
        const usuarioDelete = await models.usuario.destroy({
            where:{
                id: req.params.idUsuario
            }
        })

        if(usuarioDelete === 1){
            msj = 'Usuario eliminado correctamente'

        }else{
            msj = 'Error'
        }

        res.json({
            success:true,
            data:{
                message: msj
            }
        })
    }


}