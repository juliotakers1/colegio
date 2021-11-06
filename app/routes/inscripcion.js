const express = require('express');
const InscripcionCtrl = require('../controllers/InscripcionController');

const Router = express.Router();

Router.get('/',InscripcionCtrl.index) //api.com/inscripcion/
        .post('/',InscripcionCtrl.create)
        .get('/:key/:value',InscripcionCtrl.find, InscripcionCtrl.show) 
        .put('/:key/:value',InscripcionCtrl.find,InscripcionCtrl.update)
        .delete('/:key/:value',InscripcionCtrl.find,InscripcionCtrl.remove);

module.exports = Router;