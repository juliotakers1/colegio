const Reporte = require('../models/reporte');

function index(req,res){
    Reporte.find({})
    .then(reportes =>{ 
        if(reportes.length) return res.status(200).send({reportes});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.reportes) return res.status(404).send({message: 'not found'});
    let reportes = req.body.reportes;
    return res.status(200).send({ reportes});
}

function create(req,res){
    console.log(req.body);
    new Reporte(req.body).save().then(reporte => res.status(201).send({reporte})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.reportes) return res.status(404).send({message: 'not funsito'});
    let reporte = req.body.reportes[0];
    reporte = Object.assign(reporte, req.body);
    reporte.save().then(reporte =res.status(200).send({message:'UPDATED', reporte})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.reportes) return res.status(404).send({message: 'no funcio'});
    req.body.reportes[0].remove().then(reporte => res.status(200).send({message:'eliminao',reporte})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Reporte.find(query).then(reportes =>{
        if(!reportes.length) return next();
        req.body.reportes = reportes;
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

