

const router = require('express').Router();
const pacienteController = require('../controllers/paciente.controller');
const validate = require('../middlewares/validate')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme')

router.get('/', pacienteController.listar )
router.post('/crear', validate(pacienteScheme.crearPaciente), pacienteController.crear )
router.get('/:idPaciente', pacienteController.listarInfo)
router.put('/modificar', pacienteController.modificar)

module.exports = router 