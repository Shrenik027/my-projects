const express = require("express");
const app = express();
const PORT = 8082;

//Receiving incoming data from client config
app.use(express.json());

//demi data
const books = [
  { id: "1", title: "The Great Gatsby", author: "F.Scott" },
  { id: "2", title: "The Moby Dic", author: "Herman" },
  { id: "3", title: "The MERN Stack", author: "mysntech" },
];

//Home Route
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to my first book API using Express",
    data: "Shrenik",
  });
});

//Route for Fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "books fetched sucessfully",
    data: books,
  });
});

//Route to fetch single book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === id);
  console.log(bookFound);

  if (!bookFound) {
    return res.json({
      status: "failed",
      message: `book with id ${id} not found`,
    });
  }

  res.json({
    status: "success",
    message: "books fetched sucessfully",
    data: bookFound,
  });
});

//create a book
app.post("/books", (req, res) => {
  console.log(req.body);
  const newPost = req.body;
  books.push(newPost);

  res.json({
    status: "success",
    message: "books created sucessfully",
    data: books,
  });
});

//start the server
app.listen(PORT, console.log(`server is running at ${PORT}`));
