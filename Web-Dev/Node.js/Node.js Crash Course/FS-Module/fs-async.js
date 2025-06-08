const fs = require("fs").promises;
const path = require("path");

//define a folder and file path

const folderPath = path.join(__dirname, "productFolder");
const filePath = path.join(folderPath, "productList.pdf");

//create a directory if it doesnt exist

async function createFolder() {
  try {
    await fs.access(folderPath);
  } catch {
    await fs.mkdir(folderPath);
    console.log(folderPath);
  }
}
createFolder();

async function writefile() {
  try {
    await fs.writeFile(filePath, "This is for product lists.\n");
  } catch (error) {
    console.log(error);
  }
}

writefile();

async function appendfile() {
  try {
    await fs.appendFile(filePath, "This is appended for product lists.\n");
  } catch (error) {
    console.log(error);
  }
}

appendfile();

async function readfile() {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    console.log(error);
  }
}
readfile();

//Delete

// async function deletefile() {
//   try {
//     await fs.unlink(filePath);
//     console.log("File Deleted");
//   } catch (error) {
//     console.log(error);
//   }
// }
// deletefile();
