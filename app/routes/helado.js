const express = require('express');

const HeladoCtrl = require('../controllers/HeladoController');

const Router = express.Router();

Router.get('/',HeladoCtrl.index) //api.com/Helado/
        .post('/',HeladoCtrl.create)
        .get('/:key/:value',HeladoCtrl.find, HeladoCtrl.show) 
        .put('/:key/:value',HeladoCtrl.find,HeladoCtrl.update)
        .delete('/:key/:value',HeladoCtrl.find,HeladoCtrl.remove);

module.exports = Router; 