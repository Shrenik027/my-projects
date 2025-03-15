//---
//!-- The Concept of Object Being Passed By Reference
//---

//Modifying Objects Through a Different Reference

//Objects are created by reference chenging it from another fun will change the main object

const person1 = { name: "Shrenik", age: 19 };

const person2 = person1;
//!modifying Age
person2.age = 15;

person1.name = "tejas";
//console.log("person2", person2);
//console.log(person1);

//Passing object to a function

const incrementAge = (personObj) => {
  personObj.age += 1;
};

//person Obj

const bob = {
  name: "BOB",
  age: 40,
};
//console.log("Berfore ", bob);
incrementAge(bob);
//console.log("After ", bob);

//--
//!-- Objects in Arrays
//--

//Scenario Managing a List of Students

//list of students where each student is an object with properties like id,name and grade

const student = [
  { id: 1, name: "bob", grade: "A" },
  { id: 2, name: "Alice", grade: "B" },
];
//Accessing Student
const student1 = student[0].name;
//console.log(student1);
//console.log(student);

//Add new student

const addStudent = (id, name, grade) => {
  const newstd = { id, name, grade };
  //push the new student into the students array

  student.push(newstd);
};

addStudent(3, "shrenik", "A+");

//console.log(student);

//Upgrade a student

const updatestudentGrade = (id, newGrade) => {
  //Find the student by id
  const studentFound = student.find((student) => {
    return student.id === id;
  });

  if (studentFound) {
    studentFound.grade = newGrade;
  } else {
    //console.log("student Not  found");
  }
};

updatestudentGrade(2, "F");
//console.log(student);

//--
//!--  Arrays in Objects
//--

// here well create a simple todo list object that has a tasks array property. each object inside the tasks array will have properties like id , description, and completed

const todoList = {
  title: "TODO List App",
  tasks: [
    { id: 1, description: "Buy Groceries", completed: false },
    { id: 2, description: "study", completed: true },
    { id: 3, description: "Lunch", completed: false },
  ],
};
//Accessing Properties
todTitle = todoList.title;
//tasks
const allTasks = todoList.tasks;
//console.log(allTasks);

//Function to add a task

const addTask = (description) => {
  //get new id
  const newId = todoList.tasks.length + 1;
  const newTask = {
    id: newId, //also math.random() can be used
    completed: false,
    description,
  };
  //push new task to orignal task
  todoList.tasks.push(newTask);
};

//Callling Fun
addTask("Programming");

//console.log(todoList);

//Function to mark a task as completed

const markAsCompleted = (id) => {
  //find tassk
  const foundTask = todoList.tasks.find((task) => task.id === id);

  if (foundTask) {
    foundTask.completed = true;
  } else {
    console.log("task Not Found");
  }
};

markAsCompleted(1);
//console.log(todoList);

//--
//!-- Iterating using ForEach
//--

const fruits = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "yellow" },
  { name: "Cherry", color: "red" },
];

fruits.forEach((currentVal, index, arr) => {
  //console.log(currentVal, index, arr);
});

//Case Study: Online Shopping Cart Calculation

//Suppose you are working on an e-commerce website and you need to calculate the total price of the items in a user's shopping cart. Each item in the cart is represented as an object in an array with properties such as name ,price, and quantity. your task is to calculate the total cost of items in the cart of items in the cart and also list the names of all items in the cart for the users review.

//Initial data
const cart = [
  { name: "Laptop", price: 2000, qty: 1 },
  { name: "Mobile", price: 200, qty: 2 },
  { name: "Headphones", price: 100, qty: 3 },
  { name: "Keyboards", price: 200, qty: 2 },
];
//calculate the total cost of the items in the cart

totalcost = 0;
cart.forEach((item) => {
  totalcost += item.price * item.qty;
});

//console.log(totalcost);

//List all the names of prodeucts

let productNames = [];

cart.forEach((item) => {
  productNames.push(item.name);
});

//console.log(productNames);

//calculate total items

let totalitems = 0;

cart.forEach((item) => {
  totalitems += item.qty;
});

//console.log(totalitems);

//--
//!-- Iterating using Map()
//--

// Suppose we have an array of products in a shopping cart. Each object represents a product with a name and a price. we want to apply a 10% discount to all products.

//initial Data

const shoppingCart = [
  { name: "Laptop", price: 2000, qty: 1 },
  { name: "Mobile", price: 200, qty: 2 },
  { name: "Headphones", price: 100, qty: 3 },
  { name: "Keyboards", price: 200, qty: 2 },
];

//Add 10% discount

const discountedCart = shoppingCart.map((pdt) => {
  return {
    name: pdt.name,
    price: pdt.price * 0.9,
  };
});

//console.log(discountedCart);

//get all the product names only

const productNamesOnly = shoppingCart.map((pdt) => {
  return {
    name: pdt.name,
  };
});
//console.log(productNamesOnly);
//console.log(shoppingCart);

//--
//!-- Iterating using filter()
//--

//Filtering Active uers

const users = [
  { id: 1, isActive: false, name: "shrenik" },
  { id: 2, isActive: true, name: "duck" },
  { id: 3, isActive: false, name: "openheimer" },
];

//filtering active users

const filtered = users.filter((user) => {
  return user.isActive === true;
});

//console.log(filtered);

//Transactions above certain Amounts

const Transactions = [
  { is: 1, amount: 50 },
  { is: 2, amount: 150 },
  { is: 3, amount: 200 },
];

//filtering amount above 100
const amt = Transactions.filter((amount) => {
  return amount.amount > 100;
});

//console.log(amt);

//--
//!-- Transformation and Manipulation using splice()
//--

//Remove Inactive Users

const usersArr = [
  { id: 1, isActive: false, name: "shrenik" },
  { id: 2, isActive: true, name: "duck" },
  { id: 3, isActive: true, name: "openheimer" },
];

//Find the index of user to be removed

const indextoRemove = usersArr.findIndex(
  (user) => user.id === 1 && !user.isActive
);

//use splice()

if (indextoRemove !== -1) {
  usersArr.splice(indextoRemove, 1);
}

//console.log(usersArr);

//Managing Playlist

//case Study: You're developing a playlist features for a music streaming app. users can add and remove songs to their playlists. Each playlist is an array of song objects. you have to implement features that allow the userr to delete a song , move a song up or down in playlist, and insert a song at a particular index.

//!soln

const playlist = [
  { id: "s1", title: "song 1", artist: "Artist A" },
  { id: "s2", title: "song 2", artist: "Artist B" },
  { id: "s3", title: "song 3", artist: "Artist C" },
  { id: "s4", title: "song 4", artist: "Artist D" },
];

//Remove song of id s1

const songindextoRemove = playlist.find(function (song) {
  return song.id === "s1";
});

//using splice()
// if (songindextoRemove !== -1) {
//   playlist.splice(songindextoRemove, 1);
// }

//Move a song of id of s1 to third position

const indexToMove = playlist.findIndex((song) => song.id === "s1");
if (indexToMove !== -1) {
  const [songToMove] = playlist.splice(indexToMove, 1);
  playlist.splice(2, 0, songToMove);
}
//it means that remove ths song with id 1 and move it to 'songToMove'.

//insert new song

const newSong = { id: "s5", title: "song5", Artist: "E" };

playlist.splice(1, 0, newSong);

//console.log(playlist);

//--
//!--Object.assign
//--

//updating properties of students in a class

const studentsArr = [
  { id: 1, name: "Shrenik", grade: "A" },
  { id: 2, name: "BOB", grade: "B" },
];

//Grade update

const gradesUpdate = [{ garde: "A+" }, { grade: "A" }];

//Update the students

const updatedStudents = studentsArr.map((student, index) => {
  return Object.assign({}, student, gradesUpdate[index]);
});

//console.log(updatedStudents);

//--
//!--Search and filter using Find()
//--

//Finding First patient with a specific disease Ailment in a hospital database

const patients = [
  { id: 101, name: "sarah", disease: "cold" },
  { id: 102, name: "Tom", disease: "Fever" },
  { id: 103, name: "duck", disease: "cold" },
];

//patient with cold

const patientwithcold = patients.find((patient) => patient.disease === "cold");
//console.log(patientwithcold);

//--
//!--Search and filter using Some()
//--

const patients2 = [
  { id: 101, name: "sarah", disease: "cold" },
  { id: 102, name: "Tom", disease: "Fever" },
  { id: 103, name: "duck", disease: "cold" },
];

//patient with cold

const patientwithcold2 = patients2.some(
  (patient) => patient.disease === "cold"
);

//console.log(patientwithcold2);

//--
//!--Search and filter using Every()
//--

const students = [
  { id: 1, name: "Shrenik", grade: "A" },
  { id: 2, name: "BOB", grade: "B" },
  { id: 3, name: "Sharley", grade: "A" },
];

const allpassed = students.every((student) => student.grade !== "F");

console.log(allpassed);
