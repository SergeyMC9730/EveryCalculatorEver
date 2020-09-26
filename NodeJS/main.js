var readline = require('readline');
var rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
var data = {
  calculate: {
    number1: 0,
    number2: 0,
    act: ""
  },
  level: 0
}
process.stdout.write("First number: ");
rd.on('line', ln => {
  if(data.level == 2){
    data.calculate.act = ln
    eval(`var result = ${data.calculate.number1} ${data.calculate.act} ${data.calculate.number2}; console.log("Result: " + result);`);
  }
  if(data.level == 1){
    data.calculate.number2 = parseInt(ln);
    data.level++
    process.stdout.write("Act: ");
  }
  if(data.level == 0){
    data.calculate.number1 = parseInt(ln);
    data.level++
    process.stdout.write("Second number: ");
  }
})
