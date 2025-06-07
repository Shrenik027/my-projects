//import module

// import add from "./math.mjs";

// console.log(add(10, 20));

import math from "./math.mjs";

const add = math.add(10, 28);
const sub = math.sub(28, 10);

console.log(add, sub);
console.log(math.name);
