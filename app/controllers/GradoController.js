const Grado = require('../models/Grado');

function index(req,res){
    Grado.find({}) 
    .then(grados =>{
        if(grados.length) return res.status(200).send({grados});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.grados) return res.status(404).send({message: 'not found'});
    let grados = req.body.grados;
    return res.status(200).send({ grados});
}

function create(req,res){
    console.log(req.body);
    new Grado(req.body).save().then(grado => res.status(201).send({grado})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.grados) return res.status(404).send({message: 'not funsito'});
    let grado = req.body.grados[0];
    grado = Object.assign(grado, req.body);
    grado.save().then(grado =res.status(200).send({message:'UPDATED', grado})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.grados) return res.status(404).send({message: 'no funcio'});
    req.body.grados[0].remove().then(grado => res.status(200).send({message:'eliminao',grado})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Grado.find(query).then(grados =>{
        if(!grados.length) return next();
        req.body.grados = grados;
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