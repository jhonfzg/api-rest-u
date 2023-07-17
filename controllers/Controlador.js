const citaServicio = require('../services/citaServicio');

const citaControlador = {
    getAllAppointments: async (req, res) => {
        try {
            const cita = await citaServicio.getAllAppointments();
            res.render("appointmentsList",{appointments:cita});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createAppointment: async (req, res) => {
        try {
            const {cedula, date, speciality, doctorName, patientName} = req.body;
            const newAppointment = await citaServicio.createAppointment({cedula, date, speciality, doctorName, patientName});
            if(newAppointment === undefined){
                res.send("El doctor ya se encuentra agendado para una cita");
            }else {
                res.redirect("/api/v1/appointments");
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAppointmentById: async (req, res) => {
        try {
            const { id } = req.params;
            const cita = await citaServicio.getAppointmentById(id);
            res.render("oneAppointment", {appointment:cita});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllAppointmentsByCedula: async (req, res) => {
        try {
            const { cedula } = req.params;
            const citas = await citaServicio.getAllAppointmentsByCedula(cedula);
            res.render("appointmentsByCedula", {appointments:citas});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = citaControlador;



