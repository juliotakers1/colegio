const mongoose = require('mongoose');
const GradoSchema = new mongoose.Schema({

    nombreGrado:{
        type: String,
        required: true
    }
    

});

const Grado = mongoose.model('Grado',GradoSchema);
 
module.exports = Grado;