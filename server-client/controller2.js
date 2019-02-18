var  axios  =  require( 'axios' );
exports.connectedServer=function(req,res){
    res.send("collegato, sono andrea");
}
exports.bet=function(req,res){
    axios.post('/bet', { bet:5 })
              .then(function(response){
    
  }); 

}
