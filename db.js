var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'b47f4858cf734b',
    password : 'fe2eb743',
    database : 'heroku_a7fac2c0cea3073'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;