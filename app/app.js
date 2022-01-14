const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();

 
const Helado = require('./routes/helado');
 

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
 
App.use('/helado',Helado);
 

module.exports = App;