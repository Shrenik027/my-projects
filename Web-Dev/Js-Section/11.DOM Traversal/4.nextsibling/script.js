//select Buttons
const contanerEl = document.getElementById("container");

//get all the buttons within in container

const buttonsEl = document.querySelectorAll("button");

// console.log(buttonsEl);

//Loop through each button and change the text of its next sibling
buttonsEl.forEach((button) => {
  const nextEl = button.nextSibling;
  //check if nextSibling is element node
  if (nextEl && nextEl.nodeType === 3) {
    nextEl.textContent = "Changed Text";
  }
});
