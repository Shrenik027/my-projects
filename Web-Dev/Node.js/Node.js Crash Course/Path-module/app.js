const { log } = require("console");
const path = require("path");

//Getting file name from a path
console.log(path.basename("/users/files/test.txt"));

//Directory name
console.log(path.dirname("/users/files/test.txt"));

//file extention
console.log(path.extname("/users/files/test.txt"));

//!join paths (work across operating systems)
console.log(path.join("/usser", "/files", "test.txt"));

//!getting absolute paths
console.log(path.resolve("test.txt"));

//Access special path properties

console.log(__filename);
console.log(__dirname);
