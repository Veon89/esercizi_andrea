const fs = require('fs');
const d3 = require('d3');
const http = require('http');
const randomFloat = require('random-float');
const file = './input.txt'

var val = [[], [], [], [], []];
var means = [];

function write(file,callback) {
  var wstream = fs.createWriteStream(file);
    for (var i = 0; i < 100; i++) {
      let row = []
      for (let i = 0; i < 5; i++) {
        row.push(randomFloat(1, 100) + " ");
      }
      wstream.write(row.join(",") + "\n")
    }
    wstream.on('close', function () {
      callback()
    });

    wstream.close(console.log.bind(null, "close2"));
  
      // chiudi
  
    // chiami il callback
  
  }

function reader(file){
  var data = fs.readFileSync(file, 'utf8');
  var lines = data.split('\n');
  
  lines.forEach((line, index) => {
    var readV = line.split(',');
    readV.map((value,index) => {
      val[index].push(value)
    })  

  });
  val.map(t => {
    means.push(d3.mean(t));
  })
  console.log(means);
}

write("./input.txt",function(){
  reader("./input.txt");
})