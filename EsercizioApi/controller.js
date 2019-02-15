var Hello = require('./controller');

 exports.hello=function(req,res){
    res.send("ciao sono andrea");
 }
 exports.secondpage=function(req,res){
     res.send("sei nella seconda pagina");
 }
 exports.back=function(req,res){
     res.send("sei tornato indietro");
 }




// module.exports =
// {
//     hello: function(req,res){
//         res.send("ciao sono andrea");
//     },
//     secondpage: function(req,res){
//         res.send("sei nella seconda pagina");
//     },
//     back: function(req,res){
//         res.send("sei tornato indietro");
//     }

// }