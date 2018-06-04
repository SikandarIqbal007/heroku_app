var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'bb3903fbeaef89',
    password : '5b9104de',
    database : 'heroku_e226c4f95f05b51'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;