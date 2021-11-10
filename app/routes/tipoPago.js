const express = require('express');

const TipoPagoCtrl = require('../controllers/TipoPagoController');

const Router = express.Router();

Router.get('/',TipoPagoCtrl.index) //api.com/Grado/
        .post('/',TipoPagoCtrl.create)
        .get('/:key/:value',TipoPagoCtrl.find, TipoPagoCtrl.show) 
        .put('/:key/:value',TipoPagoCtrl.find,TipoPagoCtrl.update)
        .delete('/:key/:value',TipoPagoCtrl.find,TipoPagoCtrl.remove);

module.exports = Router; 