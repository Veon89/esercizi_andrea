var Hello = require('./controller');
var url = require('url');
var querystring = require('querystring');



 exports.hello=function(req,res){
    var params = querystring.parse(url.parse(req.url).query);
    if('firstname' in params){
        res.send("ciao sono "+ params['firstname']);
    }
 }
 exports.secondpage=function(req,res){
     res.send("sei nella seconda pagina");
 }
 exports.back=function(req,res){
     res.send("sei tornato indietro");
 }
 exports.lastname=function(req,res){
    var lastname = req.params.lastname;
    res.send("il mio cognome è " +lastname);
 }
exports.id=function(req,res){
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
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