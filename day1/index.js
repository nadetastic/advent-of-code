var fs = require('fs');

var inputData = fs.readFileSync('input.txt').toString().split("\n");
var values = []
var currentSum = 0;

//Part 1
for ( i in inputData) {
    if(inputData[i].length) {
        currentSum = currentSum + Number(inputData[i])
    } else {
        values.push(currentSum)
        currentSum = 0;
    }
}
console.log(values.sort((a, b) => {return b - a}))

//Part 2
var sorted = values.sort((a, b) => {return b - a})
var top3 = 0

for ( i in sorted.slice(0,3)){
    top3 += sorted.slice(0,3)[i]
}
console.log(top3)