const Helado = require('../models/Helado');

function index(req,res){
    Helado.find({}) 
    .then(helados =>{
        if(helados.length) return res.status(200).send({helados});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.helados) return res.status(404).send({message: 'not found'});
    let helados = req.body.helados;
    return res.status(200).send({ helados});
}

function create(req,res){
    console.log(req.body);
    new Helado(req.body).save().then(Helado => res.status(201).send({Helado})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.helados) return res.status(404).send({message: 'not funsito'});
    let Helado = req.body.helados[0];
    Helado = Object.assign(Helado, req.body);
    Helado.save().then(Helado =res.status(200).send({message:'UPDATED', Helado})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.helados) return res.status(404).send({message: 'no funcio'});
    req.body.helados[0].remove().then(Helado => res.status(200).send({message:'eliminao',Helado})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Helado.find(query).then(helados =>{
        if(!helados.length) return next();
        req.body.helados = helados;
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