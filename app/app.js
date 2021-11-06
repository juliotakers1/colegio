const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Inscripcion = require('./routes/inscripcion');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));

App.use('/inscripcion',Inscripcion);
module.exports = App;