const paciente = require('../models/pacienteModelo');

const pacienteServicio = {
  getAllPatients: async () => {
    try {
      const paciente = await paciente.find();
      return paciente;
    } catch (error) {
      throw new Error('Error, cannot get patients');
    }
  },

  createPatient: async (patientData) => {
    try {
        const { firstName, lastName, cedula, phone, age } = patientData;
        const existingPatient = await paciente.findOne({cedula:cedula});
        if (existingPatient){
            return; 
        }else {
            const newPatient = new paciente({ firstName, lastName, cedula, phone, age});
            await newPatient.save();
            return newPatient;
    }
    } catch (error) {
        throw new Error('Error al crear el paciente.');
    }
  },

  getPatientByCedula: async (patientCedula) => {
    try {
      const paciente = await paciente.findOne({cedula:patientCedula});
      if (paciente) {
        return paciente;
      } else {
        throw new Error('Paciente no encontrado.');
      }
    } catch (error) {
      throw new Error('Error al obtener el paciente.');
    }
  },
    deletePatientByCedula: async (cedula) => {
        try {
            const deletedPatient = await paciente.findOneAndDelete({cedula:cedula});
            if (deletedPatient) {
                return "Patient deleted";
            } else {
                throw new Error('Paciente no encontrado.');
            }
        } catch (error) {
            throw new Error('Error al eliminar el paciente.');
        }
    },

};

module.exports = pacienteServicio;

