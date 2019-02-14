fs = require('fs');
var d3 = require('d3');
var http = require('http');
var file ='./input.txt'
var data = fs.readFileSync(file, 'utf8');
var val1 = [];
var val2 = [];
var val3 = [];
var val4 = [];
var val5 = [];
var means = [];
var sums = [];

var lines = data.split('\n');
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

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("medie "+means + '\n' + "somme "+sums);
    
console.log(means);
console.log(sums);
})

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');