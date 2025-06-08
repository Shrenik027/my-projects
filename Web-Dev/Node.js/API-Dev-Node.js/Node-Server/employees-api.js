const http = require("http");
//mimic(database)
const employees = [
  { id: 1, name: "Shrenik" },
  { id: 2, name: "Tejas" },
  { id: 3, name: "Twinkle" },
];
//! 2.Define the Handler
const requesthandler = (req, res) => {
  const { method, url } = req;
  const parts = url.split("/");
  const id = parts[2];
  //Get all employees
  if (method === "GET" && url === "/employees") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(employees));
  }
  //get single emp
  else if (method === "GET" && parts[1] === "employees" && id) {
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(employee));
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "employee not found" }));
    }
  }
  //create new employee
  else if (method === "POST" && url == "/employees") {
    let body = "";
    //Listen to the event of making post request
    req.on("data", (chunk) => {
      body += chunk;
    });
    // send the response
    req.on("end", () => {
      const newEmployee = JSON.parse(body);
      employees.push(newEmployee);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          newEmployee,
          employees,
        })
      );
    });
  }
};

//! 3.Create the Server
const server = http.createServer(requesthandler);

//! 4.Strat the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
