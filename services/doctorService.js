const Doctor = require('../models/doctorModelo');

const doctorService = {
  getAllDoctors: async () => {
    try {
      const doctors = await Doctor.find();
      return doctors;
    } catch (error) {
      throw new Error('Error, cannot get doctors');
    }
  },

  createDoctor: async (doctorData) => {
    try {
        const { firstName, lastName, speciality, office, email, cedula } = doctorData;
        const existingDoctor = await Doctor.findOne({cedula:cedula});
        const existingSpeciality = await Doctor.findOne({speciality:speciality});
        if(existingDoctor){
            return;
        }else{
            if(existingSpeciality){
                return;
            }else{
                const newDoctor = new Doctor({ firstName, lastName, speciality, office, email, cedula});
                await newDoctor.save();
                return newDoctor;
        }
    }
    } catch (error) {
        throw new Error('Error al crear el doctor.');
    }
  },

  getDoctorByCedula: async (userCedula) => {
    try {
      const doctor = await Doctor.findOne({cedula:userCedula});
      if (doctor) {
        return doctor;
      } else {
        throw new Error('Doctor no encontrado.');
      }
    } catch (error) {
      throw new Error('Error al obtener el doctor.');
    }
  },
};

module.exports = doctorService;


