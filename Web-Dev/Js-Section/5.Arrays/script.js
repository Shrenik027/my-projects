//----
//!Creating Array using Array Literal
//----

//sytax

const studentage = [20, 30, 25, 50];
// console.log(studentage);
//Access the first element

const firstAge = studentage[0];
// console.log(firstAge);

//Access the last element
const lastAge = studentage[studentage.length - 1];
//console.log(lastAge);

//Declaring an array of string

const days = ["monday", "tuesday", "wed", "thu", "fri"];
// console.log(days);

//Declaring an array of mix types

const mixedtypes = [42, "life", true];

//declaring an array with empty data

const empty = [];

//----
//!Creating Array using Array Constructor
//----

//Create array with empty data

const emptydata = new Array();
// console.log(emptydata);

//Creating an array with predefined size (5)

const sizedef = new Array(5);
// console.log(sizedef);

//array with element

const fruit = new Array("applr", "banana", "Kiwi");
// console.log(fruit);

//using mixed types

const mixeddata = new Array(23, "yes", false);
// console.log(mixeddata);

//----
//!Creating Array using Array.Of()
//----

//creating array with numbers
const arr = Array.of(1, 2, 3, 4);

//Creating Array with strings

const strarr = Array.of("apple", "Banana", "Kiwi");

//creating mixed array

const mixarr = Array.of("apple", 45, true);

//----
//!Creating Array using Array.from()
//----

//cloning array

const originalarr = [1, 2, 3];
const clonedarr = Array.from(originalarr);
// console.log(clonedarr);

//creating an array from an array like object

const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const converted = Array.from(arrayLike);
// console.log(converted);

//----
//! .push() and .unshift()
//----

const fruits = ["apple", "Banana"];
const newfruits = fruits.push("Kiwi", "Peru");

//unshift

const fruitnew = fruits.unshift("Guava", "mango");
// console.log(fruits);

//! .pop() and .shift()

const popped = fruits.pop();
// console.log(popped);

const shifted = fruits.shift();
// console.log(shifted);

// console.log(fruits);

//! .length()

const length = fruits.length;
// console.log(length);

//modify length of array

fruits.length = 2;
// console.log(fruits);

//----
//! FOR LOOP
//----

// numbers 1-5

for (let i = 0; i <= 5; i++) {
  // console.log(i);
}

//! Array Updated Course

let fruit2 = ["apple", "banana", "strawberry", "kiwi"];
fruit2.push("Pineapple");

let asscessApple = fruit2[0];

console.log();
