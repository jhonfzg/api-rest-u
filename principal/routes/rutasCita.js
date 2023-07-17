const express = require('express');
const router = express.Router();
const citaControlador = require('../../controlador/Controlador');

router.get('/', citaControlador.getAllAppointments);

router.get('/cedula/:cedula', citaControlador.getAllAppointmentsByCedula);

router.post('/', citaControlador.createAppointment);

router.get('/:id', citaControlador.getAppointmentById);

module.exports = router;

