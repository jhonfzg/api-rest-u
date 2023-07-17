const pacienteServicio = require('../services/Service');

const pacienteControlador = {
    getAllPatients: async (req, res) => {
        try {
            const paciente = await pacienteServicio.getAllPatients();
            res.render("patientsList", {patients:paciente});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createPatient: async (req, res) => {
        try {
            const { firstName, lastName, phone, cedula, age } = req.body;
            const newPatient = await pacienteServicio.createPatient({ firstName, lastName, phone, cedula, age });
            if (newPatient === undefined){
                res.render("duplicado");
            }else{
            res.redirect("/api/v1/patients");
        }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getPatientByCedula: async (req, res) => {
        try {
            const { cedula } = req.params;
            const paciente = await pacienteServicio.getPatientByCedula(cedula);
            res.render("onePatientList", {patient:patient});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deletePatientByCedula: async (req, res) => {
        try {
            const { cedula } = req.params;
            const borrarPaciente = await pacienteServicio.deletePatientByCedula(cedula);
            if (borrarPaciente) {
                res.send("Paciente Eliminado Correctamente");
            } else {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = pacienteControlador;

