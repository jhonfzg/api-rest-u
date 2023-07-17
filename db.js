const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = async () => {
    try {
        const uri = process.env.MONGODB_URI; 
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
    }
};

module.exports = connectToDB;


