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
  //!split the path name
  const pathcomponent = pathname.split("/").filter(Boolean);
  if (pathcomponent[0] === "products" && pathcomponent[1]) {
    //take the pdt id ans send to user
    //perform db querry

    const productId = pathcomponent[1];
    //send to user
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`productId is ${productId}`);
  } else {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`pNOT FOUND`);
  }
};

//! 3.Create the Server
const server = http.createServer(requesthandler);

//! 4.Strat the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
});
