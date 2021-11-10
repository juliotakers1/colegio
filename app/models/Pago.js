const mongoose = require('mongoose');

const PagoSchema = new mongoose.Schema({

    nombreEstudiante: {
        type: String,
        required:true
    }, 
    tipoPago:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fechaInscripcion:{
        type: Date,
        required: true,
        default: Date.now()
    },
    total: {
        type: String,
        required: true
    }

});

const Pago = mongoose.model('Pago',PagoSchema);

module.exports = Pago;