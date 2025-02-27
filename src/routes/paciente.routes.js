

const router = require('express').Router();
const pacienteController = require('../controllers/paciente.controller');

router.get('/', pacienteController.listar )
router.post('/crear', pacienteController.crear )
router.get('/:idPaciente', pacienteController.listarInfo)
router.put('/modificar', pacienteController.modificar)

module.exports = router 