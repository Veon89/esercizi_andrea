var express = require('express');
var app = express();
var router = require('./router2.js');
var  axios  =  require( 'axios' );
app.use('http://192.168.1.153:3000/',router);
//app.use('/api/',router);


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
  app.use('/api/',router);
});
