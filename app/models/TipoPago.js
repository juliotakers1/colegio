const mongoose = require('mongoose');
const TipoPagoSchema = new mongoose.Schema({

    nombrePago:{
        type: String,
        required: true
    },
    totalPago:{
        type: Number,
        required: true
    }
    

});

const TipoPago = mongoose.model('TipoPago',TipoPagoSchema);
 
module.exports = TipoPago;