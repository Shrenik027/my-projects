//Function to create a new task

function createTask(newTask) {
  ///Create a new div element to hold the task
  const taskEl = document.createElement("div");
  //add new css to the created element
  //   taskEl.setAttribute("class", "task");
  taskEl.className = "task";
  //   console.log(taskEl);
  //create a text node containing the task text
  const textNodeEl = document.createTextNode(newTask);
  //Appemd the text node to the div element
  taskEl.appendChild(textNodeEl);
  //Finally append the task to container

  document.getElementById("container").appendChild(taskEl);
}
createTask("D");
createTask("u");
createTask("B");
createTask("a");
createTask("L");
