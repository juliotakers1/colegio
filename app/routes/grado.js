const express = require('express');

const GradoCtrl = require('../controllers/GradoController');

const Router = express.Router();

Router.get('/',GradoCtrl.index) //api.com/Grado/
        .post('/',GradoCtrl.create)
        .get('/:key/:value',GradoCtrl.find, GradoCtrl.show) 
        .put('/:key/:value',GradoCtrl.find,GradoCtrl.update)
        .delete('/:key/:value',GradoCtrl.find,GradoCtrl.remove);

module.exports = Router; 