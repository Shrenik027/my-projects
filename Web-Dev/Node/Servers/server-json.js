const http = require("http");
//Create a server
const server = http.createServer((req, res) => {
  //set the content type to plain text

  res.setHeader("content-Type", "application/json");
  if (req.url === "/" && req.method === "GET") {
    res.end(JSON.stringify({ message: "WELCOME TO API" }));
    res.statusCode = 200;
  } else if (req.url === "/users" && req.method === "GET") {
    const users = [{ id: 1, name: "Shrenik", id: 2, name: "TEJAS" }];
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } else if (req.url === "/product" && req.method === "GET") {
    const products = [
      { pdtid: 1, pname: "mobiles", pdtid: 2, pname: "Adapter" },
    ];
    res.statusCode = 200;
    res.end(JSON.stringify(products));
  }
});

//Define port

const PORT = 5000;

//Start the server

server.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
  console.log("Press clt+C to stop the server");
});
