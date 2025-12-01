const express = require("express");

//!instance

const app = express();
//create the port
const PORT = 8082;

//define the router handler
app.get("/", (req, res) => {
  res.send("Hello!");
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// console.log(app);
