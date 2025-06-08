//! 1.Import Required Modules

const http = require("http");
const url = require("url");
// console.log(http);

//! home/
//! /about

//! 2.Define the Handler
const requesthandler = (req, res) => {
  const data = {
    id: 123,
    name: "shrenik",
    email: "shrenikdubal@gmail.com",
  };
  //set response header to application/json
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(data));
};

//! 3.Create the Server
const server = http.createServer(requesthandler);

//! 4.Strat the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
});
