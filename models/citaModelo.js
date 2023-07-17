const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctorName: { type: String, default:null, required:false },
    patientName: { type: String, default:null, required:false },
    cedula: String,
    speciality: String,
    date: String,
});

const cita = mongoose.model('Appointment', appointmentSchema);

module.exports = cita;

