var express = require('express');
var app = express();
var router = require('./router.js');
app.use('/api/',router);
//app.use('/api/',axios);

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});
