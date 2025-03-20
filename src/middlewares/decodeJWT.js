

const jwt = require('jsonwebtoken')
const errors = require('../const/errors')
const models = require('../database/models/index')
const moment = require('moment')
const globalConstants = require('../const/globalConstants')

module.exports = async function(req, res, next) {

    // el token va a venir por el header que se llama Authorization
    if(req.header('Authorization') && req.header('Authorization').split(' ').length > 1 ){

        try{

            // verifico el token y decodifico con la clave secreta para obtener los datos del usuario
            let dataToken = jwt.verify(req.header('Authorization').split(' ')[1], globalConstants.JWT_SECRET)
            
            // si el token expiró, devuelvo error
            if(dataToken.exp <= moment().unix()){
                return next(errors.SesionExpirada)
            }

            // me guardo el token para poder devolverlo en los endpoints
            res.locals.token = dataToken

            // busco el usuario luego de haber decodificado el token
            const usuario = await models.usuario.findOne({
                where:{
                    id: dataToken.id
                }
            })

            if(!usuario) return next(errors.UsuarioNoAutorizado)

            // si encuentro el usuario, me lo guardo 

            res.locals.usuario = usuario

            // si todo esta bien, paso el control al siguiente middleware o controlador 
            next()

        }catch(err){
            return next(err)
        }
    }else{
        return next(errors.UsuarioNoAutorizado)
    }
}