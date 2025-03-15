// to remove fruit from list of fruits

//function to add a new fruit

function addFruit(fruit) {
  const ulEl = document.getElementById("fruitList");
  //create li element

  const li = document.createElement("li");
  li.className = "fruit";
  li.textContent = fruit;
  ulEl.appendChild(li);
}

addFruit("apple");
addFruit("banana");
addFruit("cherry");

//function to delete fruit

function removeFruit(fruit) {
  //select the parent
  const ulEl = document.getElementById("fruitList");

  let fruitFound = false;
  //loopt hrough the fruits to find th fruit

  for (const li of ulEl.children) {
    if (li.textContent === fruit) {
      fruitFound = true;
      //remove the fruit.
      ulEl.removeChild(li);
      break;
    }
  }
  //update the message
  document.getElementById("message").textContent = fruitFound
    ? `${fruit} was Removed`
    : `fruit was not found`;
}
removeFruit("kiwi");
