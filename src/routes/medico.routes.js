
const router = require('express').Router()

const medicoController = require('../controllers/medico.controller')

router.get('/', medicoController.listar )
router.post('/crearMedico',  medicoController.crear)
router.get('/:idMedico', medicoController.infoMedico)

module.exports = router