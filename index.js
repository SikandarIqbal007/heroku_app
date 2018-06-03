const express = require('express')
const PORT = process.env.PORT || 5000

var app = express();

// express()
 
//   .get('/', (req, res) => res.send('SIKANDAR IS A GOOD BAD BOY'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/', function(req,res){
res.send('I want a pizza right now!');
});

app.listen(PORT);
