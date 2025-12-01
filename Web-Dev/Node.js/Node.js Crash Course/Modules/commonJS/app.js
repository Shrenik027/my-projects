//Import the entire math module
// const math = require("./math.js");

// const addresult = math.add(10, 20);
// const subresult = math.sub(30, 10);

// console.log(addresult);
// console.log(subresult);

const { add, sub } = require("./math");

console.log(add(20, 30), sub(30, 10));
