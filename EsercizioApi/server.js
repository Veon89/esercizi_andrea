var express = require('express');
var app = express();
var router = require('./router.js');
var bodyParser = require('body-parser');


app.use('/api/',router);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});

