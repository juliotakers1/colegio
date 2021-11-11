const mongoose = require('mongoose');
const ReporteSchema = new mongoose.Schema({

    nombreMaestro:{
        type: String,
        required: true
    },
    apellidoMaestro:{
        type: String,
        required: true
    },
    edadMaestro:{
        type: Number,
        required: true
    },
    telefonoMaestro:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required:false,
        default: Date.now()
    }
    

});

const Reporte = mongoose.model('Reporte',ReporteSchema);
 
module.exports = Reporte;