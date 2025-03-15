//----
//! FOR LOOP
//----

// numbers 1-5

for (let i = 0; i <= 5; i++) {
  //console.log(i);
}

//Looping through array to print its elements

const arr = ["apple", "Banana", "Guava", "Kiwa"];

// for (let i = 0; i < arr.length; i++) {
//   //console.log(arr[i]);
// }

//Using Break and Continue

// for (let i = 0; i <= 10; i++) {
//   if (i === 8) {
//     break;
//   }
//    console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 4) {
//     continue;
//   }
//    console.log(i);
// }

// // reverse

// for (let i = 10; i > 0; i--) {
//    console.log(i);
// }

//----
//! FOR Each LOOP
//----

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Numbers.forEach(function (element, index, array) {
//console.log("Element:", element, "Index:", index);
//console.log("array", array);
// });

//Using forEach to sum the elements

// let sum = 0;
// Numbers.forEach(function (num) {
//YOu can give any name to arguments here element --> num
//   sum += num;
// });

//console.log(sum);

//Modifying Array Elements using ForEach

//const squares = [];

// Numbers.forEach(function (num) {
//   squares.push(num * num);
// });

//console.log(Numbers);
//console.log(squares);

//! MAPPING .Map()

// const newNoarr = Numbers.map(function (num, idx, arr) {
//   return num * 10; //If you dont return the array will be filled with undefined
// });

// console.log(newNoarr);
// console.log(Numbers);

// Using map to convert an array of strings to uppercase

// const fruits = ["apple", "pear", "mango"];

// const newfruits = fruits.map(function (word) {
//   return word.toUpperCase();
// });

// console.log(newfruits);

//! .Filter()

// const even = Numbers.filter(function (number) {
//Filter logic here
//   return number % 2 === 0;
// });

// console.log(even);

// const gender = ["male", "female"];

// const male = gender.filter(function (gender) {
//   return gender === "male";
// });
// console.log(male);

//using fileter to remove falsy values from an array

// const mixed = [0, 1, "Apple", "", null];

// const truth = mixed.filter(function (value) {
//   return Boolean(value);
// });

// console.log(truth);

//! Reducing .reduce()

// const sumofNo = Numbers.reduce(function (acc, current) {
////perform logic

//   return acc + current;
// }, 0);

// console.log(sumofNo);

//Using reduce to find the maximum value in an array

// const maxNum = Numbers.reduce(function (acc, current) {
//   if (current > acc) {
//     return current;
//   } else {
//     return acc;
//   }
// }, 0);

// console.log(maxNum);

// Using reduce to count the frequency of elements in an array

// const freq = arr.reduce(function (acc, current) {
//   if (acc[current]) {
//     acc[current] += 1;
//   } else {
//     acc[current] = 1;
//   }
//   return acc;
// }, {});

// console.log(freq);

//---
//! MultiDimensional Array
//---

//!creating 2-D array

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[2][2]);

//! Creating 3-D array

// const threed = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
//   [
//     [9, 10],
//     [11, 12],
//   ],
// ];

// console.log(threed[0][1][1]);
// console.log(threed[1][0][0]);
