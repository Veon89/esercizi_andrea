const randomFloat = require('random-float');
var input = []; 
var square = [];
for(var i=0; i<5;i++){
    input.push(randomFloat(1,10).toPrecision(1));
}
console.log(input);

// input.map(t=>{
//     square.push(Math.pow(t,2));
// });

square = input.map(t =>{
    return t*t;
})
    

 console.log(square);