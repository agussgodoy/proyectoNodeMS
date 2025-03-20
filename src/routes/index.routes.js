// archivo principal que maneja todas las rutas

const { Router } = require('express')
const usuarioRoutes = require('./usuarios.routes')
const medicoRoutes = require('./medico.routes')
const tratamientoRoutes = require('./tratamiento.routes')
const pacienteRoutes = require('./paciente.routes')
const authRoutes = require('./auth.routes')
const decodeJWT = require('../middlewares/decodeJWT')

const rutas_init = () => {

    const router = Router()

    router.use('/usuarios', decodeJWT, usuarioRoutes)
    router.use('/medicos', decodeJWT, medicoRoutes)
    router.use('/tratamientos', decodeJWT, tratamientoRoutes)
    router.use('/pacientes', decodeJWT, pacienteRoutes)

    return router 
}

const rutas_auth = () => {

    const router = Router()

    router.use("/auth", authRoutes)

    return router
}

module.exports = { rutas_init, rutas_auth }