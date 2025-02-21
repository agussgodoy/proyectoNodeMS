// Archivo que va a manejar las rutas de los usuarios 


const router = require('express').Router()
const usuarioController = require('../controllers/usuario.controller')

router.get('/', usuarioController.prueba )
router.post('/', usuarioController.crear )

router.get('/:idUsuario', usuarioController.listarInfo )

module.exports = router 