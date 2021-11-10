const TipoPago = require('../models/tipoPago');

function index(req,res){
    TipoPago.find({}) 
    .then(tipoPagos =>{
        if(tipoPagos.length) return res.status(200).send({tipoPagos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.tipoPagos) return res.status(404).send({message: 'not found'});
    let tipoPagos = req.body.tipoPagos;
    return res.status(200).send({ tipoPagos});
}

function create(req,res){
    console.log(req.body);
    new TipoPago(req.body).save().then(tipoPago => res.status(201).send({tipoPago})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.tipoPagos) return res.status(404).send({message: 'not funsito'});
    let tipoPago = req.body.tipoPagos[0];
    tipoPago = Object.assign(tipoPago, req.body);
    tipoPago.save().then(tipoPago =res.status(200).send({message:'UPDATED', tipoPago})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.tipoPagos) return res.status(404).send({message: 'no funcio'});
    req.body.tipoPagos[0].remove().then(tipoPago => res.status(200).send({message:'eliminao',tipoPago})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    TipoPago.find(query).then(tipoPagos =>{
        if(!tipoPagos.length) return next();
        req.body.tipoPagos = tipoPagos;
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