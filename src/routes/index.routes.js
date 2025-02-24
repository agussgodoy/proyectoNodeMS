// archivo principal que maneja todas las rutas

const { Router } = require('express')
const usuarioRoutes = require('./usuarios.routes')
const medicoRoutes = require('./medico.routes')
const tratamientoRoutes = require('./tratamiento.routes')


const rutas_init = () => {

    const router = Router()

    router.use('/usuarios', usuarioRoutes)
    router.use('/medicos', medicoRoutes)
    router.use('/tratamientos', tratamientoRoutes)

    return router 
}

module.exports = { rutas_init }