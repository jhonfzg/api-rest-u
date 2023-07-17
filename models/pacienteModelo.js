const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cedula: { type: Number, required: true },
    phone: { type: Number, required: true },
    age: { type: Number, required: true }
});

const paciente = mongoose.model('Patient', patientSchema);

module.exports = paciente;

