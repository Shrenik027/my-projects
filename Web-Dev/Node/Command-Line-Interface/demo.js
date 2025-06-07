// console.log("CMD");
function Greet(name) {
  console.log(`Good day ${name}!`);
}

const getUser = process.argv[2];
Greet(getUser);
// Greet("shrenik");
//console.log(process.argv[2]);
