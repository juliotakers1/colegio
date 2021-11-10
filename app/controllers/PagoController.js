const Pago = require('../models/Pago');

function index(req,res){
    Pago.find({})
    .then(pagos =>{ 
        if(pagos.length) return res.status(200).send({pagos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.pagos) return res.status(404).send({message: 'not found'});
    let pagos = req.body.pagos;
    return res.status(200).send({ pagos});
}

function create(req,res){
    console.log(req.body);
    new Pago(req.body).save().then(pago => res.status(201).send({pago})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.pagos) return res.status(404).send({message: 'not funsito'});
    let pago = req.body.pagos[0];
    pago = Object.assign(pago, req.body);
    pago.save().then(pago =res.status(200).send({message:'UPDATED', pago})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.pagos) return res.status(404).send({message: 'no funcio'});
    req.body.pagos[0].remove().then(pago => res.status(200).send({message:'eliminao',pago})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Pago.find(query).then(pagos =>{
        if(!pagos.length) return next();
        req.body.pagos = pagos;
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

