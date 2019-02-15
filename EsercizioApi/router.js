var express = require('express');
var router = express.Router();
var controller = require('./controller.js');

// router.get('/',function(req,res){
//     //res.send('ciao sono andrea');
//     //console.log("ciao");
//     res.send(controller.hello())
// })
router
    .get('/',controller.hello)
    .get('/secondpage',controller.secondpage)
    .get('/secondpage/back',controller.back);

module.exports = router;