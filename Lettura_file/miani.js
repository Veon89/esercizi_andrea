var fs = require('fs');
var d3 = require('d3');
var http = require('http');
var file = './esercizio.txt'

var means = []
var values1 = [];
var values2 = [];
var values3 = [];
var values4 = [];
var values5 = [];


var data = fs.readFileSync(file, 'utf8');
console.log(data)

var lines = data.split('\n');

lines.forEach((line, index) => {

    var readValues = line.split('\t');
    values1.push(parseFloat(readValues[0]).toPrecision(4));
    values2.push(parseFloat(readValues[1]).toPrecision(4));
    values3.push(parseFloat(readValues[2]).toPrecision(4));
    values4.push(parseFloat(readValues[3]).toPrecision(4));
    values5.push(parseFloat(readValues[4]).toPrecision(4));
});

means.push(d3.mean(values1))
means.push(d3.mean(values2))
means.push(d3.mean(values3))
means.push(d3.mean(values4))
means.push(d3.mean(values5))
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("medie "+means);
console.log(means);
})
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
fs.writeFile('nuovofile.txt', means, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });