//! 1.Import Required Modules

const http = require("http");
const url = require("url");
// console.log(http);

//! home/
//! /about

//! 2.Define the Handler
const requesthandler = (req, res) => {
  //pass the url
  const passedUrl = url.parse(req.url, true);
  const pathname = passedUrl.pathname;
  const queryParameters = passedUrl.query;

  res.writeHead(200, { "content-type": "text/plain" });
  res.end(`Welcome`);
};

//! 3.Create the Server
const server = http.createServer(requesthandler);

//! 4.Strat the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
});
