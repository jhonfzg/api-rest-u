const doctorService = require('../services/doctorService');

const doctorControlador = {
    getAllDoctors: async (req, res) => {
        try {
            const doctors = await doctorService.getAllDoctors();
            res.render("doctorsList", {doctors:doctors});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createDoctor: async (req, res) => {
        try {
            const { firstName, lastName, speciality, office, email, cedula} = req.body;
            const newDoctor = await doctorService.createDoctor({ firstName, lastName, speciality, office, email, cedula});
            if(newDoctor === undefined){
                res.send("El doctor o la especialidad ya se encuentra registrado");
            }else{
                res.redirect("/api/v1/doctors");
        }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getDoctorByCedula: async (req, res) => {
        try {
            const { cedula } = req.params;
            const doctor = await doctorService.getDoctorByCedula(cedula);
            res.render("doctorByCedula", {doctor:doctor});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = doctorControlador;


