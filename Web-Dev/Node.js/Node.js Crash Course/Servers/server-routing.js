const http = require("http");
//Create a server
const server = http.createServer((req, res) => {
  //set the content type to plain text

  res.setHeader("content-Type", "text/plain");
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("WELCOME TO HOME PAGE");
  } else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.end("WELCOME TO ABOUT PAGE");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.statusCode = 200;
    res.end("WELCOME TO CONTACT PAGE");
  } else {
    res.statusCode = 401;
    res.end("$)$-Page Not Found");
  }
});

//Define port

const PORT = 5000;

//Start the server

server.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
  console.log("Press clt+C to stop the server");
});
