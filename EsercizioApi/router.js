var express = require('express');
var router = express.Router();
var controller = require('./controller.js');



router
    .get('/',controller.hello)
    .get('/secondpage',controller.secondpage)
    .get('/secondpage/back',controller.back)
    .get('/lastname/:lastname',controller.lastname)
    .post('/users',function(req,res){

        console.log(req.body);

        controller.id(req,res)
   });



module.exports = router;