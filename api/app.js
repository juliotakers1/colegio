const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3400;

const app = express();

app.use(bodyParser.json());


//mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'colegio'
});

//rute
app.get('/',(req, res) =>{
    res.send('Wlcome');
});


//all inscripcion
app.get('/inscripcion', (req, res) =>{

    const sql = 'SELECT * FROM inscripcion';

    connection.query(sql, (error, results) =>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('no hay nating');
        }
    });

    
});

app.get('/inscripcion/:id', (req, res) =>{
    const {id } = req.params
    const sql = `SELECT * FROM inscripcion WHERE id = ${id}`;
    connection.query(sql, (error, result) =>{
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        }else{
            res.send('no hay nating');
        }
    });
});

app.post('/add_I', (req, res) =>{
   
    const sql = 'INSERT INTO inscripcion SET ?';
    const customerObj ={

        Id: req.body.Id,
        nombreAlumno: req.body.nombreAlumno,
        apellidoAlumno: req.body.apellidoAlumno,
        grado: req.body.grado,
        nombreEncargado: req.body.nombreEncargado,
        apellidoEncargado: req.body.apellidoEncargado,
        dpi: req.body.dpi,
        telefono: req.body.telefono,
        fechaInscripcion: req.body.fechaInscripcion


    }

    connection.query(sql, customerObj, error =>{
        if(error) throw error
        res.send('creado');
    });

});

app.put('inscripcion/update/:id', (req, res) =>{
     const {id} = req.params;
     const {name, city} = req.body;
     const sql = `UPDATE inscripcion SET name = '${name}', city='${city}' WHERE id =${id}`;
     connection.query(sql, error =>{
        if(error) throw error
        res.send('actualizao');
    });
});
app.delete('inscripcion/delete/:id', (req, res) =>{
 const{id} = req.params;
 const sql = `DELETE FROM inscripcion WHERE id= ${id}`;
 connection.query(sql, error =>{
    if(error) throw error
    res.send('borrao');
});
});


 

// check connect 
connection.connect(error = {
    if (error) {
        console.log(error);
    }
});

app.listen(PORT, () =>{console.log(`Server running on port ${PORT}`)})