//! 1.Import Required Modules

const http = require("http");
// console.log(http);

//! 2.Define the Handler
const requesthandler = (req, res) => {
  // console.log(req);

  //send response
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello World this is my first node server ");
};

//! 3.Create the Server
const server = http.createServer(requesthandler);

//! 4.Strat the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
});
