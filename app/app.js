const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();

const Inscripcion = require('./routes/inscripcion');
const Grado = require('./routes/grado');
const Pago = require('./routes/pago');
const TipoPago = require('./routes/tipoPago');
const Reporte = require('./routes/reporte');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
App.use('/inscripcion',Inscripcion);
App.use('/grado',Grado);
App.use('/pago',Pago);
App.use('/tipoPago',TipoPago);
App.use('/reporte',Reporte);

module.exports = App;