const express = require('express');
const pacienteControlador = require('../../controlador/pacienteControlador');
const router = express.Router();

router.get('/', pacienteControlador.getAllPatients);

router.post('/', pacienteControlador.createPatient);

router.get('/:cedula', pacienteControlador.getPatientByCedula);

router.delete('/:cedula', pacienteControlador.deletePatientByCedula);

module.exports = router;

