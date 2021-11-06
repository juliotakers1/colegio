const mongoose = require('mongoose');

const InscripcionSchema = new mongoose.Schema({
     
    nombreAlumno: {
        type: String,
        required: true
    },
    apellidoAlumno: {
        type: String,
        required: true
    },
    grado: {
        type: String,
        required: true
    },
    nombreEncargado: {
        type: String,
        required: true
    },
    apellidoEncargado: {
        type: String,
        required: true
    },
    dpi: {
        type: Number,
        unique:true,
        required: true
    },
    telefono: {
        type: Number,
        required:true
    },
    fechaInscripcion:  {
        type: Date,
        default: Date.now()
    }
});

const Inscripcion = mongoose.model('Inscripcion',InscripcionSchema);

module.exports = Inscripcion;
