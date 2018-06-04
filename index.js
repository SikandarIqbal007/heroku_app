const express = require('express')

var mysql = require('mysql');

const PORT = process.env.PORT || 5000

var app = express();


var db = require('./db');

app.get('/', function(req,res){


    db.query('select * from user', function(err, result) {
        if (err) throw err;
        res.send(result);
      });


});


app.listen(PORT);
