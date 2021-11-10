const express = require('express');
const PagoCtrl = require('../controllers/PagoController');

const Router = express.Router();

Router.get('/',PagoCtrl.index) //api.com/Pago/
        .post('/',PagoCtrl.create)
        .get('/:key/:value',PagoCtrl.find, PagoCtrl.show) 
        .put('/:key/:value',PagoCtrl.find,PagoCtrl.update)
        .delete('/:key/:value',PagoCtrl.find,PagoCtrl.remove);

module.exports = Router;