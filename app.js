const express = require('express');
const app = express();

// Requiring Main Routes
const rutasPaciente = require('./principal/routes/rutasPaciente');
const rutasDoctor = require('./principal/routes/rutasDoctor');
const rutasCita = require('./principal/routes/rutasCita');

// Requiring Form Routes
const rutasPacienteF = require('./principal/routes/rutasPacienteF');
const doctorRutaF = require('./principal/routes/doctorRutaF');
const rutaCitaF = require('./principal/routes/rutaCitaF');
const rutaInicio = require('./principal/routes/rutaInicio');

const connectToDb = require('./db');

connectToDb()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor en ejecución en el puerto 3000');
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Using Main Routes
app.use('/api/principal/patients', rutasPaciente);
app.use('/api/principal/doctors', rutasDoctor);
app.use('/api/principal/citas', rutasCita);

// Using Form Routes 
app.use('/api/principal/pacientesF', rutasPacienteF);
app.use('/api/principal/doctoresF', doctorRutaF);
app.use('/api/principal/citasF', rutaCitaF);
app.use('/api/principal/inicio', rutaInicio);


