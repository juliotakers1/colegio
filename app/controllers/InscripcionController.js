const Inscripcion = require('../models/Inscripcion');

function index(req,res){
    Inscripcion.find({})
    .then(inscripciones =>{
        if(inscripciones.length) return res.status(200).send({inscripciones});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.inscripciones) return res.status(404).send({message: 'not found'});
    let inscripciones = req.body.inscripciones;
    return res.status(200).send({ inscripciones});
}

function create(req,res){
     new Inscripcion(req.body).save().then(inscripcion => res.status(201).send({inscripcion})).catch(error => res.status(500).send({error}));

}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.inscripciones) return res.status(404).send({message: 'not funsito'});
    let inscripcion = req.body.inscripciones[0];
    inscripcion = Object.assign(inscripcion, req.body);
    inscripcion.save().then(inscripcion =res.status(200).send({message:'UPDATED', inscripcion})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.inscripciones) return res.status(404).send({message: 'no funcio'});
    req.body.inscripciones[0].remove().then(inscripcion => res.status(200).send({message:'eliminao',inscripcion})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Inscripcion.find(query).then(inscripciones =>{
        if(!inscripciones.length) return next();
        req.body.inscripciones = inscripciones;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}

