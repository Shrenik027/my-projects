//--
//!-- Creating objects using  Object Literals
//--

//!Define an object to represent a book in a book store
//title
//author
//price
//available or not
//pages

const book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  available: true,
  price: 9.99,
};
// console.log(book);

//!Accessing object properties using dot notation

// const booktitle = book.title;

// console.log(booktitle);
// console.log(book.price);

//!Accessing object properties using Bracket notation

// const Booktitle = book["title"];
// console.log(Booktitle);
// console.log(book["price"]);

//properties with speacial Characters

const person = {
  Firstname: "Shrenik",
  lastname: "Dubal",
};
//console.log(person["Firstname"]); //not possible with .

// Using Expressions

const task = {
  description: "Finish Homework",
  isCompleted: false,
};

const query = "isCom" + "pleted";

//console.log(task[query]);

//--
//!-- Adding Properties to objects
//--

//Add user role

const userprofile = {
  username: "SHrenik",
  email: "shrenik9477@gmail.com",
};

//userprofile.role = "admin";

userprofile["role"] = "admin";
// console.log(userprofile);

//Adding properties with speacial Characters

const book1 = {
  title: "Harry Potter",
  //"Publication year": 2024, // Space is not allowed so put it in quotes
};

book1["Publication year"] = 2025;
// console.log(book1);

//Adding Nested Properties

const emp = {
  name: "Shrenik",
  department: "HR",
};
//add adderess
emp.adderess = {
  city: "Karad",
  state: "Maharashtra",
};
// console.log(emp.adderess.city);

//! Objects Updated

const person1 = {
  name: "Alice",
  age: 23,
  city: "new York",
};

//Adding properties to object
//!Dot Notation
person1.ismarried = false;

//!Bracket Notation
person1["Hobby"] = "Coading";

person1["courses"] = ["js", "html", "css", "node"];
// console.log(person1);

//! Object.keys

const keys = Object.keys(person1);
// console.log(keys);

//! Object.values

const car = {
  brand: "honda",
  model: "Accord",
  year: "2025",
};

const values = Object.values(car);
// console.log(values);

//! hasOwnProperties

const hasProperty = car.hasOwnProperty("brand");
// console.log(hasProperty);

//! Object.assign
const target = { name: "Thomas" };
const src = { age: 20 };
Object.assign(target, src);
// console.log(target);

//!Delete operator

delete car.brand;
// console.log(car);

//!object.freeze

Object.freeze(car);

//modify
car.make = "Nissaan";
// console.log(car);

//!Nesting Object

const user = {
  name: "Twinkle",
  age: 30,
  adderess: {
    street: "123 Main Street",
    city: "New York",
    country: {
      name: "India",
      state: "Maharashtra",
    },
  },
};
// console.log(user);

//Access Nested obj prop

const userName = user.name;
const userAdd = user.adderess.street;
const userCountry = user.adderess.country.name;
// console.log(userCountry);

const countryName = user["adderess"]["country"]["name"];
// console.log(countryName);

//!Object in an Array

const usersObj = [
  { name: "Alice", age: 28, country: "USA" },
  { name: "Goku", age: 45, ciry: "India" },
];
// console.log(usersObj);

//! Accessing Properties

const firstUser = usersObj[0];
// console.log(firstUser);

//!Add new User to array

usersObj.unshift({ name: "Devil", age: 100000, city: "Hell" });
// console.log(usersObj);

//!Modify the arrays of Object

//update Alice name to Kira

usersObj[1].name = "Kira";
// console.log(usersObj);
