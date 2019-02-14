var fs = require('fs');

var d3 = require('d3-array');
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];
var median1 = [];


lineReader.eachLine('esercizio.txt', function(line, last) {
  //console.log(line);
  var splitted = (line.split(" "));
  //console.log(splitted);
  if (last) {
    return false; 
  }
  
 splitted.map(function(item){
      var tabs = (item.split('\t'));
     //console.log("0",tabs[0], "1",tabs[1], "2",tabs[2],"3", tabs[3],"4", tabs[4], "5", tabs[5], "6", tabs[6]);
    arr1.push(parseFloat(tabs[0]));
    arr2.push(parseFloat(tabs[1]));
    arr3.push(parseFloat(tabs[2]));
    arr4.push(parseFloat(tabs[3]));
    arr5.push(parseFloat(tabs[4]));
    });

    median1[0] = d3.mean(arr1);
    median1[1] = d3.mean(arr2);
    median1[2] = d3.mean(arr3);
    median1[3] = d3.mean(arr4);
    median1[4] = d3.mean(arr5);
    console.log(median1);
   
    // for (var i=0; i < arr1.length; i++) {
    //     parseFloat(arr1[i]);  
    //     //console.log(arr1.length);
    //     //console.log(arr1[i]);

    //    };
    // for (var i=0; i < arr2.length; i++) {
    //     parseFloat(arr2[i]);      
    //    };
    // for (var i=0; i < arr3.length; i++) {
    //     parseFloat(arr3[i]);      
    //    };
    // for (var i=0; i < arr4.length; i++) {
    //     parseFloat(arr4[i]);      
    //    };
    // for (var i=0; i < arr5.length; i++) {
    //     parseFloat(arr5[i]); 
            
    //    };
       //console.log(d3.median(arr1));
       
       //console.log(d3.median(arr2));
       //console.log(d3.median(arr3));
       //console.log(d3.median(arr4));
       
});

 
  

  
