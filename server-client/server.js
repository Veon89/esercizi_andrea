var express = require('express');
var app = express();
var router = require('./router2.js');
var  axios  =  require( 'axios' );
app.use('/api/',router);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
