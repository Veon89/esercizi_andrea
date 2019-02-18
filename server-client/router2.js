var express = require('express');
var router2 = express.Router();
var controller2 = require('./controller2.js');
var  axios  =  require( 'axios' );


//'http://192.168.122.1:3000/api'
router2
       .get('/',controller2.connectedServer)
       .post('/:id',controller2.bet);
       
       //.post('/:id',controller2.number)
// router2.post('/bet',function(req,res){
//        axios.post('/bet', { bet:5 })
//               .then(function(response){
    
//   }); 
//})


 
module.exports = router2;