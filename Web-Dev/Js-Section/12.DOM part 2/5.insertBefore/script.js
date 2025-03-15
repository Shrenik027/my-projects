//manage the lsit of students based on their grades

//function to add new student

function addStudent(name, grade) {
  //crate a new div element to hold the student info

  const studentEl = document.createElement("div");
  //add css to it

  studentEl.className = "student";

  //create text node
  const studentTextNode = document.createTextNode(`${name}: ${grade}`);

  //append the text node to div tag

  studentEl.appendChild(studentTextNode);

  //select the cointainer
  const containerEl = document.getElementById("StudentList");

  let beforeNode = null;

  //loop through existing students to find the correct position

  for (const child of containerEl.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);
    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }
  //insert the new student

  containerEl.insertBefore(studentEl, beforeNode);
}
addStudent("Shrenik", 100);
addStudent("tk", 89);
addStudent("Shre", 21);
