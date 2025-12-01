//
//!-- ARROW FUNCTION
//

//Basic syntax

// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b;
const result = multiply(2, 3);

//Block Body Syntax

// const greet = (name) => {
//   return `Hello, ${name}`;
// };

const greet = (name) => `Hello, ${name}`;

const greetFn = greet("Shrenik");

//Single Parameter , no parentheses

const square = (x) => x * x;

const squareFn = square(5);

//No parameters

const random = () => Math.random();

//console.log(random);

// Object literal Return

const getUsr = () => {
  return {
    name: "Shrenik",
    age: 19,
  };
};

const getUser = () => ({ name: "shrenik", age: 19 });
const getUserFn = getUser();

//
//!- "LET" and "Const" in Js
//

//Hoisting
//using Var

function hoistingIssue() {
  console.log(a); //undefined
  var a = 10;
  //console.log(a);
}

//hoistingIssue();

//using let

function hoistingIssue() {
  console.log(a); //undefined
  let a = 10;
  //console.log(a);
}

//hoistingIssue();

//Block Scope

//using var

for (var i = 0; i < 3; i++) {
  //console.log(i);
}

//console.log(i);

//using let

for (let i = 0; i < 3; i++) {
  //console.log(i);
}

//console.log(i);

//Immutability

//using var and let

// const x = 10; //Error for const but not for let and var

// x = 20;

// console.log(x);

//
//!- DESTRUCTURING
//

//basic

const num = [1, 2, 3, 4];

const [first, second, third, fourth] = num;

//console.log(fourth);

//swap variables

let a = 1;
let b = 2;

[a, b] = [b, a];
//console.log(a, b);

//Object Destructuring

//Extract User data

const { name, age, email } = {
  name: "shrenik",
  age: 10,
  email: "email@gmail.com",
};

//console.log(user.name);
//console.log(email); //easier

//Destructuring in Function Parameters

function greet2({ name, age }) {
  console.log(`hello, ${name}, your age is ${age}`);
}
const myUsr = {
  name: "Shrenik",
  age: 19,
};
greet2(myUsr);

//Nested Destructuring

const {
  id,
  info: { name1, age1 },
} = {
  id: 1,
  info: {
    name1: "shrenik",
    age1: 10,
  },
};

console.log(age);
