const mongoose = require('mongoose');
const HeladoSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stack:{
        type: Number,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    thumbnaiUrl:{
        type: String,
        required: true
    }

    

});

const Helado = mongoose.model('Helado',HeladoSchema);
 
module.exports = Helado;