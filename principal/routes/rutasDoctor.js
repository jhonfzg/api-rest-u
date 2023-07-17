const express = require('express');
const router = express.Router();
const doctorControlador = require('../../controlador/doctorControlador');

router.get('/', doctorControlador.getAllDoctors);

router.post('/', doctorControlador.createDoctor);

router.get('/:cedula', doctorControlador.getDoctorByCedula);

module.exports = router;

