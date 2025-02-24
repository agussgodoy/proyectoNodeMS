

const router = require('express').Router()

const tratamientoController = require('../controllers/tratamiento.controller')

router.get('/', tratamientoController.listar )
router.get('/:idTratamiento', tratamientoController.infoTratamiento)
router.post('/crearTratamiento', tratamientoController.crear )

module.exports = router 