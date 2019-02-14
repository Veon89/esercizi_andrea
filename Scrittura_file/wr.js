const fs = require('fs');
const d3 = require('d3');
const http = require('http');
const randomFloat = require('random-float');

const file ='./input.txt'

var val1 = [];
var val2 = [];
var val3 = [];
var val4 = [];
var val5 = [];
var means = [];
var sums = [];

var wstream = fs.createWriteStream('input.txt');


for(var i=0; i<100;i++){    
    for(let i=0; i<5;i++){
      wstream.write(randomFloat(1,100)+" ")
        
    }
    wstream.write( "\n")
}

wstream.close(console.log.bind(null,"close2"));


wstream.on('close',function(){
  var data = fs.readFileSync(file, 'utf8');
  var lines = data.split('\n');

  // console.log('di seguito le linee che ho letto');
  // console.log(lines);

  lines.forEach((line,index) => {
    var readV = line.split(' ');
    val1.push(parseFloat(readV[0]).toPrecision(16))
    val2.push(parseFloat(readV[1]).toPrecision(16))
    val3.push(parseFloat(readV[2]).toPrecision(16))
    val4.push(parseFloat(readV[3]).toPrecision(16))
    val5.push(parseFloat(readV[4]).toPrecision(16))
});

means.push(d3.mean(val1));
means.push(d3.mean(val2));
means.push(d3.mean(val3));
means.push(d3.mean(val4));
means.push(d3.mean(val5));

sums.push(d3.sum(val1));
sums.push(d3.sum(val2));
sums.push(d3.sum(val3));
sums.push(d3.sum(val4));
sums.push(d3.sum(val5));

console.log('medie');
console.log(means);
console.log('somme');
console.log(sums);

});





function reader(){
  // la lettura
}

function write(nomefile, callback){

// scrivi

// chiudi

// chiami il callback

}


write(file, reader);