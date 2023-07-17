const cita = require('../models/citaModelo');
const Patient = require('../models/pacienteModelo');
const Doctor = require('../models/doctorModelo');

const citaServicio = {
    getAllAppointments: async () => {
        try {
            const citas = await cita.find();
            return citas;
        } catch (error) {
            throw new Error('Error, cannot get appointments');
        }
    },

    createAppointment: async (appointmentData) => {
        try {
            const {cedula,date,speciality, doctorName, patientName}= appointmentData;
            const existingAppointment = await cita.findOne({speciality:speciality, date:date, cedula:cedula});
            const existingPatient = await Patient.findOne({cedula:cedula});
            const existingDoctor = await Doctor.findOne({speciality:speciality});
            if(existingAppointment){
                return;
            }else if(existingPatient && existingDoctor){
                const newAppointment = new cita({cedula,date,speciality, doctorName:existingDoctor.firstName, patientName:existingPatient.firstName});
                await newAppointment.save();
                return newAppointment; 
            }
        } catch (error) {
            throw new Error('Error al crear la cita.');
        }
    },

    getAppointmentById: async (userId) => {
        try {
            const cita = await cita.findById(userId);
            if (cita) {
                return cita;
            } else {
                throw new Error('Appointment no encontrado.');
            }
        } catch (error) {
            throw new Error('Error al obtener el appointment.');
        }
    },
    getAllAppointmentsByCedula: async (appointmentsByCedula) => {
        try {
            const cita = await cita.find({cedula:appointmentsByCedula});
            if(cita){
                return cita;
            }else {
                throw new Error("Citas no encontradas");
            }
        } catch (error) {
            throw new Error('Error al obtener los appointments.');
        }
    },
};

module.exports = citaServicio;



