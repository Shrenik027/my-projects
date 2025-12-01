const express = require("express");
const app = express();
const PORT = 8082;

//?---BUILT_IN_MIDDLEWARES----->
//serve static files
//app.use(express.static())
//!pass incoming data
app.use(express.json());
app.use(express.urlencoded());

//?----APP-LEVEL-MIDDLEWARES---->
//Logging details of every request
app.use((req, res, next) => {
  console.log(req.body);
  console.log("im an Fullstack dev");
  //call next
  next();
});
//Home
app.get("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Welcome to this app",
  });
});

//create a book
app.post("/books", (req, res) => {
  console.log(req.body);
  res.json({
    message: "built in middleware example",
  });
});

//start the server
app.listen(PORT, console.log(`server is running at ${PORT}`));
