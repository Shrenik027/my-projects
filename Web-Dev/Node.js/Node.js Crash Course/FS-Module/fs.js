const fs = require("fs");
const path = require("path");

//define a folder and file path

const folderPath = path.join(__dirname, "studentsFolder");
const filePath = path.join(folderPath, "studentList.pdf");

//create a directory if it doesnt exist

if (!fs.existsSync(folderPath)) {
  //create folder
  fs.mkdirSync(folderPath);
  console.log("folder created");
}

//create and write to file

fs.writeFileSync(filePath, "Lis of Students\n");

//append more content

fs.appendFileSync(filePath, "This is appened Line.\n");

//Read file content

const content = fs.readFileSync(filePath, "utf-8");
console.log(content);

//delete a file
// fs.unlinkSync(filePath);
