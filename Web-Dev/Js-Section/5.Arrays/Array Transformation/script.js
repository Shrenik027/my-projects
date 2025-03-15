//! ForEach()

// let numbers = [1, 2, 3, 4];

// const newNumbers = numbers.forEach(function (num) {
//   const doubled = num * 2;
//   console.log(doubled);
// });
// cannot Return an Array
// console.log(newNumbers);

//Array of Objects

// const products = [
//   { name: "Laptop", stock: 5, price: "50000" },
//   { name: "smartphones", stock: 50, price: "15000" },
//   { name: "mouse", stock: 75, price: "500" },
// ];

// products.forEach((individualProduct) => {
//     console.log(
//     `Product:${individualProduct.name},Stock:${individualProduct.stock}`
//   );
// });

//! map()
// Creates a new Array
//transform the Elements

let numbers = [1, 2, 3, 4];

const doubledArray = numbers.map((num) => {
  return num * 2;
});

// console.log("Doubled", doubledArray);
// console.log("Original", numbers);

const products = [
  { name: "Laptop", stock: 5, price: "50000" },
  { name: "smartphones", stock: 50, price: "15000" },
  { name: "mouse", stock: 75, price: "500" },
];

//Apply 10% discount

const discounted = products.map((product) => {
  return {
    name: product.name,
    stock: product.stock,
    price: product.price * 0.9,
  };
});

// console.log(discounted);

//!=====reduce()====
//.reduce(callbackfun,initializer)
const numbers1 = [1, 2, 3, 4, 5, 6];

// numbers1.reduce((accumulator, currentvalue) => {
//   console.log("acc", accumulator);
//   console.log("curr", currentvalue);
// }, 0);

const totalSum = numbers1.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 10);

// console.log(totalSum);
// calculate total inventory val
const products2 = [
  { name: "Laptop", stock: 5, price: "50000", isoutofstock: false },
  { name: "smartphones", stock: 50, price: "15000", isoutofstock: true },
  { name: "mouse", stock: 75, price: "500", isoutofstock: true },
];

const inventory = products2.reduce((acc, product) => {
  return acc + product.stock * product.price;
}, 0);

// console.log(inventory);

//! find()

const numbers2 = [1, 2, 3, 4, 5, 6];

const foundNo = numbers2.find((num) => {
  return num > 3;
});
console.log(foundNo);
