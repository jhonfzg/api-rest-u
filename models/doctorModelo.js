const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    speciality: String,
    office: String,
    email: String, 
    cedula: Number 
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;

