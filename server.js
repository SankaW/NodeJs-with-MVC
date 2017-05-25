var express = require('express');
var app = express();
var sql = require("mssql");
let studentController = require("./controllers/student.ctrl");

    // config for your database
    var config = {
        user: 'sa',
        password: 'snklions',
        server: 'localhost', 
        database: 'SchoolDB' 
    };

app.get('student/', function (req, res) {
   
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from Student', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
            sql.close();    
        });
    });
});

app.get('student/create', function (req, res) {

    let student = {
        studentname: req.query.studentname,
        studentLocation: req.query.studentLocation
    }
    response = studentController.create(student);

    res.send(response)
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});