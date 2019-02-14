fs = require('fs');

var wstream = fs.createWriteStream('input.txt');
var randomFloat = require('random-float');


for(var i=0; i<1000000;i++){    
    for(let i=0; i<5;i++){
      wstream.write(randomFloat(1,100)+" ")
        
    }
    wstream.write( "\n")
}
 wstream.on('close',function(){

 });

wstream.close(console.log.bind(null,"close2"));














