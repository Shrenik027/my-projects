const express = require("express");
const path = require("path");
const app = express();
const PORT = 8082;

//serve the static files
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//Render Home route
app.get("/", (req, res) => {
  res.render("home");
});

//Render About page
app.get("/about", (req, res) => {
  res.render("about");
});

//Render contact page
app.get("/contact", (req, res) => {
  res.render("contact");
});

//Render Gallery page
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

//Render User data
app.get("/user", (req, res) => {
  //dummy user data
  const userData = {
    username: "Shrenik",
    age: "21",
    isPremiumuser: false,
    email: "shrenik9477@gmail.com",
    isLoggedIn: true,
  };
  res.render("userData", userData);
});

//Render Products

app.get("products", (req, res) => {
  //dummy product data
  const products = [
    { name: "Laptop", price: 999 },
    { name: "phone", price: 585 },
    { name: "Tablet", price: 534 },
  ];
  res.render("products", { products });
});

//!Start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
