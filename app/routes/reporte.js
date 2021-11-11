const express = require('express');
const ReporteCtrl = require('../controllers/ReporteController');

const Router = express.Router();

Router.get('/',ReporteCtrl.index) //api.com/inscripcion/
        .post('/',ReporteCtrl.create)
        .get('/:key/:value',ReporteCtrl.find, ReporteCtrl.show) 
        .put('/:key/:value',ReporteCtrl.find,ReporteCtrl.update)
        .delete('/:key/:value',ReporteCtrl.find,ReporteCtrl.remove);

module.exports = Router;