const express = require('express')

var mysql = require('mysql');

const PORT = process.env.PORT || 5000

var app = express();


var db = require('./db');

app.get('/', function(req,res){

    var SQL = "insert into user values (? , ? , ?)";
    var fields = ['mehdi','mehdi@gmail.com','mehdi123'];
    db.query(SQL,fields, function(err, result) {
        if (err) throw err;
        res.send(result);
      });


});


app.listen(PORT);
