var fs = require('fs');

var inputData = fs.readFileSync('input.txt').toString().split("\n");
var values = []
var currentSum = 0;

for(i in inputData) {
    if(inputData[i].length) {
        currentSum = currentSum + Number(inputData[i])
    } else {
        values.push(currentSum)
        currentSum = 0;
    }
}

console.log(values.sort(function(a, b){return b - a}))