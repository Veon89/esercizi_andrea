var express = require('express');
var app = express();
var router = require('./router.js');
var bodyParser = require('body-parser');
var busboyBodyParser = require('busboy-body-parser');

app.use(bodyParser.urlencoded({limit: '150mb',extended: true}));
app.use(bodyParser.json({limit: '150mb'}));

// app.use(busboyBodyParser());


app.use('/api/',router);
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});

