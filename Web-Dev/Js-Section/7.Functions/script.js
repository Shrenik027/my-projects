//--
//!--Syntax of function declaration
//--

//hello
function sayHello() {
  //Logic goes here
  //write js logic
  console.log("hello");
}

//greeting
// function greetings() {
//   console.log("Habibi");
// }

//show date

function showdate() {
  const currentDate = new Date();
  console.log(`Todays date is ${currentDate}`);
}

//Calling the function

// showdate();
// sayHello();
// greetings();

//--
//!-- Function Expression
//--

const hello = function () {
  console.log("Hello World");
};

//invoke

//hello();

// const greetings = function () {
//   console.log("Welcome");
// };

//invoke

//greetings();

//Even or odd

const num = function () {
  const number = 5;
  if (number % 2 === 0) {
    console.log("Its even");
  } else {
    console.log("its Odd");
  }
};

//num();

//--
//!-- Anonymous Functions
//--

// function(){
//   console.log('Welcome');
// }

//--
//!--Immediately Invoked Function Expression [IIFE]
//--

(function () {
  // console.log("welcome");
})();

//calculating Square of a number

(function () {
  const num = 5;
  const square = num * num;
  //console.log(square);
})();

//--
//!--Function Parameters vs Function Arguments
//--

//DRY-Dont Repeat Yourself

const greetings = function (name, age) {
  //console.log(name);
  //console.log(age);
  console.log(`Welcome ${name} your age is ${age}`);
};

//greetings("Shrenik", 19);

//--
//!--Default Parameters
//--

const greet = function (name = "Guest", age = 19) {
  console.log(`my name is ${name} and my age is ${age}`);
};
//greet("Shrenik", 18);

//Default Parameter with Expression

const multiply = function (a, b = a * 2) {
  const result = a * b;
  console.log(`the result is ${result}`);
};

//multiply(2);

//--
//!--Return Statement
//--

const add = function (a, b) {
  return (results = a + b);
};

const addResult = add(2, 3);

console.log(addResult);

//!Return Statement with Conditionals

function isEven(num) {
  if (num % 2 === 0) {
    return "it is even";
  } else {
    return " its odd ";
  }
}

//console.log(isEven(25));

//--
//!--Function Scope
//--

//Local Variable in Function

function showLocalVar() {
  const localVar = "I Am A LOCAL VARIABLE";
  console.log(localVar);
}

showLocalVar();
//console.log(localVar); // Reference Error

function Outerfn() {
  const outervar = "i am outer variable";
  console.log(outervar);
  //console.log(innervar);  //ref error
  function Innerfn() {
    const innervar = "i am inner Variable";
    console.log(outervar);
    console.log(innervar);
  }
  Innerfn();
}
Outerfn();
