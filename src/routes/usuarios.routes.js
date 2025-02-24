// Archivo que va a manejar las rutas de los usuarios 


const router = require('express').Router()
const usuarioController = require('../controllers/usuario.controller')

router.get('/prueba', usuarioController.prueba )
router.post('/crear', usuarioController.crear )
router.get('/', usuarioController.listar )

router.get('/:idUsuario', usuarioController.listarInfo )
router.post('/updateNombre', usuarioController.updateNombre )
router.delete('/deleteUser/:idUsuario', usuarioController.delete )

module.exports = router 