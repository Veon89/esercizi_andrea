var express = require('express');
var app = express();
var router = require('./router.js');
app.use('/api/',router);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

