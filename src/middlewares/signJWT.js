
const jwt = require('jsonwebtoken')
const globalConstants = require('../const/globalConstants')

module.exports = (usuario) => { // recibe un usuario como parámetro

    // si recibí el usuario, creo el token con los datos del usuario
    if(usuario){

        const token = jwt.sign({
            id: usuario.id // como dato pongo el id del usuario
        },
        
            globalConstants.JWT_SECRET, // clave secreta para enciptar el token 
            {
                expiresIn:'3000m' // expira en 3 horas 
            }
        )

        return token
        
    }else{
        return null
    }

}