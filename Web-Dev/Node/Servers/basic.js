const http = require("http");
//Create a server
const server = http.createServer((req, res) => {
  //log request details
  console.log(`Received ${req.method} request for:${req.url}`);
  //Set Status code and headers

  res.writeHead(200, { "content-type": "text/plain" });
  //send the response
  res.end("hello World this is my first node server ");
});

//Define port

const PORT = 5000;

//Start the server

server.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
  console.log("Press clt+C to stop the server");
});
